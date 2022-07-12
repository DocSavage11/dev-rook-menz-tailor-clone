import React, { useEffect, useState, useRef  } from "react";
import './Landing.css'


import Hero from "../../Components/Main Components/Hero/Hero";
import WhatWeOffer from "../../Components/Page Componets/Landing Components/WhatWeOffer";
import OurHistory from "../../Components/Page Componets/Landing Components/OurHistory";
import ClientFeedback from "../../Components/Page Componets/Landing Components/ClientFeedback";
import OurLocations from "../../Components/Page Componets/Landing Components/OurLocations";
import LoremSlider from "../../Components/Page Componets/Landing Components/LoremSlider";
import Footer from "../../Components/Main Components/Footer/Footer";

function Landing() {
  return (
    <div className="Landing-Container">
      <Hero/>
      <WhatWeOffer/>
      <OurHistory/>
      <ClientFeedback/>
      <OurLocations/>
      <LoremSlider/>
      <Footer/>
    </div>
  )
}

export default Landing