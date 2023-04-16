import { React, useRef, useState } from "react";
import { sortBy } from "lodash";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import Header from "../../Header";
import QuillEditor from "../../QuillEditor";
import styled from "styled-components";
import {
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansNormalChicago13px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
  feedbacksIbmplexsansNormalStack20px,
  IbmplexsansNormalBlack16px,
} from "../../../styledMixins";

import Footer from "../../Footer";
import FooterSmall from "../../FooterSmall";
import SubmitCommentFrameRoot from "../../SubmitCommentFrameRoot";
import HeaderSmall from "../../HeaderSmall";
import { isTabletView } from "../../ReactiveRender";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import Buttons4 from "../Buttons4";
import CommentCard32 from "../CommentCard32";
import ReviewsFrame1320 from "../ReviewsFrame1320";
import "./FeedbackTeacherLaptop.css";
import { getUserName, getUserRole } from "../../../service";

function FeedbackTeacherLaptop(props) {
  const {
    pageMode,
    newCommentFrameRef,
    showNewComment,
    hideNewCommentDiv,
    methods,
    comments,
    studentName,
    students,
    headerProps,
    submission,
    share,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13201Props,
    frame13202Props,
  } = props;

  console.log("pageMode " + pageMode);
  const commentsFrame = sortBy(comments, [
    "questionSerialNumber",
    "range.from",
  ]).map((comment) => {
    const isClosable = pageMode === "REVIEW";
    return (
      <CommentCard32
        reviewer={getUserName()}
        comment={comment}
        onClick={(c) => methods.handleCommentSelected(c)}
        isClosable={isClosable}
        onClose={() => {
          methods.handleDeleteComment(comment.id);
        }}
      />
    );
  });
  const modules = {
    toolbar: pageMode === "DRAFT" || pageMode === "REVISE",
  };
  console.log("modules.toolbar " + modules.toolbar);
  console.log(
    "modules.toolbar2 " + (pageMode === "EDITOR" || pageMode === "REVISE")
  );

  const feedbackFrame = () => {
    if (pageMode === "DRAFT") {
      return <></>;
    }
    console.log("pageMode feedbackFrame" + pageMode);
    return (
      <Frame1331>
        <Frame1322>
          <ReviewsFrame1320>{frame13201Props.children}</ReviewsFrame1320>
          <ReviewsFrame1320 className={frame13202Props.className}>
            {frame13202Props.children}
          </ReviewsFrame1320>
        </Frame1322>
        <>
          {showNewComment ? (
            <>
              <Screen onClick={methods.hideNewCommentDiv}></Screen>
              {newCommentFrame}
            </>
          ) : (
            <Frame1328>{commentsFrame}</Frame1328>
          )}
        </>
      </Frame1331>
    );
  };
  const submitButton = () => {
    if (pageMode === "DRAFT") {
      return (
        <Buttons2
          button="Submit For Review"
          arrowright={true}
          onClickFn={() => methods.handleSaveSubmissionForReview()}
        ></Buttons2>
      );
    }
    if (pageMode === "REVIEW") {
      return (
        <Buttons2
          button="Submit & Next"
          arrowright={true}
          onClickFn={() => methods.handleSubmissionReviewed()}
        ></Buttons2>
      );
    }
    if (pageMode === "REVISE") {
      return (
        <Buttons2
          button="Submit & Next"
          arrowright={true}
          onClickFn={() => methods.handleSubmissionClosed()}
        ></Buttons2>
      );
    }
    return <></>;
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
    return (
      <>
        <Frame1366>
          <Q1PoremIpsumDolo>{questionText}</Q1PoremIpsumDolo>
          <ToremIpsumDolorSi id={"quill_" + question.serialNumber}>
            <QuillEditor
              ref={(editor) =>
                methods.handleEditorMounted(editor, answer.serialNumber - 1)
              }
              comments={comments.filter((comment) => {
                return comment.questionSerialNumber === answer.serialNumber;
              })}
              value={answerValue ? answerValue : ""}
              onSelectionChange={methods.onSelectionChange(answer.serialNumber)}
              // onChangeFn={methods.onChangeFn(question.serialNumber)}
              options={{
                modules: modules,
                theme: "snow",
                readOnly: pageMode === "REVIEW" || pageMode === "CLOSED",
              }}
            ></QuillEditor>
          </ToremIpsumDolorSi>
          {createSaveAnswerButton(question)}
        </Frame1366>
      </>
    );
  });

  const tasksListsDropDown = methods.createTasksDropDown();
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
  const newCommentFrame = (
    <>
      <Frame1329>
        <Frame1406>
          <Frame1326>
            <TypeHere>
              <TextInput
                id="newCommentInput"
                ref={newCommentFrameRef}
                placeholder="Comment here...."
                onKeyPress={methods.handleKeyPress}
              ></TextInput>
            </TypeHere>
          </Frame1326>

          <SubmitCommentFrameRoot
            submitButtonOnClick={methods.handleAddComment}
            cancelButtonOnClick={methods.hideNewCommentDiv}
          />
          {shareWithClassFrame()}
        </Frame1406>
      </Frame1329>
    </>
  );

  const [tabletView, setTabletView] = useState(isTabletView());
  return (
    <div className="feedback-teacher-laptop screen">
      <Frame1388>
        {tabletView ? (
          <HeaderSmall headerProps={headerProps} />
        ) : (
          <Header headerProps={headerProps} />
        )}
        <Frame1387>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <PhysicsThermodyna>{submission.assignment.title}</PhysicsThermodyna>
            <Frame131612>{tasksListsDropDown}</Frame131612>
            {submitButton()}
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>{answerFrames}</Frame1367>
            </Group1225>
            {feedbackFrame()}
          </Frame1368>
          <Frame1370>
            <Frame131612>{tasksListsDropDown}</Frame131612>
            {submitButton()}
          </Frame1370>
        </Frame1386>
        {tabletView ? <FooterSmall /> : <Footer />}
      </Frame1388>
    </div>
  );

  function createSaveAnswerButton(question) {
    if (pageMode === "REVIEW" || pageMode === "CLOSED") return <></>;
    return (
      <SaveDraftButtonContainer>
        <Buttons2
          id={"saveAnswer_" + question.serialNumber}
          button="Save Answer"
          arrowright={true}
          onClickFn={methods.handlesaveAnswer(question.serialNumber)}
        ></Buttons2>
      </SaveDraftButtonContainer>
    );
  }
}

const SaveDraftButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 190%;
`;

const Screen = styled.div`
  position: fixed;
  width: 200vw;
  height: 200vh;
  top: 0;
  left: 0;
  z-index: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;
const CommentContiner = styled.div`
  position: absolute;
  right: 60px;
  top: 200px;
  z-index: 100;
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  padding: 1em;
`;
const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
const Frame131612 = styled.div`
  width: 100%;
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

const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 3em;
  justify-content: flex-start;
`;
const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  left: 0.5em;
  background-color: var(--white);
  opacity: 0.9;
  width: 98%;
  max-height: 300px;
  overflow-y: scroll;
`;

const Ellipse10 = styled.img`
  min-width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}

  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12842 = styled.img`
  position: relative;
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
  max-width: 2000px;
  left: 10%;
`;

const Frame1371 = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.h1`
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
`;

const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
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

const Q1PoremIpsumDolo = styled.p`
  ${feedbacksIbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  width: 100%;
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
  padding: 30px 30px 0px;

  position: sticky;
  top: 0;

  background-color: var(--white);
  border-radius: 16px;
  height: 900px;
  overflow-y: scroll;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1322 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
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
