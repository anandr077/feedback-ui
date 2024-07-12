export const handleFocus = (event) => {
  const len = event.target.value.length;
  event.target.setSelectionRange(len, len);
};
