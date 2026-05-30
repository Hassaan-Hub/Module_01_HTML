import React from 'react'
import { RiBookmarkLine } from "react-icons/ri";

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div className="top">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="" />
          <button>Save <RiBookmarkLine size={10} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
