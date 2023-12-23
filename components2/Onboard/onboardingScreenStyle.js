import styled from 'styled-components';

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-chalk);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
