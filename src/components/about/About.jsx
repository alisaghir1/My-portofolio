import React from 'react'
import './about.css'
import Me from '../../assets/My-photo.jpg'
import { TbAward } from "react-icons/tb";
import { TiCodeOutline } from "react-icons/ti";
import { PiCertificateBold } from "react-icons/pi";


const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About Me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
            <TbAward className='aboutt__icon' />
              <h5>
                Experience
              </h5>
              <small>
                1+ Years
              </small>
            </article>
          
            <article className='about__card'>
            <TiCodeOutline className='aboutt__icon' />
              <h5>
                Projects
              </h5>
              <small>
                10+ Projects
              </small>
            </article>

            <article className='about__card'>
            <PiCertificateBold  className='aboutt__icon' />
              <h5>
                Certificates
              </h5>
              <small>
                3+ Certificates
              </small>
            </article>

          </div>

          
          

          <p>
           
     I'm a skilled Full Stack Web Developer specializing in the MERN stack, proficient in JavaScript and Agile methodologies. With a track record of managing multiple projects, I excel in creating efficient, and scalable web applications.
     Fluent in Arabic and English, I'm committed to staying updated on industry trends and eager to collaborate with fellow professionals.
          </p>
          
          <a href="#contact" className='btn btn-pimary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About