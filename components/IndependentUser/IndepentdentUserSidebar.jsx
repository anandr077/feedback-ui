import { Divider, Drawer } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
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
  SidebarContainer,
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
  cursor: 'pointer',
}));

function IndepentdentUserSidebar({
  open,
  subjects,
  setSelectedSubject,
  selectedSubject,
  groupedAndSortedData,
  currentSubmissionId
}) {
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [pageHeight, setPageHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    setSelectedQuestion(subjects[0]);
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

  const handleSubjectClick = (subject) => {
    const newUrl = `/documents/${subject.id}`;
    history.push(newUrl);
  };

  return (
    <SidebarContainer drawerWidth={drawerWidth} open={open}>
      <DrawerHeader>+ New Draft</DrawerHeader>
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <DrawerBody>
        {!subjects ? (
          <LoadingDiv>Loading...</LoadingDiv>
        ) : (
          <>
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
              {Object.entries(groupedAndSortedData).map(
                ([key, value], index) => {
                  return (
                    <DrawerSubject
                      style={{
                        background:
                          selectedSubject === key ? '#FFCA0F' : '#FFEFB5',
                      }}
                      key={index}
                      onClick={() => setSelectedSubject(key)}
                    >
                      {key} ({value.length})
                    </DrawerSubject>
                  );
                }
              )}
            </DrawerSubjects>
            <DrawerQuestions>
              

              {subjects
                ?.filter((question) => question.subject === selectedSubject)
                .map(
                  (question, qIndex) => {

                    



                    return question.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) && (
                      <DrawerQuestion
                        key={qIndex}
                        onClick={() => {
                          setSelectedQuestion(question);
                          handleSubjectClick(question);
                        }}
                        studentStyle={question.id === currentSubmissionId}
                      >
                        {question.title.length >= 28 ? (
                          <>
                            {question.title}
                            <OverflowShadow></OverflowShadow>
                            <span className="tooltip-text">
                              {question.title}
                            </span>
                          </>
                        ) : (
                          question.title
                        )}
                      </DrawerQuestion>
                    )
                        })}
            </DrawerQuestions>
          </>
        )}
      </DrawerBody>
    </SidebarContainer>
  );
}

export default IndepentdentUserSidebar;
