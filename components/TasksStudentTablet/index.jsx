import React from "react";
import styled from "styled-components";
import TaskFrame1304 from "../TaskFrame1304";
import TaskCardContainer from "../TaskCardContainer";
import Notifications from "../Notifications";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import Footer from "../Footer";
import HeaderSmall from "../HeaderSmall";
import { getUserName } from "../../service";
import React, { useState, useEffect } from "react";

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../styledMixins";
import "./TasksStudentTablet.css";
import { taskHeaderProps } from "../../utils/headerProps.js";

function TasksStudentTablet(props) {
  const { outstandingTasks, inProgressTasks, overdueTasks, frame1304Props } =
    props;
  const outstandingFrame = createTasksFrame(
    "Outstanding",
    outstandingTasks,
    true,
    false,
    false
  );
  const inProgressFrame = createTasksFrame(
    "In Progress",
    inProgressTasks,
    false,
    true,
    false
  );
  const overdueFrame = createTasksFrame(
    "Overdue",
    overdueTasks,
    false,
    false,
    true
  );
  const [tasksFrame, setTasksFrame] = useState(outstandingFrame);

  return (
    <div className="tasks-student-tablet screen">
      <HeaderSmall headerProps={taskHeaderProps} />
      <Frame1365>
        <Frame1307>
          <KeepOrganizedWitho>Tasks</KeepOrganizedWitho>
          {/* <TaskFrame1304 iconsaxLinearSort={frame1304Props.iconsaxLinearSort} /> */}
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
              text={"Outstanding"}
              isSelected={isOutstanding}
              onClickFn={() => {
                setTasksFrame(outstandingFrame);
              }}
            />
            <Tabs
              text={"In Progress"}
              isSelected={isInProgress}
              onClickFn={() => {
                setTasksFrame(inProgressFrame);
              }}
            />
            <Tabs
              text={"Overdue"}
              isSelected={isOverdue}
              onClickFn={() => {
                setTasksFrame(overdueFrame);
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
const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
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
  min-height: 600px;
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

export default TasksStudentTablet;
