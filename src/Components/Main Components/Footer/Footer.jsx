import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='Footer-Container'>
        <div className="Santa-Guy"></div>

        <div className="Footer-Information-Card">
            <div className="Footer-Title">
                <h5 id="Footer-Title">
                    The Joy Of Dressing Is An Art
                </h5>
            </div>

            <div class="divider"></div>

            <div className="Footer-Info-Container">
                <div className="Footer-Contact-Container">
                    <p id="Footer-info-Heading">Contact</p>

                    <ul>
                        <li>6 Old Hope Rd, Kingston,</li>
                        <li>(876)-409-7031 / (876)-429-2131</li>
                        <li>reservations@Menztailor.com</li>
                        <li>office@Menztailor.com</li>
                    </ul>
                </div>

                <div className="Footer-Links-Container">
                    <p id="Footer-info-Heading">Links</p>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="Footer-Social-Icons-Container">
                <p id="Footer-info-Heading">Social</p>

                <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                </ul>             
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer