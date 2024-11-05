import styled, { keyframes } from 'styled-components';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DndContext } from '@dnd-kit/core';

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TabContextComponent = styled(TabContext)`
  width: 100%;
`;

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const TabPart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const TabNumber = styled.div`
  width: 20px;
  height: 20px;
  gap: 0px;
  opacity: 0px;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const TabNumberText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.52px;
  text-align: center;
  background: ${(props) => (props.active ? '#7200e0' : '#ffffff')};
  color: ${(props) => (props.active ? '#ffffff' : '#918B97')};
  border: ${(props) =>
    props.active ? '1.5px solid #7200e0' : '1.5px solid #918B97'};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${(props) => (props.active ? '#7200e0' : '#918B97')};
`;

export const StyledTabPanel = styled(TabPanel)`
  width: 100% !important;
  padding: 0px !important;
`;

export const NoPreviewText = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-top: 20px;
  color: ${(props) => (props.active ? '#7200e0' : '#918B97')};
`;

export const StyledMainTabList = styled(TabList)`
  width: 100%;
  padding: 0px 20px !important;
  ${({ isDisabled }) =>
    isDisabled &&
    `pointer-events: none; 
     opacity: 0.5; 
    `}
`;
export const StyledTabList = styled(TabList)`
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  .MuiTabs-flexContainer {
    justify-content: center;
    align-items: center;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `pointer-events: none; 
     opacity: 0.5; 
    `}
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const ConvertingText = styled.div`
  width: fit-content;
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
  display: flex;
  align-items: flex-end;
  justify-content: center;
  white-space: nowrap;
  gap: 3px;

    .dots {
      display: flex;
      gap: 5px;
    }

    span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: white;
      animation: ${bounce} 0.5s cubic-bezier(0.22, 0.68, 0.78, 0.94) infinite;
    }

    span:nth-child(1) {
      animation-delay: 0s;
    }

    span:nth-child(2) {
      animation-delay: 100ms;
    }

    span:nth-child(3) {
      animation-delay: 200ms;
    }
`;

export const StyledTab = styled(Tab)`
  text-transform: none !important;
  font-family: IBM Plex Sans !important;
  pointer-events: ${props => props.isDisabled ? 'none' : 'auto'};
  opacity: ${props => props.isDisabled ? 0.4 : 1};
`;

export const UploadFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  background: var(--color-neutral-white, #f1e6fc);
  gap: 12px;
`;

export const UploadFilesText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  color: #918b97;
  width: 280px;
`;

export const OrderPagesMainContainer = styled(DndContext)``;
export const OrderPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const ImageContainer = styled.div`
  width: 155px;
  height: 223px;
  padding: 20px 19px 20px 19px;
  gap: 16px;
  border-radius: 4px;
  border: 1px;
  opacity: 0px;
  background: #ffffff;
  border: 1px solid var(--color-neutral-90, #c9c6cc);
  box-shadow: 0px 2px 2px 0px #00000040;
  position: relative;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.5s ease-in;

  :hover{
    transform: scale(1.1);
  }
`;

export const FileName = styled.p`
  font-family: IBM Plex Sans;
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 19px;
  color: rgba(75, 70, 79, 1);
  position: absolute;
  left: 10px;
  top: 3px;
`;

export const MagnifyingIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 30px;
  top: 5px;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.5s ease-in;

  :hover{
    transform: scale(1.1);
  }
`;

export const FileNumber = styled.p`
  height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2px;
  font-family: IBM Plex Sans;
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 19px;
  color: rgba(75, 70, 79, 1);
` 

export const StyledImage = styled.img`
  width: 117px;
  height: 148px;
`;


export const StyledLoadingBox = styled.div`
  font-family: IBM Plex Sans;
  margin-top: 10px;
  height: 193px;
  width: 155px;
  gap: 16px;
  border-radius: 4px;
  border: 1px;
  opacity: 0px;
  background: #ffffff;
  color: var(--light-mode-purple);
  border: 1px solid var(--color-neutral-90, #c9c6cc);
  box-shadow: 0px 2px 2px 0px #00000040;
  display: grid;
  place-items: center;

  div {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    span {
      display: inline-block;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: var(--light-mode-purple);
      animation: ${bounce} 0.5s cubic-bezier(0.22, 0.68, 0.78, 0.94) infinite;
    }

    span:nth-child(1) {
      animation-delay: 0s;
    }

    span:nth-child(2) {
      animation-delay: 100ms;
    }

    span:nth-child(3) {
      animation-delay: 200ms;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border: 0px 0px 1px 0px;
  background: var(--color-purple-70, #fbf7fe);
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  gap: 8px;
  border-radius: 32px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background: var(--color-neutral-white, #ffffff);
  border: 1px solid var(--color-purple-300, #7200e0);
  cursor: pointer;

  :hover{
    background: #f0e4fc;
  }
`;

export const AddButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;


export const AddButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #7200e0;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 60px;
`;

export const PreviewImg = styled.img`
  width: 100%;
`;

export const CancelAndContinueButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const CancelButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
`;

export const CancelIcon = styled.img`
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
`;
export const CancelButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--color-neutral-400, #56515b);
`;

