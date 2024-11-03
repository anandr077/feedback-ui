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
  AddCommentFocusAreaDiv,
  Group1225,
  Label,
  QuestionText,
  QuestionInputBox,
  QuestionContainer,
  QuestionTitleBox,
  QuillContainer,
  AnswerContainer,
  Line,
  MarkingCriteriaAndCommentBankContainer,
} from '../FeedbackTeacherLaptop/style';
import { linkify } from '../../../utils/linkify';
import OverallFeedback from '../../OverallFeedback';
import { createDebounceFunction } from '../FeedbacksRoot/autosave';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import AddCommentFocusAreaInstruction from '../AddCommentFocusAreaInstruction';
import ABCIcon from '../../../static/img/abc34.svg';
import RedabcIcon from '../../../static/img/redabc.svg';
import CommentGroupIcon from '../../../static/img/commentgroupicon.svg';
import ColorCircleIcon from '../../../static/img/colorgroupcircle.svg';
import DownWhite from '../../../static/img/angledownwhite20.svg';
import RefreshIcon from '../../../static/img/24refresh-circle-green.svg';
import { updateAssignment } from '../../../service';
import {
  appendFunction,
  isShowCommentInstructions,
  isShowFocusAreaInstructions,
  isTeacher,
} from '../FeedbacksRoot/rules';
import QuestionFieldSelection from '../../TheoryQuestionFrame/QuestionFieldSelection';
import { MarkingCriteriaSelectionContainer } from '../../TheoryQuestionFrame/style';

export function answersFrame(
  quillRefs,
  smallMarkingCriteria,
  groupedFocusAreaIds,
  pageMode,
  submission,
  setSubmission,
  commentsForSelectedTab,
  methods,
  editorFontSize,
  selectedComment,
  selectedRange,
  openRightPanel,
  QuestionIndex,
  newCommentFrameRef,
  share,
  isFeedback,
  isFocusAreas,
  openLeftPanel,
  setOtherDrafts,
  handleCommentBankPreview,
  handleMarkingCriteriaPreview,
  setIsSavingAnswer
) {
  return (
    <AnswersFrame
      quillRefs={quillRefs}
      smallMarkingCriteria={smallMarkingCriteria}
      groupedFocusAreaIds={groupedFocusAreaIds}
      pageMode={pageMode}
      submission={submission}
      setSubmission={setSubmission}
      commentsForSelectedTab={commentsForSelectedTab}
      onSelectionChange={methods.onSelectionChange}
      handleMarkingCriteriaLevelFeedback={
        methods.handleMarkingCriteriaLevelFeedback
      }
      handleEditorMounted={methods.handleEditorMounted}
      addOverallFeedback={methods.addOverallFeedback}
      updateOverAllFeedback={methods.updateOverAllFeedback}
      comments={methods.comments}
      editorFontSize={editorFontSize}
      selectedComment={selectedComment}
      methods={methods}
      selectedRange={selectedRange}
      openRightPanel={openRightPanel}
      QuestionIndex={QuestionIndex}
      newCommentFrameRef={newCommentFrameRef}
      share={share}
      isFeedback={isFeedback}
      isFocusAreas={isFocusAreas}
      openLeftPanel={openLeftPanel}
      setOtherDrafts={setOtherDrafts}
      handleCommentBankPreview={handleCommentBankPreview}
      handleMarkingCriteriaPreview={handleMarkingCriteriaPreview}
      setIsSavingAnswer={setIsSavingAnswer}
    ></AnswersFrame>
  );
}

