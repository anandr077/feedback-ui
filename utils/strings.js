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
