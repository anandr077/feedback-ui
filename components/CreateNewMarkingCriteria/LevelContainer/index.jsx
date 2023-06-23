import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalElectricViolet16px } from "../../../styledMixins";


function LevelContainer(props) {
  const { levelId, deleteLevelUpdate } = props;
  return (
    <SingleLevelContainer>
      <LevelTitle>
        <LevelTextInput placeholder="Level Name"/>
      </LevelTitle>
      <LevelDetails>
        <LevelTextInput placeholder="An answer of this level should..."/>
      </LevelDetails>
    { (levelId != 0 && levelId != 1) && <RemoveButtonContainer>
        <ButtonInnerContainer onClick={() => deleteLevelUpdate(levelId)}>
          <ButtonImage src="/icons/delete-vector.svg" alt="Vector" />
          <ButtonText>Remove</ButtonText>
        </ButtonInnerContainer>
    </RemoveButtonContainer>
    }
    </SingleLevelContainer>
  );
}

const SingleLevelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const LevelTitle = styled.div`
  display: flex;
  width: 278px;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const LevelDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 11px 18px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const LevelTextInput = styled.input`
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

const RemoveButtonContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 79px;
  height: 21px;
  cursor: pointer;
`;

const ButtonInnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 81px;
  gap: 5px;
`;

const ButtonImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: 1px;
`;

const ButtonText = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  min-height: 21px;
  min-width: 59px;
  letter-spacing: 0;
  line-height: normal;
`;


export default LevelContainer;
