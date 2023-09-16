import { default as React } from 'react';
import StatusLabel from '../../StatusLabel';
import Buttons2 from '../Buttons2';
import {
  AssignmentTitle,
  AwaitFeedbackContainer,
  ButtonsContainer,
  Ellipse141,
  Frame1371,
  StatusText,
  TitleWrapper,
  Frame131612
} from './style';

function createFocusAreasCount(submission) {
  return submission.assignment.questions
    .flatMap((question) => question.focusAreas)
    .filter((focusArea) => focusArea !== undefined).length;
}

const tasksListsDropDown = (isTeacher, methods) => {
  if (isTeacher) {
    return <Frame131612>{methods.createTasksDropDown()}</Frame131612>;
  }
  return <></>;
};
export function contextBar(
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
) {
  const focusAreasCount = createFocusAreasCount(submission);
  return (
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
                    backgroundColor={submission.assignment?.focusAreas[0].color}
                  />
                ) : (
                  <></>
                )}
                {submission.assignment?.focusAreas &&
                submission.assignment.focusAreas.length >= 2 ? (
                  <Ellipse141
                    backgroundColor={submission.assignment?.focusAreas[1].color}
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
      {!isTeacher && pageMode === 'CLOSED' && submission.status != 'CLOSED' && (
        <AwaitFeedbackContainer id="deleteButton">
          <Buttons2
            button="Download PDF"
            download={true}
            onClickFn={methods.downloadPDF}
          />
        </AwaitFeedbackContainer>
      )}

      {tasksListsDropDown(isTeacher, methods)}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButton(methods, pageMode, isTeacher, submission)}
    </Frame1371>
  );
}
const submitButton = (methods, pageMode, isTeacher, submission) => {
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