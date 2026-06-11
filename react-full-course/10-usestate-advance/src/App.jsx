import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({ user: 'hassaan', age: 20 })


  // const btnClicked = () => {
  //   const newNum = {...num}
  //   console.log(newNum);
  //   newNum.user = 'sarthak'
  //   newNum.age = 29
  //   setNum(newNum)
  // }


  // const [num, setNum] = useState([10, 20, 30])


  // const btnClicked = () => {
  //   const newNum = [...num]
  //   newNum.push(99,"hassaan")
  //   console.log(newNum);
  //   setNum(newNum)
  // }



  // const [num, setNum] = useState({ user: 'kaif', age: 17 })

  // const btnClicked1=()=>{
  //   setNum(prev=>({...prev,age:50}))
  // }


  const [num, setNum] = useState(0)

  const btnClicked1 = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked1}>Click</button>
    </div>
  )
}

export default App