import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalElectricViolet14px } from '../../../styledMixins';

function Buttons2(props) {
  const {
    markingCriteriaId,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
    setMarkingCriteriaPreviewDialog,
  } = props;

  return (
    <ButtonsContainer>
      <TooltipWrapper>
        <Buttons>
          <img
            src="/icons/preview-eye.png"
            alt="preview"
            style={{
              background: '#7200e0',
              cursor: 'pointer',
              borderRadius: '6px',
              height: '12px',
              width: '12px',
            }}
            onClick={(e) => {
              setMarkingCriteriaPreviewDialog(true);
              e.stopPropagation();
            }}
          />
        </Buttons>
        <span className="tooltip-text">Preview</span>
      </TooltipWrapper>
      <TooltipWrapper>
        <Buttons>
          <img
            onClick={(e) => {
              cloneMarkingCriteria();
              e.stopPropagation();
            }}
            src="/img/copy@2x.png"
            alt="copy"
            style={{
              cursor: 'pointer',
              height: '12px',
              width: '12px',
            }}
          />
        </Buttons>
        <span className="tooltip-text">Copy</span>
      </TooltipWrapper>
      <TooltipWrapper>
        <DeleteButtonContainer
          onClick={(e) => {
            deleteMarkingCriteriaHandler(markingCriteriaId);
            e.stopPropagation();
          }}
        >
          <Arrowright src="/icons/delete-logo.svg" alt="delete" />
        </DeleteButtonContainer>
        <span className="tooltip-text">Delete</span>
      </TooltipWrapper>
    </ButtonsContainer>
  );
}

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip-text {
    visibility: visible;
  }

  .tooltip-text {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px;
    position: absolute;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

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
  padding: 6px 7px;
  position: relative;
  border-radius: 6px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;


const Arrowright = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
  cursor: pointer;
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
