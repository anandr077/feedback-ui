import { React, useState } from 'react';
import Buttons2 from '../Buttons2';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';
import {
  MarkingCriteriaEntry,
  MarkingCriteriaEntryHeading,
  TypeText,
  Title,
  MarkIcon,
  LeftContainer,
  HeadingContainer,
  RightContainer,
} from './style';
import Rubricsnew from '../../../static/img/Rubricsnew.svg';
import Strengthsnew from '../../../static/img/Strengthsnew.svg';

function MarkingCriteriaCard(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
  } = props;
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);
  return (
    <MarkingCriteriaEntry isHovered={!markingCriteria?.isSystem ? true : false}>
      <MarkingCriteriaEntryHeading
        onClick={() =>
          !markingCriteria?.isSystem
            ? navigateToMarkingCriteriaUrl(
                markingCriteria.id,
                markingCriteria.type
              )
            : {}
        }
      >
        <LeftContainer>
          <MarkIcon
            src={markingCriteria.type === 'RUBRICS' ? Rubricsnew : Strengthsnew}
          />
          <HeadingContainer>
            <Title>{markingCriteria.title}</Title>
            <TypeText>
              {markingCriteria.type === 'RUBRICS'
                ? 'Rubric'
                : 'Strengths and Targets'}
            </TypeText>
          </HeadingContainer>
        </LeftContainer>
        <RightContainer>
          <Buttons2
            markingCriteria={markingCriteria}
            deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
            cloneMarkingCriteria={cloneMarkingCriteria}
            setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
          />
        </RightContainer>
      </MarkingCriteriaEntryHeading>
      {openMarkingCriteriaPreviewDialog && (
        <PreviewDialog
          setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
          markingCriterias={markingCriteria}
        />
      )}
    </MarkingCriteriaEntry>
  );
}

export default MarkingCriteriaCard;

function navigateToMarkingCriteriaUrl(id, type) {
  window.location.href = markingCriteriaUrl(id, type);
}
function markingCriteriaUrl(id, type) {
  return type == 'RUBRICS'
    ? `/#/markingCriterias/rubrics/${id}`
    : `/#/markingTemplates/strengths-and-targets/${id}`;
}
