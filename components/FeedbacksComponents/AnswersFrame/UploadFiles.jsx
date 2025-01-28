import React, { useRef } from 'react';
import { StyledInput, UploadFilesContainer, UploadFilesText } from './style';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Toast from '../../Toast';

function UploadFiles({handleFilesSubmissions, setTabValue}) {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const handleImageChange = (event) => {
      event.preventDefault(); 
      const files = Array.from(event.target.files || event.dataTransfer.files);

      const ALLOWED_TYPES = [
        'image/jpeg',
        'image/png',
        'image/heic',
        'image/heif',
        'application/pdf'
      ];

      const validFiles = files.filter(file => {
        if (file.size > MAX_FILE_SIZE) {
          toast(
            <Toast 
              message={`${file.name} exceeds 5mb file size limit`}
            />
          )
          return false;
        }
        if (!ALLOWED_TYPES.includes(file.type)) {
          toast(
            <Toast 
              message={`Only .pdf, .jpeg, .png or .heic/.heif files are accepted, please convert and try again`}
            />
          )
          return false;
        }
        return true;
      });

      if(validFiles.length === 0){
        setTabValue('1');
        return;
      }

      const filesWithIds = validFiles.map((file) => ({
        id: uuidv4(), 
        file,  
      }));
      handleFilesSubmissions([...filesWithIds]);
      setTabValue('2');
    };

    

  const handleDragOver = (event) => {
    event.preventDefault(); 
  };

  

  return (
    <UploadFilesContainer onDragOver={handleDragOver} onDrop={handleImageChange}>
      <StyledInput
        type="file"
        accept=".heic, .HEIC, .heif, .HEIF, image/heic, image/heif, image/*, application/pdf"
        multiple
        ref={fileInputRef} 
        name="file"
        onChange={handleImageChange}
      />
      <RoundedBorderSubmitBtn
        text={'Select Files'}
        onClickFn={handleButtonClick}
      />
      <UploadFilesText>Or drop files here</UploadFilesText>
      <UploadFilesText>
        (Files should be in .pdf, .jpeg, .png or .heic/.heif format. Maximum file upload size: 5mb)
      </UploadFilesText>
     
    </UploadFilesContainer>
  );
}

export default UploadFiles;
