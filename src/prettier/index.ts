import type { SupportLanguage, Parser, Printer, Plugin } from 'prettier';
import { PrettierParser } from './parser';
import { SyntaxNode } from '../ast';
import { PrettierPrinter } from './printer';
import { defaultOptions, options } from './options';

export const languages: SupportLanguage[] = [
  {
    name: 'Solidity',
    tmScope: 'source.solidity',
    extensions: ['.sol'],
    parsers: [PrettierParser.name],
    vscodeLanguageIds: ['solidity'],
  },
];

export const parsers: Record<string, Parser<SyntaxNode>> = {
  [PrettierParser.name]: new PrettierParser(),
};

export const printers: Record<string, Printer<any>> = {
  [PrettierPrinter.name]: new PrettierPrinter(),
};

export const plugin: Plugin = {
  languages,
  parsers,
  printers,
  options,
  defaultOptions,
};

export const parserName = PrettierParser.name;

export default plugin;
