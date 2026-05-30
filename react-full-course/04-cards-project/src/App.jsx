import React from 'react'
import { RiBookmarkLine } from "react-icons/ri";

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div className="top">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="" />
          <button>Save <RiBookmarkLine /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
        </div>
      </div>
    </div>
  )
}

export default App
