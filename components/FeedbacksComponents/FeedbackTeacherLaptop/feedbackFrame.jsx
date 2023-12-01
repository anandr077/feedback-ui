import Switch from '@mui/material/Switch';
import { flatMap, sortBy, uniqBy } from 'lodash';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import { default as React, default as React, default as React } from 'react';
import SmartAnotation from '../../../components/SmartAnnotations';
import { getUserId, getUserRole } from '../../../service';
import FocussedInput from '../../FocussedInput';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import Buttons4 from '../Buttons4';
import CommentCard32 from '../CommentCard32';
import FocusAreasFrame from '../FocusAreasFrame';
import Tabs from '../ReviewsFrame1320';
import './FeedbackTeacherLaptop.css';
import {
  Frame1322,
  Frame1326,
  Frame1328,
  Frame1329,
  Frame1331,
  Frame13311,
  Frame1383,
  Frame1406,
  Label,
  Crown,
  Line6,
  Screen,
  Share,
  TypeHere,
  ExemplarComponent,
  SmartAnnotationsComponent,
  ShortcutList,
} from './style';
import AntSwitch from '../AntSwitch';

const reviewerDefaultComment = {
  reviewerName: 'Jeddle',
  comment: 'Please select text to share feedback',
};

const authorDefaultReviewComment = {
  reviewerName: 'Jeddle',
  comment: 'Feedback will appear here',
};
const reviewerDefaultFocusAreasComment = {
  reviewerName: 'Jeddle',
  comment: 'Focus areas will appear here',
};
const authorDefaultFocusAreasReviewComment = {
  reviewerName: 'Jeddle',
  comment: 'Please select text to highlight focus areas',
};
function FeedbackFrame(props) {
  const {
    methods,
    submission,
    newCommentSerialNumber,
    commentsForSelectedTab,
    setShowResolved,
    showNewComment,
    isShowResolved,
    setFeedback,
    isFeedback,
    isFocusAreas,
    setFocusAreas,
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
    setFeedback,
    isFeedback,
    isFocusAreas,
    setFocusAreas,
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
  setFeedback,
  isFeedback,
  isFocusAreas,
  setFocusAreas,
  isTeacher,
  comments,
  pageMode,
  newCommentFrameRef,
  share,
  smartAnnotations
) {
  return (
    <Frame1331 id="feedbacksFrame">
      <Frame1322>
        <Tabs
          setFeedback={setFeedback}
          isFeedback={isFeedback}
          setFocusAreas={setFocusAreas}
          isFocusAreas={isFocusAreas}
          isTeacher={isTeacher}
          comments={comments}
          showFeedbacks={pageMode !== 'DRAFT'}
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
              {showResolvedToggle(setShowResolved)(
                isFeedback,
                isShowResolved,
                handleShowResolvedToggle
              )}
              {createCommentsFrame(
                methods,
                isTeacher,
                isFeedback,
                commentsForSelectedTab,
                isFocusAreas,
                pageMode,
                submission.studentId
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
  isFeedback,
  commentsForSelectedTab,
  isFocusAreas,
  pageMode,
  studentId
) {
  const visibleComments = createVisibleComments(commentsForSelectedTab);
  if (visibleComments.length === 0) {
    return (
      <CommentCard32
        reviewer="Jeddle"
        comment={createDefaultCommentText(isFocusAreas, pageMode, studentId)}
        onClick={() => {}}
        isTeacher={isTeacher}
        defaultComment={true}
      />
    );
  }
  return sortBy(visibleComments, ['questionSerialNumber', 'range.from']).map(
    (comment) => {
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
            openShareWithStudentDialog={methods.handleShareWithClass}
            convertToCheckedState={methods.convertToCheckedState}
            updateExemplarComment={methods.setUpdateExemplarComment}
            studentId={studentId}
          />
        );
      }
      return isFeedback && comment.status !== 'RESOLVED' ? (
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
          openShareWithStudentDialog={methods.handleShareWithClass}
          convertToCheckedState={methods.convertToCheckedState}
          updateExemplarComment={methods.setUpdateExemplarComment}
          studentId={studentId}
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
          openShareWithStudentDialog={methods.handleShareWithClass}
          convertToCheckedState={methods.convertToCheckedState}
          updateExemplarComment={methods.setUpdateExemplarComment}
          studentId={studentId}
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
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return selectFocusArea(methods, submission, newCommentSerialNumber);
  }
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
          <SmartAnnotationsComponent>
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
            <ShortcutList>
              {shortcutList(methods, smartAnnotations)}
            </ShortcutList>
          </SmartAnnotationsComponent>
          <ExemplarComponent>
            {shareWithClassFrame(methods, share)}
          </ExemplarComponent>
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
          <Crown src="/icons/exemplary_response.png" alt="crown" />
          <Share>Exemplar</Share>
        </Frame13311>
        <Buttons4
          text={'Share as exemplar'}
          onClickFn={methods.handleShareWithClass}
        />
      </Frame1383>
      <Line6 src="/icons/line.png" alt="Line 6" />
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

export const handleShowResolvedToggle = (setShowResolved) => (event) => {
  setShowResolved(event.target.checked);
};
function createVisibleComments(commentsForSelectedTab) {
  return commentsForSelectedTab.filter((comment) => !comment.isHidden);
}
function createDefaultCommentText(isFocusAreas, pageMode, studentId) {
  if (isFocusAreas) {
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      return authorDefaultFocusAreasReviewComment;
    }
    return reviewerDefaultFocusAreasComment;
  }
  if (getUserId() === studentId) {
    return authorDefaultReviewComment;
  }
  return reviewerDefaultComment;
}

export const showResolvedToggle =
  (setShowResolved) =>
  (isFeedback, isShowResolved, handleShowResolvedToggle) => {
    if (isFeedback) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            gap: '10px',
          }}
        >
          <Label>Show resolved</Label>
          {/* Show resolved */}
          <AntSwitch
            checked={isShowResolved}
            onChange={handleShowResolvedToggle(setShowResolved)}
          />
        </div>
      );
    }
    return <></>;
  };

function shortcutList(methods, smartAnnotations) {
  return smartAnnotations.map((smartAnnotation, index) => (
    <SmartAnotation
      key={index}
      smartAnnotation={smartAnnotation}
      onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
    />
  ));
}
export default FeedbackFrame;
