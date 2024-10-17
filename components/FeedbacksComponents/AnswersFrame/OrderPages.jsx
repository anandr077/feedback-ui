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
  UpdatingFile
} from './style';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import { v4 as uuidv4 } from 'uuid';

const DraggableImage = ({ id, image, onClickFn }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

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
      <StyledImage src={image.url} alt="Preview" />
    </ImageContainer>
  );
};

function OrderPages({
  selectedImages,
  setSelectedImages,
  setTabValue,
  isLoading,
}) {
  const sensors = useSensors(useSensor(MouseSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = selectedImages.findIndex((img) => img.id === active.id);
      const newIndex = selectedImages.findIndex((img) => img.id === over.id);

      const reorderedImages = arrayMove(selectedImages, oldIndex, newIndex);
      setSelectedImages(reorderedImages);
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
    setSelectedImages([...selectedImages, ...filesWithIds]);
  };

  const handleContinueButton = () => {
    setTabValue('3');
  };

  const handleCancelButton = () => {
    setSelectedImages([]);
    setTabValue('1');
  };

  const DeleteImage = (id) => {
    console.log('DeleteImage', id);
    setSelectedImages(selectedImages.filter((img) => img.id !== id));
  };

  return (
    <>
      <ButtonsContainer>
        <AddButtonContainer>
          <StyledInput
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            name="file"
            onChange={handleImageChange}
          />
          {isLoading ? (
            <UpdatingFile>Updating your file...</UpdatingFile>
          ) : (
            <AddButton onClick={handleButtonClick}>
              <AddButtonImage src={AddIcon} />
              <AddButtonText>Add more files</AddButtonText>
            </AddButton>
          )}
        </AddButtonContainer>
        <CancelAndContinueButtonsContainer>
          <CancelButtonContainer onClick={handleCancelButton}>
            <CancelIcon src={CancelImg} />
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButtonContainer>
          <RoundedBorderSubmitBtn
            text={'Continue'}
            onClickFn={handleContinueButton}
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
                {selectedImages.map((image) => (
                  <DraggableImage
                    key={image.id}
                    id={image.id}
                    image={image}
                    onClickFn={() => DeleteImage(image.id)}
                  />
                ))}
              </ImagesContainer>
            </SortableContext>
          </OrderPagesContainer>
        </OrderPagesMainContainer>
      )}
    </>
  );
}

export default OrderPages;
