import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

export const LeftContent = () => {
    return (
        <div className='h-[80vh] w-1/4 flex flex-col justify-between '>
            <HeroText />
            <Arrow />
        </div>
    )
}
