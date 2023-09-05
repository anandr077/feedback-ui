import React from 'react';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

function MarkingCriteriaCard(props) {
  const {
    markingCriteria,
    deleteMarkingCriteriaHandler,
    cloneMarkingCriteria,
  } = props;
  return (
    <MarkingCriteriaEntry>
      <MarkingCriteriaEntryHeading>
        <Title>{markingCriteria.title}</Title>
        <Buttons2
          markingCriteriaId={markingCriteria.id}
          deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
          cloneMarkingCriteria={cloneMarkingCriteria}
          type={markingCriteria.type}
        />
      </MarkingCriteriaEntryHeading>
      <TypeText>
        {markingCriteria.type === 'RUBRICS'
          ? 'Rubrics'
          : 'Strengths and Targets'}
      </TypeText>
    </MarkingCriteriaEntry>
  );
}

const MarkingCriteriaEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid #f3f3f3;
  background: #fff;
  box-shadow: 0px 4px 22px #2f1a720a;
  border-radius: 16px;
`;

const MarkingCriteriaEntryHeading = styled.div`
  display: flex;
  align-items: flex-start;
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
