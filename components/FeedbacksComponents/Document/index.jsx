import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useState } from 'react';
import Header from '../../Header';

import Footer from '../../Footer';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import { isTabletView } from '../../ReactiveRender';
import { answersFrameNoMC } from '../AnswersFrameNoMC';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import '../FeedbackTeacherLaptop/FeedbackTeacherLaptop.css';
import { contextBar } from '../FeedbackTeacherLaptop/contextBar';
import {
  Frame1315,
  Frame1368,
  Frame1386,
  Frame1387,
  Frame1388,
} from '../FeedbackTeacherLaptop/style';
import DocumentFeedbackFrame from './DocumentFeedbackFrame';

function Document(props) {
  const {
    newCommentSerialNumber,
    markingCriteriaFeedback,
    smallMarkingCriteria,
    isTeacher,
    showLoader,
    labelText,
    quillRefs,
    pageMode,
    smartAnnotations,
    newCommentFrameRef,
    showNewComment,
    methods,
    comments,
    headerProps,
    submission,
    share,
    sharewithclassdialog,
  } = props;

  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(true);

  const commentsForSelectedTab = selectTabComments(isShowResolved, comments);

  const [tabletView, setTabletView] = useState(isTabletView());
  console.log('smartAnnotations', smartAnnotations);
  return (
    <>
      <div className="feedback-teacher-laptop screen">
        <Frame1388>
          {header(tabletView, headerProps)}
          {breadcrumbs(submission)}
          {answersAndFeedbacks(
            isShowSelectType,
            setShowSelectType,
            submission,
            methods,
            isTeacher,
            pageMode,
            labelText,
            quillRefs,
            null,
            null,
            commentsForSelectedTab,
            newCommentSerialNumber,
            setShowResolved,
            showNewComment,
            isShowResolved,
            null,
            null,
            comments,
            newCommentFrameRef,
            share,
            smartAnnotations
          )}
          {footer(tabletView)}
        </Frame1388>
      </div>
    </>
  );
}
const selectTabComments = (showResolved, comments) => {
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

function handleTabUpdate(pageMode, setFeedback, setFocusAreas) {
  console.log('handleStateChange');
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    setFeedback(false);
    setFocusAreas(true);
  } else {
    setFeedback(true);
    setFocusAreas(false);
  }
}

function footer(tabletView) {
  return tabletView ? <FooterSmall /> : <Footer />;
}

function answersAndFeedbacks(
  isShowSelectType,
  setShowSelectType,
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  quillRefs,
  handleCheckboxChange,
  groupedFocusAreaIds,
  commentsForSelectedTab,
  newCommentSerialNumber,
  setShowResolved,
  showNewComment,
  isShowResolved,
  setFeedback,
  isFeedback,
  comments,
  newCommentFrameRef,
  share,
  smartAnnotations
) {
  return (
    <Frame1386 id="content">
      {contextBar(
        isShowSelectType,
        setShowSelectType,
        submission,
        methods,
        isTeacher,
        pageMode,
        labelText
      )}

      <Frame1368 id="assignmentData">
        {answersFrameNoMC(
          quillRefs,
          pageMode,
          submission,
          commentsForSelectedTab,
          methods
        )}
        <></>
        {documentFeedbackFrame(
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
        )}
      </Frame1368>
    </Frame1386>
  );
}

function documentFeedbackFrame(
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
  if (pageMode === 'DRAFT') {
    return <></>;
  }
  return (
    <DocumentFeedbackFrame
      methods={methods}
      submission={submission}
      newCommentSerialNumber={newCommentSerialNumber}
      commentsForSelectedTab={commentsForSelectedTab}
      setShowResolved={setShowResolved}
      showNewComment={showNewComment}
      isShowResolved={isShowResolved}
      isTeacher={isTeacher}
      comments={comments}
      pageMode={pageMode}
      newCommentFrameRef={newCommentFrameRef}
      share={share}
      smartAnnotations={smartAnnotations}
    ></DocumentFeedbackFrame>
  );
}

function header(tabletView, headerProps) {
  return tabletView ? (
    <HeaderSmall headerProps={headerProps} />
  ) : (
    <Header headerProps={headerProps} />
  );
}

function breadcrumbs(submission) {
  return (
    <Frame1387>
      <Frame1315>
        <Breadcrumb text={'Portfolio'} link={'/#/portfolio'} />
        <Breadcrumb2 assignments={submission.assignment.title} />
      </Frame1315>
    </Frame1387>
  );
}

export default Document;
