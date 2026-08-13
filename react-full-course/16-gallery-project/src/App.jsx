import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await response.json()
  //   console.log(data);
  // }


  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);
  // }

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>data</button>
      <div>
        {data.map((elem, idx) => {
          return <h1>hello, {elem.username}, {idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App