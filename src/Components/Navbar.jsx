import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMenu, IoClose, IoArrowDownCircleSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ darkmode, handleToggle }) => {
  const items = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Project", link: "#project" },
   
  ];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <div id='home' className='transition-colors duration-500 scroll-mt-15 '>
      <div className='container mx-auto flex items-center justify-between p-5'>
        <h1 className='sm:text-xl md:text-2xl font-michroma'>Preethi.</h1>
   
        {/* Desktop Menu */}
        <ul className='hidden md:flex lg:gap-8 md:gap-5'>
          {items.map((item, index) => (
            <li key={index} className='cursor-pointer font-normal hover:text-purple-800'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <button onClick={handleToggle}>
            {darkmode ? (
              <MdOutlineDarkMode className='text-white size-5' />
            ) : (
              <MdOutlineLightMode className='text-black size-5' />
            )}
          </button>

          <a href="#contact" className='hidden lg:flex px-5 py-2 rounded-md bg-purple-700 text-white'>
            Contact Me
          </a>

          {/* Mobile Menu Icon */}
          <button className='md:hidden' onClick={toggleMenu}>
            {menu ? <IoClose className='size-6' /> : <IoMenu className='size-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className='md:hidden flex flex-col items-center gap-8 py-8'>
          {items.map((item, index) => (
            <a key={index} href={item.link} className='text-lg hover:text-purple-800'>
              {item.name}
            </a>
          ))}
          <a href="#contact" className='px-5 py-2 rounded-md bg-purple-700 text-white'>
            Contact Me
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div className='mt-40 text-center space-y-5'>
        <p className='font-bold'>Welcome to my portfolio website!</p>
        <h1 className='sm:text-lg md:text-2xl font-michroma'>Hey, I'm Preethi Selvendran</h1>
        <h1 className='sm:text-lg md:text-2xl font-michroma'>Frontend Developer</h1>
        <p className='font-semibold'>
          I specialize in crafting high-quality web designs<br />
          and developing user-friendly websites with a focus on creativity and performance.
        </p>
      </div>

      {/* Hero Buttons */}
      <div className='flex flex-wrap justify-center gap-5 mt-8'>
        <a href="#contact">
          <button className='px-10 py-2 rounded-md border border-stone-700 flex items-center gap-2 transition hover:bg-stone-500 hover:text-white'>
            <FaUserAlt />
            Contact Me
          </button>
        </a>
<a 
  href="/resume.pdf" 
  download 
  className="px-5 py-2 rounded-md flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-400 text-white"
>
  Resume Download
  <IoArrowDownCircleSharp />
</a>
      </div>
    </div>
  );
};

export default Navbar;
