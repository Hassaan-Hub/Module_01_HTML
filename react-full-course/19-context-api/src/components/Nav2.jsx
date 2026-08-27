import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeDataContext'

const Nav2 = ({ children }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='flex gap-5 items-center'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <button className='bg-amber-600 rounded py-1 px-3'
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>
        </div>
    )
}

export default Nav2