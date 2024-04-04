import React from 'react';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../../../styledMixins';
import { assignmentsHeaderProps } from '../../../utils/headerProps.js';
import Buttons from '../../Classes/Buttons';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import './TeacherTasksLaptop.css';
import questionMark from '../../../static/img/question-mark.svg';
import share from '../../../static/img/share.svg';
import shareColor from '../../../static/img/share-color.svg';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleImage,
} from '../../TasksLaptop/style.js';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import SecondSidebar from '../../SecondSidebar/index.js';

function TeacherTasksLaptop(props) {
  const {
    menuItems,
    filterTasks,
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
    <div className="tasks-laptop screen">
      <SecondSidebar />
      <Frame1361>
        <TitleAndFilterContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
            <Frame1359>
              <Frame1358>
                <TaskFrame1353 outstanding="Drafts" number={drafts.length} />
                <TaskCardContainer
                  allTasks={drafts}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1358>
              <Frame1358>
                <TaskFrame1353
                  outstanding="Active"
                  number={awaitingSubmissions.length}
                />
                <TaskCardContainer
                  allTasks={awaitingSubmissions}
                  showDeletePopuphandler={showDeletePopuphandler}
                  showDateExtendPopuphandler={showDateExtendPopuphandler}
                />
              </Frame1358>

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
    </div>
  );
}
const Frame1315 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-self: stretch;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 200px;
`;
const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: calc(100vw - 255px);
  gap: 20px;
  border-top: 1px solid #e3e3e3;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #301b72;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
  width: calc(100vw - 305px);
  padding: 0px 20px 20px;
  max-height: 100vh;
`;

const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: calc(100vh - 300px);
  flex-grow: 1;
  margin: 0px auto;
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  background-color: #f2f1f3;
  border: 1px solid #301b7214;
  border-radius: 16px;
  box-shadow: inset 0 0 1px 2px rgba(48, 27, 114, 0.04);
`;

export default TeacherTasksLaptop;
