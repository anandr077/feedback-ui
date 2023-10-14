import dayjs from 'dayjs';
import React from 'react';
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
} from '../../service';
import {
  IbmplexsansNormalShark20px,
  IbmplexsansBoldShark64px,
} from '../../styledMixins';
import {
  assignmentsHeaderProps,
  taskHeaderProps,
} from '../../utils/headerProps';

import { assignmentsHeaderProps } from '../../utils/headerProps';
import CheckboxBordered from '../CheckboxBordered';
import CreateAAssignmentLaptop from '../CreateAAssignmentLaptop';
import CreateAAssignmentMobile from '../CreateAAssignmentMobile';
import CreateAAssignmentTablet from '../CreateAAssignmentTablet';
import DateSelector from '../DateSelector';
import MCQQuestionFrame from '../MCQQuestionFrame';
import ReactiveRender, { isSmallScreen } from '../ReactiveRender';
import TheoryQuestionFrame from '../TheoryQuestionFrame';
import SnackbarContext from '../SnackbarContext';
import Loader from '../Loader';
import FocusAreaDialog from './Dialog/newFocusArea';
import { getFocusAreas, getAllColors } from '../../service';
import PreviewDialog from '../Shared/Dialogs/preview/previewCard';
import DeleteAssignmentPopup from '../DeleteAssignmentPopUp';
import GeneralPopup from '../GeneralPopup';
import HeaderSmall from '../HeaderSmall';
import Header from '../Header';
import {
  StyledRadioGroup,
  StyledFormControlLabel,
  CheckboxContainer,
  CheckBoxText,
} from './CreateAssignmentStyle';
import { useQueryClient } from '@tanstack/react-query';

const createAssignmentHeaderProps = assignmentsHeaderProps;

