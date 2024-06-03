import React from 'react';
import FeedbackTaskDetails from '../FeedbackTaskDetails';
import CriteriaAndOverallFeedback from '../CriteriaAndOverallFeedback';
import QuestionsDetailsTab from '../QuestionsDetailsTab';
import SubmissionHistoryTab from '../SubmissionHistoryTab';

const FeedbackRightSideSlidingTabs = ({
  handleRightSidebarClick,
  openRightPanel,
  submission,
  QuestionIndex,
  methods,
  setQuestionIndex,
  pageMode
}) => {
 
  return (
    <>
      <FeedbackTaskDetails
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        submission={submission}
        QuestionIndex={QuestionIndex}
        questionPanelOpen={handleRightSidebarClick}
      />
      <CriteriaAndOverallFeedback
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        addOverallFeedback={methods.addOverallFeedback}
        updateOverAllFeedback={methods.updateOverAllFeedback}
        pageMode={pageMode}
        submission={submission}
        QuestionIndex={QuestionIndex}
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
