import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";


const Top = ({ frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
    
    // react-hooks/rules-of-hooks
    /* eslint-disable */ 
    const scrollTo = {
        "services": useSmoothScrollTo(jumpToAnchor),
        "booking": useSmoothScrollTo("Booking")
    };
    /* eslint-enable */

    const style = {
        justifyContent: "center",
        paddingBottom: "40px"
    }

    let extraInfoPart;
    if (jumpToAnchor && jumpToAnchorText) {
        extraInfoPart = (
            <Col md={12} className="text-center">
                <Row style={style}>
                    <Button
                        size="xl"
                        variant="primary"
                        className="text-uppercase"
                        onClick={scrollTo.services}>
                        {jumpToAnchorText}
                    </Button>
                </Row>
                <Row style={style}>
                    <Button
                        size="md"
                        variant="primary"
                        className="text-uppercase"
                        onClick={scrollTo.booking}>
                        Book Now
                    </Button>    
                </Row>                
            </Col>
        );
    }

    return (
        <ImageCard
            imageFileName={imageFileName}
            header={header}
            subheader={subheader}
            extraInfo={extraInfoPart}
        />
    );
};

Top.propTypes = {
    frontmatter: PropTypes.object,
};

Top.defaultProps = {
    frontmatter: null,
};

export default Top;
