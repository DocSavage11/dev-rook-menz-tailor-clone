import React from 'react'
import './LandingPageComponents.css'
import Carousel from 'react-bootstrap/Carousel';

function LoremSlider() {
  return (
    <div className="Lorem-Slider">
        <Carousel>
           <Carousel.Item interval={1000}>
                <div className="Text-Container">
                    <img id="Testiomony-Icon" src={require('../../../Assets/Icons/testimonial.png')} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className="Text-Container">
                    <img id="Testiomony-Icon" src={require('../../../Assets/Icons/testimonial.png')} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="Text-Container">
                    <img id="Testiomony-Icon" src={require('../../../Assets/Icons/testimonial.png')} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className="Text-Container">
                    <img id="Testiomony-Icon" src={require('../../../Assets/Icons/testimonial.png')} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.
                    </p>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default LoremSlider