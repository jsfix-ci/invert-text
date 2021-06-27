const { invertPhrase } = require('../src/invert');

describe('invertPhrase utility', () => {
  test('invertPhrase utility inverts all test phrases correctly', () => {
    const phrases = [
      'the quick brown fox jumps over the lazy dog.',
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
      '9876543210',
      'Random %^&* Characters !@#$ in ()_+,./- between',
      '(parentheses) [brackets] {braces}'
    ];
    const expected = [
      '.ƃop ʎzɐʅ ǝɥʇ ɹǝʌo sdɯnɾ xoⅎ uʍoɹq ʞɔᴉnb ǝɥʇ',
      '.⅁Oᗡ ⅄Z∀⅂ ƎHꓕ ꓤƎɅO SԀWՈᒋ XOᖵ NMOꓤꓭ ꓘϽIՈꝹ ƎHꓕ',
      '0⇂↊↋h59𝘓86',
      'uǝǝʍʇǝq -/.,+_() uᴉ $#@! sɹǝʇɔɐɹɐɥϽ *&^% ɯopuɐꓤ',
      '{sǝɔɐɹq} [sʇǝʞɔɐɹq] (sǝsǝɥʇuǝɹɐd)'
    ];

    const inverted = phrases.map(p => invertPhrase(p));
    expect(inverted).toEqual(expected);
  });
});
