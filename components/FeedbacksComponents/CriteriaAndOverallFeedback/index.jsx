import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  Heading,
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
// import MemoizedAudioRecorder from '../../AudioRecorder';

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
  submission,
}) => {
  console.log('pageMode', pageMode);
  const { overallComments, comments, markingCriteriaFeedback } =
    useContext(FeedbackContext);
  console.log('submission', submission);
  console.log('QuestionIndex', QuestionIndex);
  const [inputValue, setInputValue] = useState('');
  const [overallComment, setOverallComment] = useState({});
  const [markingCriteria, setMarkingCriteria] = useState();
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  useEffect(() => {
    const commentObject = (
      overallComments.length != 0 ? overallComments : comments
    ).find((comment) => comment.questionSerialNumber === QuestionIndex + 1);
    setOverallComment(commentObject);
    const markingCriteria =
      submission?.assignment?.questions[QuestionIndex].markingCriteria;
    console.log('markingCriteria', markingCriteria);
    setMarkingCriteria(markingCriteria);
  }, [overallComments, QuestionIndex, comments, submission]);

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
            {markingCriteria.criterias.map((rubrics) => (
              <MarkRubricContainer key={rubrics.title}>
                <MarkRubricTitle>{rubrics.title}</MarkRubricTitle>
                {rubrics.levels.map((level) => (
                  <MarkRubricLevelContainer key={level.name}>
                    <LevelName>{level.name}</LevelName>
                    <LevelDesc>{level.description}</LevelDesc>
                  </MarkRubricLevelContainer>
                ))}
              </MarkRubricContainer>
            ))}
          </MarkRubricsContainer>
        ) : (
          <></>
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
    </MainContainer>
  );
};

export default CriteriaAndOverallFeedback;
