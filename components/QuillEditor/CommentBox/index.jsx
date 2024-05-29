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

  useEffect(() => {
    const measureHeights = () => {
      const newHeights = comments?.map((_, index) => {
        const element = document.getElementById(`comment-${index}`);
        return element ? element.clientHeight : 0;
      });
      setCommentHeights(newHeights);
    };

    measureHeights();

    window.addEventListener('resize', measureHeights);

    return () => {
      window.removeEventListener('resize', measureHeights);
    };
  }, [comments]);

  useEffect(() => {
    let lastCommentBottomPosition = 0;

    const selectedCommentIndex = comments
      ?.sort((a, b) => a.range.from - b.range.from)
      .findIndex((comment) => comment.id === selectedComment?.id);

    const groupedComments = comments
      ?.sort((a, b) => a.range.from - b.range.from)
      .map((comment, index) => {
        if (!editorRef.current) return null;

        const length = comment.range.to - comment.range.from;
        let boundsIs;
        if (editor) {
          boundsIs = editor.getBounds(comment.range.from, length);
        }

        if (!boundsIs) {
          console.error('Bounds not found for comment:', comment);
          return null;
        }

        let topPosition = boundsIs.top;

        let updatedTopPosition = null;
        if (selectedComment) {
          let selectedLength =
            selectedComment?.range.to - selectedComment?.range.from;
          let selectedBounds;
          if (editor) {
            selectedBounds = editor.getBounds(
              selectedComment?.range.from,
              selectedLength
            );
          }
          updatedTopPosition = selectedBounds.top;
        }

        if (topPosition < lastCommentBottomPosition) {
          topPosition = lastCommentBottomPosition;
        }

        if (
          index === selectedCommentIndex &&
          selectedComment &&
          topPosition > updatedTopPosition
        ) {
          topPosition = updatedTopPosition;
        }

        if (index < selectedCommentIndex) {
          if (topPosition <= lastCommentBottomPosition) {
            topPosition -= commentHeights[index];
          } else {
            topPosition = topPosition;
          }
        }

        lastCommentBottomPosition = topPosition + commentHeights[index];

        return { ...comment, topPosition: topPosition };
      })
      .filter((comment) => comment !== null);

    let groupedCommentsWithGap = [];
    let currentGroup = [];

    groupedComments?.forEach((comment, index) => {
      if (currentGroup.length === 0) {
        currentGroup.push(comment);
      } else {
        const lastComment = currentGroup[currentGroup.length - 1];
        const lastCommentBottomPosition =
          lastComment.topPosition + commentHeights[index];

        if (comment.topPosition < lastCommentBottomPosition) {
          groupedCommentsWithGap.push(currentGroup);
          currentGroup = [comment];
        } else {
          currentGroup.push(comment);
        }
      }
    });

    if (currentGroup.length > 0) {
      groupedCommentsWithGap.push(currentGroup);
    }

    setGroupedCommentsWithGap(groupedCommentsWithGap);
  }, [isFeedback, editor, editorRef, selectedComment, comments, commentHeights]);


  return (
    <>
      {showNewComment && pageMode !== 'DRAFT' ? (
        <MainSideContainer
          style={{ top: floatingBoxTopPosition, right: '-330px' }}
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
        <MainSideContainer>
          <ul
            style={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {groupedCommentsWithGap.map((group, groupIndex) => {
              const sortedGroup = sortBy(group, [
                'questionSerialNumber',
                'range.from',
              ]);
              return (
                <div key={groupIndex}>
                  {sortedGroup.map((comment, index) => {
                    console.log('the comment status', comment.status)
                    return (
                      <CommentDiv
                        key={index}
                        id={`comment-${index}`}
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
                          />
                        ) : (
                          <></>
                        )}
                      </CommentDiv>
                    );
                  })}
                </div>
              );
            })}
          </ul>
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
