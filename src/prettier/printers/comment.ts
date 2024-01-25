import { Printer } from 'prettier';
import { SyntaxToken } from '../../parser';
import { blockComments, comments } from './base';

// TODO: https://docs.soliditylang.org/en/v0.8.23/natspec-format.html#natspec

export const isBlockComment: Printer<SyntaxToken>['isBlockComment'] = (node: any) =>
  node?.type && blockComments.includes(node.type);

export const canAttachComment: Printer<SyntaxToken>['canAttachComment'] = (node: any) =>
  !!node?.type && !comments.includes(node.type);

export const printComment: Printer<SyntaxToken>['printComment'] = (path, _options) => {
  return path.node.text!;
};
