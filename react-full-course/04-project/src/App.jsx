import React from 'react'

const App = () => {

  const arr = [10, 20, 30, 40]
  return (
    <div>
      {arr.map((elem)=>{
        return <h1>hello</h1>
      })}
    </div>
  )
}

export default App
