import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, default as React, default as React } from 'react';
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
    Label,
    QuestionText,
    QuillContainer
} from '../FeedbackTeacherLaptop/style';

function AnswersFrame(props) {
  const { quillRefs, markingCriteriaFeedback, smallMarkingCriteria, handleCheckboxChange, groupedFocusAreaIds, pageMode, submission, commentsForSelectedTab, createDebounceFunction, handleChangeText, onSelectionChange, handleMarkingCriteriaLevelFeedback, handleStrengthsTargetsFeedback,handleEditorMounted } = props;
  return answerFrames(quillRefs, markingCriteriaFeedback, smallMarkingCriteria, handleCheckboxChange, groupedFocusAreaIds, pageMode, submission, commentsForSelectedTab, createDebounceFunction, handleChangeText, onSelectionChange, handleMarkingCriteriaLevelFeedback, handleStrengthsTargetsFeedback,handleEditorMounted);
}

function createVisibleComments(commentsForSelectedTab) {
    return commentsForSelectedTab.filter((comment) => !comment.isHidden);
}

const createModules = (pageMode)=>{ 
    return {
    toolbar: pageMode === 'DRAFT' || pageMode === 'REVISE',
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true,
    },
  };
}
const answerFrames = ( quillRefs, markingCriteriaFeedback, smallMarkingCriteria, handleCheckboxChange, groupedFocusAreaIds, pageMode, submission, commentsForSelectedTab, createDebounceFunction, handleChangeText, onSelectionChange, handleMarkingCriteriaLevelFeedback, handleStrengthsTargetsFeedback,handleEditorMounted) => {
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
    const debounce = createDebounceFunction(answer);

    return (
      <>
        <Frame1366>
          <QuestionText>{questionText}</QuestionText>
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
                handleEditorMounted
              )}
            </QuillContainer>
          )}
          {createFocusAreasLabel(handleCheckboxChange, groupedFocusAreaIds,question.serialNumber, question.focusAreas)}
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
        </Frame1366>
      </>
    );
  });
};

const createFocusAreasLabel = (handleCheckboxChange, groupedFocusAreaIds, serialNumber, focusAreas) => {
  if (focusAreas === null) return <></>;
  if (focusAreas === undefined) return <></>;
  if (focusAreas.length <= 0) {
    return <></>;
  }
  const label = <Label>Focus areas : </Label>;

  const all = focusAreas?.map((fa) => {
    return (
      <FocusAreasLabelContainer>
        <CheckboxBordered
          checked={isChecked(groupedFocusAreaIds, serialNumber, fa.id)}
          onChange={handleCheckboxChange(serialNumber, fa.id)}
        />
        <Ellipse141 backgroundColor={fa.color}></Ellipse141>
        <Label>{fa.title}</Label>
      </FocusAreasLabelContainer>
    );
  });

  return (
    <FocusAreasLabelContainer>
      {label}
      {all}
    </FocusAreasLabelContainer>
  );
};

function createQuill(pageMode, containerName, submission, answer, answerValue, commentsForSelectedTab, debounce, handleEditorMounted) {
  return (
    <QuillEditor
      id={'quillEditor_' + submission.id + '_' + answer.serialNumber}
      ref={(editor) =>
        handleEditorMounted(editor, answer.serialNumber - 1)
      }
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
  return (
    (submission.status === 'REVIEWED' ||
      submission.status === 'CLOSED' ||
      submission.status === 'RESUBMISSION_REQUESTED') &&
    markingCriteriaFeedback?.length > 0 &&
    submission.assignment.questions[answer.serialNumber - 1].markingCriteria
      ?.title != 'No Marking Criteria' &&
    submission.assignment.questions[answer.serialNumber - 1].type != 'MCQ' && (
      <MarkingCriteriaFeedbackReadOnly
        allmarkingCriteriaFeedback={markingCriteriaFeedback}
        questionSerialNumber={question.serialNumber}
      ></MarkingCriteriaFeedbackReadOnly>
    )
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
  return (
    submission.status === 'SUBMITTED' &&
    submission.assignment.questions[answer.serialNumber - 1].markingCriteria
      ?.title &&
    submission.assignment.questions[answer.serialNumber - 1].markingCriteria
      ?.title != 'No Marking Criteria' &&
    submission.assignment.questions[answer.serialNumber - 1].type != 'MCQ' &&
    submission.reviewerId === getUserId() && (
      <MarkingCriteriaFeedback
        markingCriteria={
          submission.assignment.questions[answer.serialNumber - 1]
            .markingCriteria
        }
        small={smallMarkingCriteria}
        questionSerialNumber={answer.serialNumber}
        handleMarkingCriteriaLevelFeedback={
          handleMarkingCriteriaLevelFeedback
        }
        handleStrengthsTargetsFeedback={handleStrengthsTargetsFeedback(
          question.serialNumber
        )}
      />
    )
  );
}
const isChecked = (groupedFocusAreaIds, serialNumber, focusAreaId) => {
    return (
      !!groupedFocusAreaIds[serialNumber] &&
      groupedFocusAreaIds[serialNumber].includes(focusAreaId)
    );
  };

export default AnswersFrame;
