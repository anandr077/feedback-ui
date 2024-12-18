import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  OptionContainer,
  Option,
  Screen,
  Frame1329,
  Frame1406,
  SmartAnnotationsComponent,
  CommentContainer,
  CommentBoxContainer,
  Frame1326,
  ModalHeading,
  TypeHere,
  ShortcutList,
  Frame1383,
  Frame13311,
  CommentDiv,
  CommentLikeBox,
  LikeReactIcon,
  RedCloseIcon,
  Crown,
  ExemplarComponent,
  MainSideContainer,
  ChangeButton,
} from './style';
import CommentIcon from '../../../static/img/graysinglecomment.svg';
import LikeIcon from '../../../static/img/like.svg';
import RoundedBorderLikeIcon from '../../../static/icons/rounded_border_like.svg';
import RedCLoseIcon from '../../../static/icons/red_close.svg';
import ShareIcon from '../../../static/img/24grayshare.svg';
import CommentCard32 from '../../FeedbacksComponents/CommentCard32';
import SmartAnotation from '../../SmartAnnotations';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import FocussedInput from '../../FocussedInput';
import FocusAreasFrame from '../../FeedbacksComponents/FocusAreasFrame';
import { FeedbackContext } from '../../FeedbacksComponents/FeedbacksRoot/FeedbackContext';
import { getUserRole } from '../../../userLocalDetails';
import ModalForSelectOption from '../../../components2/Modals/ModalForSelectOption';
import { sortBy } from 'lodash';
import {
  adjustPositionsForSelectedComment,
  getBounds,
  withHeights,
  likeTopPosition
} from './bounds';
import {
  isShareWithClass,
  isShowCommentBanks,
} from '../../FeedbacksComponents/FeedbacksRoot/rules';
import { useOutsideAlerter } from '../../../components2/CustomHooks/useOutsideAlerter';
import { getFirstTwoWords } from '../../../utils/strings';
import { isHighlightSelectedComment, isShowLikeCancelButton } from '../rules';

