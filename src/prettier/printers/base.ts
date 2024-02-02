import * as ast from '../../ast';
import type { AstPath, Doc, ParserOptions } from 'prettier';
import * as doc from 'prettier/doc';
import * as prettier from 'prettier/standalone';
import { SyntaxTokenType, SyntaxToken } from '../../parser';
import { printComment } from './comment';

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
    return (prettier as any).util.isNextLineEmpty(
      this.options.originalText,
      this.options.locEnd(path.node),
    )
      ? this.builders.hardline
      : '';
  };
  // value => "value"
  literal = (value: Doc) => {
    return this.options.singleQuote
      ? [this.singleQuote, value, this.singleQuote]
      : [this.quote, value, this.quote];
  };
  // value[] => value1, value2, value3
  paramater = (value: Doc[], sep: Doc = [this.comma, this.builders.line]) => {
    return this.builders.join(sep, value);
  };
  // value = { value }
  block = (
    value: Doc,
    options: {
      empty?: boolean;
      groupId?: symbol;
      shouldBreak?: boolean;
      unGroup?: boolean;
    } = {},
  ) => {
    const {
      empty = false,
      groupId = Symbol('block'),
      shouldBreak = false,
      unGroup = false,
    } = options;
    if (empty) {
      return unGroup ? '{}' : this.builders.group(['{', '}'], { id: groupId, shouldBreak });
    }
    const line = this.options.bracketSpacing ? this.builders.line : this.builders.softline;
    if (unGroup) return ['{', line, value, line, '}'];
    const beforeLine = this.builders.indentIfBreak(line, { groupId });
    const content = this.builders.indentIfBreak(value, { groupId });
    return this.builders.group(['{', beforeLine, content, line, '}'], { id: groupId, shouldBreak });
  };
  // value => (value)
  tuple = (
    value: Doc,
    options: {
      groupId?: symbol;
      shouldBreak?: boolean;
      unGroup?: boolean;
    } = {},
  ) => {
    const { groupId = Symbol('tuple'), shouldBreak = false, unGroup = false } = options;
    if (unGroup) return ['(', value, ')'];
    const content = this.builders.indentIfBreak(value, { groupId });
    const line = this.builders.softline;
    return this.builders.group(
      ['(', this.builders.indentIfBreak(line, { groupId }), content, line, ')'],
      { id: groupId, shouldBreak },
    );
  };
  // value => [value]
  list = (
    value: Doc,
    options: {
      groupId?: symbol;
      shouldBreak?: boolean;
      unGroup?: boolean;
    } = {},
  ) => {
    const { groupId = Symbol('list'), shouldBreak = false, unGroup = false } = options;
    if (unGroup) return ['[', value, ']'];
    const content = this.builders.indentIfBreak(value, { groupId });
    const line = this.builders.softline;
    return this.builders.group(
      ['[', this.builders.indentIfBreak(line, { groupId }), content, line, ']'],
      { id: groupId, shouldBreak },
    );
  };
  // patch unprinted comments
  comments = (p: AstPath<WithComments>) => {
    if (!p.node?.comments?.length) return '';
    const parts: Doc[] = [];
    p.map((commentPath) => {
      const comment = commentPath.node;
      if (!comment.trailing && !comment.leading && !comment.printed) {
        comment.printed = true;
        parts.push(printComment!(commentPath, this.options as any));
      }
    }, 'comments');
    return this.builders.join(this.builders.line, parts);
  };
}
