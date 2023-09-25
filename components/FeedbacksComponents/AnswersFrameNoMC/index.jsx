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

import '../FeedbackTeacherLaptop';
import {
  Frame1366,
  Frame1367,
  Group1225,
  QuestionText,
  QuillContainer
} from '../FeedbackTeacherLaptop/style';

export function answersFrameNoMC(
  quillRefs,
  pageMode,
  submission,
  commentsForSelectedTab,
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
          handleEditorMounted
        )}
      </Frame1367>
    </Group1225>
  );
}

function createVisibleComments(commentsForSelectedTab) {
  return commentsForSelectedTab.filter((comment) => !comment.isHidden);
}

const createModules = (pageMode) => {
  return {
    toolbar: pageMode === 'DRAFT' || pageMode === 'REVISE',
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
  handleEditorMounted
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
  console.log('PageMode', pageMode)
  return (
    <QuillEditor
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

export default AnswersFrameNoMC;
