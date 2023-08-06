import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-start sm:h-28 h-20 bg-gray-700">
        <NavLink to="/" className="mx-2 sm:text-xl rob text-lg text-slate-50 hover:bg-slate-50 hover:text-slate-950 p-1 sm:p-2 ease-out duration-500 rounded hover:cursor-pointer hover:scale-105">
          Home
        </NavLink>
        <NavLink to="/projects" className="mx-2 sm:text-xl rob text-lg text-slate-50 hover:bg-slate-50 hover:text-slate-950 p-1 sm:p-2 ease-out duration-500 rounded hover:cursor-pointer hover:scale-105">
          Projects
        </NavLink>
      </nav>
  )
}

export default Navbar