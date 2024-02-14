import React, { useRef, useState } from 'react';
import CardContent from '../CardContent';
import {
  AnchorTag,
  BubbleContainer,
  Button,
  Buttons1,
  DeleteButtonContainer,
  DeleteButtonContainerOnly,
  Frame12191,
  IconContainer,
  MoreOptions,
  MoreOptionsWrapper,
  SLink,
  StyledCard,
  TaskTitle,
  TaskTitleBold
} from './style';

import { getUserId, getUserRole } from '../../userLocalDetails';
import StatusBubbleContainer from '../StatusBubblesContainer';
import ProgressBar from '../ProgressBar';

function TaskCard(props) {

  const [showMoreOptions, setShowMoreOptions] = React.useState(false);
  const [showShareWithStudent, setShowShareWithStudent] = useState(false);

  const {
    task,
    small,
    exemplar,
    isSelected,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    onExemplarAccept,
    onExemplarDecline,
    onAccept,
    onDecline,
  } = props;
  const role = getUserRole();
  const userId = getUserId();

  const refContainer = useRef(null);

  

  const saveButtons = (
    id
  ) => {
    return (
      <Frame12191>
        <SLink onClick={(e) => onExemplarDecline(id)}
        >
          No
        </SLink>
        <Buttons1>
          <Button onClick={(_)=> onExemplarAccept(id)} >
            Yes
          </Button>
        </Buttons1>
      </Frame12191>
    );
  };
  function createTaskCard(
    task,
    refContainer,
    isSelected,
    exemplar,
  ) {
    if (exemplar) {

      if (task.status === 'AWAITING_APPROVAL') {
        return (
          <StyledCard ref={refContainer} isSelected={isSelected}>
            <TaskTitle>
              Congratulations,
              <br />
              {task.reviewerName} would like to share the following part of your response with the class.
            </TaskTitle>
            <TaskTitleBold>
              {task.submissionDetails?.assignment?.title}
            </TaskTitleBold>
            {styledCardWithLink()}
            <TaskTitle>Are you happy to share?</TaskTitle>
            {saveButtons(
              task.id
            )}
          </StyledCard>
        );
      }
    }
    return styledCardWithLink();
  }
  function styledCardWithLink() {
    if (onAccept) {
      return styledCard();
    }
    return <AnchorTag href={task.link}>{styledCard()}</AnchorTag>;
  }
  function styledCard() {
    const dueDate = new Date(task.dueAt);
    const currentTime = new Date();
    const isOverDue = dueDate < currentTime;

    return (
      <StyledCard
        ref={refContainer}
        isSelected={isSelected}
        overdue={isOverDue}
      >
        {exemplar
          ? tagsFrameExempler(task, isOverDue)
          : tagsFrame(task, isOverDue)}
        <CardContent
          task={cardContents(task, exemplar)}
          small={small}
          exemplar={exemplar}
          onAccept={onAccept}
          onDecline={onDecline}
        />
      </StyledCard>
    );
  }
  function cardContents(task, exemplar, acceptExemplar) {
    if (!exemplar) {
      return {
        title: task.classTitle,
        para: task.title,
        date: task.dueAt,
        status1: task.submissionCount
          ? <ProgressBar title={"Submissions"} isPercentage={false} count={task.submissionCount} total={task.expectedSubmissions}/>
          : null,
        status2: task.submissionCount
          ? <ProgressBar title={"Reviewed"} isPercentage={false} count={task.reviewCount} total={task.submissionCount}/>
          : null,
      };
    }
    return {
      title: task.assignmentTitle,
      para: task.response,
      subTitle: "Teacher's Comment",
      subPara: task.comment,
      assignmentName: task.submissionDetails?.assignment?.title,
    };
  }

  const handleMore = (event, task) => {
    event.stopPropagation();
    event.preventDefault();
    // showDeletePopuphandler(task);
    setShowMoreOptions(!showMoreOptions);
  };

  const handleDelete = (event, task) => {
    event.stopPropagation();
    event.preventDefault();
    showDeletePopuphandler(task);
  };

  const handleDateUpdate = (event, task) => {
    event.stopPropagation();
    event.preventDefault();
    showDateExtendPopuphandler(task);
  };

  function tagsFrame(task, isOverDue) {
    if (task.tags && task.tags.length > 0) {
      return (
        <BubbleContainer>
          <StatusBubbleContainer tags={task?.tags ?? []} overdue={isOverDue} />
          {role === 'TEACHER' && userId === task.teacherId && (
            <DeleteButtonContainer onClick={(event) => handleMore(event, task)}>
              <IconContainer src="/icons/three-dot.svg" alt="delete" />
            </DeleteButtonContainer>
          )}
          {showMoreOptions && moreOptions()}
        </BubbleContainer>
      );
    }
    return (
      <>
        {role === 'TEACHER' && userId === task.teacherId && (
          <DeleteButtonContainerOnly>
            <DeleteButtonContainer onClick={(event) => handleMore(event, task)}>
              <IconContainer src="/icons/three-dot.svg" alt="delete" />
            </DeleteButtonContainer>
          </DeleteButtonContainerOnly>
        )}
        {showMoreOptions && moreOptions()}
      </>
    );
  }

  function tagsFrameExempler(task, isOverDue) {
    const title = [];
    title.push({ name: task.classTitle });
    return (
      <BubbleContainer>
        <StatusBubbleContainer tags={title} overdue={isOverDue} />
      </BubbleContainer>
    );
  }
  const moreOptions = () => {
    return <MoreOptionsWrapper>
      <MoreOptions onClick={(event) => handleDateUpdate(event, task)}>
        <IconContainer src="/icons/clock-purple.svg" />
        <div>Change due time</div>
      </MoreOptions>
      <MoreOptions onClick={(event) => handleDelete(event, task)}>
        <IconContainer src="/icons/delete-purple-icon.svg" />
        <div>Delete</div>
      </MoreOptions>
    </MoreOptionsWrapper>
  }
  return <>
      {createTaskCard(
        task,
        refContainer,
        isSelected,
        exemplar,
        onAccept,
        onDecline
      )}
    </>
  
}

export default TaskCard;
