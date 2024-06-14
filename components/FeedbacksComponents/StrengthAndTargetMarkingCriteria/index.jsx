import React from 'react';
import {
  MarkRubricContainer,
  MarkRubricTitle,
  MarkRubricTitleContainer,
  MarkStrengthContainer,
  Strength,
  StrengthContainer,
  StrengthsAndTargetsContainer,
  StrengthsAndTargetsContainerBody,
  StrengthsAndTargetsContainerHeading,
  StrengthsAndTargetsHeadingContainer,
  StrengthsAndTargetsHeadingContainerDummy,
  StrengthsAndTargetsPart,
  Target,
  TargetContainer,
  TargetHeading,
  TargetHeadingContainer,
} from '../CriteriaAndOverallFeedback/style';
import { isAllowGiveMarkingCriteriaFeedback } from '../FeedbacksRoot/rules';
import { isStringPresent } from '../../../utils/arrays';
import BodyPart from './MarkingCriteriaCell';
import MarkingCriteriaCell from './MarkingCriteriaCell';

function StrengthAndTargetMarkingCriteria({
  markingCriteria,
  handleStrengthndTargetChange,
  pageMode,
  selectedTargets,
  selectedStrengths,
}) {
  const HeadingPart = () => {
    return (
      <StrengthsAndTargetsHeadingContainer>
        <StrengthsAndTargetsHeadingContainerDummy></StrengthsAndTargetsHeadingContainerDummy>
        <StrengthsAndTargetsContainerHeading>
          <TargetHeadingContainer>
            <TargetHeading>Strengths</TargetHeading>
          </TargetHeadingContainer>
          <TargetHeadingContainer>
            <TargetHeading>Targets</TargetHeading>
          </TargetHeadingContainer>
        </StrengthsAndTargetsContainerHeading>
      </StrengthsAndTargetsHeadingContainer>
    );
  };
  return (
    <>
      <MarkStrengthContainer>
        <HeadingPart />
        {markingCriteria?.strengthsTargetsCriterias?.map(
          (strengthsAndTargets) => {
            const maxLength = Math.max(
              strengthsAndTargets.strengths.length,
              strengthsAndTargets.targets.length
            );
            return (
              <MarkingCriteriaCell
                strengthsAndTargets={strengthsAndTargets}
                maxLength={maxLength}
                handleStrengthndTargetChange={handleStrengthndTargetChange}
                pageMode={pageMode}
                selectedStrengths={selectedStrengths}
                selectedTargets={selectedTargets}
              />
            );
          }
        )}
      </MarkStrengthContainer>
    </>
  );
}

export default StrengthAndTargetMarkingCriteria;
