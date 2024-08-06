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
import { useMarkingCriterias } from '../../state/hooks';

export default function CreateNewMarkingCriteriaRoot(props) {
  const { markingCriteriaId } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [markingCriteria, setMarkingCriteria] = useState(getDefaultCriteria);
  const history = useHistory();
  const mobileView = isMobileView();

  const {
    data: markingCriterias,
    isLoadingdata: isLoadingMarkingCriterias,
    setData: setMarkingCriterias,
    resetData: resetMarkingCriterias,
  } = useMarkingCriterias();

  React.useEffect(() => {
    if (markingCriteriaId === 'new') {
      setIsLoading(false);
    }
    if (markingCriterias) {
      const loadedMarkingCriteria = markingCriterias.filter(
        (criteria) => criteria.id === markingCriteriaId
      );
      if (loadedMarkingCriteria.length > 0) {
        setMarkingCriteria(loadedMarkingCriteria[0]);
        setIsUpdating(true);
        setIsLoading(false);
      }
    }
  }, [markingCriterias]);

  function addCriteria() {
    const newCriteria = getNewCriteria(markingCriterias.criterias.length);
    setMarkingCriteria({
      ...markingCriteria,
      criterias: [...markingCriteria.criterias, newCriteria],
    });
  }

  function deleteCriteria(criteriaId) {
    const newCriterias = markingCriterias.criterias.filter(
      (criteria, index) => {
        return index != criteriaId;
      }
    );
    setMarkingCriteria({ ...markingCriterias, criterias: newCriterias });
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
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
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
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
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
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
  };

  const validateMarkingCriteria = () => {
    let isValid = true;
    if (markingCriteria.title === '' || markingCriteria.title === undefined) {
      toast(
        <Toast message={'Please enter a title for the marking criteria'} />
      );
      isValid = false;
    }
    if (markingCriteria.criterias.length === 0) {
      toast(<Toast message={'Please add at least one criteria'} />);
      isValid = false;
    }

    markingCriteria.criterias.forEach((criteria, indexout) => {
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
      const newMarkingCriteria = {
        title: markingCriteria.title,
        criterias: markingCriteria.criterias.map((criteria) => {
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
      const action = isUpdating
        ? updateMarkingCriteria(newMarkingCriteria, markingCriteriaId)
        : createNewMarkingCriteria(newMarkingCriteria);
      action
        .then((response) => {
          if (isUpdating) {
            const updatedMarkingCriterias = markingCriterias.map(
              (markingCriteria, index) => {
                if (markingCriteria.id === markingCriteriaId) {
                  return {
                    ...markingCriteria,
                    ...newMarkingCriteria,
                  };
                }
                return markingCriteria;
              }
            );
            setMarkingCriterias(updatedMarkingCriterias);
          } else {
            resetMarkingCriterias();
          }

          toast(
            <Toast
              message={
                isUpdating
                  ? 'Marking criteria updated'
                  : 'Marking criteria created'
              }
            />
          );
        })
        .catch((error) => {
          console.error('Error:', error);
          toast(
            <Toast
              message={
                isUpdating
                  ? 'Error in updating marking criteria'
                  : 'Error in creating marking criteria'
              }
            />
          );
        });

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
    setMarkingCriteria({ ...markingCriteria, title: event.target.value });
  };

  const updateCriteriaTitle = (id, newTitle) => {
    const newCriterias = markingCriteria.criterias.map((criteria, index) => {
      if (index === id) {
        return {
          ...criteria,
          title: newTitle,
        };
      }
      return criteria;
    });
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
  };

  const updateLevelName = (criteriaId, levelId, newName) => {
    const newCriterias = markingCriteria.criterias.map((criteria, index) => {
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
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
  };

  const updateLevelDescription = (criteriaId, levelId, newDescription) => {
    if (newDescription.length > 200) {
      return;
    }
    const newCriterias = markingCriteria.criterias.map((criteria, index) => {
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
    setMarkingCriteria({ ...markingCriteria, criterias: newCriterias });
  };

  const criterias = markingCriteria.criterias.map((criteria, index) => {
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
          markingCriteria,
          markingCriteriaId,
        }}
      />
    </>
  );
}
