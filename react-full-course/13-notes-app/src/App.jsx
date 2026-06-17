import React, { useState } from 'react'

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
        <div className="flex flex-wrap gap-5 mt-4 h-full overflow-auto scrollbar-none">
          {task.map((elem, idx) => {
            return <div key={idx} className="h-44 w-36 rounded-2xl text-black bg-white">
              <h3>{ elem.title }</h3>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App