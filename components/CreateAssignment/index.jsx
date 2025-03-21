import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Radio from '@mui/material/Radio';
import {
  getClasses,
  updateAssignment,
  getAssignmentById,
  publishAssignment,
  addFocusArea,
  getAllMarkingCriteria,
  deleteAssignment,
  getStudentsForClass,
  getSmartAnnotations,
  getFeedbackBanks,
  getAllSubmissions,
  nextSubmission
} from '../../service';
import { assignmentsHeaderProps } from '../../utils/headerProps';
import _ from 'lodash';

import CheckboxBordered from '../CheckboxBordered';
import CreateAAssignmentLaptop from '../CreateAAssignmentLaptop';
import DateSelector from '../DateSelector';
import ReactiveRender, { isMobileView } from '../ReactiveRender';
import TheoryQuestionFrame from '../TheoryQuestionFrame';
import Loader from '../Loader';
import FocusAreaDialog from './Dialog/newFocusArea';
import { getFocusAreas, getAllColors } from '../../service';
import PreviewDialog from '../Shared/Dialogs/preview/previewCard';
import DeleteAssignmentPopup from '../DeleteAssignmentPopUp';
import GeneralPopup from '../GeneralPopup';
import {
  StyledRadioGroup,
  StyledFormControlLabel,
  CheckboxContainer,
  CheckBoxText,
  LableAndImgContainer,
} from './CreateAssignmentStyle';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import DragAndDrop from './DragAndDrop';
import questionMark from '../../static/img/question-mark.svg';
import QuestionTooltip from '../../components2/QuestionTooltip';
import CommentBankDialog from '../Shared/Dialogs/commentBank';
import { getUserId } from '../../userLocalDetails';
import { toast } from 'react-toastify';
import Toast from '../Toast';
import Header from '../Header2';
import { goToNewUrl } from '../FeedbacksComponents/FeedbacksRoot/functions';
import { useHistory } from 'react-router-dom';
import { useClassData } from '../state/hooks';
import CopyLinkDialog from '../../components2/CopyLinkDialog';

const createAssignmentHeaderProps = assignmentsHeaderProps;

