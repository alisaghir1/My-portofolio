import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        The Skills I Have
      </h5>
      <h2>
        My Experience
      </h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>
            Frontend Development
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              HTML
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              CSS
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              JavaScript
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Redux
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              React
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Tailwind CSS
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              BootStrap
            </h4>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              TypeScript
            </h4>
            </article>

            
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
            WebSockets 
            </h4>
            </article>
            
          </div>
        </div>


        <div className="experience__backend">
        <h3>
            Backend Development
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Node JS
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              MongoDB
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              MySQL
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Express JS
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Firebase
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              Appwrite
            </h4>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
              TypeScript
            </h4>
            </article>
            
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <h4>
            WebSockets 
            </h4>
            </article>
            
            
          </div>
          </div>
          
      </div>
    </section>
  )
}

export default Experience