import React from 'react';
import styled from 'styled-components';
import { chain, set } from 'lodash';
import './markingcriteria.css';
import StrengthsTargets from '../StrengthsTargets';

export default function MarkingCriteriaFeedbackReadOnly(props) {
  const { allmarkingCriteriaFeedback, questionSerialNumber } = props;
  const selectedMarkingCriteria = allmarkingCriteriaFeedback.filter(
    (markingCriteriaFeedback) =>
      markingCriteriaFeedback?.questionSerialNumber === questionSerialNumber
  )[0];

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
  if (selectedMarkingCriteria?.markingCriteria?.type === 'RUBRICS') {
    return createRubricsHeading(
      selectedMarkingCriteria?.markingCriteria?.criterias
    );
  }
  return <></>;
}

function body(selectedMarkingCriteria) {
  if (selectedMarkingCriteria.markingCriteria.type === 'RUBRICS')
    return createRubricsLevels(
      selectedMarkingCriteria?.markingCriteria?.criterias
    );

  return (
    <StrengthsTargets
      strengths={selectedMarkingCriteria?.markingCriteria?.selectedStrengths}
      targets={selectedMarkingCriteria?.markingCriteria?.selectedTargets}
    ></StrengthsTargets>
  );
}

const createRubricsHeading = (criterias) => {
  return criterias?.map((criteria) => {
    return <td className="marking-criteria-column-width">{criteria?.title}</td>;
  });
};

const createRubricsLevels = (criterias) => {
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
  margin: 40px 48px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  background: #fff;
  display: flex;
  grid-gap: 10px;
  overflow-x: scroll;
  
  padding-top: 20px;
  border-top: 1px solid #F1E6FC;
  &::-webkit-scrollbar {
    display: none;
  }
`;
