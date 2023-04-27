import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark12px,
  IbmplexsansNormalRiverBed14px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";
import { formattedDate } from "../../dates";

function CardContent(props) {
  const { task, small, exempler } = props;

  const datesFrame = task.dueAt ? (
    <>
      {small ? (
        <Frame1282>
          <SmallIconClock src="/img/clock@2x.png" alt="icon-clock" />
          <SmallDueAt>{formattedDate(task.dueAt)}</SmallDueAt>
        </Frame1282>
      ) : (
        <Frame1282>
          <IconClock src="/img/clock@2x.png" alt="icon-clock" />
          <DueAt>{formattedDate(task.dueAt)}</DueAt>
        </Frame1282>
      )}
    </>
  ) : (
    <></>
  );

  function createTitle(task) {
    return (
      <>
        {small ? (
          <SmallTaskTitle>
            {task.title ? task.title : task.response}
          </SmallTaskTitle>
        ) : (
          <TaskTitle>{task.title ? task.title : task.response}</TaskTitle>
        )}
      </>
    );
  }

  function createSubmissions(task) {
    if (task?.expectedSubmissions ?? 0) {
      return (
        <>
          {small ? (
            <SmallTaskTitle>
              <Submissions>
                Submissions: {task.submissionCount} of{" "}
                {task.expectedSubmissions}
              </Submissions>
            </SmallTaskTitle>
          ) : (
            <TaskTitle>
              <Submissions>
                Submissions: {task.submissionCount} of{" "}
                {task.expectedSubmissions}
              </Submissions>
            </TaskTitle>
          )}
        </>
      );
    }
    return <></>;
  }

  return (
    <>
      {exempler ? (
        <Content>
          <ExemplerTitleText>{task.assignmentTitle}</ExemplerTitleText>
          <TaskTitle>{task.response}</TaskTitle>
          <RemarkText> Remark</RemarkText>
          <Remark>
            Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
          </Remark>
        </Content>
      ) : (
        <Content>
          {createTitle(task)}
          {small ? (
            <SmallClassText>
              {task.classTitle ? task.classTitle : task.assignmentTitle}
            </SmallClassText>
          ) : (
            <ClassText>
              {task.classTitle ? task.classTitle : task.assignmentTitle}
            </ClassText>
          )}
          {datesFrame}
          {createSubmissions(task)}
        </Content>
      )}
    </>
  );
}

const Frame12121 = styled.div`
  ${IbmplexsansNormalShark12px}
  display: flex;
  width: 339px;
  align-items: flex-start;
  gap: 4px;
  position: absolute;
  top: 0;
  left: 0;
`;

const RemarkText = styled.div`
  ${IbmplexsansNormalShark12px}
  width: 501px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7200e0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Submissions = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Address = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const TaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const Remark = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 15px;
  font-style: italic;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  font-color: #405059;
`;
const SmallTaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  font-size: 13px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const ClassText = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 14px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const SmallClassText = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 13px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const ExemplerTitleText = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 15px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const Frame1282 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  align-self: stretch;
`;

const IconClock = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
const SmallIconClock = styled.img`
  position: relative;
  min-width: 13px;
  height: 13px;
`;

const DueAt = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 14px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;
const SmallDueAt = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  font-size: 13px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna1 = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FundamentalsOfThermalPhysics1 = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const Frame12821 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  align-self: stretch;
`;

const IconClock1 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const DueOn2April20231 = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export default CardContent;
