import * as ast from '../../ast';
import { type AstPath, type Doc, type ParserOptions, doc, util } from 'prettier';
import { SyntaxTokenType, SyntaxToken } from '../../parser';

export { Doc };

export type CommentToken = SyntaxToken & {
  placement: 'remaining' | 'ownLine' | 'endOfLine';
  leading: boolean;
  trailing: boolean;
  printed: boolean;
  nodeDescription: string;
};

export type WithComments<T extends ast.SyntaxNode = ast.SyntaxNode> = T & {
  comments?: CommentToken[];
};

export type PrintFunc<T extends ast.SyntaxNode = ast.SyntaxNode> = (arg: {
  node: WithComments<T>;
  path: AstPath<WithComments<T>>;
  options: ParserOptions<WithComments<T>>;
  print: (path: AstPath<WithComments | null>) => Doc;
  args?: any;
}) => Doc;

export const lineComments: SyntaxTokenType[] = [
  'LINE_COMMENT',
  'AssemblyBlockLINE_COMMENT',
  'YulLINE_COMMENT',
  'PragmaLINE_COMMENT',
];
export const blockComments: SyntaxTokenType[] = [
  'COMMENT',
  'AssemblyBlockCOMMENT',
  'YulCOMMENT',
  'PragmaCOMMENT',
];
export const comments: SyntaxTokenType[] = [...lineComments, ...blockComments];

export class BasePrinter {
  readonly space = ' ';
  readonly dot = '.';
  readonly comma = ',';
  readonly semi = ';';
  readonly quote = `"`;
  readonly singleQuote = `'`;
  readonly builders = doc.builders;

  constructor(
    public readonly options: ParserOptions<WithComments>,
    public readonly print: (path: AstPath<any>) => Doc,
  ) {}

  // The pangu space
  pangu = (path: AstPath<any>) => {
    return util.isNextLineEmpty(this.options.originalText, this.options.locEnd(path.node))
      ? this.builders.hardline
      : '';
  };

  // value => "value"
  literal = (value: Doc) => {
    return this.options.singleQuote
      ? [this.singleQuote, value, this.singleQuote]
      : [this.quote, value, this.quote];
  };
  // value = { value }
  block = (value: Doc, empty: boolean = false) => {
    if (empty) return ['{', '}'];
    const groupId = Symbol('block');
    const line = this.options.bracketSpacing ? this.builders.line : this.builders.softline;
    const beforeLine = this.builders.indentIfBreak(line, { groupId });
    const content = this.builders.indentIfBreak(value, { groupId });
    return this.builders.group(['{', beforeLine, content, line, '}'], { id: groupId });
  };
  // value[] => value1, value2, value3
  paramater = (value: Doc[], sep: Doc = [this.comma, this.builders.line]) => {
    return this.builders.join(sep, value);
  };
  // value => (value)
  tuple = (value: Doc, groupId: symbol = Symbol('tuple')) => {
    const content = this.builders.indentIfBreak(value, { groupId });
    const line = this.builders.softline;
    return this.builders.group(
      ['(', this.builders.indentIfBreak(line, { groupId }), content, line, ')'],
      { id: groupId },
    );
  };
  // value => [value]
  list = (value: Doc, groupId: symbol = Symbol('list')) => {
    const content = this.builders.indentIfBreak(value, { groupId });
    const line = this.builders.softline;
    return this.builders.group(
      ['[', this.builders.indentIfBreak(line, { groupId }), content, line, ']'],
      { id: groupId },
    );
  };
}