const CommentBox = ({
  pageMode,
  submission,
  methods,
  comments,
  editor,
  selectedComment,
  selectedRange,
  newCommentFrameRef,
  share,
  floatingBoxTopPosition,
  question,
  isFeedback,
  commentHeightRefs,
  commentBoxContainerHeight,
  QuestionIndex,
}) => {
  const { showNewComment, newCommentSerialNumber, isTeacher } =
    useContext(FeedbackContext);
  const [openCommentBox, setOpenCommentbox] = useState(false);
  const [groupedCommentsWithGap, setGroupedCommentsWithGap] = useState([]);
  const role = getUserRole();
  const resizeObserver = useRef(null);

  let commentBankIds = submission?.assignment.questions
    .filter((item) => item.serialNumber === newCommentSerialNumber)
    .map((item) => item.commentBankId);

  const flattenComments = (nestedComments) => {
    return nestedComments.reduce((acc, group) => acc.concat(group), []);
  };

  const visibleComments = comments.filter((comment) => !comment.isHidden && comment.subType !== 'LIKE');

  const calculateBounds = () => {
    const groupedComments = getBounds(
      editor,
      withHeights(visibleComments),
      selectedComment?.id
    );
    const newGroupedCommentsWithGap = adjustPositionsForSelectedComment(
      editor,
      flattenComments(groupedComments),
      selectedComment?.id
    );

    if (
      JSON.stringify(newGroupedCommentsWithGap) !==
      JSON.stringify(groupedCommentsWithGap)
    ) {
      setGroupedCommentsWithGap(newGroupedCommentsWithGap);
    }
  };

  useEffect(() => {
    calculateBounds();
  }, [visibleComments, selectedComment, editor, groupedCommentsWithGap]);

  useEffect(() => {
    resizeObserver.current = new ResizeObserver(() => {
      calculateBounds();
    });

    const commentElement = document.getElementById(
      `comment-${selectedComment?.id}`
    );
    if (commentElement) {
      resizeObserver.current.observe(commentElement);
    }
    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [selectedComment]);

  const onShareWithClassClick = () => {
    methods.handleShareWithClass();
    setOpenCommentbox(false);
  };

  const onLikeButtonClick = () => {
    methods.handleLikeSelectedText();
  };

  const likeCommentsWithoutPosition = comments.filter((comment) => !comment.isHidden && comment.subType === 'LIKE');
  const likeCommentWithTopPosition = likeTopPosition(editor, likeCommentsWithoutPosition);

  const calculateTopPosition = (pageMode) =>{
    return (topPosition) => {
      if ((pageMode === 'DRAFT' || pageMode === 'REVISE') && role === "STUDENT") {
        return topPosition + 50;
      }
      return topPosition;
    };
  }
  const topPositionOfComment = calculateTopPosition(pageMode);

  return (
    <>
      {showNewComment && isFeedback && pageMode !== 'DRAFT' ? (
        <MainSideContainer
          style={{
            top: floatingBoxTopPosition,
            right: '-330px',
            height: '100%',
          }}
        >
          <Screen
            onClick={() => {
              methods.hideNewCommentDiv();
              setOpenCommentbox(false);
            }}
          ></Screen>
          <OptionContainer>
            <Option onClick={() => setOpenCommentbox(!openCommentBox)}>
              <img src={CommentIcon} />
            </Option>
            {isShareWithClass(role, submission?.type) && (
              <Option onClick={onShareWithClassClick}>
                <img src={ShareIcon} />
              </Option>
            )}
            <Option>
              <img src={LikeIcon} onClick={onLikeButtonClick} />
            </Option>
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
              selectedRange,
              getFirstTwoWords,
              QuestionIndex
            )}
        </MainSideContainer>
      ) : (
        <MainSideContainer style={{ height: `${commentBoxContainerHeight}px` }}>
          <div
            style={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
            ref={commentHeightRefs}
          >
            {likeCommentWithTopPosition
              .filter((comment) => comment.subType === 'LIKE')
              .map((comment, idx) => {
                return (
                  <CommentLikeBox
                    key={idx}
                    id={`comment-${comment.id}`}
                    style={{
                      top: `${topPositionOfComment(comment.topPosition)}px`,
                    }}
                    onClick={() => methods.handleCommentSelected(comment)}
                  >
                    <LikeReactIcon
                      isSelected={isHighlightSelectedComment(selectedComment, comment.id)}
                      src={RoundedBorderLikeIcon}
                    />
                    {isShowLikeCancelButton(comment, pageMode) && (
                      <RedCloseIcon
                        src={RedCLoseIcon}
                        onClick={() => methods.handleDeleteComment(comment.id)}
                      />
                    )}
                  </CommentLikeBox>
                );
              })}
            {groupedCommentsWithGap
              .filter((comment) => comment.subType !== 'LIKE')
              .map((comment, index) => {
                return (
                  <CommentDiv
                    key={index}
                    id={`comment-${comment.id}`}
                    style={{
                      top: `${topPositionOfComment(comment.topPosition)}px`,
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
                        deleteReplyComment={methods.handleDeleteReplyComment}
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
                        convertToCheckedState={methods.convertToCheckedState}
                        updateExemplarComment={methods.setUpdateExemplarComment}
                        studentId={submission?.studentId}
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
                        deleteReplyComment={methods.handleDeleteReplyComment}
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
                        convertToCheckedState={methods.convertToCheckedState}
                        updateExemplarComment={methods.setUpdateExemplarComment}
                        studentId={submission?.studentId}
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
                        deleteReplyComment={methods.handleDeleteReplyComment}
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
                        convertToCheckedState={methods.convertToCheckedState}
                        updateExemplarComment={methods.setUpdateExemplarComment}
                        studentId={submission?.studentId}
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
  selectedRange,
  getFirstTwoWords,
  QuestionIndex
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
    selectedRange,
    submission?.type,
    getFirstTwoWords,
    QuestionIndex
  );
};

function reviewerNewComment(
  methods,
  newCommentFrameRef,
  share,
  pageMode,
  commentBankIds,
  question,
  selectedRange,
  submissionType,
  getFirstTwoWords,
  QuestionIndex
) {
  const {
    smartAnnotations,
    setShowFloatingDialogue,
    allCommentBanks,
    commentBankTitle,
    setFeedbackBanksPopUp,
  } = useContext(FeedbackContext);

  const currentCommentBank = smartAnnotations[QuestionIndex];

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
            {isShowCommentBanks(currentCommentBank?.smartComments) && (
              <CommentBoxContainer>
                <ModalHeading>
                  <h1>{getFirstTwoWords(currentCommentBank?.title)}</h1>
                  <ChangeButton onClick={() => setFeedbackBanksPopUp(true)}>
                    Change
                  </ChangeButton>
                </ModalHeading>
                <ModalForSelectOption
                  onClose={setShowFloatingDialogue}
                  optionsToSelect={currentCommentBank?.smartComments}
                  onClickOption={methods.handleShortcutAddCommentSmartAnnotaion}
                />
              </CommentBoxContainer>
            )}
          </SmartAnnotationsComponent>
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

function selectFocusArea(methods, submission, newCommentSerialNumber) {
  const allFocusAreas = flatMap(submission.assignment.questions, (question) =>
    question.focusAreas ? question.focusAreas : []
  );

  const focusAreas = uniqBy(
    allFocusAreas?.filter((fa) => {
      return submission?.assignment.questions[
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
