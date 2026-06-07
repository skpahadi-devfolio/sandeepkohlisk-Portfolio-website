import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <div>
      <TypeAnimation
      sequence={[
        'Mern Stack Developer', // Types 'Mern stack Developer'
        1000,                  // Waits 1s
        'Full Stack Developer', // Full stack Developer'
        2000,
        'React Native Mobile App Developer',
        2000,                  //Frontend Developer
        'Software Developer',    //software developer
        2000,
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      className='md:text-4xl text-2xl'
    />
    </div>
  )
}

export default TypingAnimation