import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalElectricViolet14px } from '../../../styledMixins';

function Buttons2(props) {
  const {
    markingCriteriaId,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
  } = props;
  return (
    <ButtonsContainer>
      <Buttons onClick={() => cloneMarkingCriteria()}>Clone</Buttons>
      <Buttons
        onClick={() =>
          (window.location.href = `/#/markingCriterias/${markingCriteriaId}`)
        }
      >
        <ViewDetails>View and edit</ViewDetails>
        <Arrowright src="/img/arrowright@2x.png" alt="arrowright" />
      </Buttons>
      <DeleteButtonContainer
        onClick={() => {
          deleteMarkingCriteriaHandler(markingCriteriaId);
        }}
      >
        <Arrowright src="/icons/delete-logo.svg" alt="delete" />
      </DeleteButtonContainer>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Buttons = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  position: relative;
  border-radius: 14px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ViewDetails = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 13px;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
`;

const DeleteButtonContainer = styled.div`
  display: flex;
  padding: 6px 7px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #de2b2b;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Buttons2;
