import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 60px;
`;
export const HowJeddAiWorksVideo = styled.iframe`
  width: 401px;
  height: 263px;
`;

export const FAQSection = styled.div``;

export const FAQHeading = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  font-size: var(--font-size-m);
  line-height: 16px;
  color: rgba(45, 43, 46, 1) '';
  margin-bottom: 5px;
`;

export const FAQContent = styled.div`
  height: 364px;
  overflow-y: scroll;

  -ms-overflow-style: auto;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1px;
  }
`;
