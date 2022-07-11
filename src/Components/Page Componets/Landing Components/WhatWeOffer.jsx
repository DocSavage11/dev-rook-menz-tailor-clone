import React from 'react'
import './LandingPageComponents.css'

function WhatWeOffer(props) {
  return (
    <div className="What-We-offer-Section">
        <div className="Box-Title">
            <p id="WW0">What We Offer</p>
    
            <p id="WWOTC">What We Offer To Clients</p>
        </div>


        <div className="Offer-Cards-Container">

            <div className="Offer-Card">
                <div className="Service-Image-Container">
                    <img src={require('../../../Assets/Images/Gallery/offers1.jpg')} alt="" id="Service-Image" />
                </div>

                <div className="Service-Text-Container">
                    <p id="Service-Number">1</p>

                    <p id="Card-Title">Perfect Body Measurements</p>
                    
                    <p id="Card-Description">
                        Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
                        eiusmod tecsmpor
                    </p>

                    <img src={require("../../../Assets/Icons/Dash-Icon.png")} alt="" id="More-Icon" />
                </div>
            </div>

            <div className="Offer-Card">
                <div className="Service-Image-Container">
                    <img src={require('../../../Assets/Images/Gallery/offers2.jpg')} alt="" id="Service-Image" />
                </div>

                <div className="Service-Text-Container">
                    <p id="Service-Number">2</p>

                    <p id="Card-Title">Premium Style Cutting-out</p>
                    
                    <p id="Card-Description">
                        Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
                        eiusmod tecsmpor
                    </p>

                    <img src={require("../../../Assets/Icons/Dash-Icon.png")} alt="" id="More-Icon" />
                </div>
            </div>

            <div className="Offer-Card">
                <div className="Service-Image-Container">
                    <img src={require('../../../Assets/Images/Gallery/offers3.jpg')} alt="" id="Service-Image" />
                </div>

                <div className="Service-Text-Container">
                    <p id="Service-Number">3</p>

                    <p id="Card-Title">Restoration With Sincerity</p>
                    
                    <p id="Card-Description">
                        Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
                        eiusmod tecsmpor
                    </p>

                    <img src={require("../../../Assets/Icons/Dash-Icon.png")} alt="" id="More-Icon" />
                </div>
            </div>


        </div>
    </div>
  )
}

export default WhatWeOffer