import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tgdvry2', 'template_z8t1sxm', form.current, {
        publicKey: '6fxaFt7hai_s8EqW1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="container">
        <div className="contact__top" data-aos="fade-down">
          <div className="contact__label">
            <span className="contact__label-line" />
            Get In Touch
          </div>
          <h2 className="contact__heading">
            Let's work <span>together</span>
          </h2>
          <p className="contact__subtext">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__container">
          {/* Left – Contact cards */}
          <div className="contact__options" data-aos="fade-right" data-aos-delay="200">
            <a href="mailto:alisaghir543@gmail.com" target='_blank' rel='noreferrer' className='contact__option'>
              <div className="contact__option-icon-wrap">
                <HiOutlineMail className='contact__option-icon' />
              </div>
              <div className="contact__option-info">
                <h4>Email</h4>
                <p>alisaghir543@gmail.com</p>
              </div>
              <FiArrowUpRight className='contact__option-arrow' />
            </a>

            <a href="https://www.instagram.com/ali_sa8ir/" target='_blank' rel='noreferrer' className='contact__option'>
              <div className="contact__option-icon-wrap">
                <FaInstagram className='contact__option-icon' />
              </div>
              <div className="contact__option-info">
                <h4>Instagram</h4>
                <p>ali_sa8ir</p>
              </div>
              <FiArrowUpRight className='contact__option-arrow' />
            </a>

            <a href="https://wa.me/+96170967834" target='_blank' rel='noreferrer' className='contact__option'>
              <div className="contact__option-icon-wrap">
                <FaWhatsapp className='contact__option-icon' />
              </div>
              <div className="contact__option-info">
                <h4>Whatsapp</h4>
                <p>+961 70 967 834</p>
              </div>
              <FiArrowUpRight className='contact__option-arrow' />
            </a>
          </div>

          {/* Right – Form */}
          <form onSubmit={sendEmail} ref={form} data-aos="fade-left" data-aos-delay="300">
            <div className="form__group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name='name' placeholder='John Doe' required />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name='email' placeholder='john@example.com' required />
            </div>
            <div className="form__group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="6" placeholder='Tell me about your project...' required></textarea>
            </div>
            <button type='submit' className='btn btn-primary contact__submit'>
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact