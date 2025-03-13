import React, { useRef, useState, useCallback } from 'react';
import ShareIcon from '@mui/icons-material/Share';
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
  SLink,
  StyledCard,
  TaskTitle,
  TaskTitleBold,
  Header,
  ClassTitle,
  FavouriteContainer,
  FavouriteContent,
  StyledCardMain,
  TaskLink,
  StyledListItem
} from './style';

import { getUserId, getUserRole } from '../../userLocalDetails';
import StatusBubbleContainer from '../StatusBubblesContainer';
import BorderedHeart from '../../static/img/Addtofav.svg';
import RedBgHeart from '../../static/img/favTick.svg';
import ProgressBar from '../ProgressBar';
import { isShowChangeDueTime, isShowDeleteOption, isShowProgressBar, isShowShareOption } from './rules';
import LinkButton from '../../components2/LinkButton';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
import { toast } from 'react-toastify';
import Toast from '../Toast';

function TaskCard(props) {
  const [showMoreOptions, setShowMoreOptions] = React.useState(false);
  const [showShareWithStudent, setShowShareWithStudent] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    task,
    taskLink,
    small,
    exemplar,
    isSelected,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    onExemplarAccept,
    onExemplarDecline,
    onAccept,
    onDecline,
    showAddToCard = false,
    showThreeDots = true,
    onAddToBookmark = () => {},
    onRemoveFromBookmark = () => {},
    notification = false,
    assignmentIdForDuplicate
  } = props;
  const role = getUserRole();
  const userId = getUserId();

  const refContainer = useRef(null);
  const isFavouriteFn = (task, user) => {
    return (task?.bookmarkedByStudents || []).includes(user);
  };
  const isFavourite = isFavouriteFn(task, getUserId());

  const saveButtons = (id) => {
    return (
      <Frame12191>
        <SLink onClick={(e) => onExemplarDecline(id)}>No</SLink>
        <Buttons1>
          <Button onClick={(_) => onExemplarAccept(id)}>Yes</Button>
        </Buttons1>
      </Frame12191>
    );
  };
  function createTaskCard(task, refContainer, isSelected, exemplar) {
    if (exemplar) {
      if (task.status === 'AWAITING_APPROVAL') {
        return (
          <StyledCardMain
            ref={refContainer}
            isSelected={isSelected}
            style={{
              borderTop: 'none',
              background: 'white',
            }}
          >
            <TaskTitle>
              Congratulations, {task.reviewerName} has marked part of your
              response as exemplary and would like to share with students from
              test class!
            </TaskTitle>
            <TaskTitleBold>
              {task.submissionDetails?.assignment?.title}
            </TaskTitleBold>
            {styledCardWithLink()}
            {saveButtons(task.id)}
          </StyledCardMain>
        );
      }
    }
    return styledCardWithLink();
  }
  function styledCardWithLink() {
    if (onAccept) {
      return styledCard();
    }
    return (
      <AnchorTag
        style={{ width: '100%' }}
        href={!exemplar && !notification && task.link}
      >
        {styledCard()}
      </AnchorTag>
    );
  }
  function styledCard() {
    const dueDate = new Date(task.dueAt);
    const currentTime = new Date();
    const isOverDue = dueDate < currentTime;

    return (
      <StyledCard
        ref={refContainer}
        isSelected={isSelected}
        $overdue={isOverDue}
        exemplar={exemplar}
        $notification={notification}
      >
        {showAddToCard ? (
          <Header>
            <ClassTitle>{task.submissionDetails?.assignment?.title}</ClassTitle>
            <FavouriteContainer>
              {isFavourite ? (
                <FavouriteContent
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFromBookmark(task.id);
                  }}
                  favourite={true}
                >
                  <img src={RedBgHeart} />
                  Favourite
                </FavouriteContent>
              ) : (
                <FavouriteContent
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToBookmark(task.id);
                  }}
                >
                  <img src={BorderedHeart} />
                  Add to favourites
                </FavouriteContent>
              )}
            </FavouriteContainer>
          </Header>
        ) : exemplar ? (
          tagsFrameExempler(task, isOverDue)
        ) : (
          tagsFrame(task, isOverDue)
        )}
        <CardContent
          task={cardContents(task, exemplar)}
          small={small}
          exemplar={exemplar}
          onAccept={onAccept}
          onDecline={onDecline}
          $notification={notification}
        />
        {notification && (
          <LinkButton
            link={task.link}
            label="View details"
            arrowright={arrowRight}
            whiteArrowright={whiteArrowright}
            $notification={notification}
          />
        )}
        {/* {!exemplar && (
          <TaskLink href={task.link}>
            Open Task
            <img src={arrowRight} width="20px" />
          </TaskLink>
        )} */}
      </StyledCard>
    );
  }
  function cardContents(task, exemplar, acceptExemplar) {
    if (!exemplar) {
      return {
        title: task.classTitle,
        para: task.title,
        date: task.dueAt,
        status1: isShowProgressBar(task) ? (
          <ProgressBar
            title={'Submissions'}
            isPercentage={false}
            count={task.submissionCount}
            total={task.expectedSubmissions}
          />
        ) : null,
        status2: isShowProgressBar(task) ? (
          <ProgressBar
            title={'Reviewed'}
            isPercentage={false}
            count={task.reviewCount}
            total={task.submissionCount}
          />
        ) : null,
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

  const handleCopyLink = useCallback(() => {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/#/tasks/${task.id}/start`;
    navigator.clipboard.writeText(url);
    toast(<Toast message="Share link copied" />);
  }, [task.link]);

  function tagsFrame(task, isOverDue) {
    const handleClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (task.tags && task.tags.length > 0) {
      return (
        <BubbleContainer>
          <StatusBubbleContainer tags={task?.tags ?? []} overdue={isOverDue} />

          {role === 'TEACHER' && (
            <DeleteButtonContainer aria-describedby={id} onClick={handleClick}>
              <IconContainer src="/icons/three-dot.svg" alt="More" />
            </DeleteButtonContainer>
          )}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {moreOptions()}
          </Popover>
        </BubbleContainer>
      );
    }

    return (
      <>
        {role === 'TEACHER' && showThreeDots && (
          <DeleteButtonContainerOnly>
            <DeleteButtonContainer aria-describedby={id} onClick={handleClick}>
              <IconContainer src="/icons/three-dot.svg" alt="delete" />
            </DeleteButtonContainer>
          </DeleteButtonContainerOnly>
        )}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {moreOptions()}
        </Popover>
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

  // action items for task card with PUBLISHED status
  const moreOptions = () => (
    <List style={{ padding: '4px 0' }}>
      <StyledListItem onClick={() => assignmentIdForDuplicate(task.id)}>
        <IconContainer src="/img/Copy.svg" />
        <div>Duplicate and edit</div>
      </StyledListItem>
      {isShowShareOption(task.status) && (
        <StyledListItem onClick={handleCopyLink}>
          <ShareIcon style={{ fontSize: '18px' }} />
          <div>Share task</div>
        </StyledListItem>
      )}
      {isShowChangeDueTime(task.teacherId) && (
        <StyledListItem onClick={(event) => handleDateUpdate(event, task)}>
          <IconContainer src="/icons/clock-purple.svg" />
          <div>Change due time</div>
        </StyledListItem>
      )}
      {isShowDeleteOption(task.teacherId) && (
        <StyledListItem onClick={(event) => handleDelete(event, task)}>
          <IconContainer src="/icons/delete-purple-icon.svg" />
          <div>Delete</div>
        </StyledListItem>
      )}
    </List>
  );
  return (
    <>
      {createTaskCard(
        task,
        taskLink,
        refContainer,
        isSelected,
        exemplar,
        onAccept,
        onDecline
      )}
    </>
  );
}

export default TaskCard;
