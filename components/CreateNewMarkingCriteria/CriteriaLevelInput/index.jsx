import React from 'react';
import Frame1285 from '../Frame1285';
import styled from 'styled-components';
import { IbmplexsansNormalBlack20px } from '../../../styledMixins';

function CriteriaLevelInput(props) {
  const { anAnswerOfThisLevelContains, frame1285Props } = props;

  return (
    <CriteriaLevelInput1>
      <Frame1285>{frame1285Props.children}</Frame1285>
      <Frame1286>
        <AnAnswerOfThisLevelContains>
          {anAnswerOfThisLevelContains}
        </AnAnswerOfThisLevelContains>
      </Frame1286>
      <Frame1442></Frame1442>
    </CriteriaLevelInput1>
  );
}

const CriteriaLevelInput1 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1286 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const AnAnswerOfThisLevelContains = styled.p`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1442 = styled.div`
  position: relative;
  min-width: 79px;
  height: 21px;
`;

const CriteriaLevelInput2 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame12861 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const AnAnswerOfThisLevelContains1 = styled.p`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame14421 = styled.div`
  position: relative;
  min-width: 79px;
  height: 21px;
`;

const CriteriaLevelInput3 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame12862 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const AnAnswerOfThisLevelContains2 = styled.p`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame14422 = styled.div`
  position: relative;
  min-width: 79px;
  height: 21px;
`;

export default CriteriaLevelInput;
