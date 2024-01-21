import styled from 'styled-components';
import {
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
  IbmplexsansNormalShark16px,
} from '../../../styledMixins';

export const AwaitFeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
export const FocusAreasLabelContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 48px;
  padding-top: 20px;
  border-top: 1px solid #f1e6fc;
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
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  // width: 30%;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 3px 12px 0px rgba(48, 27, 114, 0.06);
  padding: 20px 30px;
  border-radius: 8px;
`;

export const EditTextBox = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
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
  background: var(--white-pointer);
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
  background-color: #f0f0f0; // Example background color
`;

export const Main2 = styled.div`
  width: 300px; // Adjust width as needed
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #f0f0f0; // Example background color
`;

export const Frame1388 = styled.div`
  flex: 1;
  width: 100vw;
  /* margin-left: ${(props) =>
    props.open ? props.drawerWidth + 100 + 'px' : '0'}; */
  position: relative;
  /* left: 50%; */
  /* width: ${(props) => (props.open ? props.drawerWidth + 'px' : '0')}; */
  /* margin-left: ${(props) => (props.open ? '35px' : '0')}; */
  /* transform: translateX(
    ${(props) => (props.open ? `315px` : '0px')}
  ),
  transform: scale(
    ${(props) => (props.open ? `0.75,1` : '1')}
  ); */
  transform: ${(props) =>
    props.open ? 'translateX(170px)' : 'translateX(0px)'};
  /* transform: ${(props) =>
    props.open
      ? `translateX(calc(-50% + ${props.drawerWidth}px))`
      : 'translateX(-50%)'}; */
  /* margin-left: 500px; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  /* position: relative; */
  align-self: stretch;
  margin-bottom: 50px;
  transition: transform 0.3s ease-in;
  height: ${(props) => (props.mobileView ? '0px' : 'auto')};
  max-width: ${(props) =>
    props.open ? '1100px' : '1300px'};
  /* height: ${(props) => (props.mobileView ? '0px' : 'auto')}; */
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  background: var(--white-pointer);

  @media (min-width: 1600px) {
    max-width: 1300px;
  }
`;

export const DrawerArrowContainer = styled.div`
  width: ${(props) => (props.isOpen ? '300' : '200')};
  /* width: 300px;  */
  height: 100vh;
  overflow-x: hidden; // Hide content when sidebar is collapsed
  transition: width 0.3s; // Smooth transition for collapsing and expanding
  background-color: #f0f0f0; // Example background color
  position: fixed; // Needed for sticky positioning context
  align-self: stretch;
  top: 70px;
  overflow-y: scroll;
`;

export const DrawerArrow = styled.div`
  cursor: pointer;
  //margin-left:0px
  //margin-left: ${(props) => (props.open ? props.drawerWidth + 'px' : '0')};

  /* margin-left: ${(props) => (props.open ? '35px' : '0')}; */
  /* transform: ${(props) =>
    props.open
      ? 'translateX(0)'
      : `translateX(-${props.drawerWidth + 35}px)`}; */
  padding: 6px 2px;
  height: 100vh;
  position: fixed;

  /* position: ${(props) => (props.open ? 'relative' : 'fixed')}; */
  /* top: ${(props) => (!props.open ? '0' : '50%')}; */
  top: '50%';
  transform: ${(props) =>
    props.open ? `translateX(${props.drawerWidth}px)` : '10px'};
  /* transform: ${(props) => (!props.open ? 'none' : 'none')}; */
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  z-index: 4;
`;

export const ArrowImg = styled.img`
  width: 25px;
  height: 25px;
  transform: ${(props) => (!props.open ? 'rotate(180deg)' : '0')};
  transition: transform 0.3s ease-in;
`;

export const ImgContainer = styled.div`
  padding: 5px 1px;
  background-color: white;
  border: 1px solid var(--fog);
  border-radius: 5px;
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
  margin: 0 auto;
  gap: 32px;
  padding: 0px;
  /* gap: 40px;
  padding-top: 30px; */

  position: relative;
  align-self: stretch;
  width: ${({ onMobileView }) => (onMobileView ? '100%' : '90%')};
  max-width: 1321px;
  position: sticky;
`;

export const GoBackBtn = styled.button`
  width: fit-content;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--light-mode-purple);
  background-color: transparent;
  border-radius: 24px;
  border: 1px solid var(--light-mode-purple);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: 0.3s ease-in;
  cursor: pointer;

  .arrowImg {
    width: 17px;
    height: 12px;
  }
  .hoveredImg {
    width: 17px;
    height: 12px;
    display: none;
  }
  &:hover {
    color: var(--white);
    background-color: var(--light-mode-purple);
    .arrowImg {
      display: none;
    }
    .hoveredImg {
      display: block;
    }
  }
`;

export const Frame1371 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 32px;
  z-index: 2;
  padding: 20px 0;
  background-color: var(--white-pointer);
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
  line-height: 20px;
  font-style: normal;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
`;

export const QuestionEditInput = styled.textarea`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  color: var(--text);
  font-weight: 400;
  line-height: 20px;
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

export const Frame1368 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;
export const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 880px;
  min-height: 650px;
`;
export const Frame1367 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  height: 100%;
`;
export const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
  height: 100%;
`;

export const Line = styled.img`
  width: 100%;
  margin-top: 50px;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: var(--white);
  border-radius: 8px;
  padding-bottom: 20px;
  box-shadow: 0px 3px 12px 0px rgba(48, 27, 114, 0.06);
`;

export const QuestionText = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-weight: 500;
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: 26px;
  width: 100%;
  padding: 20px 30px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 3px 12px 0px rgba(48, 27, 114, 0.06);
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
`;

export const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px;

  position: sticky;
  top: 100px;

  background-color: var(--white);
  border-radius: 16px;
  height: 650px;
  overflow-y: scroll;
  box-shadow: 0px 4px 22px #2f1a720a;
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

export const Icon24 = styled.img`
`;
export const MessageIcon24 = <Icon24 src="/img/message24.svg"></Icon24>

export const ButtonWithImageBeforeText = styled.button`
  
  background-color: var(--light-mode-purple);
  color: var(--white);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid var(--light-mode-purple);
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:5px;
`;

export const Label16pxSmall = styled.div`
  font-size:16px;
  font-weight:400;
  font-family: IBM Plex Sans;
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
  width: 100%;
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
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 12px;
  width: 100%;
  background-color: var(--light-mode-purple) !important;
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

export const SubjectSelectionContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: start;
  gap: 30px;
`;

export const SubjectSelectBox = styled.div`
  border-right: 1px solid #d6d6d6;
  padding-right: 30px;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  &:last-child {
    border-right: none;
  }

  label {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: var(--font-size-xl);
    line-height: 26px;
    color: #6f6f6f;
    padding-right: 10px;
  }

  select {
    width: 200px;
    border-radius: 8px;
    border: 1px solid #d6d6d6;
    padding: 8px 12px;
    font-size: var(--font-size-l);
    font-weight: 400;
    line-height: 26px;
    color: var(--text);
    outline: none;
    cursor: pointer;
  }
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
