import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../styledMixins';

function TaskFrame1353(props) {
  const { outstanding, number } = props;

  const color = () => {
    if (outstanding === 'Assigned') {
      return '#f1e7ff';
    }
    if (outstanding === 'In Draft') {
      return '#F9F0CD';
    }
    if (outstanding === 'In Review') {
      return '#DCF5D1';
    }
  };

  return (
    <Frame13531
      style={{
        backgroundColor: color(),
      }}
    >
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
  font-size: var(--font-size-xxl);
  // position: relative;
  align-self: stretch;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: var(--white);
  padding: 20px;
  border-radius: 16px;
  border-radius: 16px 16px 0 0;
  // margin:20px;
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
