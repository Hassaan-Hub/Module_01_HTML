import React from 'react'
import { RightCardContent } from './RightCardContent'

const RightCard = () => {
    return (
        <div className='h-full overflow-hidden w-60 rounded-3xl relative'>
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <RightCardContent />
        </div>
    )
}

export default RightCard