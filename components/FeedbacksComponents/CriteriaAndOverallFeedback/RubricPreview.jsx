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
import { getAllColors } from '../../../service';

const colors = getAllColors();
console.log('colors', colors);

function RubricPreview({ markingCriteria }) {
  console.log('markingCriteria', markingCriteria);
  return (
    <MarkingCriteriaPreview>
      {markingCriteria?.criterias.map((criteria, index) => {
        const selectedLevel = criteria.levels.find(
          (level) => level.name === criteria.selectedLevel
        );

        // Ensure the color index is within the bounds of the colors array
        const color = colors[index % colors.length];
        console.log(`Color for index ${index}:`, color);
        return (
          <RubricCard key={index}>
            <RubricCardHeadingText>{criteria.title}</RubricCardHeadingText>
            <RubricCardBody>
              <RubricCardBodyHeading style={{ backgroundColor: color }}>
                <RubricCardBodyHeadingText style={{ color: color }}>
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
