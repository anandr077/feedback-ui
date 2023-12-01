import styled from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const InputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  height: auto;
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
    props.type === 'save' || props.type === 'edit'
      ? 'var(--light-mode-purple)'
      : 'red'};
  border-radius: 10px;
  border: 1px solid;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

export const OverAllCommentBox = styled.div`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
`;
