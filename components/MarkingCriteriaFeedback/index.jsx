import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import styled from 'styled-components';
import { createMenuItems } from '../../features/strengthsTargets';
import DropdownMenu from '../DropdownMenu';
import { chain, set } from 'lodash';
import './style.css';
import '../MarkingCriteriaFeedbackReadOnly/markingcriteria.css';
import { isAllowGiveMarkingCriteriaFeedback } from '../FeedbacksComponents/FeedbacksRoot/rules';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    questionSerialNumber,
    handleMarkingCriteriaLevelFeedback,
    handleStrengthsTargetsFeedback,
    pageMode,
  } = props;

  const strengthAndTargetCriterias = markingCriteria?.strengthsTargetsCriterias;
  const selectedStrengthsAndTargets = {
    strength: [],
    target: [],
  };

  const [strengthAndTargetSelection, setStrengthAndTargetSelection] =
    React.useState(selectedStrengthsAndTargets);

  const handleSelect = (e, index, cIndex, sIndex, criteriatype) => {
    setStrengthAndTargetSelection((prevState) => {
      const newState = { ...prevState };
      newState[criteriatype][index] = [cIndex, sIndex];
      return newState;
    });
  };

  const strengthAndTargetsCardComponent = () => [
    singleStrengthTargetsContainer('strengths', 'Strength', 0),
    singleStrengthTargetsContainer('strengths', 'Strength', 1),
    singleStrengthTargetsContainer('targets', 'Target', 2),
  ];
  return (
    <>
      {markingCriteria.type === 'RUBRICS' ? (
        rubricMarkingCriteriaComponent(
          markingCriteria,
          handleMarkingCriteriaLevelFeedback,
          questionSerialNumber,
          pageMode
        )
      ) : (
        <MarkingCriteriaContainer>
          {strengthAndTargetsCardComponent()}
        </MarkingCriteriaContainer>
      )}
    </>
  );

  function singleStrengthTargetsContainer(type, heading, index) {
    return (
      <SingleMarkingCriteriaContainer>
        <MarkingCriteriaCardLabel>{heading}</MarkingCriteriaCardLabel>

        <DropdownMenu
          menuItems={createMenuItems(strengthAndTargetCriterias, type)}
          onItemSelected={(item) => {
            if (item) {
              handleStrengthsTargetsFeedback(index)(item);
            }
          }}
          noDefaultSelected={index === 1 ? true : false}
        ></DropdownMenu>
      </SingleMarkingCriteriaContainer>
    );
  }
}

const createRubricsHeading = (criterias) => {
  return criterias?.map((criteria) => {
    return <td className="marking-criteria-column-width">{criteria?.title}</td>;
  });
};

const createRubricsLevels = (
  criterias,
  handleMarkingCriteriaLevelFeedback,
  questionSerialNumber,
  pageMode
) => {
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
      <tr className="marking-criteria-data-parent">
        {createRows(
          rowItems,
          handleMarkingCriteriaLevelFeedback,
          questionSerialNumber,
          pageMode
        )}
      </tr>
    );
  });
};

const createRows = (
  items,
  handleMarkingCriteriaLevelFeedback,
  questionSerialNumber,
  pageMode
) => {
  return items.map((item) => (
    <td
      key={item?.levelName}
      className={`marking-criteria-data marking-criteria-column-width${
        item?.selectedLevel ? '-selected' : ''
      }`}
      onClick={
        isAllowGiveMarkingCriteriaFeedback(pageMode)
          ? () =>
              handleMarkingCriteriaLevelFeedback(
                questionSerialNumber,
                item.criteriaIndex,
                item.levelName
              )
          : () => {}
      }
      style={{
        cursor: isAllowGiveMarkingCriteriaFeedback(pageMode) ? 'pointer' : '',
      }}
    >
      <div className="marking-criteria-heading">{item?.levelName}</div>
      <div className="marking-criteria-content">{item?.levelDescription}</div>
    </td>
  ));
};

const rubricMarkingCriteriaComponent = (
  markingCriteria,
  handleMarkingCriteriaLevelFeedback,
  questionSerialNumber,
  pageMode
) => {
  if (
    markingCriteria?.criterias === undefined ||
    markingCriteria?.criterias === null
  ) {
    return <></>;
  }
  if (markingCriteria?.criterias?.length <= 0) {
    return <></>;
  }
  return (
    <>
      <MarkingCriteriaContainer1>
        <table className="marking-criteria-parent-container">
          <tr className="marking-criteria-title">
            {createRubricsHeading(markingCriteria.criterias)}
          </tr>
          {createRubricsLevels(
            markingCriteria.criterias,
            handleMarkingCriteriaLevelFeedback,
            questionSerialNumber,
            pageMode
          )}
        </table>
      </MarkingCriteriaContainer1>
    </>
  );
};

const MarkingCriteriaHeading = styled.h2`
  color: var(--text, #1e252a);
  font-style: normal;
  margin-top: 10px;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
`;

const MarkingCriteriaContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  height: 100%;
  justify-content: space-between;
`;

const MarkingCriteriaContainer = styled.div`
  padding: 40px 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: stretch;
  align-items: flex-start;
  gap: 20px;
  background: #fff;

  > div {
    flex: 0 1 calc(30% - 10px);
  }
`;

const MarkingCriteriaContainerSmall = styled.div`
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  padding: 0 48px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
