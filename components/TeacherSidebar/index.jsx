import { Divider, Drawer } from '@mui/material';
import React, { useState, useEffect } from 'react';
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
  DrawerSubject,
  DrawerSubjects,
  DrawerVericalNav,
  DrawerVericalNavData,
  DividerContainer,
  SubjectTitle,
  RecentBtn,
  StyledAccessTimeIcon,
  StyledMoreVertIcon,
  LoadingDiv,
  AvatarImg,
} from '../IndependentUser/style';
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
  cursor: 'pointer',
}));

function TeacherSidebar({
  open,
  subjects,
  setSelectedSubject,
  selectedSubject,
}) {
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [pageHeight, setPageHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSelectedQuestion(subjects[selectedSubject]?.[0]);
  }, [selectedSubject]);

  useEffect(() => {
    const updateHeight = () => {
      const fullHeight = document.documentElement.scrollHeight;
      if (fullHeight !== pageHeight) {
        setPageHeight(fullHeight - 170);
      }
    };

    const observer = new MutationObserver((mutations) => {
      let shouldUpdateHeight = false;

      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldUpdateHeight = true;
          break;
        }
      }

      if (shouldUpdateHeight) {
        updateHeight();
      }
    });

    const config = { childList: true, subtree: true };

    observer.observe(document.body, config);

    updateHeight();

    return () => observer.disconnect();
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        fontFamily: 'IBM Plex Sans',
        // height: '85vh',
        overflow: 'hidden',
        height: `${pageHeight - 20}px`,
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
      <DrawerBody>
        {!subjects[selectedSubject] ? (
          <LoadingDiv>Loading...</LoadingDiv>
        ) : (
          <>
            <Heading>Students</Heading>
            <DrawerInputBox>
              <DrawerInput
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon src="img/VectorSearch.png" />
            </DrawerInputBox>
            <DrawerQuestions pageHeight={pageHeight}>
              <DrawerQuestion
                style={{
                  color: 'white',
                  background: 'var(--royal-purple)',
                  fontWeight: '500',
                }}
              >
                <AvatarImg src="img/mask-group@2x.png" />
                {selectedQuestion?.title.length >= 2 ? (
                  <>
                    {selectedQuestion?.title}
                    <OverflowShadow blueBackground={true}></OverflowShadow>
                    <span className="tooltip-text">
                      {selectedQuestion?.title}
                    </span>
                  </>
                ) : (
                  selectedQuestion?.title
                )}
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
                      <AvatarImg src="img/mask-group@2x.png" />
                      {question.title.length >= 28 ? (
                        <>
                          {question.title}
                          <OverflowShadow></OverflowShadow>
                          <span className="tooltip-text">{question.title}</span>
                        </>
                      ) : (
                        question.title
                      )}
                    </DrawerQuestion>
                  )
              )}
            </DrawerQuestions>
          </>
        )}
      </DrawerBody>
    </Drawer>
  );
}

export default TeacherSidebar;
