import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldBlack16px } from '../../styledMixins';

function Tabs2(props) {
  const { children, className } = props;

  return (
    <Tabs className={`tabs-1 ${className || ''}`}>
      <ToDo>{children}</ToDo>
    </Tabs>
  );
}

const Tabs = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 16px 5px;
  position: relative;
  border-radius: 16px;

  &.tabs-1.tabs-3 {
    margin-left: -1px;
  }

  &.tabs-1.tabs-4 {
    margin-left: -1px;
  }
`;

const ToDo = styled.div`
  ${IbmplexsansSemiBoldBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Tabs2;
