import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

export default function MarkingMethodologyDialog({
  setOpenMarkingMethodologyDialog,
}) {
   const history = useHistory();
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
                onClick={() => history.push('/markingTemplates/rubrics/new')}
              >
                <img src="/img/rubrics.svg" alt="rubrics" />
                Rubric
              </div>
              <div
                className="strength-target"
                onClick={() =>
                  history.push('/markingTemplates/strengths-and-targets/new')
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
