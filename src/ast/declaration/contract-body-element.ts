import { BaseNodeUnion } from '../base';
import { ContractBodyElementContext, SolidityParserVisitor } from '../../grammar';
import {
  ConstructorDefinition,
  FallbackFunctionDefinition,
  FunctionDefinition,
  ReceiveFunctionDefinition,
} from './function-definition';
import { ModifierDefinition } from './modifier-definition';
import { StructDefinition } from './struct-definition';
import { EnumDefinition } from './enum-definition';
import { UserDefinedValueTypeDefinition } from './user-defined-value-type-definition';
import { StateVariableDeclaration } from './variable-declaration';
import { EventDefinition } from './event-definition';
import { ErrorDefinition } from './error-definition';
import { UsingDirective } from '../meta';

export class ContractBodyElement extends BaseNodeUnion<
  | ConstructorDefinition
  | FunctionDefinition
  | ModifierDefinition
  | FallbackFunctionDefinition
  | ReceiveFunctionDefinition
  | StructDefinition
  | EnumDefinition
  | UserDefinedValueTypeDefinition
  | StateVariableDeclaration
  | EventDefinition
  | ErrorDefinition
  | UsingDirective
> {
  // type = 'ContractBodyElement';
  constructor(ctx: ContractBodyElementContext, visitor: SolidityParserVisitor<any>) {
    super(
      ctx,
      [
        ctx.constructorDefinition(),
        ctx.functionDefinition(),
        ctx.modifierDefinition(),
        ctx.fallbackFunctionDefinition(),
        ctx.receiveFunctionDefinition(),
        ctx.structDefinition(),
        ctx.enumDefinition(),
        ctx.userDefinedValueTypeDefinition(),
        ctx.stateVariableDeclaration(),
        ctx.stateVariableDeclaration(),
        ctx.eventDefinition(),
        ctx.errorDefinition(),
        ctx.usingDirective(),
      ],
      visitor,
    );
  }
}
