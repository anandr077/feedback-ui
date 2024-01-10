import styled from 'styled-components';
export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;
`;
export const ButtonText = styled.div`
  color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  height: 21px;
  letter-spacing: 0em;
  line-height: normal;
`;
export const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;
