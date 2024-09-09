import React, { useRef } from 'react';
import { StyledInput, UploadFilesContainer, UploadFilesText } from './style';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import { v4 as uuidv4 } from 'uuid';

function UploadFiles({setSelectedImages, setTabValue}) {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
   
    const handleImageChange = (event) => {
    event.preventDefault(); 
      const files = Array.from(event.target.files || event.dataTransfer.files);
      const filesWithIds = files.map((file) => ({
        id: uuidv4(), 
        file,  
      }));
      setSelectedImages(filesWithIds);
      setTabValue('2');
    };

    

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };

  

  return (
    <UploadFilesContainer onDragOver={handleDragOver} onDrop={handleImageChange}>
      <StyledInput
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef} 
        onChange={handleImageChange}
      />
      <RoundedBorderSubmitBtn
        text={'Select Files'}
        onClickFn={handleButtonClick}
      />
      <UploadFilesText>Or drop files here</UploadFilesText>
      <UploadFilesText>
        (Files should be in .pdf, .jpeg or .png format. Maximum file upload
        size: 5mb)
      </UploadFilesText>
     
    </UploadFilesContainer>
  );
}

export default UploadFiles;
