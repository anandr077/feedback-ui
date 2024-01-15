import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 40px 48px;
`;

export const NonEditFeedbackContainer = styled.div`
  display: block;
  width: calc(100% - 96px);
  margin: 20px auto 40px;
  padding-top: 20px;
  border-top: 1px solid #F1E6FC;
`;

export const OverAllCommentTitle = styled.h2`
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HiddenInputBox = styled.textarea`
  display: block;
  width: 100%;
  font-family: var(--font-family-ibm_plex_sans);
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-m);
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  height: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
