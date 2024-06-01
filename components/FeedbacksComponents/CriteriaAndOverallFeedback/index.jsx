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
  LevelDescCont,
  MarkStrengthContainer,
  StrengthsAndTargetsCont,
  StrengthsCont,
  TargetsCont,
  StrengthCont,
  Strength,
  TargetCont,
  Target,
  TargetHeadingCon,
  TargetHeading,
  MarkingCriteriaMainHeading,
  MarkingCriteriaMainHeadingCont,
  MarkingCriteriaHeadingCont,
  PopupBackground,
  PopupContainer,
  PopupTitleContainer,
  PopupTitle,
  PopupTitleImg,
  PopupDialogContentBox,
  StrengthsAndTargetsContHeading,
  StrengthsAndTargetsContBody,
  StrengthsAndTargetsPart,
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
import { getUserRole } from '../../../userLocalDetails';
import closecircle from '../../../static/img/closecircle.svg';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import { isReviewMode } from '../FeedbacksRoot/rules';
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
  const [selectedMarkingCriteria, setSelectedMarkingCriteria] = useState();
  const [selectedStrengthId, setSelectedStrengthId] = useState(0);
  const [selectedStrengths, setSelectedStrengths] = useState([{}]);
  const [selectedTarget, setSelectedTarget] = useState([{}]);
  const [isShowMarkingCrteriaPopUp, setShowMarkingCrteriaPopUp] =
    useState(false);

  useEffect(() => {
    const commentObject = (
      overallComments.length != 0 ? overallComments : null
    )?.find((comment) => comment?.questionSerialNumber === QuestionIndex + 1);
    setOverallComment(commentObject);

    const markingCriteria =
      submission?.assignment?.questions[QuestionIndex].markingCriteria;
    setMarkingCriteria(markingCriteria);
    if (!isReviewMode(pageMode)) {
      setMarkingCriteria(
        markingCriteriaFeedback[QuestionIndex]?.markingCriteria
      );
      setSelectedStrengths(
        markingCriteriaFeedback[QuestionIndex]?.markingCriteria
          ?.selectedStrengths
      );
      setSelectedTarget(
        markingCriteriaFeedback[QuestionIndex]?.markingCriteria?.selectedTargets
      );
    }
  }, [overallComments, QuestionIndex, comments, submission]);
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const handleStrengthndTargetChange = (strengthsAndTargets, index, type) => {
    let seletedItem = strengthsAndTargets[type][index];
    if (type === 'strengths') {
      if (selectedStrengthId === 0) {
        let selectedStrengthNew = {
          id: selectedStrengthId,
          name: seletedItem,
          type: 'strengths',
          heading: strengthsAndTargets.title,
        };
        setSelectedStrengths([
          ...selectedStrengths.filter(
            (selectedStrength) => selectedStrength.id !== selectedStrengthNew.id
          ),
          selectedStrengthNew,
        ]);
        handleStrengthsTargetsFeedback(
          QuestionIndex + 1,
          selectedStrengthId,
          selectedStrengthNew
        );
        setSelectedStrengthId(1);
      }
      if (selectedStrengthId === 1) {
        let selectedStrengthNew = {
          id: selectedStrengthId,
          name: seletedItem,
          type: 'strengths',
          heading: strengthsAndTargets.title,
        };
        setSelectedStrengths([
          ...selectedStrengths.filter(
            (selectedStrength) => selectedStrength.id !== selectedStrengthNew.id
          ),
          selectedStrengthNew,
        ]);
        handleStrengthsTargetsFeedback(
          QuestionIndex + 1,
          selectedStrengthId,
          selectedStrengthNew
        );
        setSelectedStrengthId(0);
      }
    }
    if (type === 'targets') {
      let selectedTargetNew = {
        id: selectedStrengthId,
        name: seletedItem,
        type: 'targets',
        heading: strengthsAndTargets.title,
      };
      setSelectedTarget([selectedTargetNew]);
      handleStrengthsTargetsFeedback(QuestionIndex + 1, 2, selectedTargetNew);
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
            <PopupTitle>{markingCriteria.title}</PopupTitle>
            <PopupTitleImg
              onClick={() => setShowMarkingCrteriaPopUp(false)}
              src={closecircle}
            />
          </PopupTitleContainer>
          <PopupDialogContentBox>
            {markingCriteria?.type === 'RUBRICS' ? (
              <MarkingCriteriaFeedback
                markingCriteria={markingCriteria}
                handleMarkingCriteriaLevelFeedback={
                  handleMarkingCriteriaLevelFeedback
                }
                questionSerialNumber={questionSerialNumber}
                pageMode={pageMode}
              />
            ) : (
              <>
                {isReviewMode(pageMode) ? (
                  <MarkStrengthContainer>
                    {markingCriteria?.strengthsTargetsCriterias?.map(
                      (strengthsAndTargets) => {
                        const maxLen = Math.max(
                          strengthsAndTargets.strengths.length,
                          strengthsAndTargets.targets.length
                        );
                        return (
                          <MarkRubricContainer key={strengthsAndTargets.title}>
                            <MarkRubricTitleContainer>
                              <MarkRubricTitle>
                                {strengthsAndTargets.title}
                              </MarkRubricTitle>
                            </MarkRubricTitleContainer>
                            <StrengthsAndTargetsCont>
                              <StrengthsAndTargetsContHeading>
                                <TargetHeadingCon>
                                  <TargetHeading>Strengths</TargetHeading>
                                </TargetHeadingCon>
                                <TargetHeadingCon>
                                  <TargetHeading>Targets</TargetHeading>
                                </TargetHeadingCon>
                              </StrengthsAndTargetsContHeading>
                              <StrengthsAndTargetsContBody>
                                {Array.from({ length: maxLen }).map(
                                  (_, index) => (
                                    <StrengthsAndTargetsPart key={index}>
                                      {strengthsAndTargets.strengths[index] && (
                                        <StrengthCont
                                          onClick={() =>
                                            handleStrengthndTargetChange(
                                              strengthsAndTargets,
                                              index,
                                              'strengths'
                                            )
                                          }
                                          bgColor={isStringPresent(
                                            selectedStrengths,
                                            'name',
                                            strengthsAndTargets.strengths[index]
                                          )}
                                          style={{
                                            cursor: isReviewMode(pageMode)
                                              ? 'pointer'
                                              : '',
                                          }}
                                        >
                                          <Strength>
                                            {
                                              strengthsAndTargets.strengths[
                                                index
                                              ]
                                            }
                                          </Strength>
                                        </StrengthCont>
                                      )}
                                      {strengthsAndTargets.targets[index] && (
                                        <TargetCont
                                          onClick={() =>
                                            handleStrengthndTargetChange(
                                              strengthsAndTargets,
                                              index,
                                              'targets'
                                            )
                                          }
                                          bgColor={isStringPresent(
                                            selectedTarget,
                                            'name',
                                            strengthsAndTargets.targets[index]
                                          )}
                                          style={{
                                            cursor: isReviewMode(pageMode)
                                              ? 'pointer'
                                              : '',
                                          }}
                                        >
                                          <Target>
                                            {strengthsAndTargets.targets[index]}
                                          </Target>
                                        </TargetCont>
                                      )}
                                    </StrengthsAndTargetsPart>
                                  )
                                )}
                              </StrengthsAndTargetsContBody>
                            </StrengthsAndTargetsCont>
                          </MarkRubricContainer>
                        );
                      }
                    )}
                  </MarkStrengthContainer>
                ) : (
                  <MarkStrengthContainer>
                    {markingCriteria?.strengthsTargetsCriterias?.map(
                      (strengthsAndTargets) => {
                        const maxLen = Math.max(
                          strengthsAndTargets.strengths.length,
                          strengthsAndTargets.targets.length
                        );
                        return (
                          <MarkRubricContainer key={strengthsAndTargets.title}>
                            <MarkRubricTitleContainer>
                              <MarkRubricTitle>
                                {strengthsAndTargets.title}
                              </MarkRubricTitle>
                            </MarkRubricTitleContainer>
                            <StrengthsAndTargetsCont>
                              <StrengthsAndTargetsContHeading>
                                <TargetHeadingCon>
                                  <TargetHeading>Strengths</TargetHeading>
                                </TargetHeadingCon>
                                <TargetHeadingCon>
                                  <TargetHeading>Targets</TargetHeading>
                                </TargetHeadingCon>
                              </StrengthsAndTargetsContHeading>
                              <StrengthsAndTargetsContBody>
                                {Array.from({ length: maxLen }).map(
                                  (_, index) => (
                                    <StrengthsAndTargetsPart key={index}>
                                      {strengthsAndTargets.strengths[index] && (
                                        <StrengthCont
                                          bgColor={isStringPresent(
                                            selectedStrengths,
                                            'attribute',
                                            strengthsAndTargets.strengths[index]
                                          )}
                                        >
                                          <Strength>
                                            {
                                              strengthsAndTargets.strengths[
                                                index
                                              ]
                                            }
                                          </Strength>
                                        </StrengthCont>
                                      )}
                                      {strengthsAndTargets.targets[index] && (
                                        <TargetCont
                                          bgColor={isStringPresent(
                                            selectedTarget,
                                            'attribute',
                                            strengthsAndTargets.targets[index]
                                          )}
                                        >
                                          <Target>
                                            {strengthsAndTargets.targets[index]}
                                          </Target>
                                        </TargetCont>
                                      )}
                                    </StrengthsAndTargetsPart>
                                  )
                                )}
                              </StrengthsAndTargetsContBody>
                            </StrengthsAndTargetsCont>
                          </MarkRubricContainer>
                        );
                      }
                    )}
                  </MarkStrengthContainer>
                )}
              </>
            )}
          </PopupDialogContentBox>
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
          <HeadingTitle>
            Assessment Criteria
            <img src={QuestionIcon} />
          </HeadingTitle>
          <HeadingDropdown>
            <img src={TickMark} />
            <img src={ArrowDownIcon} />
          </HeadingDropdown>
          {openRightPanel === 'tab2' && (
            <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
          )}
        </Heading>
        <Body>
          <MarkingCriteriaMainHeadingCont>
            <MarkingCriteriaMainHeading>
              Marking Criteria
            </MarkingCriteriaMainHeading>
            <Text>Click below to complete your selected marking template</Text>
          </MarkingCriteriaMainHeadingCont>
          <MarkingCriteriaContainer>
            <MarkingCriteriaHeadingCont>
              <MarkingCriteriaHeading>
                {markingCriteria?.type === 'RUBRICS'
                  ? 'Rubric'
                  : 'Strengths and Targets'}
              </MarkingCriteriaHeading>
              <RubricButton onClick={() => setShowMarkingCrteriaPopUp(true)}>
                Expand
              </RubricButton>
            </MarkingCriteriaHeadingCont>
          </MarkingCriteriaContainer>
          <Heading>
            <HeadingTitle>
              Overall Feedback
              <img src={QuestionIcon} />
            </HeadingTitle>
            <HeadingDropdown>
              <img src={TickMark} />
            </HeadingDropdown>
          </Heading>
          <OverallFeedbackContainer>
            <NewOverallFeedback
              pageMode={pageMode}
              addOverallFeedback={addOverallFeedback}
              serialNumber={QuestionIndex + 1}
              overallComment={overallComment}
              updateOverAllFeedback={updateOverAllFeedback}
            />
          </OverallFeedbackContainer>
        </Body>
      </MainContainer>
    </>
  );
};

export default CriteriaAndOverallFeedback;
