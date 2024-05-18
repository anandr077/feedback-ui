import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateNewMarkingCriteriaDesktop from '../CreateNewMarkingCriteriaDesktop';
import CreateNewMarkingCriteriaTablet from '../CreateNewMarkingCriteriaTablet';
import CreateNewMarkingCriteriaLaptop from '../CreateNewMarkingCriteriaLaptop';
import CreateNewMarkingCriteriaMobile from '../CreateNewMarkingCriteriaMobile';
import ReactiveRender from '../../ReactiveRender';

import CriteriaContainer from '../CriteriaContainer';
import {
  createNewMarkingCriteria,
  getAllMarkingCriteria,
  updateMarkingCriteria,
  deleteMarkingCriteria,
  getDefaultCriteria,
  getNewCriteria,
} from '../../../service';
import Loader from '../../Loader';
import SnackbarContext from '../../SnackbarContext';
import { useHistory } from 'react-router-dom';

export default function CreateNewMarkingCriteriaRoot(props) {
  const { markingCriteriaId } = useParams();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const { showSnackbar } = React.useContext(SnackbarContext);

  const [markingCriterias, setMarkingCriterias] = useState(getDefaultCriteria);
  const history = useHistory();

  React.useEffect(() => {
    Promise.all([getAllMarkingCriteria()]).then(([result]) => {
      const loadedMarkingCriteria = result.filter(
        (criteria) => criteria.id === markingCriteriaId
      );
      if (loadedMarkingCriteria.length > 0) {
        setMarkingCriterias(loadedMarkingCriteria[0]);
        setIsUpdating(true);
      }
      setIsLoading(false);
    });
  }, []);

  function addCriteria() {
    const newCriteria = getNewCriteria(markingCriterias.criterias.length);
    setMarkingCriterias({
      ...markingCriterias,
      criterias: [...markingCriterias.criterias, newCriteria],
    });
  }

  function deleteCriteria(criteriaId) {
    const newCriterias = markingCriterias.criterias.filter(
      (criteria, index) => {
        return index != criteriaId;
      }
    );
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  }

  const addLevel = (criteriaId) => {
    const newLevel = {
      id: markingCriterias.criterias[criteriaId].levels.length,
      name: '',
      description: '',
    };
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === criteriaId) {
        return {
          ...criteria,
          levels: [...criteria.levels, newLevel],
        };
      }
      return criteria;
    });
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  };

  const deleteLevel = (criteriaId, levelId) => {
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === criteriaId) {
        return {
          ...criteria,
          levels: criteria.levels.filter((level, index) => {
            return index != levelId;
          }),
        };
      }
      return criteria;
    });
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  };

  const validateMarkingCriteria = () => {
    let isValid = true;
    if (markingCriterias.title === '' || markingCriterias.title === undefined) {
      showSnackbar('Please enter a title for the marking criteria');
      isValid = false;
    }
    if (markingCriterias.criterias.length === 0) {
      showSnackbar('Please add at least one criteria');
      isValid = false;
    }

    markingCriterias.criterias.forEach((criteria, indexout) => {
      if (criteria.title === undefined || criteria.title === '') {
        showSnackbar(`Please enter a title for criteria ${indexout + 1}`);
        isValid = false;
      }
      criteria.levels.forEach((level) => {
        if (level.name == undefined || level.name === '') {
          showSnackbar(
            `Please enter a name for all level in criteria ${indexout + 1}`
          );
          isValid = false;
        }
      });
      criteria.levels.forEach((level) => {
        if (level.description == undefined || level.description === '') {
          showSnackbar(
            `Please enter a description for all level in criteria ${
              indexout + 1
            }`
          );
          isValid = false;
        }
      });
    });

    return isValid;
  };

  const saveMarkingCriteria = () => {
    if (validateMarkingCriteria()) {
      const markingCriteria = {
        title: markingCriterias.title,
        criterias: markingCriterias.criterias.map((criteria) => {
          return {
            title: criteria.title,
            selectedLevel: '',
            levels: criteria.levels.map((level) => {
              return {
                name: level.name,
                description: level.description,
              };
            }),
          };
        }),
      };
      isUpdating
        ? updateMarkingCriteria(markingCriteria, markingCriteriaId)
        : createNewMarkingCriteria(markingCriteria);
      showSnackbar(
        isUpdating ? 'Marking criteria updated' : 'Marking criteria created'
      );
      window.localStorage.setItem('markingCriteria', 'true');
      history.push('/settings');
    } else {
      return;
    }
  };

  const deleteMarkingCriteriaMethod = () => {
    deleteMarkingCriteria(markingCriteriaId)
      .then(() => {
        showSnackbar('Marking criteria deleted');
        window.localStorage.setItem('markingCriteria', 'true');
        history.push('/settings');
      })
      .catch((error) => {
        showSnackbar('An error occured while deleting marking criteria');
      });
  };

  const handleTitleChange = (event) => {
    setMarkingCriterias({ ...markingCriterias, title: event.target.value });
  };

  const updateCriteriaTitle = (id, newTitle) => {
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === id) {
        return {
          ...criteria,
          title: newTitle,
        };
      }
      return criteria;
    });
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  };

  const updateLevelName = (criteriaId, levelId, newName) => {
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === criteriaId) {
        return {
          ...criteria,
          levels: criteria.levels.map((level, index) => {
            if (index === levelId) {
              return {
                ...level,
                name: newName,
              };
            }
            return level;
          }),
        };
      }
      return criteria;
    });
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  };

  const updateLevelDescription = (criteriaId, levelId, newDescription) => {
    if (newDescription.length > 200) {
      return;
    }
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === criteriaId) {
        return {
          ...criteria,
          levels: criteria.levels.map((level, index) => {
            if (index === levelId) {
              return {
                ...level,
                description: newDescription,
              };
            }
            return level;
          }),
        };
      }
      return criteria;
    });
    setMarkingCriterias({ ...markingCriterias, criterias: newCriterias });
  };

  const criterias = markingCriterias.criterias.map((criteria, index) => {
    return (
      <CriteriaContainer
        key={index}
        criteriaId={index}
        addLevel={addLevel}
        deleteLevel={deleteLevel}
        deleteCriteria={deleteCriteria}
        criteria={criteria}
        updateCriteriaTitle={updateCriteriaTitle}
        updateLevelName={updateLevelName}
        updateLevelDescription={updateLevelDescription}
      />
    );
  });

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <ReactiveRender
      mobile={
        <CreateNewMarkingCriteriaMobile
          {...{
            ...accountSettingsMarkingCriteriaCreat2Data,
            criterias,
            addCriteria,
            addLevel,
            saveMarkingCriteria,
            deleteMarkingCriteriaMethod,
            handleTitleChange,
            isUpdating,
            markingCriterias,
          }}
        />
      }
      tablet={
        <CreateNewMarkingCriteriaTablet
          {...{
            ...accountSettingsMarkingCriteriaCreat3Data,
            criterias,
            addCriteria,
            addLevel,
            saveMarkingCriteria,
            deleteMarkingCriteriaMethod,
            handleTitleChange,
            isUpdating,
            markingCriterias,
          }}
        />
      }
      laptop={
        <CreateNewMarkingCriteriaLaptop
          {...{
            ...accountSettingsMarkingCriteriaCreat4Data,
            criterias,
            addCriteria,
            addLevel,
            saveMarkingCriteria,
            deleteMarkingCriteriaMethod,
            handleTitleChange,
            isUpdating,
            markingCriterias,
          }}
        />
      }
      desktop={
        <CreateNewMarkingCriteriaDesktop
          {...{
            ...accountSettingsMarkingCriteriaCreat4Data,
            criterias,
            addCriteria,
            addLevel,
            deleteLevel,
            deleteCriteria,
            updateCriteriaTitle,
            updateLevelName,
            updateLevelDescription,
            saveMarkingCriteria,
            deleteMarkingCriteriaMethod,
            handleTitleChange,
            isUpdating,
            markingCriterias,
            markingCriteriaId,
          }}
        />
      }
    />
  );
}

