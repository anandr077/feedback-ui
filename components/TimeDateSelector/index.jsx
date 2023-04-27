import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

function TimeDateSelector() {
  const [dateTimeValue, setDateTimeValue] = useState(dayjs());
  const now = dayjs();

  const handleDateTimeChange = (newValue) => {
    if (newValue.isSameOrAfter(now)) {
      setDateTimeValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        value={dateTimeValue}
        onChange={handleDateTimeChange}
        label="Select Date & Time"
        inputFormat="YYYY-MM-DD HH:mm"
        renderInput={(params) => <TextField {...params} />}
        ampm={false}
        minDateTime={now}
      />
    </LocalizationProvider>
  );
}

export default TimeDateSelector;
