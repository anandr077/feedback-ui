import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../styledMixins';

function TaskFrame1353(props) {
  const { outstanding, number } = props;

  return (
    <Frame13531>
      <Outstanding>{outstanding}</Outstanding>
      <Number>{number}</Number>
    </Frame13531>
  );
}

const Frame13531 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: var(--white);
  padding: 20px;
  border-radius: 16px;
  border-radius: 16px 16px 0 0;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default TaskFrame1353;
