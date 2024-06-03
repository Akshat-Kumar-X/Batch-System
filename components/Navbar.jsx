"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <header className='w-full'>
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show" 
          className='max-w-7xl nav mx-auto  z-[1000]'
        >
          <div className='flex justify-center items-center gap-10'>
            <Link href='/' className='flex items-center gap-1'>
              <Image 
                  src="/icons/logo.svg" 
                  width={120}
                  height={120}
                  alt="logo"
              />
            </Link>
            <ul className='md:flex justify-center items-center gap-5 font-medium text-xl hidden'>
              <li className='text-[#FF5555] font-extrabold hover:text-[#802929] duration-300'>
                <Link href='#hero'>Home</Link>
              </li>
              <li className='hover:text-[#FF5555] duration-300' ><Link href='#about'>About Us</Link></li>
              <li className='hover:text-[#FF5555] duration-300' ><Link href='#pricing'>Pricing</Link></li>
              <li className='hover:text-[#FF5555] duration-300' ><Link href='#features'>Features</Link></li>
            </ul>
          </div>
          <button 
              className='md:hidden text-2xl' 
              onClick={() => { setIsMenuOpen(!isMenuOpen); }}
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
          <ul className={`flex flex-col z-[1000] justify-center items-center gap-5 py-5 px-10 font-medium text-xl absolute top-[-5px] right-0 shadow-lg rounded-xl bg-white transition-transform transform ${isMenuOpen ? 'translate-y-10 -translate-x-11' : '-translate-y-full -translate-x-11'}`}>
            <li className='flex items-center justify-center'>
              <Link href='#hero'>Home</Link>
            </li>
            <li onClick={() => { setIsMenuOpen(!isMenuOpen); }}  className='flex items-center justify-center hover:text-[#FF5555] duration-300'><Link href='#about'>About Us</Link></li>
            <li onClick={() => { setIsMenuOpen(!isMenuOpen); }}  className='flex items-center justify-center hover:text-[#FF5555] duration-300'><Link href='#pricing'>Pricing</Link></li>
            <li onClick={() => { setIsMenuOpen(!isMenuOpen); }}  className='flex items-center justify-center hover:text-[#FF5555] duration-300'><Link href='#features'>Features</Link></li>
            <li onClick={() => { setIsMenuOpen(!isMenuOpen); }}  className='flex items-center justify-center hover:text-[#FF5555] duration-300'>
              <button  className=' bg-zinc-900 rounded-[5px] px-10 py-4 text-white hover:bg-zinc-700 hover:scale-105  duration-300'>
                <Link href='#download'>Download</Link>
              </button>
            </li>
          </ul>
          
          <button 
            className='md:block hidden z-[1000] bg-zinc-900 rounded-[5px] px-10 py-4 text-white hover:bg-zinc-700 hover:scale-105  duration-300'
          >
            <Link href='#download'>Download</Link>
          </button>
        </motion.nav>
    </header>
  )
}

export default Navbar;