export default function CreateAssignment(props) {
  const queryClient = useQueryClient();
  const { assignmentId } = useParams();

  const [showDeletePopup, setShowDeletePopup] = React.useState(false);
  const [showPublishPopup, setShowPublishPopup] = React.useState(false);

  const draft = {
    id: uuidv4(),
    title: '',
    classIds: [],
    questions: [newQuestion(1)],
    reviewedBy: 'TEACHER',
    status: 'DRAFT',
    dueAt: dayjs().add(3, 'day'),
  };
  const [assignment, setAssignment] = React.useState(draft);

  const [openFocusAreaDialog, setOpenFocusAreaDialog] = React.useState(false);
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    React.useState(false);
  const [currentMarkingCriteria, setCurrentMarkingCriteria] = React.useState(
    []
  );
  const { showSnackbar } = React.useContext(SnackbarContext);

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
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());

  React.useEffect(() => {
    Promise.all([
      getClasses(),
      getAssignment(assignmentId),
      getFocusAreas(),
      getAllColors(),
      getAllMarkingCriteria(),
    ]).then(
      ([
        classesResult,
        assignmentResult,
        focusAreas,
        colors,
        markingCriteriasResult,
      ]) => {
        setAssignment((prevState) => ({
          ...prevState,
          ...assignmentResult,
          classIds: assignmentResult.classIds ?? [],
        }));
        markingCriteriasResult.unshift({
          title: 'No Marking Criteria',
          id: 'no_marking_criteria',
        });
        setAllMarkingCriterias(markingCriteriasResult),
          setClasses(classesResult);
        setAllFocusAreas(focusAreas);
        setAllFocusAreasColors(colors);
        setIsLoading(false);
      }
    );
  }, [assignmentId]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  function handleMarkingCriteriaPreview(markingCriteria) {
    setCurrentMarkingCriteria(markingCriteria);
    setMarkingCriteriaPreviewDialog(Object.keys(markingCriteria).length > 0);
  }

  const handleTitleChange = (e) => {
    if (e.target.value.length > 140) {
      return;
    }
    const newTitle = e.target.value;
    setAssignment((prevAssignment) => ({ ...prevAssignment, title: newTitle }));
  };
  const feedbackMethodUpdate = (newReviewedBy) => {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      reviewedBy: newReviewedBy,
    }));
  };
  const updateDueAt = (newDueAt) => {
    setAssignment((prevAssignment) => ({ ...prevAssignment, dueAt: newDueAt }));
  };
  const cleanformattingTextBox = (e) => {
    e.currentTarget.style.border = '1px solid var(--text)';
  };
  const cleanformattingDiv = (e) => {
    e.currentTarget.style.border = '1px solid #E0E0E0';
  };

  const questionFrames = () => {
    return assignment.questions.map((question) => questionFrame(question));
  };
  const questionFrame = (question) => {
    return question?.type === 'MCQ' ? (
      <MCQQuestionFrame
        serialNumber={question.serialNumber}
        deleteQuestionFrameFn={deleteQuestion}
        questionDetails={question}
        UpdateQuestionFrame={updateQuestionType}
        updateQuestion={updateQuestion}
        cleanformattingTextBox={cleanformattingTextBox}
        cleanformattingDiv={cleanformattingDiv}
        onOptionChange={updateMCQOption}
        options={question.options}
        allMarkingCriterias={allMarkingCriterias}
      />
    ) : (
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
        handleMarkingCriteriaPreview={handleMarkingCriteriaPreview}
        setAllFocusAreas={setAllFocusAreas}
      />
    );
  };

  function addQuestion() {
    const newId = assignment.questions.length + 1;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: [...prevAssignment.questions, newQuestion(newId)],
    }));
  }

  function deleteQuestion(serialNumber) {
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

  function updateMCQOption(
    questionSerialNumber,
    optionSerialNumber,
    newOption,
    newIsCorrect
  ) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((question) =>
        question.serialNumber === questionSerialNumber
          ? {
              ...question,
              options: question.options.map((o) =>
                o.optionSerialNumber === optionSerialNumber
                  ? { ...o, option: newOption, isCorrect: newIsCorrect }
                  : o
              ),
            }
          : question
      ),
    }));
  }

  function updateQuestion(id, newContent) {
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

  function updateMarkingCriteria(id, markingCriteria) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id ? { ...q, markingCriteria: markingCriteria } : q
      ),
    }));
  }

  function updateQuestionType(id, newType) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((question) =>
        question.serialNumber === id ? { ...question, type: newType } : question
      ),
    }));
  }

  function updateFocusAreas(id, newFocusAreas) {
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
    setAssignment((prevAssignment) => {
      if (isChecked) {
        return {
          ...prevAssignment,
          classIds: [...prevAssignment.classIds, classId],
        };
      } else {
        return {
          ...prevAssignment,
          classIds: prevAssignment.classIds.filter((id) => id !== classId),
        };
      }
    });
  };

  const saveDraft = () => {
    updateAssignment(assignment.id, assignment).then((res) => {
      if (res.status === 'DRAFT') {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        showSnackbar('Task saved');
        return;
      } else {
        showSnackbar('Could not save task');
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
      showSnackbar('Please enter task title');
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
          showSnackbar('Please enter Question ' + question.serialNumber);
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
            showSnackbar(
              'Please enter options for Question ' + question.serialNumber
            );
            return false;
          }
          if (!isCorrectPresent) {
            const optionContainer = document.getElementById(
              'optionFrame_' + question.serialNumber
            );
            optionContainer.style.border = '1px solid red';
            invalidQuestion = true;
            showSnackbar(
              'Please select atleast one correct option for Question ' +
                question.serialNumber
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
        showSnackbar('Please enter Question ' + question.serialNumber);
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
      showSnackbar('Please select atleast one class');
    }
  };

  const isDateValid = () => {
    const assignmentDate = new Date(assignment.dueAt);
    if (assignmentDate.getTime() - Date.now() > 3600000) {
      return true;
    } else {
      const dueDateContainer = document.getElementById('timeContainer');
      dueDateContainer.style.border = '1px solid red';
      showSnackbar('Please choose due time at least one hour from now.');
      return false;
    }
  };

  const isAssignmentValid = () => {
    return isTitleValid() &&
      isQuestionsValid() &&
      isClassesValid() &&
      isDateValid()
      ? true
      : false;
  };

  const publish = () => {
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
            showSnackbar('Task published', res.link);
            window.location.href = '#tasks';
          } else {
            showSnackbar('Task creation failed', res.link);
            return;
          }
        });
      });
    } else {
      // showSnackbar('Please fill all the fields');
    }
  };

  const deleteAssignmentHandler = () => {
    updateAssignment(assignment.id, assignment).then((_) => {
      deleteAssignment(assignment.id).then((res) => {
        if (res.status === 'DELETED') {
          showSnackbar('Task deleted');
          window.location.href = '#tasks';
        } else {
          showSnackbar('Task deletion failed');
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
    <StyledRadioGroup
      value={assignment.reviewedBy}
      onChange={(event) => feedbackMethodUpdate(event.target.value)}
    >
      <StyledFormControlLabel
        value="TEACHER"
        control={<Radio />}
        label="Teacher Feedback"
      />
      <StyledFormControlLabel
        value="P2P"
        control={<Radio />}
        label="Peer to Peer (randomised)"
      />
    </StyledRadioGroup>
  );

  const dateSelectorFrame = (
    <DateSelector
      value={dayjs(assignment.dueAt)}
      onChange={(newValue) => updateDueAt(newValue)}
    />
  );

  const hidedeletePopup = () => {
    setShowDeletePopup(false);
  };
  const showDeletePopuphandler = (assignmentId) => {
    setShowDeletePopup(true);
  };
  const hidePublishPopup = () => {
    setShowPublishPopup(false);
  };
  const showPublishPopuphandler = (assignmentId) => {
    setShowPublishPopup(true);
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
  };

  return (
    <>
      {showDeletePopup && (
        <DeleteAssignmentPopup
          assignment={assignment}
          hidedeletePopup={hidedeletePopup}
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
      <ReactiveRender
        mobile={
          <CreateAAssignmentMobile
            {...{
              ...methods,
              assignment,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentMobileData,
            }}
          />
        }
        tablet={
          <CreateAAssignmentTablet
            {...{
              ...methods,
              assignment,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentTabletData,
            }}
          />
        }
        laptop={
          <CreateAAssignmentLaptop
            {...{
              ...methods,
              assignment,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentLaptopData,
            }}
          />
        }
        desktop={
          <CreateAAssignmentLaptop
            {...{
              ...methods,
              assignment,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentLaptopData,
            }}
          />
        }
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

const createAAssignmentLaptopData = {
  headerProps: createAssignmentHeaderProps,
  assignmentSettings: 'Task Settings',
  feedbackMethod: 'Feedback Method',
  goBack21Props: goBack24Data,
  buttons21Props: buttons25Data,
  goBack22Props: goBack25Data,
};

const goBack22Data = {
  caret: '/img/caret-1@2x.png',
};

const buttons23Data = {
  add: '/img/add@2x.png',
};

const goBack23Data = {
  caret: '/img/caret-5@2x.png',
  className: 'go-back-3',
};

const createAAssignmentTabletData = {
  goBack21Props: goBack22Data,
  buttons21Props: buttons23Data,
  goBack22Props: goBack23Data,
};

const buttons22Data = {
  add: '/img/add-2@2x.png',
};

const goBack2Data = {
  className: 'go-back-1',
};

const createAAssignmentMobileData = {
  assignmentSettings: 'Task Settings',
  feedbackMethod: 'Feedback Method',
  buttons22Props: buttons22Data,
  goBackProps: goBack2Data,
};
