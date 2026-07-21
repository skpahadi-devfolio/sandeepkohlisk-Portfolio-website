import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { contactMessage } from '../services/contactServices.js'
import Fadeleft from '../Animations/Fadeleft.jsx'
import Faderight from '../Animations/Faderight.jsx'

const Contact = () => {
  const [form, setform] = useState({ name: "", email: "", message: "" })

  
  //handleChange function for validation in contact form
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value})
  }


  //handleclick function
  const handleClick = async(e) => {
    e.preventDefault();

    if(!name || !email || !message){
      toast.error("All Fields are Required");
      return;
    }
    try {
      const result = await contactMessage(form)
      if(!result.success){
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      setform({name: "", email: "", message: ""});
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">

      <div className="absolute pointer-events-none bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute pointer-events-none bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className='relative pb-20'>
        <h1 className='my-8 text-3xl font-bold text-center  animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>Contact</h1>

        <Faderight>
          <div className="md:left-16 md:absolute text-white md:my-20 my-12 md:top-12 flex gap-8 flex-col">
       <div className="title-left text-center md:text-2xl ">
         <p>A simple title prefix</p>
        <p className='md:text-4xl text-2xl'>SEND ME A MESSAGE</p>
       </div>

       <div className="address text-center md:text-xl text-xs">
        <p>Getting in touch is easy!</p>
        <p>RC-881, Vandana Enclave Khora, Shital Vihar</p>
        <p> Noida 201301</p>
        <p>+91 9582579119</p>
        <p>sandeepkohli180@gmail.com</p>
       </div>
      </div>
        </Faderight>
      

      <div className='md:absolute md:right-28 md:top-12'>
      <Fadeleft>
      <form className='text-black bg-gradient-to-br from-[#040005] via-[#0a0011] to-[#11041b] w-[95vw] md:max-w-xl md:p-10 p-4 rounded-xl mx-auto my-10 text-xs md:text-base shadow-lg shadow-blue-900' action="">
        <div className='flex flex-col justify-center items-center gap-5'>
          <input name='name' value={form.name} onChange={handleChange} className='bg-white p-4 rounded-md w-full max-w-lg' type="text" placeholder='Enter your Name' required />
          <input name='email' value={form.email} onChange={handleChange} className='bg-white p-4 rounded-md w-full max-w-lg' type="email" placeholder='Enter your Email' required />
          <textarea className='bg-white p-4 rounded-md w-full max-w-lg' name="message" value={form.message} onChange={handleChange} placeholder='Enter Message'></textarea>
          <button onClick={handleClick} className='bg-orange-500 p-4 rounded-md w-full max-w-lg' type="submit">Send Message</button>
        </div>
      </form>
      </Fadeleft>
      </div>
      </div>
    </div>
  )
}

export default Contact
