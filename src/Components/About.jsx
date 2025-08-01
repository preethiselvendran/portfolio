import React, { useState } from 'react'

import Vector from '../assets/Vector.png'; 



const About = ({ darkmode }) => {
  return (
   <div id='about' className={`  container mx-auto px-5 py-10 scroll-mt-0  ${darkmode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 `}>
  <div className='space-y-3 text-center'>
    <p className='text-xl font-medium mt-52'>(Introduction)</p>
    <h1 className='font-bold text-2xl text-violet-800'>About Me</h1>
  </div>

  <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>
     <div className='flex-1'>
          <p className='font-normal sm:text-md md:text-lg leading-relaxed' data-aos="fade-right">I am a frontend developer skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. 
            I am passionate about creating responsive, user-friendly, and visually appealing web applications.
            I graduated in 2020 and have recently focused on building real-world projects to develop my skills.
            I am now ready to start my professional journey as a frontend developer.

         </p>
          </div>
     
               <img src={Vector} className='size-72'  />
           </div>
</div>

  )
}

export default About
