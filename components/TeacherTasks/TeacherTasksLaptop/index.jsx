import React from "react";
import styled from "styled-components";
import { IbmplexsansBoldShark64px } from "../../../styledMixins";
import { assignmentsHeaderProps } from "../../../utils/headerProps.js";
import Footer from "../../Footer";
import Header from "../../Header";
import TaskCardContainer from "../../TaskCardContainer";
import TaskFrame1306 from "../../TaskFrame1306";
import TaskFrame1353 from "../../TaskFrame1353";
import "./TeacherTasksLaptop.css";
function TeacherTasksLaptop(props) {
  const { drafts, awaitingSubmissions, feedbacks } = props;
  return (
    <div className="tasks-laptop screen">
      <Header headerProps={assignmentsHeaderProps} />
      <Frame1361>
        <Title>Assignments</Title>
        <Frame1360>
          <TaskFrame1306 />
          <Frame1359>
            <Frame1358>
              <TaskFrame1353 outstanding="Drafts" number={drafts.length} />
              <TaskCardContainer allTasks={drafts} />
            </Frame1358>
            <Frame1358>
              <TaskFrame1353
                outstanding="Awaiting submissions"
                number={awaitingSubmissions.length}
              />
              <TaskCardContainer allTasks={awaitingSubmissions} />
            </Frame1358>

            <Frame1358>
              <TaskFrame1353 outstanding="Feedback" number={feedbacks.length} />
              <TaskCardContainer allTasks={feedbacks} />
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
  align-items: flex-start;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
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
  width: 80%;
  left: 10%;
  position: relative;
  align-self: stretch;
`;

const Frame1359 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 0px;
  position: relative;
  flex: 1;
  width: 100%;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
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

const ScrollBar = styled.div`
  position: absolute;
  top: 190px;
  left: 453px;
  width: 4px;
  height: 140px;
  background-color: var(--alto);
  border-radius: 2px;
`;

export default TeacherTasksLaptop;