const breadcrumb23Data = {
  assignments: 'Marking Criteria',
};

const breadcrumb24Data = {
  assignments: 'Create new',
};

const input4Data = {
  children: 'Name of marking template',
};

const criteriaLevelInput41Data = {
  high: 'High',
  providesASkilfulA:
    'Provides a skilful and sustained engagement with the question',
};

const criteriaLevelInput42Data = {
  high: 'Medium',
  providesASkilfulA:
    'Provides a considered response to some aspects of the question',
};

const frame128531Data = {
  children: 'Level Name',
};

const frame128532Data = {
  children: 'An answer of this level should...',
};

const criteriaLevelInput51Data = {
  frame128531Props: frame128531Data,
  frame128532Props: frame128532Data,
};

const buttons24Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const statusBubbles5Data = {
  className: 'status-bubbles-3',
};

const input5Data = {
  children: 'Criteria Name',
};

const frame128533Data = {
  children: 'Level Name',
};

const frame128534Data = {
  children: 'An answer of this level should...',
};

const criteriaLevelInput61Data = {
  frame128531Props: frame128533Data,
  frame128532Props: frame128534Data,
};

const frame128535Data = {
  children: 'Level Name',
};

const frame128536Data = {
  children: 'An answer of this level should...',
};

const criteriaLevelInput62Data = {
  frame128531Props: frame128535Data,
  frame128532Props: frame128536Data,
};

