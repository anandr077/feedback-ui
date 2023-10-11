export function formatWord(word) {
  // Convert the entire word to lowercase
  word = word.toLowerCase();

  // Replace hyphens and underscores with spaces
  word = word.replace(/[-_]/g, ' ');

  // Capitalize the first letter
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}
