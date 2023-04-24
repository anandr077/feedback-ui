import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";
import {

  IbmplexsansNormalShark20px,
} from "../../styledMixins";

export default function DateSelector(props) {
  const { value, onChange, timeValue, onTimeChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateContainer>
        <DatePicker value={value} onChange={onChange} />
      </DateContainer>
      <DateContainer>
        <MobileTimePicker value={timeValue} onChange={onTimeChange} />
        </DateContainer>
    </LocalizationProvider>
  );
}

const DateContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  height: 100%;
  width: 170px;
  border-color: var(--text);
  .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline legend {
    color:  var(--text);
  }
  
  .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--text);
  }
  
  .MuiInputBase-root.MuiOutlinedInput-root .MuiInputBase-input {
    ${IbmplexsansNormalShark20px}
  }
  .MuiOutlinedInput-notchedOutline {
    border-radius: 12px;
    border: 1px solid var(--text);
  }
`;

const IconClock = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
