import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  default as React,
  default as React,
  default as React,
  default as React,
  useContext
} from 'react';
import CheckboxList from '../../CheckboxList';
import QuillEditor from '../../QuillEditor';

import { getUserId } from '../../../userLocalDetails';
import CheckboxBordered from '../../CheckboxBordered';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import MarkingCriteriaFeedbackReadOnly from '../../MarkingCriteriaFeedbackReadOnly';
import '../FeedbackTeacherLaptop';
import {
  Ellipse141,
  FocusAreasLabelContainer,
  Frame1366,
  Frame1367,
  QuestionCounter,
  QuestionBox,
  QuestionBtn,
  Group1225,
  Label,
  QuestionText,
  QuillContainer,
  AnswerContainer,
  Line,
} from '../FeedbackTeacherLaptop/style';
import { linkify } from '../../../utils/linkify';
import OverallFeedback from '../../OverallFeedback';
import { createDebounceFunction } from '../FeedbacksRoot/autosave';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import LeftIcon from '../../../static/img/16-arrow-left.svg';
import RightIcon from '../../../static/img/16-arrow-right.svg';

export function answersFrame(
  quillRefs,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  pageMode,
  submission,
  commentsForSelectedTab,
  methods,
  editorFontSize,
  updatedCommentPosition,
  selectedRange
) {
  return (
    <AnswersFrame
      quillRefs={quillRefs}
      smallMarkingCriteria={smallMarkingCriteria}
      handleCheckboxChange={handleCheckboxChange}
      groupedFocusAreaIds={groupedFocusAreaIds}
      pageMode={pageMode}
      submission={submission}
      commentsForSelectedTab={commentsForSelectedTab}
      handleChangeText={methods.handleChangeText}
      onSelectionChange={methods.onSelectionChange}
      handleMarkingCriteriaLevelFeedback={
        methods.handleMarkingCriteriaLevelFeedback
      }
      handleStrengthsTargetsFeedback={methods.handleStrengthsTargetsFeedback}
      handleEditorMounted={methods.handleEditorMounted}
      addOverallFeedback={methods.addOverallFeedback}
      updateOverAllFeedback={methods.updateOverAllFeedback}
      setComments={methods.setComments}
      comments={methods.comments}
      editorFontSize={editorFontSize}
      updatedCommentPosition={updatedCommentPosition}
      methods={methods} 
      selectedRange={selectedRange}
    ></AnswersFrame>
  );
}

