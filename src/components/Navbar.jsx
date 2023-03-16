import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.betweenCenter} w-full py-6 text-red-500`}>
      {/* Logo */}
      <img src={logo} alt='logo hookbank' className='w-[124px] h-[32px]' />
      {/* Navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, idx) => (
          <li
            key={idx}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* Menu */}
      <div className='sm:hidden flex justify-end items-center flex-1 '>
        <img
          src={toggle ? close : menu}
          onClick={() => {
            setToggle((prev) => !prev)
          }}
          alt='menu icon'
          className=' w-[28px] h-[28px] object-contain'
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, idx) => (
              <li
                key={idx}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  idx === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
