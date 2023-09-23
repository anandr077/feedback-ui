import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../../styledMixins';
import { assignmentsHeaderProps } from '../../../utils/headerProps';
import Buttons from '../../Classes/Buttons';
// import Footer from '../../Footer';
import Header from '../../Header';
import TaskCardContainer from '../../TaskCardContainer';
import TaskFrame1353 from '../../TaskFrame1353';
import './TeacherTasksDesktop.css';
import CheckboxGroup from '../../CheckboxGroup';

function TeacherTasksDesktop(props) {
  const {
    menuItems,
    filterTasks,
    drafts,
    awaitingSubmissions,
    feedbacks,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
  } = props;

  return (
    <div className="tasks-desktop screen">
      <Header headerProps={assignmentsHeaderProps} />
      <Frame1361>
        <TitleContainer>
          <Title>Tasks</Title>
          <Frame1315>
            <CheckboxGroup
              onChange={filterTasks}
              data={menuItems}
            ></CheckboxGroup>
            <ButtonContainer>
              {' '}
              <Buttons link="#tasks/new" />
            </ButtonContainer>
          </Frame1315>
        </TitleContainer>
        <Frame1360>
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
        </Frame1360>
      </Frame1361>
      {/* <Footer /> */}
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
  margin-right: 40px;
`;

const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  font-size: 50px;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1359 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

export default TeacherTasksDesktop;
