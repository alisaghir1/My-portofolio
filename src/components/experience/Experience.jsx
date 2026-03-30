import React from 'react'
import './experience.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer, SiMongodb, SiMysql, SiExpress, SiFirebase, SiAppwrite, SiSupabase, SiVite, SiStripe, SiCloudinary, SiJsonwebtokens } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";


const frontendSkills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Vite', icon: <SiVite /> },
]

const backendSkills = [
  { name: 'Node JS', icon: <FaNodeJs /> },
  { name: 'Express JS', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'Appwrite', icon: <SiAppwrite /> },
  { name: 'Stripe', icon: <SiStripe /> },
  { name: 'Cloudinary', icon: <SiCloudinary /> },
  { name: 'JWT', icon: <SiJsonwebtokens /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'WebSockets', icon: <TbBrandSocketIo /> },
]


const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="fade-down">
        The Skills I Have
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="100">
        My Experience
      </h2>
      <div className="container experience__container">

        <div className="experience__group" data-aos="fade-right" data-aos-delay="200">
          <div className="experience__group-header">
            <span className="experience__group-line"></span>
            <h3>Frontend Development</h3>
            <span className="experience__group-line"></span>
          </div>
          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article className='experience__card' key={index} data-aos="zoom-in" data-aos-delay={200 + index * 50}>
                <div className="experience__card-icon">
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__group" data-aos="fade-left" data-aos-delay="300">
          <div className="experience__group-header">
            <span className="experience__group-line"></span>
            <h3>Backend Development</h3>
            <span className="experience__group-line"></span>
          </div>
          <div className="experience__content">
            {backendSkills.map((skill, index) => (
              <article className='experience__card' key={index} data-aos="zoom-in" data-aos-delay={300 + index * 50}>
                <div className="experience__card-icon">
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience