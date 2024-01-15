import styled from "styled-components";

export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   cursor: pointer;
   transition: transform 0.1s ease-in;

   &:hover{
     transform: scale(1.05);
   }
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const Button = styled.div`
  color: #A02C2C;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20.8px;
`;