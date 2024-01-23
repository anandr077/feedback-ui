import { Divider, Drawer, MenuItem } from '@mui/material';
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
  MenuItemsDots,
  QuestionTitle,
  MenuItemsContainer,
  MenuItems,
  EachMenuItem,
  EachMenuItemText,
  EachMenuItemImg,
  LeftPart,
  RightPart,
  EachMenuItemTextDel,
} from './style';
import threedotsc from '../../static/img/threedotsc.svg';
import threedotsw from '../../static/img/threedotsw.svg';
import closecircleRed from '../../static/img/closecircleRed.svg';
import Download from '../../static/img/Down.svg';
import selectedDownload from '../../static/icons/download.png';
import closeCircleWhite from '../../static/icons/closecircle.png';
import preview from '../../static/img/preview.svg';
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
  currentSubmissionId,
}) {
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [pageHeight, setPageHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();
  const [showMenuMap, setShowMenuMap] = useState({});

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

  const downloadFunction = () => {
    console.log('download function');
  };
  const deleteFunction = () => {
    console.log('delete function');
  };

  return (
    <SidebarContainer drawerWidth={drawerWidth} open={open}>
      <DrawerHeader onClick={() => history.push('/docs')}>
        + New Draft
      </DrawerHeader>
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
              <SearchIcon src="img/vectorsearch.png" />
            </DrawerInputBox>
            <SubjectTitle>SUBJECTS</SubjectTitle>
            <DrawerSubjects>
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
                .map((question, qIndex) => {
                  const showMenu = showMenuMap[question.id] || false;
                  return (
                    question.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) && (
                      <DrawerQuestion
                        key={qIndex}
                        studentStyle={question.id === currentSubmissionId}
                      >
                        <QuestionTitle>
                          {question.title}
                          <OverflowShadow
                            blueBackground={question.id === currentSubmissionId}
                          ></OverflowShadow>
                        </QuestionTitle>
                        <MenuItems
                          studentStyle={question.id === currentSubmissionId}
                        >
                          <LeftPart>
                            <EachMenuItem
                              onClick={() => {
                                setSelectedQuestion(question);
                                handleSubjectClick(question);
                              }}
                              style={{
                                display:
                                  question.id === currentSubmissionId
                                    ? 'none'
                                    : 'flex',
                              }}
                            >
                              <EachMenuItemImg src={preview} />
                              <EachMenuItemText purpleColor={question.id === currentSubmissionId}>View</EachMenuItemText>
                            </EachMenuItem>
                            <EachMenuItem onClick={() => downloadFunction()}>
                              <EachMenuItemImg
                                src={
                                  question.id === currentSubmissionId
                                    ? selectedDownload
                                    : Download
                                }
                              />
                              <EachMenuItemText purpleColor={question.id === currentSubmissionId}>Download</EachMenuItemText>
                            </EachMenuItem>
                          </LeftPart>
                          <RightPart onClick={() => deleteFunction()}>
                            <EachMenuItemImg
                              src={
                                question.id === currentSubmissionId
                                  ? closeCircleWhite
                                  : closecircleRed
                              }
                            />
                            <EachMenuItemTextDel
                              studentStyle={question.id === currentSubmissionId}
                            >
                              Delete
                            </EachMenuItemTextDel>
                          </RightPart>
                        </MenuItems>
                      </DrawerQuestion>
                    )
                  );
                })}
            </DrawerQuestions>
          </>
        )}
      </DrawerBody>
    </SidebarContainer>
  );
}

export default IndepentdentUserSidebar;
