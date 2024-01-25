import * as ast from '../../ast';
import { BasePrinter, PrintFunc, Doc } from './base';

export class PrinterYul
  extends BasePrinter
  implements Record<`print${ast.YulNodeType}`, PrintFunc<any>>
{
  printYulAssignment: PrintFunc<ast.YulAssignment> = ({ path, print }) => {
    return [
      this.paramater(path.map(print, 'paths')),
      this.space,
      ':=',
      this.space,
      path.call(print, 'expression'),
    ];
  };
  printYulBlock: PrintFunc<ast.YulBlock> = ({ node, path, print }) => {
    const statements = path.map((p) => [print(p), this.pangu(p)], 'statements');
    return this.block(
      this.builders.join(this.builders.line, statements),
      !node.statements.length,
    );
  };
  printYulBoolean: PrintFunc<ast.YulBoolean> = ({ node }) => node.name;
  printYulForStatement: PrintFunc<ast.YulForStatement> = ({ path, print }) => {
    const forConditions: Doc[] = [
      this.builders.line,
      path.call(print, 'initializationBlock'),
      this.builders.line,
      path.call(print, 'conditionExpression'),
      this.builders.line,
      path.call(print, 'loopBlock'),
    ];
    return this.builders.group([
      'for',
      this.builders.ifBreak(this.builders.indent(forConditions), forConditions),
      this.builders.line,
      path.call(print, 'body'),
    ]);
  };
  printYulFunctionCall: PrintFunc<ast.YulFunctionCall> = ({ path, print, node }) => {
    return [node.identifier, this.tuple(this.paramater(path.map(print, 'expressions')))];
  };
  printYulFunctionDefinition: PrintFunc<ast.YulFunctionDefinition> = ({ node, path, print }) => {
    const parts: Doc[] = [
      'function',
      this.space,
      node.name!,
      this.tuple(this.paramater(node.parameters)),
      this.space,
      '->',
      this.space,
      this.paramater(node.returnParameters),
      this.space,
      path.call(print, 'body'),
    ];
    return this.builders.group(parts);
  };
  printYulIfStatement: PrintFunc<ast.YulIfStatement> = ({ path, print }) => {
    return ['if', this.space, path.call(print, 'condition'), this.space, path.call(print, 'body')];
  };
  printYulLiteral: PrintFunc<ast.YulLiteral> = ({ node }) => node.name;
  printYulPath: PrintFunc<ast.YulPath> = ({ node }) => node.name;
  printYulStatement: PrintFunc<ast.YulStatement> = ({ node, path, print }) => {
    const parts: Doc[] = [];
    if (typeof node.expression === 'string') {
      parts.push(node.expression);
    } else if (node.expression !== null) {
      parts.push(path.call(print as any, 'expression'));
    }
    if (parts.length) parts.push(this.builders.breakParent);
    return this.builders.group(parts);
  };
  printYulSwitchCase: PrintFunc<ast.YulSwitchCase> = ({ path, print }) => {
    return ['case', this.space, path.call(print, 'case'), this.space, path.call(print, 'body')];
  };
  printYulSwitchStatement: PrintFunc<ast.YulSwitchStatement> = ({ node, path, print }) => {
    const parts: Doc[] = ['switch', this.space, path.call(print, 'expression')];
    path.map((p) => {
      parts.push(this.space, print(p));
    }, 'switchCases');
    if (node.default && node.body !== null) {
      parts.push(this.space, 'default', this.space, path.call(print, 'body'));
    }
    return this.builders.group(parts);
  };
  printYulVariableDeclaration: PrintFunc<ast.YulVariableDeclaration> = ({ node, path, print }) => {
    const parts: Doc[] = ['let'];
    parts.push(this.space, this.paramater(node.identifiers));
    if (node.expression !== null) {
      parts.push(this.space, ':=', this.space, path.call(print, 'expression'));
    }
    return this.builders.group(parts);
  };
}
