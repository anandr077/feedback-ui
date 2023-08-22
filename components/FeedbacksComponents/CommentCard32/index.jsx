import React from "react";
import { Link } from "react-router-dom";
import ReviewsFrame132532 from "../ReviewsFrame132532";
import styled from "styled-components";
import {
  IbmplexsansNormalBlack16px,
  feedbacksIbmplexsansMediumBlack16px,
} from "../../../styledMixins";

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
    pageMode
  } = props;

  const [isReplyClicked, setIsReplyClicked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [editCommentType, setEditCommentType] = React.useState("");
  const [editReplyIndex, setEditReplyIndex] = React.useState(null);
  const [editButtonActive, setEditButtonActive] = React.useState(false);

  console.log("##comment", comment.comment.includes("\n\n"));

  const handleEditComment = (commentType, inputValue, index = null) => {
    setEditButtonActive(true);
    handleEditingComment(true);
    setEditCommentType(commentType);
    if (commentType === "replies") {
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
    if (inputValue === "" || inputValue === null || inputValue === undefined) {
      return;
    }
    if (editButtonActive) {
      if (editCommentType === "replies") {
        updateChildComment(comment.id, editReplyIndex, inputValue);
      } else if (editCommentType === "parent_comment") {
        updateParentComment(inputValue, comment.id);
      }
    } else {
      handleReplyComment(inputValue, comment.id, comment.questionSerialNumber);
    }
    setInputValue("");
    setIsReplyClicked(false);
    setEditButtonActive(false);
    handleEditingComment(false);
  }

  function handleCancelClick() {
    setIsReplyClicked(false);
    setEditButtonActive(false);
    setInputValue("");
    handleEditingComment(false);
  }

  function showReply() {
    return comment.replies.map((reply, index) => {
      return (
        <ReplyCommentWrapper>
          <ReviewsFrame132532
            isShare={comment.type === "MODEL_RESPONSE"}
            reviewer={reply.reviewerName}
            onClose={() => {}}
            isTeacher={isTeacher}
            onResolved={onResolved}
            isResolved={"RESOLVED"}
            comment={reply}
            deleteReplyComment={deleteReplyComment}
            commentType={"replies"}
            index={index}
            commentId={comment.id}
            handleEditComment={handleEditComment}
            pageMode={pageMode}
            onClick={onClick}
          />
          <CommentText onClick={() => onClick(comment)} className="horem-ipsum-dolor-si-1">
            {editButtonActive && editCommentType === "replies" && index === editReplyIndex
              ? <NewlineText text={inputComment()} />
              : <NewlineText text={reply.comment} />}
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
            backgroundColor={"#7200E0"}
            textColor={"#ffffff"}
            onClick={handleSubmitClick}
          >
            Submit
          </InputButton>
          <InputButton
            backgroundColor={"#ffffff"}
            textColor={"#7200E0"}
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
      id={"comment_" + comment.id}
      className={`comment-card-4 ${className || ""}`}
    >
      <ReviewsFrame132532
        isShare={comment.type === "MODEL_RESPONSE"}
        showResolveButton = {
          (comment.type === "COMMENT" || comment.type === "SMART_ANNOTATION") &&
          pageMode === "REVISE" &&
          comment.status != "RESOLVED"
        }
        reviewer={reviewer}        
        onClose={onClose}
        onResolved={onResolved}
        comment={comment}
        defaultComment={defaultComment}
        handleEditComment={handleEditComment}
        pageMode={pageMode}
        onClick={onClick}
        isClosable = {comment.type === "FOCUS_AREA" && (pageMode==="DRAFT" || pageMode==="REVISE")}
      />
      <CommentText
        onClick={() => onClick(comment)}
        className="horem-ipsum-dolor-si-1"
      >
      {showComment()}
      </CommentText>
      {comment.replies?.length > 0 && showReply()}
      {isResolved !== "RESOLVED" && 
      !isReplyClicked && 
      !defaultComment &&
      pageMode != "CLOSED"
      && (
        <Reply onClick={handleReplyClick}>
          <img src="/icons/reply.svg" alt="reply" />
          <div>Reply</div>
        </Reply>
      )}

      {isReplyClicked && !editButtonActive && inputComment()}
    </CommentCard>
  );

  function showComment() {
    if (editButtonActive && editCommentType === "parent_comment") {
      return inputComment()
    } else {
      if(comment.comment.includes("\n\n")){
        const commentArray = comment.comment.split("\n\n");
        return <>
          <p><BoldText>{commentArray[0]}</BoldText></p>
          <NewlineText text={commentArray[1]} />
        </>
      }else {
      return comment.comment;
      }
    }
  }
}
function NewlineText({ text }) {
  const newText = text.split('\n').map((str, index, array) => 
    index === array.length - 1 ? str : <>
      {str}
      <br />
    </>
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
  gap: 8px;
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: ${props => props.bgColor || 'var(--white)'}; // default is var(--white) if no bgColor prop is provided
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;

  &.comment-card-4.comment-card-5 {
    cursor: unset;
  }

  &.comment-card-4.comment-card-6 {
    cursor: unset;
  }
`;


const CommentText = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  white-space: pre-line;
  cursor: pointer;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  font-family: "IBM Plex Sans";
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  padding: 8px 8px 8px 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #1e252a;
  background: #fff;
`;

const Reply = styled.div`
  display: flex;
  padding: 4px 8px;
  margin-top: 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  border-radius: 14px;
  border: 1px solid #7200e0;
  color: #7200e0;
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 13px;
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
  width: 100%;
`;

export default CommentCard32;
