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
import { useHistory } from 'react-router-dom';
import { convertToJsonAndDownlaod } from '../../../components2/convertToJsonAndDownload';

function MarkingCriteriaCard(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
  } = props;
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);
  const history = useHistory();

  function navigateToMarkingCriteriaUrl(id, type) {
    history.push(markingCriteriaUrl(id, type));
  }
  function markingCriteriaUrl(id, type) {
    return type == 'RUBRICS'
      ? `/markingTemplates/rubrics/${id}`
      : `/markingTemplates/strengths-and-targets/${id}`;
  }

  const downloadMarkingCriteria = (markingCriteria) =>{
    const extractedMarkingCriteria = {
      title: markingCriteria.title,
      type: markingCriteria.type,
      ...(markingCriteria.type === "STRENGTHS_TARGETS" 
        ? { strengthsTargetsCriterias: markingCriteria.strengthsTargetsCriterias } 
        : { criterias: markingCriteria.criterias })
    }
    convertToJsonAndDownlaod(extractedMarkingCriteria)
  }

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
            downloadMarkingCriteria={downloadMarkingCriteria}
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
