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
  printAssignment: PrintFunc<ast.Assignment> = ({ node, path, print }) => {
    const parts: Doc[] = [];
    if (node.left !== null) parts.push(path.call(print, 'left'));
    if (node.operator !== null) parts.push(this.space, node.operator);
    if (node.right !== null) parts.push(this.builders.line, path.call(print, 'right'));
    return this.builders.group(parts);
  };
  printBooleanLiteral: PrintFunc<ast.BooleanLiteral> = ({ node }) =>
    node.value === true ? 'true' : 'false';
  printCallArgumentList: PrintFunc<ast.CallArgumentList> = ({ path, print, node }) => {
    if (node.namedArguments.length) {
      return this.tuple(
        this.block(this.paramater(path.map(print, 'namedArguments')), {
          empty: !node.namedArguments.length,
        }),
        { unGroup: true },
      );
    } else if (node.expressions.length) {
      return this.tuple(this.paramater(path.map(print, 'expressions')));
    }
    return this.tuple('');
  };
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
      this.block(this.paramater(path.map(print, 'namedArguments'))),
    ];
  };
  printFunctionCall: PrintFunc<ast.FunctionCall> = ({ path, print }) => {
    return [path.call(print, 'expression'), path.call(print, 'arguments')];
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
  printInlineArray: PrintFunc<ast.InlineArray> = ({ path, print }) => {
    return this.list(this.paramater(path.map(print, 'expressions')));
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
    if (node.subDenomination !== null) parts.push(this.space, node.subDenomination);
    return parts;
  };
  printPayableConversion: PrintFunc<ast.PayableConversion> = ({ path, print }) => {
    return ['payable', path.call(print, 'arguments')];
  };
  printStringLiteral: PrintFunc<ast.StringLiteral> = ({ node }) => this.literal(node.value);
  printTupleExpression: PrintFunc<ast.TupleExpression> = ({ path, print }) => {
    return this.tuple(this.paramater(path.map(print, 'expressions')));
  };
  printUnaryOperation: PrintFunc<ast.UnaryOperation> = ({ node, path, print }) => {
    const parts: Doc[] = [];
    if (node.left !== null) parts.push(path.call(print, 'left'));
    if (node.operator !== null) parts.push(node.operator);
    if (node.operator === 'delete') parts.push(this.space); // shit this
    if (node.right !== null) parts.push(path.call(print, 'right'));
    return this.space, parts;
  };
  printUnicodeStringLiteral: PrintFunc<ast.UnicodeStringLiteral> = ({ node }) => [
    'unicode',
    this.literal(node.value),
  ];
  printUserDefinableOperator: PrintFunc<ast.UserDefinableOperator> = ({ node }) => node.name;
}
