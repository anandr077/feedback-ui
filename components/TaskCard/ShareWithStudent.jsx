import React from 'react'
import {
    StudentListContainer,
    Student
} from './shareWithStudentStyle'

const ShareWithStudent = ({sharedStudents}) => {
    const studentList = () =>{
        const students = sharedStudents?.map((student, idx)=>{
            return <Student>{student.studentName}</Student>
        })
        return students
    }
  return (
    <StudentListContainer>{studentList()}</StudentListContainer>
  )
}

export default ShareWithStudent