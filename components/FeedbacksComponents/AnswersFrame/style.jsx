import styled from 'styled-components';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //   border-top: 1px solid #f2f2f2;
  //   border-bottom: 1px solid #f2f2f2;
`;

export const TabContextComponent = styled(TabContext)`
  width: 100%;
`;

export const StyledBox = styled(Box)`
  width: 100%;
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

export const StyledMainTabList = styled(TabList)`
  width: 100%;
  padding: 0px 20px !important;
`;
export const StyledTabList = styled(TabList)`
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  .MuiTabs-flexContainer {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: none !important;
  font-family: IBM Plex Sans !important;
`;

export const UploadFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  background: var(--color-neutral-white, #ffffff);
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
