import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import BookingForm from "components/BookingForm";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Booking = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header, subheader, telephone, email } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row className="justify-content-center">
                <BookingForm/>
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