function AnswersFrame(props) {
  const {
    quillRefs,
    smallMarkingCriteria,
    handleCheckboxChange,
    groupedFocusAreaIds,
    pageMode,
    submission,
    commentsForSelectedTab,
    handleChangeText,
    onSelectionChange,
    handleMarkingCriteriaLevelFeedback,
    handleStrengthsTargetsFeedback,
    handleEditorMounted,
    addOverallFeedback,
    updateOverAllFeedback,
    setComments,
    comments,
    editorFontSize,
    updatedCommentPosition,
    methods,
    selectedRange
  } = props;

  const [QuestionIndex, setQuestionIndex] = React.useState(0);
  
  const handlePreviousQuestion = () => {
    setQuestionIndex((prevIndex) => {
      if (prevIndex === 0) {
        return submission.assignment.questions.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  
  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => {
      if (prevIndex === submission.assignment.questions.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <Group1225 id="answers">
      <Frame1367>
        <QuestionCounter>
          <QuestionBtn onClick={handlePreviousQuestion} ><img src={LeftIcon} /> Previous</QuestionBtn>
          <QuestionBox>Question {QuestionIndex + 1} of {submission.assignment.questions.length}</QuestionBox>
          <QuestionBtn onClick={handleNextQuestion}><img src={RightIcon}  /> Next</QuestionBtn>
        </QuestionCounter>
        {answerFrames(
          quillRefs,
          smallMarkingCriteria,
          handleCheckboxChange,
          groupedFocusAreaIds,
          pageMode,
          submission,
          commentsForSelectedTab,
          handleChangeText,
          onSelectionChange,
          handleMarkingCriteriaLevelFeedback,
          handleStrengthsTargetsFeedback,
          handleEditorMounted,
          addOverallFeedback,
          updateOverAllFeedback,
          setComments,
          comments,
          editorFontSize,
          updatedCommentPosition,
          methods,
          selectedRange,
          QuestionIndex
        )}
      </Frame1367>
    </Group1225>
  );
}

function createVisibleComments(commentsForSelectedTab) {
  return commentsForSelectedTab.filter((comment) => !comment.isHidden);
}

const createToolbarOptions = () => {
  const options = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    ['link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
    ['image'],
  ];
  return options;
};

const createModules = (pageMode) => {
  const toolbar =
    (pageMode === 'DRAFT' || pageMode === 'REVISE') && createToolbarOptions();
  return {
    toolbar: toolbar,
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true,
    },
  };
};
const answerFrames = (
  quillRefs,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  pageMode,
  submission,
  commentsForSelectedTab,
  handleChangeText,
  onSelectionChange,
  handleMarkingCriteriaLevelFeedback,
  handleStrengthsTargetsFeedback,
  handleEditorMounted,
  addOverallFeedback,
  updateOverAllFeedback,
  setComments,
  comments,
  editorFontSize,
  updatedCommentPosition,
  methods,
  selectedRange,
  QuestionIndex
) => {
  const { overallComments } = useContext(FeedbackContext);

  const question = submission.assignment.questions[QuestionIndex];
    const newAnswer = {
      serialNumber: question.serialNumber,
      answer: '',
    };

    const answer =
      submission.answers?.find(
        (answer) => answer.serialNumber === question.serialNumber
      ) || newAnswer;
    const answerValue = answer.answer.answer;
    const debounce = createDebounceFunction(
      submission,
      pageMode,
      comments,
      setComments
    )(answer);

    const overallComment = overallComments.find((feedback) => {
      return feedback.questionSerialNumber === question.serialNumber;
    });
    return (
      <>
        <Frame1366>
          {submission.type !== 'DOCUMENT' && (
            <QuestionText
              dangerouslySetInnerHTML={{ __html: linkify(question.question) }}
            />
          )}
          <AnswerContainer>
            {question.type === 'MCQ' ? (
              <CheckboxList
                submission={submission}
                question={question}
                pageMode={pageMode}
                handleChangeText={handleChangeText}
              />
            ) : (
              <QuillContainer
                onClick={() => {
                  onSelectionChange(
                    createVisibleComments(commentsForSelectedTab),
                    answer.serialNumber
                  )(quillRefs.current[answer.serialNumber - 1].getSelection());
                }}
                id={
                  'quillContainer_' + submission.id + '_' + answer.serialNumber
                }
              >
                {createQuill(
                  pageMode,
                  'quillContainer_' + submission.id + '_' + answer.serialNumber,
                  submission,
                  answer,
                  answerValue,
                  commentsForSelectedTab,
                  debounce,
                  handleEditorMounted,
                  editorFontSize,
                  updatedCommentPosition,
                  methods,
                  selectedRange
                )}
              </QuillContainer>
            )}
            {createFocusAreasLabel(
              handleCheckboxChange,
              groupedFocusAreaIds,
              question.serialNumber,
              question.focusAreas
            )}
            {createAddMarkingCriteriaOption(
              submission,
              answer,
              smallMarkingCriteria,
              question,
              handleMarkingCriteriaLevelFeedback,
              handleStrengthsTargetsFeedback
            )}
            {createShowMarkingCriteriasFrame(
              submission,
              answer,
              question
            )}
            {pageMode !== 'DRAFT' && (
              <OverallFeedback
                pageMode={pageMode}
                addOverallFeedback={addOverallFeedback}
                question={question}
                overallComment={overallComment}
                updateOverAllFeedback={updateOverAllFeedback}
              />
            )}
          </AnswerContainer>
        </Frame1366>

        {QuestionIndex !== submission.assignment.questions.length - 1 && (
          <div>
            <Line src="/img/line-14-4.png" alt="Line 14" />
          </div>
        )}
      </>
    );
};

const createFocusAreasLabel = (
  handleCheckboxChange,
  groupedFocusAreaIds,
  serialNumber,
  focusAreas
) => {
  if (focusAreas === null) return <></>;
  if (focusAreas === undefined) return <></>;
  if (focusAreas.length <= 0) {
    return <></>;
  }
  const label = <Label>Focus areas : </Label>;

  const all = focusAreas?.map((fa) => {
    return (
      <>
        <CheckboxBordered
          checked={isChecked(groupedFocusAreaIds, serialNumber, fa.id)}
          onChange={handleCheckboxChange(serialNumber, fa.id)}
        />
        <Ellipse141 backgroundColor={fa.color}></Ellipse141>
        <Label>{fa.title}</Label>
      </>
    );
  });

  return (
    <FocusAreasLabelContainer>
      {label}
      {all}
    </FocusAreasLabelContainer>
  );
};

function createQuill(
  pageMode,
  containerName,
  submission,
  answer,
  answerValue,
  commentsForSelectedTab,
  debounce,
  handleEditorMounted,
  editorFontSize,
  updatedCommentPosition,
  methods,
  selectedRange
) {

  return (
    <div>
      <QuillEditor
        key={
          'quillEditor_' +
          submission.id +
          '_' +
          answer.serialNumber +
          '_' +
          submission.status +
          '_' +
          pageMode
        }
        id={'quillEditor_' + submission.id + '_' + answer.serialNumber}
        ref={(editor) => handleEditorMounted(editor, answer.serialNumber - 1)}
        comments={commentsForSelectedTab?.filter((comment) => {
          return comment.questionSerialNumber === answer.serialNumber;
        })}
        value={answerValue ? answerValue : ''}
        options={{
          modules: createModules(pageMode),
          theme: 'snow',
          readOnly: pageMode === 'REVIEW' || pageMode === 'CLOSED',
        }}
        debounceTime={debounce.debounceTime}
        onDebounce={debounce.onDebounce}
        containerName={containerName}
        nonEditable={pageMode === 'REVIEW' || pageMode === 'CLOSED' || pageMode === 'REVISE'}
        editorFontSize={editorFontSize}
        updatedCommentPosition={updatedCommentPosition}
        methods={methods}
        pageMode={pageMode}
        submission={submission}
        selectedRange={selectedRange}
      ></QuillEditor>
    </div>
  );
}

function createShowMarkingCriteriasFrame(
  submission,
  answer,
  question
) {
  const validStatuses = ['REVIEWED', 'CLOSED', 'RESUBMISSION_REQUESTED'];
  const questionCriteria =
    submission.assignment.questions[answer.serialNumber - 1];
  const { markingCriteriaFeedback } = useContext(FeedbackContext);

  if (
    !validStatuses.includes(submission.status) ||
    !(markingCriteriaFeedback?.length > 0) ||
    questionCriteria.type === 'MCQ'
  ) {
    return <></>;
  }

  return (
    <MarkingCriteriaFeedbackReadOnly
      allmarkingCriteriaFeedback={markingCriteriaFeedback}
      questionSerialNumber={question.serialNumber}
    />
  );
}

function createAddMarkingCriteriaOption(
  submission,
  answer,
  smallMarkingCriteria,
  question,
  handleMarkingCriteriaLevelFeedback,
  handleStrengthsTargetsFeedback
) {
  const markingCriteria =
    submission.assignment.questions[answer.serialNumber - 1].markingCriteria;

  // Check the conditions
  if (
    submission.status !== 'SUBMITTED' ||
    !markingCriteria?.title ||
    markingCriteria?.title === 'No Marking Criteria' ||
    submission.assignment.questions[answer.serialNumber - 1].type === 'MCQ' ||
    submission.reviewerId !== getUserId()
  ) {
    return <></>;
  }

  return (
    <MarkingCriteriaFeedback
      markingCriteria={markingCriteria}
      small={smallMarkingCriteria}
      questionSerialNumber={answer.serialNumber}
      handleMarkingCriteriaLevelFeedback={handleMarkingCriteriaLevelFeedback}
      handleStrengthsTargetsFeedback={handleStrengthsTargetsFeedback(
        question.serialNumber
      )}
    />
  );
}

const isChecked = (groupedFocusAreaIds, serialNumber, focusAreaId) => {
  return (
    !!groupedFocusAreaIds[serialNumber] &&
    groupedFocusAreaIds[serialNumber].includes(focusAreaId)
  );
};

export default AnswersFrame;
