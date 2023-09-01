import React, { useEffect } from 'react';
import './style.css';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import { completedHeaderProps } from '../../../utils/headerProps';
import Header from '../../Header';
import GoBack from '../GoBack';
import { useState } from 'react';
import HeaderSmall from '../../HeaderSmall';

export default function CreateNewStrengthAndTargets() {
  const Strengths_And_Traget_Data = {
    // id: 1,
    title: 'Engagement with the question',
    strengths: ['', ''],
    targets: ['', ''],
  };
  const STRENGTHS = 'strengths';
  const TARGETS = 'targets';

  const headerProps = completedHeaderProps(true);
  const [title, setTitle] = useState(
    'Untitled strengths and targets criteria_001'
  );

  const [strengthsAndTargetData, setStrengthsAndTargetData] = useState([
    Strengths_And_Traget_Data,
  ]);

  const [criteriaSets, setCriteriaSets] = useState([0]);

  const handleCriteriaChange = (e, index) => {
    const updatedData = [...strengthsAndTargetData];
    updatedData[index].title = e.target.value;
    setStrengthsAndTargetData(updatedData);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddCriteria = () => {
    const newData = {
      ...Strengths_And_Traget_Data,
      id: strengthsAndTargetData.length + 1,
    };
    setStrengthsAndTargetData([...strengthsAndTargetData, newData]);
    setCriteriaSets([...criteriaSets, criteriaSets.length]);
  };

  const removeCriteria = (indexToDelete) => {
    const updatedData = strengthsAndTargetData.filter(
      (_, index) => index !== indexToDelete
    );
    setStrengthsAndTargetData(updatedData);

    const updateCriteriaSets = criteriaSets.filter(
      (_, index) => index !== indexToDelete
    );
    setCriteriaSets(updateCriteriaSets);
  };

  const handleAddOption = (index, type) => {
    const updatedData = [...strengthsAndTargetData];
    if (type === STRENGTHS) {
      updatedData[index].strengths.push('');
    }
    if (type === TARGETS) {
      updatedData[index].targets.push('');
    }
    setStrengthsAndTargetData(updatedData);
  };

  const removeAddOption = (childIndex, index, type) => {
    const updatedData = [...strengthsAndTargetData];
    if (type === STRENGTHS) {
      updatedData[index].strengths.splice(childIndex, 1);
    }
    if (type === TARGETS) {
      updatedData[index].targets.splice(childIndex, 1);
    }
    setStrengthsAndTargetData(updatedData);
  };

  const handleCriteriaOptionChange = (e, childIndex, index, type) => {
    const updatedData = [...strengthsAndTargetData];
    if (type === STRENGTHS) {
      updatedData[index].strengths[childIndex] = e.target.value;
    }
    if (type === TARGETS) {
      updatedData[index].targets[childIndex] = e.target.value;
    }
    setStrengthsAndTargetData(updatedData);
  };

  const createStrengthsAndTargets = (index) => {
    return (
      <div className="strength-and-target-container">
        <div className="strength">
          <div className="strength-text">Strengths</div>
          {strengthsAndTargetData[index].strengths.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                <input
                  type="text"
                  className="title-input"
                  placeholder="An answer of this level should..."
                  value={value}
                  onChange={(e) =>
                    handleCriteriaOptionChange(e, childIndex, index, STRENGTHS)
                  }
                />
                {childIndex >= 2 && (
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
          {strengthsAndTargetData[index].targets.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                <input
                  type="text"
                  className="title-input"
                  placeholder="An answer of this level should..."
                  value={value}
                  onChange={(e) =>
                    handleCriteriaOptionChange(e, childIndex, index, TARGETS)
                  }
                />
                {childIndex >= 2 && (
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
  const createCriteria = (index) => {
    return (
      <div className="criteria-container">
        <div className="remove-and-criteria">
          <div className="criteria">Criteria</div>
          <div
            className="remove"
            onClick={() => removeCriteria(index, strengthsAndTargetData)}
          >
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
          placeholder="Enter Criteria"
          value={strengthsAndTargetData[index].title}
          onChange={(e) => handleCriteriaChange(e, index)}
          style={{ marginTop: '20px' }}
        />
        {createStrengthsAndTargets(index)}
      </div>
    );
  };

  const saveData = () => {
    console.log('strengthsAndTargetData:', strengthsAndTargetData);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="parent-container">
      {screenWidth > 1439 ? (
        <Header headerProps={headerProps} />
      ) : (
        <HeaderSmall headerProps={headerProps} />
      )}
      <div className="child-container">
        {createBreadcrumb()}
        <GoBack />
        <div className="heading">
          <div className="heading-text">Create new marking criteria</div>
          <button className="save" onClick={saveData}>
            Save criteria
          </button>
        </div>
        <input
          type="text"
          className="title-input"
          placeholder="Enter Title"
          value={title}
          onChange={handleTitleChange}
        />
        <div className="form-container">
          <div className="subheading">Create Criteria</div>
          <div className="border"></div>
          {criteriaSets.map((index) => createCriteria(index))}
          <div className="add-criteria" onClick={handleAddCriteria}>
            + Add criteria
          </div>
        </div>
      </div>
    </div>
  );
}
const createBreadcrumb = () => {
  return <div className="breadcrumb">
    <Breadcrumb text="Account Settings" link={'/#/settings'} />
    <Breadcrumb2 title="Marking Methodologies" link={'/#/settings'} />
    <Breadcrumb2 title="Create new" />
  </div>;
}

