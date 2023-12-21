import { BaseNodeUnion } from './base';
import {
  VariableDeclarationContext,
  SolidityParserVisitor,
  ParameterDeclarationContext,
  StateVariableDeclarationContext,
  ConstantVariableDeclarationContext,
  EventParameterContext,
  ErrorParameterContext,
} from '../grammar';
import { Identifier } from './identifier';
import { DataLocation } from './data-location';
import { TypeName } from './type-name';
import { Expression } from './expression';
import { OverrideSpecifier } from './override-specifier';
import type { ParameterDeclaration } from './parameter-declaration';
import type { StateVariableDeclaration } from './state-variable-declaration';
import type { ConstantVariableDeclaration } from './constant-variable-declaration';
import type { ErrorParameter } from './error-parameter';
import type { EventParameter } from './event-parameter';

export class VariableDeclaration extends BaseNodeUnion<
  | VariableDeclaration
  | ParameterDeclaration
  | StateVariableDeclaration
  | ConstantVariableDeclaration
  | ErrorParameter
  | EventParameter
> {
  // type = 'VariableDeclaration';
  name: Identifier | null = null;
  typeName: TypeName;
  dataLocation: DataLocation | null = null;

  stateVariable: boolean = false;
  public: boolean = false;
  private: boolean = false;
  internal: boolean = false;
  constant: boolean = false;
  immutable: boolean = false;
  indexed: boolean = false;

  override: OverrideSpecifier | null = null;
  expression: Expression | null = null;

  public constructor(
    ctx:
      | VariableDeclarationContext
      | ParameterDeclarationContext
      | StateVariableDeclarationContext
      | ConstantVariableDeclarationContext
      | ErrorParameterContext
      | EventParameterContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, [], visitor);

    if (ctx instanceof VariableDeclarationContext) {
      this.type = 'VariableDeclaration';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
      this.dataLocation = ctx.dataLocation()?.accept(visitor);
      this.stateVariable = false;
      this.constant = false;
      this.indexed = false;
    } else if (ctx instanceof ParameterDeclarationContext) {
      this.type = 'ParameterDeclaration';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
      this.dataLocation = ctx.dataLocation()?.accept(visitor);
    } else if (ctx instanceof StateVariableDeclarationContext) {
      this.type = 'StateVariableDeclaration';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
      this.stateVariable = true;
      this.public = !!ctx.Public().length;
      this.private = !!ctx.Private().length;
      this.internal = !!ctx.Internal().length;
      this.constant = !!ctx.Constant().length;
      this.immutable = !!ctx.Immutable().length;
      this.override = ctx.overrideSpecifier(0)?.accept(visitor) ?? null;
      this.expression = ctx.expression()?.accept(visitor) ?? null;
    } else if (ctx instanceof ConstantVariableDeclarationContext) {
      this.type = 'ConstantVariableDeclaration';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
      this.constant = true;
      this.expression = ctx.expression().accept(visitor);
    } else if (ctx instanceof ErrorParameterContext) {
      this.type = 'ErrorParameter';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
    } else if (ctx instanceof EventParameterContext) {
      this.type = 'EventParameter';
      this.name = ctx.identifier()?.accept(visitor) ?? null;
      this.typeName = ctx.typeName().accept(visitor);
      this.indexed = !!ctx.Indexed();
    } else {
      this.type = 'Unknown';
    }
  }
}
