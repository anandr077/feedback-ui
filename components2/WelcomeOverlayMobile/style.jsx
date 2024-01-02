import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Content = styled.div`
  text-align: center;
  padding: 30px;
`;

export const Headline = styled.h1`
  color: #9b4be8;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-xxxl);
  line-height: 40px;
  margin-bottom: 16px;
`;

export const Para = styled.p`
  color: #757575;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  line-height: 28px;
`;
