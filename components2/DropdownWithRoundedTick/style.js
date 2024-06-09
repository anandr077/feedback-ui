import { MenuItem, Select } from '@mui/material';
import styled from "styled-components";

export const TickBox = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledMenuItemText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans) !important;
  font-weight: ${(props) => (props.studentStyle ? '500' : '400')} !important;
  font-size: 16px !important;
  line-height: 24px !important;
  border-radius: 6px;
  color: ${(props) =>
    props.studentStyle
      ? 'rgba(114, 0, 224, 1)'
      : 'rgba(75, 70, 79, 1)'} !important;
`;


export const StyledMenuItem = styled(MenuItem)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  font-family: var(--font-family-ibm_plex_sans) !important;
  background: ${(props) =>
    props.studentStyle
      ? '#F1E6FC !important'
      : props.closed
      ? '#FBF7FE !important'
      : '#fff !important'};
  border-radius: 6px !important;
  padding: 12px !important;

  li {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    padding: 12px !important;
  }
`;

export const StyledSelect = styled(Select)`
  width: 250px;
  border: none;
  outline: none;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans) !important;
  font-size: var(--font-size-l);
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  .MuiSelect-select {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    padding: 12px !important;
    border: none !important;
    outline: none !important;
    ${TickBox} {
      display: none;
    }
    ${StyledMenuItemText} {
      font-weight: 500 !important;
      color: rgba(75, 70, 79, 1) !important;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`;

