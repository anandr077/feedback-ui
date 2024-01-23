import styled from 'styled-components';

export const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  height: 66px;
  color: white;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  background-color: var(--light-mode-purple);
  :hover {
    background: #3f007b;
  }
`;
