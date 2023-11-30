import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const TextFieldContainer = styled.div``;

export const FeedbackBox = styled.div`
  border-radius: 20px;
  position: relative;
  min-height: ${(props) => (props.showOverAllComment ? '250px' : 'auto')};
`;

export const TextBoxOpen = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  color: var(--chicago);
  padding: 5px;
  border-radius: 5px;
  cursor: auto;

  &:hover {
    background-color: var(--blue-chalk);
  }
`;

export const TextBoxContainer = styled.div``;

export const TextBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 7px;
`;

export const Button = styled.button`
  ${feedbacksIbmplexsansNormalShark20px}
  width: fit-content;
  padding: 8px 16px;
  background-color: ${(props) => props.type === "save" ?  'var(--light-mode-purple)' : 'red'};
  border-radius: 10px;
  border: 1px solid;
  color: white;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  ${feedbacksIbmplexsansNormalShark20px}
  width: 100%;
  border: ${(props) =>
    props.pageMode === 'REVISE' || props.pageMode === 'CLOSED'
      ? 'none'
      : '1px solid #7200e0'};
  height: 200px;
  resize: none;
  border-radius: 15px 15px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;
