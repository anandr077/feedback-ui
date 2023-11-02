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
  z-index: 1;
`;

export const NotificationHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Frame1409 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;
export const MaskGroup = styled.img`
  position: sticky;
  top: 0;
  right: 0;
  height: 48px;
  width: 48px;
`;

export const Frame15 = styled.div`
  display: flex;
  width: 320px;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
  align-self: stretch;
  z-index: 10;
  height: 100%;
  flex-direction: column;
  overflow: visible;
`;
export const Frame16 = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-self: stretch;
  z-index: 10;
  gap: 10px;
  flex-direction: column;
`;

export const EmptyBox = styled.div`
  margin: 50px auto;
  font-family: 'IBM Plex Sans';
  font-size: 20px;
  color: rgba(48, 45, 45, 0.5);
`
