import React from 'react';
import './services.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container service__container">

        {/* first article */}
        <article className='service'>
          <div className="service__head">
            <h3>
              UI/UX Design
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Creating visually appealing user interfaces to enhance user experience.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Wireframing and prototyping for efficient design iterations.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Implementing responsive designs for seamless experience across devices.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Utilizing user-centered design principles for intuitive navigation.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Improving accessibility and usability through thoughtful design choices.</p>
            </li>
          </ul>
        </article>

        {/* second article */}
        <article className='service'>
          <div className="service__head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Building dynamic and interactive web applications using modern frameworks.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Integrating backend APIs for seamless data flow and functionality.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Optimizing website performance for faster loading and improved user experience.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Implementing secure authentication and authorization mechanisms.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Testing and debugging to ensure reliability and functionality.</p>
            </li>
          </ul>
        </article>

        {/* third article */}
        <article className='service'>
          <div className="service__head">
            <h3>
              Content Creation
            </h3>
          </div>
          <ul className='service__list'>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Producing engaging written content tailored to target audience.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Creating compelling visuals including images, infographics, and videos.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Optimizing content for search engines to improve discoverability.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Developing content strategies aligned with business objectives.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp className='service__list-icon' />
              <p>Monitoring and analyzing content performance to refine strategies.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services;