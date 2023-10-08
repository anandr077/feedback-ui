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
  border: 1px solid #1e252a;
  font-family: 'IBM Plex Sans', Helvetica;
  width: 100%;
  padding: 13px 20px;
  border-radius: 12px;
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

const CustomSelect = styled.div`
  width: 100%;
  position: relative;
`;
const Dropdown = styled.select`
  display: flex;
  padding: 13px 20px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Text, #1e252a);
  background: #fff;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
`;

const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px; /* Adjust the position as needed */
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: #000000 transparent transparent transparent;
  pointer-events: none;
`;

export {
  ModalForm,
  FormLavel,
  FormDiv,
  Input,
  SubmitBtn,
  Dropdown,
  CustomSelect,
  CustomArrow,
};
