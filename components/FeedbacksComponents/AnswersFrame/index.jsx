import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  default as React,
  default as React,
  default as React,
  default as React,
  useContext,
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
  FocusAreaContainer,
  AddCommentFocusAreaDiv,
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
import FocusAreaCard from '../../FocusAreaCard';
import AddCommentFocusAreaInstruction from '../AddCommentFocusAreaInstruction';
import ABCIcon from '../../../static/img/abc34.svg';
import RedabcIcon from '../../../static/img/redabc.svg';
import CommentGroupIcon from '../../../static/img/commentgroupicon.svg';
import ColorCircleIcon from '../../../static/img/colorgroupcircle.svg';

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
  selectedRange,
  commentFocusAreaToggle,
  openRightPanel,
  QuestionIndex
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
      commentFocusAreaToggle={commentFocusAreaToggle}
      openRightPanel={openRightPanel}
      QuestionIndex={QuestionIndex}
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
    selectedRange,
    commentFocusAreaToggle,
    openRightPanel,
    QuestionIndex,
  } = props;
  const [showAddingCommentDesc, setShowAddingCommentDesc] =
    React.useState(true);
  const generalComments = comments.filter(
    (comment) => comment.type === 'COMMENT'
  );
  const focusAreaComments = comments.filter(
    (comment) => comment.type === 'FOCUS_AREA'
  );
  console.log('the submissions are', generalComments);

  return (
    <Group1225 id="answers">
      <Frame1367 moveToLeft={openRightPanel}>
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
          commentFocusAreaToggle,
          setShowAddingCommentDesc,
          QuestionIndex
        )}
      </Frame1367>
      {commentFocusAreaToggle && focusAreaComments.length !== 0 && (
        <FocusAreaContainer
          id={'FocusAreaContainer'}
          moveToLeft={openRightPanel}
        >
          <FocusAreaCard comments={focusAreaComments} />
        </FocusAreaContainer>
      )}
      {showAddingCommentDesc && comments.length === 0 && (
        <AddCommentFocusAreaDiv moveToLeft={openRightPanel}>
          {commentFocusAreaToggle ? (
            <AddCommentFocusAreaInstruction
              heading={'How to use Focus Areas:'}
              firstIcon={RedabcIcon}
              firstStep={'Highlight a section of your response that addresses one of the focus areas (check the list of focus areas below or in the task details tab).'}
              secondIcon={ColorCircleIcon}
              secondStep={'Click the focus area that matches your selection.'}
              thirdStep={'Repeat this process for each focus area.'}
            />
          ) : (
            <AddCommentFocusAreaInstruction
              heading={'Adding Comments'}
              firstIcon={ABCIcon}
              firstStep={'Highlight a section of the response'}
              secondIcon={CommentGroupIcon}
              secondStep={'Click the comment icon from the provided options'}
              thirdStep={'Repeat this process to add more comments'}
            />
          )}
        </AddCommentFocusAreaDiv>
      )}
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
  commentFocusAreaToggle,
  setShowAddingCommentDesc,
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
                setShowAddingCommentDesc(false);
              }}
              id={'quillContainer_' + submission.id + '_' + answer.serialNumber}
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
                selectedRange,
                commentFocusAreaToggle
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
          {createShowMarkingCriteriasFrame(submission, answer, question)}
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
  selectedRange,
  commentFocusAreaToggle
) {
  return (
    <div style={{ width: '100%' }}>
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
        nonEditable={
          pageMode === 'REVIEW' ||
          pageMode === 'CLOSED' ||
          pageMode === 'REVISE'
        }
        editorFontSize={editorFontSize}
        updatedCommentPosition={updatedCommentPosition}
        methods={methods}
        pageMode={pageMode}
        submission={submission}
        selectedRange={selectedRange}
        commentFocusAreaToggle={commentFocusAreaToggle}
      ></QuillEditor>
    </div>
  );
}

function createShowMarkingCriteriasFrame(submission, answer, question) {
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
