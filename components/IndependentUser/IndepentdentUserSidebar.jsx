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
import threedotsc from '../../static/img/threedotsc.svg';
import threedotsw from '../../static/img/threedotsw.svg';
import deleteIcon from '../../static/img/Bin.svg';
import deletered from '../../static/img/deletered.svg';
import Download from '../../static/img/Down.svg';
import selectedDownload from '../../static/icons/download.png';
import closeCircleWhite from '../../static/icons/closecircle.png';
import editIcon from '../../static/img/edit.svg';
import { downloadSubmissionPdf } from '../Shared/helper/downloadPdf';
import { deleteSubmissionById } from '../../service';
import Loader from '../Loader';
import DeleteGetFeedbackPopup from '../DeleteGetFeedbackPopUp';
const drawerWidth = 219;

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
    history.push(newUrl);
  };

  const downloadFunction = (id) => {
    downloadSubmissionPdf(id);
  };

  const getNextQuestionId = (currentId) => {
    const currentIndex = questionTitle.findIndex(
      (question) => question.id === currentId
    );
    const nextIndex =
      currentIndex + 1 < questionTitle.length ? currentIndex + 1 : 0;
    return questionTitle[nextIndex]?.id;
  };

  const deleteFunction = () => {
    setShowDeletePopup(false);
    deleteSubmissionById(deleteQuestionId).then(() => {
      if (deleteQuestionId === currentSubmissionId) {
        const nextId = getNextQuestionId(deleteQuestionId);
        history.push(`/documents/${nextId}`);
      } else {
        const deletedTitle = questionTitle.filter(
          (question) => question.id !== deleteQuestionId
        );
        setQuestionTitle(deletedTitle);
      }
    });
  };

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
        <DrawerHeader onClick={() => window.open('#/getFeedback', '_blank')}>
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
                          <QuestionTitle>
                            {question.title}
                          </QuestionTitle>
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
                                <EachMenuItemImg
                                  src={Download}
                                />
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
                              <EachMenuItemImg
                                src={
                                  question.id === currentSubmissionId
                                    ? deleteIcon
                                    : deletered
                                }
                              />
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
