import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeDataContext'

const Nav2 = ({ children }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme);

    const themeFunction = () => {
        console.log('theme changed');
        setTheme('dark')
    }

    return (
        <div className='flex gap-5'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <button onClick={() => themeFunction()}>{theme}</button>
        </div>
    )
}

export default Nav2