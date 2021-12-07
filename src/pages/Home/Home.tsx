import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/explore")
    }
    return (
        <div className='my-5 d-flex flex-column align-items-center'>
            <Alert variant='success' className='d-flex flex-column align-items-center shadow-lg'>
                <h1 className=''>Welcome to customtables!</h1>
                <h2>Your place to buy tables</h2>
            </Alert>
            <Button variant='warning' className='my-5' onClick={handleNavigate}>Explore our products</Button>
        </div>
    )
}

export default Home
