import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-start sm:h-28 h-20 bg-gray-700">
        <NavLink to="/" className="mx-2 sm:text-xl rob text-xs text-slate-50 hover:bg-slate-50 hover:text-slate-950 p-1 sm:p-2 ease-out duration-500 rounded hover:cursor-pointer hover:scale-105">
          Home
        </NavLink>
        <NavLink to="/projects" className="mx-2 sm:text-xl rob text-xs text-slate-50 hover:bg-slate-50 hover:text-slate-950 p-1 sm:p-2 ease-out duration-500 rounded hover:cursor-pointer hover:scale-105">
          Projects
        </NavLink>
        <div className='flex items-center lg:ml-5'>
          <h1 className='text-slate-50'>Links</h1>
          <SocialIcon url='https://github.com/kshitiz-sc' bgColor='white' fgColor='black' target='_blank' rel='noreferrer' className='mx-2 icons'/>
          <SocialIcon url='https://www.linkedin.com/in/kshitiz-singh-chauhan-696242212/' target='_blank' rel='noreferrer' fgColor='white' className='icons'/>
        </div>
      </nav>
  )
}

export default Navbar