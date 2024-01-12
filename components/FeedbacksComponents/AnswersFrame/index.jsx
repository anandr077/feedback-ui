import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  default as React,
  default as React,
  default as React,
  default as React,
} from 'react';
import CheckboxList from '../../CheckboxList';
import QuillEditor from '../../QuillEditor';

import { getUserId } from '../../../service';
import CheckboxBordered from '../../CheckboxBordered';
import MarkingCriteriaFeedback from '../../MarkingCriteriaFeedback';
import MarkingCriteriaFeedbackReadOnly from '../../MarkingCriteriaFeedbackReadOnly';
import '../FeedbackTeacherLaptop';
import {
  Ellipse141,
  FocusAreasLabelContainer,
  Frame1366,
  Frame1367,
  Group1225,
  Label,
  QuestionText,
  QuillContainer,
  AnswerContainer,
} from '../FeedbackTeacherLaptop/style';
import { linkify } from '../../../utils/linkify';
import OverallFeedback from '../../OverallFeedback';
import { createDebounceFunction } from '../FeedbacksRoot/autosave';
import { set } from 'lodash';

export function answersFrame(
  quillRefs,
  markingCriteriaFeedback,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  pageMode,
  submission,
  commentsForSelectedTab,
  overallComments,
  methods
) {
  return (
    <AnswersFrame
      quillRefs={quillRefs}
      markingCriteriaFeedback={markingCriteriaFeedback}
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
      initialOverAllFeedback={methods.initialOverAllFeedback}
      setInitialOverAllFeedback={methods.setInitialOverAllFeedback}
      overallComments={overallComments}
      updateOverAllFeedback={methods.updateOverAllFeedback}
      setComments={methods.setComments}
      comments={methods.comments}
    ></AnswersFrame>
  );
}

function AnswersFrame(props) {
  const {
    quillRefs,
    markingCriteriaFeedback,
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
    initialOverallFeedback,
    setInitialOverAllFeedback,
    overallComments,
    updateOverAllFeedback,
    setComments,
    comments,
  } = props;
  return (
    <Group1225 id="answers">
      <Frame1367>
        {answerFrames(
          quillRefs,
          markingCriteriaFeedback,
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
          initialOverallFeedback,
          setInitialOverAllFeedback,
          overallComments,
          updateOverAllFeedback,
          setComments,
          comments
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
  markingCriteriaFeedback,
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
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overallComments,
  updateOverAllFeedback,
  setComments,
  comments
) => {
  return submission.assignment.questions.map((question) => {
    const newAnswer = {
      serialNumber: question.serialNumber,
      answer: '',
    };

    const answer =
      submission.answers?.find(
        (answer) => answer.serialNumber === question.serialNumber
      ) || newAnswer;
    const questionText = 'Q' + question.serialNumber + '. ' + question.question;
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
          <QuestionText
            dangerouslySetInnerHTML={{ __html: linkify(questionText) }}
          />
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
                  handleEditorMounted
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
              markingCriteriaFeedback,
              answer,
              question
            )}
            {pageMode !== 'DRAFT' && (
              <OverallFeedback
                pageMode={pageMode}
                addOverallFeedback={addOverallFeedback}
                submissionId={submission.id}
                question={question}
                initialOverallFeedback={initialOverallFeedback}
                setInitialOverAllFeedback={setInitialOverAllFeedback}
                overallComment={overallComment}
                updateOverAllFeedback={updateOverAllFeedback}
              />
            )}
          </AnswerContainer>
        </Frame1366>
      </>
    );
  });
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
  handleEditorMounted
) {
  return (
    <QuillEditor
      // key={Math.random()}
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
    ></QuillEditor>
  );
}

function createShowMarkingCriteriasFrame(
  submission,
  markingCriteriaFeedback,
  answer,
  question
) {
  const validStatuses = ['REVIEWED', 'CLOSED', 'RESUBMISSION_REQUESTED'];

  const questionCriteria =
    submission.assignment.questions[answer.serialNumber - 1];

  if (
    !validStatuses.includes(submission.status) ||
    !(markingCriteriaFeedback?.length > 0) ||
    !questionCriteria.markingCriteria?.title ||
    questionCriteria.markingCriteria?.title === 'No Marking Criteria' ||
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
