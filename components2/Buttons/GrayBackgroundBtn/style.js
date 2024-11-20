import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(75, 70, 79, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    background-color: var(--light-mode-purple);
  }
`;
