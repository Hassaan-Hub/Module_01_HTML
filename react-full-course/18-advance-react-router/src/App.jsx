import React from 'react'
import AppRouter from './routes/AppRouter'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Navbar2 from './component/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App