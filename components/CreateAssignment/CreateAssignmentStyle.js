import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  gap: 30px;
  &.MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 765px) {
    gap: 20px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-left: 0px !important;
  margin-right: 0px !important;
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
  span {
    padding: 0px 5px 0px 0px !important;
  }
`;

// export const StyledFormControlLabel = styled(({ icon, ...props }) => (
//   <FormControlLabel {...props} />
// ))`
//   margin-left: 0px !important;
//   display: flex;
//   flex-direction: row;
//   align-items: center; /* Align items vertically in the center */

//   .MuiTypography-root {
//     ${IbmplexsansNormalShark20px}
//   }

//   .MuiRadio-root {
//     color: var(--light-mode-purple);
//   }

//   .MuiRadio-colorPrimary.Mui-checked .MuiSvgIcon-root {
//     color: var(--light-mode-purple);
//   }

//   span {
//     padding: 0px 5px 0px 0px !important;
//   }
// `;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  flex-direction: row;
`;

export const CheckBoxText = styled.span`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;
export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;

export const LableAndImgContainer = styled.div`
  display: flex;
`;
