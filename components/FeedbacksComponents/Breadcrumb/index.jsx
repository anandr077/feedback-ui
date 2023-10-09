import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalFuscousGray14px } from '../../../styledMixins';

function Breadcrumb(props) {
  const { text, link } = props;
  return (
    <a href={link}>
      <Breadcrumb1>
        <Assignments>{text}</Assignments>
      </Breadcrumb1>
    </a>
  );
}

const Breadcrumb1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
  color: black;
`;

const Assignments = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Breadcrumb2 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
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

const Assignments4 = styled.div`
  ${IbmplexsansNormalFuscousGray14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Breadcrumb;
