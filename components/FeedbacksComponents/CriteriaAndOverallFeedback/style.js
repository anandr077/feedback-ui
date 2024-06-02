import { DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab2' ? '48px' : '-287px')};
  top: 0;
  bottom: 0;
  width: 287px;
  height: calc(100% - 25px);
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  width: 100%;
  position: relative;
  height: 53px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background-color: #f2f1f3;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  gap: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CloseBtn = styled.img`
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const HeadingTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  img {
    height: 16px;
    width: 16px;
  }
`;

export const HeadingDropdown = styled.div`
  display: flex;
  gap: 4px;
  img {
    height: 16px;
    width: 16px;
  }
`;

export const Text = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 17px;
  color: #7b7382;
`;

export const RubricContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const RubricInputContainer = styled.div`
  color: rgba(133, 133, 133, 1);
  input {
    width: 53px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(145, 139, 151, 1);
    color: rgba(133, 133, 133, 1);
    outline: none;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`;

export const RubricButton = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  padding: 4px 8px;
  border-radius: 16px;
  border: 1.5px solid var(--color-purple-300, #7200e0);
  background: #ffffff;
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  text-align: right;
  color: var(--color-purple-300, #7200e0);
  cursor: pointer;
`;

export const OverallFeedbackContainer = styled.div`
  padding: 16px;
  margin-bottom: 65px;
`;

export const TextFeedback = styled.textarea`
  height: 104px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 0 2px 2px 0 rgba(115, 115, 115, 0.25);
  border: solid 1px #c9c6cc;
  background-color: #fff;
  resize: none;
  outline: none;
  font-size: var(--font-size-l);
  line-height: 24px;
  font-weight: 400;
  font-family: var(--font-family-ibm_plex_sans);
  ::placeholder {
    color: rgba(145, 139, 151, 1);
  }
`;

export const FeedbackBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(114, 0, 224, 1);
  margin-top: 14px;
  cursor: pointer;
`;
export const MarkingCriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c9c6cc80;
  border-radius: 6px;
`;
export const MarkingCriteriaMainHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const MarkingCriteriaMainHeading = styled.p`
  width: 100%;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #4b464f;
`;
export const MarkingCriteriaHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 8px;
  background-color: #f2f1f3;
`;

export const MarkingCriteriaHeading = styled.p`
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const MarkRubricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #ffffff;
  padding: 8px;
  gap: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MarkRubricContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const MarkRubricTitleContainer = styled.div`
  display: flex;
  width: 20% !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  padding: 8px;
  border-radius: 4px;
`;
export const MarkRubricTitle = styled.p`
  color: #301b72;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const MarkRubricLevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LevelNameContainer = styled.div`
  display: flex;
  background-color: ${(props) => (props.bgColor ? '#F1E6FC' : '#f2f1f3')};
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  width: 20%;
`;
export const LevelName = styled.p`
  display: inline-block;
  width: -webkit-fill-available;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #56515b;
  overflow-wrap: break-word;
`;
export const LevelDescContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  color: #56515b;
  width: 80%;
  border: ${(props) =>
    props.bgColor ? '1px solid  #C596F2' : '1px solid  #c9c6cc80'};
`;
export const LevelDesc = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #56515b;
`;

export const MarkStrengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #ffffff;
  gap: 4px;
`;

export const StrengthsAndTargetsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 4px;
`;
export const StrengthsAndTargetsContainerHeading = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;

export const StrengthsAndTargetsContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StrengthsAndTargetsPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const StrengthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 4px;
`;
export const TargetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 4px;
`;
export const StrengthContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  padding: 8px;
  border-radius: 4px;
  color: #56515b;
  background-color: ${(props) => (props.bgColor ? '#F1E6FC' : '#ffffff')};
  align-items: flex-start;
`;
export const Strength = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #56515b;
`;

export const TargetContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  color: #56515b;
  background-color: ${(props) => (props.bgColor ? '#F1E6FC' : '#ffffff')};
  align-items: flex-start;
`;
export const Target = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #56515b;
`;

export const TargetHeadingContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding: 8px;
  border-radius: 4px;
`;
export const TargetHeading = styled.p`
  color: #1e252a;
  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000000000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 885px;
  max-height: 500px;
  border-radius: 6px;
  background: #ffffff;
`;

export const PopupTitleContainer = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  border: 0 0 1px 0;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-neutral-alpha-80, #f2f1f380);
`;
export const PopupTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: var(--color-neutral-500, #4b464f);
`;

export const PopupTitleImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PopupDialogContentBox = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  padding: 12px 12px 22px 12px !important;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
