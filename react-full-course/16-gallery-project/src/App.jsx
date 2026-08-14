import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './component/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=14`)
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [page])

  let printUserData = <h3
    className='text-gray-600 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'
  >
    Loading...
  </h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div className='h-40 w-44 overflow-hidden rounded-xl' key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='overflow-auto h-screen'>

      <div className='flex flex-wrap h-[83%] gap-2 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-2'>
        <button style={{opacity:page === 1 ? 0.5 : 1}}
          className='bg-amber-600 text-black px-4 py-1 active:scale-95 cursor-pointer rounded text-sm'
          onClick={() => {
            if (page > 1) {
              setUserData([])
              setPage(page - 1)
            }
          }}
        >
          Prev
        </button>
        <h2>Page {page}</h2>
        <button
          className='bg-amber-600 text-black px-4 py-1 active:scale-95 cursor-pointer rounded text-sm'
          onClick={() => {
            setPage(page + 1)
            setUserData([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App