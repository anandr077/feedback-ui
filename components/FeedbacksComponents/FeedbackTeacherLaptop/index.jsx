import { React, useState, useEffect } from "react";
import ReactQuill from "react-quill";

import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getCommentsForSubmission,
  addNewComment,
  markAssignmentReviewed as markSubmsissionReviewed,
} from "../../../service";
import {
  feedbacksIbmplexsansNormalStack20px,
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansNormalChicago13px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
} from "../../../styledMixins";
import "../../AssignmentTheory/_textEditor.scss";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import Buttons4 from "../Buttons4";
import CommentCard32 from "../CommentCard32";
import ReviewsFrame129532 from "../ReviewsFrame129532";
import ReviewsFrame1316 from "../ReviewsFrame1316";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import ReviewsFrame131722 from "../ReviewsFrame131722";
import ReviewsFrame1320 from "../ReviewsFrame1320";
import ReviewsFrame1332 from "../ReviewsFrame1332";
import ReviewsFrame1333 from "../ReviewsFrame1333";
import ReviewsFrame1384 from "../ReviewsFrame1384";
import ReviewsFrame622 from "../ReviewsFrame622";
import TeacherDashboardHeader22 from "../TeacherDashboardHeader22";
import "./FeedbackTeacherLaptop.css";

function FeedbackTeacherLaptop(props) {
  const {
    submission,
    physicsThermodyna,
    frame1284,
    q1PoremIpsumDolo,
    line261,
    line262,
    typeHere,
    iconsaxLinearMicrophone2,
    line263,
    iconsaxLinearShare,
    share,
    line27,
    x2021JeddleAllRightsReserved,
    teacherDashboardHeader2Props,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13172Props,
    frame136641Props,
    frame136642Props,
    frame13201Props,
    frame13202Props,
    frame1333Props,
    commentCard31Props,
    commentCard32Props,
    commentCard33Props,
    commentCard34Props,
    frame1317Props,
  } = props;
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (comments.length === 0) {
      getCommentsForSubmission(submission.id).then((result) => {
        if (result) {
          setComments(result);
        }
      });
    }
  }, [comments]);
  const [newCommentValue, setNewCommentValue] = useState("");

  function handleInputChange(event) {
    setNewCommentValue(event.target.value);
  }

  function handleSubmissionReviewed() {
    markSubmsissionReviewed(submission.id).then(
      (_) => (window.location.href = "/")
    );
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      // Do something here, for example, call a function or submit a form
      addNewComment(submission.id, {
        questionSerialNumber: newCommentSerialNumber,
        feedback: newCommentValue,
        range: selectedRange,
      }).then((response) => {
        if (response) {
          setComments([...comments, response]);
          setNewCommentValue("");
        }
      });
    }
  }

  const feedbackFrame = (
    <>
      <Frame1329>
        <Frame1406>
          <Frame1326>
            <TypeHere>
              <TextInput
                placeholder="Comment here...."
                value={newCommentValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              ></TextInput>
            </TypeHere>
            <IconsaxLinearmicrophone2
              src={iconsaxLinearMicrophone2}
              alt="Iconsax/Linear/microphone2"
            />
          </Frame1326>
        </Frame1406>
        <Line261 src={line263} alt="Line 26" />
        <Frame1383>
          <Frame13311>
            <Frame1284 src={iconsaxLinearShare} alt="Iconsax/Linear/share" />
            <Share>{share}</Share>
          </Frame13311>
          <Buttons4 />
        </Frame1383>
        <Line261 src={line27} alt="Line 27" />
      </Frame1329>
    </>
  );

  const commentsFrame = comments.map((comment) => {
    return <CommentCard32 horemIpsumDolorSi={comment.comment} />;
  });
  const modules = {
    toolbar: false,
  };
  const answerFrames = submission.answers.map((answer) => {
    return (
      <>
        <Frame1366>
          <Q1PoremIpsumDolo>{answer.serialNumber}</Q1PoremIpsumDolo>
          <ToremIpsumDolorSi>
            <ReactQuill
              theme="snow"
              value={answer.answer.answer}
              className="ql-editor"
              readOnly={true}
              modules={modules}
              onChangeSelection={(range, source, editor) => {
                if (range && range.length > 0) {
                  console.log(range);
                  setNewCommentSerialNumber(answer.serialNumber);
                  setShowNewComment(true);
                  setSelectedRange({
                    from: range.index,
                    to: range.index + range.length,
                  });
                }
              }}
            />
          </ToremIpsumDolorSi>
        </Frame1366>
        <Line26 src={line261} alt="Line 26" />
      </>
    );
  });
  return (
    <div className="feedback-teacher-laptop screen">
      <Frame1388>
        <Frame1387>
          <TeacherDashboardHeader22
            logo={teacherDashboardHeader2Props.logo}
            navElement1Props={teacherDashboardHeader2Props.navElement1Props}
            navElement2Props={teacherDashboardHeader2Props.navElement2Props}
            navElement3Props={teacherDashboardHeader2Props.navElement3Props}
            frame4Props={teacherDashboardHeader2Props.frame4Props}
          />
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <PhysicsThermodyna>{submission.assignment.title}</PhysicsThermodyna>
            <Frame1369>
              <Link to="/students-list">
                <Frame13161>
                  <ReviewsFrame129532 />
                  <Frame1284 src={frame1284} alt="Frame 1284" />
                </Frame13161>
              </Link>
              <Buttons2
                arrowleft={true}
                button="Previous"
                onClickFn={() => alert("clicked")}
              ></Buttons2>
              <Buttons2
                button="Submit & Next"
                arrowright={true}
                onClickFn={() => handleSubmissionReviewed()}
              ></Buttons2>
              {/* <ReviewsFrame131722
                buttonsProps={frame13172Props.buttonsProps}
                buttons2Props={frame13172Props.buttons2Props}
              /> */}
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>{answerFrames}</Frame1367>
            </Group1225>
            <Frame1331>
              <Frame1322>
                <ReviewsFrame1320>{frame13201Props.children}</ReviewsFrame1320>
                <ReviewsFrame1320 className={frame13202Props.className}>
                  {frame13202Props.children}
                </ReviewsFrame1320>
              </Frame1322>
              <>
                {showNewComment ? feedbackFrame : <></>}
                <Frame1328>{commentsFrame}</Frame1328>
              </>
            </Frame1331>
          </Frame1368>
          <Frame1370>
            <ReviewsFrame1316 />
            <ReviewsFrame1317
              buttonsProps={frame1317Props.buttonsProps}
              buttons2Props={frame1317Props.buttons2Props}
            />
          </Frame1370>
        </Frame1386>
      </Frame1388>
      <Frame6>
        <X2021JeddleAllRightsReserved>
          {x2021JeddleAllRightsReserved}
        </X2021JeddleAllRightsReserved>
        <ReviewsFrame622 />
      </Frame6>
    </div>
  );
}

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
`;

const Frame1371 = styled.div`
  display: flex;
  align-items: flex-start;
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
  min-width: 949px;
  // height: 982px;
  flex-direction: column;
`;

const Frame1367 = styled.div`
  display: flex;
  min-width: 949px;
  // height: 982px;
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
  flex-direction: row;
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
  width: 900px;
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
  min-width: 949px;
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
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
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
  min-width: 279px;
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

const Frame1328 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
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
