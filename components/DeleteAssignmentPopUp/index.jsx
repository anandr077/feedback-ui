import React from 'react';
import styled from 'styled-components';
import { deleteAssignment } from '../../service';
import {
  IbmplexsansSemiBoldWhite16px,
} from '../../styledMixins';
import { DialogContent, Dialog } from '@mui/material';
import { toast } from 'react-toastify';
import Toast from '../Toast';
import line from '../../static/img/Line17.svg';

export default function DeleteAssignmentPopup(props) {

  const {
    assignment,
    hidedeletePopup,
    deleteDocumentMutation,
    documentToDelete = null,
  } = props;

  const deleteAssignmentHandler = () => {
    deleteAssignment(assignment.id).then((res) => {
      window.location.href = '#tasks';
      window.location.reload();
    });
    hidedeletePopup();
    toast(<Toast message={'Task deleted'} />);
  };

  const textContent = `Are you sure you want to permanently delete ${
    documentToDelete ? documentToDelete.title : 'this task'
  }?`;

  const onDelete = () =>{
    if (documentToDelete) {
      deleteDocumentMutation.mutate(documentToDelete);
      hidedeletePopup();
    } else {
      deleteAssignmentHandler();
    }
  }

  const content = (
    <>
      <TitleContainer>
        <Arrowright src="/icons/trash-can.svg" alt="delete" />
        <DeleteTitle>
          {documentToDelete ? 'Delete Document' : 'Delete task'}
        </DeleteTitle>
      </TitleContainer>
      <Line141 src={line} />
      <TextContent>{textContent}</TextContent>
      <ButtonsContainer>
        <CancelButton onClick={() => hidedeletePopup()}>Cancel</CancelButton>
        <DeleteButton onClick={onDelete}>
          <ArrowrightSmall src="/icons/trash-can-white.svg" alt="delete" />
          Delete
        </DeleteButton>
      </ButtonsContainer>
    </>
  );

  return (
    <Dialog open={open} onClose={() => hidedeletePopup()}>
      <DialogContent style={{maxWidth: '600px'}}>
        <DeleteAssignmentPopupContainer>
          {content}
        </DeleteAssignmentPopupContainer>
      </DialogContent>
    </Dialog>
  );
}

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
  padding-top: 50px;
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

const DeleteButton = styled.div`
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
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-weight: 700;

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
  z-index: 1000;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
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
