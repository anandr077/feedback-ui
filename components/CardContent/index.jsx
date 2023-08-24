import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalShark12px,
  IbmplexsansNormalRiverBed14px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';
import { formattedDate } from '../../dates';

function CardContent(props) {
  const { task, small, exempler } = props;

  const sampleTask = {
    title: 'Fundamentals of thermal physics',
    para: 'Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna...',
    subTitle: "Teacher's Comment",
    subPara:
      'Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.',
    date: '2 April 2023',
    status1: 'Submissions: 20 of 40',
    status2: 'Reviewed: 10 of 20',
  };

  function createTitle(small, title) {
    if (!title) return <></>;
    return small ? (
      <SmallClassText>{title}</SmallClassText>
    ) : (
      <ClassText>{title}</ClassText>
    );
  }

  function createPara(small, para) {
    if (!para) return <></>;
    return (
      <>
        {small ? (
          <SmallTaskTitle>{para}</SmallTaskTitle>
        ) : (
          <TaskTitle>{para}</TaskTitle>
        )}
      </>
    );
  }

  function createSubtitle(subTitle) {
    if (!subTitle) return <></>;
    return <RemarkText>{subTitle}</RemarkText>;
  }

  function createSubPara(subPara) {
    if (!subPara) return <></>;
    return <Remark>{subPara}</Remark>;
  }

  function date(small, date) {
    if (!date) return <></>;

    return (
      <>
        {small ? (
          <Frame1282>
            <SmallIconClock src="/img/clock@2x.png" alt="icon-clock" />
            <SmallDueAt>{formattedDate(date)}</SmallDueAt>
          </Frame1282>
        ) : (
          <Frame1282>
            <IconClock src="/img/clock@2x.png" alt="icon-clock" />
            <DueAt>{formattedDate(date)}</DueAt>
          </Frame1282>
        )}
      </>
    );
  }

  function createStatus(small, status) {
    if (!status) return <></>;

    return small ? (
      <SmallClassText>{status}</SmallClassText>
    ) : (
      <ClassText>{status}</ClassText>
    );
  }

  return (
    <>
      <Content>
        {createTitle(small, task.title)}
        {createPara(small, task.para)}
        {createSubtitle(task.subTitle)}
        {createSubPara(task.subPara)}
        {date(small, task.date)}
        {createStatus(small, task.status1)}
        {createStatus(small, task.status2)}
      </Content>
    </>
  );
}

const RemarkText = styled.div`
  ${IbmplexsansNormalShark12px}
  // width: 501px;
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
  margin-top: 10px;
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

export default CardContent;
