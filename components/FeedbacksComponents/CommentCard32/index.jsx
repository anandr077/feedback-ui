import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsFrame132532 from '../ReviewsFrame132532';
import styled from 'styled-components';
import {
  IbmplexsansNormalBlack16px,
  feedbacksIbmplexsansMediumBlack16px,
} from '../../../styledMixins';

function CommentCard32(props) {
  const {
    comment,
    className,
    reviewer,
    onClick,
    onClose,
    isTeacher,
    onResolved,
    isResolved,
    handleReplyComment,
    defaultComment = false,
    deleteReplyComment,
    handleEditingComment,
    updateParentComment,
    updateChildComment,
    pageMode,
    openShareWithStudentDialog,
    convertToCheckedState,
    updateExemplarComment,
    selectedComment
  } = props;
  const [isReplyClicked, setIsReplyClicked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [editCommentType, setEditCommentType] = React.useState('');
  const [editReplyIndex, setEditReplyIndex] = React.useState(null);
  const [editButtonActive, setEditButtonActive] = React.useState(false);
  const [showFullComment, setShowFullComment] = React.useState(false);

  const handleEditComment = (commentType, inputValue, index = null) => {
    setEditButtonActive(true);
    handleEditingComment(true);
    setEditCommentType(commentType);
    if (commentType === 'replies') {
      setEditReplyIndex(index);
    }
    setInputValue(inputValue);
    setIsReplyClicked(true);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  function handleReplyClick() {
    setIsReplyClicked(true);
  }

  function handleSubmitClick() {
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
      return;
    }
    if (editButtonActive) {
      if (editCommentType === 'replies') {
        updateChildComment(
          comment.id,
          editReplyIndex,
          inputValue,
          comment.sharedWithStudents
        );
      } else if (editCommentType === 'parent_comment') {
        updateParentComment(inputValue, comment.id);
      }
    } else {
      handleReplyComment(
        inputValue,
        comment.id,
        comment.questionSerialNumber,
        comment.sharedWithStudents
      );
    }
    setInputValue('');
    setIsReplyClicked(false);
    setEditButtonActive(false);
    handleEditingComment(false);
  }

  function handleCancelClick() {
    setIsReplyClicked(false);
    setEditButtonActive(false);
    setInputValue('');
    handleEditingComment(false);
  }

  function showReply() {
    return comment.replies.map((reply, index) => {
      return (
        <ReplyCommentWrapper>
          <ReviewsFrame132532
            isShare={comment.type === 'MODEL_RESPONSE'}
            reviewer={reply.reviewerName}
            onClose={() => {}}
            isTeacher={isTeacher}
            onResolved={onResolved}
            isResolved={'RESOLVED'}
            comment={reply}
            deleteReplyComment={deleteReplyComment}
            commentType={'replies'}
            index={index}
            commentId={comment.id}
            handleEditComment={handleEditComment}
            pageMode={pageMode}
            onClick={onClick}
            openShareWithStudentDialog={openShareWithStudentDialog}
            convertToCheckedState={convertToCheckedState}
            updateExemplarComment={updateExemplarComment}
            sharedWithStudents={comment.sharedWithStudents}
            isReply={true}
            selectedComment={selectedComment}
          />
          <CommentText
            onClick={() => onClick(comment)}
            className="horem-ipsum-dolor-si-1"
          >
            {editButtonActive &&
            editCommentType === 'replies' &&
            index === editReplyIndex ? (
              inputComment()
            ) : (
              <NewlineText text={reply.comment} />
            )}
          </CommentText>
        </ReplyCommentWrapper>
      );
    });
  }

  function inputComment() {
    return (
      <ReplyInputWrapper id="comment_input">
        <Input
          type="text"
          placeholder="Type here..."
          defaultValue={inputValue}
          onChange={handleInputChange}
        />
        <ButtonWrapper>
          <InputButton
            backgroundColor={'#7200E0'}
            textColor={'#ffffff'}
            onClick={handleSubmitClick}
          >
            Submit
          </InputButton>
          <InputButton
            backgroundColor={'#ffffff'}
            textColor={'#7200E0'}
            onClick={handleCancelClick}
          >
            Cancel
          </InputButton>
        </ButtonWrapper>
      </ReplyInputWrapper>
    );
  }
  return (
    <CommentCard
      bgColor={comment.color}
      id={'comment_' + comment.id}
      className={`comment-card-4 ${className || ''}`}
    >
      <ReviewsFrame132532
        isShare={comment.type === 'MODEL_RESPONSE'}
        showResolveButton={
          (comment.type === 'COMMENT' || comment.type === 'SMART_ANNOTATION') &&
          pageMode === 'REVISE' &&
          comment.status != 'RESOLVED'
        }
        reviewer={reviewer}
        onClose={onClose}
        onResolved={onResolved}
        comment={comment}
        defaultComment={defaultComment}
        handleEditComment={handleEditComment}
        pageMode={pageMode}
        onClick={onClick}
        isClosable={
          comment.type === 'FOCUS_AREA' &&
          (pageMode === 'DRAFT' || pageMode === 'REVISE')
        }
        openShareWithStudentDialog={openShareWithStudentDialog}
        convertToCheckedState={convertToCheckedState}
        updateExemplarComment={updateExemplarComment}
        sharedWithStudents={comment.sharedWithStudents}
        showReplyButton={
          isResolved !== 'RESOLVED' &&
          !isReplyClicked &&
          !defaultComment &&
          pageMode !== 'CLOSED'
        }
        onReplyClick={handleReplyClick}
        selectedComment={selectedComment}
      />
      <CommentText
        onClick={() => onClick(comment)}
        className="horem-ipsum-dolor-si-1"
      >
        {showComment()}
      </CommentText>
      {comment.replies?.length > 0 && showReply()}
      {isReplyClicked && !editButtonActive && inputComment()}
    </CommentCard>
  );

  function showComment() {
    if (editButtonActive && editCommentType === 'parent_comment') {
      return inputComment();
    } else {
      // if (comment?.comment?.includes('\n\n')) {
      //   const commentArray = comment.comment.split('\n\n');
      //   return (
      //     <>
      //       <p>
      //         <BoldText>{commentArray[0]}</BoldText>
      //       </p>
      //       <NewlineText text={commentArray[1]} />
      //     </>
      //   );
      // } else {
      //   const commentText = comment.comment;
      //   const words = commentText.split(' ');

      //   if (!showFullComment && words.length > 12) {
      //     const truncatedText = words.slice(0, 12).join(' ');
      //     return (
      //       <>
      //         <p>
      //           <>{truncatedText}</>
      //           <ReadMore onClick={() => setShowFullComment(true)}> Read more</ReadMore>
      //         </p>
      //       </>
      //     );
      //   } else {
      //     return (
      //         <p>
      //         {commentText}
      //         </p>
      //     );
      //   }
      // }

      const commentText = comment.comment;
      const words = commentText.split(' ');

      if (!showFullComment && words.length > 12) {
        const truncatedText = words.slice(0, 12).join(' ');
        return (
          <>
            <CommentDiv>
              <>{truncatedText}</>
              <ReadMore onClick={() => setShowFullComment(true)}>
                Read more
              </ReadMore>
            </CommentDiv>
          </>
        );
      } else {
        return (
          <CommentDiv>
            {commentText}
            {showFullComment && (
              <ReadMore onClick={() => setShowFullComment(false)}>
                Read less
              </ReadMore>
            )}
          </CommentDiv>
        );
      }
    }
  }
}
function NewlineText({ text }) {
  const newText = text?.split('\n').map((str, index, array) =>
    index === array.length - 1 ? (
      str
    ) : (
      <>
        {str}
        <br />
      </>
    )
  );

  return <>{newText}</>;
}

const BoldText = styled.div`
  font-weight: bold;
  padding-bottom: 1em;
`;

const CommentCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  background-color: ${(props) =>
    props.bgColor ||
    'var(--white)'}; // default is var(--white) if no bgColor prop is provided
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(112, 112, 112, 0.1);
  border: solid 1px rgba(201, 198, 204, 0.5);
  width: 293px;

  &.comment-card-4.comment-card-5 {
    cursor: unset;
  }

  &.comment-card-4.comment-card-6 {
    cursor: unset;
  }

  &:hover {
    border-color: rgba(197, 150, 242, 1);
  }
`;

const CommentText = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  white-space: pre-line;
  word-break: break-word;
  cursor: pointer;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  font-family: 'IBM Plex Sans';
`;

const Input = styled.textarea`
  width: 100%;
  min-height: 100px;
  display: flex;
  padding: 8px 8px 8px 12px;
  font-family: var(--font-family-ibm_plex_sans);
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #1e252a;
  background: #fff;
  border: 1px solid var(--light-mode-purple);
  border-radius: 10px;
  outline: none;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const InputButton = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid #7200e0;
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
  color: ${(props) => props.textColor};
  text-align: center;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-weight: 500;
`;

const ReplyCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: IBM Plex Sans;
  padding-top: 12px;
  border-top: 1px solid #f1e6fc;
`;

const ReadMore = styled.div`
  color: var(--light-mode-purple);
  font-size: var(--font-size-s);
`;

const CommentDiv = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: rgba(75, 70, 79, 1);
`;

export default CommentCard32;
