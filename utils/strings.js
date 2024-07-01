export function limitParagraph(text, size) {
  if (text?.length > size) {
    let shortText = text.substring(0, size);
    // Check if last character is a space, and remove it if not
    if (shortText[shortText.length - 1] !== ' ') {
      shortText = shortText.substring(0, shortText.lastIndexOf(' '));
    }
    return shortText + '...';
  } else {
    return text;
  }
}

export function getFirstFourWords(text) {
  const words = text?.split(' ');
  if (words?.length <= 4) {
    return text;
  } else {
    return words?.slice(0, 4).join(' ') + '...';
  }
}
export function capitalizeFirstLetter(sentence) {
  if (!sentence) return sentence;
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}


export const isStringNull = (String) => {
  if (String === null || String === undefined) {
    return true;
  }
  return false;
};
