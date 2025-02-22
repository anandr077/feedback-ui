import styled from "styled-components";

export const AccordionSection = styled.div`
 margin-top: 5px;
 height: auto;
 overflow-y: scroll;

 -ms-overflow-style: none;
  scrollbar-width: none; 
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AccordionTitle = styled.h3`
  color: rgba(30, 37, 42, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 600;
  line-height: 20px;
`;
