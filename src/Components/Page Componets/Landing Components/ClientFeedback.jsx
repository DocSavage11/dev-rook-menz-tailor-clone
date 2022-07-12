import React from 'react'
import './LandingPageComponents.css'
import Carousel from 'react-bootstrap/Carousel';

function ClientFeedback() {
 
    return (
        <div className="Feedback-Container">
            <div className="Visit-Box-Title">
                <p id="OurLocatiion">Client Feedback</p>

                <p id="VisitOurTailors">Our Work For Clients</p>
            </div>

            <div className="Feedback-Slider">
                <Carousel>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-1.jpg')}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-2.jpg')}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-3.jpg')}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-4.jpg')}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-5.jpg')}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-6.jpg')}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-7.jpg')}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-8.jpg')}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-9.jpg')}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        src={require('../../../Assets/Images/Slider/Artboard-10.jpg')}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}


export default ClientFeedback