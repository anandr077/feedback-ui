import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import {
  updateHandWrittenDocumentById,
  uploadFileToServer,
} from '../../../service';
import PreviewFiles from './PreviewFiles';
import { isPreviewButton, isTabSection } from './rules';

function HandWritten({ submissionId, answer, setSubmission, setMainTab }) {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const selectedTabValue = files.length > 0 ? '2' : '1';
  const [tabValue, setTabValue] = useState(selectedTabValue);

  useEffect(() => {
    const hasUploadedDocuments = answer?.answer?.fileUrls;

    if (hasUploadedDocuments) {
      const newFiles = hasUploadedDocuments.map((url) => ({
        id: uuidv4(),
        url: url,
      }));

      setFiles(newFiles);
      setTabValue('3');
    } else if (files.length === 0) {
      setTabValue('1');
    }
  }, [answer?.answer?.fileUrls]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilesSubmissions = async (newImages, isReorder = false) => {
    setIsLoading(true);
    try {
      if(!isReorder){
        setFiles(oldFiles => [
          ...oldFiles, 
          ...newImages.map((imageObj) => ({
            ...imageObj,
            url: null
          }))
        ]);
      }else{
        setFiles([...newImages])
      }
      const updatedDocuments = await Promise.all(
        newImages.map(async (imageObj) => {
          if (imageObj?.file && !imageObj.url) {
            const documentUrl = await uploadFileToServer(imageObj.file);

            return {
              ...imageObj,
              url: documentUrl,
            };
          }
          return imageObj;
        })
      );
      if(!isReorder){
        setFiles(oldFiles => [...oldFiles.filter((imageObj)=> imageObj.url !== null), ...updatedDocuments]);
      }else{
        setFiles([...updatedDocuments]);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleAllUrls = async () => {
    try {
      const documentUrls = files.map((file) => file.url);
      const updatedSubmission = await updateHandWrittenDocumentById(
        submissionId,
        answer.serialNumber,
        documentUrls
      );
      console.log('the documentUrls is', documentUrls)
      await setSubmission(updatedSubmission);
      setTabValue("3")
    } catch (error) {
      console.error('Error updating handwritten document:', error);
    }
  };

  const deleteSelectedFile = async (id) =>{
    setFiles((oldFiles) => oldFiles.filter((old) => old.id !== id))
  }

  const handleCancelButton = async () =>{
    setFiles([])
    setTabValue("1")
  }

  const handleExtractText = async (id, serialNumber) =>{
    const textExtracted = await extractText(id, serialNumber)
    console.log('hello handleExtractText', id, serialNumber)
  }

  const handleGoBack = () =>{
    setTabValue("2")
    console.log('go back ')
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
          {(
          //{isTabSection(!answer?.answer?.fileUrls) && (
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
          )}
          <StyledTabPanel value="1">
            <UploadFiles
              handleFilesSubmissions={handleFilesSubmissions}
              setTabValue={setTabValue}
              selectedImages={files}
            />
          </StyledTabPanel>
          <StyledTabPanel value="2">
            <OrderPages
              selectedImages={files}
              handleFilesSubmissions={handleFilesSubmissions}
              handleCancelButton={handleCancelButton}
              deleteSelectedFile={deleteSelectedFile}
              handleAllUrls={handleAllUrls}
            />
          </StyledTabPanel>
          <StyledTabPanel value="3">
            {/* {isPreviewButton(!answer?.answer?.fileUrls) && (
              <PreviewButtons
                handleGoBack={setTabValue}
                handleConvertToText={handleAllUrls}
              />
            )} */}
            <PreviewButtons
                handleGoBack={handleGoBack}
                handleConvertToText={()=> handleExtractText(submissionId, answer.serialNumber)}
            />
            <PreviewContainer>
              {files.map((image) => {
                return (
                  <PreviewFiles key={image.id} id={image.id} url={image.url} />
                );
              })}
            </PreviewContainer>
          </StyledTabPanel>
        </TabContextComponent>
      </TabsContainer>
    </>
  );
}

export default HandWritten;
