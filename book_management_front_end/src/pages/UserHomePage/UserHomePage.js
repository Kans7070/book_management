import React, { useEffect } from 'react'
import AdminHome from '../../components/AdminHome/AdminHome'
import Navbar from '../../components/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'

function UserHomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('admin')) {
            navigate('/admin')
        }
    })
    const user = 'User'
    return (
        <div>
            <Navbar data={user} />
            <AdminHome data={user} />
        </div>
    )
}

export default UserHomePage