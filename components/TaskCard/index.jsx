import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  IbmplexsansMediumElectricViolet20px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalShark20px,
  IbmplexsansSemiBoldShark20px,
} from '../../styledMixins';
import CardContent from '../CardContent';
import SnackbarContext from '../SnackbarContext';

import {
  denyModelResponse,
  getUserId,
  getUserRole,
  publishModelResponse,
} from '../../service';
import StatusBubbleContainer from '../StatusBubblesContainer';

function TaskCard(props) {
  const { showSnackbar } = React.useContext(SnackbarContext);

  const [showMoreOptions, setShowMoreOptions] = React.useState(false);

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
  } = props;

  const role = getUserRole();
  const userId = getUserId();

  const handleClickOutside = (event) => {
    if (refContainer.current && !refContainer.current.contains(event.target)) {
      setShowMoreOptions(false);
    }
  };

  const refContainer = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    if (isSelected) {
      refContainer.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  const saveButtons = (id, showSnackbar, setPublishActionCompleted) => {
    return (
      <Frame12191>
        <SLink
          onClick={(e) => {
            denyModelResponse(id).then((res) => {
              if (res.status === 'DENIED') {
                setPublishActionCompleted(true);
                showSnackbar(
                  "Response won't be shared with your class",
                  res.link
                );
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
                  setPublishActionCompleted(true);
                  showSnackbar('Response shared with your class', res.link);
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
    onDecline
  ) {
    if (exemplar) {
      if (task.status === 'AWAITING_APPROVAL') {
        return (
          <StyledCard ref={refContainer} isSelected={isSelected}>
            <TaskTitle>
              Congratulations,
              <br />
              Teacher has marked part of your response as exemplary!
            </TaskTitle>
            <TaskTitleBold>
              {task.submissionDetails?.assignment?.title}
            </TaskTitleBold>
            {styledCardWithLink()}
            <TaskTitle>
              Are you happy to share this with your {task?.classTitle}?
            </TaskTitle>
            {saveButtons(task.id, showSnackbar, setPublishActionCompleted)}
          </StyledCard>
        );
      }
    }
    return styledCardWithLink();
    
  }
  function styledCardWithLink() {
    console.log('onAccept', onAccept)
    if (onAccept) {
      return styledCard();
    }
    return <a href={task.link}>{styledCard()}</a>;
  }
  function styledCard() {
    return (
      <StyledCard ref={refContainer} isSelected={isSelected}>
        {exemplar ? tagsFrameExempler(task) : tagsFrame(task)}
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

  function tagsFrame(task) {
    if (task.tags && task.tags.length > 0) {
      return (
        <BubbleContainer>
          <StatusBubbleContainer tags={task?.tags ?? []} />
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

  function tagsFrameExempler(task) {
    const title = [];
    title.push({ name: task.classTitle });
    return (
      <BubbleContainer>
        <StatusBubbleContainer tags={title} />
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
        onDecline
      )}
    </>
  );
}

const MoreOptionsWrapper = styled.div`
  position: absolute;
  right: 2px;
  top: 18px;
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  z-index: 2;
`;

const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #7200e0;
  font-size: 14px;
  font-family: IBM Plex Sans;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconContainer = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const DeleteButtonContainer = styled.div`
  display: flex;

  align-items: flex-start;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  &:hover {
    transform: scale(1.3);
  }
`;

const DeleteButtonContainerOnly = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const BubbleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  margin-bottom: 8px;
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

const TaskTitleBold = styled.p`
  ${IbmplexsansSemiBoldShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SLink = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    color: blue;
    text-decoration: underline;
  }
`;
const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;
const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-color: var(--corn);
  border: 1px solid rgba(219, 87, 87, 0.2);

  border-radius: 16px;
  &: hover {
    background: #f9f5ff;
    border: 1px solid #7200e0;
    box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  }
`;

export default TaskCard;
