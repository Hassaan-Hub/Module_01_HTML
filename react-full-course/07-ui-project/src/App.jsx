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
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1779431739556-db15915dbc5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'very satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1664789111672-9cf3ada6c20d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1654272177889-1dd3b0d6aca2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'amazingly satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1490677739661-d3395897c0a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'amazingly satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1759272548449-7b689a81c8fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'seprately satisfied'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      
      <Section2 />
    </div>
  )
}

export default App
