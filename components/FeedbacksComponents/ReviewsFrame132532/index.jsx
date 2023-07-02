import React from "react";
import styled from "styled-components";
import { feedbacksIbmplexsansMediumBlack16px } from "../../../styledMixins";
import { Avatar } from "@boringer-avatars/react";
import { getUserId } from "../../../service";

function ReviewsFrame132532(props) {
  const {
    isShare,
    reviewer,
    isClosable,
    onClose,
    isTeacher,
    onResolved,
    isResolved,
    comment,
    defaultComment,
    deleteReplyComment,
    commentType = "",
    index = null,
    commentId = null,
    handleEditComment
  } = props;
  const [isResolveHovered, setIsResolveHovered] = React.useState(false);
  const [isMoreClicked, setIsMoreClicked] = React.useState(false);
  const componentRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsMoreClicked(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsResolveHovered(true);
  };

  const handleMouseLeave = () => {
    setIsResolveHovered(false);
  };

  const handleClick = () => {
    onResolved(comment.id);
  };

  const handleMoreClick = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  const handleEditClick = () => {
    if(commentType === 'replies'){
      handleEditComment('replies', comment.comment, index);
    }else{
      handleEditComment('parent_comment', comment.comment);
    }
    setIsMoreClicked(false);
  };

  const handleDeleteClick = () => {
    if (commentType === "replies") {
      deleteReplyComment(commentId, index);
    } else {
      onClose();
    }
    setIsMoreClicked(false);
  };

  const avatar = (
    <Avatar
      title={false}
      size={25}
      variant="beam"
      name={reviewer}
      square={false}
    />
  );
  const resolveFrame =
    !isTeacher && isResolved !== "RESOLVED" && !defaultComment ? (
      <Wrapper>
        <More
          src={
            isResolveHovered
              ? "/icons/resolve-tick-purple.png"
              : "/icons/resolve-tick-grey.png"
          }
          alt="resolve"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
        {isResolveHovered && <Tooltip>Resolve</Tooltip>}
      </Wrapper>
    ) : (
      <></>
    );
  const openEditDeleteTemplate = isMoreClicked ? (
    <MoreOptionsWrapper>
      <MoreOptions onClick={handleEditClick}>
        <More src="/icons/edit-purple-icon.svg" />
        <div>Edit</div>
      </MoreOptions>
      <MoreOptions onClick={handleDeleteClick}>
        <More src="/icons/delete-purple-icon.svg" />
        <div>Delete</div>
      </MoreOptions>
    </MoreOptionsWrapper>
  ) : (
    <></>
  );
  const shareIcon = <Ellipse7 src="/icons/share.png" />;
  const commenterFrame = isShare ? shareIcon : avatar;
  const reviewerFrame = isShare ? "Shared with class" : reviewer;
  return (
    <Frame1325>
      <Frame1324>
        {commenterFrame}
        <Instructer>{reviewerFrame}</Instructer>
      </Frame1324>
      {resolveFrame}
      {getUserId() === comment.reviewerId && !defaultComment && (
        <More onClick={handleMoreClick} src="/icons/three-dot.svg" ref={componentRef}/>
      )}
      {openEditDeleteTemplate}
    </Frame1325>
  );
}

const Frame1325 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1324 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Ellipse7 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Instructer = styled.div`
  ${feedbacksIbmplexsansMediumBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const More = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  background: #1e252a;
  color: #ffffff;
  padding: 2px 6px 2px 6px;
  font-family: "IBM Plex Sans";
  border-radius: 4px;
  top: -15px;
  right: -5px;
  z-index: 2;
`;

const MoreOptionsWrapper = styled.div`
  position: absolute;
  right: -5px;
  top: 20px;
  display: inline-flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  z-index: 2;
`;

const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #7200e0;
  font-size: 16px;
  font-family: IBM Plex Sans;
  cursor: pointer;
`;

export default ReviewsFrame132532;
