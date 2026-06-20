import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask);
    console.log(copyTask);

    setTitle('')
    setDetails('')
  }

  const deleteNode = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex lg:gap-12 bg-black text-white p-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex lg:w-1/2 items-start gap-4 flex-col'>
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full h-32 font-medium py-2 border-2 items-start flex-row outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='w-full px-5 py-2 border-2 bg-white text-black rounded'>Add Note</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-12">
        <h1 className='text-3xl flex justify-center font-bold'>Your Notes</h1>
        <div className="flex flex-wrap gap-x-6 mt-4 h-[90%] overflow-auto scrollbar-none">
          {task.map((elem, idx) => {
            return <div key={idx}
              className="relative h-44 w-[144px] rounded-2xl p-4 text-black bg-white 
                    bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkdtYc7pr86LYZbm80VMbsfUnIBI_M_foMw&s')] 
                    bg-center bg-no-repeat bg-[length:160%]"
            >
              <h2 onClick={()=>{
                deleteNode(idx)
              }} className='absolute bottom-5 right-5 bg-red-500 p-0.5 rounded-full text-xs'>
                <X size={16} color="#ffffff" strokeWidth={2.75} />
              </h2>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className="mt-3 leading-tight font-medium text-gray-500">{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App