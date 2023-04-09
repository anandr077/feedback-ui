import { React, useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import { sortBy } from "lodash";
import Header from "../../Header";

import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getCommentsForSubmission,
  addNewComment,
  markAssignmentReviewed as markSubmsissionReviewed,
} from "../../../service";
import {
  addNewComment,
  getCommentsForSubmission,
  markAssignmentReviewed as markSubmsissionReviewed,
} from "../../../service";
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

import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import Buttons4 from "../Buttons4";
import CommentCard32 from "../CommentCard32";
import ReviewsFrame129532 from "../ReviewsFrame129532";
import ReviewsFrame1316 from "../ReviewsFrame1316";
import ReviewsFrame1320 from "../ReviewsFrame1320";
import "./FeedbackTeacherLaptop.css";
import Footer from "../../Footer";
import "./_feedbacksEditor.scss";
import { isTabletView } from "../../ReactiveRender";
import HeaderSmall from "../../HeaderSmall";
import FooterSmall from "../../FooterSmall";

function FeedbackTeacherLaptop(props) {
  const {
    headerProps,
    submission,
    frame1284,
    line261,
    line263,
    share,
    line27,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13201Props,
    frame13202Props,
  } = props;
  const quillRefs = useRef([]);
  const feedbacksFrameRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function handleClickOutside(event) {
    if (
      feedbacksFrameRef.current &&
      !feedbacksFrameRef.current.contains(event.target)
    ) {
      setShowDiv(false);
    }
  }
  const handleEditorMounted = (editor, index) => {
    quillRefs.current[index] = editor;
  };
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
      setShowNewComment(false);
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
          </Frame1326>
        </Frame1406>
        <Line261 src={line263} alt="Line 26" />
        <Frame1383>
          <Frame13311>
            <Frame1284 src="/icons/share.png" />
            <Share>{share}</Share>
          </Frame13311>
          <Buttons4 />
        </Frame1383>
        <Line261 src={line27} alt="Line 27" />
      </Frame1329>
    </>
  );

  function handleCommentSelected(comment) {
    const range = {
      index: comment.range.from,
      length: comment.range.to - comment.range.from,
    };
    console.log(range);
    const quill =
      quillRefs.current[comment.questionSerialNumber - 1].getEditor();

    var div = document.getElementById("quill_" + comment.questionSerialNumber);
    div.scrollIntoView({ behavior: "smooth" });
    quill.formatText(range.index, range.length, "background", "yellow");
  }

  const highlightSelection = (range, serialNumber) => {
    const quill = quillRefs.current[serialNumber - 1].getEditor();
    quill.formatText(range.index, range.length, "background", "red");
  };
  const commentsFrame = sortBy(comments, [
    "questionSerialNumber",
    "range.from",
  ]).map((comment) => {
    return (
      <CommentCard32
        comment={comment}
        onClick={(c) => handleCommentSelected(c)}
      />
    );
  });
  const modules = {
    toolbar: false,
  };

  const answerFrames = submission.answers.map((answer) => {
    return (
      <>
        <Frame1366>
          <Q1PoremIpsumDolo>
            {submission.assignment.questions[answer.serialNumber - 1].question}
          </Q1PoremIpsumDolo>
          <ToremIpsumDolorSi>
            <ReactQuill
              ref={(editor) =>
                handleEditorMounted(editor, answer.serialNumber - 1)
              }
              id={"quill_" + answer.serialNumber}
              key={"quill_" + answer.serialNumber}
              theme="snow"
              value={answer.answer.answer}
              className="ql-editor-feedbacks"
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
                  highlightSelection(range, answer.serialNumber);
                }
              }}
            />
          </ToremIpsumDolorSi>
        </Frame1366>
        <Line26 src={line261} alt="Line 26" />
      </>
    );
  });

  const [tabletView, setTabletView] = useState(isTabletView());

  return (
    <div className="feedback-teacher-laptop screen">
      <Frame1388>
        <Frame1387>
          {tabletView ? <HeaderSmall headerProps={headerProps}/> : <Header headerProps={headerProps} />}
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
            <ReviewsFrame129532 submission={submission}></ReviewsFrame129532>
              <Buttons2
                button="Submit & Next"
                arrowright={true}
                onClickFn={() => handleSubmissionReviewed()}
              ></Buttons2>
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
            <Frame131612>
              <ReviewsFrame129532 submission={submission}></ReviewsFrame129532>
            </Frame131612>
            <Buttons2
              button="Submit & Next"
              arrowright={true}
              onClickFn={() => handleSubmissionReviewed()}
            ></Buttons2>
          </Frame1370>
        </Frame1386>
      </Frame1388>
      {tabletView ? <FooterSmall /> : <Footer />}
    </div>
  );
}

const Frame131612 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 300px;
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
  //position: relative;
  position: sticky;
  top: 0;
  // align-self: stretch;
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
  height: 500px;
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
