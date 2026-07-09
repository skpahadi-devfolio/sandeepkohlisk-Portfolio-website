import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {

  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className='relative flex justify-between items-center p-4 bg-violet-950'>
        <div className='text-3xl font-bold pacifico'>Sandeep Kohli</div>
      <nav className='hidden md:flex gap-7'>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/"}>Home</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/about"}>About</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/projects"}>Projects</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/skills"}>Skills</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/education"}>Education</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/resume"}>Resume</NavLink>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/contact"}>Contact</NavLink>
      </nav>

      {/* Mobile hamburger */}
      <div className='relative text-3xl cursor-pointer md:hidden' onClick={()=>{setmenuOpen(!menuOpen)}}>
        {menuOpen ? <FiX/> : <FiMenu/>}
      </div>

       {/* mobile menu */}
      {menuOpen && (
        <div className='absolute top-20 left-0 w-[65vw] flex flex-col gap-6 px-6 py-6 md:hidden bg-gray-700 z-50'>
        <NavLink className={(e) => {return e.isActive?"red":""}} to={"/"}>Home</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/about"}>About</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/projects"}>Projects</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/skills"}>Skills</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/education"}>Education</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/resume"}>Resume</NavLink>
          <NavLink className={(e) => {return e.isActive?"red":""}} to={"/contact"}>Contact</NavLink></div>
      )}
    </div>

  )
}

export default Navbar
