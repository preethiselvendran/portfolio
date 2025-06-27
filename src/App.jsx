import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'



const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  const handleToggle = () => {
    setDarkmode(!darkmode);
  };

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);


  return (
    <div className={`${darkmode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar darkmode={darkmode} handleToggle={handleToggle} />

      <div id="About" className="scroll-mt-20">
        <About darkmode={darkmode} />
      </div>

      <div id="Skills" className="scroll-mt-20">
        <Skills darkmode={darkmode} />
      </div>

      <div id="Services" className="scroll-mt-20">
        <Services darkmode={darkmode} />
      </div>

      <div id="Projects" className="scroll-mt-20">
        <Project darkmode={darkmode} />
      </div>

      <div id="Contact" className="scroll-mt-20">
        <Contact darkmode={darkmode} />
      </div>
    </div>
  );
};

export default App;
