import styled from "styled-components";

export const FocusAreasLabelContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 48px;
  padding-top: 20px;
  border-top: 1px solid #f1e6fc;
`;

const OptionContainer = styled.button`
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