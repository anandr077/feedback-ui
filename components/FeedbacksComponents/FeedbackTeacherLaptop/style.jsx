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
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  gap: 10px;
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

export const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
  margin-bottom: 50px;
  height: ${(props) => (props.mobileView ? '0px' : 'auto')};
  overflow: hidden;
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
  align-items: center;
  margin: 0 auto;
  gap: 40px;
  padding: 0px;
  position: relative;
  align-self: stretch;
  width: ${({ onMobileView }) => (onMobileView ? '100%' : '90%')};

  position: sticky;
`;
export const Frame1371 = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white-pointer);
  padding: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) and (min-width: 766px) {
    gap: 40px;
  }
  @media screen and (max-width: 765px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;
export const AssignmentTitle = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
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
  width: 70%;
`;
export const Frame1367 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
export const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
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
  z-index: 1;
`;

export const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px;

  position: sticky;
  top: 100px;

  background-color: var(--white);
  border-radius: 16px;
  height: 550px;
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

export const RequestFeedbackFrame = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  border: 1px solid var(--Light-Mode-Purple, #7200e0);
  color: #000;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RequestFeedbackDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
