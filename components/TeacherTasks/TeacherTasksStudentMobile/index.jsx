import { default as React, default as React, useState } from "react";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../../styledMixins";
import { assignmentsHeaderProps } from "../../../utils/headerProps.js";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import Tabs from "../../Tabs";
import TaskCardContainer from "../../TaskCardContainer";
import TaskFrame1304 from "../../TaskFrame1304";
import "./TeacherTasksStudentMobile.css";

function TeacherTasksStudentMobile(props) {
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
    <div className="tasks-student-mobile screen">
      <HeaderSmall headerProps={assignmentsHeaderProps} />
      <Frame1365>
        <Frame1307>
          <PageTitle>Task</PageTitle>
          <TaskFrame1304 />
        </Frame1307>
        {tasksFrame}
      </Frame1365>
      <FooterSmall />
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
          <Frame1364>
            <Frame1362>
              <SectionTitle>{title}</SectionTitle>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer allTasks={tasks} />
          </Frame1364>
        </Frame1364>
      </>
    );
  }
}

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
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

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const SectionTitle = styled.div`
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

const Frame6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export default TeacherTasksStudentMobile;
