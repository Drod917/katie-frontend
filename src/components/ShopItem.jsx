import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

import "./ShopItem.scss"

const ShopItem = ({ link, image }) => {
    

    return (
        <>
            <div id="carousel">
                <div className="hideLeft">
                    <img src="https://1210877.app.netsuite.com/core/media/media.nl?id=4157682&c=1210877&h=FTr6lFuRfpjGuLedk5yFkR-8h_s7vRwMrDNgc78CBV578cGK" alt="altTxt"/>
                </div>

                <div className="prevLeftSecond">
                    <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/263/original.jpg?1517594742" alt="altTxt"/>
                </div>
                
                <div className="prev">
                    <img src="https://mfr.ibeauthentic.com/images/products/loma/hol21lomadailycitrus.jpg?preset=t250" alt="altTxt"/>
                </div>

                <div className="selected">
                    <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82985/original.jpg?1638469308" alt="altTxt"/>
                </div>

                <div className="next">
                    <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82979/original.jpg?1638469024" alt="altTxt"/>
                </div>

                <div className="nextRightSecond">
                    <img src="https://1210877.app.netsuite.com/core/media/media.nl?id=18614&c=1210877&h=2L4TDRDVXkvsbE1lyA4ywuB4FPWeBTxj5bhjEnXFWSoBjkBs" alt="altTxt"/>
                </div>

                <div className="hideRight">
                    <img src="https://res.cloudinary.com/dieqyibh4/image/upload/v1591804067/Copy_of_razorhandlecassette_okzlxn.png" alt="altTxt"/>
                </div>
            </div>
            
            <div className="buttons">
                <button type="button" id="prev">Prev</button>
                <button type="button" id="next">Next</button>
            </div>
        </>
    )
}

ShopItem.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string
}

ShopItem.defaultProps = {
    link: null,
    image: null
}

export default ShopItem;