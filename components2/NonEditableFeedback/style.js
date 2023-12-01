import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';


export const FeedbackContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  padding: 20px;
  height: auto;
`;

export const TextBox = styled.div`
  height: auto;
  max-height: 200px;
  overflow-y: scroll;
  margin-top: 10px;

  ::-webkit-scrollbar {
    width: 8px; 
  }
`;

export const Text = styled.p`
 color: var(--text);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
  font-family: var(--font-family-ibm_plex_sans);
  line-height: 23px;
`;

export const OverAllCommentTitle = styled.h2`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 18px;
`;