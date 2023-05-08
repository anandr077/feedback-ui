import React ,{useRef, useEffect, useState} from "react";
import Notifications from "../Notifications";
import TaskFrame1304 from "../TaskFrame1304";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import TaskCardContainer from "../TaskCardContainer";
import styled from "styled-components";
import {
  IbmplexsansSemiBoldRiverBed24px,
  IbmplexsansBoldShark36px,
} from "../../styledMixins";
import "./TasksStudentMobile.css";
import HeaderSmall from "../HeaderSmall";
import FooterSmall from "../FooterSmall";
import React, { useState, useEffect } from "react";
import { taskHeaderProps } from "../../utils/headerProps.js";
import CheckboxGroup from "../CheckboxGroup";

function TasksStudentMobile(props) {
const {menuItems, filterTasks, outstandingTasks, inProgressTasks, overdueTasks, frame1304Props } =
    props;
    const prevProps = useRef(props);
    const [isOutstanding, setIsOutstanding] = useState(true);
    const [isInProgress, setIsInProgress] = useState(false);
    const [isOverdue, setIsOverdue] = useState(false);
    const [task, setTask] = useState(outstandingTasks);
    const [title,setTittle] = useState("Not Started");

const [taskFrame,setTasksFrame] = useState(createTasksFrame("Not Started",outstandingTasks, true, false, false));
    useEffect(() => {
       setTasksFrame (createTasksFrame(title,task, isOutstanding, isInProgress, isOverdue))
      if (prevProps.current !== props) {
        isOutstanding && setTask(outstandingTasks);
        isInProgress && setTask(inProgressTasks);
        isOverdue && setTask(overdueTasks);
      }
      prevProps.current = props;
    }, [ title, task, isOutstanding, isInProgress, isOverdue, menuItems]);

    return (
      <div className="tasks-student-mobile screen">
        <HeaderSmall headerProps={taskHeaderProps} />
        <Frame1365>
          <Frame1307>
            <PageTitle>Tasks</PageTitle>
            <CheckboxGroup onChange={filterTasks} data={menuItems}></CheckboxGroup>
          </Frame1307>
          {taskFrame}
        </Frame1365>
        <FooterSmall />
      </div>
    );
  

  function createTasksFrame(title, tasks , isOutstanding, isInProgress, isOverdue) {
    return (
      <>
        <Frame1364>
          <Frame1211>
            <Tabs
              text={"Not Started"}
              isSelected={isOutstanding}
              onClickFn={() => {
                setIsOutstanding(true);
                setIsInProgress(false);
                setIsOverdue(false);
                setTittle("Not Started");
                setTask(outstandingTasks);
              }}
            />
            <Tabs
              text={"In Progress"}
              isSelected={isInProgress}
              onClickFn={() => {
                setIsOutstanding(false);
                setIsInProgress(true);
                setIsOverdue(false);
                setTittle("In Progress");
                setTask(inProgressTasks);
              }}
            />
            <Tabs
              text={"Overdue"}
              isSelected={isOverdue}
              onClickFn={() => {
                setIsOutstanding(false);
                setIsInProgress(false);
                setIsOverdue(true);
                setTittle("Overdue");
                setTask(overdueTasks);
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
  min-height: 600px;
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

export default TasksStudentMobile;

