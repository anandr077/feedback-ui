import React from "react";
import Frame1306 from "../Frame1306";
import Frame13532 from "../Frame13532";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../styledMixins";
import "./TasksLaptop.css";
import TaskCardContainer from "../Frame19";
import Header from "../Header";
import Footer from "../Footer";

function TasksLaptop(props) {
  const { allTasks, title, overdue, number, frame1306Props, frame19Props } =
    props;
  console.log("allTasks in TasksLaptop: ", allTasks);
  return (
    <div className="tasks-laptop screen">
      <Header />
      <Frame1361>
        <Title>{title}</Title>
        <Frame1360>
          <Frame1306 frame1304Props={frame1306Props.frame1304Props} />
          <Frame1359>
            <Frame1358>
              <Frame13532 outstanding="Outstanding" number={allTasks.length} />
              <TaskCardContainer
                allTasks={allTasks}
                className={frame19Props.className}
                cardsProps={frame19Props.cardsProps}
              />
            </Frame1358>
            <Frame1358>
              <Frame13532 outstanding="In Progress" number={allTasks.length} />
              <TaskCardContainer
                allTasks={allTasks}
                className={frame19Props.className}
                cardsProps={frame19Props.cardsProps}
              />
            </Frame1358>

            <Frame1358>
              <Frame1357>
                <Overdue>{overdue}</Overdue>
                <Number>{number}</Number>
              </Frame1357>
              <TaskCardContainer
                allTasks={allTasks}
                className={frame19Props.className}
                cardsProps={frame19Props.cardsProps}
              />
              <ScrollBar></ScrollBar>
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

const ScrollBar = styled.div`
  position: absolute;
  top: 190px;
  left: 453px;
  width: 4px;
  height: 140px;
  background-color: var(--alto);
  border-radius: 2px;
`;

export default TasksLaptop;
