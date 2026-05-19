import React from 'react'
import { useState } from 'react'
import ScaleIn from '../Animations/ScaleIn'


const Projects = () => {

  const [projects, setprojects] = useState([
    {
            title: "Personal Portfolio Website",
            desc: "Built a modern, responsive portfolio using React and Tailwind CSS Implemented reusable components, clean UI, and smooth layout Showcases skills, projects, and contact information Focused on performance and mobile responsiveness",
            end: ["React", "Tailwind CSS", "Express.js"],
            Link: "https://sandeepkohlisk-portfolio-website.netlify.app/"
        },
        {
            title: "Number Guessing Game",
            desc: "Developed an interactive number guessing game using HTML, CSS, and JavaScript Implemented game logic, user input handling, and result feedback Improved JavaScript fundamentals and DOM manipulation skills",
            end: ["HTML", "CSS", "JavaScript"],
            Link: "https://skpahadi-devfolio.github.io/number_guessing_first_game/"
        },
        {
            title: "URL Shortener App",
            desc: "Developed a full-stack URL shortener using Next.js with secure GitHub authentication via NextAuth Implemented features like generating short URLs, redirect handling, and user-specific link management Improved understanding of authentication, API routes, and modern full-stack development",
            end: ["Next.js", "NextAuth", "GitHub OAuth"],
            Link: "https://bitlinks-five-ebon.vercel.app/"
        },
        {
            title: "KJ&SK Pahadi Rasoi Website",
            desc: "Designed and developed a responsive restaurant website using HTML, CSS, and JavaScript Created an interactive UI with features like menu display, image gallery, and booking section Built using AI-assisted prompt engineering to enhance design and development speed",
            end: ["HTML", "CSS", "JavaScript"],
            Link: "https://skpahadi-devfolio.github.io/KJ-SK-Pahadi-Rasoi/"
        },
        {
            title: "Note Manager App",
            desc: "Built a full-stack note management application using the MERN stack Implemented JWT-based authentication for secure user access Developed CRUD functionality for creating, updating, and deleting notes Strengthened backend API development and database handling skills",
            end: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
            Link: "https://mynotemanager-skweb.netlify.app/"
        }
  ])
  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-10">
      
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>
      
<p className='md:text-left px-5 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent font-bold text-4xl p-5 md:mx-36'>Projects</p>
      {projects.map((item,index)=>{
        return (
          <ScaleIn>
            <div key={index}className='my-12 p-5 w-full max-w-5xl mx-auto flex flex-col gap-3 text-white bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] text-xs md:text-base'>
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <div className='flex gap-4'>
             {item.end.map((tech, index) => {
              return (
                 <p key={index} className='bg-gray-950  px-4 py-2 border border-gray-900'>{tech}</p>
              )
             })}
            </div>
            <p className='text-blue-900 bg-green-500 w-[35vw] max-w-3xs text-center p-2 rounded-md'><a href={item.Link} target='_blank'>View Project</a></p>
          </div>
          </ScaleIn>
        )
      })}
    </div>
  )
}

export default Projects
