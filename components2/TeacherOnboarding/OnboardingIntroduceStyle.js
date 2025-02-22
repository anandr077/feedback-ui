import styled from 'styled-components';

export const IntroMainContainer = styled.div`
  position: relative;
  background-color: rgb(241, 230, 252);
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 800;
  font-size: var(--font-size-xxl);
  line-height: 28px;
  color: rgba(0, 0, 0, 1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
`;

export const AccordionSection = styled.div`
  margin-bottom: 20px;
  height: 370px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const IntroBodySection = styled.div`
  padding: 20px;
`;

export const AccordionTitle = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-l);
  line-height: 21px;
  color: rgba(30, 37, 42, 1);
`;
