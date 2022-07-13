import React from 'react'
import '../Hero.css'

function Navigation() {
  return (
    <>
      <nav className='Nav-Bar'>
        <img src={require('../../../../Assets/Images/Hero/logo.png')} alt="" id="Logo" />

        <ul className="Nav-link-Container">
          <li><a id="NavLink" href="#">Home</a></li>
          <li><a id="NavLink" href="#">Services</a></li>
          <li><a id="NavLink" href="#">History</a></li>
          <li><a id="NavLink" href="#">Gallery</a></li>
          <li><a id="NavLink" href="#">Blog</a></li>
          <li><a id="NavLink" href="#">Pages</a></li>
          <li><a id="NavLink" href="#">Contact</a></li>
        </ul>

        <h2 id="Visit-Us"><a href="#">Vist Us</a></h2>

        <img id="menuIcon" src={require('../../../../Assets/Icons/Menu-Icon.png')} alt=""/>
      </nav>


    </>
  )
}

export default Navigation