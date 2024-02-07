import React from 'react';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../../../styledMixins';
import { assignmentsHeaderProps } from '../../../utils/headerProps';
import Buttons from '../../Classes/Buttons';
// import Footer from '../../Footer';
import Header from '../../Header';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import './TeacherTasksDesktop.css';
import CheckboxGroup from '../../CheckboxGroup';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleImage,
} from '../../TasksDesktop/style';
import LinkButton from '../../../components2/LinkButton';
import arrowRight from '../../../static/img/arrowright.svg';
import whiteArrowright from '../../../static/img/arrowright-White.svg';
import questionMark from '../../../static/img/question-mark.svg';
import share from '../../../static/img/share.svg';
import shareColor from '../../../static/img/share-color.svg';
import QuestionTooltip from '../../../components2/QuestionTooltip';

function TeacherTasksDesktop(props) {
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
    <div className="tasks-desktop screen">
      <Frame1361>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                Tasks
                <QuestionTooltip text={'View the status of every task that you have assigned for your classes'} />
              </Title>
              <ButtonContainer>
                {' '}
                <Buttons link="#tasks/new" />
              </ButtonContainer>
            </TitleContainer>
            <SubtitleCon>
              Click on a task bubble to finish drafting a task, provide feedback
              or view any current submissions
            </SubtitleCon>
          </TitleAndSubtitleContainer>
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
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  max-width: 1440px;
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
  // height: 90vh;
  padding: 0px 60px;
`;

const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: calc(100vh - 290px);
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
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

export default TeacherTasksDesktop;
