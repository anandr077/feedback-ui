import { sortBy, uniqBy } from 'lodash';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useState } from 'react';
import Header from '../../Header';

import { flatMap, groupBy } from 'lodash';
import SmartAnotation from '../../../components/SmartAnnotations';
import { getUserRole } from '../../../service';
import FocussedInput from '../../FocussedInput';
import Footer from '../../Footer';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import Loader from '../../Loader';
import { isTabletView } from '../../ReactiveRender';
import StatusLabel from '../../StatusLabel';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import AnswersFrame from '../AnswersFrame';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import Buttons4 from '../Buttons4';
import CommentCard32 from '../CommentCard32';
import FocusAreasFrame from '../FocusAreasFrame';
import Tabs from '../ReviewsFrame1320';
import './FeedbackTeacherLaptop.css';
import {
  AssignmentTitle,
  AwaitFeedbackContainer,
  ButtonsContainer,
  Ellipse141,
  Frame1284,
  Frame1315,
  Frame131612,
  Frame1322,
  Frame1326,
  Frame1328,
  Frame1329,
  Frame1331,
  Frame13311,
  Frame1367,
  Frame1368,
  Frame1371,
  Frame1383,
  Frame1386,
  Frame1387,
  Frame1388,
  Frame1406,
  Group1225,
  Line6,
  Screen,
  Screen2,
  Share,
  StatusText,
  TitleWrapper,
  TypeHere,
  showResolvedToggle
} from './style';

