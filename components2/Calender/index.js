import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import leftArrow from '../../static/img/arrow-left-mini.svg';
import rightArrow from '../../static/img/arrow-right-mini.svg';
import moment from 'moment';
import {
  DataContainer,
  DateContainer,
  MainContainer,
  StyledButton,
  StyledButtonArrow,
  StyledButtons,
  StyledCalendar,
  StyledCalendarHead,
  StyledCalendarHeading,
  StyledMonth,
  StyledToolbar,
} from './style';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ calenderEvents }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleEventClick = (event) => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };
  const CustomToolbar = (toolbar) => {
    const goToToday = () => {
      toolbar.onNavigate('TODAY');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    const goToPrev = () => {
      toolbar.onNavigate('PREV');
    };

    const goToMonthView = () => {
      toolbar.onView('month');
    };

    const goToWeekView = () => {
      toolbar.onView('week');
    };

    return (
      <StyledToolbar>
        <StyledCalendarHead>
          <StyledCalendarHeading>
            {moment(toolbar.date).format('MMMM YYYY')}
          </StyledCalendarHeading>
        </StyledCalendarHead>
        <StyledButtons>
          <StyledButtonArrow src={leftArrow} onClick={goToPrev} />
          <StyledButtonArrow src={rightArrow} onClick={goToNext} />
        </StyledButtons>
      </StyledToolbar>
    );
  };

  const redirect = (link) => {
    window.location.href = link;
  };

  const CustomEvent = ({ event }) => {
    return (
      <MainContainer onClick={() => redirect(event.link)}>
        <DateContainer>{`${moment(event.end).format('h:mm A')}`}</DateContainer>
        <DataContainer>{event.title}</DataContainer>
      </MainContainer>
    );
  };

  return (
    <div style={{ height: '120vh', width: '100%' }}>
      <style>
        {`
      .rbc-overlay .rbc-event {
        background-color: #f7eeff !important;
      }
      .rbc-overlay-header{
        font-family: IBM Plex Sans;
        font-size: 14px;
        padding : 8px 5px;
      }
    `}
      </style>
      <StyledCalendar
        localizer={localizer}
        events={calenderEvents}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
        // eventLimit={5}
        // showAllEvents
        // step={60}
        // timeslots={1}
        allDayMaxRows={2}
        popup
        tooltipAccessor={(event) => `${event.title}, ${event.class}`}
      />
    </div>
  );
};

export default MyCalendar;
