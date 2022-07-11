import './App.css';
import AOS from 'aos'
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import Landing from './Pages/Landing/Landing';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="App">
      <Landing/>
    </div>
  );
}

export default App;
