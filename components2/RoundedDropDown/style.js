import styled from 'styled-components';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';

export const StyledSelect = styled(Select)`
  font-family: IBM Plex Sans;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 4px 8px #2f1a720a;
  background-color: white;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  text-align: center;
`;
export const SelectInput = styled(Input)``;
export const StyledInput = styled(Input)`
  border: 1px solid var(--light-mode-purple);
  padding: 5px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 150px;
  &:hover {
    outline: none;
  }
`;
