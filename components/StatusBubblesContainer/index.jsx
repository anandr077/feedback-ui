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

export default StatusBubblesContainer;
