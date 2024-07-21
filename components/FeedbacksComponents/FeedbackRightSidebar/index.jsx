import React, { useContext } from 'react';
import { MainContainer, TopSection, Button } from './style';
import ExclamationIcon from '../../../static/img/exclamation.svg';
import PurpleExclamationIcon from '../../../static/img/purpleExclamationIcon.svg';
import CommentsIcon from '../../../static/img/gray_message_2.svg';
import PurpleCommentsIcon from '../../../static/img/purplemessage.svg';
import TasksIcon from '../../../static/img/task.svg';
import {
  isShowMarkingCriteriaAndOverallFeedbackButton,
  isShowQuestionsTab,
  isShowTaskDetailsButton,
} from '../FeedbacksRoot/rules';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

const FeedbackRightSidebar = ({
  handleClick,
  openRightPanel,
  pageMode,
  isTeacher,
  submission,
  QuestionIndex,
}) => {
  const { overallComments, markingCriteriaFeedback } =
    useContext(FeedbackContext);


  return (
    <MainContainer>
      <TopSection>
        {isShowTaskDetailsButton(submission.type) && (
          <Button
            isActive={openRightPanel === 'tab1'}
            onClick={() => handleClick('tab1')}
          >
            <img
              src={
                openRightPanel === 'tab1'
                  ? PurpleExclamationIcon
                  : ExclamationIcon
              }
            />
          </Button>
        )}
        {isShowMarkingCriteriaAndOverallFeedbackButton(
          isTeacher,
          submission.type,
          submission.status,
          pageMode,
          overallComments,
          QuestionIndex,
          markingCriteriaFeedback
        ) && (
          <Button
            isActive={openRightPanel === 'tab2'}
            onClick={() => handleClick('tab2')}
          >
            <img
              src={
                openRightPanel === 'tab2' ? PurpleCommentsIcon : CommentsIcon
              }
            />
          </Button>
        )}

        {isShowQuestionsTab(submission.type) && (
          <Button
            isActive={openRightPanel === 'tab3'}
            onClick={() => handleClick('tab3')}
          >
            <img src={openRightPanel === 'tab3' ? TasksIcon : TasksIcon} />
          </Button>
        )}
        {/* <Button isActive={openRightPanel === 'tab4'} onClick={() => handleClick('tab4')}>
          <img src={ClockIcon} />
        </Button> */}
      </TopSection>
    </MainContainer>
  );
};

export default FeedbackRightSidebar;
