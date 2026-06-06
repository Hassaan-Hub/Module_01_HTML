import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Setisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserviced'
    },
    {
      img: 'https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Unsatisfied'
    }
  ]
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
