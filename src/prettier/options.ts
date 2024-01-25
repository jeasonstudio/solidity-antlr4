import type { Plugin } from 'prettier';

const category = 'Solidity';

export const options: Plugin['options'] = {
  printWidth: {
    category,
    type: 'int',
    default: 80,
    description: 'The line length where Prettier will try wrap.',
    range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
  },
  tabWidth: {
    category,
    type: 'int',
    default: 2,
    description: 'Number of spaces per indentation level.',
    range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 },
  },
  useTabs: {
    category,
    type: 'boolean',
    default: false,
    description: 'Indent with tabs instead of spaces.',
  },
  singleQuote: {
    category,
    type: 'boolean',
    default: false,
    description: 'Use single quotes instead of double quotes.',
  },
  bracketSpacing: {
    category: 'common',
    type: 'boolean',
    default: true,
    description: 'Print spaces between brackets.',
    oppositeDescription: 'Do not print spaces between brackets.',
  },
  endOfLine: {
    category,
    type: 'choice',
    default: 'lf',
    description: 'Which end of line characters to apply.',
    choices: [
      {
        value: 'lf',
        description: 'Line Feed only (\\n), common on Linux and macOS as well as inside git repos',
      },
      {
        value: 'crlf',
        description: 'Carriage Return + Line Feed characters (\\r\\n), common on Windows',
      },
      {
        value: 'cr',
        description: 'Carriage Return character only (\\r), used very rarely',
      },
      {
        value: 'auto',
        description: `Maintain existing (mixed values within one file are normalised by looking at what's used after the first line)`,
      },
    ],
  },
};

export const defaultOptions: Plugin['defaultOptions'] = Object.fromEntries(
  Object.entries(options).map(([k, v]) => [k, v.default]),
);
