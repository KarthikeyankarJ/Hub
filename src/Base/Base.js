import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Base({title, description, children}) {
    const navigate = useNavigate()
  return (
    <div className='main-container'>
        <header>
        <nav>
        <AppBar position="static">
  <Toolbar variant="dense">
    <div className='logo-pin'>
        <img src='https://www.guvi.in/build/images/foot-guvi-logo.7516cb093c7727e01f9332234baea44a.webp'/>
    </div>
    <IconButton edge="start" color="inherit" aria-label="Dashboard" sx={{ mr: 2 }} onClick={()=>navigate('/')}>
    Home
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="students" sx={{ mr: 2 }} onClick={()=>navigate('/students')}>
        Players
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="Add Students" sx={{ mr: 2 }} onClick={()=>navigate('/add-students')}>
        Add Players
    </IconButton>
  </Toolbar>
</AppBar>
</nav>
    </header>
        <main>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className='container'>
                {children}
            </div>
        </main>
    </div>
  )
}

export default Base