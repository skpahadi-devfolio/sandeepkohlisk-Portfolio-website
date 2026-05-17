import React from 'react'
import Fadeleft from '../Animations/Fadeleft'
import Faderight from '../Animations/Faderight'


const Education = () => {
  return (
    <div class="relative min-h-screen w-full bg-slate-950 overflow-hidden py-16">
      
      <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>
     <p className='text-3xl font-bold md:text-left px-5 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent md:mx-40'>Education</p>
    <div className='my-16 p-7 w-full max-w-5xl mx-auto flex flex-col gap-7 text-white text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] text-xs md:text-base'>

     {/* first section */}
     <Fadeleft>
      <section className='text-black bg-gradient-to-br from-[#400350] via-[#170225] to-[#11041b] p-4 text-white'>
     <p>Bachelor of Computer Applications (BCA)</p>
     <p>Modern College of Professional Studies</p>
     <p>2022 – 2025 | 70%</p>
     <p>Completed Bachelor of Computer Applications with a strong foundation in programming, web development, database management, and software development concepts. During the course, I worked on frontend and backend technologies while building practical full-stack projects using modern web technologies.</p>
     </section>
     </Fadeleft>


     {/* second section */}
     <Faderight>
      <section className='text-black bg-gradient-to-br from-[#400350] via-[#170225] to-[#11041b] p-4 text-white'>
      <p>Higher Secondary Education (12th)</p>
     <p>Sahil Public School</p>
     <p>CBSE Board | 2022 | 60%</p>
     <p>Completed higher secondary education with a focus on academic fundamentals and technical learning while developing interest in computers and web technologies.</p>
     </section>
     </Faderight>


     {/* third section */}
     <Fadeleft>
      <section className='text-black bg-gradient-to-br from-[#400350] via-[#170225] to-[#11041b] p-4 text-white'>
      <p>Secondary Education (10th)</p>
     <p>Sahil Public School</p>
     <p>CBSE Board | 2020 | 48%</p>
     <p>Completed secondary education and built the foundation for further studies and technical growth.</p>
     </section>
     </Fadeleft>
    </div>
    </div>
  )
}

export default Education
