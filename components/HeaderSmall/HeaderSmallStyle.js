import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: var(--white);
  rbga(255, 255, 255, 0.5);
  align-self: stretch;
  width: 100vw;
  height: 200vh;
  `;

export const Frame1350 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  max-height: 70px;
  align-self: stretch;
  background-color: var(--white);
`;

export const Frame1349 = styled.img`
  position: relative;
  align-self: stretch;
  height: 43.499969482421875px;
  margin-left: -1.75px;
  width: 100%;
  max-width: 170px;
`;

export const Frame5 = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: absolute;
  right: 20px;
`;

export const Frame51 = styled.img`
  position: relative;
  align-self: stretch;
  height: 48px;
  cursor: pointer;
`;
