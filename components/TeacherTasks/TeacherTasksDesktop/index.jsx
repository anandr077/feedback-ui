import React from 'react';
import styled from 'styled-components';
import Buttons from '../../Classes/Buttons';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
} from '../../TasksDesktop/style';
import questionMark from '../../../static/img/question-mark.svg';
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

function TeacherTasksDesktop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    FilterSortAndCal,
    tasksSelected,
    MyCalendarFile,
  } = props;

  return (
    <TaskScreenMainContainer>
      <SecondSidebar />
      <Frame1361>
        <TitleAndFilterContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
            <Frame1359>
              <Frame1354>
                <TaskFrame1353 outstanding="Drafts" number={drafts.length} />
                <TaskCardContainer
                  allTasks={drafts}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1354>
              <Frame1354>
                <TaskFrame1353
                  outstanding="Active"
                  number={awaitingSubmissions.length}
                />
                <TaskCardContainer
                  allTasks={awaitingSubmissions}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1354>
              <Frame1358>
                <TaskFrame1353 outstanding="Closed" number={feedbacks.length} />
                <TaskCardContainer
                  allTasks={feedbacks}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1358>
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
