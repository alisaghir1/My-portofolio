import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ali Saghir</a>

      <ul className='permalinks'>
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#experience">
          Experience
          </a>
        </li>
        <li>
          <a href="#services">
          Services
          </a>
        </li>
        <li>
          <a href="#portfolio">
          Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
          Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a  rel="noreferrer" href="https://www.linkedin.com/in/ali-saghir-74ba84237/" target='_blank'><FaLinkedin /></a>
        <a  rel="noreferrer" href="https://github.com/alisaghir1" target='_blank'><FaGithub /></a>
        <a  rel="noreferrer" href="https://www.instagram.com/ali_sa8ir/?hl=en" target='_blank'><AiFillInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Ali saghir. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer