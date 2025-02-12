import React from 'react';
import { DialogContent } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {
  MainContainer,
  Header,
  MainSection,
  UserSection,
  Dot,
  Title,
  ClassSection,
  StudentSection,
  Student,
  StudentName,
  AllStudents,
  CreateTaskButton,
} from './DummyOnboardingSetupStyle.js';
import CloseButton from '../Buttons/CloseButton/index.jsx';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle.js';
import RectangularBigBtn from '../Buttons/RectangularbigBtn/index.jsx';

const DummyOnboardingSetup = ({ closeOnboarding }) => {
  const history = useHistory();
  const handleCreateTaskClick = () => {
    history.push('/tasks/new');
    closeOnboarding();
  };
  return (
    <DialogContent>
      <CloseButton onclickFn={closeOnboarding} />
      <MainContainer>
        <Header>
          <MainTitle>We have already set up some things for you</MainTitle>
          <Subtitle>
            Your classes and students have already been set up.
          </Subtitle>
        </Header>
        <MainSection>
          <UserSection>
            <Dot></Dot>
            <Title>User Name</Title>
          </UserSection>
          <ClassSection>
            <Title>Classes</Title>
            <span>English 1</span>
            <span>English 2</span>
          </ClassSection>
          <StudentSection>
            <Title>Students</Title>
            <AllStudents>
              <Student>
                <Dot></Dot>
                <StudentName>Lastname, FirstName</StudentName>
              </Student>
              <Student>
                <Dot></Dot>
                <StudentName>Lastname, FirstName</StudentName>
              </Student>
              <Student>
                <Dot></Dot>
                <StudentName>Lastname, FirstName</StudentName>
              </Student>
            </AllStudents>
          </StudentSection>
        </MainSection>
        <CreateTaskButton>
          <RectangularBigBtn
            leftIcon={'/icons/pluswhite.svg'}
            text={'Create your first task'}
            onClickFn={handleCreateTaskClick}
          />
        </CreateTaskButton>
      </MainContainer>
    </DialogContent>
  );
};

export default DummyOnboardingSetup;
