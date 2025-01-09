import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (

    <>
    
    
    
    <div>
      
    <div className='w-full relative flex items-center border-b
     justify-between max-w-6xl mx-auto px-4 my-[30px] py-4 z-50 top-0 left-0  '>
        <Link href="/"
        className='font-bold text-3xl dark:text-white text-yellow-600 '>Glow
         <span className='dark:text-yellow-800 '>Rx</span></Link>




        <div className=' md:flex space-x-[24px] text-[18px] '>
          <ul className='md:flex space-x-[24px] hidden '>
            <li> <Link href="/" className='font-semibold text-yellow-800 dark:text-white  '>Home</Link></li>
            <li> <Link href="Articles" className='font-semibold text-yellow-800 dark:text-white 
             '> Blogs</Link></li>
            <li>
            <Link href="/About" className='font-semibold text-yellow-800 dark:text-white '>About</Link>
            </li>
            <li>
            <Link href="Contact" className='font-semibold text-yellow-800 dark:text-white'>Contact</Link>
            </li>
           
           
          </ul>
          <ModeToggle/>
          <Sheet>
  <SheetTrigger><RxHamburgerMenu
  className='font-bold  md:hidden text-3xl dark:text-white pt-1 '/> 

  </SheetTrigger>
  <SheetContent>
   

  <ul className=' space-x-[24px] py-8 '>
            <li> <Link href="/" className='font-semibold text-yellow-800 dark:text-white  '>Home</Link></li>
            <li> <Link href="Articles" className='font-semibold text-yellow-800 dark:text-white 
             '> Blogs</Link></li>
            <li>
            <Link href="/About" className='font-semibold text-yellow-800 dark:text-white '>About</Link>
            </li>
            <li>
            <Link href="Contact" className='font-semibold text-yellow-800 dark:text-white'>Contact</Link>
            </li>
           
           
          </ul>
  </SheetContent>
</Sheet>

     
          
        
        
       
         
        
        </div>
         
        </div>
    </div>
    
    </>
  )
}

export default Navbar