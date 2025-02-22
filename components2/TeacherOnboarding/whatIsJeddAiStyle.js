import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 60px;
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
  height: 365px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none; 
  
  &::-webkit-scrollbar {
    display: none;
  }
`;