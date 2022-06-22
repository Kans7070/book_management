import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLogin from '../../components/AdminLogin/AdminLogin'

function AdminLoginPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('admin')) {
      navigate('/admin')
    }
  })
  return (
    <AdminLogin />
  )
}

export default AdminLoginPage