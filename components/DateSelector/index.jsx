import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export default function DateSelector(props) {
  const { value, onChange, timeValue, onTimeChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateContainer>
        <DatePicker value={value} onChange={onChange} />
      </DateContainer>
      <TimeContainer>
        <MobileTimePicker value={timeValue} onChange={onTimeChange} />
      </TimeContainer>
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
  border-color: var(--text);
`;
const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 110px;
  height: 100%;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;
const IconClock = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
