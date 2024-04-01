import React from 'react';
import {
  FeedbackTaskDetailsContainer,
  Heading,
  DueDate,
  OtherDetails,
  FocusAreasContainer,
  FocusHeading,
  FocusBody,
  FocusArea,
  Ellipse141,
  Label,
} from './style';
import CloseIcon from '../../../static/img/close.svg';

const FeedbackTaskDetails = ({ handleClick, openRightPanel, submission }) => {
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  return (
    <FeedbackTaskDetailsContainer openRightPanel={openRightPanel}>
      <Heading>
        Task Details
        <img src={CloseIcon} onClick={() => handleClick('')} />
      </Heading>
      <DueDate>
        <span>Due on: </span> {formatDate(submission?.assignment.dueAt)}
      </DueDate>
      <OtherDetails>
        <div>
          <span>Marking Method: </span>
          Rubric
        </div>
        <div>
          <span>Graded Task: </span>
          Yes
        </div>
        <div>
          <span>Feedback By: </span>
          {submission?.assignment.teacherName}
        </div>
      </OtherDetails>
      <FocusAreasContainer>
        <FocusHeading>Focus Areas</FocusHeading>
        <FocusBody>
          <FocusArea>
            <Ellipse141></Ellipse141>
            <Label>Focus Area 1</Label>
          </FocusArea>
          <FocusArea>
            <Ellipse141></Ellipse141>
            <Label>Focus Area 1</Label>
          </FocusArea>
          <FocusArea>
            <Ellipse141></Ellipse141>
            <Label>Focus Area 1</Label>
          </FocusArea>
          <FocusArea>
            <Ellipse141></Ellipse141>
            <Label>Focus Area 1</Label>
          </FocusArea>
          <FocusArea>
            <Ellipse141></Ellipse141>
            <Label>Focus Area 1</Label>
          </FocusArea>
        </FocusBody>
      </FocusAreasContainer>
    </FeedbackTaskDetailsContainer>
  );
};

export default FeedbackTaskDetails;
