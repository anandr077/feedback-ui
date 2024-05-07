import React from 'react';
import StatusBubbles from '../StatusBubbles';
import styled from 'styled-components';

function StatusBubblesContainer(props) {
  const { tags, overdue } = props;
  const statusBubbles = tags.map((tag) => {
    return <StatusBubbles tag={tag} overdue={overdue} />;
  });
  return (
    <StatusBubblesInternalContainer>
      {statusBubbles}
      {overdue && <OverDueTab>Overdue</OverDueTab>}
    </StatusBubblesInternalContainer>
  );
}

const StatusBubblesInternalContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const OverDueTab = styled.div`
  background: linear-gradient(90deg, #DE2B2B 2.99%, #DE4C2B 100%);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3px 8px;
`;

export default StatusBubblesContainer;
