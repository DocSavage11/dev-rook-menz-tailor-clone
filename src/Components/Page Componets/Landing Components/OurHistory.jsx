import React from 'react'
import './LandingPageComponents.css'

function OurHistory() {
  return (
    <div className="History-Card-Container">
        <div className="Video-Card bruh-wtf ">

            <div className="pulse-container">
                <a href="#">
                    <i id='CircularPlayIcon' class="fa fa-play-circle" ></i>
                </a>

                <div class="pulse"></div>
            </div>

        </div>

        <div className="History-Information-Card">
            <div className="History-Text-Container">
                <h3>Our History</h3>

                <p>
                Duis aute irure dolor inasfa reprehenderit in voluptate velit esse
                cillum reeut cupidatatfugiat nulla pariatur. Excepteur sintxsdfas
                occaecat, cupidatat non proidente sunt in culpa qui officia
                deserunt, mollit anim id est laborum. Sedut des perspiciatis unde
                omnis iste.
                </p>

                <a href="#"><button className='MoreLink'>About Us</button></a>
            </div>
        </div>
    </div>
  )
}

export default OurHistory