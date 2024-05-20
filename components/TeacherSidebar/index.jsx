import { Divider, Drawer } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import {
  DrawerBody,
  Heading,
  DrawerInputBox,
  DrawerInput,
  SearchIcon,
  DrawerQuestions,
  TickBox,
  LoadingDiv,
  SidebarContainer,
  StudentContainer,
} from '../IndependentUser/style';
import {DrawerQuestion, OverflowShadow} from './style'
import { Avatar } from '@boringer-avatars/react';
const drawerWidth = 219;

function TeacherSidebar({ open, submission }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  console.log('the submission is', submission)

  const studentsList = submission.studentsSubmissions;

  const avatar = studentsList.map((student) => (
    <Avatar
      title={false}
      size={25}
      variant="beam"
      name={student.studentName}
      square={false}
    />
  ));

  const handleQuestionClick = (student) => {
    const newUrl = `/submissions/${student.submissionId}`;
    history.push(newUrl);
  };

  return (
    <SidebarContainer
      drawerWidth={drawerWidth}
      open={open}
    >
      <DrawerBody>
        {!submission ? (
          <LoadingDiv>Loading...</LoadingDiv>
        ) : (
          <StudentContainer>
            <Heading>Students</Heading>
            <DrawerInputBox>
              <DrawerInput
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon src="img/search14gray.svg" />
            </DrawerInputBox>
            <DrawerQuestions>
              {studentsList?.map(
                (student, qIndex) =>
                  student.studentName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) && (
                    <DrawerQuestion
                      key={qIndex}
                      onClick={() => handleQuestionClick(student)}
                      studentStyle={submission.id === student.submissionId}
                    >
                      {avatar[qIndex]}
                      {student.studentName.length >= 28 ? (
                        <>
                          {student.studentName}
                          <OverflowShadow></OverflowShadow>
                          <span className="tooltip-text">
                            {student.studentName}
                          </span>
                        </>
                      ) : (
                        student.studentName
                      )}
                      {(student.status === 'REVIEWED' || student.status === 'CLOSED') && (
                        <TickBox>
                          <img src="img/tickCircle.png" />
                        </TickBox>
                      )}
                    </DrawerQuestion>
                  )
              )}
            </DrawerQuestions>
          </StudentContainer>
        )}
      </DrawerBody>
    </SidebarContainer>
  );
}

export default TeacherSidebar;

