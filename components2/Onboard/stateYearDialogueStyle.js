import styled from 'styled-components';

export const DialogueBox = styled.div`
  border-radius: 5px;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  padding: 20px 24px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7eeff;
  border-radius: 10px 10px 0 0;
`;

export const DropdownContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const DropdownItem = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 18px;
  color: var(--text);
  margin-bottom: 10px;
`;

export const DropdownBox = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  display: block;
  border-radius: 30px;
  margin: 16px auto;
  background-color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  border: none;
  color: var(--white);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: calc(100% - 48px);
  height: 40px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--royal-purple);
  }
`;

export const TermsCondition = styled.div`
  padding: 10px 24px;
`;

export const WarningContainer = styled.div`
  margin-bottom: 16px;
  h3 {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: var(--font-size-xl);
    line-height: 26px;
    color: var(--light-mode-purple);
    margin-bottom: 10px;
  }

  p {
    color: var(--text);
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    span {
      font-weight: 500;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-left: 0px !important;
`;

export const TermsText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: var(--text);

  span {
    color: var(--light-mode-purple);
  }
`;

export const HeaderText = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-xl);
`;

export const CloseImg = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
