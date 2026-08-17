import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import NotFound from '../pages/NotFound'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import Kids from '../pages/Kids'
import Courses from '../pages/Courses'
import CoursesDetails from '../pages/CoursesDetails'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/courses/:id' element={<CoursesDetails />} />
                
                <Route path='/product' element={<Product />}>
                    <Route path='/product/mens' element={<Mens />} />
                    <Route path='/product/womens' element={<Womens />} />
                    <Route path='/product/kids' element={<Kids />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AppRouter