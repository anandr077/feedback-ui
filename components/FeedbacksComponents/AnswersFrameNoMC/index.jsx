import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  default as React,
  default as React,
  default as React,
  default as React,
} from 'react';
import QuillEditor from '../../QuillEditor';
import OverallFeedback from '../../OverallFeedback';
import MarkingCriteriaFeedbackReadOnly from '../../MarkingCriteriaFeedbackReadOnly';

import '../FeedbackTeacherLaptop';
import {
  Frame1366,
  Frame1367,
  Group1225,
  QuestionText,
  QuillContainer,
} from '../FeedbackTeacherLaptop/style';

export function answersFrameNoMC(
  quillRefs,
  pageMode,
  submission,
  commentsForSelectedTab,
  overallComments,
  methods
) {
  return (
    <AnswersFrameNoMC
      quillRefs={quillRefs}
      pageMode={pageMode}
      submission={submission}
      commentsForSelectedTab={commentsForSelectedTab}
      createDebounceFunction={methods.createDebounceFunction}
      handleChangeText={methods.handleChangeText}
      onSelectionChange={methods.onSelectionChange}
      handleEditorMounted={methods.handleEditorMounted}
      addOverallFeedback={methods.addOverallFeedback}
      initialOverAllFeedback={methods.initialOverAllFeedback}
      setInitialOverAllFeedback={methods.setInitialOverAllFeedback}
      overallComments={overallComments}
      updateOverAllFeedback={methods.updateOverAllFeedback}
    ></AnswersFrameNoMC>
  );
}

function AnswersFrameNoMC(props) {
  const {
    quillRefs,
    pageMode,
    submission,
    commentsForSelectedTab,
    createDebounceFunction,
    handleChangeText,
    onSelectionChange,
    handleEditorMounted,
    addOverallFeedback,
    initialOverallFeedback,
    setInitialOverAllFeedback,
    overallComments,
    updateOverAllFeedback
  } = props;
  return (
    <Group1225 id="answers">
      <Frame1367>
        {answerFrames(
          quillRefs,
          pageMode,
          submission,
          commentsForSelectedTab,
          createDebounceFunction,
          handleChangeText,
          onSelectionChange,
          handleEditorMounted,
          addOverallFeedback,
          initialOverallFeedback,
          setInitialOverAllFeedback,
          overallComments,
          updateOverAllFeedback
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
  pageMode,
  submission,
  commentsForSelectedTab,
  createDebounceFunction,
  handleChangeText,
  onSelectionChange,
  handleEditorMounted,
  addOverallFeedback,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overallComments,
  updateOverAllFeedback,
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
    const answerValue = answer.answer.answer;
    const debounce = createDebounceFunction(answer);
    const overallComment = overallComments?.find((feedback)=>{
      return feedback.questionSerialNumber === question.serialNumber
    })
    console.log("overallComment", overallComment)
    const markingCriteriaFeedback = commentsForSelectedTab.filter(
      (comment) => comment.type === 'MARKING_CRITERIA'
    );

    return (
      <>
        <Frame1366>
          {
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
          }
          {markingCriteriaFeedback.length > 0 &&
            (
              <MarkingCriteriaFeedbackReadOnly
                allmarkingCriteriaFeedback={markingCriteriaFeedback}
                questionSerialNumber={1}
              />
            )
            }

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
        </Frame1366>
      </>
    );
  });
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
    key={'quillEditor_' + submission.id + '_' + answer.serialNumber + "_" + submission.status + "_" + pageMode}
    id={'quillEditor_' + submission.id + '_' + answer.serialNumber + "_" + submission.status}
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

export default AnswersFrameNoMC;
