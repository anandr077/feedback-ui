import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import "./preview.css";

export default function PreviewDialog({ setMarkingCriteriaPreviewDialog,  criterias}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setMarkingCriteriaPreviewDialog(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className="dialog-container">
            {criterias.map((criteria, index) => (
              <div className="parent-container" key={index}>
                <div className="title">{criteria?.title}</div>
                <div className="content-card">
                  <div className="data">
                    {criteria.levels.map((level, index) => (
                      <React.Fragment key={index}>
                        <div className="heading">{level?.name}</div>
                        <div className="content">{level?.description}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
