import React from 'react'
// import "../../styles/globals.css"
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from "next/link";
const Header = () => {
  return (
    <header>

    <div className='flex items-center justify-center bg-blue-500 text-2xl text-white font-semibold p-3'>
        <h1>Demo Online Test</h1>
    </div>
   {/* Bottom navbar */}
   <div className='flex items-center mt-4 space-x-5 p-2 pl-6  text-sm'>
    
    <Link href="/">
          <button className='bg-blue-900 text-white p-2 rounded-md flex items-center'>
            All Section
          </button>
          </Link>
          <Link href="https://www.khanacademy.org/science/physics/">
          
          <button className='bg-blue-500 text-white p-2 rounded-md flex items-center'>Physics</button>
          </Link>
          <Link href="https://www.khanacademy.org/science/chemistry">
          <button className='bg-blue-500 text-white p-2 rounded-md flex items-center'>Chemistry</button>
          </Link>
          <Link href="https://byjus.com/maths/">
          <button className='bg-blue-500 text-white p-2 rounded-md flex items-center'>Maths</button>
          
    </Link>
        </div>
    </header>
  )
}

export default Header