import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Booking = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }
    const phoneRegExp = /^([1-9]{3}[-])([1-9]{3}[-])([1-9]{4})$/
    const { anchor, header, subheader, telephone, email } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header="Book Now" subheader="Enter Booking Info Here" />
            </Row>
            <Row className="justify-content-center">
                <Formik
                    initialValues={{ fullName: '', phoneNumber: '', email: '' }}
                    validationSchema={Yup.object({
                        fullName: Yup.string()
                            .max(30, 'Must be 30 characters or less')
                            .required('Required'),
                        phoneNumber: Yup.string()
                            .matches(phoneRegExp, 'Format: 012-345-6789')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <Field 
                            name="fullName"
                            render={({ field, props }) => (
                                <FormGroup controlId="fullName">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl 
                                        type="text"
                                        value={field.value}
                                        onChange={field.onChange}/>
                                    {/* ErrorMessage name references validationSchema */}
                                    <ErrorMessage name="fullName"/>
                                </FormGroup>
                            )}
                        />
                        <Field 
                            name="phoneNumber"
                            render={({ field, props }) => (
                                <FormGroup controlId="phoneNumber">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl 
                                        type="text"
                                        value={field.value}
                                        onChange={field.onChange}/>
                                    <ErrorMessage name="phoneNumber"/>
                                </FormGroup>
                            )}
                        />
                        <Field 
                            name="email"
                            render={({ field, props }) => (
                                <FormGroup controlId="email">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl 
                                        type="text"
                                        value={field.value}
                                        onChange={field.onChange}/>
                                    <ErrorMessage name="email"/>
                                </FormGroup>
                            )}
                        />
                        <Row className="justify-content-center">
                            <button className="styled-btn" type="submit">Submit</button>
                        </Row>
                    </Form>
                </Formik>
            </Row>
        </PageSection>
    );
};

Booking.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Booking.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Booking;
