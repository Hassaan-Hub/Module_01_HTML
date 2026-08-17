import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();
  const btnClicked = () => {
    navigate('/');
  }

  return (
    <div>
      <button onClick={btnClicked}
        className='bg-emerald-700 py-2 px-5 m-2 active:scale-95 cursor-pointer rounded'>Return to Home Page</button>
      <h1>About Page</h1>
    </div>
  )
}

export default About