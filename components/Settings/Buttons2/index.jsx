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
        <img
          src="/icons/preview-eye.png"
          alt="preview"
          style={{
            background: '#7200e0',
            cursor: 'pointer',
            borderRadius: '6px',
            height: '26px',
            width: '26px',
          }}
          onClick={(e) => {
            setMarkingCriteriaPreviewDialog(true);
            e.stopPropagation();
          }}
        />
        <span className="tooltip-text">Preview</span>
      </TooltipWrapper>
      <TooltipWrapper>
        <img
          onClick={(e) => {
            cloneMarkingCriteria();
            e.stopPropagation();
          }}
          src="/img/copy@2x.png"
          alt="copy"
          style={{
            cursor: 'pointer',
            height: '30px',
            width: '28px',
          }}
        />
        <span className="tooltip-text">Copy</span>
      </TooltipWrapper>
      {/* <Buttons
        // onClick={() =>
        //   (window.location.href =
        //     type == 'RUBRICS'
        //       ? `/#/markingCriterias/rubrics/${markingCriteriaId}`
        //       : `/#/markingTemplates/strengths-and-targets/${markingCriteriaId}`)
        // }
      >
        <ViewDetails>View and edit</ViewDetails>
        <Arrowright src="/img/arrowright@2x.png" alt="arrowright" />
      </Buttons> */}
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

// const ViewDetails = styled.div`
//   ${IbmplexsansNormalElectricViolet14px}
//   font-size: 13px;
//   position: relative;
//   width: fit-content;
//   margin-top: -1px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: normal;
// `;

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
