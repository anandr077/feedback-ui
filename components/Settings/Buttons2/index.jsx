import React from 'react';
import {
  TooltipWrapper,
  ButtonsContainer,
  Buttons,
  Arrowright,
  DeleteButtonContainer,
} from './style';
import preview from '../../../static/img/preview.svg';
import DownLoadCommentBankIcon from '../../../static/img/Download.svg';
import QuestionTooltip from '../../../components2/QuestionTooltip';

function Buttons2(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
    setMarkingCriteriaPreviewDialog,
    downloadMarkingCriteria
  } = props;

  return (
    <ButtonsContainer>
      <QuestionTooltip
        text={'Export'}
        img={DownLoadCommentBankIcon}
        onClickFn={(e) => {
          downloadMarkingCriteria(markingCriteria);
          e.stopPropagation();
        }}
      />
      <QuestionTooltip
        text={'Preview'}
        img={preview}
        onClickFn={(e) => {
          setMarkingCriteriaPreviewDialog(true);
          e.stopPropagation();
        }}
      />
      <QuestionTooltip
        text={'Duplicate & Edit'}
        img={"/img/copy@2x.png"}
        onClickFn={(e) => {
          cloneMarkingCriteria();
          e.stopPropagation();
        }}
      />
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
