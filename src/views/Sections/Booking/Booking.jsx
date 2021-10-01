import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Booking = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header, subheader, telephone, email } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row className="justify-content-center">
                <div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                            Submit
                            </button>
                        </Form>
                        )}
                    </Formik>
                </div>
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
