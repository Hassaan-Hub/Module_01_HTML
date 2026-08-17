import React from 'react'
import AppRouter from './routes/AppRouter'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App