import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';

export default function DigitalTimePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        label="Select Date"
        inputFormat="yyyy-MM-dd HH:mm"
        renderInput={(params) => <TextField {...params} />}
        minutesStep={30}
        ampm={false}
      />
    </LocalizationProvider>
  );
}
