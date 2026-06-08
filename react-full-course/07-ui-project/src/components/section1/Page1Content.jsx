import React from 'react'
import { LeftContent } from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-3 px-18 w-full h-[90vh] flex items-center justify-between gap-10'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content