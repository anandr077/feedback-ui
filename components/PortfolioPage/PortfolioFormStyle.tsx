import styled from 'styled-components'

const ModalForm = styled.form`
  padding: 16px 20px;
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
  font-family: 'IBM Plex Sans', Helvetica;
`

const FormLavel = styled.label`
  color: #1E252A;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  display: block;
  margin-bottom: 8px;
`

const FormDiv = styled.div`
  margin-bottom: 20px;
`

const Input = styled.input`
  border: 1px solid #1E252A;
  font-family: 'IBM Plex Sans', Helvetica;
  width: 100%;
  padding: 13px 20px;
  border-radius: 12px;
  color: #1E252A;

  &:focus{
    outline: none;
    border-color: #7200E0;
  }
`


const SubmitBtn = styled.button`
  font-family: 'IBM Plex Sans', Helvetica;
  background-color: #7200E0;
  border-radius: 30px;
  padding: 8px 16px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  border: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  &:hover{
    background-color: #301b72;
  }
`

export {
    ModalForm,
    FormLavel,
    FormDiv,
    Input,
    SubmitBtn
}