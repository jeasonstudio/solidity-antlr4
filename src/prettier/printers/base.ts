import { AstPath, Doc, ParserOptions, doc, util } from 'prettier';
import * as ast from '../../ast';

export type PrintFunc<T extends ast.SyntaxNode = ast.SyntaxNode> = (arg: {
  node: T;
  path: AstPath<T>;
  options: ParserOptions<T>;
  print: (path: AstPath<ast.SyntaxNode>) => Doc;
  args?: any;
}) => Doc;

const innerHelper = {
  singleQuote: `'`,
  quote: `"`,
  dot: '.',
  comma: ';',
  separator: ' ',
  paramSeparator: ', ',
  join2: (sep: Doc, list: (Doc | null)[]) =>
    doc.builders.join(sep, list.filter((item) => item !== null) as any),
  printArray: (inline: Doc[]) => {
    if (!inline.length) return '[]';
    return doc.builders.group([
      '[',
      doc.builders.indent([doc.builders.line, doc.builders.join([',', doc.builders.line], inline)]),
      doc.builders.line,
      ']',
    ]);
  },
};

export type PrinterHelper = typeof doc.builders &
  typeof doc.printer &
  typeof doc.utils &
  typeof util &
  typeof innerHelper;

export const helper: PrinterHelper = Object.assign(
  {},
  doc.builders,
  doc.printer,
  doc.utils,
  util,
  innerHelper,
);
export const h = helper;
