import React, { useState } from 'react'

const App = () => {

  // let a = 20;

  // const changeA = () => {
  //   console.log(a);
  //   a++
  //   console.log(a);
  // }
  // const [name, setName] = useState('hassaan')




  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState('hassaan')
  // const [users, setUsers] = useState([10, 20, 30])

  // const changeNum = () => {
  //   setNum(30)
  //   setUsername('kaif payi')
  //   setUsers([40, 50, 60])
  // }



  const [num, setNum] = useState(0)

  const increaseNum = ()=>{
    setNum(num + 1)
  }
  const decreaseNum = ()=>{
    setNum(num - 1)
  }
  const increaseNumFive = ()=>{
    setNum(num + 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button><br />
      <button onClick={increaseNumFive}>increase five</button>


      {/* <h1>Value of a is {num} <br /> {users} <br /> Value of user is {username} </h1>
      <button onClick={changeNum}>Click</button> */}
    </div>
  )
}

export default App