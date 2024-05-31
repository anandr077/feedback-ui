import React, { useContext, useEffect, useState } from 'react';
import {
  OptionContainer,
  Option,
  Screen,
  Frame1329,
  Frame1406,
  SmartAnnotationsComponent,
  CommentContainer,
  Frame1326,
  ModalHeading,
  TypeHere,
  ShortcutList,
  Frame1383,
  Frame13311,
  CommentDiv,
  Crown,
  ExemplarComponent,
  MainSideContainer,
} from './style';
import CommentIcon from '../../../static/img/graysinglecomment.svg';
import AlphabetIcon from '../../../static/img/24grayalphabet.svg';
import ShareIcon from '../../../static/img/24grayshare.svg';
import ThumbsupIcon from '../../../static/img/24thumbsuppurple.svg';
import CommentCard32 from '../../FeedbacksComponents/CommentCard32';
import SmartAnotation from '../../SmartAnnotations';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import FocussedInput from '../../FocussedInput';
import { Share } from '@mui/icons-material';
import Buttons4 from '../../FeedbacksComponents/Buttons4';
import FocusAreasFrame from '../../FeedbacksComponents/FocusAreasFrame';
import { FeedbackContext } from '../../FeedbacksComponents/FeedbacksRoot/FeedbackContext';
import { getUserRole } from '../../../userLocalDetails';
import ModalForSelectOption from '../../../components2/Modals/ModalForSelectOption';
import { sortBy } from 'lodash';
import { adjustPositionsForSelectedComment, getBounds, withHeights } from './bounds';

