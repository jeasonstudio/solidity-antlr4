import { doc } from 'prettier';
import type { Printer } from 'prettier';
import { blockComments, comments, CommentToken } from './base';

export const isBlockComment: Printer<CommentToken>['isBlockComment'] = (node: any) => {
  return node?.type && blockComments.includes(node.type);
};

export const canAttachComment: Printer<CommentToken>['canAttachComment'] = (node: any) =>
  !!node?.type && !comments.includes(node.type);

// TODO: needs a comment parser
export const printComment: Printer<CommentToken>['printComment'] = (path, _options) => {
  const comment = path.node;
  if (!comment.text) return '';

  if (comment.text.startsWith('///')) {
    // means natspec format comment:
    // https://docs.soliditylang.org/en/v0.8.24/natspec-format.html#natspec
    const content = comment.text.replace('///', '').trim();
    return ['/// ', content];
  }

  if (comment.text.startsWith('//')) {
    const content = comment.text.replace('//', '').trim();
    return ['// ', content];
  }

  const isMultiline = comment.text.includes('\n');
  const multiline = isMultiline ? doc.builders.hardline : doc.builders.line;

  if (comment.text.startsWith('/**') && comment.text.endsWith('*/')) {
    const lines = comment.text
      .slice(3, -2)
      .split('\n')
      .map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('*')) {
          return trimmed.slice(1).trim();
        }
        return trimmed;
      })
      .filter(Boolean);

    return [
      '/**',
      multiline,
      doc.builders.join(
        multiline,
        lines.map((line) => [' * ', line]),
      ),
      multiline,
      ' */',
    ];
  }

  if (comment.text.startsWith('/*') && comment.text.endsWith('*/')) {
    const lines = comment.text
      .slice(2, -2)
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    return ['/*', multiline, doc.builders.join(multiline, lines), multiline, '*/'];
  }

  return comment.text;
};

// Prettier offers a clean way to define ignored properties.
const ignoredProperties = new Set(['location', 'range', 'comments']);
export const massageAstNode: Printer<CommentToken>['massageAstNode'] = () => {};
(<any>massageAstNode).ignoredProperties = ignoredProperties;

export const handleComments: Printer<CommentToken>['handleComments'] = {
  // ownLine: (commentNode, text, options, ast, isLastComment) => false,
  // endOfLine: (commentNode, text, options, ast, isLastComment) => false,
  // remaining: (commentNode, text, options, ast, isLastComment) => false,
};
