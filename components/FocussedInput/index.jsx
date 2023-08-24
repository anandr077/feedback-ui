import React, { useRef, useEffect } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';

const FocusedInput = ({ id, placeholder, onKeyPress }) => {
  // Create a ref for the input element
  const inputRef = useRef(null);

  // Use the useEffect hook to set focus on the input element when the component is loaded
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <TextInput
      placeholder={placeholder}
      id={id}
      type="text"
      onKeyPress={onKeyPress}
      ref={inputRef}
    ></TextInput>
  );
};

export default FocusedInput;

export const feedbacksIbmplexsansNormalStack20px = css`
  color: var(--stack);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

const TextInput = styled.textarea`
  ${feedbacksIbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  width: 100%;
`;
