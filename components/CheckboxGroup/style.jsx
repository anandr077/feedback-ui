import styled from 'styled-components';
import {
  IbmplexsansNormalShark20px,
  IbmplexsansNormalShark16px,
} from '../../styledMixins';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 6px;
  width: 250px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;

export const StyledBox = styled(Box)`
  justify-content: flex-end;
  max-width: 200px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.backgroundColor || 'var(--white)'};
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;

export const FlexContainer = styled('div')`
  .text-container {
    display: inline-block;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 100%;
  margin: 0;
  && {
    padding: 3px 10px 3px 10px;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  .MuiTypography-root {
    color: ${(props) => props.textColor || 'var(--text)'};
    white-space: normal;
  }
  .MuiButtonBase-root {
    padding: 0px;
  }
`;
export const StyledListSubheader = styled(ListSubheader)`
  ${IbmplexsansNormalShark20px}
  position: relative;
  margin-top: -1px;
  letter-spacing: 0;
`;

export const CheckboxContainer = styled.div``;

export const CheckBoxText = styled.div`
  ${IbmplexsansNormalShark20px}
  letter-spacing: 0;
  line-height: normal;
`;
export const Ellipse141 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const CreateNew = styled.div`
  ${IbmplexsansNormalShark16px}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 30px;
  background: #7200e0;
  border: 1px solid #7200e0;
  border-radius: 30px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  margin: 10px;
`;
export const FocusAreadiv = styled.div`
  display: flex;
  padding: 0px 20px 0px 0px;
`;

export const Iconcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const StyledDeleteButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin: 0;
  color: #979797;
`;
