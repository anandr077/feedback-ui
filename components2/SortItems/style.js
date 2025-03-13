import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SortButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px;
  border: 1px solid #7b7382;
  background-color: ${(props) => props.$isClicked ? '#51009F' : ''};
  cursor: pointer;
`;

export const SortButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.$isClicked ? '#FFFFFF' : '#7b7382'};
  text-align: center;
`;

export const SortImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SortText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #918b97;
`;