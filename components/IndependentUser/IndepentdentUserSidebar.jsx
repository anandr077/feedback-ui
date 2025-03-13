import { Divider, Drawer, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import {
  DrawerBody,
  Heading,
  DrawerInputBox,
  DrawerInput,
  SearchIcon,
  DrawerQuestion,
  DrawerQuestions,
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
  DrawerHeader,
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
import deletered from '../../static/img/deletered.svg';
import Download from '../../static/img/Down.svg';
import { downloadSubmissionPdf } from '../Shared/helper/downloadPdf';
import Loader from '../Loader';
import DeleteGetFeedbackPopup from '../DeleteGetFeedbackPopUp';
import { addDocumentToPortfolio } from '../../service';
const drawerWidth = 219;

function IndepentdentUserSidebar({
  open,
  subjects,
  setSelectedSubject,
  selectedSubject,
  groupedAndSortedData,
  currentSubmissionId,
  deleteQuestionFunction,
}) {
  const theme = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [pageHeight, setPageHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [showMenuMap, setShowMenuMap] = useState({});
  const [questionTitle, setQuestionTitle] = useState(subjects);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteQuestionId, setDeleteQuestionId] = useState('');

  useEffect(() => {
    setQuestionTitle(subjects);
  }, [subjects]);

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
    navigate(newUrl);
  };

  const downloadFunction = (id) => {
    downloadSubmissionPdf(id);
  };


  const deleteFunction = () => {
    setShowDeletePopup(false);
    deleteQuestionFunction(deleteQuestionId);
    
  };

  const addDocument = () => {
    addDocumentToPortfolio(null, null, 'Untitled Question').then((response) => {
      
      const fullUrl = `${window.location.origin}${window.location.pathname}${window.location.search}#/documents/${response.id}`;
      window.open(fullUrl, '_blank');
      console.log('fullUrl',fullUrl);

    });
  }

  return (
    <>
      {showDeletePopup && (
        <DeleteGetFeedbackPopup
          showDeletePopup={showDeletePopup}
          hidedeletePopup={() => setShowDeletePopup(false)}
          deleteFunction={deleteFunction}
        />
      )}
      <SidebarContainer drawerWidth={drawerWidth} open={open}>
        <DrawerHeader onClick={() => addDocument()}>
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
                <SearchIcon src="img/search14gray.svg" />
              </DrawerInputBox>
              <SubjectTitle>SUBJECTS</SubjectTitle>
              <DrawerSubjects>
                {Object.entries(groupedAndSortedData).map(
                  ([key, value], index) => {
                    return (
                      <DrawerSubject
                        key={index}
                        onClick={() => setSelectedSubject(key)}
                        selected={selectedSubject === key}
                      >
                        {key} ({value.length})
                      </DrawerSubject>
                    );
                  }
                )}
              </DrawerSubjects>
              <DrawerQuestions>
                {questionTitle
                  ?.filter((question) => question.subject === selectedSubject)
                  .map((question, qIndex) => {
                    const showMenu = showMenuMap[question.id] || false;
                    return (
                      question?.title
                        ?.toLowerCase()
                        .includes(searchQuery.toLowerCase()) && (
                        <DrawerQuestion
                          key={qIndex}
                          studentStyle={question.id === currentSubmissionId}
                          onClick={() => {
                            setSelectedQuestion(question);
                            handleSubjectClick(question);
                          }}
                        >
                          <QuestionTitle>{question.title}</QuestionTitle>
                          <MenuItems
                            studentStyle={question.id === currentSubmissionId}
                          >
                            <LeftPart>
                              <EachMenuItem
                                onClick={(e) => {
                                  e.stopPropagation();
                                  downloadFunction(question.id);
                                }}
                              >
                                <EachMenuItemImg src={Download} />
                                <EachMenuItemText
                                  purpleColor={
                                    //question.id === currentSubmissionId
                                    false
                                  }
                                >
                                  Download
                                </EachMenuItemText>
                              </EachMenuItem>
                            </LeftPart>
                            <RightPart
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteQuestionId(question.id);
                                setShowDeletePopup(true);
                              }}
                            >
                              <EachMenuItemImg src={deletered} />
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
    </>
  );
}

export default IndepentdentUserSidebar;
