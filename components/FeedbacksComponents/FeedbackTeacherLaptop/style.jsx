import styled from 'styled-components';
import {
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansNormalChicago13px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansNormalShark20px,
  feedbacksIbmplexsansNormalStack20px,
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
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
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
  // width: 714px;
  // height: 21px;

  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.025em;

  color: #979797;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const RoundedContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 24.5px;
  border: 1px solid #e6ccff;
  background: #f1e7ff;
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
  width: 200vw;
  height: 200vh;
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
const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;
const OptionsRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;
export const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
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
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  width: 80%;
  left: 10%;
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
`;
export const AssignmentTitle = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;
const Frame1369 = styled.div`
  display: flex;
  width: 581px;
  align-items: center;
  gap: 30px;
  position: relative;
`;
const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
`;
export const Frame1284 = styled.img`
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
  padding: 30px 0px;
  background-color: var(--white);
  border-radius: 26px;
  box-shadow: 0px 4px 22px #2f1a720a;
  // height: 550px;
  // overflow-y: scroll;
`;
export const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;
export const QuestionText = styled.p`
  ${feedbacksIbmplexsansMediumPersianIndigo20px}
  font-size: 20px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
const Group1307 = styled.div`
  position: absolute;
  top: 74px;
  left: 60px;
  width: 793px;
  height: 51px;
`;
const OverlapGroup = styled.div`
  position: relative;
  height: 51px;
`;
const Rectangle546 = styled.div`
  position: absolute;
  width: 620px;
  height: 26px;
  top: 0;
  left: 173px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;
const Rectangle547 = styled.div`
  position: absolute;
  width: 262px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;
const Group1308 = styled.div`
  position: absolute;
  top: 309px;
  left: 60px;
  width: 808px;
  height: 76px;
  mix-blend-mode: multiply;
`;
const OverlapGroup1 = styled.div`
  position: relative;
  height: 76px;
`;
const Rectangle5471 = styled.div`
  position: absolute;
  width: 808px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;
const Rectangle548 = styled.div`
  position: absolute;
  width: 82px;
  height: 26px;
  top: 50px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;
const Line26 = styled.img`
  position: relative;
  align-self: stretch;

  height: 1px;
  object-fit: cover;
`;
export const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
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
  padding: 8px 8px 8px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;
export const TypeHere = styled.div`
  ${feedbacksIbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
`;
const TextInput = styled.input`
  ${feedbacksIbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;
const IconsaxLinearmicrophone2 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
`;
const Line261 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
export const Frame1383 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;
export const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;
export const Share = styled.div`
  ${feedbacksIbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const FeedbackWithCommentsFrame = styled.div`
  position: sticky;
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
const Frame1370 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;
const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;
const X2021JeddleAllRightsReserved = styled.p`
  ${feedbacksIbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
export const SelectFeedbackMethod = styled.div`
  display: flex;
  width: fit-content;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  position: absolute;
  white-space: nowrap;
  top: 40px;
  right: 0px;
`;

export const SelectFeedbackMethodType = styled.div`
  color: var(--Text, #1e252a);
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
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
