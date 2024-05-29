import React, { useRef, useEffect, useState } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';

const FocusedInput = ({ id, placeholder }) => {
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
  line-height: normal;
  outline: none;
  transition: 0.15s;
  width: 100%;
  resize: none; 
  overflow-y: hidden;
  min-height: 33px;
  border-radius: 4px;
  border: 1px solid rgba(201, 198, 204, 1);
  padding: 8px;
  box-shadow: 0px 2.04px 2px 0px rgba(115, 115, 115, 0.25) inset;
`;
