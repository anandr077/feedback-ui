import styled from 'styled-components';

export const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 30px;
  color: white;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  background-color: var(--light-mode-purple);
  :hover {
    background: #3f007b;
  }
`;
