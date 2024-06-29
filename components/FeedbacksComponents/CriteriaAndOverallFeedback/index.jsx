import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import CloseIcon from '../../../static/img/close.svg';
import closecircle from '../../../static/img/closecircle.svg';
import QuestionIcon from '../../../static/img/question-mark.svg';
import { getUserId } from '../../../userLocalDetails';
import { isNullOrEmpty } from '../../../utils/arrays';
import { isStringNull } from '../../../utils/strings';
import { GreenTickComponent, GreenTickText } from '../../GreenTick';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import NewOverallFeedback from '../../NewOverallFeedback';
import Toast from '../../Toast';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import {
  allCriteriaHaveSelectedLevels,
  isAllowGiveMarkingCriteriaFeedback,
  isMarkingCriteriaTypeRubric,
  isShowGreenTick,
  isShowMarkingCriteriaSection
} from '../FeedbacksRoot/rules';
import StrengthAndTargetMarkingCriteria from '../StrengthAndTargetMarkingCriteria';
import {
  Body,
  CloseBtn,
  HeaderRightSection,
  Heading,
  HeadingTitle,
  HideArrow,
  MainContainer,
  MarkingCriteriaContainer,
  MarkingCriteriaHeading,
  MarkingCriteriaHeadingContainer,
  MarkingCriteriaMainHeading,
  MarkingCriteriaMainHeadingContainer,
  MarkingCriteriaSection,
  OverallFeedbackContainer,
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
  Text
} from './style';
import { findMarkingCriteria } from '../FeedbacksRoot/functions';
import ToggleArrow from './ToggleArrow';

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
  submission,
  handleMarkingCriteriaLevelFeedback
}) => {
  const { overallComments, comments, markingCriteriaFeedback } =
    useContext(FeedbackContext);
  const [markingCriteriaFromSubmission, setMarkingCriteriaFromSubmission] = useState();
  const userId = getUserId();
  const [isShowMarkingCrteriaPopUp, setShowMarkingCrteriaPopUp] =
    useState(false);
  const overallFeedbackRef = useRef(null);
  const markingCriteriaSectionRef = useRef(null);
  const overallComment = (
    overallComments.length != 0 ? overallComments : null
  )?.find((comment) => comment?.questionSerialNumber === QuestionIndex + 1);
  
  const showOverAllFeedback = (ref) => {
    const container = ref.current;
    if (container.style.display === 'none') {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  };

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
    console.log(
      'markingCriteriaFromSubmission init',
      markingCriteriaFromSubmission
    );
    setMarkingCriteriaFromSubmission(markingCriteriaFromSubmission);
    if (!isNullOrEmpty(markingCriteriaFeedback)) {
      const submitedMarkingCriteria = markingCriteriaFeedback?.find(
        (markingCriteria) =>
          markingCriteria?.questionSerialNumber === QuestionIndex + 1
      );
      console.log('submitedMarkingCriteria', submitedMarkingCriteria);
      console.log(
        'markingCriteriaFromSubmission',
        markingCriteriaFromSubmission
      );
      if (submitedMarkingCriteria) {
        setMarkingCriteriaFromSubmission(submitedMarkingCriteria);
        console.log('submitedMarkingCriteria', submitedMarkingCriteria);
      }
    }
  }, [QuestionIndex]);

  const handleRubricsChange = (criteriaSerialNumber, selectedLevel) => {
    console.log('markingCriteria is', markingCriteriaFromSubmission);
    const update = {
      ...markingCriteriaFromSubmission,
      markingCriteria: {
        ...markingCriteriaFromSubmission.markingCriteria,
        criterias: markingCriteriaFromSubmission.markingCriteria.criterias.map(
          (criteria, criteriaIndex) => {
            if (criteriaIndex === criteriaSerialNumber) {
              return {
                ...criteria,
                selectedLevel: selectedLevel
              };
            }
            return criteria;
          }
        ),
      }
    }
    console.log('update is', update);

    setMarkingCriteriaFromSubmission((prevMarkingCriteria) => update);
    console.log('markingCriteria', markingCriteriaFromSubmission);
  };

  const handleStrengthndTargetChange = (strengthsAndTargets, index, type) => {
    const seletedItem = strengthsAndTargets[type][index];
    const selectedStrengths = markingCriteriaFromSubmission?.markingCriteria?.selectedStrengths || [];
    const selectedTargets = markingCriteriaFromSubmission?.markingCriteria?.selectedTargets || [];
    var newSelectedStrengths = selectedStrengths
    var newSelectedTargets = selectedStrengths
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
        ]
        

      } else {
        newSelectedStrengths = [...selectedStrengths, selectedStrengthNew];
      }
      setMarkingCriteriaFromSubmission(
        (prevMarkingCriteria) => ({
          ...prevMarkingCriteria,
          markingCriteria: {
            ...prevMarkingCriteria.markingCriteria,
            selectedStrengths: newSelectedStrengths,
          } 
        }
      ))
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

      setMarkingCriteriaFromSubmission(
        (prevMarkingCriteria) => ({
          ...prevMarkingCriteria,
          markingCriteria: {
            ...prevMarkingCriteria.markingCriteria,
            selectedTargets: newSelectedTargets
          } 
        }
      ))
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
        isNullOrEmpty(markingCriteriaFromSubmission.markingCriteria?.selectedStrengths)
      ) {
        toast(<Toast message={'Please select at least one strength'} />);
        return;
      }
      if (
        isNullOrEmpty(markingCriteriaFromSubmission.markingCriteria?.selectedTargets)
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

  const MarkingCriteriaPopContainer = ({
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

  return (
    <>
      {isShowMarkingCrteriaPopUp && (
        <MarkingCriteriaPopContainer
          setShowMarkingCrteriaPopUp={setShowMarkingCrteriaPopUp}
          markingCriteria={markingCriteriaFromSubmission.markingCriteria}
          handleMarkingCriteriaLevelFeedback={
            handleMarkingCriteriaLevelFeedback
          }
          questionSerialNumber={QuestionIndex + 1}
          pageMode={pageMode}
        />
      )}
      <MainContainer openRightPanel={openRightPanel}>
        <Heading>
          <>
            <HeadingTitle>
              Overall Feedback
              <img src={QuestionIcon} />
            </HeadingTitle>
            <HeaderRightSection>
              <GreenTickComponent
                ShowGreen={!isStringNull(overallComment?.comment)}
              />

              <ToggleArrow
                refProp={overallFeedbackRef}
                toggleSection={showOverAllFeedback}
              />
            </HeaderRightSection>
          </>

          {openRightPanel === 'tab2' && (
            <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
          )}
        </Heading>
        <Body>
          <OverallFeedbackContainer ref={overallFeedbackRef}>
            <NewOverallFeedback
              pageMode={pageMode}
              addOverallFeedback={addOverallFeedback}
              serialNumber={QuestionIndex + 1}
              overallComment={overallComment}
              updateOverAllFeedback={updateOverAllFeedback}
              reviewer={submission.reviewerId}
              userId={userId}
            />
          </OverallFeedbackContainer>

          {isShowMarkingCriteriaSection(markingCriteriaFromSubmission) && (
            <>
              <Heading>
                <HeadingTitle>
                  Assessment
                  <img src={QuestionIcon} />
                </HeadingTitle>
                <HeaderRightSection>
                  <GreenTickComponent
                    ShowGreen={isShowGreenTick(
                      findMarkingCriteria(
                        markingCriteriaFeedback,
                        QuestionIndex
                      )
                    )}
                  />

                  <ToggleArrow
                    refProp={markingCriteriaSectionRef}
                    toggleSection={showOverAllFeedback}
                  />
                </HeaderRightSection>
              </Heading>
              <MarkingCriteriaSection ref={markingCriteriaSectionRef}>
                <MarkingCriteriaMainHeadingContainer>
                  <MarkingCriteriaMainHeading>
                    Marking Criteria
                  </MarkingCriteriaMainHeading>
                  {isAllowGiveMarkingCriteriaFeedback(pageMode) ? (
                    <Text>
                      Click 'Expand' to provide Marking Criteria based feedback
                    </Text>
                  ) : (
                    <Text>
                      Click 'Expand' to see Marking Criteria based feedback
                    </Text>
                  )}
                </MarkingCriteriaMainHeadingContainer>
                <MarkingCriteriaContainer>
                  <MarkingCriteriaHeadingContainer>
                    <MarkingCriteriaHeading>
                      {isMarkingCriteriaTypeRubric(
                        markingCriteriaFromSubmission?.markingCriteria?.type
                      )
                        ? 'Rubric'
                        : 'Strengths and Targets'}
                    </MarkingCriteriaHeading>
                    <RubricButton
                      onClick={() => setShowMarkingCrteriaPopUp(true)}
                    >
                      {!isAllowGiveMarkingCriteriaFeedback(pageMode)
                        ? 'Expand'
                        : isShowGreenTick(
                            findMarkingCriteria(
                              markingCriteriaFeedback,
                              QuestionIndex
                            )
                          )
                        ? 'Update'
                        : 'Expand'}
                    </RubricButton>
                  </MarkingCriteriaHeadingContainer>
                </MarkingCriteriaContainer>
                {isAllowGiveMarkingCriteriaFeedback(pageMode) &&
                  isShowGreenTick(
                    findMarkingCriteria(markingCriteriaFeedback, QuestionIndex)
                  ) && (
                    <GreenTickText
                      margin={true}
                      text="Marking Criteria complete"
                    />
                  )}
              </MarkingCriteriaSection>
            </>
          )}
        </Body>
      </MainContainer>
    </>
  );
};

export default CriteriaAndOverallFeedback;
