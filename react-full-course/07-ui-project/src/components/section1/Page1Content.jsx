import React from 'react'
import { LeftContent } from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-3 px-18 w-full h-[90vh] flex items-center justify-between gap-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content