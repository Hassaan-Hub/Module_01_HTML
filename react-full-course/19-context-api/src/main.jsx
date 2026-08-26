import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeDataContext from './context/ThemeDataContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeDataContext>
        <App />
    </ThemeDataContext>
)
