import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';

const Nav = () => {

  const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><FaRegUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><MdOutlineLaptopChromebook /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><RiServiceLine  /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><GrContact  /></a>
    </nav>
  )
}

export default Nav