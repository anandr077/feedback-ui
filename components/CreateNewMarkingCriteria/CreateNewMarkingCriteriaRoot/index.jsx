import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateNewMarkingCriteriaDesktop from '../CreateNewMarkingCriteriaDesktop';
import { isMobileView } from '../../ReactiveRender';
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
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Toast from '../../Toast';

export default function CreateNewMarkingCriteriaRoot(props) {
  const { markingCriteriaId } = useParams();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const [markingCriterias, setMarkingCriterias] = useState(getDefaultCriteria);
  const history = useHistory();
  const mobileView = isMobileView();

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

  const addLevelInBetween = (criteriaId, levelId) => {
    const newLevel = {
      id: markingCriterias.criterias[criteriaId].levels.length,
      name: '',
      description: '',
    };
    const newCriterias = markingCriterias.criterias.map((criteria, index) => {
      if (index === criteriaId) {
        const newLevels = [...criteria.levels];
        newLevels.splice(levelId + 1, 0, newLevel);
        return {
          ...criteria,
          levels: newLevels,
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
      toast(
        <Toast message={'Please enter a title for the marking criteria'} />
      );
      isValid = false;
    }
    if (markingCriterias.criterias.length === 0) {
      toast(<Toast message={'Please add at least one criteria'} />);
      isValid = false;
    }

    markingCriterias.criterias.forEach((criteria, indexout) => {
      if (criteria.title === undefined || criteria.title === '') {
        toast(
          <Toast
            message={`Please enter a title for criteria ${indexout + 1}`}
          />
        );
        isValid = false;
      }
      criteria.levels.forEach((level) => {
        if (level.name == undefined || level.name === '') {
          toast(
            <Toast
              message={`Please enter a name for all level in criteria ${
                indexout + 1
              }`}
            />
          );
          isValid = false;
        }
      });
      criteria.levels.forEach((level) => {
        if (level.description == undefined || level.description === '') {
          toast(
            <Toast
              message={`Please enter a description for all level in criteria ${
                indexout + 1
              }`}
            />
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

      toast(
        <Toast
          message={
            isUpdating ? 'Marking criteria updated' : 'Marking criteria created'
          }
        />
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
        toast(<Toast message={'Marking criteria deleted'} />);
        window.localStorage.setItem('markingCriteria', 'true');
        history.push('/settings');
      })
      .catch((error) => {
        toast(
          <Toast message={'An error occured while deleting marking criteria'} />
        );
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
    <>
      <CreateNewMarkingCriteriaDesktop
        {...{
          criterias,
          addCriteria,
          addLevel,
          deleteLevel,
          addLevelInBetween,
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
    </>
  );
}

