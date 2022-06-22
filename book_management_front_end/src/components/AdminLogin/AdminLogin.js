import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import axios from 'axios';
import {logInUrl} from '../../constants/constants'


function AdminLogin() {
  const navigate = useNavigate()
  useEffect(() =>{
    if (localStorage.getItem('admin')){
      navigate('/admin')
    }
  })
  const initialValues = {
    'email': '',
    'password': '',
  }
  const initialErrors = {
    'email': '',
    'password': '',
  }
  const [formData, setFormData] = useState(initialValues)
  const [formError, setFormError] = useState(initialErrors)
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setFormError({ ...formError, [name]: '',error:'' })
  }
  const handleSubmit = (e) => {

    axios.post(logInUrl,formData).then((res) => {
      localStorage.setItem('admin',formData)
      navigate('/admin')
    }).catch((err) => {
      setFormError({ ...formError, error: 'credential invalid'})
    })
  }
  return (
    <Grid container className='content_holder'>
      <Grid item xs={10} sm={8} md={4}>
        <div className='logo_holder'>
          <div className='logo'>
            <p>Book Management</p>
          </div>
        </div>
        <div className='form_holder content'>
          <div className='page_logo_holder'>
            <div className='page_logo'>
              <p>Admin Login</p>
            </div>
          </div>
          <Grid container >
            <Grid item xs={12} md={6} className='form_field_holder'>
              <TextField className={formError.email ? 'form_field error_field' : 'form_field'} id="filled-basic" name='email' label={formError.email ? formError.email : "Email"} variant="filled" onChange={handleOnChange} />
            </Grid>
            <Grid item xs={12} md={6} className='form_field_holder'>
              <TextField className={formError.password ? 'form_field error_field' : 'form_field'} id="filled-basic" name='password' label={formError.password ? formError.password : "Password"} type='password' variant="filled" onChange={handleOnChange} />
            </Grid>
            {formError.error && <Grid item xs={12} className='form_field_holder error'>{formError.error}</Grid>}
            <div className="submit_holder">
              <Button className='submit_field' onClick={handleSubmit} variant="contained">Log In</Button>
            </div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default AdminLogin