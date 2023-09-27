import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  &.MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  .MuiTypography-root {
    ${IbmplexsansNormalShark20px}
  }
  .MuiRadio-root {
    color: var(--light-mode-purple);
  }
  .MuiRadio-colorPrimary.Mui-checked .MuiSvgIcon-root {
    color: var(--light-mode-purple);
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  flex-direction: row;
`;

export const CheckBoxText = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;
