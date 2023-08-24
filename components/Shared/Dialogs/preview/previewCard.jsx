import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { chain } from 'lodash';
import * as React from 'react';
import './preview.css';

export default function PreviewDialog({
  setMarkingCriteriaPreviewDialog,
  criterias,
}) {
  console.log('criterias: ' + criterias);
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
    .groupBy('levelIndex')
    .map((items, name) => ({ name, items }))
    .value();

  return groupedArray.map((group) => {
    let rowItems = Array(criterias.length).fill(null);
    group.items.forEach((item) => {
      rowItems[item.criteriaIndex] = item;
    });
    return <tr className="data-parent">{createRows(rowItems)}</tr>;
  });
};

const createRows = (items) => {
  return items.map((item) => {
    if (item) {
      return (
        <td className="data column-width">
          <div className="heading">{item.levelName}</div>
          <div className="content">{item.levelDescription}</div>
        </td>
      );
    } else {
      return <td className="data column-width"></td>;
    }
  });
};