export default function CreateAssignment(props) {
  const UserId = getUserId();
  const unblockRef = useRef(null);
  const queryClient = useQueryClient();
  const { assignmentId } = useParams();
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);
  const [showPublishPopup, setShowPublishPopup] = React.useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showSaveAsDraftPopup, setSaveAsDraftPopup] = React.useState(false);
  const [showCopyLinkPopup, setShowCopyLinkPopup] = useState(false);
  const [createdTaskLink, setCreatedTaskLink] = useState('')
  const [isChanged, setIsChanged] = React.useState(false);
  const baseUrl = window.location.origin;

  const draft = {
    id: uuidv4(),
    title: '',
    classIds: [],
    questions: [newQuestion(1)],
    reviewedBy: 'NONE',
    status: 'DRAFT',
    reviewers: {},
    dueAt: dayjs().add(3, 'day'),
  };
  const [assignment, setAssignment] = React.useState(draft);

  const [openFocusAreaDialog, setOpenFocusAreaDialog] = React.useState(false);
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    React.useState(false);
  const [openCommentBankPreviewDialog, setCommentBankPreviewDialog] =
    React.useState(false);
  const [currentMarkingCriteria, setCurrentMarkingCriteria] = React.useState(
    []
  );
  const [currentCommentBank, setCurrentCommentBank] = React.useState([]);

  nextSubmission(assignmentId).then((res) => {
    console.log("res " + res)
    if (res !== undefined && res !== null)
      history.push(`/submissions/${res}`);
  }).catch((error) => {
    console.log(error);
  });
  const getAssignment = async (id) => {
    if (id === 'new') {
      return draft;
    } else {
      return await getAssignmentById(id);
    }
  };
  const [isLoading, setIsLoading] = React.useState(true);
  const [classes, setClasses] = React.useState([]);
  const [allFocusAreas, setAllFocusAreas] = React.useState([]);
  const [allFocusAreasColors, setAllFocusAreasColors] = React.useState([]);
  const [allMarkingCriterias, setAllMarkingCriterias] = React.useState([]);
  const [allCommentBanks, setAllCommentBanks] = React.useState([]);
  const [allClassStudents, setAllClassStudents] = React.useState([]);
  const [classId, setClassId] = React.useState();
  const [updateDueDateTick, setUpdateDueDateTick] = React.useState(false);
  const [submissions, setSubmissions] = React.useState([]);
  const mobileView = isMobileView();
  const [markingPlaceholder, setMarkingPlaceholder] = React.useState(
    mobileView ? 'Select' : 'Select Marking Template'
  );
  const [commentBankPlaceholder, setCommentBankPlaceholder] = React.useState(
    mobileView ? 'Select' : 'Select Comment Bank'
  );
  const [pendingLocation, setPendingLocation] = React.useState(null);
  const history = useHistory();

  const getStudentById = (id) => {
    return Object.values(allClassStudents)
      .flatMap((a) => a)
      .find((student) => student.id === id);
  };
  const getReviewersForStudents = (reviewers) => {
    const a = _.zipObject(
      _.map(
        assignment.classIds
          .flatMap((classId) => allClassStudents[classId])
          .splice(0, reviewers.length),
        'id'
      ),
      _.map(reviewers, 'id')
    );

    return a;
  };

  

  React.useEffect(() => {
    unblockRef.current = history.block((location, action) => {
      if (assignment.status === 'DRAFT' && isChanged) {
        setPendingLocation(location);
        setSaveAsDraftPopup(true);
        return false;
      }
      return true;
    });

    return () => {
      if (unblockRef.current) {
        unblockRef.current();
      }
   };
  }, [history, isChanged]);
  React.useEffect(() => {
    Promise.all([
      getClasses(),
      getAssignment(assignmentId),
      getFocusAreas(),
      getAllColors(),
      getAllMarkingCriteria(),
      getFeedbackBanks(),
      getAllSubmissions(assignmentId)
    ]).then(
      ([
        classesResult,
        assignmentResult,
        focusAreas,
        colors,
        markingCriteriasResult,
        commentBanks,
        allSubmissions
      ]) => {
        setSubmissions(allSubmissions)
        let userCommentBanks = commentBanks._embedded.commentbanks.filter(
          (commentBank) => commentBank.ownerId === UserId
        );
        setAssignment((prevState) => ({
          ...prevState,
          ...assignmentResult,
          classIds: assignmentResult.classIds ?? [],
        }));
        markingCriteriasResult.unshift({
          title: markingPlaceholder,
          id: 'no_marking_criteria',
        });
        userCommentBanks.unshift({
          title: commentBankPlaceholder,
          id: 'no_comment_criteria',
        });
        setAllMarkingCriterias(markingCriteriasResult),
          setAllCommentBanks(userCommentBanks),
          setClasses(classesResult);
        setAllFocusAreas(focusAreas);
        setAllFocusAreasColors(colors);
        getAllStudentsForClasses(classesResult).then((result) => {
          setAllClassStudents(result);
          setIsLoading(false);
        });
      }
    );
  }, [assignmentId]);

  React.useEffect(() => {
    assignment.dueAt && setUpdateDueDateTick(true);
  }, [assignment]);

  async function getAllStudentsForClasses(classesArray) {
    const promises = classesArray.map(async (classItem) => {
      const classId = String(classItem.id); // Ensure classId is a string
      try {
        const students = await getStudentsForClass(classId);
        return { [classId]: students };
      } catch (error) {
        console.error(`Failed to get students for class ${classId}:`, error);
        return { [classId]: null }; // Or [], depending on how you want to handle errors
      }
    });

    const results = await Promise.all(promises);

    return Object.assign({}, ...results);
  }
  const studentDropdown = assignment.reviewedBy === 'P2P';


  if (isLoading || isLoadingclassData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  function handleMarkingCriteriaPreview(markingCriteria) {
    console.log('markingCriteria',markingCriteria)
    setCurrentMarkingCriteria(markingCriteria);
    setMarkingCriteriaPreviewDialog(Object.keys(markingCriteria).length > 0);
  }
  function handleCommentBankPreview(commentBankId) {
    let commentBank = allCommentBanks.find(
      (commentBank) => commentBank.id === commentBankId
    );

    setCurrentCommentBank(commentBank);
    setCommentBankPreviewDialog(commentBank?.smartComments?.length > 0);
  }
  const handleChangeReviewedBy = (newReviewers) => {
    setIsChanged(true);
    const students = assignment.classIds.flatMap(
      (classId) => allClassStudents[classId]
    );
    const isUniqueAtEachIndex = newReviewers.every(
      (newReviewer, index) => newReviewer.id !== students[index].id
    );

    if (isUniqueAtEachIndex) {
      setAssignment((prevAssignment) => ({
        ...prevAssignment,
        reviewers: getReviewersForStudents(newReviewers),
      }));
    }
  };

  const handleTitleChange = (e) => {
    setIsChanged(true);
    if (e.target.value.length > 140) {
      return;
    }
    const newTitle = e.target.value;
    setAssignment((prevAssignment) => ({ ...prevAssignment, title: newTitle }));
  };
  const feedbackMethodUpdate = (newReviewedBy) => {
    setIsChanged(true);
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      reviewedBy: newReviewedBy,
    }));
  };
  const updateDueAt = (newDueAt) => {
    setIsChanged(true);
    setAssignment((prevAssignment) => ({ ...prevAssignment, dueAt: newDueAt }));
  };
  const cleanformattingTextBox = (e) => {
    e.currentTarget.style.border = '1px solid var(--text)';
  };
  const cleanformattingDiv = (e) => {
    // e.currentTarget.style.border = '1px solid #E0E0E0';
  };

  const questionFrames = () => {
    return assignment.questions.map((question) => questionFrame(question));
  };
  const questionFrame = (question) => {
    return (
      <TheoryQuestionFrame
        serialNumber={question.serialNumber}
        deleteQuestionFrameFn={deleteQuestion}
        questionDetails={question}
        UpdateQuestionFrame={updateQuestionType}
        updateQuestion={updateQuestion}
        updateFocusAreas={updateFocusAreas}
        cleanformattingTextBox={cleanformattingTextBox}
        cleanformattingDiv={cleanformattingDiv}
        createNewFocusArea={createNewFocusArea}
        allFocusAreas={allFocusAreas}
        allMarkingCriterias={allMarkingCriterias}
        updateMarkingCriteria={updateMarkingCriteria}
        updateCommentBank={updateCommentBank}
        handleMarkingCriteriaPreview={handleMarkingCriteriaPreview}
        handleCommentBankPreview={handleCommentBankPreview}
        setAllFocusAreas={setAllFocusAreas}
        allCommentBanks={allCommentBanks}
        setIsChanged={setIsChanged}
      />
    );
  };

  function addQuestion() {
    setIsChanged(true);
    const newId = assignment.questions.length + 1;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: [...prevAssignment.questions, newQuestion(newId)],
    }));
  }

  function deleteQuestion(serialNumber) {
    setIsChanged(true);
    setAssignment((prevAssignment) => {
      const newQuestions = prevAssignment.questions.filter(
        (question) => question.serialNumber !== serialNumber
      );
      return {
        ...prevAssignment,
        questions: newQuestions.map((question, index) => {
          if (question.serialNumber > serialNumber) {
            // Update the questionSerialNumber for the options as well
            const updatedOptions = question.options.map((option) => ({
              ...option,
              questionSerialNumber: index + 1,
            }));
            return {
              ...question,
              serialNumber: index + 1,
              options: updatedOptions,
            };
          }
          return question;
        }),
      };
    });
  }

 

  function updateQuestion(id, newContent) {
    setIsChanged(true);
    if (newContent.length > 500) {
      return;
    }
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id ? { ...q, question: newContent } : q
      ),
    }));
  }

  const removeAppendFunction = (markingCriteria) => {
    let newMarkingCriteria = { ...markingCriteria };
    if (newMarkingCriteria.type === 'STRENGTHS_TARGETS') {
      newMarkingCriteria.title = newMarkingCriteria.title.replace(' (S&T)', '');
    }
    if (newMarkingCriteria.type === 'RUBRICS') {
      newMarkingCriteria.title = newMarkingCriteria.title.replace(' (R)', '');
    }
    return newMarkingCriteria;
  };

  const updateMarkingCriteria = (id, markingCriteria) => {
    const updatedMarkingCriteriaObj = removeAppendFunction(markingCriteria);
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id
          ? { ...q, markingCriteria: updatedMarkingCriteriaObj }
          : q
      ),
    }));
  }
  function updateCommentBank(id, commentBank) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id ? { ...q, commentBankId: commentBank.id } : q
      ),
    }));
  }

  function updateQuestionType(id, newType) {
    setIsChanged(true);

    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((question) =>
        question.serialNumber === id ? { ...question, type: newType } : question
      ),
    }));
  }

  function updateFocusAreas(id, newFocusAreas) {
    setIsChanged(true);
    const focusAreas = allFocusAreas.filter((focusArea) =>
      newFocusAreas.includes(focusArea.id)
    );
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id
          ? { ...q, focusAreaIds: newFocusAreas, focusAreas }
          : q
      ),
    }));
  }

  function createNewFocusArea() {
    setOpenFocusAreaDialog(true);
  }

  function addNewFocusArea(title, description, color) {
    setOpenFocusAreaDialog(false);
    if (title !== '' && color !== '') {
      addFocusArea({
        title,
        description,
        color,
      }).then((response) => {
        if (response) {
          setAllFocusAreas([...allFocusAreas, response]);
        }
      });
    }
  }

  const handleClassCheckboxChange = (classId, isChecked) => {
    setIsChanged(true);
    setAssignment((prevAssignment) => {
      if (isChecked) {
        setClassId(classId);
        return {
          ...prevAssignment,
          reviewers: {},
          classIds: [...prevAssignment.classIds, classId],
        };
      } else {
        return {
          ...prevAssignment,
          reviewers: {},
          classIds: prevAssignment.classIds.filter((id) => id !== classId),
        };
      }
    });
  };

  const saveDraft = () => {
    if (showSaveAsDraftPopup) setSaveAsDraftPopup(false);
    let updatedAssignment = { ...assignment };
    if (updatedAssignment.reviewedBy === 'NONE') {
    updatedAssignment.reviewedBy = 'TEACHER';
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      reviewedBy: 'TEACHER',
    }));
  }
    updateAssignment(assignment.id, updatedAssignment).then((res) => {
      if (res.status === 'DRAFT') {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });

        toast(<Toast message={'Task saved'} />);
        if (pendingLocation)  goToNewUrl(pendingLocation, history, unblockRef);
        return;
      } else {
        toast(<Toast message={'Could not save task'} />);
        return;
      }
    });
  };

  const isTitleValid = () => {
    assignment.title = assignment.title.trim();
    if (assignment.title.length > 0) {
      return true;
    } else {
      document.getElementById('assignmentNameContainer');
      assignmentNameContainer.style.border = '1px solid red';

      toast(<Toast message={'Please enter task title'} />);
      return false;
    }
  };
  const isQuestionsValid = () => {
    let invalidQuestion = false;
    const questions = assignment.questions;
    questions.map((question) => {
      if (question.question) {
        question.question = question.question.trim();
        if (question.question.length === 0) {
          const questionContainer = document.getElementById(
            'questionContainer_' + question.serialNumber
          );
          questionContainer.style.border = '1px solid red';
          const questionTextBox = document.getElementById(
            'question_textBox' + question.serialNumber
          );
          questionTextBox.style.border = '1px solid red';
          invalidQuestion = true;

          toast(
            <Toast message={'Please enter question ' + question.serialNumber} />
          );
          return false;
        }
        if (question.type === 'MCQ') {
          let isCorrectPresent = false;
          question.options.map((option, index) => {
            option.option = option.option.trim();
            if (option.option.length === 0) {
              const optionTextBox = document.getElementById(
                'option_' + question.serialNumber + '_' + index
              );
              optionTextBox.style.border = '1px solid red';
              invalidQuestion = true;
            }
            if (option.isCorrect) {
              isCorrectPresent = true;
            }
          });
          if (invalidQuestion) {
            toast(
              <Toast
                message={
                  'Please enter options for question ' + question.serialNumber
                }
              />
            );

            return false;
          }
          if (!isCorrectPresent) {
            const optionContainer = document.getElementById(
              'optionFrame_' + question.serialNumber
            );
            optionContainer.style.border = '1px solid red';
            invalidQuestion = true;

            toast(
              <Toast
                message={
                  'Please select atleast one correct option for question ' +
                  question.serialNumber
                }
              />
            );
            return false;
          }
        }
      } else {
        const questionContainer = document.getElementById(
          'questionContainer_' + question.serialNumber
        );
        questionContainer.style.border = '1px solid red';
        const questionTextBox = document.getElementById(
          'question_textBox' + question.serialNumber
        );
        questionTextBox.style.border = '1px solid red';
        invalidQuestion = true;

        toast(
          <Toast message={'Please enter question ' + question.serialNumber} />
        );
        return false;
      }
    });
    return invalidQuestion ? false : true;
  };

  const isClassesValid = () => {
    if (assignment.classIds.length > 0) {
      return true;
    } else {
      const classesContainer = document.getElementById('classesContainer');
      classesContainer.style.border = '1px solid red';

      toast(<Toast message={'Please select atleast one class'} />);
    }
  };

  const isDateValid = () => {
    const assignmentDate = new Date(assignment.dueAt);
    if (assignmentDate.getTime() - Date.now() > 3600000) {
      return true;
    } else {
      const dueDateContainer = document.getElementById('timeContainer');
      dueDateContainer.style.border = '1px solid red';

      toast(
        <Toast message={'Please choose due time at least one hour from now'} />
      );
      return false;
    }
  };

  const isDnDValid = () => {
    if (studentDropdown) {
      if (
        assignment.classIds.flatMap((classId) => allClassStudents[classId])
          .length === Object.keys(assignment.reviewers).length
      ) {
        return true;
      } else {
        const dueDateContainer = document.getElementById('DnDContainer');
        dueDateContainer.style.border = '1px solid red';

        toast(<Toast message={'Please add reviewer for each student'} />);
        return false;
      }
    } else {
      if(assignment.reviewedBy === 'TEACHER') return true;
      else if(assignment.reviewedBy === 'JEDDAI') return true;
      else if(assignment.reviewedBy === 'JEDDAI_ASSISTED') return true;
      else{
        const dueDateContainer = document.getElementById('DnDContainer');
        dueDateContainer.style.border = '1px solid red';

        toast(<Toast message={'Please add reviewer'} />);
      }

    }
  };

  const isAssignmentValid = () => {
    return isTitleValid() &&
       isClassesValid() &&
      isQuestionsValid() &&
      isDnDValid() &&
      isDateValid()
      ? true
      : false;
  };

  const publish = () => {
    if(isChanged) setIsChanged(false);
    setShowPublishPopup(false);
    if (isAssignmentValid()) {
      updateAssignment(assignment.id, assignment).then((_) => {
        publishAssignment(assignment.id).then((res) => {
          if (res.status === 'PUBLISHED') {
            queryClient.invalidateQueries(['notifications']);
            queryClient.invalidateQueries(['tasks']);
            queryClient.invalidateQueries(['assignments']);
            queryClient.invalidateQueries((queryKey) => {
              return queryKey.includes('class');
            });

            toast(<Toast message={'Task published'} link={res.link} />);
            setCreatedTaskLink(res.id)
            setShowCopyLinkPopup(true)
          } else {
            toast(<Toast message={'Task creation failed'} link={res.link} />);
            return;
          }
        });
      });
    } else {
    }
  };

  const updateCurrentAssignment = () =>{
    if(isChanged) setIsChanged(false);
    setShowUpdatePopup(false);

    updateAssignment(assignment.id, assignment).then((res) => {
      if (res.status === 'PUBLISHED') {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });

        toast(<Toast message={'Task updated'} />);
      } else {
        toast(<Toast message={'Could not update task'} />);
        return;
      }

    }).catch((error) => {
      console.error(error);
      toast(<Toast message="Could not update assignment, please refresh the page and try again." />);
    });
  }

  const deleteAssignmentHandler = () => {
    updateAssignment(assignment.id, assignment).then((_) => {
      deleteAssignment(assignment.id).then((res) => {
        if (res.status === 'DELETED') {
          toast(<Toast message={'Task deleted'} />);
          history.push('/#')
        } else {
          toast(<Toast message={'Task deletion failed'} />);
          return;
        }
      });
    });
  };

  const checkboxes = classes.map((clazz) => {
    const isChecked = assignment.classIds.includes(clazz.id);

    return (
      <CheckboxContainer>
        <CheckboxBordered
          key={clazz.id}
          id={clazz.id}
          checked={isChecked}
          onChange={(e) =>
            handleClassCheckboxChange(clazz.id, e.target.checked)
          }
        />
        <CheckBoxText>{clazz.title}</CheckBoxText>
      </CheckboxContainer>
    );
  });
  const feedbacksMethodContainer = (
    <div>
      <StyledRadioGroup
        value={assignment.reviewedBy}
        onChange={(event) => feedbackMethodUpdate(event.target.value)}
      >
        <LableAndImgContainer>
          <StyledFormControlLabel
            value="JEDDAI_ASSISTED"
            control={<Radio />}
            label="Teacher (AI-assisted)" 
          />
          <QuestionTooltip
            text={
              "JeddAI provides instant feedback suggestions that you can review and edit before submitting."
            }
            img={questionMark}
          />
        </LableAndImgContainer>
        <LableAndImgContainer>
          <StyledFormControlLabel
            value="TEACHER"
            control={<Radio />}
            label="Teacher (Manual)"
            // endIcon={<TitleImage src={questionMark} />}
          />
          <QuestionTooltip
            text={'Each submission will be reviewed by the teacher'}
            img={questionMark}
          />
        </LableAndImgContainer>
        <LableAndImgContainer>
          <StyledFormControlLabel
            value="JEDDAI"
            control={<Radio />}
            label="JeddAI (Instant)"
          />
          <QuestionTooltip
            text={
              "JeddAI provides instant feedback to students without teacher input."
            }
            img={questionMark}
          />
        </LableAndImgContainer>
        <LableAndImgContainer>
          <StyledFormControlLabel
            value="P2P"
            control={<Radio />}
            label="Peer to Peer"
          />
          <QuestionTooltip
            text={
              "Students mark each other's work anonymously. Use the drag-and-drop feature to pair specific students together"
            }
            img={questionMark}
          />
        </LableAndImgContainer>
      </StyledRadioGroup>
      {studentDropdown && (
        <DragAndDrop
          students={assignment.classIds.flatMap(
            (classId) => allClassStudents[classId]
          )}
          reviewedByList={Object.values(assignment.reviewers).map(
            getStudentById
          )}
          setReviewedByList={handleChangeReviewedBy}
          dragFromHere={assignment.classIds.flatMap(
            (classId) => allClassStudents[classId]
          )}
        />
      )}
    </div>
  );

  const dateSelectorFrame = (
    <DateSelector
      value={dayjs(assignment.dueAt)}
      onChange={(newValue) => {
        updateDueAt(newValue);
        setUpdateDueDateTick(true);
      }}
    />
  );

  const handleCoplyLinkClose = () =>{
    setShowCopyLinkPopup(false); 
    window.location.href = '#';
  }
  const hidedeletePopup = () => {
    setShowDeletePopup(false);
  };
  const showDeletePopuphandler = (assignmentId) => {
    setShowDeletePopup(true);
  };
  const hidePublishPopup = () => {
    setShowPublishPopup(false);
  };
  const hideUpdatePopup = () => {
    setShowUpdatePopup(false);
  };
  const hideSaveAsDraftPopup = () => {
    if (pendingLocation) setPendingLocation(null);
    setSaveAsDraftPopup(false);
  };
  const cancelSaveAsDraftPopup = () => {
    if (pendingLocation) goToNewUrl(pendingLocation, history, unblockRef);
    setSaveAsDraftPopup(false);
  };
  const showPublishPopuphandler = (assignmentId) => {
    setShowPublishPopup(true);
  };
  const showUpdatePopuphandler = (assignmentId) => {
    setShowUpdatePopup(true);
  };
  const methods = {
    assignment,
    handleTitleChange,
    addQuestion,
    questionFrames,
    handleClassCheckboxChange,
    publish,
    saveDraft,
    checkboxes,
    cleanformattingTextBox,
    cleanformattingDiv,
    deleteAssignmentHandler,
    showDeletePopuphandler,
    showPublishPopuphandler,
    showUpdatePopuphandler
  };

  return (
    <>
      {showDeletePopup && (
        <DeleteAssignmentPopup
          assignment={assignment}
          hidedeletePopup={hidedeletePopup}
        />
      )}
      {showSaveAsDraftPopup && (
        <GeneralPopup
          hidePopup={hideSaveAsDraftPopup}
          title="Save As Draft"
          textContent="Do you want to save this task?"
          buttonText="Save as draft"
          confirmButtonAction={saveDraft}
          closeBtnText="Do not save"
          cancelPopup={cancelSaveAsDraftPopup}
        />
      )}
      {showPublishPopup && (
        <GeneralPopup
          hidePopup={hidePublishPopup}
          title="Publish Task"
          textContent="Are you sure you want to publish this task?"
          buttonText="Publish"
          confirmButtonAction={publish}
        />
      )}
      {showUpdatePopup && (
        <GeneralPopup
          hidePopup={hideUpdatePopup}
          title="Update Task"
          textContent="Are you sure you want to update this task?"
          buttonText="Update"
          confirmButtonAction={updateCurrentAssignment}
        />
      )}
      {showCopyLinkPopup && (
        <CopyLinkDialog
          handleCoplyLinkClose={handleCoplyLinkClose}
          link={`${baseUrl}/#/tasks/${createdTaskLink}/start`}
          title={"Last Step: Notify Your Class"}
          para1={"Copy the task link below and share it on your school's LMS so that students can get started."}
          para2={"Students have also been notified via email and can view the task on their account."}
        />
      )}
      <Header breadcrumbs={[assignment?.title]} />
      <CreateAAssignmentLaptop
        {...{
          ...methods,
          assignment,
          feedbacksMethodContainer,
          dateSelectorFrame,
          updateDueDateTick,
          setSaveAsDraftPopup,
          setPendingLocation,
          isChanged,
          ...createAAssignmentLaptopData(classData),
          submissions
        }}
      />
      {openFocusAreaDialog && (
        <FocusAreaDialog
          handleData={addNewFocusArea}
          colors={allFocusAreasColors}
        />
      )}
      {openMarkingCriteriaPreviewDialog && currentMarkingCriteria?.type && (
        <PreviewDialog
          setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
          markingCriterias={currentMarkingCriteria}
        />
      )}
      {openCommentBankPreviewDialog && (
        <CommentBankDialog
          setCommentBankPreviewDialog={setCommentBankPreviewDialog}
          commentBank={currentCommentBank}
        />
      )}
    </>
  );
}

