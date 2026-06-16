import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submited');

  }

  return (
    <div className='h-screen lg:flex lg:gap-12 bg-black text-white p-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex lg:w-1/2 items-start gap-4 flex-col'>
          <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
        />
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full h-32 font-medium py-2 border-2 items-start flex-row outline-none rounded'
        />
        <button className='w-full px-5 py-2 border-2 bg-white text-black rounded'>Add Note</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-6">
        <h1 className='text-3xl flex justify-center font-bold'>Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-4 h-full justify-center overflow-auto scrollbar-none">
          <div className="h-44 w-36 rounded-2xl bg-white"></div>
          <div className="h-44 w-36 rounded-2xl bg-white"></div>
          <div className="h-44 w-36 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App