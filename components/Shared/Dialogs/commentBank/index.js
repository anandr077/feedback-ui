import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import styled from 'styled-components';
import SmartAnotation from '../../../SmartAnnotations';
import RectangularBigBtn from '../../../../components2/Buttons/RectangularbigBtn'

export default function CommentBankDialog({
  setCommentBankPreviewDialog,
  commentBank,
  showActionButton=false,
  onActionButtonClick = () => {} 
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setCommentBankPreviewDialog(false);
  };

  const handleActionButton = () =>{
    onActionButtonClick()
    setCommentBankPreviewDialog(false);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{ style: { width: 750 } }}
      >
        <DialogContent>
          <SuggestionsContainer>
            {commentBank?.smartComments?.map((smartComment, innerIndex) => (
              <SmartAnotation
                key={`${innerIndex}`}
                smartAnnotation={smartComment}
                addOption = {false}
              />
            ))}
          </SuggestionsContainer>
          {showActionButton && (
            <ActionButton>
              <RectangularBigBtn text='Import' onClickFn={handleActionButton}/>
            </ActionButton>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

const ActionButton = styled.div`
   margin-top: 10px;
`;

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