function AnswersFrame(props) {
  const {
    quillRefs,
    smallMarkingCriteria,
    groupedFocusAreaIds,
    pageMode,
    submission,
    setSubmission,
    commentsForSelectedTab,
    onSelectionChange,
    handleMarkingCriteriaLevelFeedback,
    handleEditorMounted,
    addOverallFeedback,
    updateOverAllFeedback,
    comments,
    editorFontSize,
    selectedComment,
    methods,
    selectedRange,
    openRightPanel,
    QuestionIndex,
    newCommentFrameRef,
    share,
    isFeedback,
    isFocusAreas,
    openLeftPanel,
    setOtherDrafts,
    handleCommentBankPreview,
    handleMarkingCriteriaPreview,
    setIsSavingAnswer
  } = props;
  const { showNewComment } = React.useContext(FeedbackContext);
  const generalComments = comments?.filter(
    (comment) => comment.type !== 'FOCUS_AREA'
  );
  const focusAreaComments = comments?.filter(
    (comment) => comment.type === 'FOCUS_AREA'
  );

  return (
    <Group1225 id="answers">
      <Frame1367 moveToLeft={openRightPanel} moveRight={openLeftPanel}>
        {answerFrames(
          quillRefs,
          setOtherDrafts,
          pageMode,
          submission,
          setSubmission,
          commentsForSelectedTab,
          onSelectionChange,
          handleEditorMounted,
          comments,
          editorFontSize,
          selectedComment,
          methods,
          selectedRange,
          QuestionIndex,
          newCommentFrameRef,
          share,
          isFeedback,
          setIsSavingAnswer
        )}
      </Frame1367>
      {submission?.type !== 'DOCUMENT' &&
        (pageMode === 'DRAFT' || pageMode === 'REVIEW') && (
          <AddCommentFocusAreaDiv moveToLeft={openRightPanel}>
            {isShowFocusAreaInstructions(
              pageMode,
              focusAreaComments?.length,
              isFocusAreas
            ) && (
              <AddCommentFocusAreaInstruction
                heading="How to use Self-assessment Areas:"
                firstIcon={RedabcIcon}
                firstStep="Highlight a section of your response that addresses one of the Self-assessment Areas (check the list of Self-assessment Areas below or in the task details tab)."
                secondIcon={ColorCircleIcon}
                secondStep="Click the focus area that matches your selection."
                thirdIcon={RefreshIcon}
                thirdStep="Repeat this process for each focus area."
              />
            )}
            {isShowCommentInstructions(
              pageMode,
              generalComments?.length,
              showNewComment,
              isFeedback
            ) && (
              <AddCommentFocusAreaInstruction
                heading={'Adding Comments'}
                firstIcon={ABCIcon}
                firstStep={'Highlight a section of the response'}
                secondIcon={CommentGroupIcon}
                secondStep={'Click the comment icon from the provided options'}
                thirdIcon={RefreshIcon}
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
  setOtherDrafts,
  pageMode,
  submission,
  setSubmission,
  commentsForSelectedTab,
  onSelectionChange,
  handleEditorMounted,
  comments,
  editorFontSize,
  selectedComment,
  methods,
  selectedRange,
  QuestionIndex,
  newCommentFrameRef,
  share,
  isFeedback,
  setIsSavingAnswer
) => {
  const { overallComments, allCommentBanks,allMarkingCriterias } = useContext(FeedbackContext);
  console.log('allCommentBanks', allCommentBanks);
  const [questionSlide, setQuestionSlide] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('Type your question');
  const inputRef = React.useRef(null);
  console.log('submission?.assignment', submission?.assignment);
  React.useEffect(() => {
    if (submission?.assignment?.title) {
      setInputValue(submission?.assignment.title);
    }
  }, [submission]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateAssignmentTitle = (newTitle) => {
    const updatedAssignment = {
      ...submission?.assignment,
      title: newTitle,
    };
    updateAssignment(submission?.assignment.id, updatedAssignment)
      .then((res) => {
        if (res && res.title) {
          setSubmission((old) => ({
            ...old,
            assignment: {
              ...old.assignment,
              title: res.title,
            },
          }));
          setOtherDrafts((prevDrafts) =>
            prevDrafts.map((draft) =>
              draft.submissionId === submission?.id
                ? { ...draft, title: newTitle }
                : draft
            )
          );
        } else {
          setInputValue(res.title);
        }
      })
      .catch((error) => {
        console.error('Error updating assignment:', error);
      });
  };

  const autoResize = () => {
    if (inputRef.current) {
      inputRef.current.style.height = '20px';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      autoResize();
    }, 0);
  }, []);

  const question = submission?.assignment?.questions[QuestionIndex];
  const newAnswer = {
    serialNumber: question?.serialNumber,
    answer: '',
  };

  const answer =
    submission?.answers?.find(
      (answer) => answer?.serialNumber === question?.serialNumber
    ) || newAnswer;
  const answerValue = answer.answer.answer;
  const debounce = createDebounceFunction(
    submission,
    setSubmission,
    pageMode,
    comments,
    setIsSavingAnswer
  )(answer);


  return (
    <>
      <Frame1366>
        {submission?.type === 'DOCUMENT' ? (
          <QuestionContainer>
            {QuestionHeadingContainer(setQuestionSlide, questionSlide)}
            {pageMode === 'DRAFT' ? (
              <>
                <QuestionInputBox
                  ref={inputRef}
                  slide={questionSlide}
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    handleInputChange(e);
                    autoResize(e);
                  }}
                  onBlur={() => {
                    updateAssignmentTitle(inputValue);
                  }}
                />
              
              </>
            ) : (
              <QuestionText
                slide={questionSlide}
                dangerouslySetInnerHTML={{
                  __html: linkify(submission?.assignment?.title),
                }}
              />
            )}
          </QuestionContainer>
        ) : (
          <QuestionContainer>
            {QuestionHeadingContainer(setQuestionSlide, questionSlide)}
            <QuestionText
              slide={questionSlide}
              dangerouslySetInnerHTML={{ __html: linkify(question?.question) }}
            />
          </QuestionContainer>
        )}
        <AnswerContainer>
          <QuestionTitleBox>Response</QuestionTitleBox>

          <QuillContainer
            onClick={() => {
              onSelectionChange(
                createVisibleComments(commentsForSelectedTab),
                answer.serialNumber
              )(quillRefs.current[answer.serialNumber - 1].getSelection());
            }}
            id={'quillContainer_' + submission?.id + '_' + answer.serialNumber}
          >
            {createQuill(
              pageMode,
              'quillContainer_' + submission?.id + '_' + answer.serialNumber,
              submission,
              answer,
              answerValue,
              commentsForSelectedTab,
              debounce,
              handleEditorMounted,
              editorFontSize,
              selectedComment,
              methods,
              selectedRange,
              newCommentFrameRef,
              share,
              question,
              isFeedback,
              QuestionIndex,
              setIsSavingAnswer
            )}
          </QuillContainer>
        </AnswerContainer>
      </Frame1366>
    </>
  );
};

function QuestionHeadingContainer(setQuestionSlide, questionSlide) {
  return (
    <QuestionTitleBox>
      <h3>Question</h3>
      <button onClick={() => setQuestionSlide(!questionSlide)}>
        <img
          style={{
            transform: `${questionSlide ? 'rotate(0deg)' : 'rotate(180deg)'}`,
          }}
          src={DownWhite}
          slide={questionSlide}
        />{' '}
        {questionSlide ? 'Hide' : 'Show'}
      </button>
    </QuestionTitleBox>
  );
}

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
  selectedComment,
  methods,
  selectedRange,
  newCommentFrameRef,
  share,
  question,
  isFeedback,
  QuestionIndex,
  setIsSavingAnswer
) {
  return (
    <div style={{ width: '100%' }}>
      <QuillEditor
        key={
          'quillEditor_' +
          submission?.id +
          '_' +
          answer.serialNumber +
          '_' +
          submission?.status +
          '_' +
          pageMode
        }
        id={'quillEditor_' + submission?.id + '_' + answer.serialNumber}
        ref={(editor) => handleEditorMounted(editor, answer.serialNumber - 1)}
        comments={commentsForSelectedTab?.filter((comment) => {
          return comment.questionSerialNumber === answer.serialNumber;
        })}
        value={answerValue ? answerValue : ''}
        options={{
          modules: createModules(pageMode),
          theme: 'snow',
          readOnly: pageMode === 'REVIEW' || pageMode === 'CLOSED',
          placeholder: 'Write your first word here...',
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
        selectedComment={selectedComment}
        methods={methods}
        pageMode={pageMode}
        submission={submission}
        selectedRange={selectedRange}
        newCommentFrameRef={newCommentFrameRef}
        share={share}
        question={question}
        isFeedback={isFeedback}
        QuestionIndex={QuestionIndex}
        setIsDiable={setIsSavingAnswer}
      ></QuillEditor>
    </div>
  );
}

const isChecked = (groupedFocusAreaIds, serialNumber, focusAreaId) => {
  return (
    !!groupedFocusAreaIds[serialNumber] &&
    groupedFocusAreaIds[serialNumber].includes(focusAreaId)
  );
};

export default AnswersFrame;
