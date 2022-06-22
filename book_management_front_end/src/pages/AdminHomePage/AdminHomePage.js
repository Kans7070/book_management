import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHome from '../../components/AdminHome/AdminHome'
import Navbar from '../../components/Navbar/Navbar'

function AdminHomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            navigate('/admin/login')
        }
    })
    const admin = 'Admin'
    return (
        <div>
            <Navbar data={admin} />
            <AdminHome data={admin} />
        </div>
    )
}

export default AdminHomePage