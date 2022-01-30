import React from "react";
import PropTypes from "prop-types";
import { Carousel, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image"

import "./ShopCarousel.scss"

const ShopCarousel = ({ link, image }) => {
    
    return (
        <Carousel variant="dark" indicators="false">
            <Carousel.Item interval={5000}>
                <a href="https://shop.saloninteractive.com/store/KBHAIR/product/37648/41099">
                    <StaticImage
                    layout="constrained"
                    width={600}
                    height={600}
                    src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82985/original.jpg?1638469308"
                    alt="First slide"
                    />
                </a>
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <a href="https://shop.saloninteractive.com/store/KBHAIR/product/35017/38467">
                    <StaticImage
                    layout="constrained"
                    width={600}
                    height={600}
                    src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82979/original.jpg?1638469024"
                    alt="Second slide"
                    />
                </a>
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <a href="https://shop.saloninteractive.com/store/KBHAIR/product/52345/55799">
                    <StaticImage
                    layout="constrained"
                    width={1000}
                    height={600}
                    src="https://res.cloudinary.com/dieqyibh4/image/upload/v1591804067/Copy_of_razorhandlecassette_okzlxn.png"
                    alt="Third slide"
                    />
                </a>
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )

    // return (
    //     <>
    //         <div id="carousel">
    //             <div className="hideLeft">
    //                 <img src="https://1210877.app.netsuite.com/core/media/media.nl?id=4157682&c=1210877&h=FTr6lFuRfpjGuLedk5yFkR-8h_s7vRwMrDNgc78CBV578cGK" alt="altTxt"/>
    //             </div>

    //             <div className="prevLeftSecond">
    //                 <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/263/original.jpg?1517594742" alt="altTxt"/>
    //             </div>
                
    //             <div className="prev">
    //                 <img src="https://mfr.ibeauthentic.com/images/products/loma/hol21lomadailycitrus.jpg?preset=t250" alt="altTxt"/>
    //             </div>

    //             <div className="selected">
    //                 <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82985/original.jpg?1638469308" alt="altTxt"/>
    //             </div>

    //             <div className="next">
    //                 <img src="https://s3-us-west-2.amazonaws.com/production-saloninteractive/client_connect_images/82979/original.jpg?1638469024" alt="altTxt"/>
    //             </div>

    //             <div className="nextRightSecond">
    //                 <img src="https://1210877.app.netsuite.com/core/media/media.nl?id=18614&c=1210877&h=2L4TDRDVXkvsbE1lyA4ywuB4FPWeBTxj5bhjEnXFWSoBjkBs" alt="altTxt"/>
    //             </div>

    //             <div className="hideRight">
    //                 <img src="https://res.cloudinary.com/dieqyibh4/image/upload/v1591804067/Copy_of_razorhandlecassette_okzlxn.png" alt="altTxt"/>
    //             </div>
    //         </div>
            
    //         <div className="buttons">
    //             <button type="button" id="prev">Prev</button>
    //             <button type="button" id="next">Next</button>
    //         </div>
    //     </>
    // )
}

ShopCarousel.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string
}

ShopCarousel.defaultProps = {
    link: null,
    image: null
}

export default ShopCarousel;