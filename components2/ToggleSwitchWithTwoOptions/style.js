import styled from "styled-components";

export const ToggleContainer = styled.div`
  width: 240px;
  height: 40px;
  position: relative;
  border-radius: 30px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  box-shadow: 0px 2px 4px 0px rgba(115, 115, 115, 0.25) inset;
  background-color: rgba(242, 241, 243, 1);
  transition: background-color 0.2s;
`;

export const ToggleLavel = styled.label``;

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
`;

export const ToggleBtn = styled.div`
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 4px;
  width: 116px;
  height: 32px;
  transition: 0.2s;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1.0199999809265137px 2px 0px rgba(115, 115, 115, 0.25);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: rgba(114, 0, 224, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 24px;

  ${ToggleInput}:checked + & {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  ${ToggleInput}:active + & {
    width: 120px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ToggleSwitchLabels = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 50%;
    height: 100%;
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: var(--font-size-s);
    line-height: 24px;
    color: #918b97;

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;