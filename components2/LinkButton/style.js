import styled from 'styled-components';

export const ButtonText = styled.div`
  color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: ${({ notification }) => (notification ? '13px' : '18px')};
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  line-height: normal;
`;
export const ButtonIcon = styled.img`
  width: ${({ notification }) => (notification ? '12px' : '20px')};
  height: ${({ notification }) => (notification ? '12px' : '20px')};
`;
export const ButtonIconWhite = styled.img`
  width: ${({ notification }) => (notification ? '12px' : '20px')};
  height: ${({ notification }) => (notification ? '12px' : '20px')};
  display: none;
`;

export const ButtonContainer = styled.div`
  padding: ${({ notification }) => (notification ? '4px 8px' : '8px 16px')};
  border-radius: 24px;
  border: 1px solid #7200e0;
  display: flex;
  align-items: center;
  gap: ${({ notification }) => (notification ? '2px' : '8px')};
  min-width: ${({ notification }) => (notification ? '105px' : '115px')};
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
