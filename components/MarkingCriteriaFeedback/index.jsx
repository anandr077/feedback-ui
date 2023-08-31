import React from 'react';
import styled from 'styled-components';
import ImageDropdownMenu from '../ImageDropdownMenu';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    small,
    questionSerialNumber,
    handleMarkingCriteriaLevelFeedback,
  } = props;
  const Strength_And_Target_Feedback = [
    'First Strength',
    'Second Strength',
    'Target',
  ];
  const strengthAndTargetCriterias = [
    {
      title: 'Engagement with the question',
      strengths: ['strength 1', 'strength 2'],
      targets: ['target 1', 'target 2', 'target 5'],
    },
    {
      title: 'Title 2',
      strengths: ['strength 3', 'strength 4'],
      targets: ['target 3', 'target 4'],
    },
  ];
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

  const handleSelect = (index, cIndex, sIndex, criteriatype) => {
    setStrengthAndTargetSelection((prevState) => {
      const newState = { ...prevState };
      newState[criteriatype][index] = [cIndex, sIndex];
      return newState;
    });
    console.log('strengthAndTargetSelection: ', strengthAndTargetSelection);
  };

  const strengthAndTargetsCardComponent = Strength_And_Target_Feedback?.map(
    (heading, index) => {
      return (
        <SingleMarkingCriteriaContainer key={index}>
          <MarkingCriteriaCardLabel>{heading}</MarkingCriteriaCardLabel>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {index == 0 || index == 1 ? 'Strength' : 'Target'}
            </InputLabel>
            <Select
              id={`strength-target-select-${index}`}
              value={selectedStrengthsAndTargets.strength[index]}
              label={`Strength And Target ${index}`}
            >
              {strengthAndTargetCriterias?.map((criteria, cIndex) => {
                return (
                  <div>
                    <div className="criteria-heading">{criteria.title}</div>
                    {index == 0 || index == 1
                      ? criteria.strengths.map((strength, sIndex) => {
                          return (
                            <div>
                              <MenuItem
                                className="criteria-option"
                                value={strength}
                                onClick={(e) =>
                                  handleSelect(
                                    index,
                                    cIndex,
                                    sIndex,
                                    'strength'
                                  )
                                }
                              >
                                {strength}
                              </MenuItem>
                            </div>
                          );
                        })
                      : criteria.targets.map((target, sIndex) => {
                          return (
                            <div>
                              <MenuItem
                                className="criteria-option"
                                value={target}
                                onClick={(e) =>
                                  handleSelect(0, cIndex, sIndex, 'target')
                                }
                              >
                                {target}
                              </MenuItem>
                            </div>
                          );
                        })}
                  </div>
                );
              })}
            </Select>
          </FormControl>
        </SingleMarkingCriteriaContainer>
      );
    }
  );

  return (
    <>
      {small ? (
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
