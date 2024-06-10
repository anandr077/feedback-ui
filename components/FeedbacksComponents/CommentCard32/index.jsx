import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReviewsFrame132532 from '../ReviewsFrame132532';
import styled from 'styled-components';
import {
  IbmplexsansNormalBlack16px,
  feedbacksIbmplexsansMediumBlack16px,
} from '../../../styledMixins';
import { textAreaAutoResize } from '../../../components2/textAreaAutoResize';
import { truncateString } from '../../../components2/truncateString';
import { isShowFullCommentBankText } from '../FeedbacksRoot/rules';
import { isShowReplyInput } from './rule';

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
  const inputRef = useRef();

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
    textAreaAutoResize(event, inputRef);
  };

  useEffect(()=>{
    if(selectedComment?.id === comment.id){
      setIsReplyClicked(true)
    }else{
      setIsReplyClicked(false)
    }
  }, [selectedComment])

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
          ref={inputRef}
          style={{
            height: `${inputRef.current ? inputRef.current.scrollHeight : 33}px`,
          }}
          type="text"
          placeholder="Type here..."
          defaultValue={inputValue}
          onChange={handleInputChange}
        />
        <ButtonWrapper>
          <InputButton
            backgroundColor={'#ffffff'}
            textColor={'#7200E0'}
            onClick={handleCancelClick}
          >
            Cancel
          </InputButton>
          <InputButton
            backgroundColor={'#7200E0'}
            textColor={'#ffffff'}
            onClick={handleSubmitClick}
            borderColor={'#7200E0'}
          >
            Submit
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
      />
      <CommentText
        onClick={() => onClick(comment)}
        className="horem-ipsum-dolor-si-1"
      >
        {showComment()}
      </CommentText>
      {comment.replies?.length > 0 && showReply()}
      {isShowReplyInput(
        isResolved, 
        isReplyClicked, 
        defaultComment, 
        pageMode, 
        editButtonActive) && inputComment()}
    </CommentCard>
  );

  function showComment() {
    
    
    if (editButtonActive && editCommentType === 'parent_comment') {
      return inputComment();
    } else {
      if (comment?.comment?.includes('\n\n')) {
        const commentArray = comment.comment.split('\n\n');
        const commentBankTextLength = isShowFullCommentBankText(comment, selectedComment) ? commentArray[1]?.length : 70;
        return (
          <>
            <p>
              <BoldText>{commentArray[0]}</BoldText>
            </p>
            <NewlineText text={truncateString(commentArray[1], commentBankTextLength)} />
          </>
        );
      } else {
        const commentTextLength = isShowFullCommentBankText(comment, selectedComment) ? comment.comment?.length : 70;
        if (!showFullComment && comment.comment?.length > 70) {
          return (
            <>
              <p>
                <>{truncateString(comment.comment, commentTextLength)}</>
              </p>
            </>
          );
        } else {
          return (
              <p>
              {comment.comment}
              </p>
          );
        }
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
  padding-bottom: 5px;
`;

const CommentCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  background-color: ${(props) =>
    props.bgColor ||
    'var(--white)'}; 
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
  margin-top: 10px;
`;

const Input = styled.textarea`
  width: 100%;
  display: flex;
  padding: 8px;
  font-family: var(--font-family-ibm_plex_sans);
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #C9C6CC;
  box-shadow: 0px 2.04px 2px 0px #73737340 inset;
  outline: none;
  resize: none;
  overflow: hidden;
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
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  border: ${(props) => props.borderColor ? '1px solid #7200e0' : ''};
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
  color: ${(props) => props.textColor};
  text-align: center;
  font-size: 13px;
  line-height: 17px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
`;

const ReplyCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-family-ibm_plex_sans);
  padding-top: 12px;
  width: 100%;
  border-top: 1px solid #f1e6fc;
`;


const CommentDiv = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: rgba(75, 70, 79, 1);
`;

export default CommentCard32;
