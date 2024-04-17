import React from 'react';
import {
  FeedbackTaskDetailsContainer,
  Heading,
  DueDate,
  OtherDetails,
  FocusAreasContainer,
  FocusHeading,
  FocusBody,
  QuestionContainer,
  QuestionNumbers,
  FocusArea,
  Ellipse141,
  Label,
} from './style';
import CloseIcon from '../../../static/img/close.svg';
import RightArrow from '../../../static/img/19grayrightindicator.svg';

const FeedbackTaskDetails = ({
  handleClick,
  openRightPanel,
  submission,
  QuestionIndex,
  groupedFocusAreaIds,
}) => {
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const question = submission.assignment.questions[QuestionIndex];

  console.log('the submission is', question);
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
          {question?.focusAreas?.map((fa) => {
            return (
              <FocusArea>
                <Ellipse141 bg={fa.color}></Ellipse141>
                <Label>{fa.title}</Label>
              </FocusArea>
            );
          })}
        </FocusBody>
      </FocusAreasContainer>
      <QuestionContainer>
        <QuestionNumbers>4 Questions</QuestionNumbers>
        <img src={RightArrow} />
      </QuestionContainer>
    </FeedbackTaskDetailsContainer>
  );
};

export default FeedbackTaskDetails;
