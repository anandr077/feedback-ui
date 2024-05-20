import React from 'react';
import {
  TooltipWrapper,
  ButtonsContainer,
  Buttons,
  Arrowright,
  DeleteButtonContainer,
} from './style';
import preview from '../../../static/img/preview.svg';

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
            src={preview}
            alt="preview"
            style={{
              cursor: 'pointer',
              height: '15px',
              width: '15px',
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
              height: '15px',
              width: '15px',
            }}
          />
        </Buttons>
        <span className="tooltip-text">Copy</span>
      </TooltipWrapper>
      <TooltipWrapper>
        <DeleteButtonContainer
          onClick={(e) => {
            !markingCriteria?.isSystem
              ? deleteMarkingCriteriaHandler(markingCriteria.id)
              : {};
            e.stopPropagation();
          }}
          isHovered={!markingCriteria?.isSystem ? true : false}
        >
          {!markingCriteria?.isSystem ? (
            <Arrowright src="/icons/delete-logo.svg" alt="delete" />
          ) : (
            <Arrowright
              src="/icons/taskDeleteIcon.png"
              alt="taskDeleteDisabled"
            />
          )}
        </DeleteButtonContainer>
        {!markingCriteria?.isSystem ? (
          <span className="tooltip-text">Delete</span>
        ) : (
          <span></span>
        )}
      </TooltipWrapper>
    </ButtonsContainer>
  );
}

export default Buttons2;
