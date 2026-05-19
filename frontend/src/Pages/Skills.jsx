import React from 'react'
import { useState } from 'react'
import Fadeup from '../Animations/Fadeup'


const Skills = () => {

  const [Techcards, setTechcards] = useState([
    {
      title: "Frontend Development",
      element: ["React.js","Next.js","Javascript(ES6+)","HTML5","CCS3","Tailwind CSS","Responsive Web Design"]
    },
    {
      title: "Backend Development",
      element: ["Node.js","Express.js","REST APIs","Authentication","Server-Side Development"]
    },
    {
      title: "Database & other Tools",
      element: ["MongoDB", "PostgreSQL","Git","GitHub","Postman"]
    },
    {
      title: "Soft Skills",
      element: ["Problem Solving","Team Collaboration","Communication","Continous Learning","Time Management"]
    }
  ])

  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-16">
      
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>

      <h1 className='text-3xl font-bold md:text-left px-5 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent md:mx-40'>Technical Skills</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-[82vw] max-w-5xl mx-auto gap-5 text-xs md:text-base'>
      
      {/* frontend Development skill */}
      
        {Techcards.map((item, index)=>{
          return (
              <Fadeup>
            <div key={index} className="m-2 text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] flex flex-col items-center gap-8 pb-5">
                <div className="techtitle bg-pink-900 w-full text-center">{item.title}</div>
              <div className="techelement flex flex-col text-purple-900">{item.element.map((tech,i)=>{
                return(
                  <p key={i}>{tech}</p>
                )
              })}</div>
            </div>
              </Fadeup>
          )
        })}
      
    </div>
    </div>
  )
}

export default Skills
