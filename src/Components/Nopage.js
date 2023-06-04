import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'

function Nopage() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>We lost you 404 Error</h1>
    <h2>please click the below button</h2>
    
    <h1></h1>
    <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default Nopage