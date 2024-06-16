import React, { useState } from 'react';
import {
  Ellipse141,
  Label,
  MainFocusBox,
  FocusAreaContainer,
} from './style';

const FocusAreasLabel = ({
  handleCheckboxChange,
  groupedFocusAreaIds,
  serialNumber,
  focusAreas,
}) => {
  const [selectedFocusAreaIds, setSelectedFocusAreaIds] = useState(
    groupedFocusAreaIds?.[serialNumber] || []
  );

  if (
    focusAreas === null ||
    focusAreas === undefined ||
    focusAreas.length <= 0
  ) {
    return <></>;
  }

  const all = focusAreas?.map((fa, idx) => {
    return (
      <>
        <MainFocusBox
          selected={isHighlighted(groupedFocusAreaIds, serialNumber, fa.id)}
          onClick={() => handleCheckboxChange(serialNumber, fa.id)}
        >
          <Ellipse141 style={{ backgroundColor: fa.color }}></Ellipse141>
          <Label selected={isHighlighted(groupedFocusAreaIds, serialNumber, fa.id)}>{fa.title}</Label>
        </MainFocusBox>
      </>
    );
  });

  return <FocusAreaContainer>{all}</FocusAreaContainer>;
};

const isHighlighted = (groupedFocusAreaIds, serialNumber, focusAreaId) => {
  return (
    !!groupedFocusAreaIds[serialNumber] &&
    groupedFocusAreaIds[serialNumber].includes(focusAreaId)
  );
};

export default FocusAreasLabel;
