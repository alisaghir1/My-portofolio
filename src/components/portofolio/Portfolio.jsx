import React from 'react'
import './portfolio.css'
import codeTalk from '../../assets/codeTalk.jpeg'
import raynLook from '../../assets/raynLook.jpeg'
import hi5 from '../../assets/hi5.jpeg'
import meatmoot from '../../assets/meetMoot.jpeg'
import hi5Events from '../../assets/Events.jpeg'




const data=[
  {
    id: 4,
    image: meatmoot,
    title: 'Meat moot',
    github:'https://github.com/alisaghir1/meat-moot',
    demo:'https://meatmoot.ae'
  },
  {
    id: 5,
    image: hi5Events,
    title: 'high Five Events',
    github:'https://github.com/alisaghir1/meat-moot',
    demo:'https://events.hi5properties.com'
  },
  {
    id: 1,
    image: codeTalk,
    title: 'CodeTalk',
    github:'https://github.com/alisaghir1/Code-Talk-Frontend',
    demo:'https://code-talk-eta.vercel.app/sign-in'
  },
  {
    id: 2,
    image: raynLook,
    title: 'Rayn_Look',
    github:'https://github.com/alisaghir1/rayn-look-frontend',
    demo:'https://rayn-look.vercel.app/'
  },
  {
    id: 3,
    image: hi5,
    title: 'hi5 Properties',
    github:'https://github.com/alisaghir1/Reef_Landing_page',
    demo:'https://properties.hi5properties.com/'
  },
]

const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        Projects
      </h2>
      <div className="container portfolio__container">
        {
          data.map((project) => (
            <article key={project.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={project.image} alt="codeTalk" />
            </div>
            <h3>
             {project.title}
            </h3>
            <div className='portfolio__item-cta'>
            <a href={project.github} className='btn'  target='_blank'>Source Code</a>
            <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portofolio