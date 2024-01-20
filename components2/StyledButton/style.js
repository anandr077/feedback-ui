import styled from 'styled-components';

export const ButtonText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
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
  padding: 8px 16px 8px 16px;
  border-radius: 30px;
  border: 1px;
  gap: 4px;
  background: var(--light-mode-purple);
  border: 1px solid var(--light-mode-purple);
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: var(--white);
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
