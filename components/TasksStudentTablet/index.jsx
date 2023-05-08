import { default as React,  useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CheckboxGroup from "../CheckboxGroup";
import HeaderSmall from "../HeaderSmall";
import Tabs from "../Tabs";
import TaskCardContainer from "../TaskCardContainer";

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px
} from "../../styledMixins";
import { taskHeaderProps } from "../../utils/headerProps.js";
import FooterSmall from "../FooterSmall";
import "./TasksStudentTablet.css";
import { set } from "lodash";

function TasksStudentTablet(props) {
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
    <div className="tasks-student-tablet screen">
      <HeaderSmall headerProps={taskHeaderProps} />
      <Frame1365>
        <Frame1307>
          <KeepOrganizedWitho>Tasks</KeepOrganizedWitho>
          <CheckboxGroup onChange={filterTasks} data={menuItems}></CheckboxGroup>
        </Frame1307>
      {taskFrame}
      </Frame1365>
      <FooterSmall />
    </div>
  );

  function createTasksFrame(title, tasks, isOutstanding, isInProgress, isOverdue) {
    return (
      <>
        <Frame1364>
          <Frame1211>
            <Tabs
              text={"Not Started"}
              isSelected={isOutstanding}
              onClickFn={() => {
                // setTasksFrame(outstandingFrame);
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
                // setTasksFrame(inProgressFrame);
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
                // setTasksFrame(overdueFrame);
                setIsOutstanding(false);
                setIsInProgress(false);
                setIsOverdue(true);
                setTittle("Overdue");
                setTask(overdueTasks);
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
