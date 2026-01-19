import React, { useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function ProtectedLayout({ children, auhtentication = true}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        if (auhtentication && authStatus !== auhtentication) {
            navigate('/login')
        } else if (!auhtentication && authStatus === true) {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(false)
    }, [authStatus, navigate, auhtentication])
    if (loading) return null
    return (
        <div>{children}</div>
    )
}

