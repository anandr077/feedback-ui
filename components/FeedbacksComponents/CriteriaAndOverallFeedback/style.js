import { DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab2' ? '48px' : '-460px')};
  top: 0;
  bottom: 0;
  width: 460px;
  @media (min-width: 766px) and (max-width: 1024px) {
    right: ${(props) => (props.openRightPanel === 'tab2' ? '48px' : '-290px')};
    width: 290px;
  }
  height: calc(100vh - 48px);
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
  gap: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CloseBtn = styled.img`
  position: absolute;
  left: -12px;
  top: 28px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;

export const HideArrow = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
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

export const HeaderRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
  padding: 16px 16px;
  display: none;
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
  margin: 0 16px;
`;
export const MarkingCriteriaMainHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 16px 0px 16px;
`;

export const MarkingCriteriaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  display: none;
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
  background-color: #ffffff;
  border-radius: 6px;
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
export const StrengthsTargetsGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 99%;
  background: #ffffff;
`;
export const StrengthTargetsTitleContainer = styled.div`
  display: flex;
  width: 25% !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: var(--color-neutral-alpha-90, #c9c6cc80);
  padding: 8px;
  border-radius: 4px;
  gap: 12px;
`;
export const MarkRubricTitle = styled.p`
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 500;
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
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #ffffff;
  gap: 12px;
`;

export const StrengthsAndTargetsContainer = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  gap: 8px;
`;
export const StrengthsAndTargetsHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  gap: 8px;
`;
export const StrengthsAndTargetsHeadingContainerDummy = styled.div`
  display: flex;
  width: 25%;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const StrengthsAndTargetsContainerHeading = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  gap: 8px;
`;

export const StrengthsAndTargetsContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StrengthsAndTargetsPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
  border: ${(props) =>
    props.bgColor ? '1px solid #C596F2' : '1px solid #c9c6cc80'};
  background: ${(props) => (props.bgColor ? '#FBF7FE' : '#ffffff')};
  align-items: flex-start;
`;
export const Strength = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: ${(props) => (props.bgColor ? '500' : '400')};
  line-height: 24px;
  text-align: left;
  color: ${(props) => (props.bgColor ? '#50009D' : '#56515B')};
`;

export const TargetContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  color: #56515b;
  border: ${(props) =>
    props.bgColor ? '1px solid #C596F2' : '1px solid #c9c6cc80'};
  background: ${(props) => (props.bgColor ? '#FBF7FE' : '#ffffff')};
  align-items: flex-start;
`;
export const Target = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: ${(props) => (props.bgColor ? '500' : '400')};
  line-height: 24px;
  text-align: left;
  color: ${(props) => (props.bgColor ? '#50009D' : '#56515B')};
`;

export const TargetHeadingContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  align-items: flex-start;
  background: #c9c6cc;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const TargetHeading = styled.p`
  color: #4b464f;
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
  align-items: center !important;
  padding: 12px 8px !important;
  border: 0 0 1px 0;
  border-radius: 6px 6px 0px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-neutral-alpha-80, #f2f1f380);
`;
export const PopupTitle = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: var(--color-neutral-500, #4b464f);
`;
export const PopupSubTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: var(--color-neutral-300, #7b7382);
`;

export const PopupTitleImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PopupDialogContentBox = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  padding: 12px 12px 12px 12px !important;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 12px 12px 12px;
`;
export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 32px;
  background: var(--color-purple-300, #7200e0);
  cursor: pointer;
`;
export const SaveButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: var(--color-neutral-white, #ffffff);
`;

export const MarkingCriteriaPreview = styled.div`
  padding: 8px;
  gap: 8px;
  opacity: 0px;
  box-shadow: 0px -2px 4px 0px #6f6f6f40 inset;
  background: var(--color-neutral-80, #f2f1f3);
`;

export const MarkingCriteriaCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid var(--color-neutral-alpha-90, #C9C6CC80)
  opacity: 0px;
`;

export const MarkingCriteriaCardHeading = styled.div`
  padding: 8px;
  opacity: 0px;
  background: var(--color-purple-80, #f1e6fc);
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const MarkingCriteriaCardHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: var(--color-purple-300, #7200e0);
`;
export const MarkingCriteriaCardBody = styled.div`
  padding: 8px;
  opacity: 0px;
  background: var(--color-neutral-white, #ffffff);
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const MarkingCriteriaCardBodyText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: var(--color-neutral-500, #4b464f);
`;

export const RubricCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 8px;
  border: 1px;
  opacity: 0px;
  background: var(--color-neutral-white, #ffffff);
  border: 1px solid var(--color-neutral-90, #c9c6cc);
`;
export const RubricCardHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: var(--color-neutral-500, #4b464f);
`;

export const RubricCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 4px;
  border: 1px;
  opacity: 0px;
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const RubricCardBodyHeading = styled.div`
  padding: 8px;
  gap: 12px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-warning-yellow-80, #faf5e6);
  opacity: 0px;
`;
export const RubricCardBodyHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: var(--color-warning-yellow-400, #916f01);
`;

export const RubricCardBodyTextPart = styled.div`
  background: var(--color-neutral-white, #ffffff);
  padding: 8px;
  opacity: 0px;
`;
export const RubricCardBodyTextPartText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: var(--color-neutral-500, #4b464f);
`;
