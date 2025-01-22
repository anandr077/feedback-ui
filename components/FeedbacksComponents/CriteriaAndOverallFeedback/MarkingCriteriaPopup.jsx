import React from 'react';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import StrengthAndTargetMarkingCriteria from '../StrengthAndTargetMarkingCriteria';
import {
  isMarkingCriteriaTypeRubric,
  isAllowGiveMarkingCriteriaFeedback,
} from '../FeedbacksRoot/rules';
import {
  PopupBackground,
  PopupContainer,
  PopupTitleContainer,
  PopupTitle,
  PopupSubTitle,
  PopupTitleImg,
  SaveButtonContainer,
  SaveButton,
  SaveButtonText,
  PopupDialogContentBox,
} from './style';
import closecircle from '../../../static/img/closecircle.svg';

function MarkingCriteriaPopup({
  markingCriteria,
  handleRubricsChange,
  handleStrengthndTargetChange,
  closePopup,
  saveMarkingCrieria,
  questionSerialNumber,
  pageMode,
}) {
  return (
    <PopupBackground>
      <PopupContainer>
        <PopupTitleContainer>
          <PopupTitle>
            {isMarkingCriteriaTypeRubric(markingCriteria?.type)
              ? 'Rubric'
              : 'Strengths & Targets'}
            {isAllowGiveMarkingCriteriaFeedback(pageMode) && (
              <PopupSubTitle>
                {isMarkingCriteriaTypeRubric(markingCriteria?.type)
                  ? 'Mark the rubric for every criteria. Only one value can be selected in each criteria'
                  : 'Mark the Strengths and Targets for every criteria. Multiple strength and target values can be selected for each criteria'}
              </PopupSubTitle>
            )}
          </PopupTitle>
          <PopupTitleImg onClick={closePopup} src={closecircle} />
        </PopupTitleContainer>
        <PopupDialogContentBox>
          {isMarkingCriteriaTypeRubric(markingCriteria?.type) ? (
            <MarkingCriteriaFeedback
              markingCriteria={markingCriteria}
              handleRubricsChange={handleRubricsChange}
              questionSerialNumber={questionSerialNumber}
              pageMode={pageMode}
            />
          ) : (
            <StrengthAndTargetMarkingCriteria
              markingCriteria={markingCriteria}
              handleStrengthndTargetChange={handleStrengthndTargetChange}
              pageMode={pageMode}
              selectedStrengths={markingCriteria.selectedStrengths}
              selectedTargets={markingCriteria.selectedTargets}
            />
          )}
        </PopupDialogContentBox>
        {isAllowGiveMarkingCriteriaFeedback(pageMode) && (
          <SaveButtonContainer>
            <SaveButton onClick={saveMarkingCrieria}>
              <SaveButtonText>Save Criteria</SaveButtonText>
            </SaveButton>
          </SaveButtonContainer>
        )}
      </PopupContainer>
    </PopupBackground>
  );
}

export default MarkingCriteriaPopup;
