import styled from 'styled-components';

const ModalForm = styled.form`
  padding: 16px 20px;
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
  font-family: 'IBM Plex Sans', Helvetica;
`;

const FormLavel = styled.label`
  color: #1e252a;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  display: block;
  margin-bottom: 8px;
`;

const FormDiv = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: 1px solid #7200e0;
  font-family: 'IBM Plex Sans', Helvetica;
  width: 100%;
  padding: 9px 20px;
  border-radius: 9px;
  color: #1e252a;

  &:focus {
    outline: none;
    border-color: #7200e0;
  }
`;

const SubmitBtn = styled.button`
  font-family: 'IBM Plex Sans', Helvetica;
  background-color: #7200e0;
  border-radius: 30px;
  padding: 8px 16px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  border: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #301b72;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    color: #888;
  }
`;

export { ModalForm, FormLavel, FormDiv, Input, SubmitBtn };
