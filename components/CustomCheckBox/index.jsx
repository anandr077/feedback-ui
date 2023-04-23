import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: #7200e0;
    padding: 5px;
    border-radius: 50%;
    
    &.Mui-checked {
      color: #7200e0;
      background-color: #7200e0;
      border-radius: 50%;
    }
    &.Mui-checked:not(:hover) {
      color: #7200e0;
      background-color: #FFFFFF;
    }
    &:hover:not(.Mui-disabled) {
      
      background-color: rgba(0, 0, 0, 0.04) !important;
    }
  }
`;

export default function CustomCheckbox(props) {
  return <StyledCheckbox {...props}  />;
}
