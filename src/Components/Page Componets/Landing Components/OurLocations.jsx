import React from 'react'
import './LandingPageComponents.css'

function OurLocations() {
  return (
    <div className="Our-Location-Section">
        <div className="Visit-Our-Tailors-Box">
            <div className="Visit-Box-Title">
                <p id="OurLocatiion">Our Locations</p>
        
                <p id="VisitOurTailors">Visit Our Tailors</p>
            </div>

            <p id="locationDescription">6 Old Hope Rd, Kignston, (876)-409-7031 / (876)-429-2131,</p>
    
            <p id="emails">reservations@Menztailor.com, office@Menztailor.com</p>

            <div class="openingHours">
                <p id="openingHours">Opening hours:</p>

                <p id="openingHours">Mon – Thu: 10.00 am – 06:00 pm</p>
                <p id="openingHours">Fri – Sun: 10:00 am – 04:00 pm</p>
            </div>

            <div class="socialMediaIcons">

            </div>
        </div>

        <div className="Huge-Picture-Board">
            <div className="Ten-Percent-Off-Box">
                <h1 id="10-Percent">
                    10% Off
                </h1>

                <a href="#"><button className='GetOfferLink'>Get Offer</button></a>
            </div>
        </div>
    </div>
  )
}

export default OurLocations