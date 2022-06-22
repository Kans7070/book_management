import { Box, Container, Grid, Table, TableCell, TableContainer, TableHead, Paper, TableBody, TableRow, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { booksUrl } from '../../constants/constants'
import './AdminHome.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { editId } from '../../context'

function AdminHome({...props}) {
  const navigate = useNavigate()
  const {setEdit}=useContext(editId)
  const [datas, setDatas] = useState([])
  useEffect(() => {
    axios.get(booksUrl).then((res) => {
      setDatas(res.data)
    })
  }, [])

  const handleCreate = (e) => {
    navigate('/admin/create_book')
  }
  const handleEdit = (id) => {
    setEdit(id)
    navigate('/admin/edit_book')
  }
  const handleDelete = (id) => {
    axios.delete(booksUrl+`/${id}`)
  }
  return (
    <Container >
      <Grid item xs={12}>
        <Box className='main-content-holder'>
          <Box className='content'>
            <div className='navbar'>
              <h2>Books</h2>

              {props.data==='Admin'&&<Button onClick={handleCreate}>Create</Button>}
            </div>
            <div className='list'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow >
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Author</TableCell>
                      <TableCell align="center">Description</TableCell>
                      {props.data==='Admin'&&<TableCell align="center">Action</TableCell>}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {datas.map((data) => 
                      <TableRow key={data.id}>
                        
                        <TableCell align="right">{data.title}</TableCell>
                        <TableCell align="right">{data.author}</TableCell>
                        <TableCell align="right">{data.description}</TableCell>
                        {props.data==='Admin'&&<TableCell align="center"><Button onClick={(e)=>handleEdit(data.id)}>edit</Button><Button onClick={e=>handleDelete(data.id)} color='error'>Delete</Button></TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default AdminHome