import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export default function Navbar() {
    const[showMenu,setshowMenu]=useState(false);
  return (
    <nav className='fixed w-full z-50 bg-black backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
                <div>
                   <a href='#'className=' text 4xll font-bold text-white'>
                     Emma
                    <span className='text-purple-500'>Whatson</span>
                    <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
                  </a>
               </div>
               <div className='hidden md:flex space-x-10'>
                  <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Home</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                  <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>About</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                  <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Skills</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                  <a href='#projects' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Projects</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                  <a href='#experience' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Experience</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                  <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Contact</span>
                   <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
                  </a>
              </div>
        </div>
        <div >
            <div className='md:hidden'>
                {
                    showMenu?
                    <FaXmark onClick ={()=>setshowMenu(!showMenu)}className='text-2xl cursor-pointer'/>: 
                    <FaBars  onClick={()=>setshowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
               }
               
                
               
            </div>
            


        </div>
         
         {
            showMenu&&(
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a  onClick ={()=>setshowMenu(!showMenu)} href='#home' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Home</span>
                   
                  </a>

                  <a   onClick ={()=>setshowMenu(!showMenu)}href='#about' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>About</span>
                   
                  </a>

                  <a onClick ={()=>setshowMenu(!showMenu)} href='#skill' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Skill</span>
                   
                  </a>

                  <a  onClick ={()=>setshowMenu(!showMenu)} href='#project' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Project</span>
                   
                  </a>

                  <a  onClick ={()=>setshowMenu(!showMenu)}href='#experience' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Experience</span>
                   
                  </a>

                  <a onClick ={()=>setshowMenu(!showMenu)} href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                   <span>Contact</span>
                   
                  </a>

                </div> 
            )
         }
    
            
    </nav>
    
        
    
)
}

