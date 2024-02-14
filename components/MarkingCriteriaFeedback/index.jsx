import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import styled from 'styled-components';
import { createMenuItems } from '../../features/strengthsTargets';
import DropdownMenu from '../DropdownMenu';
import './style.css';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    questionSerialNumber,
    handleMarkingCriteriaLevelFeedback,
    handleStrengthsTargetsFeedback,
  } = props;
  const strengthAndTargetCriterias = markingCriteria.strengthsTargetsCriterias;
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
        rubricMarkingCriteriaComponent(markingCriteria, handleMarkingCriteriaLevelFeedback, questionSerialNumber)
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

const rubricMarkingCriteriaComponent = (markingCriteria, handleMarkingCriteriaLevelFeedback, questionSerialNumber)=>{
  if (markingCriteria?.criterias===undefined || markingCriteria?.criterias===null) {
    return <></>
  }
  if (markingCriteria?.criterias?.length <= 0) {
    return <></>
  }
  return <MarkingCriteriaContainerSmall>
          {markingCriteriaCardsComponent(markingCriteria, handleMarkingCriteriaLevelFeedback, questionSerialNumber)}
  </MarkingCriteriaContainerSmall>
}
const markingCriteriaCardsComponent = (markingCriteria, handleMarkingCriteriaLevelFeedback, questionSerialNumber) => {
  return markingCriteria?.criterias?.map(
  (criteria, index) => {
    return (
      <SingleMarkingCriteriaContainer key={index}>
        <MarkingCriteriaCardLabel>{criteria.title}</MarkingCriteriaCardLabel>
        <DropdownMenu
          markingCriteriaType={true}
          menuItems={criteria.levels}
          onItemSelected={(item) => {
            handleMarkingCriteriaLevelFeedback(
              questionSerialNumber,
              index,
              item.name
            );
          }}
        ></DropdownMenu>
      </SingleMarkingCriteriaContainer>
    );
  }

  )
}


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
