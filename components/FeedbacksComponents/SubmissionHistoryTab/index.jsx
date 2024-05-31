import React from 'react';
import {
  MainContainer,
  SubmissionBody,
  Line,
  Submissions,
  Submission,
  Dot,
  Date,
  Time,
} from './style';
import RightSidebarHeading from '../RightSidebarHeading';

const SubmissionHistoryTab = ({ handleClose, openRightPanel }) => {
  const active = true;
  return (
    <MainContainer openRightPanel={openRightPanel}>
      {openRightPanel === 'tab4' && (
        <RightSidebarHeading
          title={'Submission History'}
          handleClose={handleClose}
        />
      )}
      <SubmissionBody>
        <Line></Line>
        <Submissions>
          <Submission active={active}>
            <Dot></Dot>
            <Date active={active}>12 Mar 2024</Date>
            <Time active={active}>15.30 PM</Time>
          </Submission>
          <Submission>
            <Dot></Dot>
            <Date>12 Mar 2024</Date>
            <Time>15.30 PM</Time>
          </Submission>
          <Submission>
            <Dot></Dot>
            <Date>12 Mar 2024</Date>
            <Time>15.30 PM</Time>
          </Submission>
          <Submission>
            <Dot></Dot>
            <Date>12 Mar 2024</Date>
            <Time>15.30 PM</Time>
          </Submission>
        </Submissions>
      </SubmissionBody>
    </MainContainer>
  );
};

export default SubmissionHistoryTab;
