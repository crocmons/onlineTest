import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        
          <Link href="https://byjus.com/jee/entrance-exams/" className='flex items-center mt-4 space-x-5 p-2 pl-6  text-sm'>
          <button className='bg-blue-500 text-white p-1 px-2 rounded-sm flex items-center'>
            Clear Response
          </button>
          <button className='bg-blue-500 text-white p-1 px-2 rounded-sm flex items-center'>Review</button>
          <button className='bg-blue-500 text-white p-1 px-2 rounded-sm flex items-center'>Dump</button>
          <button className='bg-blue-500 text-white p-1 px-2 rounded-sm flex items-center'>Previous</button>
          <button className='bg-blue-900 text-white p-1 px-2 rounded-sm flex items-center'>Next</button>
          

          </Link>
        <div className='flex items-center justify-center bg-gray-500 text-2xl text-white font-semibold p-3'>
        <h3>© Addmen</h3>
    </div>
    </div>
  )
}

export default Footer