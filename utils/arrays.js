export const isNullOrEmpty = (arr) => {
  if (arr === undefined) {
    return true;
  }
  if (arr === null) {
    return true;
  }
  return arr.length === 0;
};

export function arrayFromArrayOfObject(givenArray, key) {
  let arr = [];
  givenArray.map((obj) => {
    if (!arr.includes(obj[key])) {
      arr.push(obj[key]);
    }
  });
  return arr;
}
