import styled from 'styled-components';

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
export const ButtonIconWhite = styled.img`
  width: 20px;
  height: 20px;
  display: none;
`;

export const ButtonContainer = styled.div`
  padding: 8px 16px 8px 16px;
  border-radius: 24px;
  border: 1px solid #7200e0;
  display: flex;
  gap: 8px;
  min-width: 115px;
  margin-right: -2px;
  :hover {
    background-color: var(--light-mode-purple);
    ${ButtonText} {
      color: var(--white);
    }
    ${ButtonIcon} {
      display: none;
    }
    ${ButtonIconWhite} {
      display: flex;
    }
  }
`;
