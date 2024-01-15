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
  DrawerQuestion,
  DrawerQuestions,
  OverflowShadow,
  TickBox,
  LoadingDiv,
  SidebarContainer,
  StudentContainer,
} from '../IndependentUser/style';
import { Avatar } from '@boringer-avatars/react';
const drawerWidth = 315;

function TeacherSidebar({ open, submission }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

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
    console.log('the studetn id', student);
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
              <SearchIcon src="img/VectorSearch.png" />
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
                      {student.status === 'REVIEWED' && (
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
