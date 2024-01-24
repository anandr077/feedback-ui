export function arrayFromArrayOfObject(givenArray, key) {
  let arr = [];
  givenArray.map((obj) => {
    if (!arr.includes(obj[key])) {
      arr.push(obj[key]);
    }
  });
  return arr;
}
