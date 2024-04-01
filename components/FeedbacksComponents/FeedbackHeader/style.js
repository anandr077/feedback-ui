import styled from 'styled-components';

export const FeedbackHeaderContainer = styled.div`
  width: 100%;
  min-height: 56px;
  padding: 8px 20px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReassignBtn = styled.button`
  width: 156px;
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

export const SubmitBtn = styled.button`
  width: 152px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  background-color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  :hover {
    background-color: rgba(80, 0, 157, 1);
  }
`;

export const ToggleContainer = styled.div`
  //width: 240px;
`;

export const ToggleLavel = styled.label`
  cursor: pointer;
  width: 100%;
  height: 50px;
  position: relative;
  background-color: ${({ commentFocusAreaToggle }) => commentFocusAreaToggle ? 'blue' : 'transparent'};
  transition: background-color 0.2s;
`;

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
`;

export const ToggleBtn = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  background: gray;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  ${ToggleInput}:checked + & {
    left: calc(100% - 40px);
    transform: translateX(-100%);
  }

  ${ToggleInput}:active + & {
    width: 60px;
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
    width: 50%;
    height: 100%;

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }
  }
`;
