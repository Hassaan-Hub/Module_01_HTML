import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                navigate('/');
            }}
                className='bg-emerald-700 py-2 px-5 m-2 active:scale-95 cursor-pointer rounded'
            >
                Return to Home Page
            </button>
            <button onClick={() => {
                navigate(-1);
            }}
                className='bg-emerald-700 py-2 px-5 m-2 active:scale-95 cursor-pointer rounded'
            >
                Back
            </button>
        </div>
    )
}

export default Navbar2