import React from 'react';
import FeedbackTaskDetails from '../FeedbackTaskDetails';
import CriteriaAndOverallFeedback from '../CriteriaAndOverallFeedback';
import QuestionsDetailsTab from '../QuestionsDetailsTab';
import SubmissionHistoryTab from '../SubmissionHistoryTab';

const FeedbackRightSideSlidingTabs = ({
  handleRightSidebarClick,
  openRightPanel,
  submission,
  groupedFocusAreaIds,
  QuestionIndex,
  questionPanelOpen,
}) => {
  console.log('the submission is', submission)
  return (
    <>
      <FeedbackTaskDetails
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        submission={submission}
        groupedFocusAreaIds={groupedFocusAreaIds}
        QuestionIndex={QuestionIndex}
        questionPanelOpen={handleRightSidebarClick}
      />
      <CriteriaAndOverallFeedback
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
      />
      <QuestionsDetailsTab
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        submission={submission}
        QuestionIndex={QuestionIndex}
      />
      <SubmissionHistoryTab
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
      />
    </>
  );
};

export default FeedbackRightSideSlidingTabs;
