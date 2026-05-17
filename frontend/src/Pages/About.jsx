import React from 'react'
import Faderight from '../Animations/Faderight'

const About = () => {
  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-24">
     
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>
      <p className='text-3xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent md:mx-40'>About</p>
    <Faderight>
      <div className="description-left my-10 p-5 w-full max-w-5xl mx-auto flex flex-col gap-3 text-white text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] text-xs md:text-base">
    
          <p>A passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I Work with technologies like React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS to create clean and scalable digital experiences.</p>
          
          <p>I enjoy turning ideas into real-world projects - from portfolio websites to full-stack applications with authentication, APIs, and databases. Currently, I'm improving my backend and problem-solving skills While exploring advanced full-stack development.</p>

          <p>Full Stack Developer|MERN Stack|Next.js Enthusiast</p>
          <p>Building modern web experiences with clean UI & powerful backend systems.</p>
    </div>
    </Faderight>
    </div>
  )
}

export default About
