import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-amber-500 p-4 flex justify-between items-center ">
      <div className="flex items-center ml-10">
        <img src="./image/logo.png" alt="" className='h-20 w-20 mr-2'/>

        <span className="text-white font-semibold text-lg">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to ="/Home" className="text-white hover:text-red-500 text-xl">หน้าหลัก</NavLink></li>
        <li><NavLink to ="/Course" className="text-white hover:text-red-500 text-xl">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to ="/Contact" className="text-white hover:text-red-500 text-xl">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar