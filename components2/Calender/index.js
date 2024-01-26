import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { DataContainer, DateContainer, MainContainer } from './style';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const calendarStyle = {
    backgroundColor: '#F7EEFF',
    border: '2px solid red',
  };
  const CustomEvent = ({ event }) => (
    <MainContainer>
      <DateContainer>{`${moment(event.end).format('h:mm A')}`}</DateContainer>
      <DataContainer>{event.title}</DataContainer>
    </MainContainer>
  );

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Calendar
        localizer={localizer}
        events={props.calenderEvents}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
