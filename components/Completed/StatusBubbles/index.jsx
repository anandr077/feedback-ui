import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumPersianIndigo13px } from '../styledMixins';

function StatusBubbles(props) {
  const { children } = props;

  return (
    <StatusBubbles1>
      <Assignment>{children}</Assignment>
    </StatusBubbles1>
  );
}

const StatusBubbles1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--fog);
`;

const Assignment = styled.div`
  ${IbmplexsansMediumPersianIndigo13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const StatusBubbles2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--fog);
`;

const Assignment1 = styled.div`
  ${IbmplexsansMediumPersianIndigo13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const StatusBubbles3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--fog);
`;

const Assignment2 = styled.div`
  ${IbmplexsansMediumPersianIndigo13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const StatusBubbles4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--fog);
`;

const Assignment3 = styled.div`
  ${IbmplexsansMediumPersianIndigo13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const StatusBubbles5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--fog);
`;

const Assignment4 = styled.div`
  ${IbmplexsansMediumPersianIndigo13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles;
