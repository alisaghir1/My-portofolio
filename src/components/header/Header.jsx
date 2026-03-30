import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/main-image.png'
import HeaderSocials from './HeaderSocials'
import { ReactTyped } from 'react-typed';

const Header = () => {
  return (
    <header>
      <div className="header__particles">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <div className="header__glow header__glow--1"></div>
      <div className="header__glow header__glow--2"></div>

      {/* Background portrait */}
      <div className="header__bg-portrait">
        <img src={ME} alt="" aria-hidden="true" />
      </div>

      <div className="header__inner">
        <div className="header__content">
          <div className="header__badge">
            <span className="header__badge-dot"></span>
            Available for Work
          </div>
          <h5 className="header__greeting">Hello, I'm</h5>
          <h1 className="header__name">Ali Saghir</h1>
          <div className="header__typed-wrapper">
            <span className="header__typed-prefix">{'{'}</span>
            <h5 className="text-light header__typed">
              <ReactTyped
                strings={['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'UI/UX Designer']}
                typeSpeed={30}
                backSpeed={20}
                backDelay={1000}
                loop
              />
            </h5>
            <span className="header__typed-prefix">{'}'}</span>
          </div>
          <p className="header__description">
            Crafting digital experiences with clean code & creative design.
          </p>
          <CTA />
          <HeaderSocials />

          <div className="header__stats">
            <div className="header__stat">
              <span className="header__stat-number">2+</span>
              <span className="header__stat-label">Years Experience</span>
            </div>
            <div className="header__stat-divider"></div>
            <div className="header__stat">
              <span className="header__stat-number">44+</span>
              <span className="header__stat-label">Projects Done</span>
            </div>
            <div className="header__stat-divider"></div>
            <div className="header__stat">
              <span className="header__stat-number">3+</span>
              <span className="header__stat-label">Certificates</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#contact" className='scroll__down'>
        <div className="scroll__down-line"></div>
        <span className="scroll__down-text">Scroll</span>
      </a>
    </header>
  )
}

export default Header