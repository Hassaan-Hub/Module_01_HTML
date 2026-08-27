import React, { useContext } from 'react'
import Nav from './components/Nav'
import { ThemeContext } from './context/ThemeDataContext';



const App = ({ children }) => {

   const { theme } = useContext(ThemeContext);


  return (
    <div className={theme}>
      <Nav />
    </div>
  )
}

export default App