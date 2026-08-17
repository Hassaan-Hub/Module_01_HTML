import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const name = useParams()

    return (
        <div>
            <h1>{name.id} CoursesDetails Page</h1>
        </div>
    )
}

export default CoursesDetails