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
import QuestionIcon from '../../../static/img/question-mark.svg';
import {
  HeaderRightSection,
  Heading,
  HeadingTitle,
  MarkingCriteriaContainer,
  MarkingCriteriaHeading,
  MarkingCriteriaHeadingContainer,
  MarkingCriteriaMainHeading,
  MarkingCriteriaMainHeadingContainer,
  MarkingCriteriaPreview,
  MarkingCriteriaSection,
  PopupBackground,
  PopupContainer,
  PopupDialogContentBox,
  PopupSubTitle,
  PopupTitle,
  PopupTitleContainer,
  PopupTitleImg,
  RubricButton,
  SaveButton,
  SaveButtonContainer,
  SaveButtonText,
  Text,
} from './style';
import { GreenTickComponent, GreenTickText } from '../../GreenTick';
import ToggleArrow from './ToggleArrow';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import closecircle from '../../../static/img/closecircle.svg';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import StrengthAndTargetMarkingCriteria from '../StrengthAndTargetMarkingCriteria';
import { isNullOrEmpty } from '../../../utils/arrays';
import {
  findMarkingCriteria,
  showOverAllFeedback,
} from '../FeedbacksRoot/functions';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import StrengthAndTargetPreview from './StrengthAndTargetPreview';
import RubricPreview from './RubricPreview';
import Accordion from '../../../components2/HelpSidebar/Accordion';
import { getButtonText } from './function';

