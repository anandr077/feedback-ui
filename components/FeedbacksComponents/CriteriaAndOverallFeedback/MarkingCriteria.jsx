import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  allCriteriaHaveSelectedLevels,
  isAllowGiveMarkingCriteriaFeedback,
  isMarkingCriteriaTypeRubric,
  isShowGreenTick,
  isShowMarkingCriteriaPreview,
  isShowMarkingCriteriaSection,
  isTeacher,
} from '../FeedbacksRoot/rules';
import ToggleArrow from './ToggleArrow';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import { isNullOrEmpty } from '../../../utils/arrays';
import {
  findMarkingCriteria,
  showOverAllFeedback,
} from '../FeedbacksRoot/functions';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import { useMarkingCriteria } from './hooks/useMarkingCriteria';
import { useMarkingCriteriaPopup } from './hooks/useMarkingCriteriaPopup';
import MarkingCriteriaPopup from './MarkingCriteriaPopup';
import MarkingCriteriaAccordion from './MarkingCriteriaAccordion';
function MarkingCriteria({
  QuestionIndex,
  pageMode,
  submission,
  handleMarkingCriteriaLevelFeedback,
}) {
  const { markingCriteriaFeedback } = useContext(FeedbackContext);
  const {
    markingCriteriaFromSubmission,
    handleRubricsChange,
    handleStrengthndTargetChange,
  } = useMarkingCriteria(QuestionIndex, submission);
  const { isShowMarkingCrteriaPopUp, openPopup, closePopup } =
    useMarkingCriteriaPopup();

  const saveMarkingCrieria = () => {
    if (
      isMarkingCriteriaTypeRubric(
        markingCriteriaFromSubmission?.markingCriteria?.type
      )
    ) {
      if (
        !allCriteriaHaveSelectedLevels(
          markingCriteriaFromSubmission?.markingCriteria?.criterias
        )
      ) {
        toast(
          <Toast message={'Please ensure all criteria have a selected level'} />
        );
        return;
      }
      setShowMarkingCrteriaPopUp(false);
      handleMarkingCriteriaLevelFeedback(
        QuestionIndex,
        markingCriteriaFromSubmission
      );
    } else {
      if (
        isNullOrEmpty(
          markingCriteriaFromSubmission.markingCriteria?.selectedStrengths
        )
      ) {
        toast(<Toast message={'Please select at least one strength'} />);
        return;
      }
      if (
        isNullOrEmpty(
          markingCriteriaFromSubmission.markingCriteria?.selectedTargets
        )
      ) {
        toast(<Toast message={'Please Select at least one target'} />);
        return;
      }
      setShowMarkingCrteriaPopUp(false);
      handleMarkingCriteriaLevelFeedback(
        QuestionIndex,
        markingCriteriaFromSubmission
      );
    }
  };

  const isRubric = isMarkingCriteriaTypeRubric(
    markingCriteriaFromSubmission?.markingCriteria?.type
  );
  const currentMarkingCriteria = findMarkingCriteria(
    markingCriteriaFeedback,
    QuestionIndex
  );
  if (
    !isShowMarkingCriteriaSection(
      markingCriteriaFromSubmission?.markingCriteria
    )
  ) {
    return null;
  }

  return (
    <>
      {isShowMarkingCrteriaPopUp && (
        <MarkingCriteriaPopup
          markingCriteria={markingCriteriaFromSubmission.markingCriteria}
          handleRubricsChange={handleRubricsChange}
          handleStrengthndTargetChange={handleStrengthndTargetChange}
          closePopup={closePopup}
          saveMarkingCrieria={saveMarkingCrieria}
          questionSerialNumber={QuestionIndex + 1}
          pageMode={pageMode}
        />
      )}
      <MarkingCriteriaAccordion
        markingCriteriaFromSubmission={markingCriteriaFromSubmission}
        currentMarkingCriteria={currentMarkingCriteria}
        isRubric={isRubric}
        openPopup={openPopup}
        pageMode={pageMode}
        QuestionIndex={QuestionIndex}
        markingCriteriaFeedback={markingCriteriaFeedback}
      />
    </>
  );
}

export default MarkingCriteria;
