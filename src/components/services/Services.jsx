import React from 'react';
import './services.css';
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { TbCode, TbPencilStar } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";

const servicesData = [
  {
    icon: <HiOutlinePaintBrush />,
    num: '01',
    title: 'UI/UX Design',
    description: 'Creating intuitive, visually stunning interfaces that put users first — from wireframes to pixel-perfect responsive designs.',
    items: [
      'User Interface Design',
      'Wireframing & Prototyping',
      'Responsive Layouts',
      'Design Systems',
      'Accessibility & Usability',
    ],
  },
  {
    icon: <TbCode />,
    num: '02',
    title: 'Web Development',
    description: 'Building fast, scalable web applications with modern frameworks — clean architecture, secure auth, and seamless API integrations.',
    items: [
      'Full-Stack Applications',
      'RESTful API Integration',
      'Performance Optimization',
      'Authentication & Security',
      'Testing & Debugging',
    ],
  },
  {
    icon: <TbPencilStar />,
    num: '03',
    title: 'Content Creation',
    description: 'Crafting compelling digital content — written, visual, and strategic — optimized for engagement and discoverability.',
    items: [
      'Copywriting & Blogs',
      'Visual & Video Content',
      'SEO Optimization',
      'Content Strategy',
      'Analytics & Insights',
    ],
  },
];

const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <div className="services__top" data-aos="fade-down">
          <div className="services__label">
            <span className="services__label-line" />
            What I Offer
          </div>
          <h2 className="services__heading">
            Services I provide to <span>bring ideas to life</span>
          </h2>
        </div>

        <div className="service__container">
          {servicesData.map((service, index) => (
            <article
              className='service'
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="service__top">
                <span className="service__num">{service.num}</span>
                <span className="service__icon">{service.icon}</span>
              </div>

              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>

              <ul className='service__list'>
                {service.items.map((item, i) => (
                  <li key={i}>
                    <span className="service__list-dot" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="service__footer">
                <a href="#contact" className="service__link">
                  Get Started <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;