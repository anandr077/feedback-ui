import { React, useState } from 'react';
import Buttons2 from '../Buttons2';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';
import {
  MarkingCriteriaEntry,
  MarkingCriteriaEntryHeading,
  TypeText,
  Title,
} from './style';

function MarkingCriteriaCard(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
  } = props;
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);
  return (
    <MarkingCriteriaEntry isHovered={markingCriteria?.teacherId ? true : false}>
      <MarkingCriteriaEntryHeading
        onClick={() =>
          markingCriteria?.teacherId
            ? navigateToMarkingCriteriaUrl(
                markingCriteria.id,
                markingCriteria.type
              )
            : {}
        }
      >
        <div>
          <Title>{markingCriteria.title}</Title>
          <TypeText>
            {markingCriteria.type === 'RUBRICS'
              ? 'Rubric'
              : 'Strengths and Targets'}
          </TypeText>
        </div>
        <Buttons2
          markingCriteria={markingCriteria}
          deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
          cloneMarkingCriteria={cloneMarkingCriteria}
          setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
        />
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
