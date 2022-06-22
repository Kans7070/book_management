import { Button, Grid, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { booksUrl } from '../../constants/constants'
import { useNavigate } from 'react-router-dom';
import { editId } from '../../context';


function BookForm({ ...props }) {
  const navigate = useNavigate()
  const { edit } = useContext(editId)
  const initialValues = {
    'title': '',
    'author': '',
    'description': '',
  }
  const initialErrors = {
    'title': '',
    'author': '',
    'description': '',
  }
  const [formData, setFormData] = useState(initialValues)
  const [formError, setFormError] = useState(initialErrors)
  
  useEffect(() => {
    if (edit){

      axios.get(booksUrl+`/${edit}`).then((res) => {
        console.log(res.data)
        setFormData(res.data)
      })
    }else{
      navigate('/admin')
    }
  }, [edit,navigate])
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setFormError({ ...formError, [name]: '', error: '' })
  }
  const handleSubmit = (e) => {
    axios.put(booksUrl+`/${edit}`, formData).then((res) => {
      navigate('/admin')
    }).catch((err) => {
      if (err) {
        setFormError({ ...formError, description: err.description })
      }
      setFormError({ ...formError, error: 'credential invalid' })
    })
  }
  return (
    <Grid container className='content_holder'>
      <Grid item sm={8} md={4}>
        <div className='logo_holder'>
          <div className='logo'>
            <p>Book Management</p>
          </div>
        </div>
        <div className='form_holder content'>
          <div className='page_logo_holder'>
            <div className='page_logo'>
              <p>{props.data} Book</p>
            </div>
          </div>
          <Grid container >
            <Grid item xs={12} md={6} className='form_field_holder'>
              <TextField className={formError.title ? 'form_field error_field' : 'form_field'} id="filled-basic" name='title' label={formError.title ? formError.title : "title"} variant="filled" onChange={handleOnChange} value={formData.title}/>
            </Grid>
            <Grid item xs={12} md={6} className='form_field_holder'>
              <TextField className={formError.author ? 'form_field error_field' : 'form_field'} id="filled-basic" name='author' label={formError.author ? formError.author : "author"} type='author' variant="filled" onChange={handleOnChange} value={formData.author} />
            </Grid>
            <Grid item xs={12} className='form_field_holder'>
              <TextField className={formError.description ? 'form_field error_field' : 'form_field'} id="filled-basic" name='description' label={formError.description ? formError.description : "description"} variant="filled" onChange={handleOnChange} value={formData.description} multiline />
            </Grid>
            {formError.error && <Grid item xs={12} className='form_field_holder error'>{formError.error}</Grid>}
            <div className="submit_holder">
              <Button className='submit_field' onClick={handleSubmit} variant="contained">Submit</Button>
            </div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default BookForm