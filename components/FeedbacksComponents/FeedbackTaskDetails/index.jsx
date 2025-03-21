import React from 'react';
import {
  FeedbackTaskDetailsContainer,
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
import RightArrow from '../../../static/img/19grayrightindicator.svg';
import RightSidebarHeading from '../RightSidebarHeading';
import { isShowFeedbackBy } from '../FeedbacksRoot/rules';

const FeedbackTaskDetails = ({
  handleClose,
  openRightPanel,
  submission,
  QuestionIndex,
  questionPanelOpen,
}) => {
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const isMarkingCriteriaType = (markingCriteriaType) => {
    const markingCriteria =
      markingCriteriaType === 'STRENGTHS_TARGETS'
        ? 'Strengths and Targets'
        : 'Rubrics';
    return markingCriteria;
  };

  const question = submission?.assignment.questions[QuestionIndex];

  return (
    <FeedbackTaskDetailsContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading title={'Task Details'} handleClose={handleClose} />
      <DueDate>
        <span>Due on : </span> {formatDate(submission?.assignment.dueAt)}
      </DueDate>
      <OtherDetails>
        {question?.markingCriteria?.type && (
          <div>
            <span>Marking Method : </span>
            {isMarkingCriteriaType(question?.markingCriteria?.type)}
          </div>
        )}
        {isShowFeedbackBy(submission?.reviewerName) && (
          <div>
            <span>Feedback By : </span>
            {submission?.reviewerName}
          </div>
        )}
        {submission?.reviewedAt && (
          <div>
            <span>Reviewed At : </span>
            {formatDate(submission?.reviewedAt)}
          </div>
        )}
      </OtherDetails>
      {question?.focusAreas && question?.focusAreas.length !== 0 && (
        <FocusAreasContainer>
          <FocusHeading>Self-assessment Areas</FocusHeading>
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
      )}
      <QuestionContainer onClick={() => questionPanelOpen('tab3')}>
        <QuestionNumbers>
          {submission?.assignment.questions.length}
          {submission?.assignment.questions.length <= 1
            ? ' Question'
            : ' Questions'}
        </QuestionNumbers>
        <img src={RightArrow} />
      </QuestionContainer>
    </FeedbackTaskDetailsContainer>
  );
};

export default FeedbackTaskDetails;
