## invert-text

A simple tool to generate inverted/upside-down/australiaized/upended/upturned text.
Generates inverted text using Unicode characters.

### Examples
| Original | Inverted |
|----------|----------|
|the quick brown fox jumps over the lazy dog.|.ƃop ʎzɐʅ ǝɥʇ ɹǝʌo sdɯnɾ xoⅎ uʍoɹq ʞɔᴉnb ǝɥʇ|
|THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.|.⅁Oᗡ ⅄Z∀⅂ ƎHꓕ ꓤƎɅO SԀWՈᒋ XOᖵ NMOꓤꓭ ꓘϽIՈꝹ ƎHꓕ|
|9876543210|0⇂↊↋h59𝘓86|
|Random %^&* Characters !@#$ in ()_+,./- between|uǝǝʍʇǝq -/.,+_() uᴉ $#@! sɹǝʇɔɐɹɐɥϽ *&^% ɯopuɐꓤ|
|(parentheses) [brackets] {braces}|{sǝɔɐɹq} [sʇǝʞɔɐɹq] (sǝsǝɥʇuǝɹɐd)|

### Installation
  * Install `Node.js` and `npm`
  * Install the `invert-text` CLI globally using `npm i -g invert-text`
    + Or, run it directly using `npx`

### Usage
Run the CLI tool with single/multiple phrases to be inverted:
```
$ invert-text -p this that "and something else"

sᴉɥʇ
ʇɐɥʇ
ǝsʅǝ ƃuᴉɥʇǝɯos puɐ
```

### ℹ️ &nbsp;Notes
  * Works mainly with __AlphaNumeric__ characters. All other characters are returned as-is.
  * Depending on the __font__ used, some of the inverted characters can look odd/incorrect when inverted.