const frame128537Data = {
  children: 'Level Name',
};

const frame128538Data = {
  children: 'An answer of this level should...',
};

const criteriaLevelInput52Data = {
  frame128531Props: frame128537Data,
  frame128532Props: frame128538Data,
};

const buttons25Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const buttons26Data = {
  add: '/img/add-3@2x.png',
  button: 'Add criteria',
  className: 'buttons-4',
};

const accountSettingsMarkingCriteriaCreat2Data = {
  frame1349: '/img/frame-1349@2x.png',
  notifications: '/img/notifications@2x.png',
  frame5: '/img/frame-5@2x.png',
  title: 'Create new marking template',
  line151: '/img/line-15-1@2x.png',
  line152: '/img/line-15-2@2x.png',
  line161: '/img/line-15-2@2x.png',
  line162: '/img/line-15-2@2x.png',
  line17: '/img/line-15-2@2x.png',
  x2023JeddleAllRightsReserved: '© 2023 Jeddle. All rights reserved.',
  mainWebsite: 'Main Website',
  terms: 'Terms',
  privacy: 'Privacy',
  breadcrumb21Props: breadcrumb23Data,
  breadcrumb22Props: breadcrumb24Data,
  input1Props: input4Data,
  criteriaLevelInput41Props: criteriaLevelInput41Data,
  criteriaLevelInput42Props: criteriaLevelInput42Data,
  criteriaLevelInput51Props: criteriaLevelInput51Data,
  buttons21Props: buttons24Data,
  statusBubblesProps: statusBubbles5Data,
  input2Props: input5Data,
  criteriaLevelInput61Props: criteriaLevelInput61Data,
  criteriaLevelInput62Props: criteriaLevelInput62Data,
  criteriaLevelInput52Props: criteriaLevelInput52Data,
  buttons22Props: buttons25Data,
  buttons23Props: buttons26Data,
};

const breadcrumb25Data = {
  assignments: 'Marking Criteria',
};

const breadcrumb26Data = {
  assignments: 'Create new',
};

const input6Data = {
  children: 'Name of marking template',
};

const frame12854Data = {
  children: 'High',
};

const criteriaLevelInput7Data = {
  anAnswerOfThisLevelContains:
    'Provides a skilful and sustained engagement with the question',
  frame1285Props: frame12854Data,
};

