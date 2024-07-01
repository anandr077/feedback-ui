import React from 'react';
import CloseIcon from '../../../static/img/close.svg';
import { Body, CloseBtn, MainContainer } from './style';
import OverallFeedback from './OverallFeedback';
import MarkingCriteria from './MarkingCriteria';

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
  submission,
  handleMarkingCriteriaLevelFeedback,
}) => {
  return (
    <MainContainer openRightPanel={openRightPanel}>
      {openRightPanel === 'tab2' && (
        <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
      )}
      <Body>
        <OverallFeedback
          addOverallFeedback={addOverallFeedback}
          updateOverAllFeedback={updateOverAllFeedback}
          pageMode={pageMode}
          submission={submission}
          QuestionIndex={QuestionIndex}
        />
        <MarkingCriteria
          pageMode={pageMode}
          submission={submission}
          QuestionIndex={QuestionIndex}
          handleMarkingCriteriaLevelFeedback={
            handleMarkingCriteriaLevelFeedback
          }
        />
      </Body>
    </MainContainer>
  );
};

export default CriteriaAndOverallFeedback;
