import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useState } from 'react';
import Header from '../../Header';

import { flatMap, groupBy } from 'lodash';
import Footer from '../../Footer';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import Loader from '../../Loader';
import { isTabletView } from '../../ReactiveRender';
import { answersFrame } from '../AnswersFrame';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import './FeedbackTeacherLaptop.css';
import { contextBar } from './contextBar';
import FeedbackFrame from './feedbackFrame';
import {
  Frame1315,
  Frame1368,
  Frame1386,
  Frame1387,
  Frame1388,
  Screen2,
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

  const [isFeedback, setFeedback] = React.useState(pageMode !== 'DRAFT');
  const [isFocusAreas, setFocusAreas] = React.useState(pageMode === 'DRAFT');
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState(() =>
    createGroupedFocusAreas(submission)
  );

  React.useEffect(() => {
    if (showNewComment) {
      handleTabUpdate(pageMode, setFeedback, setFocusAreas);
    }
  }, [showNewComment]);

  const [isShowResolved, setShowResolved] = useState(false);

  const commentsForSelectedTab = selectTabComments(
    isShowResolved,
    isFocusAreas,
    comments,
    groupedFocusAreaIds
  );

  const handleCheckboxChange = (serialNumber, focusAreaId) => (event) => {
    const isChecked = event.target.checked;
    setGroupedFocusAreaIds((prevState) => {
      if (isChecked) {
        return {
          ...prevState,
          [serialNumber]: [...prevState[serialNumber], focusAreaId],
        };
      } else {
        return {
          ...prevState,
          [serialNumber]: prevState[serialNumber].filter(
            (id) => id !== focusAreaId
          ),
        };
      }
    });
  };

  const [tabletView, setTabletView] = useState(isTabletView());
  return (
    <>
      {loader(showLoader)}
      <div className="feedback-teacher-laptop screen">
        {sharewithclassdialog}
        <Frame1388>
          {header(tabletView, headerProps)}
          {breadcrumbs(submission)}
          {answersAndFeedbacks(
            submission,
            methods,
            isTeacher,
            pageMode,
            labelText,
            quillRefs,
            markingCriteriaFeedback,
            smallMarkingCriteria,
            handleCheckboxChange,
            groupedFocusAreaIds,
            commentsForSelectedTab,
            newCommentSerialNumber,
            setShowResolved,
            showNewComment,
            isShowResolved,
            setFeedback,
            isFeedback,
            isFocusAreas,
            setFocusAreas,
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
const selectTabComments = (
  showResolved,
  isFocusAreas,
  comments,
  groupedFocusAreaIds
) => {
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
function loader(showLoader) {
  return (
    showLoader && (
      <Screen2>
        {' '}
        <Loader />
      </Screen2>
    )
  );
}

function handleTabUpdate(pageMode, setFeedback, setFocusAreas) {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    setFeedback(false);
    setFocusAreas(true);
  } else {
    setFeedback(true);
    setFocusAreas(false);
  }
}

function createGroupedFocusAreas(submission) {
  const flattenedQuestions = flatMap(
    submission.assignment.questions,
    (question) =>
      question.focusAreaIds?.map((focusAreaId) => ({
        serialNumber: question.serialNumber,
        focusAreaId,
      }))
  );

  const groupedBySerialNumber = groupBy(flattenedQuestions, 'serialNumber');
  const grouped = Object.keys(groupedBySerialNumber).reduce(
    (grouped, serialNumber) => {
      grouped[serialNumber] = groupedBySerialNumber[serialNumber].map(
        (item) => item?.focusAreaId
      );
      return grouped;
    },
    {}
  );
  return grouped;
}

function footer(tabletView) {
  return tabletView ? <FooterSmall /> : <Footer />;
}

function answersAndFeedbacks(
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  quillRefs,
  markingCriteriaFeedback,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  commentsForSelectedTab,
  newCommentSerialNumber,
  setShowResolved,
  showNewComment,
  isShowResolved,
  setFeedback,
  isFeedback,
  isFocusAreas,
  setFocusAreas,
  comments,
  newCommentFrameRef,
  share,
  smartAnnotations
) {
  return (
    <Frame1386 id="content">
      {contextBar(submission, methods, isTeacher, pageMode, labelText)}
      <Frame1368 id="assignmentData">
        {answersFrame(
          quillRefs,
          markingCriteriaFeedback,
          smallMarkingCriteria,
          handleCheckboxChange,
          groupedFocusAreaIds,
          pageMode,
          submission,
          commentsForSelectedTab,
          methods
        )}

        <FeedbackFrame
          methods={methods}
          submission={submission}
          newCommentSerialNumber={newCommentSerialNumber}
          commentsForSelectedTab={commentsForSelectedTab}
          setShowResolved={setShowResolved}
          showNewComment={showNewComment}
          isShowResolved={isShowResolved}
          setFeedback={setFeedback}
          isFeedback={isFeedback}
          isFocusAreas={isFocusAreas}
          setFocusAreas={setFocusAreas}
          isTeacher={isTeacher}
          comments={comments}
          pageMode={pageMode}
          newCommentFrameRef={newCommentFrameRef}
          share={share}
          smartAnnotations={smartAnnotations}
        ></FeedbackFrame>
      </Frame1368>
    </Frame1386>
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
        <Breadcrumb text={'Tasks'} link={'/#/tasks'} />
        <Breadcrumb2 assignments={submission.assignment.title} />
      </Frame1315>
    </Frame1387>
  );
}

export default FeedbackTeacherLaptop;
