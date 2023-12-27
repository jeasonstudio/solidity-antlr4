import { BaseNode } from '../base';
import { YulFunctionCallContext, SolidityParserVisitor } from '../../antlr4';
import { YulExpression } from './yul-expression';

type YulEVMBuiltIn =
  | 'stop'
  | 'add'
  | 'sub'
  | 'mul'
  | 'div'
  | 'sdiv'
  | 'mod'
  | 'smod'
  | 'exp'
  | 'not'
  | 'lt'
  | 'gt'
  | 'slt'
  | 'sgt'
  | 'eq'
  | 'iszero'
  | 'and'
  | 'or'
  | 'xor'
  | 'byte'
  | 'shl'
  | 'shr'
  | 'sar'
  | 'addmod'
  | 'mulmod'
  | 'signextend'
  | 'keccak256'
  | 'pop'
  | 'mload'
  | 'mstore'
  | 'mstore8'
  | 'sload'
  | 'sstore'
  | 'msize'
  | 'gas'
  | 'address'
  | 'balance'
  | 'selfbalance'
  | 'caller'
  | 'callvalue'
  | 'calldataload'
  | 'calldatasize'
  | 'calldatacopy'
  | 'extcodesize'
  | 'extcodecopy'
  | 'returndatasize'
  | 'returndatacopy'
  | 'extcodehash'
  | 'create'
  | 'create2'
  | 'call'
  | 'callcode'
  | 'delegatecall'
  | 'staticcall'
  | 'return'
  | 'revert'
  | 'selfdestruct'
  | 'invalid'
  | 'log0'
  | 'log1'
  | 'log2'
  | 'log3'
  | 'log4'
  | 'chainid'
  | 'origin'
  | 'gasprice'
  | 'blockhash'
  | 'coinbase'
  | 'timestamp'
  | 'number'
  | 'difficulty'
  | 'prevrandao'
  | 'gaslimit'
  | 'basefee';

export class YulFunctionCall extends BaseNode {
  type = 'YulFunctionCall' as const;
  identifier: string | YulEVMBuiltIn;
  expressions: YulExpression[] = [];
  constructor(ctx: YulFunctionCallContext, visitor: SolidityParserVisitor<any>) {
    super(ctx, visitor);
    this.identifier = (ctx.YulEVMBuiltin() || ctx.YulIdentifier())!.getText();
    this.expressions = ctx.yulExpression().map((e) => e.accept(visitor));
  }
}
