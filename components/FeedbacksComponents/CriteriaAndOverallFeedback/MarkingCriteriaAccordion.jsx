import React from 'react';
import Accordion from '../../../components2/HelpSidebar/Accordion';
import {
  Heading,
  HeadingTitle,
  HeaderRightSection,
  MarkingCriteriaSection,
  MarkingCriteriaMainHeadingContainer,
  MarkingCriteriaContainer,
  MarkingCriteriaHeadingContainer,
  MarkingCriteriaHeading,
  RubricButton,
} from './style';
import { GreenTickComponent, GreenTickText } from '../../GreenTick';
import QuestionIcon from '../../../static/img/question-mark.svg';
import {
  isShowGreenTick,
  isShowMarkingCriteriaPreview,
  isAllowGiveMarkingCriteriaFeedback,
} from '../FeedbacksRoot/rules';
import RubricPreview from './RubricPreview';
import StrengthAndTargetPreview from './StrengthAndTargetPreview';
import { getButtonText } from './function';

function MarkingCriteriaAccordion({
  markingCriteriaFromSubmission,
  currentMarkingCriteria,
  isRubric,
  openPopup,
  pageMode,
  QuestionIndex,
  markingCriteriaFeedback,
}) {
  return (
    <Accordion
      title={
        <Heading>
          <HeadingTitle>
            Marking Criteria
            <img src={QuestionIcon || '/placeholder.svg'} />
          </HeadingTitle>
          <HeaderRightSection>
            <GreenTickComponent
              ShowGreen={isShowGreenTick(currentMarkingCriteria)}
            />
          </HeaderRightSection>
        </Heading>
      }
      body={
        <MarkingCriteriaSection>
          <MarkingCriteriaMainHeadingContainer></MarkingCriteriaMainHeadingContainer>
          <MarkingCriteriaContainer>
            <MarkingCriteriaHeadingContainer>
              <MarkingCriteriaHeading>
                {isRubric ? 'Rubric' : 'Strengths and Targets'}
              </MarkingCriteriaHeading>
              <RubricButton onClick={openPopup}>
                {getButtonText(
                  pageMode,
                  markingCriteriaFeedback,
                  QuestionIndex
                )}
              </RubricButton>
            </MarkingCriteriaHeadingContainer>
            {isShowMarkingCriteriaPreview(pageMode) &&
              isShowGreenTick(currentMarkingCriteria) && (
                <>
                  {isRubric ? (
                    <RubricPreview
                      markingCriteria={
                        markingCriteriaFromSubmission?.markingCriteria
                      }
                    />
                  ) : (
                    <StrengthAndTargetPreview
                      markingCriteria={
                        markingCriteriaFromSubmission?.markingCriteria
                      }
                    />
                  )}
                </>
              )}
          </MarkingCriteriaContainer>
          {isAllowGiveMarkingCriteriaFeedback(pageMode) &&
            isShowGreenTick(currentMarkingCriteria) && (
              <GreenTickText margin={true} text="Marking Criteria complete" />
            )}
        </MarkingCriteriaSection>
      }
      open={true}
    />
  );
}

export default MarkingCriteriaAccordion;
