import React from 'react';
import { formattedDate } from '../../dates';
import {
  RemarkText,
  Content,
  StatusContainer,
  TaskTitle,
  Remark,
  SmallTaskTitle,
  ClassText,
  SmallClassText,
  Frame1282,
  IconClock,
  SmallIconClock,
  DueAt,
  SmallDueAt,
  AcceptContainer,
  Line,
  DeclineText,
  AcceptText,
} from './style';

function CardContent(props) {
  const { task, small, onAccept, onDecline } = props;

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
  function createAcceptDecline() {
    if (!onAccept) return <></>;
    return (
      <>
        <Line />
        <AcceptContainer>
          <AcceptText onClick={onAccept}>ACCEPT</AcceptText>
          <DeclineText onClick={onDecline}>DECLINE</DeclineText>
        </AcceptContainer>
      </>
    );
  }

  return (
    <>
      <Content>
        {createTitle(small, task.title)}
        {createPara(small, task.para)}
        {createSubtitle(task.subTitle)}
        {createSubPara(task.subPara)}
        {!onAccept && date(small, task.date)}
        <StatusContainer>
          {createStatus(small, task.status1)}
          {createStatus(small, task.status2)}
        </StatusContainer>
        {createAcceptDecline()}
      </Content>
    </>
  );
}

export default CardContent;
