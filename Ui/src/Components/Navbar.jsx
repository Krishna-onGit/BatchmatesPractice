import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div>
      <div className=' p-4 '>
       <header className='flex items-center justify-between text-white mx-16'>
        <div className='flex items-center space-x-3'>
          <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-gray-800 overflow-hidden'>
            <img src="/Logo.png" alt=""  className='h-24 w-24 object-contain'/>
          </div>
          <span className='font-bold text-lg'>Batchmates</span>
        </div>
        <div>
        <nav className='flex justify-center gap-6'>
          <a href="" className="hover:text-gray-400 transition font-ligth" >Home</a>
          <a href="" className="hover:text-gray-400 transition font-ligth" >About</a>
          <a href="" className="hover:text-gray-400 transition font-ligth" >Articles</a>
          <a href="" className="hover:text-gray-400 transition font-ligth" >Campus Ambassador</a>
          <a href="" className="hover:text-gray-400 transition font-ligth" >Contact</a>
        </nav>
        </div>
        <div className='text-black'>
          {/* <button className='bg-white text-black p-2 rounded-xl hover:scale-105 transition'>Download Now</button> */}
          <Button variant="outline">Download Now</Button>
        </div>
       </header>
    </div>

    </div>
  )
}

export default Navbar