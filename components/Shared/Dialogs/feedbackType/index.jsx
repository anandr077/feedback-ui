import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import DropdownMenu from '../../../DropdownMenu';
import './style.css';
import GeneralPopup from '../../../GeneralPopup';

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
  console.log('menuItems: ', menuItems);
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
                defaultSearch={true}
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
            <GeneralPopup
              hidePopup={handleClose}
              title={
                'Are you share you want to request feedback from ' +
                menuItems[0].name
              }
              confirmationMessage=""
              buttonText="Submit"
              confirmButtonAction={() => {
                handleSelectedRequestFeedback(selectedMenuItem, feedbackType);
                handleClose();
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
