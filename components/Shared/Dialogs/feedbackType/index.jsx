import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import DropdownMenu from '../../../DropdownMenu';
import './style.css';

export default function FeedbackTypeDialog({
  menuItems,
  setFeedbackMethodTypeDialog,
  title,
  handleSelectedRequestFeedback,
  feedbackType,
}) {
  const [open, setOpen] = React.useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
  const handleClose = () => {
    setOpen(false);
    setFeedbackMethodTypeDialog(-1);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {title != 'class' ? (
            <div className="type-container">
              <div>Select a {title}</div>
              <DropdownMenu
                menuItems={menuItems}
                showAvatar={true}
                onItemSelected={(item) => {
                  setSelectedMenuItem(item);
                }}
              ></DropdownMenu>
              <div
                className="request-btn"
                onClick={() => {
                  handleSelectedRequestFeedback(selectedMenuItem, feedbackType);
                  handleClose();
                }}
              >
                Send request
              </div>
            </div>
          ) : (
            <div className="type-container align-items-end">
              <div>Are you sure you want to perform this action?</div>
              <div className="flex-container">
                <button
                  onClick={() => {
                    handleSelectedRequestFeedback(null, feedbackType);
                    handleClose();
                  }}
                >
                  Submit
                </button>
                <button onClick={handleClose}>Cancel</button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
