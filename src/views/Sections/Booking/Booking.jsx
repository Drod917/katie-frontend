import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import PageSection from "components/PageSection";
import BookingForm from "components/BookingForm";
import "./Booking.scss"
import Icon from "components/Icon";

const Booking = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }
    const phoneRegExp = /(^([1-9]{3}[-]?)([1-9]{3}[-]?)([1-9]{4})$)|(^\(([1-9]{3}\)[-]?)([1-9]{3}[-]?)([1-9]{4})$)/
    const { anchor, header, subheader, telephone } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                    <h2 className="mt-0">{header}</h2>
                    <hr className="divider my-4" />
                    <p className="text-muted mb-5">{subheader}</p>
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col xs={10} md={3}>
                    <BookingForm/>
                </Col>
                <Col xs={10} md={3} className="contact-info">
                    <Row className="justify-content-end">
                        <Col xs={10} className="d-flex justify-content-end">
                            <h5>{telephone}</h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col className="d-flex justify-content-end">
                            salonEmail@salonEmail.com
                        </Col>
                    </Row>
                </Col>
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
