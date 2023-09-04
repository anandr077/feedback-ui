import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import styled from 'styled-components';
import GroupedSelect from '../GroupedSelect';
import ImageDropdownMenu from '../ImageDropdownMenu';
import './style.css';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    questionSerialNumber,
    handleMarkingCriteriaLevelFeedback,
    handleStrengthsTargetsFeedback
  } = props;
  const strengthAndTargetCriterias = markingCriteria.strengthsTargetsCriterias;
  const selectedStrengthsAndTargets = {
    strength: [],
    target: [],
  };
  const markingCriteriaCardsComponent = markingCriteria.criterias?.map(
    (criteria, index) => {
      return (
        <SingleMarkingCriteriaContainer key={index}>
          <MarkingCriteriaCardLabel>{criteria.title}</MarkingCriteriaCardLabel>
          <ImageDropdownMenu
            markingCriteriaType={true}
            menuItems={criteria.levels}
            onItemSelected={(item) => {
              handleMarkingCriteriaLevelFeedback(
                questionSerialNumber,
                index,
                item.name
              );
            }}
          ></ImageDropdownMenu>
        </SingleMarkingCriteriaContainer>
      );
    }
  );
  const [strengthAndTargetSelection, setStrengthAndTargetSelection] =
    React.useState(selectedStrengthsAndTargets);

  const handleSelect = (e, index, cIndex, sIndex, criteriatype) => {
    setStrengthAndTargetSelection((prevState) => {
      const newState = { ...prevState };
      newState[criteriatype][index] = [cIndex, sIndex];
      return newState;
    });
    console.log('strengthAndTargetSelection: ', strengthAndTargetSelection);
  };

  const strengthAndTargetsCardComponent = [
    singleStrengthTargetsContainer('strengths', 'First Strength', 0),
    singleStrengthTargetsContainer('strengths', 'Second Strength', 1), 
    singleStrengthTargetsContainer('targets', 'Target', 2)
  ]

  return (
    <>
      {markingCriteria.type==='RUBRICS' ? (
        // <GroupedSelect></GroupedSelect>
        <MarkingCriteriaContainerSmall>
          {markingCriteriaCardsComponent}
        </MarkingCriteriaContainerSmall>
      ) : (
        <MarkingCriteriaContainer>
          
          {strengthAndTargetsCardComponent}
        </MarkingCriteriaContainer>
      )}
    </>
  );

  function singleStrengthTargetsContainer(type, heading, index) {
    return <SingleMarkingCriteriaContainer>
      <MarkingCriteriaCardLabel>{heading}</MarkingCriteriaCardLabel>
      <GroupedSelect label={heading} onClick={handleStrengthsTargetsFeedback(index)} groups={createGroup(type)}/>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {index == 0 || index == 1 ? 'Strength' : 'Target'}
        </InputLabel>
        {strengthTargetsSelect(index)}
      </FormControl> */}
    </SingleMarkingCriteriaContainer>;
  }
  
  function createGroup(type) {
    return strengthAndTargetCriterias?.map(criteria=>{
      return {
        label: criteria.title,
        options: criteria[type].map(strength=>{
          return {
            label: strength,
            value: strength
          }
        })
      } 
    })
  }
  function strengthTargetsSelect(index) {
    return <Select
      id={`strength-target-select-${index}`}
      // value={selectedStrengthsAndTargets.strength[index]}
      label={`Strength And Target ${index}`}
    >
      {strengthAndTargetCriterias?.map((criteria, cIndex) => {
        return (
          <div>
            <div className="criteria-heading">{criteria.title}</div>
            {index == 0 || index == 1
              ? criteria.strengths.map((strength, sIndex) => {
                return (
                  menuItem(strength, cIndex, sIndex, 'strength')
                );
              })
              : criteria.targets.map((target, sIndex) => {
                return (
                  menuItem(target, cIndex, sIndex, 'target')
                );
              })}
          </div>
        );
      })}
    </Select>;

    

    function menuItem(item, cIndex, sIndex, type) {
      return <div>
        <MenuItem
          className="criteria-option"
          value={item}
          onClick={(e) => handleSelect(
            e,
            index,
            cIndex,
            sIndex,
            type
          )
          }
        >
          {item}
        </MenuItem>
      </div>;
    }
  }
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
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const MarkingCriteriaContainerSmall = styled.div`
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
