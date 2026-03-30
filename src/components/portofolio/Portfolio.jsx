import React from 'react'
import './portfolio.css'
import codeTalk from '../../assets/codeTalk.jpeg'
import raynLook from '../../assets/rayn-look.png'
import meatmoot from '../../assets/meetMoot.jpeg'
import hi5Events from '../../assets/Events.jpeg'
import autoExport from '../../assets/auto-export.png'
import capitalAssociated from '../../assets/capital-associated.png'
import merka from '../../assets/merka.png'
import msTravel from '../../assets/ms-travel.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    id: 1,
    image: autoExport,
    title: 'AutoExport.ch',
    description: 'A Swiss automobile buying & export platform — instant car valuations, admin CMS, analytics tracking, and multi-step contact forms.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Zustand', 'EmailJS'],
    demo: 'https://www.autoexport.ch/',
  },
  {
    id: 2,
    image: capitalAssociated,
    title: 'Capital Associated',
    description: 'Corporate website for an elite Dubai construction firm — portfolio showcase, blog CMS with rich text editor, careers portal, and SEO optimization.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'JWT'],
    demo: 'https://www.capitalassociated.com/',
  },
  {
    id: 3,
    image: raynLook,
    title: 'Rayn Look',
    description: 'Premium contact lens e-commerce platform with Stripe payments, inventory management, admin dashboard, and prescription lens customization.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe', 'Zustand'],
    demo: 'https://www.rayn-look.com/',
  },
  {
    id: 4,
    image: meatmoot,
    title: 'Meat Moot',
    description: 'Multi-location restaurant website for a Dubai steakhouse chain — dynamic menus, reservations, blog, multi-language support, and admin panel.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Cloudinary', 'EmailJS', 'Swiper'],
    demo: 'https://www.meatmoot.ae/',
  },
  {
    id: 5,
    image: merka,
    title: 'Merka Architecture',
    description: 'Premium architecture firm website with full English/Arabic bilingual support, RTL layout, TipTap rich text CMS, and project portfolio showcase.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'TipTap', 'EmailJS'],
    demo: 'https://www.merka.ae/',
  },
  {
    id: 6,
    image: msTravel,
    title: 'Majestic Skyline Travel',
    description: 'Luxury travel agency platform — destination packages, custom itineraries, bilingual English/Arabic interface, blog, and admin CMS.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Keen Slider', 'EmailJS'],
    demo: 'https://www.mstravel.ae/',
  },
  {
    id: 7,
    image: codeTalk,
    title: 'CodeTalk',
    description: 'Social media platform for developers — share posts with images, likes, comments, follow system, explore feed, and user profiles.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Appwrite', 'React Query'],
    demo: 'https://code-talk-eta.vercel.app/sign-in',
  },
  {
    id: 8,
    image: hi5Events,
    title: 'Hi5 Properties Events',
    description: 'Full-stack real estate platform — property listings with advanced search, blog, discussions, reviews, and a complete admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Framer Motion', 'Swiper'],
    demo: 'https://events.hi5properties.com/',
  },
]

const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5 data-aos="fade-down">
        My Recent Work
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="100">
        Projects
      </h2>
      <div className="container portfolio__container">
        {data.map((project, index) => (
          <article key={project.id} className='portfolio__card' data-aos="fade-up" data-aos-delay={index * 100}>
            <div className='portfolio__card-image'>
              <img src={project.image} alt={project.title} />
              <div className="portfolio__card-overlay">
                <p className="portfolio__card-desc">{project.description}</p>
                <div className="portfolio__card-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="portfolio__tag">{t}</span>
                  ))}
                </div>
                <div className="portfolio__card-links">
                  <a href={project.demo} target='_blank' rel='noreferrer' className="portfolio__link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio__card-info">
              <h3>{project.title}</h3>
              <div className="portfolio__card-tech-row">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="portfolio__tag-sm">{t}</span>
                ))}
                {project.tech.length > 3 && <span className="portfolio__tag-sm">+{project.tech.length - 3}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portofolio