import React from 'react';
import Group25 from '../Group25';
import styled from 'styled-components';

function BulletList(props) {
  const { className, group25Props } = props;

  return (
    <BulletList1 className={`bullet-list ${className || ''}`}>
      <Group25 src={group25Props.src} />
    </BulletList1>
  );
}

const BulletList1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 4px 1px;
  position: relative;

  &.bullet-list.bullet-list-1 {
    padding: 4px 2px;
  }

  &.bullet-list.bullet-list-2 {
    padding: 4px 2px;
  }

  &.bullet-list.bullet-list-3 {
    padding: 4px 2px;
  }
`;

export default BulletList;
