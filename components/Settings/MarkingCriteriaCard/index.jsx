import { React, useState } from 'react';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';

function MarkingCriteriaCard(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria
  } = props;
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);
  return (
    <MarkingCriteriaEntry onClick={() =>
      (window.location.href =
        markingCriteria.type == 'RUBRICS'
          ? `/#/markingCriterias/rubrics/${markingCriteria.id}`
          : `/#/markingTemplates/strengths-and-targets/${markingCriteria.id}`)
    }>
      <MarkingCriteriaEntryHeading>
        <div>
          <Title>{markingCriteria.title}</Title>
          <TypeText>
            {markingCriteria.type === 'RUBRICS'
              ? 'Rubric'
              : 'Strengths and Targets'}
          </TypeText>
        </div>
        <Buttons2
          markingCriteriaId={markingCriteria.id}
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

const MarkingCriteriaEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 30px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid #f3f3f3;
  background: #fff;
  box-shadow: 0px 4px 22px #2f1a720a;
  border-radius: 16px;
  cursor: pointer;

  &:hover{
    border-color: #7200E0;
    background-color: #F9F5FF;
  }
`;

const MarkingCriteriaEntryHeading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const TypeText = styled.div`
  color: #979797;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default MarkingCriteriaCard;
