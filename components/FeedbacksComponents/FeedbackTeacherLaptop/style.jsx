import styled from 'styled-components';
import {
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
  IbmplexsansNormalShark16px,
} from '../../../styledMixins';
import { DialogActions, DialogContent } from '@mui/material';

export const AwaitFeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  align-self: stretch;
  gap: 25px;
  line-height: normal;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  align-self: stretch;
  gap: 25px;
  line-height: normal;

  @media screen and (max-width: 1024px) and (min-width: 766px) {
    width: 100%;
  }
  @media screen and (max-width: 765px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const Ellipse141 = styled.div`
  position: relative;
  min-width: 15px;
  height: 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;
export const Label = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  display: flex;
  align-items: center;
  color: var(--text, #1e252a);
  font-style: normal;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
`;

export const OptionContainer = styled.button`
  min-width: 112px;
  min-height: 33px;
  border-radius: 22px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: start;
  gap: 8px;
  background-color: white;
  cursor: pointer;

  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: #7b7382;

  &:hover {
    background-color: rgba(201, 198, 204, 0.5);
  }
`;

export const TitleWrapper = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  width: 30%;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 3px 12px 0px rgba(48, 27, 114, 0.06);
  padding: 16px 30px;
  border-radius: 8px;
  min-height: 66px;
`;

export const EditTextBox = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  letter-spacing: 0px;
  line-height: 20px;
  color: #7a7a7a;
  width: fit-content;
`;

export const FeedbackBtnContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 15px; */
  width: 30%;
`;

export const StatusText = styled.div`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  letter-spacing: -0.025em;

  color: #979797;
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Screen = styled.div`
  position: fixed;
  width: 200vw;
  height: 200vh;
  top: 0;
  left: 0;
  z-index: 0;
`;
export const Screen2 = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1;
`;
export const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

export const Frame131612 = styled.div`
  max-width: 300px;
  display: flex;
`;
export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  background: #faf7fc;
  position: relative;
`;

export const Main = styled.div`
  width: ${(props) => (props.open ? props.drawerWidth + 'px' : '0')};
  margin-left: ${(props) => (props.open ? '35px' : '0')};
  transform: translateX(
    ${(props) => (props.open ? '0' : `-${props.drawerWidth}px`)}
  );
  transition: transform 0.3s ease-in;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #f0f0f0;
`;

export const Main2 = styled.div`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #f0f0f0;
`;

export const Frame1388 = styled.div`
  flex: 1;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  align-self: stretch;
  transition: transform 0.3s ease-in;
  height: ${(props) => (props.mobileView ? '0px' : 'auto')};
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  background: #faf7fc;

  /* @media (min-width: 1600px) {
    max-width: 1300px;
  }  */
`;

export const CountZoomContainer = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  display: ${(props) => (props.mobileView ? 'none' : '')};
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: #000000;
  transition: transform 0.3s ease-in, width 0.3s ease-in;
  background-color: var(--white);
  padding: 12px 30px;
  width: calc(100% - 80px);
  box-shadow: 0 -3px 12px 0 rgba(48, 27, 114, 0.06);
  z-index: 2;
`;

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

export const DrawerArrowContainer = styled.div`
  width: ${(props) => (props.isOpen ? '300' : '200')};
  /* width: 300px;  */
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.3s;
  background-color: #f0f0f0;
  position: fixed;
  align-self: stretch;
  top: 70px;
  overflow-y: scroll;
`;

export const DrawerArrow = styled.div`
  cursor: pointer;
  padding: 6px 2px;
  height: 100vh;
  position: fixed;
  transform: ${(props) =>
    props.open ? `translateX(${props.drawerWidth - 10}px)` : '10px'};
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  z-index: 5;
`;

export const ArrowImg = styled.img`
  width: 8px;
  height: 8px;
  transform: ${(props) => (!props.open ? 'rotate(180deg)' : '0')};
  transition: transform 0.3s ease-in;
`;

export const ImgContainer = styled.div`
  padding: 5px 1px;
  width: 24px;
  height: 24px;
  background-color: white;
  border: 1px solid rgba(201, 198, 204, 1);
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const Frame1387 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;
export const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;
export const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: '100%';
  overflow-x: hidden;
`;

export const Frame1371 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 32px;
  z-index: 2;
  background-color: #faf7fc;
  width: 100%;

  @media screen and (max-width: 1024px) and (min-width: 766px) {
    gap: 40px;
  }
  @media screen and (max-width: 765px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const AssignmentTitle = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-weight: 400;
  line-height: 26px;
  font-style: normal;
  position: relative;
  color: var(--text);
  flex: 1;
  margin-top: -1px;
`;

export const QuestionEditInput = styled.textarea`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  color: var(--text);
  font-weight: 400;
  line-height: 26px;
  font-style: normal;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
`;

export const Crown = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export const FeedbackBody = styled.div`
  position: relative;
  width: 100%;
`;

export const Frame1368 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  position: sticky;
  top: 75px;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  @media (min-width: 766px) and (max-width: 1024px) {
    width: 92%;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
export const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-height: 650px;
  width: calc(100vw - 48px);
`;
export const Frame1367 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;

  @media (min-width: 1441px) {
    left: 50%;
    transform: ${(props) =>
      props.moveRight
        ? 'translateX(-545px)'
        : props.moveToLeft
        ? 'translateX(calc(-50% - 350px))'
        : 'translateX(calc(-50% - 210px))'};
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    left: 29%;
    transform: ${(props) =>
      props.moveRight
        ? 'translateX(-360px)'
        : props.moveToLeft
        ? 'translateX(calc(-29% - 160px))'
        : 'translateX(calc(-29% - 120px))'};
  }

  @media (min-width: 766px) and (max-width: 1024px) {
    width: 85%;
  }
  transition: transform 0.3s ease-in;
  height: 100%;
  width: 650px;
  margin: 20px;
  border-radius: 10px;
`;

export const AddCommentFocusAreaDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: ${(props) =>
    props.moveToLeft
      ? 'translateX(calc(-50% + 170px))'
      : 'translateX(calc(-50% + 310px))'};

  transition: transform 0.3s ease;
  @media (min-width: 766px) and (max-width: 1024px) {
    left: 90%;
    transform: none;
  }
  width: 314px;
  z-index: -10;
`;

export const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  gap: 16px;
  height: 100%;
`;

export const MarkingCriteriaAndCommentBankContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const QuestionContainer = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid rgba(178, 174, 183, 0.5);
  box-shadow: 0px 4px 9px 0px rgba(133, 133, 133, 0.25);
  width: 100%;
`;

export const QuestionTitleBox = styled.div`
  background-color: rgba(40, 31, 69, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  line-height: 24px;
  color: rgba(251, 247, 254, 1);
  padding: 8px 20px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: transparent;
    border: none;
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 600;
    line-height: 24px;
    color: rgba(251, 247, 254, 1);
    cursor: pointer;
  }
`;

export const Line = styled.img`
  width: 100%;
  margin-top: 50px;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(201, 198, 204, 0.5);
  box-shadow: 0px 4px 9px 0px rgba(133, 133, 133, 0.25);
  border-radius: 8px;
`;

export const QuestionText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  line-height: 24px;
  color: #181718;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  display: ${(props) => (props.slide ? 'auto' : 'none')};
  padding: 20px 80px;
  overflow: hidden;
`;

export const QuestionInputBox = styled.textarea`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  color: rgba(24, 23, 24, 1);
  font-weight: 400;
  line-height: 24px;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  padding: 20px 80px;
  display: ${(props) => (props.slide ? 'auto' : 'none')};
  overflow: hidden;
`;

export const QuillContainer = styled.p`
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
`;

export const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px;

  position: sticky;
  top: 0px;
  //background-color: var(--white);
  border-radius: 16px;
  height: calc(100vh - 130px);
  overflow-y: scroll;
  //box-shadow: 0px 4px 22px #2f1a720a;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Frame1322 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Frame1329 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;
export const Frame1406 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;
export const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  height: 46px;
`;
export const TypeHere = styled.div`
  ${feedbacksIbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
`;

export const Frame1383 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
  padding: 20px;
`;
export const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
  margin: 10px 0 5px;
`;
export const Share = styled.div`
  color: var(--black);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 20px;
`;

export const Frame1328 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectFeedbackMethod = styled.div`
  display: flex;
  width: fit-content;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  position: absolute;
  white-space: nowrap;
  top: 42px;
  right: 0px;
`;

export const SelectFeedbackMethodType = styled.div`
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 2px;
  padding: 10px 12px;
  border-radius: 10px;
  text-align: left;
  ${IbmplexsansNormalShark16px};

  &:hover {
    background-color: var(--blue-chalk);
  }
`;

export const Icon24 = styled.img``;
export const MessageIcon24 = <Icon24 src="/img/message24.svg"></Icon24>;

export const ButtonWithImageBeforeText = styled.button`
  background-color: var(--light-mode-purple);
  color: var(--white);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid var(--light-mode-purple);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RequestFeedbackStatusFrame = styled.div`
  cursor: pointer;
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: white;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  background-color: var(--white) !important;

  gap: 5px;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0px 3px 12px 0px rgba(48, 27, 114, 0.06);
  padding: 20px 30px;
  border-radius: 8px;
`;

export const RequestFeedbackFrame = styled.div`
  cursor: pointer;
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: white;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 12px;
  width: 100%;
  background-color: var(--white) !important;
`;

export const RequestFeedbackButton = styled.div`
  cursor: pointer;
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  color: white;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 12px;
  width: 100%;
  background-color: var(--light-mode-purple) !important;
  height: 66px;
`;
export const RequestFeedbackDropdown = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 20px;
`;

export const DropdownButtonsGroup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: 0px 4px 8px #2f1a720a;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid #2f1a720a;
  padding: 10px;
`;

export const DropdownButton = styled.button`
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 2px;
  padding: 10px 12px;
  border-radius: 10px;
  text-align: left;
  ${IbmplexsansNormalShark16px};

  &:hover {
    background-color: var(--blue-chalk);
  }
`;

export const ExemplarComponent = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
`;

export const SmartAnnotationsComponent = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ShortcutList = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 12px;
  gap: 30px;
  padding: 0px 0px 30px 0px;
`;
export const Frame1334 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
  gap: 10px;
  background: #f7eeff;
`;
export const Frame1334Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Frame1577 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 85%;
`;
export const Frame1577heading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
`;

export const Frame1577Img = styled.img`
  width: 24px;
  height: 24px;
  padding: 2px 2px 2px 2px;
`;

export const Frame5053 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  gap: 20px;
`;
export const Frame5053Card1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  border: 1px;
  gap: 16px;
  border: 1px solid #f1e7ff;
  cursor: pointer;
  background-color: #f5effe;
  :hover {
    background: linear-gradient(0deg, #f1e7ff, #f1e7ff),
      linear-gradient(0deg, #f5effe, #f5effe);
    border: 1px solid #7200e0;
  }
`;

export const Frame5053Card1Img = styled.img`
  width: 36px;
  height: 36px;
`;
export const Card1ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Card1Img = styled.img`
  width: 21px;
  height: 24px;
  padding: 3px 6px 3px 6px;
  gap: 10px;
`;
export const Frame5053Card1Para = styled.div`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Frame5053Card2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  border: 1px;
  gap: 16px;
  border: 1px solid #f1e7ff;
  cursor: pointer;
  background-color: #f5effe;
  :hover {
    background: linear-gradient(0deg, #f1e7ff, #f1e7ff),
      linear-gradient(0deg, #f5effe, #f5effe);
    border: 1px solid #7200e0;
  }
`;
export const Frame5053Card2Data = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Frame1364 = styled.div`
  padding: 0px 30px 30px 30px;
  gap: 10px;
`;
export const Frame1364Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 16px 12px 16px;
  border-radius: 30px;
  gap: 4px;
  background: #a6a6a6;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #7200e0;
  }
`;
export const Frame1364ButtonText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
`;
export const PoupButtons = styled(DialogActions)`
  gap: 10px;
`;
export const PoupDialogContent = styled(DialogContent)`
  padding: 20px 24px 0px 24px !important;
`;
