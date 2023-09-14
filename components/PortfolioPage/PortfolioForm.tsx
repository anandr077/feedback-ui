import React, { useState, useEffect } from 'react'
import {
    ModalForm,
    FormLavel,
    FormDiv,
    Input,
    InputContainer,
    InputArrowBtn,
    OptionsDiv,
    OptionDiv,
    SubmitBtn,
}from './PortfolioFormStyle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const PortfolioForm = ({subjects, showModal, setShowModal, handleCreateDocument}) => {
    const [subjectValue, setSubjectValue] = useState('')
    const [docName, setDocName] = useState('')
    const [hiddenOptions, setHiddenOptions] = useState(true)
    const [valueOptions, setValueOptions] = useState(subjects)

    const onInputChange = (value) =>{
        setSubjectValue(value)

        const filteredOptions = subjects.filter((option)=> option.value.toLowerCase().includes(value.toLowerCase()))

        if (filteredOptions.length === 0) {
            // If no options match the input, show "Nothing Found"
            const emptyOption = { key: 1, value: 'Nothing Found' };
            setValueOptions([emptyOption]);
        } else {
            setValueOptions(filteredOptions);
        }

        setHiddenOptions(false)
    }

    useEffect(()=>{
        subjectValue.length === 0 && setHiddenOptions(true)
    }, [subjectValue])

    const onClickOption = (option) =>{
        setSubjectValue(option.value)
        setHiddenOptions(true)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(docName, subjectValue)
        setShowModal(!showModal)
    }

  return (
    <ModalForm onSubmit={handleSubmit}>
             <FormDiv>
                <FormLavel htmlFor="docName">Document Name</FormLavel>
                <Input type='text' value={docName} onChange={(e)=> setDocName(e.target.value)} name='name' placeholder='Enter a document name' />
             </FormDiv>
             <FormDiv>
                <FormLavel htmlFor='subject'>Subject of this document</FormLavel>
                <InputContainer>
                    <Input 
                        type='text'
                        value={subjectValue}
                        placeholder='Select'
                        onChange={(e)=> onInputChange(e.target.value)}
                    />
                    <InputArrowBtn onClick={(e)=> {e.preventDefault();  setHiddenOptions(!hiddenOptions);}}>
                        {hiddenOptions ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </InputArrowBtn>
                    <OptionsDiv style={hiddenOptions? {display: 'none'} : {display: 'block'}}>
                        {
                            valueOptions.map((option)=>(
                                <OptionDiv key={option.key} onClick={()=> onClickOption(option)} >{option.value}</OptionDiv>
                            ))
                        }
                    </OptionsDiv>
                </InputContainer>
             </FormDiv>
             <SubmitBtn  onClick={e=>handleCreateDocument(docName, subjectValue)} type='submit'>Create Document</SubmitBtn>
    </ModalForm>
  )
}

export default PortfolioForm