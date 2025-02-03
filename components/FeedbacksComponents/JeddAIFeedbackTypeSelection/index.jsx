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
  SaveButton,
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
import { it } from 'date-fns/locale';

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
    currentCommentBank,
    currentMarkingCriteria,
    submit,
  } = props;

  console.log('currentCommentBank',currentCommentBank,currentMarkingCriteria)
  if (allMarkingCriterias[0].id != 'no_marking_criteria') {
    allMarkingCriterias.unshift({
      title: 'Select Marking Criteria',
      id: 'no_marking_criteria',
    });
  }

  if (allCommentBanks[0].id != 'no_comment_criteria') {
    allCommentBanks.unshift({
      title: 'Select Feedback Bank',
      id: 'no_comment_criteria',
    });
  }
  return (
    <Dialog open={open} onClose={() => hidePopup()}>
      <MainContainer>
        <TitleContainer>
          <TitlePart>
            <TitlePartImg src={messages} />
            <TitlePartText>
              Get Feedback - Select Settings
            </TitlePartText>
            <QuestionTooltip text={''} img={questionMark} />
          </TitlePart>
          <PopupTitleImg onClick={() => hidePopup()} src={closecircle} />
        </TitleContainer>
        <ContentPart>
          <SelectionCard
            onClick={() => {
              hidePopup();
              submit(false);
            }}
          >
            <SelectionCardHeadingText>
              Let JeddAI decide
            </SelectionCardHeadingText>
            <SelectionCardText>
              JeddAI will use its own settings to give feedback
            </SelectionCardText>
          </SelectionCard>
          <DivisionPart>
            <DivisionPartDots></DivisionPartDots>
            <DivisionPartText>Or</DivisionPartText>
            <DivisionPartDots></DivisionPartDots>
          </DivisionPart>
          <SelectionCard>
            <SelectionCardHeadingText>
              Select settings
            </SelectionCardHeadingText>
            <SelectionCardText>
              Ask JeddAI to use the selected settings in its feedback
            </SelectionCardText>
            <MarkingCriteriaAndCommentBankContainer>
              <MarkingCriteriaSelectionContainer>
                <QuestionFieldSelection
                  label="Marking Template"
                  items={(allMarkingCriterias).filter(item=>item.type === 'RUBRICS')}
                  tooltipText="Select a Rubric (R). After reading a student's response, click on the applicable performance level/s or strengths and targets"
                  onItemSelected={updateMarkingCriteria}
                  currentFieldId={currentMarkingCriteria?.id}
                  link={'/settings'}
                  linkText="Go to marking templates"
                  selectedIndex={0}
                  serialNumber={0}
                  handlePreview={handleMarkingCriteriaPreview}
                  showHeading={false}
                />
              </MarkingCriteriaSelectionContainer>
              <MarkingCriteriaSelectionContainer>
                <QuestionFieldSelection
                  label="Comment Bank"
                  items={allCommentBanks}
                  tooltipText="Select a comment bank to save you time when reviewing a student's work. After highlighting a section of a student's response, simply click one of the suggested comments from the drop-down selection"
                  onItemSelected={updateCommentBank}
                  currentFieldId={currentCommentBank?.id}
                  link={'/commentbanks'}
                  linkText="Go to comment banks"
                  selectedIndex={0}
                  serialNumber={0}
                  handlePreview={handleCommentBankPreview}
                  showHeading={false}
                />
              </MarkingCriteriaSelectionContainer>
            </MarkingCriteriaAndCommentBankContainer>
            <SaveButton isDisabled = {!(currentCommentBank?.smartComments != null && currentMarkingCriteria?.teacherId != null) }
            onClick={() => {
              hidePopup();
              submit(true);
            }}>Get Feedback</SaveButton>
          </SelectionCard>
        </ContentPart>
      </MainContainer>
    </Dialog>
  );
}

export default JeddAIFeedbackTypeSelection;
