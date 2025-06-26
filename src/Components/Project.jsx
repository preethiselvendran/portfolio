import React from 'react';
import project1 from '../assets/project1.png'; // ✅ Make sure this path is correct

const Projects = ({ darkmode }) => {
  return (
    <div id='project' className={`container mx-auto px-5 py-10 scroll-mt-16 ${darkmode ? "bg-black text-white" : "bg-white text-black"} 
    transition-colors duration-500 `}>
      <div className='text-center space-y-5'>
        <h1 className='text-2xl font-bold text-purple-700 mt-40'>Projects</h1>
        <p className='text-lg font-medium'>(My Recent Work)</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 '>
        {/* Project 1 */}
        <div className='border-2 border-transparent rounded-lg p-5 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300 hover:border-purple-700 group'>
  
  <h2 className='text-xl font-bold mb-3 text-purple-700 group-hover:text-purple-500 transition-colors'>Portfolio Website</h2>
  
  <p className='mb-6 text-gray-600 dark:text-gray-500'>
    A personal portfolio website to showcase my projects, skills, and services using React.js with smooth animations and clean design.
  </p>
  
  <div className='flex justify-between'>
      <a 
    href='https://www.linkedin.com/in/preethiselvendran' 
    target='_blank' 
    rel='noreferrer' 
    className='px-4 py-2 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-500 transition-colors'>
    LinkedIn
  </a>
    <a 
    href='https://github.com/preethiselvendran' 
    target='_blank' 
    rel='noreferrer' 
    className='px-4 py-2 rounded-md border border-purple-700 text-purple-700 font-medium hover:bg-purple-700 hover:text-white transition-colors'>
    GitHub
  </a>
  </div>
</div>



      {/* Project 2 */}
        <div className='border-2 border-transparent rounded-lg p-5 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300 hover:border-purple-700 group'>
  
  <h2 className='text-xl font-bold mb-3 text-purple-700 group-hover:text-purple-500 transition-colors'>Travel Dashboard</h2>
  
  <p className='mb-6 text-gray-600 dark:text-gray-500'>
   A responsive travel dashboard with attractive design and real-time search features built using React.js and Tailwind CSS.
  </p>
  
  <div className='flex justify-between'>
    <a 
    href='https://www.linkedin.com/in/preethiselvendran' 
    target='_blank' 
    rel='noreferrer' 
    className='px-4 py-2 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-500 transition-colors'>
    LinkedIn
  </a>
    <a 
    href='https://github.com/preethiselvendran' 
    target='_blank' 
    rel='noreferrer' 
    className='px-4 py-2 rounded-md border border-purple-700 text-purple-700 font-medium hover:bg-purple-700 hover:text-white transition-colors'>
    GitHub
  </a>
  </div>
</div>

      </div>
    </div>
  )
}

export default Projects;
