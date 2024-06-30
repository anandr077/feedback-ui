import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Buttons from '../../Classes/Buttons';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
} from '../../TasksDesktop/style';
import closeicon from '../../../static/img/closecircle.svg';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import SecondSidebar from '../../SecondSidebar';
import {
  Frame1354,
  Frame1358,
  Frame1359,
  Frame1360,
  Frame1361,
  TaskScreenMainContainer,
} from './style';
import { isTabletView } from '../../ReactiveRender';
import ClickOutsideHandler from '../../ClickOutsideHandler';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';

function TeacherTasksDesktop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    FilterSortAndCal,
    tasksSelected,
    isShowMenu,
    setShowMenu,
    MyCalendarFile,
  } = props;

  return (
    <TaskScreenMainContainer>
      <ImprovedSecondarySideBar
        isShowMenu={isShowMenu}
        setShowMenu={setShowMenu}
      />
      <Frame1361>
        <TitleAndFilterContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
            <Frame1359>
              <Frame1354>
                <TaskFrame1353 outstanding="In-Draft" number={drafts.length} />
                <TaskCardContainer
                  allTasks={drafts}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1354>
              <Frame1354>
                <TaskFrame1353
                  outstanding="Assigned"
                  number={awaitingSubmissions.length}
                />
                <TaskCardContainer
                  allTasks={awaitingSubmissions}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1354>
              <Frame1354>
                <TaskFrame1353 outstanding="In-Review" number={feedbacks.length} />
                <TaskCardContainer
                  allTasks={feedbacks}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1354>
            </Frame1359>
          ) : (
            MyCalendarFile
          )}
        </Frame1360>
      </Frame1361>
    </TaskScreenMainContainer>
  );
}

export default TeacherTasksDesktop;
