import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Hassaan</h1>
            <button className={styles.btn}>login</button>
        </div>
    )
}

export default Header