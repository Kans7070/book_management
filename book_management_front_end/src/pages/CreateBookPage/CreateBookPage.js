import React, { useEffect } from 'react'
import BookForm from '../../components/BookForm/BookForm'
import {useNavigate} from 'react-router-dom'

function CreateBookPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login')
    }
  })
  return (
    <BookForm data={'Create'} />
  )
}

export default CreateBookPage