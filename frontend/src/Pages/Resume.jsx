import React from 'react'
import MyCv from "../assets/SANDEEP KOHLI TECH CV.pdf"
import Fadeup from '../Animations/Fadeup'

const Resume = () => {
  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-16">
     
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>

        <h1 className='text-3xl font-bold md:text-left px-5 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent md:mx-40'>Resume</h1>
     <Fadeup>
       <div className='my-16 p-5 w-full max-w-5xl mx-auto flex flex-col gap-12 text-white text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] text-xs md:text-base'>
      <p>Creative developer focused on building interactive and user-friendly web experiences with modern technologies. Experienced in developing full-stack projects, responsive interfaces, and scalable applications while continuously learning and exploring new development concepts.</p>

      <p className='bg-green-600 text-blue-800 w-[49vw] max-w-xs text-center p-4 rounded-xl '><a href={MyCv}>Download Resume</a></p>
      </div>
     </Fadeup>
    </div>
  )
}

export default Resume
