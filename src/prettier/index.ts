import type { SupportLanguage, Parser, Printer, Plugin } from 'prettier';
import {
  SolidityParser,
  SolidityLexer,
  CommonTokenStream,
  CharStream,
  ParserRuleContext,
} from '../antlr4';

export const languages: SupportLanguage[] = [
  {
    name: 'Solidity',
    tmScope: 'source.solidity',
    extensions: ['.sol'],
    parsers: ['solidity-antlr4'],
    vscodeLanguageIds: ['solidity'],
  },
];

const getParseTree = (source: string) => {
  const input = new CharStream(source);
  const lexer = new SolidityLexer(input);
  const token = new CommonTokenStream(lexer);
  const parser = new SolidityParser(token);
  return parser;
};

const parse: Parser<ParserRuleContext>['parse'] = (source, _options) => {
  const parser = getParseTree(source);
  return parser.sourceUnit();
};

const hasPragma: Parser<ParserRuleContext>['hasPragma'] = (source) => {
  const parser = getParseTree(source);
  return parser.sourceUnit().pragmaDirective().length > 0;
};

export const parsers: Record<string, Parser<ParserRuleContext>> = {
  'solidity-antlr4': {
    astFormat: 'solidity-antlr4-ast',
    parse,
    locStart: (ctx) => ctx.start?.start ?? 0,
    locEnd: (ctx) => ctx.stop?.stop ?? ctx.start?.start ?? 0,
    hasPragma,
    // preprocess,
  },
};

export const printers: Record<string, Printer<ParserRuleContext>> = {
  'solidity-antlr4-ast': {
    print: (path, options, print, args) => {
      return path.node.getText();
    },
    // print,
    // embed,
    // preprocess,
    // getVisitorKeys,
    // insertPragma,
    // canAttachComment,
    // isBlockComment,
    // printComment,
    // getCommentChildNodes,
    // handleComments: {
    //   ownLine,
    //   endOfLine,
    //   remaining,
    // },
  },
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
