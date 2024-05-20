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
  console.log('markingCriteriaFeedback', markingCriteriaFeedback);
  console.log('pageMode', pageMode);

  console.log('the role is ', isTeacher);
  console.log('the overall comment before sorting by index', overallComments)

  useEffect(() => {
    const commentObject = (
      overallComments.length != 0 ? overallComments : comments
    )?.find((comment) => comment?.questionSerialNumber === QuestionIndex + 1);
    setOverallComment(commentObject);
    
    const markingCriteria =
      submission?.assignment?.questions[QuestionIndex].markingCriteria;
    console.log('markingCriteria', markingCriteria);
    setMarkingCriteria(markingCriteria);
    if (pageMode != 'REVIEW') {
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
    console.log('clicked', strengthsAndTargets[type][index], index, type);
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

  return (
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
        <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
      </Heading>
      <Body>
        <Text>Click the button below to complete this section</Text>
        <RubricContainer>
          <RubricInputContainer>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />{' '}
            / 5
          </RubricInputContainer>
          <RubricButton>Rubric</RubricButton>
        </RubricContainer>
        <MarkingCriteriaContainer>
          <MarkingCriteriaHeading>
            {markingCriteria?.type === 'RUBRICS'
              ? 'Rubric'
              : 'Strengths and Targets'}
          </MarkingCriteriaHeading>

          {markingCriteria?.type === 'RUBRICS' ? (
            <MarkRubricsContainer>
              {markingCriteria?.criterias?.map((rubrics, index) => (
                <MarkRubricContainer key={index}>
                  <MarkRubricTitleContainer>
                    <MarkRubricTitle>{rubrics.title}</MarkRubricTitle>
                  </MarkRubricTitleContainer>

                  {rubrics.levels.map((level) => (
                    <MarkRubricLevelContainer
                      key={level.name}
                      onClick={
                        pageMode === 'REVIEW'
                          ? () => handleMarkingCriteria(index, level.name)
                          : null
                      }
                      style={{
                        cursor: pageMode === 'REVIEW' ? 'pointer' : '',
                      }}
                    >
                      <LevelNameContainer
                        bgColor={
                          markingCriteria.criterias[index]?.selectedLevel ===
                          level.name
                        }
                      >
                        <LevelName>{level.name}</LevelName>
                      </LevelNameContainer>
                      <LevelDescCont
                        bgColor={
                          markingCriteria.criterias[index]?.selectedLevel ===
                          level.name
                        }
                      >
                        <LevelDesc>{level.description}</LevelDesc>
                      </LevelDescCont>
                    </MarkRubricLevelContainer>
                  ))}
                </MarkRubricContainer>
              ))}
            </MarkRubricsContainer>
          ) : (
            <>
              {pageMode === 'REVIEW' ? (
                <MarkStrengthContainer>
                  {markingCriteria?.strengthsTargetsCriterias?.map(
                    (strengthsAndTargets) => (
                      <MarkRubricContainer key={strengthsAndTargets.title}>
                        <MarkRubricTitleContainer>
                          <MarkRubricTitle>
                            {strengthsAndTargets.title}
                          </MarkRubricTitle>
                        </MarkRubricTitleContainer>
                        <StrengthsAndTargetsCont>
                          <StrengthsCont>
                            <TargetHeadingCon>
                              <TargetHeading>Strengths</TargetHeading>
                            </TargetHeadingCon>
                            {strengthsAndTargets.strengths.map(
                              (strength, index) => (
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
                                    strength
                                  )}
                                  style={{
                                    cursor:
                                      pageMode === 'REVIEW' ? 'pointer' : '',
                                  }}
                                >
                                  <Strength>{strength}</Strength>
                                </StrengthCont>
                              )
                            )}
                          </StrengthsCont>
                          <TargetsCont>
                            <TargetHeadingCon>
                              <TargetHeading>Targets</TargetHeading>
                            </TargetHeadingCon>
                            {strengthsAndTargets.targets.map(
                              (target, index) => (
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
                                    target
                                  )}
                                  style={{
                                    cursor:
                                      pageMode === 'REVIEW' ? 'pointer' : '',
                                  }}
                                >
                                  <Target>{target}</Target>
                                </TargetCont>
                              )
                            )}
                          </TargetsCont>
                        </StrengthsAndTargetsCont>
                      </MarkRubricContainer>
                    )
                  )}
                </MarkStrengthContainer>
              ) : (
                <MarkStrengthContainer>
                  {markingCriteria?.strengthsTargetsCriterias?.map(
                    (strengthsAndTargets) => (
                      <MarkRubricContainer key={strengthsAndTargets.title}>
                        <MarkRubricTitleContainer>
                          <MarkRubricTitle>
                            {strengthsAndTargets.title}
                          </MarkRubricTitle>
                        </MarkRubricTitleContainer>
                        <StrengthsAndTargetsCont>
                          <StrengthsCont>
                            <TargetHeadingCon>
                              <TargetHeading>Strengths</TargetHeading>
                            </TargetHeadingCon>
                            {strengthsAndTargets.strengths.map(
                              (strength, index) => (
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
                                    'attribute',
                                    strength
                                  )}
                                  style={{
                                    cursor:
                                      pageMode === 'REVIEW' ? 'pointer' : '',
                                  }}
                                >
                                  <Strength>{strength}</Strength>
                                </StrengthCont>
                              )
                            )}
                          </StrengthsCont>
                          <TargetsCont>
                            <TargetHeadingCon>
                              <TargetHeading>Targets</TargetHeading>
                            </TargetHeadingCon>
                            {strengthsAndTargets.targets.map(
                              (target, index) => (
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
                                    'attribute',
                                    target
                                  )}
                                  style={{
                                    cursor:
                                      pageMode === 'REVIEW' ? 'pointer' : '',
                                  }}
                                >
                                  <Target>{target}</Target>
                                </TargetCont>
                              )
                            )}
                          </TargetsCont>
                        </StrengthsAndTargetsCont>
                      </MarkRubricContainer>
                    )
                  )}
                </MarkStrengthContainer>
              )}
            </>
          )}

          
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
  );
};

export default CriteriaAndOverallFeedback;
