import React, { default as React, default as React, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { saveAnswer, submitAssignment } from "../../service.js";
import { IbmplexsansNormalChicago14px } from "../../styledMixins";
import "../AssignmentTheory/_textEditor.scss";
import Buttons2 from "../Buttons2";
import FooterSmall from "../FooterSmall";
import HeaderSmall from "../HeaderSmall";
import SubmissionFrame1399 from "../SubmissionFrame1399";
import SubmissionFrame1400 from "../SubmissionFrame1400";
import "./AssignmentTheoryTablet.css";

const taskheaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: true,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "",
    selected: false,
    redirect: "/submissions",
  },
};

function AssignmentTheoryTablet(props) {
  const { submission, question, answer } = props;

  console.log("answer " + JSON.stringify(answer?.answer?.answer ?? ""));

  const [value, setValue] = useState(answer?.answer?.answer ?? "");

  const saveAnswerFn = () => {
    saveAnswer(submission.id, question.serialNumber, {
      answer: value,
    }).then((_) => {
      const nextQuestion =
        question.serialNumber == submission.assignment.questions.length
          ? question.serialNumber
          : question.serialNumber + 1;
        window.location.href =
          "/submissions/" +
          submission.id +
          "?serialNumber=" +
          nextQuestion;
    });
  };

  const submitAssignmentFn = () => {
    submitAssignment(submission.id).then((_) => {
      window.location.href = "/dashboard";
    });
  };

  const previousAnswerFn = () => {
    window.location.href =
        "/submissions/" +
        submission.id +
        "?serialNumber=" +
        (question.serialNumber - 1);
  };
  const showPrevious = question.serialNumber > 1;
  const showNext =
    question.serialNumber < submission.assignment.questions.length;
  const showSubmit = submission.allAnswersSaved;
  const showSaveAnswer =
    question.serialNumber == submission.assignment.questions.length;

  return (
    <div className="assignment-theory-tablet screen">
      <HeaderSmall headerProps={taskheaderProps} />
      <Frame1401>
        <Frame1311>
          <SubmissionFrame1399 label={submission.assignment.title} />
          <SubmissionFrame1400 label={question.question} />
          <Frame1396>
            <Frame1398>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="ql-editor"
              />

              <Frame13111>
                {showPrevious ? (
                  <Buttons2
                    type="previous"
                    add="icons/arrowleft.png"
                    label="Previous"
                    onClickFn={previousAnswerFn}
                  />
                ) : (
                  <></>
                )}
                {showNext ? (
                  <Buttons2
                    add={"/icons/arrowright.png"}
                    label="Next"
                    onClickFn={saveAnswerFn}
                  />
                ) : (
                  <></>
                )}
                {showSaveAnswer ? (
                  <Buttons2
                    add={"/icons/arrowright.png"}
                    label="Save Answer"
                    onClickFn={saveAnswerFn}
                  />
                ) : (
                  <></>
                )}
              </Frame13111>
            </Frame1398>
            <Frame12091>
              <Line7 src="/img/line-7-2.png" alt="Line 7" />
              <Frame12092>
                <Q124>
                  Q {question.serialNumber}/
                  {submission.assignment.questions.length}
                </Q124>
              </Frame12092>

              {showSubmit ? (
                <Buttons2
                  add={"/icons/arrowright.png"}
                  label="Submit Assignment"
                  onClickFn={submitAssignmentFn}
                />
              ) : (
                <></>
              )}
            </Frame12091>
          </Frame1396>
        </Frame1311>
      </Frame1401>
      <FooterSmall />
    </div>
  );
}

const Frame13111 = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
`;

const Frame1401 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 50px;
  position: relative;
  align-self: stretch;
`;

const Frame1311 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 37px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1396 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1398 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame12091 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0px 0px 20px;
  width: 950px;
  background-color: var(--white);
  border-radius: 0px 0px 16px 16px;
  width: 100%;
`;
const Line7 = styled.img`
  position: relative;
  align-self: stretch;

  height: 1px;
  margin-top: -1px;
  object-fit: cover;
`;

const Frame12092 = styled.div`
  ${IbmplexsansNormalChicago14px}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Q124 = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default AssignmentTheoryTablet;
