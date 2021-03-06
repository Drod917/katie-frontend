import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Carousel, Button, Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import ShopCarousel from "components/ShopCarousel";

const Shop = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header, subheader, telephone, email } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={header} subheader={subheader}/>
            </Row>
            <Row className="justify-content-center">
                <ShopCarousel/>
            </Row>
            <Row className="justify-content-center shop-btn">
                <Button size="xl" variant="primary" className="text-uppercase" href="https://shop.saloninteractive.com/store/KBHAIR/product_categories?group=1">
                    Browse Shop
                </Button>
            </Row>
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
