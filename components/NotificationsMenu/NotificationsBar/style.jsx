import styled from 'styled-components';

export const NavbarDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  z-index: 10000;
`;

export const Heading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 31.2px;
  text-align: left;
  color: #1e252a;
`;

export const HeadingImage = styled.img`
  width: 32px;
  height: 32px;
  gap: 0px;
  opacity: 0px;
`;

export const NotificationHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  position: relative;
  img {
    height: 32px;
    width: 32px;
  }
  h1 {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 600;
    font-size: var(--font-size-xxl);
    color: var(--text);
    line-height: 31px;
  }
`;

export const Frame1409 = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;
export const MaskGroup = styled.img`
  position: absolute;
  top: -15px;
  right: -15px;
  height: 35px;
  width: 35px;
`;

export const Frame15 = styled.div`
  display: flex;
  width: 380px;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  z-index: 100;
  height: 100%;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
export const Frame16 = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-self: stretch;
  z-index: 10;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const EmptyBox = styled.div`
  margin: 50px auto;
  font-family: 'IBM Plex Sans';
  font-size: 20px;
  color: rgba(48, 45, 45, 0.5);
`;

export const CloseNotification = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

export const NotificationBody = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
