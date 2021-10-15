import React from "react";
import { FormControl, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {

    const phoneRegExp = /(^([1-9]{3}[-]?)([1-9]{3}[-]?)([1-9]{4})$)|(^\(([1-9]{3}\)[-]?)([1-9]{3}[-]?)([1-9]{4})$)/

    return (
        <Formik
            initialValues={{ fullName: '', phoneNumber: '', email: '' }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                phoneNumber: Yup.string()
                    .matches(phoneRegExp, 'Ex. 012-345-6789')
                    .required('Required'),
                email: Yup.string().email(' ').required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
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
                    <FormGroup controlId="fullName">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.fullName}
                            onChange={handleChange}
                            isValid={touched.fullName && !errors.fullName}
                            isInvalid={touched.fullName && errors.fullName}/>
                        {/* ErrorMessage name references validationSchema */}
                        {/* <ErrorMessage name="fullName"/> */}
                        <FormControl.Feedback type="invalid">
                            Required
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="phoneNumber">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl 
                            size="md"
                            type="text"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            isValid={touched.phoneNumber && !errors.phoneNumber}
                            isInvalid={touched.phoneNumber && errors.phoneNumber}/>
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
                    <Row className="justify-content-center" style={{ paddingTop:"2.5rem" }}>
                        <button className="btn-primary btn-lg" type="submit">Submit</button>
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
