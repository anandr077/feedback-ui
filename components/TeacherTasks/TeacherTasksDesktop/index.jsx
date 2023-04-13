import React from "react";
import TaskFrame1306 from "../../TaskFrame1306";
import TaskFrame1353 from "../../TaskFrame1353";
import TaskCardContainer from "../../TaskCardContainer";
import Header from "../../Header";
import Footer from "../../Footer";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../../styledMixins";
import "./TeacherTasksDesktop.css";
import { assignmentsHeaderProps } from "../../../utils/headerProps";

function TeacherTasksDesktop(props) {
  const {
    outstandingTasks,
    inProgressTasks,
    overdueTasks,
    title,
    frame1306Props,
    frame19Props,
    headerProps,
  } = props;

  return (
    <div className="tasks-desktop screen">
      <Header headerProps={assignmentsHeaderProps} />
      <Frame1361>
        <Title>{title}</Title>
        <Frame1360>
          <TaskFrame1306 frame1304Props={frame1306Props.frame1304Props} />
          <Frame1359>
            <Frame1354>
              <TaskFrame1353
                outstanding="Outstanding"
                number={outstandingTasks.length}
              />
              <TaskCardContainer
                allTasks={outstandingTasks}
                className={frame19Props.className}
              />
            </Frame1354>
            <Frame1354>
              <TaskFrame1353
                outstanding="In Progress"
                number={inProgressTasks.length}
              />
              <TaskCardContainer
                allTasks={inProgressTasks}
                className={frame19Props.className}
              />
            </Frame1354>
            <Frame1358>
              <TaskFrame1353
                outstanding="Overdue"
                number={outstandingTasks.length}
              />
              <TaskCardContainer
                allTasks={outstandingTasks}
                className={frame19Props.className}
              />
            </Frame1358>
          </Frame1359>
        </Frame1360>
      </Frame1361>
      <Footer />
    </div>
  );
}

const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1359 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 0px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  height: 609px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 0px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1357 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Overdue = styled.div`
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

export default TeacherTasksDesktop;
