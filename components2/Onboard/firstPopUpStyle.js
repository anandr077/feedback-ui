import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-xl);
`;

export const Name = styled.span`
  color: var(--royal-purple);
`;

export const SkipBtn = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  color: #959595;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover{
    color: #5B5959;
  }
`;

export const ContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  background-color: rgba(48, 27, 114, 0.4);
  margin: 20px 0;
`;

export const PlayBtn = styled.img`
  height: 55px;
  width: 55px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Content = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 900;
  font-size: var(--font-size-xxxxl);
  color: var(--light-mode-purple);
  padding: 30px;
`;