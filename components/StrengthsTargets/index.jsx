import React from 'react';
import { 
  StrTarHeading,
  StrTarBody,
  StrTarTitle,
  StrTarItem
} from './StrengthTargetStyle';

const StrengthsTargets = ({strengths, targets}) => {
  console.log("strengths", strengths)
  console.log("targets", targets)
  return (
    <>
       <div>
          <StrTarHeading>Strengths</StrTarHeading>
          {
            strengths.map((str, idx)=>(
                <StrTarBody key={idx}>
                     <StrTarTitle>{str.criteria}</StrTarTitle>
                     <StrTarItem>{str.attribute}</StrTarItem>
                </StrTarBody>
            ))
          }
       </div>
       <div>
          <StrTarHeading>Targets</StrTarHeading>
          {
           targets.map((str, idx)=>(
            <StrTarBody key={idx}>
                 <StrTarTitle>{str.criteria}</StrTarTitle>
                 <StrTarItem>{str.attribute}</StrTarItem>
            </StrTarBody>
            )) 
          }
       </div>
    </>
  );
};

export default StrengthsTargets;