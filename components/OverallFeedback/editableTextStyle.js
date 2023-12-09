import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const EditTextContainer = styled.div`
  margin-top: 15px;
`;

export const HiddenInputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  height: auto !important;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 25px;
  font-weight: 400;
  font-style: normal;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const InputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  height: auto;
  margin-top: 10px;
  border: 1px solid var(--light-mode-purple);
  border-radius: 10px;
  min-height: 200px;
  outline: none;
  padding: 10px;
  resize: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Button = styled.button`
  ${feedbacksIbmplexsansNormalShark20px}
  width: fit-content;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.type === 'cancel' ? 'red' : 'var(--light-mode-purple)'};
  border-radius: 10px;
  border: 1px solid;
  color: white;
  margin-top: ${(props) => (props.type === 'addFeedback' ? '0' : '10px')};
  cursor: pointer;
`;

export const OverAllCommentBox = styled.div`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  margin-top: 10px;
`;
