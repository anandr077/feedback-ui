import React, { useState } from 'react';
import { isMobileView } from '../ReactiveRender';
import { DialogContent, Dialog } from '@mui/material';
import {
  TextFrame,
  TextInput,
  DeleteTitle,
  ButtonsContainer,
  CancelButton,
  ProceedButton,
  TextContent,
  DeleteAssignmentPopupContainer,
  DeleteAssignmentPopupContainerSmall,
  TitleContainer,
  Line141,
  ConfirmSubmit,
  PlagiarismText,
} from './style';
import tickIcon from '../../static/img/tickpurple.svg'

export default function GeneralPopup(props) {
  const {
    hidePopup,
    buttonText,
    textContent,
    title,
    closeBtnText = 'Cancel',
    confirmationMessage,
    confirmButtonAction,
    smartAnnotation,
    createSmartAnnotationHandler,
    warningMessage,
    cancelPopup,
  } = props;



  const [annotationTitle, setAnnotationTitle] = useState('');

  const handleInputChange = (event) => {
    setAnnotationTitle(event.target.value);
  };

  const content = (
    <>
      <TitleContainer>
        <DeleteTitle><img src={tickIcon} /> {title}</DeleteTitle>
      </TitleContainer>
      <Line141 src="/img/line-14@2x.png" />
      {textContent && <TextContent>{textContent}</TextContent>}
      {smartAnnotation && (
        <TextFrame>
          <TextInput onChange={handleInputChange}></TextInput>
        </TextFrame>
      )}
      <ConfirmSubmit>
        {warningMessage && <PlagiarismText>{warningMessage}</PlagiarismText>}
        {confirmationMessage && (
          <PlagiarismText>{confirmationMessage}</PlagiarismText>
        )}
      </ConfirmSubmit>

      <ButtonsContainer>
        <ProceedButton onClick={() =>cancelPopup? cancelPopup(): hidePopup()}>{closeBtnText}</ProceedButton>
        {smartAnnotation ? (
          <CancelButton
            onClick={() => createSmartAnnotationHandler(annotationTitle)}
          >
            {buttonText}
          </CancelButton>
        ) : (
          <CancelButton onClick={() => confirmButtonAction()}>
            {buttonText}
          </CancelButton>
        )}
      </ButtonsContainer>
    </>
  );

  return (
    <Dialog open={open} onClose={() => hidePopup()}>
      <DialogContent>
        {isMobileView() ? (
          <DeleteAssignmentPopupContainerSmall>
            {content}
          </DeleteAssignmentPopupContainerSmall>
        ) : (
          <DeleteAssignmentPopupContainer>
            {content}
          </DeleteAssignmentPopupContainer>
        )}
      </DialogContent>
    </Dialog>
  );
}
