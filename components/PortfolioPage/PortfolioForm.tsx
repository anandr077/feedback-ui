import React, { useState, useEffect } from 'react'
import {
    ModalForm,
    FormLavel,
    FormDiv,
    Input,
    SubmitBtn,
}from './PortfolioFormStyle'


const PortfolioForm = ({showModal, setShowModal, handleCreateDocument}) => {
    const [docName, setDocName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleCreateDocument(docName)
        setShowModal(!showModal)
    }

  return (
    <ModalForm onSubmit={handleSubmit}>
             <FormDiv>
                <FormLavel htmlFor="docName">Document Name</FormLavel>
                <Input type='text' value={docName} onChange={(e)=> setDocName(e.target.value)} name='name' placeholder='Enter a document name' />
             </FormDiv>
             <SubmitBtn type='submit'>Create Document</SubmitBtn>
    </ModalForm>
  )
}

export default PortfolioForm