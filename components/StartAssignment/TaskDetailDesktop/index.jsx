import React from "react";
import styled from "styled-components";
import { formattedDate } from "../../../dates";
import { taskHeaderProps } from "../../../utils/headerProps";
import Header from "../../Header";
import Breadcrumb from "../../Breadcrumb";
import Breadcrumb2 from "../../Breadcrumb2";
import Buttons from "../Buttons";
import Frame11 from "../Frame11";
import Frame6 from "../Frame6";
import GoBack from "../GoBack";
import StatusBubbles from "../StatusBubbles";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansNormalChicago13px,
  IbmplexsansSemiBoldShark28px
} from "../styledMixins";
import "./TaskDetailDesktop.css";

function TaskDetailDesktop(props) {
  const {
    assignment,
    methods,
    clazzName,
    headerProps,
    frame1343,
    title,
    physicsThermodyna,
    line11,
    x2021JeddleAllRightsReserved,
    navElement1Props,
    navElement2Props,
    navElement3Props,
    breadcrumb21Props,
    breadcrumb22Props,
    goBackProps,
    frame12091Props,
    frame12092Props,
  } = props;

  return (
    <div className="task-detail-desktop screen">
      <Frame1391>
        <Header headerProps={taskHeaderProps} />
        <Frame1390>
          <Frame29>
            <Breadcrumb text = "Task" link = "/#/tasks"/>
            <Breadcrumb2 title={assignment.title} />
          </Frame29>
          <Frame1389>
            <Title>Task</Title>
            <GoBack caret={goBackProps.caret} />
          </Frame1389>
          <Frame12091>
            <Frame1210>
              <StatusBubbles text={formattedDate(assignment.dueAt)} />
              <PhysicsThermodyna>{assignment.title}</PhysicsThermodyna>
              {clazzName && <ClazzName>{clazzName}</ClazzName>}
            </Frame1210>
            <Frame28>
              <Frame11 text={assignment.questions.length} />
            </Frame28>
            <Frame12092>
              <Line11 src={line11} alt="Line 11" />
              <Buttons onClickFn={methods.onClickStartAssignment} />
            </Frame12092>
          </Frame12091>
        </Frame1390>
      </Frame1391>
      <Frame61>
        <X2021JeddleAllRightsReserved>
          {x2021JeddleAllRightsReserved}
        </X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61>
    </div>
  );
}

const Frame1391 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.49998474121094px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

const Frame1390 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame29 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1389 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame12091 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1210 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansSemiBoldShark28px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;


const ClazzName = styled.p`
  ${IbmplexsansSemiBoldShark28px}
  font-size: 15px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame28 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const Frame12092 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Line11 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1200px;
  height: 1.0001220703125px;
  margin-top: -1px;
  object-fit: cover;
`;

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default TaskDetailDesktop;
