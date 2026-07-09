import React from 'react'
import TypingAnimation from '../Components/TypingAnimation'
import DeveloperImg from '../assets/Developer.jpg'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import Fadedown from '../Animations/Fadedown'

const Home = () => {
  return (
    <>
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>

      <div className='flex md:flex-row flex-col justify-center items-center gap-10 my-16'>
        {/* short Description */}
        <div className="description-left my-16 p-5 px-1 w-full max-w-xl text-xs md:text-base flex flex-col gap-3 text-white">
          <p className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent font-bold'><TypingAnimation/></p>
          <p>Hi, I'm Sandeep Kohli</p>
          <p>A passionate Full Stack Developer building modern and responsive web applications.</p>
        </div>

        {/* image section */}
       <Fadedown>
        <div className='flex opacity-70 border-white h-[320px] w-[320px] md:h-[60vh] md:w-[28vw] overflow-hidden rounded-full'>
         <img className='object-cover w-full h-full' src={DeveloperImg} alt="" />
       </div>
       </Fadedown>
      </div>


      {/* adding whole component in single page */}
      <About/>
      <Skills/>
      <Projects/>              
      <Education/>
      <Resume/>
      <Contact/>
      </div>
    </>
  )
}

export default Home
