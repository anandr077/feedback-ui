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
  const [showSubmitPopup, setShowSubmitPopup] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const hideSubmitPopup = () => {
    setShowSubmitPopup(false);
    setFeedbackMethodTypeDialog(-1);
  };

  function submissionFunction() {
    handleSelectedRequestFeedback(selectedMenuItem, feedbackType);
    setFeedbackMethodTypeDialog(-1);
  }
  return (
    <>
      {showSubmitPopup && submitPopup(hideSubmitPopup, submissionFunction)}

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
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
                setShowSubmitPopup(true);
                handleClose();
              }}
            >
              Send request
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function submitPopup(hideSubmitPopup, submissionFunction) {
  let warningMessage = undefined;
  let confirmationMessage = undefined;
  let buttonText = 'Submit';

  warningMessage =
    "By submitting this draft, you are requesting feedback. Please ensure that you have reviewed your work thoroughly, as you will not be able to make changes once it's submitted.";
  confirmationMessage = 'Do you wish to proceed?';
  buttonText = 'Submit';

  return (
    <GeneralPopup
      hidePopup={hideSubmitPopup}
      title="Draft Submission Confirmation"
      buttonText={buttonText}
      confirmButtonAction={submissionFunction}
      warningMessage={warningMessage}
      confirmationMessage={confirmationMessage}
    />
  );
}
