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

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AssignmentTitle = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(24, 23, 24, 1);
`;

export const SubjectTaskTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

export const STTitle = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(123, 115, 130, 1);
`;

export const STDetails = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(123, 115, 130, 1);
`;

export const ArrowBtn = styled.div`
  cursor: pointer;
  background-color: rgba(242, 241, 243, 1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Select = styled.select`
  width: 250px;
  border: none;
  outline: none;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;

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

export const DocumentSubmitBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const AwaitingFeedbackTextAlert = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  p {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(75, 70, 79, 1);
  }
`;

export const CancelBtn = styled.button`
  background-color: rgba(199, 60, 39, 1);
  color: var(--white);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(199, 60, 39, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
