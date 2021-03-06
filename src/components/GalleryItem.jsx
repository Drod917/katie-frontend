import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import GalleryDetailDialog from "components/GalleryDetailDialog";

import "./GalleryItem.scss";

const GalleryItem = ({
    imageFileName,
    imageAlt,
    header,
    subheader,
    content,
    imageFileNameDetail,
    imageAltDetail,
    extraInfo,
}) => {
    const [showDetail, setShowDetail] = React.useState(false);
    const handleShowDetail = React.useCallback(() => {
        setShowDetail(true);
    }, []);
    const handleHideDetail = React.useCallback(() => {
        setShowDetail(false);
    }, []);

    return (
        <>
            <Col
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="0"
                data-sal-easing="ease"  
                md={4} sm={6} className="gallery-item">
                <a
                    role="button"
                    tabIndex={-1}
                    className="gallery-link"
                    data-toggle="modal"
                    onClick={handleShowDetail}
                >
                    <Image
                        className="gallery-img"
                        fileName={imageFileName}
                        alt={imageAlt || header || subheader}
                    />
                    <div className="gallery-hover">
                        <div className="gallery-hover-content">
                            <Icon iconName="PlusIcon" size="2x" />
                        </div>
                    </div>
                </a>
                <div className="gallery-caption">
                    <h4>{header}</h4>
                    {subheader ? <p className="text-muted">{subheader}</p> : null}
                </div>
            </Col>
            <GalleryDetailDialog
                show={showDetail}
                onHide={handleHideDetail}
                imageFileName={imageFileNameDetail || imageFileName}
                imageAlt={imageAltDetail || imageAlt}
                header={header}
                subheader={subheader}
                content={content}
                extraInfo={extraInfo}
            />
        </>
    );
};

GalleryItem.propTypes = {
    imageFileName: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    content: PropTypes.string,
    imageFileNameDetail: PropTypes.string,
    imageAltDetail: PropTypes.string,
    extraInfo: PropTypes.any,
};

GalleryItem.defaultProps = {
    imageAlt: "",
    subheader: "",
    content: "",
    imageFileNameDetail: "",
    imageAltDetail: "",
    extraInfo: null,
};

export default GalleryItem;
