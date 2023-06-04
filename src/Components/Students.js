import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function Students({students, setStudents}) {
  const navigate = useNavigate()
    const deleteStusent = (studentID)=>{
      const removedStudents = students.filter((student, idx)=>student.id !== studentID)
      console.log(removedStudents)
      setStudents(removedStudents)
    }
  return (
    <Base
    title={"All Employee Info"}
    description={"All Employee info available here"}
    >
     <div className='student-collection'>
        {students.map((stud, idx)=>(
          <Paper elevation={6} className='student-card' key={stud.id}>
            <h2>{stud.name}</h2>
            <h4>{stud.role}</h4>
            <p>{stud.education}</p>
            <p>{stud.batch}</p>
            <div className='card-btn-group'>
              <Button className='edit-btn'
                onClick={()=>navigate(`/edit/${stud.id}`)} variant="outlined">
              Edit</Button>
              <Button className='delete-btn'
                onClick={()=>deleteStusent(stud.id)} variant="outlined" startIcon={<DeleteIcon />}>
              Delete</Button>
            </div>
          </Paper>
    ))}
    </div>   
    </Base>
  )
}
export default Students;
