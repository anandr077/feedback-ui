import React from 'react';
import styled from 'styled-components';

function StatusBubbles(props) {
  const { tag, overdue } = props;
  return (
    <StatusBubble name={tag.name} overdue={overdue}>
      <StatusBubblesText>{tag.name}</StatusBubblesText>
    </StatusBubble>
  );
}

const StatusBubble = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: ${props => props.name === "Community" ? 'var(--blue-chalk)' : 'var(--wheatfield)'};
  border-radius: 11.5px;
  border: 1px solid;
  border-color: ${props => props.name === 'Community' ? (props.overdue ? 'var(--royal-purple)' : 'var(--blue-chalk)') : 'var(--golden-sand)'};
`;

const StatusBubblesText = styled.div`
  color: var(--horses-neck);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles;
