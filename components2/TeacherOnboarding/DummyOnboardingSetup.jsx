import React, { useState } from 'react';
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
import { useClassData } from '../../components/state/hooks.js';
import Loader from '../../components/Loader/index.jsx';

const DummyOnboardingSetup = ({ closeOnboarding }) => {
  const history = useHistory();
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  console.log('classData classData', classData);
  const handleCreateTaskClick = () => {
    history.push('/tasks/new');
    closeOnboarding();
  };

  if(isLoadingclassData){
    return <Loader />
  }
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
            {classData.map((cls, index) => (
              <span
                key={cls.id || index}
                onClick={() => setSelectedClassIndex(index)}
                style={{
                  cursor: 'pointer',
                  fontWeight: selectedClassIndex === index ? 'bold' : 'normal',
                  marginRight: '1rem', // Optional: space out class items
                }}
              >
                {cls.title}
              </span>
            ))}
          </ClassSection>
          <StudentSection>
            <Title>Students</Title>
            <AllStudents>
            {classData[selectedClassIndex]?.students?.map((student, i) => (
                <Student key={student.id || i}>
                  <Dot />
                  <StudentName>{student?.name}</StudentName>
                </Student>
              ))}
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
