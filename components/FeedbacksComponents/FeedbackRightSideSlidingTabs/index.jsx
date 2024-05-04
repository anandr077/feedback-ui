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
  methods,
  setQuestionIndex
}) => {
 
  return (
    <>
      <FeedbackTaskDetails
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        submission={submission}
        groupedFocusAreaIds={groupedFocusAreaIds}
        QuestionIndex={QuestionIndex}
        questionPanelOpen={handleRightSidebarClick}
        methods={methods}
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
        setQuestionIndex={setQuestionIndex}
      />
      <SubmissionHistoryTab
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
      />
    </>
  );
};

export default FeedbackRightSideSlidingTabs;
