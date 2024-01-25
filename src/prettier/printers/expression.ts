import * as ast from '../../ast';
import { BasePrinter, Doc, PrintFunc } from './base';

export class PrinterExpression
  extends BasePrinter
  implements Record<`print${ast.ExpressionNodeType}`, PrintFunc<any>>
{
  printAssignOp: PrintFunc<ast.AssignOp> = ({ node }) => node.name;
  printBinaryOperation: PrintFunc<ast.BinaryOperation> = ({ node, path, print }) => {
    const parts: Doc[] = [];
    if (node.left !== null) parts.push(path.call(print, 'left'));
    if (node.operator !== null) parts.push(this.space, node.operator);
    if (node.right !== null) parts.push(this.builders.line, path.call(print, 'right'));
    return this.builders.group(parts);
  };
  printAssignment: PrintFunc<ast.Assignment> = this.printBinaryOperation as any;
  printBooleanLiteral: PrintFunc<ast.BooleanLiteral> = ({ node }) =>
    node.value === true ? 'true' : 'false';
  printConditional: PrintFunc<ast.Conditional> = ({ path, print }) => {
    const groupId = Symbol('conditional');
    const breakLine = this.builders.indentIfBreak(this.builders.line, { groupId });
    return this.builders.group(
      [
        path.call(print, 'condition'),
        breakLine,
        '?',
        breakLine,
        path.call(print, 'trueExpression'),
        breakLine,
        ':',
        breakLine,
        path.call(print, 'falseExpression'),
      ],
      { id: groupId },
    );
  };
  printFunctionCallOptions: PrintFunc<ast.FunctionCallOptions> = ({ path, print }) => {
    return [
      path.call(print, 'expression'),
      this.block(this.paramater(path.map(print, 'arguments'))),
    ];
  };
  printFunctionCall: PrintFunc<ast.FunctionCall> = ({ path, print }) => {
    return [
      path.call(print, 'expression'),
      this.tuple(this.paramater(path.map(print, 'arguments'))),
    ];
  };
  printHexStringLiteral: PrintFunc<ast.HexStringLiteral> = ({ node }) => [
    'hex',
    this.literal(node.value),
  ];
  printIdentifier: PrintFunc<ast.Identifier> = ({ node }) => node.name;
  printIndexAccess: PrintFunc<ast.IndexAccess> = ({ node, path, print }) => {
    return [
      path.call(print, 'baseExpression'),
      this.list(node.indexExpression ? path.call(print, 'indexExpression') : ''),
    ];
  };
  printIndexRangeAccess: PrintFunc<ast.IndexRangeAccess> = ({ path, print }) => {
    const inner = [path.call(print, 'startExpression'), ':', path.call(print, 'endExpression')];
    return [path.call(print, 'baseExpression'), this.list(inner)];
  };
  printMemberAccess: PrintFunc<ast.MemberAccess> = ({ node, path, print }) => {
    return [path.call(print, 'expression'), this.dot, node.memberName!];
  };
  printMetaType: PrintFunc<ast.MetaType> = ({ path, print }) => {
    return ['type', '(', path.call(print, 'typeName'), ')'];
  };
  printNamedArgument: PrintFunc<ast.NamedArgument> = ({ path, print }) => {
    return [path.call(print, 'name'), ':', this.space, path.call(print, 'expression')];
  };
  printNewExpr: PrintFunc<ast.NewExpr> = ({ path, print }) => {
    return ['new', this.space, path.call(print, 'typeName')];
  };
  printNumberLiteral: PrintFunc<ast.NumberLiteral> = ({ node }) => {
    if (node.hexValue !== null) return node.hexValue;
    const parts = [node.value!];
    if (node.subDenomination !== null) parts.push(node.subDenomination);
    return parts;
  };
  printPayableConversion: PrintFunc<ast.PayableConversion> = ({ path, print }) => {
    return ['payable', this.tuple(this.paramater(path.map(print, 'arguments')))];
  };
  printStringLiteral: PrintFunc<ast.StringLiteral> = ({ node }) => this.literal(node.value);
  printUnaryOperation: PrintFunc<ast.UnaryOperation> = ({ node, path, print }) => {
    const parts: Doc[] = [];
    if (node.left !== null) parts.push(path.call(print, 'left'));
    if (node.operator !== null) parts.push(node.operator);
    if (node.right !== null) parts.push(path.call(print, 'right'));
    return parts;
  };
  printUnicodeStringLiteral: PrintFunc<ast.UnicodeStringLiteral> = ({ node }) => [
    'unicode',
    this.literal(node.value),
  ];
  printUserDefinableOperator: PrintFunc<ast.UserDefinableOperator> = ({ node }) => node.name;
}