const CommentBox = ({
  pageMode,
  submission,
  methods,
  comments,
  editor,
  editorRef,
  selectedComment,
  selectedRange,
  newCommentFrameRef,
  share,
  floatingBoxTopPosition,
  question,
  isFeedback
}) => {
  const { showNewComment, newCommentSerialNumber, isTeacher } =
    useContext(FeedbackContext);
  const [commentHeights, setCommentHeights] = useState([]);
  const [groupedCommentsWithGap, setGroupedCommentsWithGap] = useState([]);
  const [openCommentBox, setOpenCommentbox] = useState(false);

  let commentBankIds = submission.assignment.questions
    .filter((item) => item.serialNumber === newCommentSerialNumber)
    .map((item) => item.commentBankId);

    const measureHeights = () => {
      const newHeights = comments?.map((comment, index) => {
        
        const element = document.getElementById(`comment-${comment.id}`);

        const height = element ? element.clientHeight : 0;

        return {...comment, height: height}
      });
      setCommentHeights(newHeights);
    };

  useEffect(() => {
    measureHeights();

    window.addEventListener('resize', measureHeights);

    return () => {
      window.removeEventListener('resize', measureHeights);
    };
  }, [comments]);

  useEffect(() => {
    const visibleComments = comments.filter((comment) => !comment.isHidden)
    
    const groupedComments = getBounds(editor, withHeights(visibleComments), selectedComment?.id)
    const a = adjustPositionsForSelectedComment(editor, flattenComments(groupedComments), selectedComment?.id)
    setGroupedCommentsWithGap(a);
  }, [isFeedback, editor, editorRef, selectedComment, comments, commentHeights]);

  const totalHeightAllComments = commentHeights.reduce((acc, cur) =>{
    return acc + cur.height
  }, 0)

  const flattenComments = (nestedComments) => {
    return nestedComments.reduce((acc, group) => acc.concat(group), []);
  };
  console.log('teh selectedComment', selectedComment)
  return (
    <>
      {showNewComment && isFeedback && pageMode !== 'DRAFT' ? (
        <MainSideContainer
          style={{ top: floatingBoxTopPosition, right: '-330px', height: '100%' }}
        >
          <Screen onClick={methods.hideNewCommentDiv}></Screen>
          <OptionContainer>
            <Option onClick={() => setOpenCommentbox(!openCommentBox)}>
              <img src={CommentIcon} />
            </Option>
            <Option onClick={methods.handleShareWithClass}>
              <img src={ShareIcon} />
            </Option>
            {/* <Option>
              <img src={AlphabetIcon} />
            </Option>
            <Option>
              <img src={ThumbsupIcon} />
            </Option> */}
          </OptionContainer>
          {openCommentBox &&
            newCommentFrame(
              pageMode,
              submission,
              newCommentSerialNumber,
              methods,
              newCommentFrameRef,
              share,
              commentBankIds,
              question,
              selectedRange
            )}
        </MainSideContainer>
      ) : (
        <MainSideContainer style={{height: `${totalHeightAllComments}px`}}>
          <div
            style={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
                  {groupedCommentsWithGap.map((comment, index) => {
                    return (
                      <CommentDiv
                        key={index}
                        id={`comment-${comment.id}`}
                        style={{
                          top: `${comment.topPosition}px`,
                          transform:
                            selectedComment && comment.id === selectedComment.id
                              ? 'translateX(-35px)'
                              : 'none',
                        }}
                      >
                        {comment.type === 'FOCUS_AREA' ? (
                          <CommentCard32
                            reviewer={comment.reviewerName}
                            comment={comment}
                            onClick={(c) => methods.handleCommentSelected(c)}
                            onClose={() => {
                              methods.handleDeleteComment(comment.id);
                            }}
                            handleEditingComment={methods.handleEditingComment}
                            deleteReplyComment={
                              methods.handleDeleteReplyComment
                            }
                            onResolved={methods.handleResolvedComment}
                            handleReplyComment={methods.handleReplyComment}
                            isResolved={comment.status}
                            showResolveButton={false}
                            isTeacher={isTeacher}
                            updateParentComment={methods.updateParentComment}
                            updateChildComment={methods.updateChildComment}
                            pageMode={pageMode}
                            openShareWithStudentDialog={
                              methods.handleShareWithClass
                            }
                            convertToCheckedState={
                              methods.convertToCheckedState
                            }
                            updateExemplarComment={
                              methods.setUpdateExemplarComment
                            }
                            studentId={submission.studentId}
                            selectedComment={selectedComment}
                          />
                        ) : isFeedback && comment.status !== 'RESOLVED' ? (
                          <CommentCard32
                            reviewer={comment.reviewerName}
                            comment={comment}
                            onClick={(c) => methods.handleCommentSelected(c)}
                            onClose={() => {
                              methods.handleDeleteComment(comment.id);
                            }}
                            handleEditingComment={methods.handleEditingComment}
                            deleteReplyComment={
                              methods.handleDeleteReplyComment
                            }
                            onResolved={methods.handleResolvedComment}
                            handleReplyComment={methods.handleReplyComment}
                            isResolved={comment.status}
                            showResolveButton={pageMode === 'REVISE'}
                            isTeacher={isTeacher}
                            updateParentComment={methods.updateParentComment}
                            updateChildComment={methods.updateChildComment}
                            pageMode={pageMode}
                            openShareWithStudentDialog={
                              methods.handleShareWithClass
                            }
                            convertToCheckedState={
                              methods.convertToCheckedState
                            }
                            updateExemplarComment={
                              methods.setUpdateExemplarComment
                            }
                            studentId={submission.studentId}
                            selectedComment={selectedComment}
                          />
                        ) : comment.status === 'RESOLVED' ? (
                          <CommentCard32
                            reviewer={comment.reviewerName}
                            comment={comment}
                            onClick={(c) => methods.handleCommentSelected(c)}
                            onClose={() => {
                              methods.handleDeleteComment(comment.id);
                            }}
                            handleEditingComment={methods.handleEditingComment}
                            deleteReplyComment={
                              methods.handleDeleteReplyComment
                            }
                            onResolved={methods.handleResolvedComment}
                            handleReplyComment={methods.handleReplyComment}
                            isResolved={comment.status}
                            showResolveButton={false}
                            isTeacher={isTeacher}
                            updateParentComment={methods.updateParentComment}
                            updateChildComment={methods.updateChildComment}
                            pageMode={pageMode}
                            openShareWithStudentDialog={
                              methods.handleShareWithClass
                            }
                            convertToCheckedState={
                              methods.convertToCheckedState
                            }
                            updateExemplarComment={
                              methods.setUpdateExemplarComment
                            }
                            studentId={submission.studentId}
                            selectedComment={selectedComment}
                          />
                        ) : (
                          <></>
                        )}
                      </CommentDiv>
                    );
                  })}
              </div>
        </MainSideContainer>
      )}
    </>
  );
};

export default CommentBox;

const newCommentFrame = (
  pageMode,
  submission,
  newCommentSerialNumber,
  methods,
  newCommentFrameRef,
  share,
  commentBankIds,
  question,
  selectedRange
) => {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return selectFocusArea(methods, submission, newCommentSerialNumber);
  }
  return reviewerNewComment(
    methods,
    newCommentFrameRef,
    share,
    pageMode,
    commentBankIds,
    question,
    selectedRange
  );
};

