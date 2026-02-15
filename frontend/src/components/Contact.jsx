import React from 'react'
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

function Contact() {
  return (
    <>
      <section id='contactme' className='contact-us flex flex-col justify-center items-center bg-white mb-10 py-10 text-center'>
        <h1 className='text-3xl font-bold anton-reg'>Contact us</h1>
        <p className='mt-2'>Let’s build something great together<br></br>
          I’m open to full-time roles, internships, and freelance opportunities. Feel free to reach out—I usually respond within 24 hours.</p>
        <div className="contact-icons flex gap-4 mt-4 border border-black rounded-md w-fit p-4 bg-white drop-shadow-[0_4px_4px_gray]">
          <a href="https://github.com/mohamedyusuf787" target='blank'> <FaGithub className='text-black text-2xl hover:cursor-pointer hover:text-3xl ease-out duration-75 ' /></a>
          <a href="https://www.linkedin.com/in/mohamed-yusuf-85702521b/" target="blank"><FaLinkedin className='text-black   text-2xl hover:cursor-pointer hover:text-3xl ease-out duration-75' /></a>
          <a href="https://wa.me/6385417513/?text=Hello,%20Mohamed%20yusuf"> <FaWhatsapp className='text-black   text-2xl hover:cursor-pointer hover:text-3xl ease-out duration-75' /></a>
          <a href="mailto:mohamedyusuf13m2003@gmail.com"><FaEnvelope className='text-black   text-2xl hover:cursor-pointer hover:text-3xl ease-out duration-75' /></a>
        </div>
        <a href="https://wa.me/6385417513/?text=Hello,%20Mohamed%20yusuf"> <button className='button-style mt-2'>Contact now</button></a>
      </section>
    </>
  )
}

export default Contact