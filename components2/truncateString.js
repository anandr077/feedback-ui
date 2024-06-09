export function truncateString(str, maxLength, ending = '...'){
    if (maxLength && str.length > maxLength) {
        return str.slice(0, maxLength - ending.length) + ending;
      } else {
        return str;
    }
}