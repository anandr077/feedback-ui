import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalElectricViolet14px,
} from '../../../styledMixins';
import { Tab, Tabs } from '@mui/material';

export const RedictIcon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
export const UserSettingLinkContainer = styled.div`
  display: flex;
  height: 31px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
`;

export const UserSettingLink = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 14px;
`;

export const UserSettingFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  flex: 1;
  align-self: auto;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const MarkingCriteriaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;

  @media (max-width: 1440px) {
    padding: 0px 120px;
  }
`;

export const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

export const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;

  @media (max-width: 1440px) {
    padding: 0px 120px;
  }
  @media (max-width: 765px) {
    padding: 0px 30px;
  }
`;

export const Frame1372 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 0px 0px 20px 0px;
  border: 0px 0px 1px 0px;
  gap: 12px;
  border-bottom: 1px solid #d6d6d6;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--royal-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: -0.9px;
  @media (max-width: 765px) {
    font-size: 32px;
    letter-spacing: -0.8px;
  }
`;

export const Frame13221 = styled.div`
  display: flex;
  max-height: 860px;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  align-self: stretch;

  @media (max-width: 765px) {
    flex-direction: column;
  }
`;

export const Frame1302 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--white);
`;

export const Title1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

export const MarkingCriteria = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
export const HeadingLine = styled.p`
  color: #333333;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const TabDots = styled.img`
  display: none;
  width: 3px;
`;
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;

export const TabContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const TabTitle = styled.div`
  font-family: IBM Plex Sans !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TabsPlus = styled.img`
  width: 24px;
  height: 24px;
`;
export const TabsPlusContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 2px;
  border-radius: 4px;
  background: #7200e0;
  cursor: pointer;
`;

export const MoreOptionsContainer = styled.div`
  position: relative;
`;
export const MoreOptions = styled.div`
  position: absolute;
  z-index: 1;
  left: 15px;
  width: 180px;
  padding: 8px;
  border-radius: 6px;
  border: 1px;
  gap: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px #73737340;
`;

export const MoreOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  gap: 6px;
  cursor: pointer;
  position: relative;
`;
export const MoreOptionImage = styled.img`
  width: 23px;
  height: 23px;
`;
export const MoreOptionTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b464f;
`;
export const SystemOptions = styled.div`
  width: 135px;
  height: 200px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  left: 200px;
  top: 75px;
  border-radius: 6px;
  border: 1px;
  gap: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px #73737340;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;
export const SystemOption = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  gap: 6px;
`;
export const SystemOptionImage = styled.img`
  width: 23px;
  height: 23px;
`;

export const SystemOptionTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b464f;
  cursor: pointer;
`;

export const ThreeDotsOptions = styled.div`
  position: absolute;
  z-index: 100;
  left: 15px;
  width: 180px;
  padding: 8px;
  border-radius: 6px;
  border: 1px;
  gap: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px #73737340;
`;

export const TabsImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const BankTitleeditTitle = styled.input`
  font-family: IBM Plex Sans !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  border: none !important;
  &:hover,
  &:focus {
    outline: none;
    border-color: initial;
    box-shadow: none;
  }
`;

export const StyledTab = styled(Tab)`
  padding: 8px 10px 8px 10px;
  gap: 3px;
  border-radius: 4px !important;
  text-transform: none !important;
`;
export const StyledTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    //gap: 5px !important;
    // overflow-x: auto;
  }
  .MuiTabScrollButton-root.Mui-disabled {
    opacity: 0.3 !important;
  }
`;

export const FeedbackBankHeading = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
`;

export const TabsPlusText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  text-wrap: nowrap;
`;

export const MainContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: calc(100vw - 90px);
  border-top: 1px solid #73737340;
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 1025px;
  }
  @media (min-width: 766px) and (max-width: 1024px) {
    min-width: 766px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;
  position: relative;
  max-width: 1440px;
`;

export const RightContainer = styled.div`
  width: 100%;
  background: #ffffff;
  // height: 60vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CreateButtonCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  border: 0px 0px 1px 0px;
  opacity: 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  cursor: pointer;
`;

export const PlusIcon = styled.img`
  padding: 8px;
  border-radius: 4px;
  border: 1px;
  opacity: 0px;
  border: 1px solid var(--color-neutral-90, #c9c6cc);
  background: var(--color-neutral-alpha-80, #f2f1f380);
`;

export const PlusText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #4b464f;
`;
