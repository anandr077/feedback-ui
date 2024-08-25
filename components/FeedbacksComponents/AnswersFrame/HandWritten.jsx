import React from 'react';
import { StyledBox, StyledTab, StyledTabList, StyledTabPanel, TabContextComponent, TabNumber, TabNumberText, TabPart, TabsContainer, TabText, UploadFilesContainer, UploadFilesText } from './style';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';

function HandWritten() {
  const [tabValue, setTabValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    console.log('newValue',newValue);
  };

  const LabelContainer = ({number,text,active}) => {
    return (
     <TabPart>
       <TabNumber>
        <TabNumberText active ={active}>{number}</TabNumberText>
       </TabNumber>
        <TabText active ={active} >{text}</TabText>
     </TabPart>
    );
  }

  const UploadFiles = () => {
    return (
      <UploadFilesContainer>
       <RoundedBorderSubmitBtn
          text={'Select Files'}
          onClickFn={() => {console.log('Button clicked')}}
        />
        <UploadFilesText>Or drop files here</UploadFilesText>
        <UploadFilesText>(Files should be in .pdf, .jpeg or .png format. Maximum file upload size: 5mb)</UploadFilesText>
      </UploadFilesContainer>
    );
  }

  return (
    <>
      <TabsContainer>
        <TabContextComponent value={tabValue}>
          <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledTabList onChange={handleChange} aria-label="lab API tabs example">
              <StyledTab label={<LabelContainer number='1' text='Upload Files' active={tabValue === '1'}/>} value="1" />
              <StyledTab label={<LabelContainer number='2' text='Order Pages' active={tabValue === '2'} />} value="2" />
              <StyledTab label={<LabelContainer number='3' text='Convert to Text' active={tabValue === '3'} />} value="3" />
            </StyledTabList>
          </StyledBox>
          <StyledTabPanel value="1"><UploadFiles/></StyledTabPanel>
          <StyledTabPanel value="2">Item Two</StyledTabPanel>
          <StyledTabPanel value="3">Item Three</StyledTabPanel>
        </TabContextComponent>
      </TabsContainer>
    </>
  );
}

export default HandWritten;
