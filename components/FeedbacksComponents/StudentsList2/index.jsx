import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';

function StudentsList2(props) {
  const { ellipse10, name } = props;

  return (
    <StudentsList>
      <Ellipse10 src="/icons/ellipse.png" alt="Ellipse 10" />
      <Name>{name}</Name>
    </StudentsList>
  );
}

const StudentsList = styled.article`
  display: flex;
  width: 304px;
  align-items: center;
  gap: 6px;
  padding: 4px;
  position: relative;
  border-radius: 12px;
`;

const Ellipse10 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

export default StudentsList2;
