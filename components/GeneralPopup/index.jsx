import React, { useState } from 'react';
import styled from 'styled-components';
import { isMobileView } from '../ReactiveRender';
import {
  IbmplexsansSemiBoldShark24px,
  IbmplexsansSemiBoldWhite16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';
import { DialogContent, Dialog } from '@mui/material';

export default function GeneralPopup(props) {
  const {
    hidePopup,
    buttonText,
    textContent,
    title,
    confirmButtonAction,
    smartAnnotation,
    createSmartAnnotationHandler,
    warningMessage,
  } = props;

  console.log('pageMode ' + warningMessage);

  const [annotationTitle, setAnnotationTitle] = useState('');

  const handleInputChange = (event) => {
    setAnnotationTitle(event.target.value);
  };

  const content = (
    <>
      <TitleContainer>
        <DeleteTitle>{title}</DeleteTitle>
      </TitleContainer>
      <Line141 src="/img/line-14@2x.png" />
      {textContent && <TextContent>{textContent}</TextContent>}
      {smartAnnotation && (
        <TextFrame>
          <TextInput onChange={handleInputChange}></TextInput>
        </TextFrame>
      )}
      {(warningMessage === 'DRAFT' || warningMessage === 'REVISE') && (
        <ConfirmSubmit>
          <PlagiarismText>
            Plagiarism undermines the learing process, hinders personal
            growth, and goes against the principles of honesty and fairness.
          </PlagiarismText>
          <PlagiarismText>
            By submitting your work, you are acknowledging that it is entirely
            your own and has not been plagiarised in any form.
          </PlagiarismText>
        </ConfirmSubmit>
      )}
      <ButtonsContainer>
        <ProceedButton onClick={() => hidePopup()}>Cancel</ProceedButton>
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

const TextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 10px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  width: 70%;
  left: 5%;
  margin-top: 20px;
`;

const TextInput = styled.input`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const DeleteTitle = styled.div`
  display: flex;
  width: 277.333px;
  flex-direction: column;
  flex-shrink: 0;
  color: #505050;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
  margin-right: 40px;
  padding-top: 20px;
  font-family: IBM Plex Sans;
`;

const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const ArrowrightSmall = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
`;
const CancelButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid var(--light-mode-purple, #7200e0);
  background: var(--light-mode-purple, #7200e0);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProceedButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  border: 1px solid #cc2929;
  background: #cc2929;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const TextContent = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  display: flex;
  width: 90%;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  padding-top: 20px;
`;

const DeleteAssignmentPopupContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 500px;
  z-index: 1000;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

const DeleteAssignmentPopupContainerSmall = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 30px;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

const ConfirmSubmit = styled.div`
  margin: 20px auto 0;
  width: 90%;
`;

const PlagiarismText = styled.p`
  margin-bottom: 15px;
  color: #3a3a3a;
  font-size: 14px;
  line-height: 20px;
  font-family: IBM Plex Sans;
`;
