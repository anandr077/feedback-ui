import React, { useState } from 'react';
import {
  StyledBox,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  TabContextComponent,
  TabNumber,
  TabNumberText,
  TabPart,
  TabsContainer,
  TabText,
  UploadFilesContainer,
  UploadFilesText,
  PreviewImg,
  PreviewContainer,
} from './style';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import UploadFiles from './UploadFiles';
import OrderPages from './OrderPages';

function HandWritten({setSubmission, submission}) {
  const handWrittenFiles = submission?.assignment?.handWrittenFiles || []
  const [tabValue, setTabValue] = useState(handWrittenFiles.length > 0 ? '2' : '1');
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const updateWrittenFiles = (selectedImages) =>{
    setSubmission((old) =>({
      ...old,
      assignment: {
        ...old.assignment,
        handWrittenFiles: selectedImages
      }
    }))
  }

  const LabelContainer = ({ number, text, active }) => {
    return (
      <TabPart>
        <TabNumber>
          <TabNumberText active={active}>{number}</TabNumberText>
        </TabNumber>
        <TabText active={active}>{text}</TabText>
      </TabPart>
    );
  };

  return (
    <>
      <TabsContainer>
        <TabContextComponent value={tabValue}>
          <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <StyledTabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <StyledTab
                label={
                  <LabelContainer
                    number="1"
                    text="Upload Files"
                    active={tabValue === '1'}
                  />
                }
                value="1"
              />
              <StyledTab
                label={
                  <LabelContainer
                    number="2"
                    text="Order Pages"
                    active={tabValue === '2'}
                  />
                }
                value="2"
              />
              <StyledTab
                label={
                  <LabelContainer
                    number="3"
                    text="Preview"
                    active={tabValue === '3'}
                  />
                }
                value="3"
              />
            </StyledTabList>
          </StyledBox>
          <StyledTabPanel value="1">
            <UploadFiles
              setSelectedImages={updateWrittenFiles}
              setTabValue={setTabValue}
              selectedImages={handWrittenFiles}
            />
          </StyledTabPanel>
          <StyledTabPanel value="2">
            <OrderPages
              selectedImages={handWrittenFiles}
              setSelectedImages={updateWrittenFiles}
              setTabValue={setTabValue}
            />
          </StyledTabPanel>
          <StyledTabPanel value="3">
            <PreviewContainer>
              {handWrittenFiles.map((image) => (
                <PreviewImg
                  key={image.id}
                  id={image.id}
                  src={URL.createObjectURL(image.file)}
                />
              ))}
            </PreviewContainer>
          </StyledTabPanel>
        </TabContextComponent>
      </TabsContainer>
    </>
  );
}

export default HandWritten;
