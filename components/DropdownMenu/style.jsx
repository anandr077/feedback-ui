import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import styled, { css } from 'styled-components';
import { IbmplexsansSemiBoldShark20px } from '../../styledMixins';

export const MarkingOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 12px;
  width: 100%;

  .MuiListItemText-root {
    margin: 0;
  }
`;

export const IbmplexsansNormalShark16px = css`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0px 0px 0px 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: bold;
  font-style: normal;
  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;

export const StyledHeading = styled.h2`
  color: var(--black);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xxs);
  font-weight: 500;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 13px 20px 13px 20px;
  border-radius: 12px;
  border: 1px;

  position: relative;
  padding-top: 1.5px !important;
  padding-bottom: 1.5px !important;
  background-color: var(--white);
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
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  .text-container {
    display: inline-block;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FlexContainerSmall = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  max-width: 250px;
  .text-container {
    display: inline-block;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-size: 16px;
    color: ${({ id }) => id === 'no_marking_criteria' && '#918b97'};
    color: ${({ id }) => id === 'no_comment_criteria' && '#918b97'};
  }
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledListItemTextBold = styled(ListItemText)`
  ${IbmplexsansSemiBoldShark20px}
  position: relative;
  flex: 1;

  letter-spacing: 0;
  line-height: normal;
  border-radius: 50%;

  .MuiTypography-root {
    ${IbmplexsansSemiBoldShark20px}
    font-size: 14px;
    font-weight: bold;
  }

  .MuiTypography-root.MuiListItemText-secondary {
    font-weight: normal;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    word-break: break-word;
    white-space: normal;
  }
`;

export const Frame12841 = styled.img`
  position: relative;
  min-width: 26px;
  height: 26px;
`;

export const StyledTextField = styled(TextField)`
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 10px;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 10px 12px 10px 12px;
  border-radius: 12px;
  gap: 10px;
  background: #7200e0;
`;
