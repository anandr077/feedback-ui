import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
} from '@mui/material';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  position: relative;
  
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;
  position: relative;
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
export const EmptyBankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const EmptyBankIconCont = styled.img`
  width: 120px;
  height: 120px;
`;
export const EmptyBankHeading = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 31.2px;
  text-align: center;
  color: #000000;
`;
export const EmptyBankSubHeading = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  text-align: center;
  color: #7b7382;
`;

export const EmptyBankContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 8px 16px 8px 16px;
  gap: 4px;
  border-radius: 30px;
  border: 1px;
  opacity: 0px;
  background: #7200e0;
  border: 1px solid #7200e0;
  cursor: pointer;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 23px;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;
export const TabsPlusContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 2px;
  border-radius: 4px;
  cursor: pointer;
`;

export const TabsPlus = styled.img`
  width: 24px;
  height: 24px;
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

export const FeedbackBankHeading = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
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

export const StyledTab = styled(Tab)`
  padding: 20px 16px !important;
  gap: 3px;
  border-radius: 4px !important;
  text-transform: none !important;
  .Mui-selected {
    color: #7200e0 !important;
  }
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

export const MarkingCriteriaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90vh;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
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
  height: 410px;
  border-radius: 12px;
  background: #ffffff;
`;

export const PopupTitleContainer = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 0 0 1px 0;
  background: #ffffff;
  border-bottom: 1px solid #c9c6cc80;
  border-radius: 8px 8px 0px 0px;
`;
export const PopupTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;

export const PopupTitleImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PopupDialogContentBox = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  padding: 0px !important;
  border-radius: 0px 0px 8px 8px;
`;
export const PopupDialogContentBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  border-right: 1px solid #c9c6cc80;
`;
export const PopupDialogContentBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CardContainer = styled.div`
  padding: 16px;
  border: 0 0 1px 0;
  border-bottom: 1px solid #c9c6cc80;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImportFileLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-align: center;
`;

export const ImportFile = styled.input`
  display: none; 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const CardImgCont = styled.div`
  padding: 8px;
  gap: 2px;
  border-radius: 4px;
  border: 1;
  border: 1px solid #c9c6cc;
`;
export const CardImg = styled.img`
  width: 30px;
  height: 30px;
  transform: ${props => props.rotate ? 'rotate(180deg)' : '0'};
`;
export const CardImgDoc = styled.img`
  width: 46px;
  height: 46px;
`;
export const CardTitle = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b464f;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  border-bottom: 1px solid #c9c6cc80;
`;
export const PreviewIconCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const PrevieImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const Previewpara = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;
export const BankCommentTitle = styled.p`
  padding: 10px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: #f2f1f3;
  color: #4b464f;
`;

export const Commentsuggestion = styled.p`
  padding: 10px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: #ffffff;
  color: #4b464f;
  border-bottom: 1px solid #c9c6cc80;
`;

export const ButtonConatiner = styled(DialogActions)`
padding: 10px;
gap: 10px;
border: 1px 0 0 0;
border-top: 1px solid #C9C6CC80;
background: #FFFFFF;
border-radius: 0px 0px 8px 8px;
`;

export const CreateButton = styled.div`
  padding: 8px 12px;
  border-radius: 32px;
  background: #7200e0;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
export const HeadingAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  border-bottom: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
`;
