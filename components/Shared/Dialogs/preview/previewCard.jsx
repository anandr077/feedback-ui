import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { chain } from 'lodash';
import { isMobileView } from '../../../ReactiveRender'; 
import * as React from 'react';
import './preview.css';

export default function PreviewDialog({
  setMarkingCriteriaPreviewDialog,
  markingCriterias,
}) {
  const [open, setOpen] = React.useState(true);
  const onMobileView = isMobileView()
  const handleClose = () => {
    setOpen(false);
    setMarkingCriteriaPreviewDialog(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {markingCriterias.type === 'RUBRICS' ? (
            <table className='rubrics-table'>
              <tr className="title">
                {createHeading(markingCriterias.criterias)}
              </tr>

              {createLevels(markingCriterias.criterias)}
            </table>
          ) : (
            <div className="parent-container">
              {markingCriterias.strengthsTargetsCriterias.map((criteria) => (
                <div className="st-table">
                  <div className="st-title">{criteria.title}</div>
                  <div className="option-container">
                    <div className={`${onMobileView ? 'st-sub-title-sm' : 'st-sub-title'}`}>
                       Strengths
                    </div>
                    <div className={`${onMobileView ? 'st-sub-title-sm' : 'st-sub-title'}`}>
                       Targets
                    </div>
                  </div>
                  {Array.from({
                    length: Math.max(
                      criteria.strengths.length,
                      criteria.targets.length
                    ),
                  }).map((_, index) => (
                    <div className="option-container" key={index}>
                      <div className="data" style={{ width: '50%'}}>
                        {index < criteria.strengths.length && (
                          <div className="content">
                            {criteria.strengths[index]}
                          </div>
                        )}
                      </div>
                      <div className="data" style={{ width: '50%'}}>
                        {index < criteria.targets.length && (
                          <div className="content">
                            {criteria.targets[index]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
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
    return <td className="mc-title column-width">{criteria.title}</td>;
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
        <td className="mk-column column-width">
          <div className="mk-heading">{item.levelName}</div>
          <div className="content">{item.levelDescription}</div>
        </td>
      );
    } else {
      return <td className="mk-empty-column column-width"></td>;
    }
  });
};
