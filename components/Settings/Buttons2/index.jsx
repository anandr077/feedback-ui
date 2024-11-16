import React from 'react';
import {
  TooltipWrapper,
  ButtonsContainer,
  Buttons,
  Arrowright,
  DeleteButtonContainer,
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import { useResizedImage } from '../../../components2/resizeImage';
import Loader from '../../Loader';

function Buttons2(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
    setMarkingCriteriaPreviewDialog,
    downloadMarkingCriteria
  } = props;
  const resizedImages = useResizedImage();

  if(!resizedImages){
    return <Loader />
  }


  return (
    <ButtonsContainer>
      <QuestionTooltip
        text={'Export'}
        img={resizedImages.export}
        onClickFn={(e) => {
          downloadMarkingCriteria(markingCriteria);
          e.stopPropagation();
        }}
      />
      <QuestionTooltip
        text={'Preview'}
        img={resizedImages.preview}
        onClickFn={(e) => {
          setMarkingCriteriaPreviewDialog(true);
          e.stopPropagation();
        }}
      />
      <QuestionTooltip
        text={'Duplicate & Edit'}
        img={resizedImages.copy}
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
            <Arrowright src={resizedImages.delete} alt="delete" />
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
