import styled from 'styled-components';
import {
  IbmplexsansNormalElectricViolet14px,
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';

export const MarkingCriteriaSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

export const FocusAreasFrame = styled.div`
  font-weight: 400;
  line-height: 26px;
  font-family: var(--font-family-ibm_plex_sans);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Frame1321 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  position: relative;
  background-color: #efeef1;
  border-radius: 24px;
  border: 1px solid #e6e6e6;
  height: 40px;
  box-sizing: border-box;
`;

export const Structure = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  font-family: var(--font-family-ibm_plex_sans);
  white-space: nowrap;
`;

export const Ellipse141 = styled.div`
  position: relative;
  min-width: 18px;
  height: 18px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const SmalllQuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 16px;
  border: 1px;
  gap: 23px;
`;

export const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

export const Frame12891 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const QuestionFrame2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid #a6a6a6;
`;

export const ShowFocusArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  flex-wrap: wrap;
  min-height: 56px;
  padding: 10px 16px 10px 16px;
  border-radius: 12px;
  border: 1px;
  gap: 8px;
  border: 1px solid #a6a6a6;
`;

export const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const DeleteButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  border: 1px 0px 0px 0px;
  gap: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #7200e0;
`;

export const InputQuestion = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export const Label = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #56515b;
`;

export const QuestionInputEditable = styled.textarea`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  // color: #959595;
`;
export const MarkingCriteriaAndListFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MarkingCriteriaFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const MarkingCriteriaList = styled.a`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: left;
  color: var(--light-mode-purple);
  cursor: pointer;
`;
export const Preview = styled.div`
  background: #7200e0;
  padding: 8px;
  border-radius: 10px 12px;
  cursor: pointer;
`;
export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;
export const BinImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const QuestionMarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const PreviewIcon = styled.img`
  width: 32px;
  height: 32px;
`;
