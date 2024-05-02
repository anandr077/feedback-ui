import React, { useRef, useEffect, useState } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';

const FocusedInput = ({ id, placeholder, onKeyPress }) => {
  const inputRef = useRef(null);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = () => {
    if (inputRef.current) {
      const textareaLineHeight = 20; 
      const previousRows = inputRef.current.rows;
      inputRef.current.rows = 1; 
      const currentRows = Math.ceil(inputRef.current.scrollHeight / textareaLineHeight);
      inputRef.current.rows = currentRows;
      setRows(currentRows);
      if (currentRows !== previousRows) {
        inputRef.current.style.height = `${currentRows * textareaLineHeight}px`;
      }
    }
  };

  return (
    <TextInput
      placeholder={placeholder}
      id={id}
      type="text"
      onKeyPress={onKeyPress}
      ref={inputRef}
      rows={rows}
      onChange={handleChange}
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
  padding: 0px 12px;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  width: 100%;
  min-height: 30px;
  resize: none; 
  overflow-y: hidden;
`;
