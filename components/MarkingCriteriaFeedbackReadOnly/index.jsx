import React from 'react';
import styled from 'styled-components';
import { chain, set } from 'lodash';
import './markingcriteria.css';

export default function MarkingCriteriaFeedbackReadOnly(props) {
  
  const { allmarkingCriteriaFeedback, questionSerialNumber } = props;

  console.log("allmarkingCriteriaFeedback", allmarkingCriteriaFeedback)
  console.log("questionSerialNumber", questionSerialNumber)
  const selectedMarkingCriteria = allmarkingCriteriaFeedback.filter(
    (markingCriteriaFeedback) => {
      return (
        markingCriteriaFeedback?.questionSerialNumber === questionSerialNumber
      );
    }
  )[0]; 
  const criterias =
      selectedMarkingCriteria[selectedMarkingCriteria.length - 1]
        ?.markingCriteria?.criterias;
  console.log('selectedMarkingCriteria', selectedMarkingCriteria);

  console.log("criterias", criterias)
  return (
    <MarkingCriteriaContainer>
      <table className="marking-criteria-parent-container">
        <tr className="marking-criteria-title">
          {selectedMarkingCriteria.type === 'RUBRICS'
            ? createRubricsHeading(criterias)
            : createStrengthTargetHeading()}
        </tr>
        {selectedMarkingCriteria.type === 'RUBRICS'
          ? createRubricsLevels(criterias)
          : createStrengthTargetLevels(
              selectedMarkingCriteria.markingCriteria.strengthsTargetsCriterias,
              selectedMarkingCriteria.markingCriteria.selectedStrengthsAndTargets
            )}
      </table>
    </MarkingCriteriaContainer>
  );
}

function createStrengthTargetHeading() {
  return (
    <>
      <td className="marking-criteria-column-width">Strength 1</td>
      <td className="marking-criteria-column-width">Strength 2</td>
      <td className="marking-criteria-column-width">Targets</td>
    </>
  );
}

function createStrengthTargetLevels(strengthAndTargetCriterias, selected) {
  console.log('strengthAndTargetCriterias: ', strengthAndTargetCriterias);
  return (
    <div>
      {strengthAndTargetCriterias.map((criteria, index) => (
        <tr className="marking-criteria-data-parent">
          <td
            key={index}
            className="marking-criteria-data marking-criteria-column-width"
          >
            <div className="marking-criteria-heading">{criteria.title}</div>
            {criteria.strengths.map((strength, sIndex) => (
              <div>
                {selected.strengths[index][0] == index &&
                selected.strengths[index][1] == sIndex ? (
                  <div className="marking-criteria-content marking-criteria-column-width-selected">
                    {strength}
                  </div>
                ) : (
                  <div className="marking-criteria-content">{strength}</div>
                )}
              </div>
            ))}
          </td>
          <td
            key={index}
            className="marking-criteria-data marking-criteria-column-width"
          >
            <div className="marking-criteria-heading">{criteria.title}</div>
            {criteria.strengths.map((strength, sIndex) => (
              <div>
                {selected.strengths[index][0] == index &&
                selected.strengths[index][1] == sIndex ? (
                  <div className="marking-criteria-content marking-criteria-column-width-selected">
                    {strength}
                  </div>
                ) : (
                  <div className="marking-criteria-content">{strength}</div>
                )}
              </div>
            ))}
          </td>
          <td
            key={index}
            className="marking-criteria-data marking-criteria-column-width"
          >
            <div className="marking-criteria-heading">{criteria.title}</div>
            {criteria.targets.map((target, sIndex) => (
              <div>
                {selected.targets[0][0] == index &&
                selected.targets[0][1] == sIndex ? (
                  <div className="marking-criteria-content marking-criteria-column-width-selected">
                    {target}
                  </div>
                ) : (
                  <div className="marking-criteria-content">{target}</div>
                )}
              </div>
            ))}
          </td>
        </tr>
      ))}
    </div>
  );
}

const createRubricsHeading = (criterias) => {
  return criterias?.map((criteria) => {
    return <td className="marking-criteria-column-width">{criteria?.title}</td>;
  });
};

const createRubricsLevels = (criterias) => {
  console.log('criteria: ', criterias);
  let groupedArray = chain(criterias)
    .flatMap((criteria, criteriaIndex) => {
      const selectedLevel = criteria.selectedLevel;
      return criteria?.levels.map((level, levelIndex) => {
        return {
          criteriaIndex: criteriaIndex,
          levelIndex: levelIndex,
          title: criteria?.title,
          levelName: level.name,
          levelDescription: level.description,
          selectedLevel: level.name === selectedLevel,
        };
      });
    })
    .groupBy('levelIndex')
    .map((items, name) => ({ name, items }))
    .value();

  return groupedArray.map((group) => {
    let rowItems = Array(criterias.length).fill(null);
    group.items.forEach((item) => {
      rowItems[item.criteriaIndex] = item;
    });
    return (
      <tr className="marking-criteria-data-parent">{createRows(rowItems)}</tr>
    );
  });
};

const createRows = (items) => {
  return items.map((item) => {
    if (item) {
      return (
        <>
          {item.selectedLevel ? (
            <td className="marking-criteria-data marking-criteria-column-width-selected">
              <div className="marking-criteria-heading">{item.levelName}</div>
              <div className="marking-criteria-content">
                {item.levelDescription}
              </div>
            </td>
          ) : (
            <td className="marking-criteria-data marking-criteria-column-width">
              <div className="marking-criteria-heading">{item.levelName}</div>
              <div className="marking-criteria-content">
                {item.levelDescription}
              </div>
            </td>
          )}
        </>
      );
    } else {
      return (
        <td className="marking-criteria-data marking-criteria-column-width"></td>
      );
    }
  });
};


const MarkingCriteriaContainer = styled.div`
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: flex;
  grid-gap: 10px;
`;
