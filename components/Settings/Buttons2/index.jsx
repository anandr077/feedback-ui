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
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
    setMarkingCriteriaPreviewDialog,
  } = props;

  return (
    <ButtonsContainer>
      <TooltipWrapper>
        <Buttons
          onClick={(e) => {
            setMarkingCriteriaPreviewDialog(true);
            e.stopPropagation();
          }}
        >
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
          />
        </Buttons>
        <span className="tooltip-text">Preview</span>
      </TooltipWrapper>
      <TooltipWrapper>
        <Buttons
          onClick={(e) => {
            cloneMarkingCriteria();
            e.stopPropagation();
          }}
        >
          <img
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
            markingCriteria?.teacherId
              ? deleteMarkingCriteriaHandler(markingCriteria.id)
              : {};
            e.stopPropagation();
          }}
          isHovered={markingCriteria?.teacherId ? true : false}
        >
          {markingCriteria?.teacherId ? (
            <Arrowright src="/icons/delete-logo.svg" alt="delete" />
          ) : (
            <Arrowright
              src="/icons/taskDeleteIcon.png"
              alt="taskDeleteDisabled"
            />
          )}
        </DeleteButtonContainer>
        {markingCriteria?.teacherId ? (
          <span className="tooltip-text">Delete</span>
        ) : (
          <span></span>
        )}
      </TooltipWrapper>
    </ButtonsContainer>
  );
}

export default Buttons2;