const frame12855Data = {
  children: 'Medium',
};

const criteriaLevelInput8Data = {
  anAnswerOfThisLevelContains:
    'Provides a considered response to some aspects of the question',
  frame1285Props: frame12855Data,
};

const buttons27Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const statusBubbles7Data = {
  className: 'status-bubbles-4',
};

const input7Data = {
  children: 'Criteria Name',
};

const buttons28Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const buttons29Data = {
  add: '/img/add-3@2x.png',
  button: 'Add criteria',
  className: 'buttons-5',
};

const accountSettingsMarkingCriteriaCreat3Data = {
  frame1349: '/img/frame-1349-1.png',
  notifications: '/img/notifications@2x.png',
  frame5: '/img/frame-5@2x.png',
  title: 'Create new marking template',
  alignLeftAlignCenterJustifyJustifyL:
    '/img/align-left-align-center-justify-justify-left-trash-can-2@2x.png',
  xdelete: 'Delete',
  line15: '/img/line-15-3.png',
  x2023JeddleAllRightsReserved: '© 2023 Jeddle. All rights reserved.',
  mainWebsite: 'Main Website',
  terms: 'Terms',
  privacy: 'Privacy',
  breadcrumb21Props: breadcrumb25Data,
  breadcrumb22Props: breadcrumb26Data,
  input1Props: input6Data,
  criteriaLevelInput1Props: criteriaLevelInput7Data,
  criteriaLevelInput2Props: criteriaLevelInput8Data,
  buttons21Props: buttons27Data,
  statusBubblesProps: statusBubbles7Data,
  input2Props: input7Data,
  buttons22Props: buttons28Data,
  buttons23Props: buttons29Data,
};

const navElement4Data = {
  home3: '/img/home3-1@2x.png',
  place: 'Home',
};

const navElement5Data = {
  home3: '/img/subject@2x.png',
  place: 'Classes',
  className: 'nav-element-3',
};

const breadcrumb27Data = {
  assignments: 'Marking Criteria',
};

const breadcrumb28Data = {
  assignments: 'Create new',
};

const frame13722Data = {
  className: 'frame-1372-1',
};

const input8Data = {
  children: 'Name of marking template',
};

const frame12856Data = {
  children: 'High',
};

const criteriaLevelInput9Data = {
  anAnswerOfThisLevelContains:
    'Provides a skilful and sustained engagement with the question',
  frame1285Props: frame12856Data,
};

const frame12857Data = {
  children: 'Medium',
};

const criteriaLevelInput10Data = {
  anAnswerOfThisLevelContains:
    'Provides a considered response to some aspects of the question',
  frame1285Props: frame12857Data,
};

const buttons210Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const statusBubbles9Data = {
  className: 'status-bubbles-5',
};

const input9Data = {
  children: 'Criteria Name',
};

const buttons211Data = {
  add: '/img/add-3@2x.png',
  button: 'Add level',
};

const buttons212Data = {
  add: '/img/add-3@2x.png',
  button: 'Add criteria',
  className: 'buttons-6',
};

const accountSettingsMarkingCriteriaCreat4Data = {
  logo: '/img/logo-1@2x.png',
  notifications: '/img/notifications@2x.png',
  line15: '/img/line-15-4.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
  navElement1Props: navElement4Data,
  navElement2Props: navElement5Data,
  breadcrumb21Props: breadcrumb27Data,
  breadcrumb22Props: breadcrumb28Data,
  frame1372Props: frame13722Data,
  input1Props: input8Data,
  criteriaLevelInput1Props: criteriaLevelInput9Data,
  criteriaLevelInput2Props: criteriaLevelInput10Data,
  buttons21Props: buttons210Data,
  statusBubblesProps: statusBubbles9Data,
  input2Props: input9Data,
  buttons22Props: buttons211Data,
  buttons23Props: buttons212Data,
};
