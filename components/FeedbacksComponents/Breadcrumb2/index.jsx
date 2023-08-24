import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalFuscousGray14px } from '../../../styledMixins';

function Breadcrumb2(props) {
  const { assignments } = props;

  return (
    <Breadcrumb>
      <Caret src="/img/caret@2x.png" alt="caret" />
      <Assignments>{assignments}</Assignments>
    </Breadcrumb>
  );
}

const Breadcrumb = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

const Caret = styled.img`
  position: relative;
  min-width: 14px;
  height: 14px;
`;

const Assignments = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Breadcrumb1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Caret1 = styled.img`
  position: relative;
  min-width: 14px;
  height: 14px;
`;

const Assignments1 = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Breadcrumb3 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Caret2 = styled.img`
  position: relative;
  min-width: 14px;
  height: 14px;
`;

const Assignments2 = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Breadcrumb4 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Caret3 = styled.img`
  position: relative;
  min-width: 14px;
  height: 14px;
`;

const Assignments3 = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Breadcrumb5 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Caret4 = styled.img`
  position: relative;
  min-width: 14px;
  height: 14px;
`;

const Assignments4 = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Breadcrumb2;
