import React, { useState } from 'react';
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
  TeacherComment,
  ReadMoreButton,
} from './style';

function CardContent(props) {
  const { task, small, onAccept, onDecline } = props;
  const [showFullPara, setShowFullPara] = useState(false);
  const [showFullSubPara, setShowFullSubPera] = useState(false);

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
      <div>
        {small ? (
          <SmallTaskTitle>
            {showFullPara
              ? para
              : para.slice(0, 180) + (para.length > 180 ? '...' : '')}
          </SmallTaskTitle>
        ) : (
          <TaskTitle>
            {showFullPara
              ? para
              : para.slice(0, 180) + (para.length > 180 ? '...' : '')}{' '}
          </TaskTitle>
        )}
        {para.length > 180 && !showFullPara && (
          <ReadMoreButton onClick={() => setShowFullPara(true)}>
            Read more
          </ReadMoreButton>
        )}
        {para.length > 180 && showFullPara && (
          <ReadMoreButton onClick={() => setShowFullPara(false)}>
            Show less
          </ReadMoreButton>
        )}
      </div>
    );
  }

  function createSubtitle(subTitle) {
    if (!subTitle) return <></>;
    return <RemarkText>{subTitle}</RemarkText>;
  }

  function createSubPara(subPara) {
    if (!subPara) return <></>;
    return (
      <div>
        <Remark>
          {showFullSubPara
            ? subPara
            : subPara.slice(0, 180) + (subPara.length > 180 ? '...' : '')}{' '}
        </Remark>
        {subPara.length > 180 && !showFullSubPara && (
          <ReadMoreButton onClick={() => setShowFullSubPera(true)}>
            Read more
          </ReadMoreButton>
        )}
        {subPara.length > 180 && showFullSubPara && (
          <ReadMoreButton onClick={() => setShowFullSubPera(false)}>
            Show less
          </ReadMoreButton>
        )}
      </div>
    );
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
        {task.subTitle && task.subPara && (
          <TeacherComment>
            {createSubtitle(task.subTitle)}
            {createSubPara(task.subPara)}
          </TeacherComment>
        )}
        {!onAccept && date(small, task.date)}
        {(task.status1 || task.status2) && (
          <StatusContainer>
            {createStatus(small, task.status1)}
            {createStatus(small, task.status2)}
          </StatusContainer>
        )}
        {createAcceptDecline()}
      </Content>
    </>
  );
}

export default CardContent;
