import styled from 'styled-components';

export const Button = styled.button`
  width: fit-content;
  background-color: rgba(75, 70, 79, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: var(--light-mode-purple);
  }

  :disabled {
    background-color: rgba(75, 70, 79, 0.5); 
    cursor: not-allowed;
  }
`;

export const LeftIcon = styled.img`
  transform: rotate(180deg);
`;
