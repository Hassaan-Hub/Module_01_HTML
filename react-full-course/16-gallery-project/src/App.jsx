import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    setUserData(response.data)
    console.log(response.data);
  }


  let printUserData = "No User Data"

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div className='h-40 w-44 overflow-hidden rounded-xl' key={idx}>
        <a href={elem.url}>
          <div>
            <img className='h-full w-full object-cover rounded-xl ' src={elem.download_url} alt="image" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='overflow-auto h-screen'>
      <button className='bg-amber-400 text-black rounded-2xl cursor-pointer m-3 px-3 py-1 text-2xl'
        onClick={() => {
          getData();
        }}
      >Get Data
      </button>

      <div className='flex flex-wrap gap-2'>
        {printUserData}
      </div>
    </div>
  )
}

export default App