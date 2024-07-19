import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../styledMixins';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/24questionbordered.svg';
import TickMark from '../../static/img/20greenroundedtick.svg';
import PencilIcon from '../../static/img/20bluepencil.svg';
import StarIcon from '../../static/img/yellowstar20.svg';
import { getUserRole } from '../../userLocalDetails';

function TaskFrame1353(props) {
  const { outstanding, number } = props;
  const role = getUserRole();

  const tooltipText = () => {
    if (outstanding === 'Assigned') {
      if (role === 'TEACHER') {
        return 'Recent tasks that have been assigned to a class but not yet completed by any students';
      }
      return "New tasks that you haven't opened yet";
    }
    if (outstanding === 'In Draft'){
      if(role === 'TEACHER') {
        return 'Tasks that you have started creating but not yet assigned to a class'
      }
      return 'Tasks that you have started but not yet submitted';
    }
    if (outstanding === 'Closed') {
      return 'Previous tasks that are no longer accepting submissions or feedback';
    }
    if (outstanding === 'In Review' || outstanding === 'In Progress') {
      if (role === 'TEACHER') {
        return 'Active tasks that at least one student has submitted a response for';
      }
      return 'Completed tasks that are either awaiting feedback or pending your review';
    }
  };

  const leftSideIcon = () =>{
    let icon = null;
    if (outstanding === 'Drafts' || outstanding === 'Assigned') {
      icon = TickMark;
    }
    if (outstanding === 'Closed' || outstanding === 'In Draft') {
      icon = PencilIcon;
    }
    if (outstanding === 'Active' || outstanding === 'In Progress') {
      icon = StarIcon;
    }
    return icon;
  };
  const numberIconSize = (number) => {
    let length = number.toString().length;
    if (length === 1) return 24;
    if (length === 2) return 27;
    if (length === 3) return 32;
    return 24;
  };

  return (
    <Frame13531>
      <Outstanding>
        <RightSideImg src={leftSideIcon()} />
        {outstanding}
        <QuestionTooltip text={tooltipText()} img={questionMark}/>
      </Outstanding>
      <Number width={numberIconSize(number)}>{number}</Number>
    </Frame13531>
  );
}

const Frame13531 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: var(--font-size-xxl);
  line-height: 31px;
  color: var(--text);
  // position: relative;
  align-self: stretch;
  position: sticky;
  top: 0px;
  z-index: 1;
  padding: 20px 20px 0;
  border-radius: 16px;
  border-radius: 16px 16px 0 0;
  // margin:20px;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 600;
  color: rgba(75, 70, 79, 1);
`;

const Number = styled.div`
  position: relative;
  width: ${({ width }) => width || '24'}px;
  height: ${({ width }) => width || '24'}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: rgba(123, 115, 130, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 16px;
  border-radius: 50%; 
  padding: 8px;
`;

const RightSideImg = styled.img`
  margin-right: 8px;
`;

export default TaskFrame1353;
