import styled from "styled-components";

export const ZoomContianer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: #000000;
`;

export const ZoomInput = styled.input`
  -webkit-appearance: none;
  -moz-apperance: none;
  appearance: none;
  width: 183px;
  height: 2px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;

  &::-webkit-slider-runnable-track {
    background-color: #8f8f8f;
    border-radius: 5px;
    height: 1px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--light-mode-purple);
    cursor: pointer;
    margin-top: -10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;