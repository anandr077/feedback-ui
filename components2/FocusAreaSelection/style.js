import styled from "styled-components";


export const MainContainer = styled.div`
  width: 100%;
  height: 336px !important;
  flex: 1;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContentForFocusArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;


export const OptionContainer = styled.button`
  min-width: 112px;
  min-height: 33px;
  border-radius: 22px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: start;
  gap: 8px;
  background-color: white;
  cursor: pointer;

  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: #7B7382;

  &:hover{
    background-color: rgba(201, 198, 204, 0.5);
  }
`;

export const FocusAreaColorBox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #B2AEB780;
`;