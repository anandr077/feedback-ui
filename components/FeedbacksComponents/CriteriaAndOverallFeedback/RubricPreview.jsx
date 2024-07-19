import React from 'react';
import {
  MarkingCriteriaPreview,
  RubricCard,
  RubricCardBody,
  RubricCardBodyHeading,
  RubricCardBodyHeadingText,
  RubricCardBodyTextPart,
  RubricCardBodyTextPartText,
  RubricCardHeadingText,
} from './style';


function RubricPreview({ markingCriteria }) {
  console.log('markingCriteria', markingCriteria);
  return (
    <MarkingCriteriaPreview>
      {markingCriteria?.criterias.map((criteria, index) => {
        const selectedLevel = criteria.levels.find(
          (level) => level.name === criteria.selectedLevel
        );

        
        return (
          <RubricCard key={index}>
            <RubricCardHeadingText>{criteria.title}</RubricCardHeadingText>
            <RubricCardBody>
              <RubricCardBodyHeading >
                <RubricCardBodyHeadingText>
                  {criteria.selectedLevel}
                </RubricCardBodyHeadingText>
              </RubricCardBodyHeading>
              <RubricCardBodyTextPart>
                <RubricCardBodyTextPartText>
                  {selectedLevel.description}
                </RubricCardBodyTextPartText>
              </RubricCardBodyTextPart>
            </RubricCardBody>
          </RubricCard>
        );
      })}
    </MarkingCriteriaPreview>
  );
}

export default RubricPreview;
