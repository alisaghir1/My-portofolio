import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My-photo1.png'
import HeaderSocials from './HeaderSocials'
import { ReactTyped } from 'react-typed';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ali Saghir</h1>
        <h5 className="text-light">
        <ReactTyped
            strings={['Full Stack Developer','Backend Developer', 'Frontend Developer','UI/UX Designer']}
            typeSpeed={30}
            backSpeed={20}
            backDelay={1000}
            loop
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="Me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header