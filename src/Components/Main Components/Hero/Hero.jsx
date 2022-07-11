import React from 'react'
import './Hero.css'


import Navigation from './Navigation/Navigation'

function Hero() {
  return (
    <div className="Hero">
      <Navigation/>
      <div className="Big-Hero-Board">
        <div class="discoverCard">
            <p id="slogan">Discover true <br/> Personalization.</p>

            <div class="miniSlogan">
                <img src={require('../../../Assets/Icons/Dash-Icon.png')} alt="" id="longGoldDash"/> <p id="PFYP">Perfection for your pleasure</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero