import styled from 'styled-components';

export const NotificationBtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  margin: 5px 0;
`;

export const Button = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-xl);
  color: var(--text);
  border-radius: 16px;
  padding: 6px 16px;
  border: none;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;

  &.active {
    background-color: #7200e0 !important;
    color: white;
  }

  &:hover {
    background-color: #dec6ff;
  }
`;
