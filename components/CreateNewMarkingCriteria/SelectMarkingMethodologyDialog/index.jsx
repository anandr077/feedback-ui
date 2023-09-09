import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import './style.css';

export default function MarkingMethodologyDialog({
  setOpenMarkingMethodologyDialog,
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setOpenMarkingMethodologyDialog(false);
  };
  return (
    <>
      <Dialog
        className="dialog-parent-container"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <div className="content-container">
            <div className="dialog-heading">Select a method</div>
            <div className="methodology-options">
              <div
                className="rubrics"
                onClick={() =>
                  (window.location.href = '/#/markingTemplates/rubrics/new')
                }
              >
                <img src="/img/rubrics.svg" alt="rubrics" />
                Rubric
              </div>
              <div
                className="strength-target"
                onClick={() =>
                  (window.location.href =
                    '/#/markingTemplates/strengths-and-targets/new')
                }
              >
                <img src="/img/strengths-and-targets.svg" alt="s&t" />
                Strengths and Targets
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
