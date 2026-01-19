import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import appwriteService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await appwriteService.login(data)
            if (session) {
                const userData = await appwriteService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-4'>
            <div className='w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8'>
                <div className='flex justify-center mb-6'>
                    <Logo width={'100'} height={'100'} />
                </div>
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white'>Login to Your Account</h2>
                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                <p className='text-sm text-center text-gray-600 dark:text-gray-400 mt-4'>
                    Don't have an account?{' '}
                    <Link to="/register" className='text-blue-500 hover:underline'>
                        Register here
                    </Link>
                </p>  
                <form onSubmit={handleSubmit(login)}></form>
                <div className='mb-4'>
                    <Input 
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true, validate: { matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Invalid email address" } })}
                    />
                </div>
                <div className='mb-6'>
                    <Input 
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                </div>
                <Button type="submit" className="w-full">Login</Button>             
            </div>
        </div>
    )
}

export default Login
