import Switch from '@mui/material/Switch';
import { sortBy, some, without, union  } from "lodash";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { default as React, default as React, useState } from "react";
import styled from "styled-components";
import {
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansNormalChicago13px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
  feedbacksIbmplexsansNormalStack20px,
  IbmplexsansNormalBlack16px
} from "../../../styledMixins";
import CheckboxList from "../../CheckboxList";
import Header from "../../Header";
import QuillEditor from "../../QuillEditor";

import { getUserId, getUserRole } from "../../../service";
import FocussedInput from "../../FocussedInput";
import Footer from "../../Footer";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import Loader from "../../Loader";
import MarkingCriteriaFeedback from "../../MarkingCriteriaFeedback";
import MarkingCriteriaFeedbackReadOnly from "../../MarkingCriteriaFeedbackReadOnly";
import { isTabletView } from "../../ReactiveRender";
import StatusLabel from "../../StatusLabel";
import SubmitCommentFrameRoot from "../../SubmitCommentFrameRoot";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import Buttons4 from "../Buttons4";
import CommentCard32 from "../CommentCard32";
import FocusAreasFrame from "../FocusAreasFrame";
import Tabs from "../ReviewsFrame1320";
import ShortcutsFrame from "../ShortcutsFrame";
import "./FeedbackTeacherLaptop.css";
import CheckboxGroup from '../../CheckboxGroup';
import CheckboxBordered from '../../CheckboxBordered';
import { groupBy, flatMap } from 'lodash';

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
    newCommentFrameRef,
    showNewComment,
    methods,
    comments,
    headerProps,
    submission,
    share,
    sharewithclassdialog,
  } = props;
  console.log("rerender")

  const [isFeedback, setFeedback] = React.useState(pageMode !== "DRAFT");
  const [isFocusAreas, setFocusAreas] = React.useState(pageMode === "DRAFT");
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState(() => {
    const flattenedQuestions = flatMap(submission.assignment.questions, 
      question => question.focusAreaIds.map(focusAreaId => ({ serialNumber: question.serialNumber, focusAreaId }))
    );
  
    const groupedBySerialNumber = groupBy(flattenedQuestions, 'serialNumber');
    return Object.keys(groupedBySerialNumber).reduce((grouped, serialNumber) => {
      grouped[serialNumber] = groupedBySerialNumber[serialNumber].map(item => item.focusAreaId);
      return grouped;
    }, {});
  });
  
  React.useEffect(() => {
    if(showNewComment) {
      handleTabChange();
    }
  }, [showNewComment]);

  const [isShowResolved, setShowResolved] = useState(false);
  const handleShowResolvedToggle = (event) => {
    setShowResolved(event.target.checked);
  };

  const commentsForSelectedTab = selectTabComments(pageMode, isFeedback, isShowResolved, isFocusAreas, comments, groupedFocusAreaIds)
  
  const modules = {
    toolbar: pageMode === "DRAFT" || pageMode === "REVISE",
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: true,
    },
  };
  const reviewerDefaultComment = {
    reviewerName: "Jeddle",
    comment: "Please select text to share feedback",
  };

  const authorDefaultReviewComment = {
    reviewerName: "Jeddle",
    comment: "Feedback will appear here",
  };
  const reviewerDefaultFocusAreasComment = {
    reviewerName: "Jeddle",
    comment: "Focus areas will appear here",
  };
  const authorDefaultFocusAreasReviewComment = {
    reviewerName: "Jeddle",
    comment: "Please select text to highlight focus areas",
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
            showFeedbacks = {pageMode !== "DRAFT"}
          > 
          </Tabs>
         
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
              {showResolvedToggle(isFeedback, isShowResolved, handleShowResolvedToggle)}
              {createCommentsFrame()}
            </>
          </Frame1328>
        )}

        </>
      </Frame1331>
    );
  };

  const submitButton = () => {
    if (pageMode === "DRAFT") {
      return (
        <Buttons2
          button="Submit"
          onClickFn={() => methods.showSubmitPopuphandler("SubmitForReview")}
        ></Buttons2>
      );
    }
    if (pageMode === "REVIEW") {
      return (
        <ButtonsContainer>
          <CheckboxBordered 
            checked={false}
            onChange={()=>{}}
          />
          <Label>Request</Label>
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler("SubmitReview")}
          ></Buttons2>
        </ButtonsContainer>
      );
    }
    if (pageMode === "REVISE") {
      return (
        <>
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler("SubmitForReview")}
          ></Buttons2>
        </>
      );
    }
    return <></>;
  };
  

  const handleCheckboxChange = (serialNumber, focusAreaId) => event => {
    const isChecked = event.target.checked;

    console.log("isChecked", isChecked)
    setGroupedFocusAreaIds(prevState => {
      if (isChecked) {
        return {
          ...prevState,
          [serialNumber]: [...prevState[serialNumber], focusAreaId]
        };
      } else {
        const a = {
          ...prevState,
          [serialNumber]: prevState[serialNumber].filter(id => id !== focusAreaId)
        }
        console.log("anew", a)
        return a;
      }
    });
  };
    

  
  const isChecked = (serialNumber, focusAreaId) => {
    return !!groupedFocusAreaIds[serialNumber] && groupedFocusAreaIds[serialNumber].includes(focusAreaId);
  };

  const createFocusAreasLabel = (serialNumber, focusAreas) => {
    if (focusAreas === null)
      return <></>
    if (focusAreas === undefined)
      return <></>
    if (focusAreas.length <= 0) {
      return <></>
    }
    const label = <Label>Focus areas : </Label>;
    
    
    const all = focusAreas?.map((fa) => {
      return (
        <FocusAreasLabelContainer>
          <CheckboxBordered 
            checked={isChecked(serialNumber, fa.id)}
            onChange={handleCheckboxChange(serialNumber, fa.id)}
          />
          
          <Ellipse141 backgroundColor={fa.color}></Ellipse141>
          <Label>{fa.title}</Label>
        </FocusAreasLabelContainer>
      );
    });

    return (
      <FocusAreasLabelContainer>
        {label}
        {all}
      </FocusAreasLabelContainer>
    );
  };

  const answerFrames = submission.assignment.questions.map((question) => {
    const newAnswer = {
      serialNumber: question.serialNumber,
      answer: "",
    };

    const answer =
      submission.answers?.find(
        (answer) => answer.serialNumber === question.serialNumber
      ) || newAnswer;
    const questionText = "Q" + question.serialNumber + ". " + question.question;
    const answerValue = answer.answer.answer;
    const debounce = methods.createDebounceFunction(answer);

    return (
      <>
        <Frame1366>
          <QuestionText>{questionText}</QuestionText>
          {question.type === "MCQ" ? (
            <CheckboxList
              submission={submission}
              question={question}
              pageMode={pageMode}
              handleChangeText={methods.handleChangeText}
            />
          ) : (
            <QuillContainer
              onClick={() => {
                methods.onSelectionChange(createVisibleComments(), answer.serialNumber)(
                  quillRefs.current[answer.serialNumber - 1].getSelection()
                );
              }}
              id={"quillContainer_" + submission.id + "_" + answer.serialNumber}
            >
              {createQuill("quillContainer_" + submission.id + "_" + answer.serialNumber, submission, answer, answerValue, debounce)}
            </QuillContainer>
          )}
          {createFocusAreasLabel(question.serialNumber, question.focusAreas)}
          {submission.status === "SUBMITTED" &&
            submission.assignment.questions[answer.serialNumber - 1]
              .markingCriteria?.title &&
            submission.assignment.questions[answer.serialNumber - 1]
              .markingCriteria?.title != "No Marking Criteria" &&
            submission.assignment.questions[answer.serialNumber - 1].type !=
              "MCQ" &&
            submission.reviewerId === getUserId() && (
              <MarkingCriteriaFeedback
                markingCriteria={
                  submission.assignment.questions[answer.serialNumber - 1]
                    .markingCriteria
                }
                small={smallMarkingCriteria}
                questionSerialNumber={answer.serialNumber}
                handleMarkingCriteriaLevelFeedback={
                  methods.handleMarkingCriteriaLevelFeedback
                }
              />
            )}
          {(submission.status === "REVIEWED" || submission.status=== "CLOSED" )&&
            markingCriteriaFeedback?.length > 0 &&
            submission.assignment.questions[answer.serialNumber - 1]
              .markingCriteria?.title != "No Marking Criteria" &&
            submission.assignment.questions[answer.serialNumber - 1].type !=
              "MCQ" && (
              <MarkingCriteriaFeedbackReadOnly
                allmarkingCriteriaFeedback={markingCriteriaFeedback}
                small={smallMarkingCriteria}
                questionSerialNumber={answer.serialNumber}
              ></MarkingCriteriaFeedbackReadOnly>
            )}
        </Frame1366>
      </>
    );
  });

  const tasksListsDropDown = () => {
    if (isTeacher) {
      return <Frame131612>{methods.createTasksDropDown()}</Frame131612>;
    }
    return <></>;
  };
  const shareWithClassFrame = () => {
    if (getUserRole() === "STUDENT") return <></>;
    return (
      <>
        <Line6 src="/icons/line.png" alt="Line 6" />
        <Frame1383>
          <Frame13311>
            <Frame1284 src="/icons/share.png" />
            <Share>{share}</Share>
          </Frame13311>
          <Buttons4
            text={"Share with class"}
            onClickFn={methods.handleShareWithClass}
          />
        </Frame1383>
        <Line6 src="/icons/line.png" alt="Line 6" />
      </>
    );
  };
  const handleTabChange = () => {
    console.log("handleStateChange")
    if (pageMode === "DRAFT" || pageMode === "REVISE") {
      setFeedback(false);
      setFocusAreas(true);
    } else {
      setFeedback(true);
      setFocusAreas(false);
    }
  }
  const newCommentFrame = () => {
    console.log("newCommentFrame")
    if (pageMode === "DRAFT" || pageMode === "REVISE") {
      return selectFocusArea();
    } 
    return reviewerNewComment();
  };
  


  function createDefaultCommentText() {
    if (isFocusAreas ) {
      if (pageMode === "DRAFT" || pageMode === "REVISE") {
        return authorDefaultFocusAreasReviewComment
      }
      return reviewerDefaultFocusAreasComment
    }
    if (pageMode === "DRAFT" || pageMode === "REVISE") {
      return authorDefaultReviewComment
    }
    return reviewerDefaultComment
  }

  function createCommentsFrame() {
    const visibleComments =  createVisibleComments()
    if (visibleComments.length === 0) {
      return <CommentCard32
                    reviewer="Jeddle"
                    comment={createDefaultCommentText()}
                    onClick={() => {}}
                    isTeacher={isTeacher}
                    defaultComment={true}
                  />
    }
    return sortBy(visibleComments, [
      "questionSerialNumber",
      "range.from",
    ]).map((comment) => {
      console.log("Comment ", comment);
      if (comment.type === "FOCUS_AREA") {
        return <CommentCard32
          reviewer={comment.reviewerName}
          comment={comment}
          onClick={(c) => methods.handleCommentSelected(c)}
          isTeacher={isTeacher}
          defaultComment={false}
          pageMode={pageMode}
          onClose={() => {
            methods.handleDeleteComment(comment.id);
          } } />;
      }

      return isFeedback && comment.status !== "RESOLVED" ? (


        <CommentCard32
          reviewer={comment.reviewerName}
          comment={comment}
          onClick={(c) => methods.handleCommentSelected(c)}
          onClose={() => {
            methods.handleDeleteComment(comment.id);
          } }
          handleEditingComment={methods.handleEditingComment}
          deleteReplyComment={methods.handleDeleteReplyComment}
          onResolved={methods.handleResolvedComment}
          handleReplyComment={methods.handleReplyComment}
          isResolved={comment.status}
          showResolveButton={pageMode === "REVISE"}
          isTeacher={isTeacher}
          updateParentComment={methods.updateParentComment}
          updateChildComment={methods.updateChildComment}
          pageMode={pageMode} />
      ) : comment.status === "RESOLVED" ? (
        <CommentCard32
          reviewer={comment.reviewerName}
          comment={comment}
          onClick={(c) => methods.handleCommentSelected(c)}
          onClose={() => {
            methods.handleDeleteComment(comment.id);
          } }
          handleEditingComment={methods.handleEditingComment}
          deleteReplyComment={methods.handleDeleteReplyComment}
          onResolved={methods.handleResolvedComment}
          handleReplyComment={methods.handleReplyComment}
          isResolved={comment.status}
          showResolveButton={false}
          isTeacher={isTeacher}
          updateParentComment={methods.updateParentComment}
          updateChildComment={methods.updateChildComment}
          pageMode={pageMode} />

      ) : (
        <></>
      );
    });
  }

  function createVisibleComments() {
    return commentsForSelectedTab.filter(comment => !comment.isHidden);
  }

  function reviewerNewComment() {
    if (pageMode === "CLOSED")
      return <></>
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
            
            <ShortcutsFrame
              shortcuts={shortcuts}
              handleShortcutAddComment={methods.handleShortcutAddComment}
            />
            {shareWithClassFrame()}
          </Frame1406>
        </Frame1329>
      </>
    );
  }

  function selectFocusArea() {
    console.log("q", submission.assignment.questions)
    const allFocusAreas = flatMap(submission.assignment.questions, 
      question => question.focusAreas
    );
    console.log("allFocusAreas", allFocusAreas)

    const focusAreas = allFocusAreas?.filter((fa) => {
      console.log("id", fa.id)
      return submission.assignment.questions[
        newCommentSerialNumber - 1
      ].focusAreaIds.includes(fa.id);
    });
    const focusAreasFrame = <>
    <Frame1329>
      <Frame1406>
        <FocusAreasFrame
          focusAreas={focusAreas}
          handleAddFocusArea={methods.handleFocusAreaComment}
        />
      </Frame1406>
    </Frame1329>
  </>

    return (focusAreasFrame);
  }
  const [tabletView, setTabletView] = useState(isTabletView());
  return (
    <>
      {showLoader && (
        <Screen2>
          {" "}
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
              <Breadcrumb text={"Tasks"} link={"/#/tasks"} />
              {/* <Breadcrumb2 assignments="Feedback"/> */}
              <Breadcrumb2 assignments={submission.assignment.title} />
            </Frame1315>
          </Frame1387>
          <Frame1386 id="content">
            <Frame1371 id="assignmentTitle">
              <TitleWrapper>
                <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
                <StatusText>
                  <div>{methods.submissionStatusLabel()}</div> |
                  <div className="focus-area">
                    <div className="image">
                      {submission.assignment?.focusAreas &&
                      submission.assignment.focusAreas.length >= 1 ? (
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
                          style={{ marginLeft: "-8px" }}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="text">
                      { 
                      flatMap(submission.assignment.questions, question => question.focusAreas)?.length
                      } focus areas
                    </div>
                  </div>
                </StatusText>
              </TitleWrapper>
              {!isTeacher &&
                pageMode === "CLOSED" &&
                submission.status === "CLOSED" && (
                  <div id="deleteButton">
                    <Buttons2
                      button="Download PDF"
                      download={true}
                      onClickFn={methods.downloadPDF}
                    />
                  </div>
                )}
              {!isTeacher &&
                pageMode === "CLOSED" &&
                submission.status != "CLOSED" && (
                  <AwaitFeedbackContainer id="deleteButton">
                    <Buttons2
                      button="Download PDF"
                      download={true}
                      onClickFn={methods.downloadPDF}
                    />
                  </AwaitFeedbackContainer>
                )}
              {isTeacher &&
                pageMode === "CLOSED" &&
                submission.status != "CLOSED" && (
                  <AwaitFeedbackContainer id="deleteButton">
                    <StatusLabel
                      key="statusLabel"
                      id="statusLabel"
                      text="Awaiting Submission"
                    />
                  </AwaitFeedbackContainer>
                )}
              {tasksListsDropDown()}
              {(pageMode === "DRAFT" || pageMode === "REVISE") && (
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
                <Frame1367>{answerFrames}</Frame1367>
              </Group1225>
              {feedbackFrame()}
            </Frame1368>
          </Frame1386>
          {tabletView ? <FooterSmall /> : <Footer />}
        </Frame1388>
      </div>
    </>
  );

  function createQuill(containerName, submission, answer, answerValue, debounce) {
    return (
      <QuillEditor
        id={"quillEditor_" + submission.id + "_" + answer.serialNumber}
        ref={(editor) =>
          methods.handleEditorMounted(editor, answer.serialNumber - 1)
        }
        comments={commentsForSelectedTab?.filter((comment) => {
          return comment.questionSerialNumber === answer.serialNumber;
        })}
        value={answerValue ? answerValue : ""}
        options={{
          modules: modules,
          theme: "snow",
          readOnly: pageMode === "REVIEW" || pageMode === "CLOSED",
        }}
        debounceTime={debounce.debounceTime}
        onDebounce={debounce.onDebounce}
        containerName={containerName}
      ></QuillEditor>
    );
  }
}
const selectTabComments=(pageMode, isFeedback, showResolved, isFocusAreas, comments, groupedFocusAreaIds) => {
  if (isFocusAreas) {
    return comments.map(comment => {
      if (comment.type !== "FOCUS_AREA") {
        return { ...comment, isHidden: true };
      }
      const { focusAreaId, questionSerialNumber } = comment;
      const focusAreaIdsForQuestion = groupedFocusAreaIds[questionSerialNumber] || [];
      const isHidden = !focusAreaIdsForQuestion.includes(focusAreaId);
      return { ...comment, isHidden };
    });
  }
  if (showResolved) {
    return comments.map(comment=>{
      if (comment.type === "FOCUS_AREA") {
        return {...comment, isHidden: true}
      }
      return comment
    })
  }
  return comments.map(comment=>{
    if ( comment.type === "FOCUS_AREA" || comment.status === "RESOLVED") {
      return {...comment, isHidden: true}
    }
    return comment
  })
}

function showResolvedToggle(isFeedback, isShowResolved, handleShowResolvedToggle) {
  if (isFeedback) { 
    return <div style={{
      display:"flex", 
      flexDirection: "row", 
      alignItems:"center",
      alignContent:"center"
      }}>
      <Label>Show resolved</Label>
      {/* Show resolved */}
      <Switch
        checked={isShowResolved} onChange={handleShowResolvedToggle} />
    </div>;
  }
  return <></>
}
const AwaitFeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  align-self: stretch;
  gap: 25px;
  line-height: normal;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  align-self: stretch;
  gap: 25px;
  line-height: normal;
`;

const FocusAreasLabelContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;
const Ellipse141 = styled.div`
  position: relative;
  min-width: 15px;
  height: 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;
const Label = styled.div`
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  gap: 10px;
`;
const StatusText = styled.div`
  // width: 714px;
  // height: 21px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.025em;

  color: #979797;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const RoundedContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 24.5px;
  border: 1px solid #e6ccff;
  background: #f1e7ff;
`;

const Screen = styled.div`
  position: fixed;
  width: 200vw;
  height: 200vh;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Screen2 = styled.div`
  position: fixed;
  width: 200vw;
  height: 200vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1;
`;

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
const Frame131612 = styled.div`
  max-width: 300px;
  display: flex;
`;
const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;
const OptionsRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;



const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1387 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  width: 80%;
  left: 10%;
  position: sticky;
`;

const Frame1371 = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white-pointer);
  padding: 20px;
`;

const AssignmentTitle = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1369 = styled.div`
  display: flex;
  width: 581px;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Frame1368 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 70%;
`;

const Frame1367 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 30px 0px;
  background-color: var(--white);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
  // height: 550px;
  // overflow-y: scroll;
`;

const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const QuestionText = styled.p`
  ${feedbacksIbmplexsansMediumPersianIndigo20px}
  font-size: 20px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuillContainer = styled.p`
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  width: 100%;
  z-index: 1
`;

const Group1307 = styled.div`
  position: absolute;
  top: 74px;
  left: 60px;
  width: 793px;
  height: 51px;
`;

const OverlapGroup = styled.div`
  position: relative;
  height: 51px;
`;

const Rectangle546 = styled.div`
  position: absolute;
  width: 620px;
  height: 26px;
  top: 0;
  left: 173px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle547 = styled.div`
  position: absolute;
  width: 262px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Group1308 = styled.div`
  position: absolute;
  top: 309px;
  left: 60px;
  width: 808px;
  height: 76px;
  mix-blend-mode: multiply;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  height: 76px;
`;

const Rectangle5471 = styled.div`
  position: absolute;
  width: 808px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle548 = styled.div`
  position: absolute;
  width: 82px;
  height: 26px;
  top: 50px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;

  height: 1px;
  object-fit: cover;
`;

const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px;

  position: sticky;
  top: 100px;

  background-color: var(--white);
  border-radius: 16px;
  height: 550px;
  overflow-y: scroll;
  box-shadow: 0px 4px 22px #2f1a720a;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Frame1322 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Frame1329 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1406 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 8px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const TypeHere = styled.div`
  ${feedbacksIbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
`;
const TextInput = styled.input`
  ${feedbacksIbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;
const IconsaxLinearmicrophone2 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
`;

const Line261 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const Frame1383 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Share = styled.div`
  ${feedbacksIbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FeedbackWithCommentsFrame = styled.div`
  position: sticky;
`;
const Frame1328 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Frame1370 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${feedbacksIbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;



export default FeedbackTeacherLaptop;
