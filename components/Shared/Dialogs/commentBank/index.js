import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { chain } from 'lodash';
import { isMobileView } from '../../../ReactiveRender';
import * as React from 'react';
import styled from 'styled-components';
import SmartAnotation from '../../../SmartAnnotations';

export default function CommentBankDialog({
  setCommentBankPreviewDialog,
  commentBank,
}) {
  const [open, setOpen] = React.useState(true);
  const onMobileView = isMobileView();
  const handleClose = () => {
    setOpen(false);
    setCommentBankPreviewDialog(false);
  };
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
            {commentBank.smartComments.map((smartComment, innerIndex) => (
              <SmartAnotation
                key={`${innerIndex}`}
                smartAnnotation={smartComment}
              />
            ))}
          </SuggestionsContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SuggestionContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
  background: #ffffff;
  cursor: pointer;
`;
const SuggestionDes = styled.div`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
  line-height: 20.8px;
`;
