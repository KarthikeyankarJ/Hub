import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function EditStudents({studId, students, setStudents}) {
  const {id} = useParams()
  const navigate = useNavigate()
  const [idx, setIdx] = useState("")
  const [name, setName] = useState("")
  const [batch, setBatch] = useState("")
  const [role, setRole] = useState("")
  const [education, setEducation] = useState("")
  useEffect(()=>{
    const studentData = students.find(stud=> stud.id === id);
    if(studentData){
    setIdx(studentData.id)
    setName(studentData.name)
    setRole(studentData.role)
    setEducation(studentData.education)
    setBatch(studentData.batch)
    }
  }, [id, students])
  const updateStudent =()=>{
    // console.log(studId)
    const studIndex = students.findIndex((stud)=>stud.id === id)
   
    const updatedStudent = {
      id,
      name,
      batch,
      role,
      education
    }
    
    students[studIndex] = updatedStudent  
    setStudents([...students]) 
     navigate('/students')
  }
  return (
    <Base
    title={"Edit the Player"}
    description={"Make Changes That You Need"}
    >
    <div className='form-group'>
        <TextField
          className='boxes'
          label="ID"
          id="outlined-password-input"
        placeholder='Enter ID of student'
        type='number'
        value={idx}
        onChange={(e)=>setIdx(e.target.value)}
        />
        <TextField
          className='boxes'
          id="outlined-password-input"
          label="Name"
        placeholder='Enter Name'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
         <TextField
          className='boxes'
          id="outlined-password-input"
          label="Role"
        placeholder='Enter Role'
        type='text'
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        />
         <TextField
          className='boxes'
          id="outlined-password-input"
          label="Education"
        placeholder='Enter Education'
        type='text'
        value={education}
        onChange={(e)=>setEducation(e.target.value)}
        />
        <TextField
          className='boxes'
          id="outlined-password-input"
          label="Batch"
        placeholder='Enter Batch'
        type='text'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <div className='submit-btn'> 
        <Button id='submit-btn' onClick={updateStudent}
        variant="contained" endIcon={<SendIcon />}>
            Update
        </Button>
        </div>
    </div>
    </Base>
  )
}

export default EditStudents