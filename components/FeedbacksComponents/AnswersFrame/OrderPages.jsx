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
  Image,
  ImageContainer,
  ImagesContainer,
  OrderPagesContainer,
  OrderPagesMainContainer,
  StyledImage,
  StyledInput,
  StyledLoadingBox,
  UpdatingFile,
} from './style';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import { v4 as uuidv4 } from 'uuid';
import PdfIcon from '../../../static/img/pdf_logo.svg';

const DraggableImage = ({ id, image, onClickFn }) => {
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

  return (
    <ImageContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <DeleteIcon
        src={Redcross}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickFn();
        }}
      />
      {isImageValid ? (
        <StyledImage src={image.url} alt="Preview" />
      ) : (
        <StyledImage src={PdfIcon} alt="Preview" />
      )}
    </ImageContainer>
  );
};

function OrderPages({
  selectedImages,
  handleFilesSubmissions,
  handleCancelButton,
  deleteSelectedFile,
  handleAllUrls
}) {
  const sensors = useSensors(useSensor(MouseSensor));

  console.log('selectedImages is', selectedImages)

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = selectedImages.findIndex((img) => img.id === active.id);
      const newIndex = selectedImages.findIndex((img) => img.id === over.id);

      const reorderedImages = arrayMove(selectedImages, oldIndex, newIndex);
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
            <AddButtonText>Add more files</AddButtonText>
          </AddButton>
        </AddButtonContainer>
        <CancelAndContinueButtonsContainer>
          <CancelButtonContainer onClick={handleCancelButton}>
            <CancelIcon src={CancelImg} />
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButtonContainer>
          <RoundedBorderSubmitBtn
            text={'Continue'}
            onClickFn={()=> handleAllUrls()}
          />
        </CancelAndContinueButtonsContainer>
      </ButtonsContainer>
      {selectedImages.length > 0 && (
        <OrderPagesMainContainer
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <OrderPagesContainer>
            <SortableContext
              items={selectedImages.map((image) => image.id)}
              strategy={rectSortingStrategy}
            >
              <ImagesContainer>
                {selectedImages.map((image) => {
                  if (image.url === null) {
                    return <StyledLoadingBox key={image.id}>
                      <div>Uploading<span></span><span></span><span></span></div>
                    </StyledLoadingBox>;
                  }
                  return <DraggableImage
                    key={image.id}
                    id={image.id}
                    image={image}
                    onClickFn={() => deleteSelectedFile(image.id)}
                  />
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
