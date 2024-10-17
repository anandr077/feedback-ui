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
import UploadFiles from './UploadFiles';
import OrderPages from './OrderPages';
import PreviewButtons from './PreviewButtons';
import { updateHandWrittenDocumentById, uploadFileToServer } from '../../../service';

function HandWritten({submissionId, answer, setSubmission}) {
  const [files, setFiles] = useState([]);
  const [isLoading, setIslaoding] = React.useState(false);
  const [tabValue, setTabValue] = useState(files.length > 0 ? '2' : '1');
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilesSubmissions = async (selectedImages) => {
    setIslaoding(true)

    try {
      const updatedDocuments = await Promise.all(
        selectedImages.map(async (imageObj) => {
          if (imageObj?.file) {
            const documentUrl = await uploadFileToServer(imageObj.file);

            return {
              ...imageObj,
              url: documentUrl,
            };
          }
        })
      );

      setFiles(updatedDocuments)   

    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setIslaoding(false);
    }
  }

  const handleConvertToText = async () =>{
    try {
      const documentUrls = files.map((file) => file.url);
      const updatedSubmission = await updateHandWrittenDocumentById(submissionId, answer.serialNumber, documentUrls);
      setSubmission(updatedSubmission);
    } catch (error) {
      console.error('Error updating handwritten document:', error);
    }
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
              setSelectedImages={handleFilesSubmissions}
              setTabValue={setTabValue}
              selectedImages={files} 
            />
          </StyledTabPanel>
          <StyledTabPanel value="2">
              <OrderPages
                selectedImages={files}
                setSelectedImages={handleFilesSubmissions}
                setTabValue={setTabValue}
                isLoading={isLoading}
              />
          </StyledTabPanel>
          <StyledTabPanel value="3">
            <PreviewButtons handleGoBack={setTabValue} onclick={handleConvertToText}/>
            <PreviewContainer>
              {files.map((image) => {
                return (
                  <PreviewImg
                    key={image.id}
                    id={image.id}
                    src={image.url}
                  />
                )
              })}
            </PreviewContainer>
          </StyledTabPanel>
        </TabContextComponent>
      </TabsContainer>
    </>
  );
}

export default HandWritten;
