import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-60 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute top0 left-0 h-full w-full bg-amber-300'>
            <h2>1</h2>
        </div>
    </div>
  )
}

export default RightCard