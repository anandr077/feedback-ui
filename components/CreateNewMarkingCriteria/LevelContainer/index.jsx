import React from 'react';
import {
  SingleLevelContainer,
  LevelTitle,
  LevelDetails,
  LevelTextInput,
  LevelTextDiscription,
  RemoveButtonContainer,
  ButtonInnerContainer,
  ButtonImage,
  ButtonText,
} from './style';

function LevelContainer(props) {
  const {
    levelId,
    criteriaId,
    deleteLevelUpdate,
    level,
    updateLevelName,
    updateLevelDescription,
  } = props;
  return (
    <SingleLevelContainer>
      <LevelTitle>
        <LevelTextInput
          placeholder="Level Name (max 30 characters)"
          value={level?.name}
          onChange={(e) => updateLevelName(criteriaId, levelId, e.target.value)}
          maxLength="200"
        />
      </LevelTitle>
      <LevelDetails>
        <LevelTextDiscription
          placeholder="An answer of this level should...(max 200 characters)"
          value={level?.description}
          onChange={(e) =>
            updateLevelDescription(criteriaId, levelId, e.target.value)
          }
          maxLength="200"
        />
      </LevelDetails>
      {levelId != 0 && levelId != 1 && (
        <RemoveButtonContainer>
          <ButtonInnerContainer onClick={() => deleteLevelUpdate(levelId)}>
            <ButtonImage src="/icons/delete-vector.svg" alt="Vector" />
            <ButtonText>Remove</ButtonText>
          </ButtonInnerContainer>
        </RemoveButtonContainer>
      )}
    </SingleLevelContainer>
  );
}

export default LevelContainer;
