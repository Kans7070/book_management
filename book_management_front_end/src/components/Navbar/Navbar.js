import React from 'react'
import { Grid,Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom';

import './Navbar.css'


function Navbar({...props}) {
    const navigate = useNavigate()
    const handleLogout = (e) => {
        localStorage.removeItem('admin')
        navigate('/admin/login')
    }
    return (
        <Grid container className='navbar_holder'>
            <Grid item xs={10} className='navbar'>
                
                <p>Book Management</p>
                { props.data==='Admin'&&<Button onClick={handleLogout}>logout</Button>}
            </Grid>


        </Grid>
    )
}

export default Navbar