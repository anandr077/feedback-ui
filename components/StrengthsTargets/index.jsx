import React from 'react';
import { 
  StrTarContainer, 
  StrTarHeading,
  StrTarBody,
  StrTarTitle,
  StrTarItem
} from './StrengthTargetStyle';

const strengths = [
  {
    title: 'Engagement with the question',
    item: 'You start your paragraphs with a point sentence that links to the question',
  },
  {
    title: 'Use of evidence to support argument',
    item: 'Introduces evidence and/or supporting ideas in relation to the [concept / postion / question]',
  },
];

const targets = [
  {
    title: 'Engagement with the question',
    item: 'Begin your paragraphs with a point sentence that links to the question',
  },
];



const StrengthsTargets = () => {
  return (
    <StrTarContainer>
       <div>
          <StrTarHeading>Strengths</StrTarHeading>
          {
            strengths.map((str, idx)=>(
                <StrTarBody key={idx}>
                     <StrTarTitle>{str.title}</StrTarTitle>
                     <StrTarItem>{str.item}</StrTarItem>
                </StrTarBody>
            ))
          }
       </div>
       <div>
          <StrTarHeading>Targets</StrTarHeading>
          {
           targets.map((str, idx)=>(
            <StrTarBody key={idx}>
                 <StrTarTitle>{str.title}</StrTarTitle>
                 <StrTarItem>{str.item}</StrTarItem>
            </StrTarBody>
            )) 
          }
       </div>
    </StrTarContainer>
  );
};

export default StrengthsTargets;