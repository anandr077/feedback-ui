import { Divider, Drawer } from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  DrawerBody,
  DrawerInput,
  DrawerQuestion,
  DrawerQuestionButton,
  DrawerQuestions,
  DrawerSubject,
  DrawerSubjects,
  DrawerVericalNav,
  DrawerVericalNavData,
} from './style';
const drawerWidth = 275;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  background: '#7200E0',
  padding: '16px',
  borderRadius: '12px',
  gap: '4px',
  color: 'white',
  margin: '20px',
  fontFamily: 'IBM Plex Sans',
  position: 'relative',
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
      <Divider />
      <DrawerBody>
        <DrawerInput
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p
          style={{
            fontSize: '12px',
            lineHeight: '15.6px',
            fontWeight: '500',
          }}
        >
          SUBJECTS
        </p>
        <DrawerSubjects>
          {Object.keys(subjects).map((subject, index) => (
            <DrawerSubject
              style={{
                background: selectedSubject === subject ? '#FFCA0F' : '',
              }}
              key={index}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject} ({subjects[subject].length})
            </DrawerSubject>
          ))}
          <div
            style={{
              padding: '8px 12px',
              border: '1px solid #DEC7FF',
              background: '#7200E0',
              borderRadius: '12px',
              cursor: 'pointer',
              color: 'white',
              fontFamily: 'IBM Plex Sans',
            }}
          >
            + New Subject
          </div>
        </DrawerSubjects>

        <DrawerQuestions>
          <DrawerQuestion style={{ color: 'white', background: '#7200E0' }}>
            {selectedQuestion?.question}
          </DrawerQuestion>

          {subjects[selectedSubject]?.map(
            (question, qIndex) =>
              question.question
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) && (
                <DrawerQuestion
                  key={qIndex}
                  onClick={() => setSelectedQuestion(question)}
                >
                  {question.question}
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
