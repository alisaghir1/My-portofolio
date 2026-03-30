import React from 'react'
import './about.css'
import Me from '../../assets/my-image-2.png'
import { TbAward } from "react-icons/tb";
import { TiCodeOutline } from "react-icons/ti";
import { PiCertificateBold } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";


const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">

        {/* Left – Image + Stats */}
        <div className="about__left" data-aos="fade-right" data-aos-delay="200">
          <div className="about__image-frame">
            <div className="about__image-glow" />
            <img src={Me} alt="about me" />
            <div className="about__image-tag">
              <span className="about__image-tag-dot" />
              Available for work
            </div>
          </div>

          <div className="about__stats" data-aos="fade-up" data-aos-delay="400">
            <div className="about__stat">
              <span className="about__stat-number">2+</span>
              <span className="about__stat-label">Years Exp.</span>
            </div>
            <div className="about__stat-divider" />
            <div className="about__stat">
              <span className="about__stat-number">44+</span>
              <span className="about__stat-label">Projects</span>
            </div>
            <div className="about__stat-divider" />
            <div className="about__stat">
              <span className="about__stat-number">3+</span>
              <span className="about__stat-label">Certificates</span>
            </div>
          </div>
        </div>

        {/* Right – Content */}
        <div className="about__right" data-aos="fade-left" data-aos-delay="300">
          <div className="about__label">
            <span className="about__label-line" />
            About Me
          </div>

          <h2 className="about__heading" data-aos="fade-up" data-aos-delay="350">
            Crafting digital experiences with <span>code & creativity</span>
          </h2>

          <p className="about__bio" data-aos="fade-up" data-aos-delay="400">
            I'm a skilled Full Stack Web Developer specializing in the MERN stack, proficient in JavaScript and Agile methodologies. With a track record of managing multiple projects, I excel in creating efficient, and scalable web applications.
          </p>
          <p className="about__bio" data-aos="fade-up" data-aos-delay="450">
            Fluent in Arabic and English, I'm committed to staying updated on industry trends and eager to collaborate with fellow professionals.
          </p>

          <div className="about__highlights" data-aos="fade-up" data-aos-delay="500">
            <div className="about__highlight">
              <TbAward className="about__highlight-icon" />
              <div>
                <h4>Problem Solver</h4>
                <p>Turning complex challenges into elegant solutions</p>
              </div>
            </div>
            <div className="about__highlight">
              <TiCodeOutline className="about__highlight-icon" />
              <div>
                <h4>Clean Code</h4>
                <p>Writing maintainable, scalable & efficient code</p>
              </div>
            </div>
            <div className="about__highlight">
              <PiCertificateBold className="about__highlight-icon" />
              <div>
                <h4>Continuous Learner</h4>
                <p>Always exploring the latest technologies</p>
              </div>
            </div>
          </div>

          <a href="#contact" className='btn btn-primary about__cta' data-aos="fade-up" data-aos-delay="600">
            Let's Talk <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About