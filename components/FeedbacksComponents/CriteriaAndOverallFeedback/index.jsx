import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  Heading,
  Body,
  HeadingTitle,
  CloseBtn,
  HeadingDropdown,
  Text,
  RubricContainer,
  RubricInputContainer,
  RubricButton,
  OverallFeedbackContainer,
  TextFeedback,
  FeedbackBtn,
  MarkingCriteriaContainer,
  MarkRubricTitleContainer,
  LevelNameContainer,
  MarkStrengthContainer,
  Strength,
  Target,
  TargetHeading,
  MarkingCriteriaMainHeading,
  PopupBackground,
  PopupContainer,
  PopupTitleContainer,
  PopupTitle,
  PopupTitleImg,
  PopupDialogContentBox,
  StrengthsAndTargetsPart,
  TargetHeadingContainer,
  StrengthContainer,
  StrengthsAndTargetsContainerBody,
  StrengthsAndTargetsContainer,
  StrengthsAndTargetsContainerHeading,
  MarkingCriteriaHeadingContainer,
  MarkingCriteriaMainHeadingContainer,
  TargetContainer,
  PopupSubTitle,
  StrengthsAndTargetsHeadingContainer,
  StrengthsAndTargetsHeadingContainerDummy,
  SaveButtonContainer,
  SaveButton,
  SaveButtonText,
} from './style';
import CloseIcon from '../../../static/img/close.svg';
import QuestionIcon from '../../../static/img/question-mark.svg';
import TickMark from '../../../static/img/Ticklightcolor.svg';
import ArrowDownIcon from '../../../static/img/gray-arrow-down.svg';
import Microphone from '../../../static/img/Microphone.svg';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import AudioRecorder from '../../AudioRecorder';
import { base64ToBlob, blobToBase64 } from '../../../utils/blobs';
import OverallFeedback from '../../OverallFeedback';
import NewOverallFeedback from '../../NewOverallFeedback';
import { MarkingCriteriaHeading } from './style';
import { MarkRubricContainer } from './style';
import { MarkRubricsContainer } from './style';
import { MarkRubricTitle } from './style';
import { MarkRubricLevelContainer } from './style';
import { LevelName } from './style';
import { LevelDesc } from './style';
import { getUserId, getUserRole } from '../../../userLocalDetails';
import closecircle from '../../../static/img/closecircle.svg';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import {
  allCriteriaHaveSelectedLevels,
  isAllowGiveMarkingCriteriaFeedback,
  isMarkingCriteriaTypeRubric,
  isShowMarkingCriteriaSection,
  isShowOverallFeedbackHeadline,
} from '../FeedbacksRoot/rules';
import StrengthAndTargetMarkingCriteria from './StrengthAndTargetMarkingCriteria';
// import MemoizedAudioRecorder from '../../AudioRecorder';

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
  submission,
  handleMarkingCriteriaLevelFeedback,
  handleStrengthsTargetsFeedback,
}) => {
  const { overallComments, comments, markingCriteriaFeedback } =
    useContext(FeedbackContext);
  const [inputValue, setInputValue] = useState('');
  const [overallComment, setOverallComment] = useState({});
  const [markingCriteria, setMarkingCriteria] = useState();
  const isTeacher = getUserRole() === 'TEACHER';
  const userId = getUserId();
  const [selectedMarkingCriteria, setSelectedMarkingCriteria] = useState();
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [selectedTargets, setSelectedTargets] = useState([]);
  const [isShowMarkingCrteriaPopUp, setShowMarkingCrteriaPopUp] =
    useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    setIsSubmitted(false);
    const commentObject = (
      overallComments.length != 0 ? overallComments : null
    )?.find((comment) => comment?.questionSerialNumber === QuestionIndex + 1);
    setOverallComment(commentObject);
    console.log('markingCriteriaFeedback', markingCriteriaFeedback);
    const markingCriteria =
      submission?.assignment?.questions[QuestionIndex].markingCriteria;
    setMarkingCriteria(markingCriteria);
    if (markingCriteriaFeedback.length != 0) {
      let submitedMarkingCriteria = markingCriteriaFeedback?.find(
        (markingCriteria) =>
          markingCriteria?.questionSerialNumber === QuestionIndex + 1
      );
      if (submitedMarkingCriteria) {
        if (submitedMarkingCriteria?.markingCriteria?.criterias) {
          setIsSubmitted(true);
          setMarkingCriteria(submitedMarkingCriteria?.markingCriteria);
        }
        if (submitedMarkingCriteria?.markingCriteria?.selectedStrengths) {
          setIsSubmitted(true);
          setSelectedStrengths(
            submitedMarkingCriteria?.markingCriteria?.selectedStrengths
          );
          setSelectedTargets(
            submitedMarkingCriteria?.markingCriteria?.selectedTargets
          );
        }
      }
    }
  }, [overallComments, QuestionIndex, comments, submission]);
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const handleRubricsChange = (criteriaSerialNumber, selectedLevel) => {
    console.log('markingCriteria', markingCriteria);
    setMarkingCriteria((prevMarkingCriteria) => ({
      ...prevMarkingCriteria,
      criterias: prevMarkingCriteria.criterias.map(
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
    }));
    console.log('markingCriteria', markingCriteria);
  };

  const handleStrengthndTargetChange = (strengthsAndTargets, index, type) => {
    let seletedItem = strengthsAndTargets[type][index];

    if (type === 'strengths') {
      let selectedStrengthNew = {
        id: selectedStrengths.length + 1,
        attribute: seletedItem,
        criteria: strengthsAndTargets.title,
      };
      if (
        selectedStrengths.find(
          (stre) => stre.attribute === selectedStrengthNew.attribute
        )
      ) {
        setSelectedStrengths([
          ...selectedStrengths.filter(
            (selectedStrength) =>
              selectedStrength.attribute != selectedStrengthNew.attribute
          ),
        ]);
      } else {
        setSelectedStrengths([...selectedStrengths, selectedStrengthNew]);
      }
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
        setSelectedTargets([
          ...selectedTargets.filter(
            (selectedTarget) =>
              selectedTarget.attribute != selectedTargetNew.attribute
          ),
        ]);
      } else {
        setSelectedTargets([...selectedTargets, selectedTargetNew]);
      }
    }
  };

  const saveMarkingCrieria = () => {
    if (isMarkingCriteriaTypeRubric(markingCriteria?.type)) {
      if (!allCriteriaHaveSelectedLevels(markingCriteria?.criterias)) {
        console.log('Please ensure all criteria have a selected level.');
        showSnackbar('Please ensure all criteria have a selected level.');
        return;
      }
      setShowMarkingCrteriaPopUp(false);
      setIsSubmitted(true);
      handleMarkingCriteriaLevelFeedback(QuestionIndex, markingCriteria);
    } else {
      if (selectedStrengths.length === 0) {
        console.log('please select at least one strength');
        showSnackbar('please select at least one strength');
        return;
      }
      if (selectedTargets.length === 0) {
        console.log('please select at least one target');
        showSnackbar('please select at least one target ');
        return;
      }
      setShowMarkingCrteriaPopUp(false);
      setIsSubmitted(true);
      handleStrengthsTargetsFeedback(
        QuestionIndex,
        selectedStrengths,
        selectedTargets
      );
    }
  };
  const isStringPresent = (array, key, string) => {
    return array?.some((object) => object[key] === string);
  };
  const handleMarkingCriteria = (index, name) => {
    handleMarkingCriteriaLevelFeedback(QuestionIndex + 1, index, name);
  };

  const MarkingCriteriaPopContainer = ({
    markingCriteria,
    setShowMarkingCrteriaPopUp,
    handleMarkingCriteriaLevelFeedback,
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
                selectedStrengths={selectedStrengths}
                selectedTargets={selectedTargets}
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
          markingCriteria={markingCriteria}
          handleMarkingCriteriaLevelFeedback={
            handleMarkingCriteriaLevelFeedback
          }
          questionSerialNumber={QuestionIndex + 1}
          pageMode={pageMode}
        />
      )}
      <MainContainer openRightPanel={openRightPanel}>
        <Heading>
          {isShowMarkingCriteriaSection(markingCriteria) ? (
            <HeadingTitle>
              Assessment Criteria
              <img src={QuestionIcon} />
            </HeadingTitle>
          ) : (
            <HeadingTitle>
              Overall Feedback
              <img src={QuestionIcon} />
            </HeadingTitle>
          )}
          <HeadingDropdown>
            <img src={TickMark} />
          </HeadingDropdown>
          {openRightPanel === 'tab2' && (
            <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
          )}
        </Heading>
        <Body>
          {isShowMarkingCriteriaSection(markingCriteria) && (
            <>
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
                    {isMarkingCriteriaTypeRubric(markingCriteria?.type)
                      ? 'Rubric'
                      : 'Strengths and Targets'}
                  </MarkingCriteriaHeading>
                  <RubricButton
                    onClick={() => setShowMarkingCrteriaPopUp(true)}
                  >
                    {!isAllowGiveMarkingCriteriaFeedback(pageMode)
                      ? 'Expand'
                      : isSubmitted ||
                        (isMarkingCriteriaTypeRubric(markingCriteria?.type)
                          ? allCriteriaHaveSelectedLevels(
                              markingCriteria?.criterias
                            )
                          : selectedTargets.length !== 0 ||
                            selectedStrengths.length !== 0)
                      ? 'Update'
                      : 'Expand'}
                  </RubricButton>
                </MarkingCriteriaHeadingContainer>
              </MarkingCriteriaContainer>
            </>
          )}
          {isShowOverallFeedbackHeadline(
            pageMode,
            overallComment,
            submission.reviewerId,
            userId,
            markingCriteriaFeedback
          ) && (
            <Heading>
              <HeadingTitle>
                Overall Feedback
                <img src={QuestionIcon} />
              </HeadingTitle>
              <HeadingDropdown>
                <img src={TickMark} />
              </HeadingDropdown>
              {openRightPanel === 'tab2' &&
                !isShowMarkingCriteriaSection(markingCriteriaFeedback) && (
                  <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
                )}
            </Heading>
          )}
          <OverallFeedbackContainer>
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
        </Body>
      </MainContainer>
    </>
  );
};

export default CriteriaAndOverallFeedback;
