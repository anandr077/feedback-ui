import React from 'react';
import FeedbackTaskDetails from '../FeedbackTaskDetails';
import CriteriaAndOverallFeedback from '../CriteriaAndOverallFeedback';
import QuestionsDetails from '../QuestionsDetails';

const FeedbackRightSideSlidingTabs = ({
  handleRightSidebarClick,
  openRightPanel,
  submission,
  groupedFocusAreaIds,
  QuestionIndex,
  questionPanelOpen,
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
      />
      <CriteriaAndOverallFeedback
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
      />
      <QuestionsDetails
        handleClose={handleRightSidebarClick}
        openRightPanel={openRightPanel}
        submission={submission}
        QuestionIndex={QuestionIndex}
      />
    </>
  );
};

export default FeedbackRightSideSlidingTabs;
