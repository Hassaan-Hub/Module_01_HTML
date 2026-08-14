import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url}>
          <div className='h-32 w-44'>
            <img className='object-cover h-full w-full rounded-xl ' src={props.elem.download_url} alt="image" />
          </div>
          <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card