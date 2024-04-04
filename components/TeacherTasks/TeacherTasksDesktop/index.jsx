import React from 'react';
import styled from 'styled-components';
import Buttons from '../../Classes/Buttons';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import './TeacherTasksDesktop.css';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
} from '../../TasksDesktop/style';
import questionMark from '../../../static/img/question-mark.svg';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import SecondSidebar from '../../SecondSidebar';

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
    <div className="tasks-desktop screen">
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
  width: calc(100vw - 305px);
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: relative;
  border-top: 1px solid #E3E3E3;
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
  padding: 0px 20px;
  max-height: 100vh;
`;

const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: calc(100vh - 350px);
  flex-grow: 1;
  margin: 0px auto;
  height: 90vh;
`;

const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  background-color: #F2F1F3;
  border-radius: 16px;
  border: 1px solid #301B7214;
  box-shadow: inset 0 0 1px 2px rgba(48, 27, 114, 0.04);
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  border: 1px solid #301B7214;
  background-color: #F2F1F3;
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

export default TeacherTasksDesktop;
