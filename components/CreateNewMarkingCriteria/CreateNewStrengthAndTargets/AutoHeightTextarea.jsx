import React, { useEffect, useRef } from 'react'
import { TextArea } from './style';

const AutoHeightTextarea = ({ value, onChange, onKeyPress, placeholder }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      // Adjust height initially
      adjustHeight();

      // Adjust height on input change
      textarea.addEventListener('input', adjustHeight);

      // Cleanup event listener on component unmount
      return () => {
        textarea.removeEventListener('input', adjustHeight);
      };
    }
  }, [value]);

  return (
    <TextArea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
};

export default AutoHeightTextarea