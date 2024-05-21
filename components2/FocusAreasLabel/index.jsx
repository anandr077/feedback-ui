import React, { useState } from 'react';
import {
  FocusAreasLabelContainer,
  OptionContainer,
  FocusAreaColorBox,
  Ellipse141,
  Label
} from './style';
import style from './style.module.css';
import CheckboxBordered from '../../components/CheckboxBordered';

const FocusAreasLabel = ({
  handleCheckboxChange,
  groupedFocusAreaIds,
  serialNumber,
  focusAreas,
}) => {
  const [selectedFocusAreaIds, setSelectedFocusAreaIds] = useState(
    groupedFocusAreaIds?.[serialNumber] || []
  );

  const handleClick = (fa) => {
    const newSelectedFocusAreaIds = [...selectedFocusAreaIds]; // Create a copy of the state

    if (selectedFocusAreaIds.includes(fa.id)) {
      // Deselect if already selected
      const index = newSelectedFocusAreaIds.indexOf(fa.id);
      newSelectedFocusAreaIds.splice(index, 1);
    } else {
      // Select if not already selected
      newSelectedFocusAreaIds.push(fa.id);
    }

    setSelectedFocusAreaIds(newSelectedFocusAreaIds); // Update state with the modified selection
    handleCheckboxChange(serialNumber, newSelectedFocusAreaIds); // Pass updated selection to the provided function
  };

  if (focusAreas === null || focusAreas === undefined || focusAreas.length <= 0) {
    return <></>; 
  }

  const all = focusAreas?.map((fa, idx) => {
    return (
      <>
        <CheckboxBordered
          checked={isHighlighted(groupedFocusAreaIds, serialNumber, fa.id)}
          onChange={handleCheckboxChange(serialNumber, fa.id)}
        />
        <div className={style.mainFocusBox}>
          <div className={style.Ellipse141} style={{backgroundColor: fa.color}}></div>
          <label className={style.label}>{fa.title}</label>
        </div>
      </>

      // <div
      //   key={idx}
      //   onClick={() => {
      //       handleClick(fa);
      //   }}
      //   className={`${style.focusBox} ${
      //       isHighlighted(groupedFocusAreaIds, serialNumber, fa.id) ? style.highlighted : ''
      //     }`} 
      // >
      //   <div
      //     className={style.roundedColorBox}
      //     style={{ background: fa.color }}
      //   ></div>
      //   {fa.title}
      // </div>
    );
  });

  return <div className={style.focusAreaContainer}>{all}</div>;
};

const isHighlighted = (groupedFocusAreaIds, serialNumber, focusAreaId) => {
  return (
    !!groupedFocusAreaIds[serialNumber] &&
    groupedFocusAreaIds[serialNumber].includes(focusAreaId)
  );
};

export default FocusAreasLabel;
