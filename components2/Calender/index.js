import React from 'react';
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
  StyledToolbar,
} from './style';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
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
          <StyledButton
            onClick={goToWeekView}
            isActive={toolbar.view === 'week'}
          >
            Week
          </StyledButton>
          <StyledButton
            onClick={goToMonthView}
            isActive={toolbar.view === 'month'}
          >
            Month
          </StyledButton>
        </StyledButtons>
        <StyledButtons>
          <StyledButtonArrow src={leftArrow} onClick={goToPrev} />
          <StyledButtonArrow src={rightArrow} onClick={goToNext} />
        </StyledButtons>
      </StyledToolbar>
    );
  };

  const redirect = (link) =>{
    window.location.href = link;
  }

  const CustomEvent = ({ event }) => {
    return (
      <MainContainer onClick={() => redirect(event.link)}>
        <DateContainer>{`${moment(event.end).format('h:mm A')}`}</DateContainer>
        <DataContainer>{event.title}</DataContainer>
      </MainContainer>
    );
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <StyledCalendar
        localizer={localizer}
        events={props.calenderEvents}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default MyCalendar;
