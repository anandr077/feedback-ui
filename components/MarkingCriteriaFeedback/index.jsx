import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import styled from 'styled-components';
import DropdownMenu from '../DropdownMenu';
import { chain, set } from 'lodash';
import '../MarkingCriteriaFeedbackReadOnly/markingcriteria.css';
import './style.css';
import { isAllowGiveMarkingCriteriaFeedback } from '../FeedbacksComponents/FeedbacksRoot/rules';
import {
  CriteriaHeading,
  CriteriaHeadingContainer,
  CriteriaTable,
  MarkingCriteriaBody,
  MarkingCriteriaBodyRow,
  MarkingCriteriaBodyRowContent,
  MarkingCriteriaBodyRowHeading,
  MarkingCriteriaBodyRowheading,
} from './style';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    questionSerialNumber,
    handleRubricsChange,
    pageMode,
  } = props;

  return rubricMarkingCriteriaComponent(
    markingCriteria,
    handleRubricsChange,
    questionSerialNumber,
    pageMode
  );
}

const createRubricsHeading = (criterias) => {
  return criterias?.map((criteria) => {
    return <CriteriaHeading>{criteria?.title}</CriteriaHeading>;
  });
};

const createRubricsLevels = (
  criterias,
  handleRubricsChange,
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
      <MarkingCriteriaBody>
        {createRows(
          rowItems,
          handleRubricsChange,
          questionSerialNumber,
          pageMode
        )}
      </MarkingCriteriaBody>
    );
  });
};

const createRows = (
  items,
  handleRubricsChange,
  questionSerialNumber,
  pageMode
) => {
  return items.map((item) => {
    if (item === null) return null;

    return (
      <MarkingCriteriaBodyRow
        selected={item?.selectedLevel}
        key={item?.levelName}
        onClick={
          isAllowGiveMarkingCriteriaFeedback(pageMode)
            ? () => handleRubricsChange(item.criteriaIndex, item.levelName)
            : () => {}
        }
        style={{
          cursor: isAllowGiveMarkingCriteriaFeedback(pageMode) ? 'pointer' : '',
        }}
      >
        <MarkingCriteriaBodyRowHeading selected={item?.selectedLevel}>
          {item?.levelName}
        </MarkingCriteriaBodyRowHeading>
        <MarkingCriteriaBodyRowContent selected={item?.selectedLevel}>
          {item?.levelDescription}
        </MarkingCriteriaBodyRowContent>
      </MarkingCriteriaBodyRow>
    );
  });
};

const rubricMarkingCriteriaComponent = (
  markingCriteria,
  handleRubricsChange,
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
        <CriteriaTable>
          <CriteriaHeadingContainer>
            {createRubricsHeading(markingCriteria.criterias)}
          </CriteriaHeadingContainer>
          {createRubricsLevels(
            markingCriteria.criterias,
            handleRubricsChange,
            questionSerialNumber,
            pageMode
          )}
        </CriteriaTable>
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
  width: 100%;
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
