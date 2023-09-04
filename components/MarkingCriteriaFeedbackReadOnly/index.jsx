import React from 'react';
import styled from 'styled-components';
import { chain, set } from 'lodash';
import './markingcriteria.css';

export default function MarkingCriteriaFeedbackReadOnly(props) {
  
  const { allmarkingCriteriaFeedback, questionSerialNumber } = props;

  console.log("allmarkingCriteriaFeedback", allmarkingCriteriaFeedback)
  console.log("questionSerialNumber", questionSerialNumber)
  const selectedMarkingCriteria = allmarkingCriteriaFeedback.filter(
    (markingCriteriaFeedback) => 
      markingCriteriaFeedback?.questionSerialNumber === questionSerialNumber
  )[0]; 
  console.log("selectedMarkingCriteria", selectedMarkingCriteria)

  
  return (
    <MarkingCriteriaContainer>
      <table className="marking-criteria-parent-container">
        <tr className="marking-criteria-title">
          {heading(selectedMarkingCriteria)}
        </tr>
        {body(selectedMarkingCriteria)}
      </table>
    </MarkingCriteriaContainer>
  );
}

function heading(selectedMarkingCriteria) {
  console.log("selectedMarkingCriteria.", selectedMarkingCriteria.markingCriteria.type)
  if (selectedMarkingCriteria?.markingCriteria?.type === 'RUBRICS') {
    return createRubricsHeading(selectedMarkingCriteria?.markingCriteria?.criterias)
  }
  return createStrengthTargetHeading();
}

function body(selectedMarkingCriteria) {
  return selectedMarkingCriteria.markingCriteria.type === 'RUBRICS'
    ? createRubricsLevels(selectedMarkingCriteria?.markingCriteria?.criterias)
    : createStrengthTargetLevels(
      selectedMarkingCriteria,
      selectedMarkingCriteria.markingCriteria.strengthsTargetsCriterias,
      selectedMarkingCriteria.markingCriteria.selectedStrengthsAndTargets
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

function createStrengthTargetLevels(selectedMarkingCriteria, strengthAndTargetCriterias, selected) {
  console.log('selectedMarkingCriteria.type: ', selectedMarkingCriteria.type);
  console.log('strengthAndTargetCriterias: ', strengthAndTargetCriterias);
  return (
    <>({JSON.stringify(selectedMarkingCriteria.type + " " + strengthAndTargetCriterias)})</>
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
