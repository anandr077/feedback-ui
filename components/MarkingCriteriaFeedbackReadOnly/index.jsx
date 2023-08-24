import React from 'react';
import styled from 'styled-components';
import { chain, set } from 'lodash';
import './markingcriteria.css';

export default function MarkingCriteriaFeedbackReadOnly(props) {
  const { allmarkingCriteriaFeedback, small, questionSerialNumber } = props;
  const [selectedMarkingCriteria, setSelectedMarkingCriteria] = React.useState(
    []
  );
  const [criterias, setCriterias] = React.useState([]);

  React.useEffect(() => {
    setSelectedMarkingCriteria([]);
    const selectedMarkingCriteria = allmarkingCriteriaFeedback.filter(
      (markingCriteriaFeedback) => {
        return (
          markingCriteriaFeedback?.questionSerialNumber === questionSerialNumber
        );
      }
    );
    const criterias =
      selectedMarkingCriteria[selectedMarkingCriteria.length - 1]
        ?.markingCriteria?.criterias;
    setCriterias(criterias);
    setSelectedMarkingCriteria(selectedMarkingCriteria);
  }, []);

  return (
    <MarkingCriteriaContainer>
      <table className="marking-criteria-parent-container">
        <tr className="marking-criteria-title">{createHeading(criterias)}</tr>
        {createLevels(criterias)}
      </table>
    </MarkingCriteriaContainer>
  );
}

const createHeading = (criterias) => {
  return criterias?.map((criteria) => {
    return <td className="marking-criteria-column-width">{criteria?.title}</td>;
  });
};

const createLevels = (criterias) => {
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

const SelectedLevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--text);
`;

const MarkingCriteriaCardLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SingleMarkingCriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 8px;
`;

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
