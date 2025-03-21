import styled from 'styled-components';

export const HelpSidebarContainer = styled.div`
  width: 380px;
  height: 100%;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0px 4px 20px 0px rgba(48, 27, 114, 4%);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const HelpSidebarSmallContainer = styled.div`
  position: relative;
  width: 380px;
  height: 100vh;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0px 4px 20px 0px rgba(48, 27, 114, 4%);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const CloseHelpBar = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: var(--font-size-xxl);
  font-family: var(--font-family-ibm_plex_sans);
  color: var(--text);
`;

export const IconImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
  border: 1px solid var(--text);
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 92%;
  height: 42px;
  padding: 9px 12px;
  font-family: var(--font-family-ibm_plex_sans);
  line-height: 24px;
  font-size: var(--font-size-l);
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const HelpOptionsContainer = styled.div`
  height: calc(100vh - 100px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Onboarding = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(114, 0, 224, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 20px 0;
  cursor: pointer;

  :hover{
    text-decoration: underline;
  }
`;

export const OnboardingIcon = styled.img`
  width: 25px;
`;

export const CloseImage = styled.img`
  cursor: pointer;
`;

