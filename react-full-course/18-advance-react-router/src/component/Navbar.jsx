import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 bg-cyan-900 text-white px-8'>
        <h2 className='font-medium text-3xl'>Saylani</h2>
        <div className='flex gap-10'>
            <Link className='font-medium text-2xl' to='/'>Home</Link>
            <Link className='font-medium text-2xl' to='/about'>About</Link>
            <Link className='font-medium text-2xl' to='/product'>Product</Link>
            <Link className='font-medium text-2xl' to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar