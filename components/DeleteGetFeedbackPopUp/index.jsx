import React from 'react';
import { DialogContent, Dialog } from '@mui/material';

import {
  Arrowright,
  ArrowrightSmall,
  ButtonsContainer,
  CancelButton,
  DeleteAssignmentPopupContainer,
  DeleteButton,
  DeleteTitle,
  Line141,
  TextContent,
  TitleContainer,
} from './style';

export default function DeleteGetFeedbackPopup(props) {
  const { hidedeletePopup, showDeletePopup, deleteFunction } = props;

  const onDelete = () => {
    deleteFunction();
  };

  const content = (
    <>
      <TitleContainer>
        <Arrowright src="/icons/trash-can.svg" alt="delete" />
        <DeleteTitle>Delete Document</DeleteTitle>
      </TitleContainer>
      <Line141 src="/img/line-14@2x.png" />
      <TextContent>Are you sure you want to permanently delete? </TextContent>
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
    <Dialog open={showDeletePopup} onClose={() => hidedeletePopup()}>
      <DialogContent>
        <DeleteAssignmentPopupContainer>
          {content}
        </DeleteAssignmentPopupContainer>
      </DialogContent>
    </Dialog>
  );
}
