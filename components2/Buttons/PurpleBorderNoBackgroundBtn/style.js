
import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: auto;
  height: 40px;
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  border: solid 1px var(--light-mode-purple);
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(114, 0, 224, 1);
  white-space: nowrap;
  cursor: pointer;

  :hover {
    background-color: rgba(241, 230, 252, 1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;