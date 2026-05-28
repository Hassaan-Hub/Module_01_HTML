import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card image="https://picsum.photos/200/300" user="aman" age={20}/>
      <Card image="https://images.unsplash.com/photo-1716077521105-f0d699ab2047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" user="hassaan" age={35}/>
      <Card image="https://picsum.photos/200/200" user="majid" age={15}/>
      <Card image="https://picsum.photos/100/300" user="kaif poi" age={23}/>
    </div>
  )
}

export default App
