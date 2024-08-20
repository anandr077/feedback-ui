import React from 'react';
import { DialogContent, Dialog } from '@mui/material';
import closecircle from '../../../static/img/closecircle.svg';
import messages from '../../../static/img/messages-2.svg';
import questionMark from '../../../static/img/question-mark.svg';
import {
  PopupTitle,
  PopupTitleContainer,
  PopupTitleImg,
} from '../../CommentBanks/style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import {
  ContentPart,
  DivisionPart,
  DivisionPartDots,
  DivisionPartText,
  MainContainer,
  SelectionCard,
  SelectionCardHeadingText,
  SelectionCardText,
  TitleContainer,
  TitlePart,
  TitlePartImg,
  TitlePartText,
} from './style';
import { MarkingCriteriaAndCommentBankContainer } from '../FeedbackTeacherLaptop/style';
import { MarkingCriteriaSelectionContainer } from '../../TheoryQuestionFrame/style';
import { appendFunction } from '../FeedbacksRoot/rules';
import QuestionFieldSelection from '../../TheoryQuestionFrame/QuestionFieldSelection';

function JeddAIFeedbackTypeSelection(props) {
  const {
    hidePopup,
    allMarkingCriterias,
    updateMarkingCriteria,
    updateCommentBank,
    allCommentBanks,
    handleMarkingCriteriaPreview,
    handleCommentBankPreview,
    question,
  } = props;
  return (
    <Dialog open={open} onClose={() => hidePopup()}>
      <MainContainer>
        <TitleContainer>
          <TitlePart>
            <TitlePartImg src={messages} />
            <TitlePartText>
              Get Feedback - Select Marking Template
            </TitlePartText>
            <QuestionTooltip
              text={
                'See where your class is struggling the most with their writing'
              }
              img={questionMark}
            />
          </TitlePart>
          <PopupTitleImg onClick={() => hidePopup()} src={closecircle} />
        </TitleContainer>
        <ContentPart>
          <SelectionCard>
            <SelectionCardHeadingText>
              Let JeddAI decide
            </SelectionCardHeadingText>
            <SelectionCardText>
              JeddAI will use its own marking templates to give feedback
            </SelectionCardText>
          </SelectionCard>
          <DivisionPart>
            <DivisionPartDots></DivisionPartDots>
            <DivisionPartText>Or</DivisionPartText>
            <DivisionPartDots></DivisionPartDots>
          </DivisionPart>
          <SelectionCard>
            <SelectionCardHeadingText>
              Select a marking template
            </SelectionCardHeadingText>
            <SelectionCardText>
              Ask JeddAI to use the selected marking template in its feedback
            </SelectionCardText>
            <MarkingCriteriaAndCommentBankContainer>
              <MarkingCriteriaSelectionContainer
                slide={true}
              >
                <QuestionFieldSelection
                  label="Marking Template"
                  items={appendFunction(allMarkingCriterias)}
                  tooltipText="Select a Rubric (R) or list of Strengths and Targets (S&T) to use as overall feedback for this task. After reading a student's response, click on the applicable performance level/s or strengths and targets"
                  onItemSelected={updateMarkingCriteria}
                  currentFieldId={question?.markingCriteria}
                  link={'/settings'}
                  linkText="Go to marking templates"
                  selectedIndex={0}
                  serialNumber={0}
                  handlePreview={handleMarkingCriteriaPreview}
                  showHeading={false}
                />
              </MarkingCriteriaSelectionContainer>
              <MarkingCriteriaSelectionContainer
                slide={true}
              >
                <QuestionFieldSelection
                  label="Comment Bank"
                  items={allCommentBanks}
                  tooltipText="Select a comment bank to save you time when reviewing a student's work. After highlighting a section of a student's response, simply click one of the suggested comments from the drop-down selection"
                  onItemSelected={updateCommentBank}
                  currentFieldId={question?.commentBankId}
                  link={'/commentbanks'}
                  linkText="Go to comment banks"
                  selectedIndex={0}
                  serialNumber={0}
                  handlePreview={handleCommentBankPreview}
                  showHeading={false}
                />
              </MarkingCriteriaSelectionContainer>
            </MarkingCriteriaAndCommentBankContainer>
          </SelectionCard>
        </ContentPart>
      </MainContainer>
    </Dialog>
  );
}

export default JeddAIFeedbackTypeSelection;
