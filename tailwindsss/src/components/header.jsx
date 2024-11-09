import React from 'react'
import darkModeİmg from "../assets/darkMode.svg"
const Header = () => {
  return (
     <header className='bg-[#1e232e] py-8 px-16' >
      <div className=' container mx-auto flex justify-between items-center'>
        <div className='flex items-center  gap-12  '>
            <img  className='h-8 cursor-pointer' src="https://startup.nextjstemplates.com/images/logo/logo.svg" alt="" />
            <nav className='flex items-center gap-8 text-xl'>
                <a href="#" className='text-[#ffffffb3] text-lg hover:text-white'> Home</a>
                <a href="#" className='text-[#ffffffb3] text-lg hover:text-white'> About</a>
                <a href="#" className='text-[#ffffffb3] text-lg hover:text-white'> Blog</a>
                <a href="#" className='text-[#ffffffb3] text-lg hover:text-white'> Support</a>
                <a href="#" className='text-[#ffffffb3] text-lg hover:text-white'> Pages</a>

            </nav>
                <div className='  flex items-center gap-4'>
                 <button className='text-white font-semibold tracking-wide hover:text-gray-300 transition-all  duration-200'>Sign in</button>
                 <button className='text-white font-semibold tracking-wide  bg-blue-700 py-2 px-4 rounded-md' >Sign up</button>
                 <img  className='w-6' src={darkModeİmg} alt="" />
                 </div>
        </div>
      </div>
     </header>
  )
}

export default Header