import React, { useEffect } from 'react';
import './style.css';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import { completedHeaderProps } from '../../../utils/headerProps';
import Header from '../../Header';
import GoBack from '../GoBack';
import { useState } from 'react';
import HeaderSmall from '../../HeaderSmall';
import {
  createNewMarkingCriteria,
  deleteMarkingCriteria,
  getMarkingMethodology,
  updateMarkingCriteria,
} from '../../../service';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import SnackbarContext from '../../SnackbarContext';
import Loader from '../../Loader';
import { isTabletView, isMobileView, isSmallScreen } from '../../ReactiveRender';
const STRENGTHS = 'strengths';
const TARGETS = 'targets';
const Strengths_And_Traget_Data = {
  title: '',
  strengths: [''],
  targets: [''],
};

export default function CreateNewStrengthAndTargets() {
  const { markingMethodologyId } = useParams();
  const { showSnackbar } = React.useContext(SnackbarContext);
  const [markingMethodology, setMarkingMethodology] = useState({
    title: '',
    type: 'STRENGTHS_TARGETS',
    strengthsTargetsCriterias: [{ ...Strengths_And_Traget_Data }],
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [smallScreenView, setSmallScreenView] = useState(isSmallScreen());
  

  useEffect(() => {
    Promise.all([getMarkingMethodologyForId(markingMethodologyId)]).then(
      ([result]) => {
        setMarkingMethodology(result[0]);
        setIsLoading(false);
      }
    );
  }, []);
  if (isLoading) {
    return (
      <>
        {smallScreenView ? (
          <HeaderSmall headerProps={completedHeaderProps(true)} />
        ) : (
          <Header headerProps={completedHeaderProps(true)} />
        )}
        <Loader />
      </>
    );
  }

  const headerProps = completedHeaderProps(true);

  const handleCriteriaChange = (e, index) => {
    const updatedData = { ...markingMethodology };
    updatedData.strengthsTargetsCriterias[index].title = e.target.value;
    setMarkingMethodology(updatedData);
  };

  const handleTitleChange = (e) => {
    const updatedData = { ...markingMethodology };
    updatedData.title = e.target.value;
    setMarkingMethodology(updatedData);
  };

  const handleAddCriteria = () => {
    setMarkingMethodology((oldMarkingTemplate) => {
      const newMarkingTemplate = {
        ...oldMarkingTemplate,
        strengthsTargetsCriterias: [
          ...oldMarkingTemplate.strengthsTargetsCriterias,
          {
            title: '',
            strengths: [''],
            targets: [''],
          },
        ],
      };
      return newMarkingTemplate;
    });
  };

  const removeCriteria = (indexToDelete) => {
    const updatedData = { ...markingMethodology };
    updatedData.strengthsTargetsCriterias =
      markingMethodology.strengthsTargetsCriterias.filter(
        (_, index) => index !== indexToDelete
      );
    setMarkingMethodology(updatedData);
  };

  const handleAddOption = (index, type) => {
    const updatedData = { ...markingMethodology };

    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths.push('');
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets.push('');
    }
    setMarkingMethodology(updatedData);
  };

  const removeAddOption = (childIndex, index, type) => {
    const updatedData = { ...markingMethodology };
    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths.splice(
        childIndex,
        1
      );
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets.splice(
        childIndex,
        1
      );
    }
    setMarkingMethodology(updatedData);
  };

  const handleCriteriaOptionChange = (e, childIndex, index, type) => {
    const updatedData = { ...markingMethodology };
    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths[childIndex] =
        e.target.value;
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets[childIndex] =
        e.target.value;
    }
    setMarkingMethodology(updatedData);
  };

  const createStrengthsAndTargets = (criteria, index) => {
    return (
      <div className="strength-and-target-container">
        <div className="strength">
          <div className="strength-text">Strengths</div>
          {criteria.strengths.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                {input(
                  value,
                  handleCriteriaOptionChange,
                  childIndex,
                  index,
                  STRENGTHS
                )}
                {childIndex >= 1 && (
                  <div
                    className="remove-option"
                    onClick={() =>
                      removeAddOption(childIndex, index, STRENGTHS)
                    }
                  >
                    <img src="/icons/delete-vector.svg" alt="delete" />
                    Remove
                  </div>
                )}
              </div>
            );
          })}

          <div
            className="add-criteria"
            onClick={() => handleAddOption(index, STRENGTHS)}
            style={{ width: 'fit-content' }}
          >
            + Add option
          </div>
        </div>
        <div className="target">
          <div className="target-text">Targets</div>
          {criteria.targets.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                <input
                  type="text"
                  className="title-input"
                  placeholder="You need to..."
                  value={value}
                  onChange={(e) =>
                    handleCriteriaOptionChange(e, childIndex, index, TARGETS)
                  }
                  style={{ fontWeight: 'bold' }}
                />
                {childIndex >= 1 && (
                  <div
                    className="remove-option"
                    onClick={() => removeAddOption(childIndex, index, TARGETS)}
                  >
                    <img src="/icons/delete-vector.svg" alt="delete" />
                    Remove
                  </div>
                )}
              </div>
            );
          })}
          <div
            className="add-criteria"
            onClick={() => handleAddOption(index, TARGETS)}
            style={{ width: 'fit-content' }}
          >
            + Add option
          </div>
        </div>
      </div>
    );
  };
  const createCriteria = (criteria, index) => {
    return (
      <>
        <div className="criteria-container">
          <div className="remove-and-criteria">
            <div className="criteria">Evaluation Area</div>
            <div className="remove" onClick={() => removeCriteria(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M2.5918 13.8327L13.2585 3.16602M13.2585 13.8327L2.5918 3.16602"
                  stroke="#8A1C1C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{' '}
              Remove
            </div>
          </div>
          <input
            type="text"
            className="title-input"
            placeholder="Enter an evaluation area for this set of strengths and weaknesses"
            value={criteria?.title || ''}
            onChange={(e) => handleCriteriaChange(e, index)}
            style={{ marginTop: '20px' }}
          />
          {createStrengthsAndTargets(criteria, index)}
        </div>
      </>
    );
  };
  const header = () => {
    return smallScreenView ? (
      <HeaderSmall headerProps={headerProps} />
    ) : (
      <Header headerProps={headerProps} />
    );
  };
  const createBreadcrumb = (markingMethodologyId) => {
    return (
      <div className="breadcrumb">
        <Breadcrumb text="Account Settings" link={'/#/settings'} />
        <Breadcrumb2 title="Marking Templates" link={'/#/settings'} />
        <Breadcrumb2
          title={markingMethodologyId === 'new' ? 'Create new' : 'Update'}
        />
      </div>
    );
  };

  const allCriteriaFrames = () => {
    return (
      <div className="form-container">
        <div className="subheading">Strengths and Targets</div>
        <div className="border"></div>
        {markingMethodology?.strengthsTargetsCriterias?.map((criteria, index) =>
          createCriteria(criteria, index)
        )}
        <div className="add-criteria" onClick={() => handleAddCriteria()}>
          + Add evaluation area
        </div>
      </div>
    );
  };

  function validateStrengthsTargets(strengthAndTargetdata) {
    if (!strengthAndTargetdata.title.trim()) {
      showSnackbar('Please Enter Title for Marking Criteria');
      return false;
    }
    for (const criteria of strengthAndTargetdata.strengthsTargetsCriterias) {
      if (!criteria.title.trim()) {
        showSnackbar('Please Enter criteria title');
        return false;
      }

      if (criteria.strengths.length < 1 || criteria.targets.length < 1) {
        showSnackbar('You have to enter at least two option for each category');
        return false;
      }

      if (
        criteria.strengths.some((strength) => !strength.trim()) ||
        criteria.targets.some((target) => !target.trim())
      ) {
        showSnackbar('Strength or Target option field cannot be empty');
        return false;
      }
    }
    return true;
  }

  const saveData = () => {
    if (!validateStrengthsTargets(markingMethodology)) {
      return;
    }
    if (markingMethodologyId === 'new') {
      createNewMarkingCriteria(markingMethodology).then((response) => {
        showSnackbar(
          'Strengths and Targets Created',
          '/#/markingTemplates/strengths-and-targets/' + response.id.value
        );
        window.location.href = '/#/settings';
      });
    } else {
      updateMarkingCriteria(markingMethodology, markingMethodologyId).then(
        (response) => {
          showSnackbar(
            'Strengths and Targets Updated',
            '/#/markingTemplates/strengths-and-targets/' + response.id.value
          );
          window.location.href = '/#/settings';
        }
      );
    }
  };

  return (
    <div className="parent-container">
      {header()}
      <div className="child-container">
        {createBreadcrumb(markingMethodologyId)}
        <GoBack />
        {titleAndSaveButton(saveData, markingMethodologyId)}
        {inputTitle(markingMethodology?.title, handleTitleChange)}
        {allCriteriaFrames()}
      </div>
    </div>
  );
}

const handleDelete = (id) => {
  deleteMarkingCriteria(id).then(() => {
    window.location.href = '/#/settings';
  });
};

const titleAndSaveButton = (saveData, markingMethodologyId = 'new') => {
  return (
    <div className="heading">
      <div className="heading-text">Create new marking template</div>
      <div className="delete-and-save">
        {markingMethodologyId != 'new' ? (
          <div
            className="delete"
            onClick={() => handleDelete(markingMethodologyId)}
          >
            <img src="/icons/trashcan.svg" alt="icon-trash" />
            <div>Delete</div>
          </div>
        ) : (
          ''
        )}
        <button className="save" onClick={() => saveData()}>
          {markingMethodologyId === 'new' ? 'Save criteria' : 'Update criteria'}
        </button>
      </div>
    </div>
  );
};

const inputTitle = (title, onChange) => {
  return (
    <input
      type="text"
      className="title-input"
      placeholder="Name a marking template"
      value={title}
      onChange={onChange}
    />
  );
};

function input(
  value,
  handleCriteriaOptionChange,
  childIndex,
  index,
  STRENGTHS
) {
  return (
    <input
      type="text"
      className="title-input"
      placeholder=" You have effectively..."
      value={value}
      onChange={(e) =>
        handleCriteriaOptionChange(e, childIndex, index, STRENGTHS)
      }
      style={{ fontWeight: 'bold' }}
    />
  );
}

const getMarkingMethodologyForId = async (id) => {
  if (id === 'new') {
    return [
      {
        title: '',
        type: 'STRENGTHS_TARGETS',
        strengthsTargetsCriterias: [{ ...Strengths_And_Traget_Data }],
      },
    ];
  } else {
    return await getMarkingMethodology(id);
  }
};
