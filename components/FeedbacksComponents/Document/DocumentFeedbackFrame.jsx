import Switch from '@mui/material/Switch';
import { flatMap, sortBy, uniqBy } from 'lodash';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import { default as React, default as React, default as React } from 'react';
import SmartAnotation from '../../SmartAnnotations';
import { getUserRole } from '../../../service';
import FocussedInput from '../../FocussedInput';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import Buttons4 from '../Buttons4';
import CommentCard32 from '../CommentCard32';
import Tabs from '../ReviewsFrame1320';
import '../FeedbackTeacherLaptop/FeedbackTeacherLaptop.css';
import {
  Frame1284,
  Frame1322,
  Frame1326,
  Frame1328,
  Frame1329,
  Frame1331,
  Frame13311,
  Frame1383,
  Frame1406,
  Label,
  Line6,
  Screen,
  Share,
  TypeHere,
} from '../FeedbackTeacherLaptop/style';

const reviewerDefaultComment = {
  reviewerName: 'Jeddle',
  comment: 'Please select text to share feedback',
};

const authorDefaultReviewComment = {
  reviewerName: 'Jeddle',
  comment: 'Feedback will appear here',
};

function DocumentFeedbackFrame(props) {
  const {
    methods,
    submission,
    newCommentSerialNumber,
    commentsForSelectedTab,
    setShowResolved,
    showNewComment,
    isShowResolved,
    isTeacher,
    comments,
    pageMode,
    newCommentFrameRef,
    share,
    smartAnnotations,
  } = props;
  return feedbackFrame(
    methods,
    submission,
    newCommentSerialNumber,
    commentsForSelectedTab,
    setShowResolved,
    showNewComment,
    isShowResolved,
    isTeacher,
    comments,
    pageMode,
    newCommentFrameRef,
    share,
    smartAnnotations
  );
}
function feedbackFrame(
  methods,
  submission,
  newCommentSerialNumber,
  commentsForSelectedTab,
  setShowResolved,
  showNewComment,
  isShowResolved,
  isTeacher,
  comments,
  pageMode,
  newCommentFrameRef,
  share,
  smartAnnotations
) {
  console.log('feedbackFrame smartAnnotations', smartAnnotations);
  return (
    <Frame1331 id="feedbacksFrame">
      <Frame1322>
        <Tabs
          isTeacher={isTeacher}
          comments={comments}
          showFeedbacks={pageMode !== 'DRAFT'}
          showFocusAreas={false}
        ></Tabs>
      </Frame1322>
      <Line6 src="/icons/line.png" alt="Line 6" />
      <>
        {showNewComment ? (
          <>
            <Screen onClick={methods.hideNewCommentDiv}></Screen>
            {newCommentFrame(
              pageMode,
              submission,
              newCommentSerialNumber,
              methods,
              newCommentFrameRef,
              share,
              smartAnnotations
            )}
          </>
        ) : (
          <Frame1328>
            <>
              {showResolvedToggle(isShowResolved, setShowResolved)(handleShowResolvedToggle)}
              {createCommentsFrame(
                methods,
                isTeacher,
                commentsForSelectedTab,
                pageMode
              )}
            </>
          </Frame1328>
        )}
      </>
    </Frame1331>
  );
}

export function createCommentsFrame(
  methods,
  isTeacher,
  commentsForSelectedTab,
  pageMode
) {
  const visibleComments = createVisibleComments(commentsForSelectedTab);
  if (visibleComments.length === 0) {
    return (
      <CommentCard32
        reviewer="Jeddle"
        comment={createDefaultCommentText(pageMode)}
        onClick={() => {}}
        isTeacher={isTeacher}
        defaultComment={true}
      />
    );
  }
  return sortBy(visibleComments, ['questionSerialNumber', 'range.from']).map(
    (comment) => {
      console.log('Comment ', comment);
      if (comment.type === 'FOCUS_AREA') {
        return (
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
          />
        );
      }
      return  comment.status !== 'RESOLVED' ? (
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
        />
      ) : (
        <></>
      );
    }
  );
}
const newCommentFrame = (
  pageMode,
  submission,
  newCommentSerialNumber,
  methods,
  newCommentFrameRef,
  share,
  smartAnnotations
) => {
  console.log('newCommentFrame smartAnnotations', smartAnnotations);
  
  return reviewerNewComment(
    methods,
    newCommentFrameRef,
    share,
    pageMode,
    smartAnnotations
  );
};

function reviewerNewComment(
  methods,
  newCommentFrameRef,
  share,
  pageMode,
  smartAnnotations
) {
  if (pageMode === 'CLOSED') return <></>;
  return (
    <>
      <Frame1329>
        <Frame1406>
          <Frame1326>
            <TypeHere>
              <FocussedInput
                id="newCommentInput"
                ref={newCommentFrameRef}
                placeholder="Comment here...."
              ></FocussedInput>
            </TypeHere>
          </Frame1326>

          <SubmitCommentFrameRoot
            submitButtonOnClick={methods.handleAddComment}
            cancelButtonOnClick={methods.hideNewCommentDiv}
          />

          {shortcutList(methods, smartAnnotations)}
        </Frame1406>
      </Frame1329>
    </>
  );
}
function shareWithClassFrame(methods, share) {
  if (getUserRole() === 'STUDENT') return <></>;
  return (
    <>
      <Line6 src="/icons/line.png" alt="Line 6" />
      <Frame1383>
        <Frame13311>
          <Frame1284 src="/icons/share.png" />
          <Share>{share}</Share>
        </Frame13311>
        <Buttons4
          text={'Share with class'}
          onClickFn={methods.handleShareWithClass}
        />
      </Frame1383>
      <Line6 src="/icons/line.png" alt="Line 6" />
    </>
  );
}


export const handleShowResolvedToggle = (setShowResolved) => (event) => {
  setShowResolved(event.target.checked);
};
function createVisibleComments(commentsForSelectedTab) {
  return commentsForSelectedTab.filter((comment) => !comment.isHidden);
}
function createDefaultCommentText(pageMode) {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE' || pageMode === 'CLOSED') {
    return authorDefaultReviewComment;
  }
  return reviewerDefaultComment;
}

export const showResolvedToggle =
  (isShowResolved, setShowResolved) => (handleShowResolvedToggle) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Label>Show resolved</Label>
        {/* Show resolved */}
        <Switch
          checked={isShowResolved}
          onChange={handleShowResolvedToggle(setShowResolved)}
        />
      </div>
    );
  };

function shortcutList(methods, smartAnnotations) {
  console.log('smartAnnotations', smartAnnotations);
  return smartAnnotations.map((smartAnnotation, index) => (
    <SmartAnotation
      key={index}
      smartAnnotation={smartAnnotation}
      onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
    />
  ));
}
export default DocumentFeedbackFrame;
