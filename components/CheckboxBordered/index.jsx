import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: var(--light-mode-purple);
    padding: 5px;
    border-radius: 50%;

    &.Mui-checked {
      color: var(--light-mode-purple);
      background-color: var(--light-mode-purple);
      border-radius: 50%;
    }
    &.Mui-checked:not(:hover) {
      color: var(--light-mode-purple);
      background-color: #ffffff;
    }
    &:hover:not(.Mui-disabled) {
      background-color: rgba(0, 0, 0, 0.04) !important;
    }
    & .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium {
      font-size: 1.2rem;
    }
    & .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium path {
      fill: var(--light-mode-purple);
    }
  }
`;

export default function CheckboxBordered(props) {
  return <StyledCheckbox {...props} />;
}
