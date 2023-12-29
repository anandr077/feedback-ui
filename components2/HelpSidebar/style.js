import styled from 'styled-components';

export const HelpSidebarContainer = styled.div`
  width: 420px;
  height: 100%;
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

export const HelpSidebarSmallContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
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

export const MoreOption = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-xl);
  line-height: 26px;
  color: var(--light-mode-purple);
  letter-spacing: -2.5%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  padding: 20px 0;
  border-top: 1px solid #f1e6fc;
  cursor: pointer;
`;

export const MoreOptionIcon = styled.img`
  width: 24px;
  height: 24px;
`;
