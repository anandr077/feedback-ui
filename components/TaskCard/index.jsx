import React, { useEffect, useRef, useState } from 'react';
import {
  MoreOptionsWrapper,
  MoreOptions,
  IconContainer,
  DeleteButtonContainer,
  DeleteButtonContainerOnly,
  BubbleContainer,
  TaskTitle,
  TaskTitleBold,
  Frame12191,
  SLink,
  Buttons1,
  Button,
  StyledCard,
  AnchorTag,
  StudentLength,
} from './style';
import CardContent from '../CardContent';
import SnackbarContext from '../SnackbarContext';

import {
  denyModelResponse,
  publishModelResponse,
} from '../../service';
import { getUserId, getUserRole } from '../../userLocalDetails';
import StatusBubbleContainer from '../StatusBubblesContainer';

function TaskCard(props) {
  const { showSnackbar } = React.useContext(SnackbarContext);

  const [showMoreOptions, setShowMoreOptions] = React.useState(false);
  const [showShareWithStudent, setShowShareWithStudent] = useState(false);

  const {
    task,
    small,
    exemplar,
    isSelected,
    setPublishActionCompleted,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    onAccept,
    onDecline,
    onSlideChange = () => {},
  } = props;
  const role = getUserRole();
  const userId = getUserId();

  const showStudentListRef = useRef(null);
  const refContainer = useRef(null);

  const handleClickOutside = (event) => {
    if (refContainer.current && !refContainer.current.contains(event.target)) {
      setShowMoreOptions(false);
    }

    if (
      showStudentListRef.current &&
      !showStudentListRef.current.contains(event.target)
    ) {
      setShowShareWithStudent(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    if (isSelected) {
      refContainer.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  const saveButtons = (
    id,
    showSnackbar,
    setPublishActionCompleted,
    onSlideChange
  ) => {
    return (
      <Frame12191>
        <SLink
          onClick={(e) => {
            denyModelResponse(id).then((res) => {
              if (res.status === 'DENIED') {
                setPublishActionCompleted(id, 'DENIED', true);
                onSlideChange();
                showSnackbar("Response won't be shared", res.link);
              } else {
                return;
              }
            });
          }}
        >
          No
        </SLink>
        <Buttons1>
          <Button
            onClick={(e) => {
              publishModelResponse(id).then((res) => {
                if (res.status === 'PUBLISHED') {
                  setPublishActionCompleted(id, 'PUBLISHED', true);
                  onSlideChange();
                  showSnackbar('Response shared', res.link);
                } else {
                  return;
                }
              });
            }}
          >
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
    small,
    showSnackbar,
    setPublishActionCompleted,
    onAccept,
    onDecline,
    onSlideChange
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
              task.id,
              showSnackbar,
              setPublishActionCompleted,
              onSlideChange
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
          ? `Submissions: ${task.submissionCount} of ${task.expectedSubmissions}`
          : null,
        status2: task.submissionCount
          ? `Reviewed: ${task.reviewCount} of ${task.submissionCount}`
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
          {showMoreOptions && moreOptions}
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
        {showMoreOptions && moreOptions}
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
  const moreOptions = (
    <MoreOptionsWrapper>
      <MoreOptions onClick={(event) => handleDateUpdate(event, task)}>
        <IconContainer src="/icons/clock-purple.svg" />
        <div>Change due time</div>
      </MoreOptions>
      <MoreOptions onClick={(event) => handleDelete(event, task)}>
        <IconContainer src="/icons/delete-purple-icon.svg" />
        <div>Delete</div>
      </MoreOptions>
    </MoreOptionsWrapper>
  );

  return (
    <>
      {createTaskCard(
        task,
        refContainer,
        isSelected,
        exemplar,
        small,
        showSnackbar,
        setPublishActionCompleted,
        onAccept,
        onDecline,
        onSlideChange
      )}
    </>
  );
}

export default TaskCard;
