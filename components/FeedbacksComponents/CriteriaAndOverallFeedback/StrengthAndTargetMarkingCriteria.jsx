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
} from './style';
import { isAllowGiveMarkingCriteriaFeedback } from '../FeedbacksRoot/rules';

function StrengthAndTargetMarkingCriteria({
  markingCriteria,
  handleStrengthndTargetChange,
  pageMode,
  selectedTargets,
  selectedStrengths,
}) {
  const isStringPresent = (array, key, string) => {
    return array?.some((object) => object[key] === string);
  };
  return (
    <>
      <MarkStrengthContainer>
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
        {markingCriteria?.strengthsTargetsCriterias?.map(
          (strengthsAndTargets) => {
            const maxLen = Math.max(
              strengthsAndTargets.strengths.length,
              strengthsAndTargets.targets.length
            );
            return (
              <MarkRubricContainer key={strengthsAndTargets.title}>
                <MarkRubricTitleContainer>
                  <MarkRubricTitle>{strengthsAndTargets.title}</MarkRubricTitle>
                </MarkRubricTitleContainer>
                <StrengthsAndTargetsContainer>
                  <StrengthsAndTargetsContainerBody>
                    {Array.from({ length: maxLen }).map((_, index) => (
                      <StrengthsAndTargetsPart key={index}>
                        {strengthsAndTargets.strengths[index] && (
                          <StrengthContainer
                            onClick={
                              isAllowGiveMarkingCriteriaFeedback(pageMode)
                                ? () =>
                                    handleStrengthndTargetChange(
                                      strengthsAndTargets,
                                      index,
                                      'strengths'
                                    )
                                : () => {}
                            }
                            bgColor={isStringPresent(
                              selectedStrengths,
                              isAllowGiveMarkingCriteriaFeedback(pageMode)
                                ? 'name'
                                : 'attribute',
                              strengthsAndTargets.strengths[index]
                            )}
                            style={{
                              cursor: isAllowGiveMarkingCriteriaFeedback(
                                pageMode
                              )
                                ? 'pointer'
                                : '',
                            }}
                          >
                            <Strength
                              bgColor={isStringPresent(
                                selectedStrengths,
                                isAllowGiveMarkingCriteriaFeedback(pageMode)
                                  ? 'name'
                                  : 'attribute',
                                strengthsAndTargets.strengths[index]
                              )}
                            >
                              {strengthsAndTargets.strengths[index]}
                            </Strength>
                          </StrengthContainer>
                        )}
                        {strengthsAndTargets.targets[index] && (
                          <TargetContainer
                            onClick={() =>
                              handleStrengthndTargetChange(
                                strengthsAndTargets,
                                index,
                                'targets'
                              )
                            }
                            bgColor={isStringPresent(
                              selectedTargets,
                              isAllowGiveMarkingCriteriaFeedback(pageMode)
                                ? 'name'
                                : 'attribute',
                              strengthsAndTargets.targets[index]
                            )}
                            style={{
                              cursor: isAllowGiveMarkingCriteriaFeedback(
                                pageMode
                              )
                                ? 'pointer'
                                : '',
                            }}
                          >
                            <Target
                              bgColor={isStringPresent(
                                selectedTargets,
                                isAllowGiveMarkingCriteriaFeedback(pageMode)
                                  ? 'name'
                                  : 'attribute',
                                strengthsAndTargets.targets[index]
                              )}
                            >
                              {strengthsAndTargets.targets[index]}
                            </Target>
                          </TargetContainer>
                        )}
                      </StrengthsAndTargetsPart>
                    ))}
                  </StrengthsAndTargetsContainerBody>
                </StrengthsAndTargetsContainer>
              </MarkRubricContainer>
            );
          }
        )}
      </MarkStrengthContainer>
    </>
  );
}

export default StrengthAndTargetMarkingCriteria;
