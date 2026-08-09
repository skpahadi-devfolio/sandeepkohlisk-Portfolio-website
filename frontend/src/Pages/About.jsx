import React from 'react'
import Faderight from '../Animations/Faderight'
import Fadeleft from '../Animations/Fadeleft'

const About = () => {
  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-24">
     
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>
      <p className='text-3xl font-bold md:text-left px-5 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent md:mx-40'>About</p>
    <Faderight>
      <div className="description-left my-10 p-5 w-full max-w-5xl mx-auto flex flex-col gap-3 text-white text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] text-xs md:text-base">
    
          <p>A passionate Full Stack & Mobile App Developer focused on building modern, responsive, and user-friendly web and mobile applications. I work with technologies like React, React Native (Expo), Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Tailwind CSS to create clean, cross-platform, and scalable digital experiences.</p>
          
          <p>I enjoy turning ideas into real-world projects — from interactive web platforms to full-stack mobile apps with secure authentication, RESTful APIs, and robust databases. Currently, I'm improving my backend architecture and problem-solving skills while exploring advanced full-stack & cross-platform development.</p>

          <p>Full Stack & Mobile App Developer | MERN & React Native | Next.js Enthusiast</p>
          <p>Building modern web & mobile experiences with clean UI & powerful backend systems.</p>



    </div>
    </Faderight>
          {/* Total Project Maked */}
          <div className="total-project w-[95vw] md:max-w-5xl mx-auto gap-16 text-white grid grid-cols-1 md:grid-cols-2 background-to-r from-slate-900 to-violet-950">

            <Fadeleft>
              <div className="web-projects flex justify-center items-center gap-5 flex-col bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] p-5 py-8">
              <p className='md:text-2xl text-lg font-semibold'>Web Development Projects</p>
              <p className='bg-gradient-to-r from-slate-950 to-gray-900  text-xl md:p-4 p-3 px-8 rounded-full'>5+ Projects</p>
            </div>
            </Fadeleft>

            <Faderight>
              <div className="mobile-projects flex justify-center items-center gap-5 flex-col bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] p-5 py-8">
              <p className='md:text-2xl text-lg font-semibold'>App Development Projects</p>
              <p className='bg-gradient-to-r from-slate-950 to-gray-900 text-xl md:p-4 p-3 px-8 rounded-full'>2 Projects</p>
            </div>
            </Faderight>
          </div>
    </div>
  )
}

export default About
