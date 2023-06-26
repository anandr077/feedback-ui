import React from "react";
import { Link } from "react-router-dom";
import ReviewsFrame132532 from "../ReviewsFrame132532";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../../../styledMixins";

function CommentCard32(props) {
  const {
    comment,
    className,
    reviewer,
    onClick,
    isClosable,
    onClose,
    isTeacher,
    onResolved,
    isResolved,
    handleReplyComment,
  } = props;

  console.log("props comm: ", props);

  const [isReplyClicked, setIsReplyClicked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleReplyClick() {
    setIsReplyClicked(true);
  }

  function handleSubmitClick() {
    handleReplyComment(inputValue, comment.id);
    setInputValue("");
    setIsReplyClicked(false);
  }

  function handleCancelClick() {
    setIsReplyClicked(false);
  }

  function showReply() {
    return comment.reply.map((reply) => {
      return (
        <ReplyCommentWrapper>
          <ProfileWrapper>
            <img
              src="https://lh5.googleusercontent.com/-1J9_PnZ0SBI/AAAAAAAAAAI/AAAAAAAAHNw/K6MUe90HuQc/s96-c/photo.jpg"
              alt="image"
              style={{
                height: "24px",
                width: "24px",
                borderRadius: "50%",
              }}
            />
            <div>Testing</div>
          </ProfileWrapper>
          <div>{reply.feedback}</div>
        </ReplyCommentWrapper>
      );
    });
  }

  return (
    <CommentCard
      id={"comment_" + comment.id}
      className={`comment-card-4 ${className || ""}`}
    >
      <ReviewsFrame132532
        isShare={comment.type === "MODEL_RESPONSE"}
        reviewer={reviewer}
        isClosable={isClosable}
        onClose={onClose}
        isTeacher={isTeacher}
        onResolved={onResolved}
        isResolved={isResolved}
        comment={comment}
      />
      <HoremIpsumDolorSi
        onClick={() => onClick(comment)}
        className="horem-ipsum-dolor-si-1"
      >
        {comment.comment}
      </HoremIpsumDolorSi>
      {comment.reply.length > 0 && showReply()}
      {isResolved !== "RESOLVED" && !isReplyClicked && (
        <Reply onClick={handleReplyClick}>
          <img src="/icons/reply-purple-curved-arrow.png" alt="reply" />
          <div>Reply</div>
        </Reply>
      )}

      {isReplyClicked && (
        <ReplyInputWrapper>
          <Input
            type="text"
            placeholder="Type here..."
            value={inputValue}
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
      )}
    </CommentCard>
  );
}

const CommentCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
  // cursor: pointer;

  &.comment-card-4.comment-card-5 {
    cursor: unset;
  }

  &.comment-card-4.comment-card-6 {
    cursor: unset;
  }
`;

const HoremIpsumDolorSi = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
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
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default CommentCard32;
