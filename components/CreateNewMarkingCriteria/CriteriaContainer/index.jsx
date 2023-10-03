import React from 'react';
import StatusBubbles from '../StatusBubbles';
import StatusBubbles2 from '../StatusBubbles2';
import LevelContainer from '../LevelContainer';
import Buttons2 from '../Buttons2';
import {
  BubblesContainer,
  CriteriaContainerInner,
  CriteriaTitle,
  CriteriaTitleInput,
  LevelsBox,
} from './style';

function CriteriaContainer(props) {
  const {
    criteriaId,
    addLevel,
    deleteLevel,
    deleteCriteria,
    criteria,
    updateCriteriaTitle,
    updateLevelName,
    updateLevelDescription,
  } = props;

  const addLevelUpdate = () => {
    addLevel(criteriaId);
  };

  const deleteLevelUpdate = (levelId) => {
    deleteLevel(criteriaId, levelId);
  };

  const deleteCriteriaUpdate = () => {
    deleteCriteria(criteriaId);
  };

  const levelsList = criteria.levels.map((level, index) => {
    return (
      <LevelContainer
        key={index}
        levelId={index}
        criteriaId={criteriaId}
        deleteLevelUpdate={deleteLevelUpdate}
        level={level}
        updateLevelName={updateLevelName}
        updateLevelDescription={updateLevelDescription}
      />
    );
  });

  return (
    <CriteriaContainerInner>
      <BubblesContainer>
        <StatusBubbles />
        <StatusBubbles
          deleteBubble={true}
          deleteCriteriaUpdate={deleteCriteriaUpdate}
        />
      </BubblesContainer>

      <CriteriaTitle>
        <CriteriaTitleInput
          placeholder="Answering the question (max 140 characters)"
          id="criteriaName"
          value={criteria?.title}
          onChange={(e) => updateCriteriaTitle(criteriaId, e.target.value)}
          maxLength="140"
        />
      </CriteriaTitle>
      <LevelsBox>
        <StatusBubbles2 />
        {levelsList}
        <Buttons2 text="Add level" small={true} onClickFn={addLevelUpdate} />
      </LevelsBox>
    </CriteriaContainerInner>
  );
}

export default CriteriaContainer;
