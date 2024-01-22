import * as ast from '../../ast';
import { PrintFunc, h } from './base';

export class PrinterExpression implements Record<`print${ast.ExpressionNodeType}`, PrintFunc<any>> {
  printAssignOp: PrintFunc<ast.AssignOp>;
  printAssignment: PrintFunc<ast.Assignment>;
  printBinaryOperation: PrintFunc<ast.BinaryOperation>;
  printBooleanLiteral: PrintFunc<ast.BooleanLiteral>;
  printConditional: PrintFunc<ast.Conditional>;
  printFunctionCallOptions: PrintFunc<ast.FunctionCallOptions>;
  printFunctionCall: PrintFunc<ast.FunctionCall>;
  printHexStringLiteral: PrintFunc<ast.HexStringLiteral>;
  printIdentifier: PrintFunc<ast.Identifier> = ({ node }) => node.name;
  printIndexAccess: PrintFunc<ast.IndexAccess>;
  printIndexRangeAccess: PrintFunc<ast.IndexRangeAccess>;
  printMemberAccess: PrintFunc<ast.MemberAccess>;
  printNamedArgument: PrintFunc<ast.NamedArgument>;
  printNewExpr: PrintFunc<ast.NewExpr>;
  printNumberLiteral: PrintFunc<ast.NumberLiteral>;
  printPayableConversion: PrintFunc<ast.PayableConversion>;
  printStringLiteral: PrintFunc<ast.StringLiteral> = ({ node, options }) => {
    return options.singleQuote
      ? [h.singleQuote, node.value, h.singleQuote]
      : [h.quote, node.value, h.quote];
  };
  printUnaryOperation: PrintFunc<ast.UnaryOperation>;
  printUnicodeStringLiteral: PrintFunc<ast.UnicodeStringLiteral>;
  printUserDefinableOperator: PrintFunc<ast.UserDefinableOperator>;
}
