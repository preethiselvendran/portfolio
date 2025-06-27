import React from 'react'
import { FaMobileAlt, FaLaptopCode, FaFigma,  } from 'react-icons/fa';

const Services = ({darkmode}) => {
  return (
  <div id='services' className={`container mx-auto px-5 py-10 scroll-mt-0 ${darkmode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500`}>
    <div className='text-center space-y-5'>
      <h1 className='text-2xl font-bold text-purple-700 mt-40'>Services</h1>
      <p className='text-lg font-medium'>(What I Offer)</p>
      <h3 className='text-lg font-normal '>
        I am a Frontend Developer with expertise in web design and development at a high level, creating quality work.
      </h3>
    </div>

    <div className='grid grid-cols-1 xl:grid-cols-4 gap-7 mt-10'>
        <div className=' px-5 py-2 rounded-md  shadow-xl hover:scale-110 hover:border hover:border-purple-700 group'data-aos="flip-left">
            <FaMobileAlt  className='size-6 '/>
            <h1 className='mt-3 font-bold text-lg text-purple-600 '>Responsive Web Design</h1>
            <p className='mt-3'>Creating mobile-friendly, tablet-friendly, and fully responsive websites that adapt to all devices.</p>

      </div>


  <div className='shadow-xl px-5 py-2 rounded-md hover:scale-110 hover:border hover:border-purple-700 group'data-aos="flip-left">
            <FaLaptopCode className='size-6'/>
            <h1 className='text-lg font-bold mt-3 text-purple-600 '>Web Development</h1>
            <p className='mt-3'>Building functional, interactive, and modern web applications using React.js and JavaScript.</p>

      </div>


  <div className='shadow-xl px-5 py-2 rounded-md hover:scale-110 hover:border hover:border-purple-700 group'data-aos="flip-left">
            <FaFigma className='size-6 ' />
            <h1 className='text-lg font-bold mt-3 text-purple-600 '>Figma to Code</h1>
            <p className='mt-3'>Converting designs from Figma, PSD, or XD into pixel-perfect, clean, and responsive websites.</p>

      </div>




  <div className='shadow-xl border-stone-500 px-5 py-2 rounded-md hover:scale-110 hover:border hover:border-purple-700 group'data-aos="flip-left">
            <FaLaptopCode className='size-6'/>
            <h1 className='text-lg font-bold mt-3 text-purple-600 '>Single Page Application</h1>
            <p className='mt-3'>Dynamic web application using react.js for fast and smooth user experience.</p>

      </div>










</div>
</div>
)

}

export default Services
