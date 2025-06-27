import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaTools, FaPalette} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { MdSettingsSuggest } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = ({ darkmode }) => {
  return (
   
  <div id='skills' className={`container mx-auto px-5 py-10 ${darkmode ? "bg-black text-white" : "bg-white text-black"} transition-colors 
  duration-500 scroll-mt-0`}>
    <div className='text-center'>
      <h1 className='text-2xl font-bold text-violet-700 mt-20 md:mt-40'>
        My Skills</h1>
      <p className='text-lg font-medium mt-3'>(My Technical Level)</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-7 flex-wrap'>

      {/* Frontend Skills */}
      <div className='border border-stone-500 mt-10 md:mt-7 px-8 py-2 rounded-lg hover:border-l-4
       hover:border-l-purple-700 hover:border-b-4 hover:border-b-purple-700' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className='flex items-center gap-2 font-bold'>
          <FaTools  className='size-5'/>
          Frontend Skills
        </h1>

        <div className='flex flex-wrap gap-5 mt-5'>
  <div className='flex items-center gap-2'>
    <FaHtml5 className='text-orange-500' />
    <p>HTML5</p>
  </div>

  <div className='flex items-center gap-2'>
    <FaCss3Alt className='text-blue-500' />
    <p>CSS3</p>
  </div>

  <div className='flex items-center gap-2'>
    <FaJsSquare className='text-yellow-500' />
    <p>JavaScript (ES6+)</p>
  </div>

  <div className='flex items-center gap-2'>
    <span>🌐</span>
    <p>Responsive Web Design</p>
  </div>
</div>

      </div>

      {/* Styling Framework */}
      <div className='hover:border-l-4 hover:border-l-purple-700 hover:border-b-4 hover:border-b-purple-700 mt-7 px-8 py-2 rounded-lg border
       border-stone-500'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className='flex items-center gap-2 font-bold'>
          <FaPalette className='size-5 text-yellow-500'/>
          Styling Framework
        </h1>

        <div className='flex items-center gap-2 mt-5'>
          <RiTailwindCssFill className='size-6 text-blue-500' />
          <p>Tailwind CSS</p>
        </div>
      </div>

      {/* Frontend Libraries */}
      <div className='border border-stone-500 mt-7 px-8 py-2 rounded-lg hover:border-l-4 hover:border-l-purple-700 
      hover:border-b-4 hover:border-b-purple-700'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className='flex items-center gap-2 font-bold'>
          <FaReact  className='size-5 text-blue-600'/>
          Frontend Libraries
        </h1>

        <div className='flex items-center gap-2 mt-5'>
          <FaReact className='size-6 text-blue-500'/>
          <p>React.js</p>
        </div>
      </div>

      {/* Version Control */}
      <div className='border border-stone-500 mt-7 px-8 py-2 rounded-lg hover:border-l-4 hover:border-l-purple-700
       hover:border-b-4 hover:border-b-purple-700'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className='flex items-center gap-2 font-bold'>
          <MdSettingsSuggest className='size-5 text-gray-500' />
          Version Control
        </h1>

        <div className='flex items-center gap-2 mt-5'>
          <FaGithub className='size-6'/>
          <p>Git & GitHub</p>
        </div>
      </div>

    </div>
  </div>
)

  
}

export default Skills;