function MarkingCriteria({
  QuestionIndex,
  pageMode,
  submission,
  handleMarkingCriteriaLevelFeedback,
}) {
  const { markingCriteriaFeedback } = useContext(FeedbackContext);
  const [markingCriteriaFromSubmission, setMarkingCriteriaFromSubmission] =
    useState();
  const [isShowMarkingCrteriaPopUp, setShowMarkingCrteriaPopUp] =
    useState(false);

  useEffect(() => {
    const markingCriteriaFromSubmission = {
      questionSerialNumber: QuestionIndex + 1,
      feedback: 'Marking Criteria Feedback',
      range: { from: 0, to: 0 },
      type: 'MARKING_CRITERIA',
      replies: [],
      sharedWithStudents: [],
      markingCriteria:
        submission?.assignment?.questions[QuestionIndex]?.markingCriteria,
    };
    
    setMarkingCriteriaFromSubmission(markingCriteriaFromSubmission);
    if (!isNullOrEmpty(markingCriteriaFeedback)) {
      const submitedMarkingCriteria = markingCriteriaFeedback?.find(
        (markingCriteria) =>
          markingCriteria?.questionSerialNumber === QuestionIndex + 1
      );
      
      if (submitedMarkingCriteria) {
        setMarkingCriteriaFromSubmission(submitedMarkingCriteria);
        
      }
    }
  }, [QuestionIndex, markingCriteriaFeedback]);

  const handleRubricsChange = (criteriaSerialNumber, selectedLevel) => {
   
    const update = {
      ...markingCriteriaFromSubmission,
      markingCriteria: {
        ...markingCriteriaFromSubmission.markingCriteria,
        criterias: markingCriteriaFromSubmission.markingCriteria.criterias.map(
          (criteria, criteriaIndex) => {
            if (criteriaIndex === criteriaSerialNumber) {
              return {
                ...criteria,
                selectedLevel: selectedLevel,
              };
            }
            return criteria;
          }
        ),
      },
    };
    

    setMarkingCriteriaFromSubmission((prevMarkingCriteria) => update);
    
  };

  const handleStrengthndTargetChange = (strengthsAndTargets, index, type) => {
    const seletedItem = strengthsAndTargets[type][index];
    const selectedStrengths =
      markingCriteriaFromSubmission?.markingCriteria?.selectedStrengths || [];
    const selectedTargets =
      markingCriteriaFromSubmission?.markingCriteria?.selectedTargets || [];
    var newSelectedStrengths = selectedStrengths;
    var newSelectedTargets = selectedStrengths;
    if (type === 'strengths') {
      const selectedStrengthNew = {
        id: selectedStrengths?.length + 1,
        attribute: seletedItem,
        criteria: strengthsAndTargets.title,
      };
      if (
        selectedStrengths.find(
          (stre) => stre.attribute === selectedStrengthNew.attribute
        )
      ) {
        newSelectedStrengths = [
          ...selectedStrengths.filter(
            (selectedStrength) =>
              selectedStrength.attribute != selectedStrengthNew.attribute
          ),
        ];
      } else {
        newSelectedStrengths = [...selectedStrengths, selectedStrengthNew];
      }
      setMarkingCriteriaFromSubmission((prevMarkingCriteria) => ({
        ...prevMarkingCriteria,
        markingCriteria: {
          ...prevMarkingCriteria.markingCriteria,
          selectedStrengths: newSelectedStrengths,
        },
      }));
    }
    if (type === 'targets') {
      let selectedTargetNew = {
        id: selectedTargets.length + 1,
        attribute: seletedItem,
        criteria: strengthsAndTargets.title,
      };

      if (
        selectedTargets.find(
          (target) => target.attribute === selectedTargetNew.attribute
        )
      ) {
        newSelectedTargets = [
          ...selectedTargets.filter(
            (selectedTarget) =>
              selectedTarget.attribute != selectedTargetNew.attribute
          ),
        ];
      } else {
        newSelectedTargets = [...selectedTargets, selectedTargetNew];
      }

      setMarkingCriteriaFromSubmission((prevMarkingCriteria) => ({
        ...prevMarkingCriteria,
        markingCriteria: {
          ...prevMarkingCriteria.markingCriteria,
          selectedTargets: newSelectedTargets,
        },
      }));
    }
  };

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



  const MarkingCriteriaPopUpContainer = ({
    markingCriteria,
    setShowMarkingCrteriaPopUp,
    questionSerialNumber,
  }) => {
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
            <PopupTitleImg
              onClick={() => setShowMarkingCrteriaPopUp(false)}
              src={closecircle}
            />
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
              <SaveButton
                onClick={() => {
                  saveMarkingCrieria();
                }}
              >
                <SaveButtonText>Save Criteria</SaveButtonText>
              </SaveButton>
            </SaveButtonContainer>
          )}
        </PopupContainer>
      </PopupBackground>
    );
  };
  const isRubric = isMarkingCriteriaTypeRubric(
    markingCriteriaFromSubmission?.markingCriteria?.type
  );
  const currentMarkingCriteria = findMarkingCriteria(
    markingCriteriaFeedback,
    QuestionIndex
  );
  return (
    <>
      {isShowMarkingCrteriaPopUp && (
        <MarkingCriteriaPopUpContainer
          setShowMarkingCrteriaPopUp={setShowMarkingCrteriaPopUp}
          markingCriteria={markingCriteriaFromSubmission.markingCriteria}
          handleMarkingCriteriaLevelFeedback={
            handleMarkingCriteriaLevelFeedback
          }
          questionSerialNumber={QuestionIndex + 1}
          pageMode={pageMode}
        />
      )}
      {isShowMarkingCriteriaSection(
        markingCriteriaFromSubmission?.markingCriteria
      ) && (
        <Accordion
          title={
            <Heading>
              <HeadingTitle>
                Marking Criteria
                <img src={QuestionIcon} />
              </HeadingTitle>
              <HeaderRightSection>
                <GreenTickComponent
                  ShowGreen={isShowGreenTick(currentMarkingCriteria)}
                />
              </HeaderRightSection>
            </Heading>
          }
          body={
            <MarkingCriteriaSection>
              <MarkingCriteriaMainHeadingContainer></MarkingCriteriaMainHeadingContainer>
              <MarkingCriteriaContainer>
                <MarkingCriteriaHeadingContainer>
                  <MarkingCriteriaHeading>
                    {isRubric ? 'Rubric' : 'Strengths and Targets'}
                  </MarkingCriteriaHeading>
                  <RubricButton
                    onClick={() => setShowMarkingCrteriaPopUp(true)}
                  >
                    {getButtonText(
                      pageMode,
                      markingCriteriaFeedback,
                      QuestionIndex
                    )}
                  </RubricButton>
                </MarkingCriteriaHeadingContainer>
                {isShowMarkingCriteriaPreview(pageMode) &&
                  isShowGreenTick(currentMarkingCriteria) && (
                    <>
                      {isRubric ? (
                        <RubricPreview
                          markingCriteria={
                            markingCriteriaFromSubmission?.markingCriteria
                          }
                        />
                      ) : (
                        <StrengthAndTargetPreview
                          markingCriteria={
                            markingCriteriaFromSubmission?.markingCriteria
                          }
                        />
                      )}
                    </>
                  )}
              </MarkingCriteriaContainer>
              {isAllowGiveMarkingCriteriaFeedback(pageMode) &&
                isShowGreenTick(currentMarkingCriteria) && (
                  <GreenTickText
                    margin={true}
                    text="Marking Criteria complete"
                  />
                )}
            </MarkingCriteriaSection>
          }
        />
      )}
    </>
  );
}

export default MarkingCriteria;
