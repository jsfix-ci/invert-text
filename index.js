#!/usr/bin/env node

const { Command } = require('commander');
const { invertPhrase } = require('./src/invert');

const program = new Command();
const args = program
  .option('-p, --phrases [phrases...]', 'specify input words/phrases to be inverted')
  .version('0.1.0', '-v, --version', 'output the current version')
  .parse(process.argv)
  .opts();

if (args.phrases && args.phrases.length) {
  args.phrases.forEach(p => console.log('\x1b[35m%s\x1b[0m', invertPhrase(p)));
} else {
  program.help({ error: true }); // Display help instructions
}