function FeedbackTeacherLaptop(props) {
  const {
    newCommentSerialNumber,
    markingCriteriaFeedback,
    smallMarkingCriteria,
    isTeacher,
    showLoader,
    labelText,
    quillRefs,
    pageMode,
    shortcuts,
    smartAnnotations,
    newCommentFrameRef,
    showNewComment,
    methods,
    comments,
    headerProps,
    submission,
    share,
    sharewithclassdialog,
    MARKING_METHODOLOGY_TYPE,
  } = props;
  const shortcutList = smartAnnotations.map((smartAnnotation, index) => (
    <SmartAnotation
      key={index}
      smartAnnotation={smartAnnotation}
      onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
    />
  ));

  const focusAreasCount = submission.assignment.questions
    .flatMap((question) => question.focusAreas)
    .filter((focusArea) => focusArea !== undefined).length;

  const [isFeedback, setFeedback] = React.useState(pageMode !== 'DRAFT');
  const [isFocusAreas, setFocusAreas] = React.useState(pageMode === 'DRAFT');
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState(() => {
    const flattenedQuestions = flatMap(
      submission.assignment.questions,
      (question) =>
        question.focusAreaIds?.map((focusAreaId) => ({
          serialNumber: question.serialNumber,
          focusAreaId,
        }))
    );

    const groupedBySerialNumber = groupBy(flattenedQuestions, 'serialNumber');
    return Object.keys(groupedBySerialNumber).reduce(
      (grouped, serialNumber) => {
        grouped[serialNumber] = groupedBySerialNumber[serialNumber].map(
          (item) => item?.focusAreaId
        );
        return grouped;
      },
      {}
    );
  });

  React.useEffect(() => {
    if (showNewComment) {
      handleTabChange();
    }
  }, [showNewComment]);

  const [isShowResolved, setShowResolved] = useState(false);
  const handleShowResolvedToggle = (event) => {
    setShowResolved(event.target.checked);
  };

  const commentsForSelectedTab = selectTabComments(
    pageMode,
    isFeedback,
    isShowResolved,
    isFocusAreas,
    comments,
    groupedFocusAreaIds
  );

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
  const feedbackFrame = () => {
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
              {newCommentFrame()}
            </>
          ) : (
            <Frame1328>
              <>
                {showResolvedToggle(
                  isFeedback,
                  isShowResolved,
                  handleShowResolvedToggle
                )}
                {createCommentsFrame()}
              </>
            </Frame1328>
          )}
        </>
      </Frame1331>
    );
  };

  const submitButton = () => {
    if (pageMode === 'DRAFT') {
      return (
        <Buttons2
          button="Submit"
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        ></Buttons2>
      );
    }
    if (pageMode === 'REVIEW') {
      if (isTeacher) {
        return (
          <ButtonsContainer>
            <Buttons2
              button="Request resubmission"
              onClickFn={() =>
                methods.showSubmitPopuphandler('RequestResubmission')
              }
            ></Buttons2>
            <Buttons2
              button="Submit"
              onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
            ></Buttons2>
          </ButtonsContainer>
        );
      } else {
        return (
          <ButtonsContainer>
            <Buttons2
              button="Submit"
              onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
            ></Buttons2>
          </ButtonsContainer>
        );
      }
    }
    if (pageMode === 'REVISE') {
      if (submission.status === 'RESUBMISSION_REQUESTED') {
        return (
          <>
            <Buttons2
              button="Submit"
              onClickFn={() =>
                methods.showSubmitPopuphandler('SubmitForReview')
              }
            ></Buttons2>
          </>
        );
      }
      return (
        <>
          <Buttons2
            button="Mark as complete"
            onClickFn={() => methods.showSubmitPopuphandler('CloseSubmission')}
          ></Buttons2>
        </>
      );
    }
    return <></>;
  };

  const handleCheckboxChange = (serialNumber, focusAreaId) => (event) => {
    const isChecked = event.target.checked;

    console.log('isChecked', isChecked);
    setGroupedFocusAreaIds((prevState) => {
      if (isChecked) {
        return {
          ...prevState,
          [serialNumber]: [...prevState[serialNumber], focusAreaId],
        };
      } else {
        const a = {
          ...prevState,
          [serialNumber]: prevState[serialNumber].filter(
            (id) => id !== focusAreaId
          ),
        };
        console.log('anew', a);
        return a;
      }
    });
  };

  const tasksListsDropDown = () => {
    if (isTeacher) {
      return <Frame131612>{methods.createTasksDropDown()}</Frame131612>;
    }
    return <></>;
  };
  const shareWithClassFrame = () => {
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
  };
  const handleTabChange = () => {
    console.log('handleStateChange');
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      setFeedback(false);
      setFocusAreas(true);
    } else {
      setFeedback(true);
      setFocusAreas(false);
    }
  };
  const newCommentFrame = () => {
    console.log('newCommentFrame');
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      return selectFocusArea();
    }
    return reviewerNewComment();
  };

  function createDefaultCommentText() {
    if (isFocusAreas) {
      if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
        return authorDefaultFocusAreasReviewComment;
      }
      return reviewerDefaultFocusAreasComment;
    }
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      return authorDefaultReviewComment;
    }
    return reviewerDefaultComment;
  }
  function createVisibleComments() {
    return commentsForSelectedTab.filter((comment) => !comment.isHidden);
  }

  function createCommentsFrame() {
    const visibleComments = createVisibleComments();
    if (visibleComments.length === 0) {
      return (
        <CommentCard32
          reviewer="Jeddle"
          comment={createDefaultCommentText()}
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

  function reviewerNewComment() {
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

            {shortcutList}
            {shareWithClassFrame()}
          </Frame1406>
        </Frame1329>
      </>
    );
  }

  function selectFocusArea() {
    console.log('q', submission.assignment.questions);
    const allFocusAreas = flatMap(submission.assignment.questions, (question) =>
      question.focusAreas ? question.focusAreas : []
    );

    console.log('allFocusAreas', allFocusAreas);

    const focusAreas = uniqBy(
      allFocusAreas?.filter((fa) => {
        console.log('id', fa.id);
        return submission.assignment.questions[
          newCommentSerialNumber - 1
        ]?.focusAreaIds?.includes(fa.id);
      }),
      'id'
    );
    const focusAreasFrame = (
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

    return focusAreasFrame;
  }
  const [tabletView, setTabletView] = useState(isTabletView());
  return (
    <>
      {showLoader && (
        <Screen2>
          {' '}
          <Loader />
        </Screen2>
      )}
      <div className="feedback-teacher-laptop screen">
        {sharewithclassdialog}
        <Frame1388>
          {tabletView ? (
            <HeaderSmall headerProps={headerProps} />
          ) : (
            <Header headerProps={headerProps} />
          )}
          <Frame1387>
            <Frame1315>
              <Breadcrumb text={'Tasks'} link={'/#/tasks'} />
              {/* <Breadcrumb2 assignments="Feedback"/> */}
              <Breadcrumb2 assignments={submission.assignment.title} />
            </Frame1315>
          </Frame1387>
          <Frame1386 id="content">
            <Frame1371 id="assignmentTitle">
              <TitleWrapper>
                <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
                <StatusText>
                  <div>{methods.submissionStatusLabel()}</div>
                  {focusAreasCount > 0 && (
                    <div className="focus-area">
                      <div className="image">
                        {submission.assignment?.focusAreas &&
                        submission.assignment.focusAreas.length >= 1 &&
                        focusAreasCount > 0 ? (
                          <Ellipse141
                            backgroundColor={
                              submission.assignment?.focusAreas[0].color
                            }
                          />
                        ) : (
                          <></>
                        )}
                        {submission.assignment?.focusAreas &&
                        submission.assignment.focusAreas.length >= 2 ? (
                          <Ellipse141
                            backgroundColor={
                              submission.assignment?.focusAreas[1].color
                            }
                            style={{ marginLeft: '-8px' }}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="text">{focusAreasCount} focus areas</div>
                    </div>
                  )}
                </StatusText>
              </TitleWrapper>
              {!isTeacher &&
                pageMode === 'CLOSED' &&
                submission.status === 'CLOSED' && (
                  <div id="deleteButton">
                    <Buttons2
                      button="Download PDF"
                      download={true}
                      onClickFn={methods.downloadPDF}
                    />
                  </div>
                )}
              {!isTeacher &&
                pageMode === 'CLOSED' &&
                submission.status != 'CLOSED' && (
                  <AwaitFeedbackContainer id="deleteButton">
                    <Buttons2
                      button="Download PDF"
                      download={true}
                      onClickFn={methods.downloadPDF}
                    />
                  </AwaitFeedbackContainer>
                )}

              {tasksListsDropDown()}
              {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
                <StatusLabel
                  key="statusLabel"
                  id="statusLabel"
                  text={labelText}
                />
              )}
              {submitButton()}
            </Frame1371>
            <Frame1368 id="assignmentData">
              <Group1225 id="answers">
                <Frame1367>
                  <AnswersFrame
                    quillRefs={quillRefs}
                    markingCriteriaFeedback={markingCriteriaFeedback}
                    smallMarkingCriteria={smallMarkingCriteria}
                    handleCheckboxChange={handleCheckboxChange}
                    groupedFocusAreaIds={groupedFocusAreaIds}
                    pageMode={pageMode}
                    submission={submission}
                    commentsForSelectedTab={commentsForSelectedTab}
                    createDebounceFunction={methods.createDebounceFunction}
                    handleChangeText={methods.handleChangeText}
                    onSelectionChange={methods.onSelectionChange}
                    handleMarkingCriteriaLevelFeedback={
                      methods.handleMarkingCriteriaLevelFeedback
                    }
                    handleStrengthsTargetsFeedback={
                      methods.handleStrengthsTargetsFeedback
                    }
                    handleEditorMounted={methods.handleEditorMounted}
                  ></AnswersFrame>
                </Frame1367>
              </Group1225>
              {feedbackFrame()}
            </Frame1368>
          </Frame1386>
          {tabletView ? <FooterSmall /> : <Footer />}
        </Frame1388>
      </div>
    </>
  );
}
const selectTabComments = (
  pageMode,
  isFeedback,
  showResolved,
  isFocusAreas,
  comments,
  groupedFocusAreaIds
) => {
  console.log('selectTabComments', comments);
  console.log('isFocusAreas', isFocusAreas);
  if (isFocusAreas) {
    return comments.map((comment) => {
      if (comment.type !== 'FOCUS_AREA') {
        return { ...comment, isHidden: true };
      }
      const { focusAreaId, questionSerialNumber } = comment;
      const focusAreaIdsForQuestion =
        groupedFocusAreaIds[questionSerialNumber] || [];
      const isHidden = !focusAreaIdsForQuestion.includes(focusAreaId);

      return { ...comment, isHidden };
    });
  }
  if (showResolved) {
    return comments.map((comment) => {
      if (comment.type === 'FOCUS_AREA') {
        return { ...comment, isHidden: true };
      }
      return comment;
    });
  }
  return comments.map((comment) => {
    if (comment.type === 'FOCUS_AREA' || comment.status === 'RESOLVED') {
      return { ...comment, isHidden: true };
    }
    return comment;
  });
};

export default FeedbackTeacherLaptop;
