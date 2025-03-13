import React from 'react';
import questionMark from '../../static/img/question-mark.svg';
import preview_Icon from '../../static/icons/preview-icon.svg';
import {
  Label,
  MarkingCriteriaAndListFrame,
  MarkingCriteriaFrame,
  MarkingCriteriaList,
  Preview,
  PreviewIcon,
  QuestionMarkContainer,
} from './style';
import QuestionTooltip from '../../components2/QuestionTooltip';
import DropdownMenu from '../DropdownMenu';
import { useNavigate } from 'react-router';

function QuestionFieldSelection({
  label,
  items,
  tooltipText,
  onItemSelected,
  setIsChanged,
  currentFieldId,
  link,
  linkText,
  selectedIndex,
  serialNumber,
  handlePreview,
  showHeading = true,
}) {
  const navigate = useNavigate();
  return (
    <>
      {showHeading && (
        <QuestionMarkContainer>
          <Label>{label}</Label>
          <QuestionTooltip text={tooltipText} img={questionMark} />
        </QuestionMarkContainer>
      )}
      <MarkingCriteriaAndListFrame>
        <MarkingCriteriaFrame>
          <DropdownMenu
            fullWidth={true}
            menuItems={items}
            selectedIndex={selectedIndex}
            onItemSelected={(item) => {
              onItemSelected(serialNumber, item);
            }}
            setIsChanged={setIsChanged}
            defaultSearch={true}
          ></DropdownMenu>

          <Preview
            onClick={() => {
              handlePreview(currentFieldId);
            }}
          >
            <PreviewIcon
              src={preview_Icon}
              alt="eye"
              style={{ width: '32px', height: '32px' }}
            />
          </Preview>
        </MarkingCriteriaFrame>
        <MarkingCriteriaList onClick={() => navigate(link)}>
          {linkText}
        </MarkingCriteriaList>
      </MarkingCriteriaAndListFrame>
    </>
  );
}

export default QuestionFieldSelection;
