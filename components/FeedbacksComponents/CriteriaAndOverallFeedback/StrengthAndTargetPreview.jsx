import React from 'react';
import {
  MarkingCriteriaCard,
  MarkingCriteriaCardBody,
  MarkingCriteriaCardBodyText,
  MarkingCriteriaCardHeading,
  MarkingCriteriaCardHeadingText,
  MarkingCriteriaPreview,
} from './style';

const CriteriaSection = ({ title, items }) => (
  <MarkingCriteriaCard>
    <MarkingCriteriaCardHeading>
      <MarkingCriteriaCardHeadingText>{title}</MarkingCriteriaCardHeadingText>
    </MarkingCriteriaCardHeading>
    {items?.map((item,index) =>{
      const isLastItem = index === items.length - 1;
      return (
        <MarkingCriteriaCardBody key={item.attribute} isLastItem={isLastItem}>
          <MarkingCriteriaCardBodyText>
            {item.attribute}
          </MarkingCriteriaCardBodyText>
        </MarkingCriteriaCardBody>
      );})}
  </MarkingCriteriaCard>
);

function StrengthAndTargetPreview({ markingCriteria }) {
  return (
    <MarkingCriteriaPreview>
      <CriteriaSection
        title="Strengths"
        items={markingCriteria.selectedStrengths}
      />
      <CriteriaSection
        title="Targets"
        items={markingCriteria.selectedTargets}
      />
    </MarkingCriteriaPreview>
  );
}

export default StrengthAndTargetPreview;
