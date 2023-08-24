import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
// import {MobileTimePicker} from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import dayjs from 'dayjs';

export default function DateSelector(props) {
  const { value, onChange } = props;
  const now = dayjs();
  const minDateTime = now
    .startOf('minute')
    .add(Math.ceil(now.minute() / 30) * 30, 'minute');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeDateContainer>
        <DateContainer>
          <DesktopDateTimePicker
            inputFormat="MM/dd/yyyy HH:mm"
            value={value || dayjs()}
            onChange={onChange}
            // renderInput={(params) => <TextField {...params} />}
            ampm={false}
            minDateTime={minDateTime}
          />
        </DateContainer>
      </TimeDateContainer>
    </LocalizationProvider>
  );
}
const TimeDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  height: 100%;
  width: 190px;
  border-color: var(--text);
  .MuiInputBase-root.MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline
    legend {
    color: var(--text);
  }

  .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: var(--text);
  }

  .MuiInputBase-root.MuiOutlinedInput-root .MuiInputBase-input {
    ${IbmplexsansNormalShark20px}
  }
  .MuiOutlinedInput-notchedOutline {
    border-radius: 12px;
    border: 0px solid var(--text);
  }
`;
