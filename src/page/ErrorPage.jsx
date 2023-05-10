import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100  '>
            <h1 className='text-danger' >404! </h1>
            <h1 className='text-danger'>Page not found</h1>
            <p className='text-warning'>kata aako bhai? kei xaina ta yesma</p>

            <div className='d-flex gap-4 w-25'>
                <button className='btn btn-outline-warning ' onClick={() => navigate('/')}>Go to Home</button>
                <button className='btn btn-outline-warning ' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default ErrorPage