import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledBox,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  NoPreviewText,
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
import { isOrderTabDisabled, isPreviewButton, isPreviewTabDisabled, isUploadTabDisabled, isUploadTabs } from './rules';
import UploadedFilePopup from '../../../components2/UploadedFilePopup';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

function HandWritten({
  submissionId,
  answer,
  setSubmission,
  handleExtractText,
  pageMode,
}) {
  const { isUpdatingHandWrittenFiles, setIsUpdatingHandWrittenFiles } = useContext(FeedbackContext);
  const [files, setFiles] = useState([]);
  const [previewedFileId, setPreviewedFileId] = useState(null);
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
    try {
      setIsUpdatingHandWrittenFiles(true);
      if (!isReorder) {
        setFiles((oldFiles) => [
          ...oldFiles,
          ...newImages.map((imageObj) => ({
            ...imageObj,
            url: null,
          })),
        ]);
      } else {
        setFiles([...newImages]);
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
      if (!isReorder) {
        setFiles((oldFiles) => [
          ...oldFiles.filter((imageObj) => imageObj.url !== null),
          ...updatedDocuments,
        ]);
      } else {
        setFiles([...updatedDocuments]);
      }
      setIsUpdatingHandWrittenFiles(false);
    } catch (error) {
      console.error('Error while file submission:', error);
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
      await setSubmission(updatedSubmission);
      setTabValue('3');
    } catch (error) {
      console.error('Error updating handwritten document:', error);
    }
  };

  const deleteSelectedFile = async (id) => {
    setFiles((oldFiles)=> {
      const updatedFiles = oldFiles.filter((old) => old.id !== id);

      if(updatedFiles.length === 0){
        setTabValue('1')
      }
      return updatedFiles;
    })
  };

  const handleCancelButton = async () => {
    setFiles([]);
    setTabValue('1');
  };

  const handleGoBack = () => {
    setTabValue('2');
  };

  const handlePreviewdFile = (id) => {
    setPreviewedFileId(id);
  };

  const LabelContainer = ({ number, text, active}) => {
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
      {previewedFileId && (
        <UploadedFilePopup
          previewedFileUrl={
            files.find((file) => file.id === previewedFileId)?.url
          }
          removePreviewdFile={() => setPreviewedFileId(null)}
        />
      )}
      <TabsContainer>
        <TabContextComponent value={tabValue}>
          {isUploadTabs(pageMode, answer) && (
            <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <StyledTabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <StyledTab
                  isDisabled={isUploadTabDisabled(isUpdatingHandWrittenFiles)}
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
                  isDisabled={isOrderTabDisabled(files.length, isUpdatingHandWrittenFiles)}
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
                    isDisabled={isPreviewTabDisabled(files.length, isUpdatingHandWrittenFiles)}
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
            />
          </StyledTabPanel>
          <StyledTabPanel value="2">
            <OrderPages
              selectedFiles={files}
              handleFilesSubmissions={handleFilesSubmissions}
              handleCancelButton={handleCancelButton}
              deleteSelectedFile={deleteSelectedFile}
              handleAllUrls={handleAllUrls}
              handlePreviewdFile={handlePreviewdFile}
              isUpdatingHandWrittenFiles={isUpdatingHandWrittenFiles}
            />
          </StyledTabPanel>
          <StyledTabPanel value="3">
            {files.length === 0 && (
              <NoPreviewText>Nothing to preview</NoPreviewText>
            )}
            {isPreviewButton(answer, pageMode, files.length) && (
              <PreviewButtons
                handleGoBack={handleGoBack}
                handleConvertToText={() =>
                  handleExtractText(submissionId, answer.serialNumber)
                }
                isUpdatingHandWrittenFiles={isUpdatingHandWrittenFiles}
              />
            )}
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
