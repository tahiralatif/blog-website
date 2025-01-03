import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

function Navbar() {
  return (

    <div className='w-full relative flex items-center
     justify-between max-w-6xl mx-auto px-4 my-[30px] border-b py-4 shadow-lg '>
        <Link href="/"
        className='font-bold text-3xl'>{"𝑬𝒙𝒑𝒍𝒐𝒓𝒆 "}
         <span className='text-indigo-700'>{" 𝑷𝒂𝒌𝒊𝒔𝒕𝒂𝒏"}</span></Link>

        <div className=' space-x-6 text-[18px]'>
          <Link href="/" className='font-semibold'>Home</Link>
        <Link href="Articles" className='font-semibold '> Blogs</Link>
        <Link href="/About" className='font-semibold '>About</Link>
        <Link href="Contact" className='font-semibold '>Contact</Link>
         
         <ModeToggle/>
        </div>
         
        </div>
  )
}

export default Navbar