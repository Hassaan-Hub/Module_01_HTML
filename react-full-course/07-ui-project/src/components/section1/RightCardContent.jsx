import React from 'react'

export const RightCardContent = () => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col 
            justify-between'>
            <h2 className='bg-white text-1xl font-bold h-10 w-10 rounded-full flex items-center 
                justify-center'>1</h2>
            <div className=''>
                <p className='text-lg mb-6 text-white leading-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure dolorem ad debitis consequatur!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white px-5 rounded-full font-medium'>Setisfied</button>
                    <button className='bg-blue-600 text-white px-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}
