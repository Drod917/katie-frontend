import React from "react";
import Reaptcha from "reaptcha";
import { FormControl, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const isResponseOk = (res) => {
    return !(res.status !== 200 && res.status !== 201);
  }

const createBooking = async (booking) => {
    const requestBody = {
        query: `
            mutation CreateBooking(
                $fullname: String!,
                $phone: String!,
                $email: String!
                $date: String!,
                $service: String!,
                $comment: String!,
            )   {
                createBooking(bookingInput: {
                    fullname: $fullname,
                    phone: $phone,
                    email: $email,
                    date: $date,
                    service: $service,
                    comment: $comment
                    }) {
                        _id
                        fullname
                        phone
                        email
                        date
                        service
                        comment
                        confirmed
                    }
                }
        `,
        variables: {
            ...booking
        }
    };

    try {
        const response = await fetch('http://localhost:8002/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
            'Content-Type': 'application/json',
            }
        });

        if (!isResponseOk(response)) {
            throw new Error('Create Event Failed!');
        }

        const { data } = await response.json();
        // There may be an edge case where there's a failing client token
        if (!data.createBooking) {
            console.log("Authentication Error");
            return false;
        }
        return { ...data.createBooking };
    } catch (e) {
    console.log(e);
    return false;
    }
}

const BookingForm = () => {
    const phoneRegExp = /(^([1-9]{3}[-]?)([1-9]{3}[-]?)([1-9]{4})$)|(^\(([1-9]{3}\)[-]?)([1-9]{3}[-]?)([1-9]{4})$)/
    const [verified, setVerified] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const onVerify = e => {
        setVerified(true);
      };
    const onVerifyExpire = e => {
        setVerified(false);
    };
    const onSubmitted = e => {
        setSubmitted(true);
    }


    return (
        <Formik
            initialValues={{ fullname: '', phone: '', email: '', date: '', service: 'Styling', comment: '' }}
            validationSchema={Yup.object({
                fullname: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                phone: Yup.string()
                    .matches(phoneRegExp, 'Ex. 012-345-6789')
                    .required('Required'),
                email: Yup.string().email(' ').required('Required'),
                date: Yup.date().required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    createBooking(values);
                }, 400);
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form>
                    <FormGroup controlId="fullname">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.fullname}
                            onChange={handleChange}
                            isValid={touched.fullname && !errors.fullname}
                            isInvalid={touched.fullname && errors.fullname}/>
                        {/* ErrorMessage name references validationSchema */}
                        {/* <ErrorMessage name="fullname"/> */}
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="phone">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            isValid={touched.phone && !errors.phone}
                            isInvalid={touched.phone && errors.phone}/>
                        {/* ErrorMessage name references validationSchema */}
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && errors.email}/>
                        {/* ErrorMessage name references validationSchema */}
                        {/* <ErrorMessage name="email"/> */}
                        <FormControl.Feedback type="invalid">
                            {values.email === "" ? "Required" : "Invalid Email Address"}
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="date">
                        <FormLabel>Date</FormLabel>
                        <FormControl 
                            size="md"
                            type="date"
                            value={values.date}
                            onChange={handleChange}
                            isValid={touched.date && !errors.date}
                            isInvalid={touched.date && errors.date}/>
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="service">
                        <FormLabel>Service</FormLabel>
                        <FormControl 
                            size="md"
                            as="select"
                            onChange={handleChange}
                            value={values.service}
                            >
                                <option>Styling</option>
                                <option>Coloring</option>
                                <option>Cutting</option>
                        </FormControl>
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="comment">
                        <FormLabel>Comment</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.comment}
                            onChange={handleChange}
                            // isValid={touched.comment && !errors.comment}
                            // isInvalid={touched.comment && errors.comment}
                            />
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <Reaptcha
                        sitekey="6Lc1RPscAAAAAHf_9GsfVDZ1Ru2GD9WpL9FD2weT"
                        onVerify={onVerify}
                        onExpire={onVerifyExpire}
                    />
                    <Row className="justify-content-center" style={{ paddingTop:"2.5rem" }}>
                        <button className="btn-primary btn-lg" type="submit" disabled={!verified}>Submit</button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

BookingForm.propTypes = {
};

BookingForm.defaultProps = {
};

export default BookingForm;