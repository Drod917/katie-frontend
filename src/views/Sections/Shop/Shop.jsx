import React from "react";
import PropTypes from "prop-types";

import { Button, Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { none } from "ramda";

const Shop = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header, subheader, telephone, email } = frontmatter;

    return (
        <PageSection className="shop-btn" id={anchor}>
            <Row className="justify-content-center shop-btn">
                <Button size="xl" variant="primary" className="text-uppercase" href="https://shop.saloninteractive.com/store/KBHAIR/product_categories?group=1">
                    Shop Now
                </Button>
            </Row>
            <SectionHeader header="tests" subheader="subtest"/>
        </PageSection >
    );
};

Shop.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Shop.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Shop;
