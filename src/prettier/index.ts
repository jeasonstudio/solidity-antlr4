import type { SupportLanguage, Parser, Printer, Plugin } from 'prettier';
import { PrettierParser } from './parser';
import { SyntaxNode } from '../ast';
import { PrettierPrinter } from './printer';

export const languages: SupportLanguage[] = [
  {
    name: 'Solidity',
    tmScope: 'source.solidity',
    extensions: ['.sol'],
    parsers: ['solidity-antlr4'],
    vscodeLanguageIds: ['solidity'],
  },
];

export const parsers: Record<string, Parser<SyntaxNode>> = {
  [PrettierParser.name]: new PrettierParser(),
};

export const printers: Record<string, Printer<SyntaxNode>> = {
  [PrettierPrinter.name]: new PrettierPrinter(),
};

export const defaultOptions = {
  tabWidth: 4,
};

export const plugin: Plugin = {
  languages,
  parsers,
  printers,
  defaultOptions,
};

export default plugin;
