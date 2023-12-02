import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const FeedbackContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const TextBox = styled.div`
  height: auto;
  max-height: 200px;
  overflow-y: scroll;
  margin-top: 10px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  padding: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const HiddenInputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  height: auto;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  /* min-height: 200px; */
  max-height: 200px;
  outline: none;
  /* padding: 10px; */
  resize: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
`;

export const OverAllCommentTitle = styled.h2`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 18px;
`;
