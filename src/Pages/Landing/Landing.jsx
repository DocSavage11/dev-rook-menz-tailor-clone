import React, { useEffect, useState, useRef  } from "react";
import './Landing.css'


import Hero from "../../Components/Main Components/Hero/Hero";
import WhatWeOffer from "../../Components/Page Componets/Landing Components/WhatWeOffer";
import OurHistory from "../../Components/Page Componets/Landing Components/OurHistory";

function Landing() {
  return (
    <>
      <Hero/>
      <WhatWeOffer/>
      <OurHistory/>
    </>
  )
}

export default Landing