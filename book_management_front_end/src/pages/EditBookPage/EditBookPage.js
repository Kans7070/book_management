import React, { useEffect } from 'react'
import BookForm from '../../components/BookForm/BookForm'
import { useNavigate } from 'react-router-dom'

function EditBookPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login')
    }
  })
  return (
    <BookForm data={'Edit'} />
  )
}

export default EditBookPage