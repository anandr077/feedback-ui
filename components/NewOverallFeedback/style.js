import styled from 'styled-components';

export const OverallFeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextFeedback = styled.textarea`
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

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 32px;
  background: ${(props) => (props.disabled ? '#B2AEB7' : '#7200e0')};
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;


export const CheckedContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const CheckedContainerInput = styled.input`
  border: 1px solid var(--color-purple-300, #7200e0);
`;
export const CheckedContainerLable = styled.label`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: var(--color-neutral-400, #56515b);
`;
