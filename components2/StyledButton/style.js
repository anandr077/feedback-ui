import styled from 'styled-components';

export const ButtonText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: rgba(114, 0, 224, 1);
`;
export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;
export const ButtonIconColored = styled.img`
  width: 16px;
  height: 16px;
  display:none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 32px;
  gap: 4px;
  border: 1px solid rgba(114, 0, 224, 1);
  text-decoration: none;
  cursor: pointer;
  :hover {
    background:  rgba(241, 230, 252, 1);
    ${ButtonText} {
      color: var(--light-mode-purple);
    }
    ${ButtonIcon} {
      display: none;
    }
    ${ButtonIconColored} {
      display: flex;
    }
  }
`;
