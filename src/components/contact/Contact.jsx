import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
           <HiOutlineMail className='contact__option-icon' />
            <h4>
              Email
            </h4>
            <h5>
              alisaghir543@gmail.com
            </h5>
            <a href="mailto:alisaghir543@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
          <FaInstagram className='contact__option-icon'/>
            <h4>
              Instagram
            </h4>
            <h5>
              ali_sa8ir
            </h5>
            <a href="https://www.instagram.com/ali_sa8ir/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
            <h4>
              Whatsapp
            </h4>
            <h5>
              +96170967834
            </h5>
            <a href="https://wa.me/+96170967834" target='_blank'>Send a message</a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact