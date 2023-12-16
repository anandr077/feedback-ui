import styled from "styled-components";

export const Screen = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: 10;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const DialogueBox = styled.div`
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  background-color: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Heading = styled.h2`
  text-align: center;
  color: var(--text);
  font-size: var(--font-size-xxl);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  font-style: normal;
`;

export const DropdownContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  flex: 1;
`

export const DropdownBox = styled.div`
  flex: 1.5;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  color: var(--white);
  background-color: var(--light-mode-purple);
  border: none;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;

`