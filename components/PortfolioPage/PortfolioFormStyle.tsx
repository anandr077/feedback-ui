import styled from 'styled-components'

const ModalForm = styled.form`
  padding: 16px 20px;
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
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
  width: 100%;
  padding: 13px 20px;
  border-radius: 12px;
  color: #1E252A;

  &:focus{
    outline: none;
    border-color: #7200E0;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const InputArrowBtn = styled.button `
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const OptionsDiv = styled.div`
  position: absolute;
  top: 100%;
  background-color: white;
  z-index: 100000;
  width: 100%;
  border: 1px solid #1E252A;
  border-radius: 12px;
  &:hover{
    border-color: #7200E0;
  }
`

const OptionDiv = styled.div`
  padding: 10px;
  border-bottom: 1px solid #1E252A;
  cursor: pointer;

  &:last-child{
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  &:hover{
    border-color: #7200E0;
    background-color: #7200E0;
    color: white;

    &:first-child{
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  }
`

const SubmitBtn = styled.button`
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
    InputContainer,
    InputArrowBtn,
    OptionsDiv,
    OptionDiv,
    SubmitBtn
}