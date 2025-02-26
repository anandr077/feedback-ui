import React, { useState } from 'react';
import { DialogContent } from '@mui/material';
import { useHistory } from 'react-router-dom';
import {
  MainContainer,
  Header,
  MainSection,
  UserSection,
  Title,
  ClassSection,
  StudentSection,
  Student,
  StudentName,
  AllStudents,
  CreateTaskButton,
  ClassName,
  Image,
  ClassContainer,
} from './OnboardingClassStyle.js';
import CloseButton from '../Buttons/CloseButton/index.jsx';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle.js';
import RectangularBigBtn from '../Buttons/RectangularbigBtn/index.jsx';
import { useClassData } from '../../components/state/hooks.js';
import Loader from '../../components/Loader/index.jsx';
import { getUserName } from '../../userLocalDetails.js';
import { Avatar } from '@boringer-avatars/react';
import PurpleBorderNoBackgroundBtn from '../Buttons/PurpleBorderNoBackgroundBtn/index.jsx';

const OnboardingClass = ({ closeOnboarding }) => {
  const history = useHistory();
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

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
            <Avatar
              title={false}
              size={25}
              variant="beam"
              name={getUserName()}
              square={false}
            />
            <Title style={{ marginBottom: '0px' }}>{getUserName()}</Title>
          </UserSection>
          <ClassSection>
            <Title>Classes</Title>
            <ClassContainer>
              {classData.map((cls, index) => (
                <ClassName
                  key={cls.id || index}
                  onClick={() => setSelectedClassIndex(index)}
                  isSelected={selectedClassIndex === index}
                >
                  {cls.title}
                </ClassName>
              ))}
            </ClassContainer>
          </ClassSection>
          <StudentSection>
            <Title>Students</Title>
            <AllStudents>
              {classData[selectedClassIndex]?.students?.map((student, i) => (
                <Student key={student.id || i}>
                  <Avatar
                    title={false}
                    size={25}
                    variant="beam"
                    name={student?.name}
                    square={false}
                  />
                  <StudentName>{student?.name}</StudentName>
                </Student>
              ))}
            </AllStudents>
          </StudentSection>
        </MainSection>
        <CreateTaskButton>
          <PurpleBorderNoBackgroundBtn text={"Request class change"}/>
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

export default OnboardingClass;
