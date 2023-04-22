import React, { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import CheckboxList from "../../CheckboxList";

import {
  feedbacksIbmplexsansBoldShark36px,
  IbmplexsansMediumPersianIndigo20px,
  IbmplexsansNormalBlack16px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalBlack14px,
} from "../../../styledMixins";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import QuillEditor from "../../QuillEditor";
import "./FeedbackTeacherMobile.css";
import CheckBox from "@mui/material/CheckBox";
import { taskHeaderProps } from "../../../utils/headerProps.js";

function FeedbackTeacherMobile(props) {
  const {
    labelText,
    quillRefs,
    pageMode,
    methods,
    comments,
    studentName,
    students,
    submission,
    breadcrumb21Props,
    breadcrumb22Props,
  } = props;
  const modules = {
    toolbar: false,
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
          {question.type === "MCQ" ? (
            <CheckboxList
              submission={submission}
              question={question}
              pageMode={pageMode}
              handleChangeText={methods.handleChangeText}
            />
          ) : (
            <ToremIpsumDolorSi id={"quill_" + question.serialNumber}>
              <QuillEditor
                ref={(editor) =>
                  methods.handleEditorMounted(editor, answer.serialNumber - 1)
                }
                comments={comments.filter((comment) => {
                  return comment.questionSerialNumber === answer.serialNumber;
                })}
                value={answerValue ? answerValue : ""}
                onSelectionChange={methods.onSelectionChange(
                  answer.serialNumber
                )}
                // onChangeFn={methods.onChangeFn(question.serialNumber)}
                options={{
                  modules: modules,
                  theme: "snow",
                  readOnly: pageMode === "REVIEW" || pageMode === "CLOSED",
                }}
                debounceTime={0}
                onDebounce={console.log}
              ></QuillEditor>
            </ToremIpsumDolorSi>
          )}
        </Frame1366>
      </>
    );
  });

  const tasksListsDropDown = methods.createTasksDropDown();

  return (
    <div className="feedback-teacher-mobile screen">
      <Frame1388>
        <Frame1387>
          <HeaderSmall headerProps={taskHeaderProps} />
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <TitleWrapper>
              <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
              <StatusText>{methods.submissionStatusLabel()}</StatusText>
            </TitleWrapper>
            <Frame1369>
              <Frame131612>{tasksListsDropDown}</Frame131612>
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>
                <Frame1366>{answerFrames}</Frame1366>
              </Frame1367>
            </Group1225>
          </Frame1368>
          <Frame1370>
            <Frame131612>{tasksListsDropDown}</Frame131612>
          </Frame1370>
        </Frame1386>
      </Frame1388>
      <FooterSmall />
    </div>
  );
}

const AssignmentTitle = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;
const StatusText = styled.p`
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

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
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
const Frame131612 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;

  cursor: pointer;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;

const OptionText = styled.div`
  ${IbmplexsansNormalBlack14px}

  flex: 1;
  letter-spacing: 0;
  line-height: normal;
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

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 223.75px;
  height: 37.4892578125px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 25px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const PhysicsThermodyna = styled.h1`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  color: var(--dark-purple);
  font-size: var(--font-size-l);
  letter-spacing: -0.6px;
  line-height: normal;
  font-size: 32px;
`;

const Frame1369 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  width: 100%;
`;

const Frame1316 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
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
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Group1225 = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

const Frame1367 = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 20px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Q1PoremIpsumDolo = styled.p`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1307 = styled.div`
  position: absolute;
  top: 99px;
  left: 506px;
  width: 77px;
  height: 26px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 350px;
  height: 1px;
  object-fit: cover;
`;

const Frame1370 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const Frame1380 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default FeedbackTeacherMobile;
