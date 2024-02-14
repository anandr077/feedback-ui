import styled from 'styled-components';

export const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 1000000000;
`;

export const PopupContainer = styled.div`
  width: 438px;
  height: 168px;
  border-radius: 12px;
  padding: 40px;
  background-color: var(--white);
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.div`
  color: var(--text);
  font-weight: 500;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  line-height: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`
