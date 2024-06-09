import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: fit-content;
  height: 40px;
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  background-color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 5px;
  cursor: pointer;

  :hover {
    background-color: rgba(80, 0, 157, 1);
  }
`;
