export function textAreaAutoResize(event, inputRef) {
  if (inputRef.current) {
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }
}


