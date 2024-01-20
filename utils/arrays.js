export const isNullOrEmpty = (arr) => {
  if (arr === undefined) {
    return true;
  }
  if (arr === null) {
    return true;
  }
  return arr.length === 0;
};
