import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  rel="noreferrer" href="https://www.linkedin.com/in/ali-saghir-74ba84237/" target='_blank'><FaLinkedin /></a>
        <a  rel="noreferrer" href="https://github.com/alisaghir1" target='_blank'><FaGithub /></a>
        <a  rel="noreferrer" href="https://www.instagram.com/ali_sa8ir/?hl=en" target='_blank'><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials