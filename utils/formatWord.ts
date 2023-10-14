export function formatWord(word: string): string {
  word = word.toLowerCase();
  word = word.replace(/[-_]/g, ' ');
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}
