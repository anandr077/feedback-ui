import { Divider, Drawer } from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  DrawerBody,
  DrawerInputBox,
  DrawerInput,
  SearchIcon,
  DrawerQuestion,
  DrawerQuestionButton,
  DrawerQuestions,
  OverflowShadow,
  DrawerSubject,
  DrawerSubjects,
  DrawerVericalNav,
  DrawerVericalNavData,
  DividerContainer,
  SubjectTitle,
  RecentBtn,
  StyledAccessTimeIcon,
  StyledMoreVertIcon,
} from './style';
const drawerWidth = 315;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  background: 'var(--light-mode-purple)',
  padding: '16px',
  borderRadius: '12px',
  gap: '4px',
  color: 'var(--white)',
  margin: '20px',
  fontFamily: 'var(--font-family-ibm_plex_sans)',
  fontSize: 'var(--font-size-xl)',
  fontWeight: '500',
  position: 'relative',
  cursor: 'pointer'
}));

function IndepentdentUserSidebar({
  open,
  subjects,
  setSelectedSubject,
  selectedSubject,
}) {
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = React.useState();

  React.useEffect(() => {
    setSelectedQuestion(subjects[selectedSubject]?.[0]);
  }, [selectedSubject]);
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        fontFamily: 'IBM Plex Sans',
        // height: '85vh',
        height: '100%',
        ovverflowY: 'scroll',
        '& .MuiDrawer-paper': {
          width: '100%',
          boxSizing: 'border-box',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none',
            width: '0px',
          },
          position: 'relative',
          top: '0px',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>+ New Draft</DrawerHeader>
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <DrawerBody>
        <DrawerInputBox>
          <DrawerInput
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon src="img/VectorSearch.png" />
        </DrawerInputBox>
        <SubjectTitle>SUBJECTS</SubjectTitle>
        <DrawerSubjects>
          <RecentBtn>
            <StyledAccessTimeIcon /> Recent <StyledMoreVertIcon />
          </RecentBtn>
          {Object.keys(subjects).map((subject, index) => (
            <DrawerSubject
              style={{
                background: selectedSubject === subject ? '#FFCA0F' : '#FFEFB5',
              }}
              key={index}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject} ({subjects[subject].length})
            </DrawerSubject>
          ))}
        </DrawerSubjects>

        <DrawerQuestions>
          <DrawerQuestion
            style={{ color: 'white', background: 'var(--royal-purple)', fontWeight: '500' }}
          >
            {selectedQuestion?.title}
          </DrawerQuestion>

          {subjects[selectedSubject]?.map(
            (question, qIndex) =>
              question.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) && (
                <DrawerQuestion
                  key={qIndex}
                  onClick={() => setSelectedQuestion(question)}
                >
                  {question.title}
                  <OverflowShadow></OverflowShadow>
                </DrawerQuestion>
              )
          )}
          <DrawerQuestionButton>See more</DrawerQuestionButton>
        </DrawerQuestions>
      </DrawerBody>
    </Drawer>
  );
}

export default IndepentdentUserSidebar;
