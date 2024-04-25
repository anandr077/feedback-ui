import React from 'react';
import styled from 'styled-components';
import { feedbacksIbmplexsansMediumBlack16px } from '../../../styledMixins';
import { Avatar } from '@boringer-avatars/react';
import { getUserId } from '../../../userLocalDetails';
import ReplyIcon from '../../../static/img/24grayreply.svg';
import DotIcon from '../../../static/img/24gray3dots.svg';
import TickIcon from '../../../static/img/24graytick.svg';

function ReviewsFrame132532(props) {
  const {
    isShare,
    reviewer,
    onClose,
    onResolved,
    showResolveButton,
    comment,
    defaultComment,
    deleteReplyComment,
    commentType = '',
    index = null,
    commentId = null,
    handleEditComment,
    pageMode,
    onClick,
    openShareWithStudentDialog,
    convertToCheckedState,
    updateExemplarComment,
    isClosable,
    sharedWithStudents,
    isReply = false,
    showReplyButton,
    onReplyClick,
    selectedComment,
  } = props;
  const closeFrame = isClosable ? (
    <More onClick={onClose} src="/icons/closecircle@2x.png" alt="more" />
  ) : (
    <></>
  );
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

  const handleEditClick =
    (openShareWithStudentDialog, convertToCheckedState) => () => {
      if (commentType === 'replies') {
        handleEditComment('replies', comment.comment, index);
      } else {
        if (isShare && getUserId() === comment.reviewerId) {
          convertToCheckedState(comment.sharedWithStudents);
          openShareWithStudentDialog();
          updateExemplarComment({
            comment: comment,
            showComment: true,
          });
          return;
        }
        handleEditComment('parent_comment', comment.comment);
      }
      setIsMoreClicked(false);
    };

  const handleDeleteClick = () => {
    if (commentType === 'replies') {
      deleteReplyComment(commentId, index);
    } else {
      onClose();
    }
    setIsMoreClicked(false);
  };

  const avatar =
    comment.reviewerId === '26614' || comment.reviewerId === '26572' ? (
      <JeddaiIcon src="img/ai.svg" />
    ) : (
      <Avatar
        title={false}
        size={25}
        variant="beam"
        name={reviewer}
        square={false}
      />
    );
  const resolveFrame = showResolveButton ? (
    <Wrapper>
      <More
        src={
          isResolveHovered
            ? '/icons/resolve-tick-purple.png'
            : '/icons/resolve-tick-grey.png'
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
      <MoreOptions
        onClick={handleEditClick(
          openShareWithStudentDialog,
          convertToCheckedState
        )}
      >
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
  const commenterFrame = createCommenterFrame();
  const reviewerFrame = createReviewerFrame();

  return (
    <Frame1325>
      <Frame1324>
        {commenterFrame}
        <Instructer onClick={() => onClick(comment)}>
          {reviewerFrame === '26614' || reviewerFrame === '26572'
            ? 'JEDDAI'
            : reviewerFrame}
        </Instructer>
      </Frame1324>
      {resolveFrame}
      {selectedComment && selectedComment.id === comment.id && (
        <>
          {showReplyButton && (
            <Reply onClick={onReplyClick}>
              <img src={ReplyIcon} alt="reply" />
            </Reply>
          )}
          <img src={TickIcon} />
          {getUserId() === comment.reviewerId &&
            !defaultComment &&
            comment.type !== 'FOCUS_AREA' &&
            pageMode !== 'CLOSED' && (
              <More
                onClick={handleMoreClick}
                src={DotIcon}
                ref={componentRef}
              />
            )}
          {closeFrame}
          {openEditDeleteTemplate}
        </>
      )}
    </Frame1325>
  );

  function createReviewerFrame() {
    if (isReply) {
      return reviewer;
    }
    if (isShare) {
      if (sharedWithStudents === undefined || sharedWithStudents === null) {
        return 'Shared with class';
      }
      if (sharedWithStudents?.length === 0) {
        return 'Shared with class';
      }
      return (
        <SharedWithStudents>
          Shared with{' '}
          <ShowStudentTotal>
            {sharedWithStudents?.length}{' '}
            {sharedWithStudents?.length <= 1 ? 'student' : 'students'}
          </ShowStudentTotal>
        </SharedWithStudents>
      );
    }
    return reviewer;
  }

  function createCommenterFrame() {
    if (isReply) {
      return avatar;
    }
    if (isShare) {
      return shareIcon;
    }
    return avatar;
  }
}

const SharedWithStudents = styled.div`
  width: 100%;
`;

const ShowStudentTotal = styled.div`
  display: inline;
`;

const Ellipse141 = styled.div`
  position: relative;
  min-width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const Frame1325 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
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

const Reply = styled.div`
  cursor: pointer;
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
  cursor: pointer;
`;

const More = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
`;

const JeddaiIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Tooltip = styled.div`
  position: absolute;
  background: #1e252a;
  color: #ffffff;
  padding: 2px 6px 2px 6px;
  font-family: 'IBM Plex Sans';
  border-radius: 4px;
  top: -15px;
  right: -5px;
  z-index: 2;
`;

const MoreOptionsWrapper = styled.div`
  position: absolute;
  right: -5px;
  top: 10px;
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
  gap: 5px;
  color: #7200e0;
  font-size: 14px;
  font-family: IBM Plex Sans;
  cursor: pointer;
`;

export default ReviewsFrame132532;
