import React from 'react'
import { RightCardContent } from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden w-60 rounded-3xl relative'>
            <img className='h-full w-full object-cover' src={props.image} alt="" />
            <RightCardContent />
        </div>
    )
}

export default RightCard