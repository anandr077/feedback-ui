import React, { useContext, useRef } from 'react';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import {
  HeaderRightSection,
  Heading,
  HeadingTitle,
  OverallFeedbackContainer,
} from './style';
import QuestionIcon from '../../../static/img/question-mark.svg';
import { isStringNull } from '../../../utils/strings';
import ToggleArrow from './ToggleArrow';
import NewOverallFeedback from '../../NewOverallFeedback';
import { GreenTickComponent } from '../../GreenTick';
import {
  getOverallComment,
  showOverAllFeedback,
} from '../FeedbacksRoot/functions';
import { getUserId } from '../../../userLocalDetails';
import { isShowOverallFeedback } from '../FeedbacksRoot/rules';

function OverallFeedback({
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
  submission,
  QuestionIndex,
}) {
  const { overallComments } = useContext(FeedbackContext);
  const overallFeedbackRef = useRef(null);
  const userId = getUserId();
  const overallComment = getOverallComment(overallComments, QuestionIndex);
  return (
    isShowOverallFeedback(pageMode, overallComment) && (
      <>
        <Heading>
          <HeadingTitle>
            Overall Feedback
            <img src={QuestionIcon} />
          </HeadingTitle>
          <HeaderRightSection>
            <GreenTickComponent
              ShowGreen={!isStringNull(overallComment?.comment)}
            />

            <ToggleArrow
              refProp={overallFeedbackRef}
              toggleSection={showOverAllFeedback}
            />
          </HeaderRightSection>
        </Heading>
        <OverallFeedbackContainer ref={overallFeedbackRef}>
          <NewOverallFeedback
            pageMode={pageMode}
            addOverallFeedback={addOverallFeedback}
            serialNumber={QuestionIndex + 1}
            overallComment={overallComment}
            updateOverAllFeedback={updateOverAllFeedback}
            reviewer={submission.reviewerId}
            userId={userId}
          />
        </OverallFeedbackContainer>
      </>
    )
  );
}

export default OverallFeedback;
