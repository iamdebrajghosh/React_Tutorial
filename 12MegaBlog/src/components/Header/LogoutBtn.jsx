import React from 'react'
import { useDispatch } from 'react-redux'
import appwriteService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const handleLogout = () => {
        appwriteService.logout()
        .then(() => {
            dispatch(logout())
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
            Logout
        </button>
    )
}

export default LogoutBtn
