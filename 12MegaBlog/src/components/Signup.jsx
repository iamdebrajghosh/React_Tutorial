import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const signup = async (data) => {  
        setError("")
        try {
            const userData = await appwriteService.createAccount(data)
            if (userData) {
                const userData = await appwriteService.getCurrentUser()
                if (userData) dispatch(login(userData))
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
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white'>Create an Account</h2>
                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                <p className='text-sm text-center text-gray-600 dark:text-gray-400 mt-4'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-blue-500 hover:underline'>
                        Login here
                    </Link>
                </p>  
                <form onSubmit={handleSubmit(signup)}></form>
                <div className='mb-4'>
                    <Input 
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                    />
                </div>
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
                <Button type="submit" className="w-full">Signup</Button>             
            </div>
        </div>
    )
}
export default Signup
