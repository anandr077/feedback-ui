import { default as React, default as React, useState } from "react";
import styled from "styled-components";
import Footer from "../../Footer";
import HeaderSmall from "../../HeaderSmall";
import Tabs from "../../Tabs";
import TaskCardContainer from "../../TaskCardContainer";
import TaskFrame1304 from "../../TaskFrame1304";

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../../styledMixins";
import { assignmentsHeaderProps } from "../../../utils/headerProps.js";
import "./TeacherTasksStudentTablet.css";
import Buttons from "../../Classes/Buttons";

function TeacherTasksStudentTablet(props) {
  const { drafts, awaitingSubmissions, feedbacks } = props;

  const draftsFrames = createTasksFrame("Drafts", drafts, true, false, false);
  const awaitingSubmissionsFrames = createTasksFrame(
    "Awaiting submissions",
    awaitingSubmissions,
    false,
    true,
    false
  );
  const feedbacksFrames = createTasksFrame(
    "Feedback",
    feedbacks,
    false,
    false,
    true
  );
  const [tasksFrame, setTasksFrame] = useState(draftsFrames);

  return (
    <div className="tasks-student-tablet screen">
      <HeaderSmall headerProps={assignmentsHeaderProps} />
      <Frame1365>
        <Frame1307>
          <PageTitle>Tasks</PageTitle>
          <ButtonContainer>
            <Buttons link="#tasks/new" />{" "}
          </ButtonContainer>
          {/* <TaskFrame1304 /> */}
        </Frame1307>
        {tasksFrame}
      </Frame1365>
      <Footer />
    </div>
  );

  function createTasksFrame(
    title,
    tasks,
    isOutstanding,
    isInProgress,
    isOverdue
  ) {
    return (
      <>
        <Frame1364>
          <Frame1211>
            <Tabs
              text={"Drafts"}
              isSelected={isOutstanding}
              onClickFn={() => {
                setTasksFrame(draftsFrames);
              }}
            />
            <Tabs
              text={"Awaiting submissions"}
              isSelected={isInProgress}
              onClickFn={() => {
                setTasksFrame(awaitingSubmissionsFrames);
              }}
            />
            <Tabs
              text={"Feedback"}
              isSelected={isOverdue}
              onClickFn={() => {
                setTasksFrame(feedbacksFrames);
              }}
            />
          </Frame1211>
          <Frame1363>
            <Frame1362>
              <Outstanding>{title}</Outstanding>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer allTasks={tasks} />
          </Frame1363>
        </Frame1364>
      </>
    );
  }
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 200px;
`;

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  width: 442px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const Frame1363 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;
const PageTitle = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;
export default TeacherTasksStudentTablet;
