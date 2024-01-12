import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const FeedbackContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const TextBox = styled.div`
  margin-top: 15px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  padding: 0 20px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const HiddenInputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  padding: 15px 0;
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

export const OverAllCommentTitle = styled.h2`
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;
