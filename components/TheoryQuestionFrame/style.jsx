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
  margin-top: 16px;
  width: 100%;
  gap: 14px;
`;

export const FocusAreasFrame = styled.div`
  font-weight: 400;
  line-height: 26px;
  font-family: var(--font-family-ibm_plex_sans);
  display: flex;
  flex-direction: column;
  gap: 14px;
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
  height: 36px;
  box-sizing: border-box;
  margin: 8px;
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
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
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
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
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
  border: 1px solid;
  border-color: var(--text);
`;

export const ShowFocusArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  flex-wrap: wrap;
  min-height: 56px;
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
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  //left: 1em;
  padding: 0px 12px 0px 12px;

  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
`;

export const DeleteButton = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export const InputQuestion = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

export const Label = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
`;

export const MarkingCriteriaFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Preview = styled.div`
  background: #7200e0;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
`;
