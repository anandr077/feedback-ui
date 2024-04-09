import styled from 'styled-components';
import { Calendar, momentLocalizer } from 'react-big-calendar';

export const DateContainer = styled.div`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #793ab5;
`;
export const DataContainer = styled.div`
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis !important;
`;
export const StyledCalendar = styled(Calendar)`
  padding: 20px;
  border-radius: 16px;
  gap: 20px;
  box-shadow: 0px 4px 22px 0px #301b720a;
  background: #f7eeff;
  font-family: IBM Plex Sans !important;

  .rbc-month-header .rbc-header span {
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #575757;
    text-transform: uppercase !important;
  }
  .rbc-day-bg {
    background-color: white;
    min-height: 50px !important;
    border-radius: 4px !important;
  }
  .rbc-event {
    background-color: #f7eeff !important;
  }
  .rbc-overlay .rbc-event {
    background-color: #f7eeff !important;
  }
  .rbc-off-range-bg {
    background-color: #e5c9ff33 !important;
  }

  .rbc-row-segment {
    padding: 3px 5px;
  }

  .rbc-month-view .rbc-date-cell .rbc-button-link {
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #a6a6a6;
  }
  .rbc-event-content {
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #1e252a;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis !important;
    padding: 2px 0px;
  }

  .rbc-time-view .rbc-header {
    display: flex;
    background-color: #f7eeff !important;
    border: none !important;
  }
  .rbc-time-view .rbc-header .rbc-button-link {
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #575757;
    text-transform: uppercase !important;
  }
  .rbc-time-view .rbc-time-gutter .rbc-timeslot-group {
    background-color: #f7eeff !important;
  }
  .rbc-time-view .rbc-event {
    & ${DataContainer} {
      overflow: hidden;
    }
  }

  .rbc-time-view .rbc-allday-cell {
    display: none;
  }

  .rbc-time-view .rbc-day-slot .rbc-event {
    margin: 5px;
    min-height: 25px;
    .rbc-event-content {
      display: flex;
      align-items: center;
    }
  }

  .rbc-time-view .rbc-event {
    height: 1% !important;
    background-color: #f7eeff !important;
    border: none !important;
  }

  .rbc-time-view .rbc-timeslot-group {
    background-color: white;
    min-height: 175px !important;
  }
  .rbc-time-view .rbc-timeslot-group .rbc-time-slot .rbc-label {
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: right;
    color: #a6a6a6;
  }

  .rbc-today {
    background-color: #ecd6ff;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 4px;
`;

export const StyledToolbar = styled.div`
  background: #f7eeff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledMonth = styled.div`
  display: flex;
`;
export const StyledButtons = styled.div`
  display: flex;
  gap: 12px;
  width: 160px;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#7200e0' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#575757')};

  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  border: 1px;
  gap: 10px;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const StyledButtonArrow = styled.img`
  padding: 8px;
  border-radius: 8px;
  border: 1px;
  gap: 10px;
  background: #7200e0;
  border: 1px solid #ce99ff;
  cursor: pointer;
`;

export const StyledCalendarHead = styled.div`
  display: flex;
  width: 160px;
`;
export const StyledCalendarHeading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #575757;
`;