function reviewerNewComment(
  methods,
  newCommentFrameRef,
  share,
  pageMode,
  commentBankIds,
  question,
  selectedRange
) {
  const {
    smartAnnotations,
    setShowFloatingDialogue,
    allCommentBanks,
  } = useContext(FeedbackContext);
                
  if (pageMode === 'CLOSED') return <></>;
  return (
    <>
      <Frame1329>
        <Frame1406>
          <SmartAnnotationsComponent>
            <CommentContainer>
              <Frame1326>
                <TypeHere>
                  <FocussedInput
                    id="newCommentInput"
                    //ref={newCommentFrameRef}
                    placeholder="Start typing here..."
                  ></FocussedInput>
                </TypeHere>
              </Frame1326>

              <SubmitCommentFrameRoot
                submitButtonOnClick={methods.handleAddComment}
                cancelButtonOnClick={methods.hideNewCommentDiv}
                smartAnnotations={smartAnnotations}
                commentBankIds={commentBankIds}
              />
            </CommentContainer>
            <ModalHeading>
              <h1>Comment Banks</h1>
            </ModalHeading>
            <ModalForSelectOption
              onClose={setShowFloatingDialogue}
              optionsToSelect={allCommentBanks}
              onClickOption={methods.handleShortcutAddCommentSmartAnnotaion}
            />
            {/* <ShortcutList>
                {shortcutList(methods, smartAnnotations, commentBankIds)}
            </ShortcutList> */}
          </SmartAnnotationsComponent>
          {/* <ExemplarComponent>
              {shareWithClassFrame(methods, share)}
              {shareWithClassFrame(methods)}
            </ExemplarComponent> */}
        </Frame1406>
      </Frame1329>
    </>
  );
}

function shortcutList(methods, smartAnnotations, commentBankIds) {
  const all = smartAnnotations?.flatMap((annotation, index) =>
    annotation.smartComments
      .filter((smartComment) => commentBankIds.includes(annotation.id))
      .map((smartComment, innerIndex) => (
        <SmartAnotation
          key={`${index}-${innerIndex}`}
          smartAnnotation={smartComment}
          onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
        />
      ))
  );
}

function shareWithClassFrame(methods, share) {
  if (getUserRole() === 'STUDENT') return <></>;
  return (
    <>
      <Frame1383>
        <Frame13311>
          <Crown src="/icons/share.png" alt="crown" />
          <Share>Share</Share>
        </Frame13311>
        <Buttons4
          text={'Share with class'}
          onClickFn={methods.handleShareWithClass}
        />
      </Frame1383>
    </>
  );
}

function selectFocusArea(methods, submission, newCommentSerialNumber) {
  const allFocusAreas = flatMap(submission.assignment.questions, (question) =>
    question.focusAreas ? question.focusAreas : []
  );

  const focusAreas = uniqBy(
    allFocusAreas?.filter((fa) => {
      return submission.assignment.questions[
        newCommentSerialNumber - 1
      ]?.focusAreaIds?.includes(fa.id);
    }),
    'id'
  );
  const focusAreasFrame = (methods) => (
    <>
      <Frame1329>
        <Frame1406>
          <FocusAreasFrame
            focusAreas={focusAreas}
            handleAddFocusArea={methods.handleFocusAreaComment}
          />
        </Frame1406>
      </Frame1329>
    </>
  );

  return focusAreasFrame(methods);
}
