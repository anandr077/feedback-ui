import React from 'react';
import {
  TooltipWrapper,
  ButtonsContainer,
  Buttons,
  Arrowright,
  DeleteButtonContainer,
} from './style';

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

export default Buttons2;
