import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className='h-[80vh] w-2/3 p-5 flex flex-nowrap gap-10 scrollbar-none overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem, idx){
          return <RightCard image={elem.img} id={idx} />
        })}
    </div>
  )
}

export default RightContent