const newQuestion = (serialNumber) => {
  return {
    serialNumber: serialNumber,
    question: '',
    type: 'TEXT',
    options: [
      {
        questionSerialNumber: 1,
        optionSerialNumber: 1,
        option: '',
        isCorrect: false,
      },
      {
        questionSerialNumber: 1,
        optionSerialNumber: 2,
        option: '',
        isCorrect: false,
      },
      {
        questionSerialNumber: 1,
        optionSerialNumber: 3,
        option: '',
        isCorrect: false,
      },
      {
        questionSerialNumber: 1,
        optionSerialNumber: 4,
        option: '',
        isCorrect: false,
      },
    ],
    markingCriteria: {},
    commentBankId: '',
    focusAreaIds: [],
    focusAreas: [],
  };
};

const goBack24Data = {
  caret: '/img/caret-1@2x.png',
};

const buttons25Data = {
  add: '/img/add@2x.png',
};

const goBack25Data = {
  caret: '/img/caret-5@2x.png',
  className: 'go-back-5',
};

const createAAssignmentLaptopData = (classData) => {
   return {
    headerProps: createAssignmentHeaderProps(classData),
    assignmentSettings: 'Task Settings',
    feedbackMethod: 'Feedback Method',
    goBack21Props: goBack24Data,
    buttons21Props: buttons25Data,
    goBack22Props: goBack25Data,
   }
};
