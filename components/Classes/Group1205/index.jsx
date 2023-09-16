import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumElectricViolet16px } from '../styledMixins';

function Group1205(props) {
  const { arrowright, className } = props;

  return (
    <Group1206 className={`group-1206 ${className || ''}`}>
      <ViewAll className="view-all-1">VIEW ALL</ViewAll>
      <Arrowright className="arrowright-2" src={arrowright} alt="arrowright" />
    </Group1206>
  );
}

const Group1206 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;

  &.group-1206.group-1206-1 {
    margin-right: unset;
  }
`;

const ViewAll = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  width: 85px;
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright = styled.img`
  width: 20px;
  height: 20px;
`;

export default Group1205;
