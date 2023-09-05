import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { chain } from 'lodash';
import * as React from 'react';
import './preview.css';

export default function PreviewDialog({
  setMarkingCriteriaPreviewDialog,
  markingCriterias,
}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setMarkingCriteriaPreviewDialog(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {markingCriterias.type === 'RUBRICS' ? (
            <table className="parent-container">
              <tr className="title">
                {createHeading(markingCriterias.criterias)}
              </tr>

              {createLevels(markingCriterias.criterias)}
            </table>
          ) : (
            <div className="parent-container">
              {markingCriterias.strengthsTargetsCriterias.map((criteria) => (
                <div className="data">
                  <div className="heading">{criteria.title}</div>
                  <div className="option-container">
                    <div className="data" style={{ width: '50%' }}>
                      <div className="title">Strengths</div>
                      <div className="data">
                        {criteria.strengths.map((strength) => (
                          <div className="content">{strength}</div>
                        ))}
                      </div>
                    </div>
                    <div className="data" style={{ width: '50%' }}>
                      <div className="title">Targets</div>
                      <div className="data">
                        {criteria.targets.map((target) => (
                          <div className="content">{target}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
