import React from 'react';
import StatusBubbles from '../StatusBubbles';
import styled from 'styled-components';

function Frame62(props) {
  const { statusBubblesProps } = props;

  return (
    <Frame6>
      <StatusBubbles>{statusBubblesProps.children}</StatusBubbles>
    </Frame6>
  );
}

const Frame6 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame61 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame63 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame64 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Frame62;
