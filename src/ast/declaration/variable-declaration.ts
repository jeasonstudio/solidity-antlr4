import { BaseNode } from '../base';
import {
  VariableDeclarationContext,
  SolidityParserVisitor,
  ParameterDeclarationContext,
  StateVariableDeclarationContext,
  ConstantVariableDeclarationContext,
  EventParameterContext,
  ErrorParameterContext,
} from '../../grammar';
import { Identifier } from '../expression';
import { DataLocation } from '../meta';
import { TypeName } from '../type';
import { Expression } from '../expression';
import { OverrideSpecifier } from '../meta';

export class VariableDeclaration extends BaseNode {
  type = 'VariableDeclaration';
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

  constructor(
    ctx:
      | VariableDeclarationContext
      | ParameterDeclarationContext
      | StateVariableDeclarationContext
      | ConstantVariableDeclarationContext
      | ErrorParameterContext
      | EventParameterContext,
    visitor: SolidityParserVisitor<any>,
  ) {
    super(ctx, visitor);

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

export class ParameterDeclaration extends VariableDeclaration {
  type = 'ParameterDeclaration';
}

export class StateVariableDeclaration extends VariableDeclaration {
  type = 'StateVariableDeclaration';
}

export class ConstantVariableDeclaration extends VariableDeclaration {
  type = 'ConstantVariableDeclaration';
}

export class ErrorParameter extends VariableDeclaration {
  type = 'ErrorParameter';
}

export class EventParameter extends VariableDeclaration {
  type = 'EventParameter';
}
