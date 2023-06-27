import React from 'react';
import styled from "styled-components";
import StatusBubbles from "../StatusBubbles";
import StatusBubbles2 from "../StatusBubbles2";
import LevelContainer from "../LevelContainer";
import Buttons2 from "../Buttons2";

function CriteriaContainer(props) {
    const {criteriaId,  addLevel, deleteLevel, deleteCriteria, criteria, updateCriteriaTitle,updateLevelName, updateLevelDescription } = props;

  
    const addLevelUpdate = () => {
        addLevel(criteriaId);
    }

    const deleteLevelUpdate = (levelId) => {
      console.log("deleteLevelUpdate", levelId);
        deleteLevel(criteriaId, levelId);
    }

   const deleteCriteriaUpdate= () => {
    console.log("deleteCriteriaUpdate", criteriaId);
        deleteCriteria(criteriaId);
    }
   


    const levelsList = criteria.levels.map((level, index) => {
      return <LevelContainer key={index} levelId={index} criteriaId ={criteriaId} deleteLevelUpdate={deleteLevelUpdate} level={level} updateLevelName={updateLevelName} updateLevelDescription={updateLevelDescription}/>
  });

  return (
    <CriteriaContainerInner>
      <BubblesContainer>
      <StatusBubbles />
      <StatusBubbles deleteBubble={true} deleteCriteriaUpdate={deleteCriteriaUpdate}/>
      </BubblesContainer>

        <CriteriaTitle>
            <CriteriaTitleInput
                placeholder="Answering the question"
                id="criteriaName"
                value={criteria?.title}
                onChange={(e) => updateCriteriaTitle(criteriaId, e.target.value)}
            />
        </CriteriaTitle>
        <LevelsBox>
            <StatusBubbles2 />
            {levelsList}
            <Buttons2 text='Add level' small={true} onClickFn={addLevelUpdate}  />
        </LevelsBox>
    </CriteriaContainerInner>
  )
}

const BubblesContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 4px;`;

const CriteriaContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.20);
  background: #FFF;
`;

const CriteriaTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const CriteriaTitleInput = styled.input`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const LevelsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

export default CriteriaContainer;