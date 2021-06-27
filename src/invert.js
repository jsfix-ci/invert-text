const charMap = {
  A: '∀',
  B: 'ꓭ',
  C: 'Ͻ',
  D: 'ᗡ',
  E: 'Ǝ',
  F: 'ᖵ',
  G: '⅁',
  H: 'H',
  I: 'I',
  J: 'ᒋ',
  K: 'ꓘ',
  L: '⅂',
  M: 'W',
  N: 'N',
  O: 'O',
  P: 'Ԁ',
  Q: 'Ꝺ',
  R: 'ꓤ',
  S: 'S',
  T: 'ꓕ',
  U: 'Ո',
  V: 'Ʌ',
  W: 'M',
  X: 'X',
  Y: '⅄',
  Z: 'Z',
  a: 'ɐ',
  b: 'q',
  c: 'ɔ',
  d: 'p',
  e: 'ǝ',
  f: 'ⅎ',
  g: 'ƃ',
  h: 'ɥ',
  i: 'ᴉ',
  j: 'ɾ',
  k: 'ʞ',
  l: 'ʅ',
  m: 'ɯ',
  n: 'u',
  o: 'o',
  p: 'd',
  q: 'b',
  r: 'ɹ',
  s: 's',
  t: 'ʇ',
  u: 'n',
  v: 'ʌ',
  w: 'ʍ',
  x: 'x',
  y: 'ʎ',
  z: 'z',
  0: '0',
  1: '⇂',
  2: '↊',
  3: '↋',
  4: 'h',
  5: '5',
  6: '9',
  7: '𝘓',
  8: '8',
  9: '6',
  '(': ')',
  ')': '(',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{'
};

/**
 * Inverts a single phrase of text
 * @param {string} phrase - Input phrase to invert
 * @returns {string} Inverted phrase
 */
exports.invertPhrase = phrase => {
  let output = '';
  [...phrase].reverse().forEach(char => {
    output += charMap[char] || char;
  });
  return output;
};
