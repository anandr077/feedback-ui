import React from 'react';
import {
  MarkRubricContainer,
  MarkRubricTitle,
  MarkRubricTitleContainer,
  Strength,
  StrengthContainer,
  StrengthsAndTargetsContainer,
  StrengthsAndTargetsContainerBody,
  StrengthsAndTargetsPart,
  Target,
  TargetContainer,
} from '../CriteriaAndOverallFeedback/style';
import { isStringPresent } from '../../../utils/arrays';
import { isAllowGiveMarkingCriteriaFeedback } from '../FeedbacksRoot/rules';

function MarkingCriteriaCell({
  strengthsAndTargets,
  selectedStrengths,
  selectedTargets,
  pageMode,
  handleStrengthndTargetChange,
  maxLength,
}) {
  const StrengthAndTargetCell = ({ currentIndex, type, selectedType }) => {
    return (
      <StrengthContainer
        onClick={
          isAllowGiveMarkingCriteriaFeedback(pageMode)
            ? () =>
                handleStrengthndTargetChange(
                  strengthsAndTargets,
                  currentIndex,
                  type
                )
            : () => {}
        }
        bgColor={isStringPresent(
          selectedType,
          'attribute',
          strengthsAndTargets[type][currentIndex]
        )}
        style={{
          cursor: isAllowGiveMarkingCriteriaFeedback(pageMode) ? 'pointer' : '',
        }}
      >
        <Strength
          bgColor={isStringPresent(
            selectedType,
            'attribute',
            strengthsAndTargets[type][currentIndex]
          )}
        >
          {strengthsAndTargets[type][currentIndex]}
        </Strength>
      </StrengthContainer>
    );
  };
  return (
    <>
      <MarkRubricContainer key={strengthsAndTargets.title}>
        <MarkRubricTitleContainer>
          <MarkRubricTitle>{strengthsAndTargets.title}</MarkRubricTitle>
        </MarkRubricTitleContainer>
        <StrengthsAndTargetsContainer>
          <StrengthsAndTargetsContainerBody>
            {Array.from({ length: maxLength }).map((_, index) => (
              <StrengthsAndTargetsPart key={index}>
                {strengthsAndTargets.strengths[index] && (
                  <StrengthAndTargetCell
                    currentIndex={index}
                    type={'strengths'}
                    selectedType={selectedStrengths}
                  />
                )}
                {strengthsAndTargets.targets[index] && (
                  <StrengthAndTargetCell
                    currentIndex={index}
                    type={'targets'}
                    selectedType={selectedTargets}
                  />
                )}
              </StrengthsAndTargetsPart>
            ))}
          </StrengthsAndTargetsContainerBody>
        </StrengthsAndTargetsContainer>
      </MarkRubricContainer>
    </>
  );
}

export default MarkingCriteriaCell;
