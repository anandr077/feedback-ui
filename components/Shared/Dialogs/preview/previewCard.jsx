import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import "./preview.css";
import { groupBy, groupedData, flatten, chain } from "lodash";

export default function PreviewDialog({
  setMarkingCriteriaPreviewDialog,
  criterias,
}) {
  console.log("criterias: " + criterias);
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setMarkingCriteriaPreviewDialog(false);
  };
  createLevels(criterias);
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <table className="parent-container">
            <tr className="title">{createHeading(criterias)}</tr>

            {createLevels(criterias)}
          </table>
        </DialogContent>
      </Dialog>
    </>
  );
}
const createHeading = (criterias) => {
  return criterias.map((criteria) => {
    return <td className="column-width">{criteria.title}</td>;
  });
};

const createLevels = (criterias) => {
  let groupedArray = chain(criterias)
    .flatMap((criteria, criteriaIndex) =>
      criteria.levels.map((level, levelIndex) => ({
        criteriaIndex: criteriaIndex,
        levelIndex: levelIndex,
        title: criteria.title,
        levelName: level.name,
        levelDescription: level.description,
      }))
    )
    .groupBy("levelIndex")
    .map((items, name) => ({ name, items }))
    .value();
  return groupedArray.map((g) => {
    return <tr className="data-parent">{createRows(g)}</tr>;
  });
};

const createRows = (group) => {
  return group.items.map((item) => {
    return (
      <td className="data column-width">
        <div className="heading">{item.levelName}</div>
        <div className="content">{item.levelDescription}</div>
      </td>
    );
  });
};