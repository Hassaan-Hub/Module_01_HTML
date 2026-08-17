import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4 font-bold text-lg'>
        <Link to='/product/mens'>Mens</Link>
        <Link to='/product/womens'>Womens</Link>
        <Link to='/product/kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product