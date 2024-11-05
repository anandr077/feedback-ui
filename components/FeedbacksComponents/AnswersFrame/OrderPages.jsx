import React, { useRef } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AddIcon from '../../../static/icons/add.svg';
import CancelImg from '../../../static/img/closecircle.svg';
import Redcross from '../../../static/img/redcross.svg';
import magnifyingIcon from '../../../static/img/magnifyingIcon.svg';
import {
  AddButton,
  AddButtonContainer,
  AddButtonImage,
  AddButtonText,
  ButtonsContainer,
  CancelAndContinueButtonsContainer,
  CancelButtonContainer,
  CancelButtonText,
  CancelIcon,
  DeleteIcon,
  FileName,
  MagnifyingIcon,
  ImageContainer,
  ImagesContainer,
  OrderPagesContainer,
  OrderPagesMainContainer,
  StyledImage,
  StyledInput,
  StyledLoadingBox,
  FileNumber,
} from './style';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import { v4 as uuidv4 } from 'uuid';
import PdfIcon from '../../../static/img/pdf_logo.svg';
import { isContinueButtonAccessible } from './rules';

const DraggableImage = ({
  id,
  image,
  deleteFile,
  fileNumber,
  handlePreviewdFile,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  const [isImageValid, setIsImageValid] = React.useState(null);

  const checkImgUrl = new window.Image();
  checkImgUrl.src = image.url;

  checkImgUrl.onload = () => {
    setIsImageValid(true);
  };

  checkImgUrl.onerror = () => {
    setIsImageValid(false);
  };
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: 'auto',
    margin: '10px',
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const fileName = image?.file?.name 
  ? image.file.name.split('.')[0] 
  : image?.name?.split('.')[0] || '';
  

  return (
    <ImageContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <FileName>
        {fileName?.length > 10 ? fileName.slice(0, 10) + '...' : fileName}
      </FileName>
      <DeleteIcon
        src={Redcross}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteFile();
        }}
      />
      <MagnifyingIcon
        src={magnifyingIcon}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handlePreviewdFile();
        }}
      />
      <FileNumber>{fileNumber}</FileNumber>
      {isImageValid ? (
        <StyledImage src={image.url} alt="Preview" />
      ) : (
        <StyledImage src={PdfIcon} alt="Preview" />
      )}
    </ImageContainer>
  );
};

function OrderPages({
  selectedFiles,
  handleFilesSubmissions,
  handleCancelButton,
  deleteSelectedFile,
  handleAllUrls,
  handlePreviewdFile,
  isUploadingFiles,
}) {
  const sensors = useSensors(useSensor(MouseSensor));
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = selectedFiles.findIndex((img) => img.id === active.id);
      const newIndex = selectedFiles.findIndex((img) => img.id === over.id);

      const reorderedImages = arrayMove(selectedFiles, oldIndex, newIndex);
      handleFilesSubmissions(reorderedImages, true);
    }
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const files = Array.from(event.target.files);
    const filesWithIds = files.map((file) => ({
      id: uuidv4(),
      file,
    }));
    handleFilesSubmissions(filesWithIds);
  };

  return (
    <>
      <ButtonsContainer>
        <AddButtonContainer>
          <StyledInput
            type="file"
            accept="image/*,application/pdf"
            multiple
            ref={fileInputRef}
            name="file"
            onChange={handleImageChange}
          />
          <AddButton onClick={handleButtonClick}>
            <AddButtonImage src={AddIcon} />
            <AddButtonText>Add files</AddButtonText>
          </AddButton>
        </AddButtonContainer>
        <CancelAndContinueButtonsContainer>
          <CancelButtonContainer onClick={handleCancelButton}>
            <CancelIcon src={CancelImg} />
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButtonContainer>
          {isContinueButtonAccessible(selectedFiles.length) && (
            <RoundedBorderSubmitBtn
              text={'Continue'}
              onClickFn={() => handleAllUrls()}
              isDisabled={isUploadingFiles}
            />
          )}
        </CancelAndContinueButtonsContainer>
      </ButtonsContainer>
      {selectedFiles.length > 0 && (
        <OrderPagesMainContainer
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <OrderPagesContainer>
            <SortableContext
              items={selectedFiles.map((image) => image.id)}
              strategy={rectSortingStrategy}
            >
              <ImagesContainer>
                {selectedFiles.map((image, index) => {
                  if (image.url === null) {
                    return (
                      <StyledLoadingBox key={image.id}>
                        <div>
                          Uploading<span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </StyledLoadingBox>
                    );
                  }
                  return (
                    <DraggableImage
                      key={image.id}
                      id={image.id}
                      image={image}
                      deleteFile={() => deleteSelectedFile(image.id)}
                      fileNumber={index + 1}
                      handlePreviewdFile={() => handlePreviewdFile(image.id)}
                    />
                  );
                })}
              </ImagesContainer>
            </SortableContext>
          </OrderPagesContainer>
        </OrderPagesMainContainer>
      )}
    </>
  );
}

export default OrderPages;
