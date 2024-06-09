import styled from 'styled-components';

export const TextFeedback = styled.textarea`
  min-height: 160px;
  width: 100%;
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.read ? '' : 'inset 0 2px 2px 0 rgba(115, 115, 115, 0.25)'};
  border: ${(props) => (props.read ? 'none' : 'solid 1px #c9c6cc')};
  padding: ${(props) => (props.read ? '' : '8px')};
  background-color: #fff;
  resize: none;
  outline: none;
  font-size: var(--font-size-l);
  line-height: 24px;
  font-weight: 400;
  font-family: var(--font-family-ibm_plex_sans);
  overflow: hidden;
  ::placeholder {
    color: rgba(145, 139, 151, 1);
  }
`;
