import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../styledMixins';
import QuestionTooltip from '../../components2/QuestionTooltip';
import { getUserRole } from '../../userLocalDetails';

function TaskFrame1353(props) {
  const { outstanding, number } = props;
  const role = getUserRole();

  const color = () => {
    if (outstanding === 'Drafts' || outstanding === 'Assigned') {
      return '#f1e7ff';
    }
    if (outstanding === 'Closed' || outstanding === 'In Draft') {
      return '#F9F0CD';
    }
    if (outstanding === 'Active' || outstanding === 'In Review') {
      return '#DCF5D1';
    }
  };

  const tooltipText = () => {
    if (outstanding === 'Drafts' || outstanding === 'Assigned') {
      if (role === 'TEACHER') {
        return 'Tasks that you have started to create but have not yet assigned to a class';
      }
      return "New tasks that you haven't opened yet";
    }
    if (outstanding === 'Closed' || outstanding === 'In Draft') {
      if (role === 'TEACHER') {
        return 'Previous tasks that are no longer accepting submissions or feedback';
      }
      return 'Tasks that you have started but not yet submitted';
    }
    if (outstanding === 'Active' || outstanding === 'In Review') {
      if (role === 'TEACHER') {
        return 'Tasks that are currently being completed by students and/or that await your feedback';
      }
      return 'Completed tasks that are either awaiting feedback or pending your review';
    }
  };

  return (
    <Frame13531
      style={{
        backgroundColor: color(),
      }}
    >
      <Outstanding>
        {outstanding}
        <QuestionTooltip text={tooltipText()} />
      </Outstanding>
      <Number>{number}</Number>
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
  background-color: var(--white);
  padding: 20px;
  border-radius: 16px;
  border-radius: 16px 16px 0 0;
  // margin:20px;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  align-items: center;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default TaskFrame1353;
