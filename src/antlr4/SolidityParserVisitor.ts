// Generated from grammar/SolidityParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SourceUnitContext } from "./SolidityParser.js";
import { PragmaDirectiveContext } from "./SolidityParser.js";
import { ImportDirectiveContext } from "./SolidityParser.js";
import { ImportAliasesContext } from "./SolidityParser.js";
import { PathContext } from "./SolidityParser.js";
import { SymbolAliasesContext } from "./SolidityParser.js";
import { ContractDefinitionContext } from "./SolidityParser.js";
import { InterfaceDefinitionContext } from "./SolidityParser.js";
import { LibraryDefinitionContext } from "./SolidityParser.js";
import { InheritanceSpecifierListContext } from "./SolidityParser.js";
import { InheritanceSpecifierContext } from "./SolidityParser.js";
import { ContractBodyElementContext } from "./SolidityParser.js";
import { NamedArgumentContext } from "./SolidityParser.js";
import { CallArgumentListContext } from "./SolidityParser.js";
import { IdentifierPathContext } from "./SolidityParser.js";
import { ModifierInvocationContext } from "./SolidityParser.js";
import { VisibilityContext } from "./SolidityParser.js";
import { ParameterListContext } from "./SolidityParser.js";
import { ParameterDeclarationContext } from "./SolidityParser.js";
import { ConstructorDefinitionContext } from "./SolidityParser.js";
import { StateMutabilityContext } from "./SolidityParser.js";
import { OverrideSpecifierContext } from "./SolidityParser.js";
import { FunctionDefinitionContext } from "./SolidityParser.js";
import { ModifierDefinitionContext } from "./SolidityParser.js";
import { FallbackFunctionDefinitionContext } from "./SolidityParser.js";
import { ReceiveFunctionDefinitionContext } from "./SolidityParser.js";
import { StructDefinitionContext } from "./SolidityParser.js";
import { StructMemberContext } from "./SolidityParser.js";
import { EnumDefinitionContext } from "./SolidityParser.js";
import { UserDefinedValueTypeDefinitionContext } from "./SolidityParser.js";
import { StateVariableDeclarationContext } from "./SolidityParser.js";
import { ConstantVariableDeclarationContext } from "./SolidityParser.js";
import { EventParameterContext } from "./SolidityParser.js";
import { EventDefinitionContext } from "./SolidityParser.js";
import { ErrorParameterContext } from "./SolidityParser.js";
import { ErrorDefinitionContext } from "./SolidityParser.js";
import { UserDefinableOperatorContext } from "./SolidityParser.js";
import { UsingDirectiveContext } from "./SolidityParser.js";
import { UsingAliasesContext } from "./SolidityParser.js";
import { TypeNameContext } from "./SolidityParser.js";
import { ElementaryTypeNameContext } from "./SolidityParser.js";
import { FunctionTypeNameContext } from "./SolidityParser.js";
import { VariableDeclarationContext } from "./SolidityParser.js";
import { DataLocationContext } from "./SolidityParser.js";
import { UnaryPrefixOperationContext } from "./SolidityParser.js";
import { PrimaryExpressionContext } from "./SolidityParser.js";
import { OrderComparisonContext } from "./SolidityParser.js";
import { ConditionalContext } from "./SolidityParser.js";
import { PayableConversionContext } from "./SolidityParser.js";
import { AssignmentContext } from "./SolidityParser.js";
import { UnarySuffixOperationContext } from "./SolidityParser.js";
import { ShiftOperationContext } from "./SolidityParser.js";
import { BitAndOperationContext } from "./SolidityParser.js";
import { FunctionCallContext } from "./SolidityParser.js";
import { IndexRangeAccessContext } from "./SolidityParser.js";
import { IndexAccessContext } from "./SolidityParser.js";
import { AddSubOperationContext } from "./SolidityParser.js";
import { BitOrOperationContext } from "./SolidityParser.js";
import { ExpOperationContext } from "./SolidityParser.js";
import { AndOperationContext } from "./SolidityParser.js";
import { InlineArrayContext } from "./SolidityParser.js";
import { OrOperationContext } from "./SolidityParser.js";
import { MemberAccessContext } from "./SolidityParser.js";
import { MulDivModOperationContext } from "./SolidityParser.js";
import { FunctionCallOptionsContext } from "./SolidityParser.js";
import { NewExprContext } from "./SolidityParser.js";
import { BitXorOperationContext } from "./SolidityParser.js";
import { TupleContext } from "./SolidityParser.js";
import { EqualityComparisonContext } from "./SolidityParser.js";
import { MetaTypeContext } from "./SolidityParser.js";
import { AssignOpContext } from "./SolidityParser.js";
import { TupleExpressionContext } from "./SolidityParser.js";
import { InlineArrayExpressionContext } from "./SolidityParser.js";
import { IdentifierContext } from "./SolidityParser.js";
import { LiteralContext } from "./SolidityParser.js";
import { LiteralWithSubDenominationContext } from "./SolidityParser.js";
import { BooleanLiteralContext } from "./SolidityParser.js";
import { StringLiteralContext } from "./SolidityParser.js";
import { HexStringLiteralContext } from "./SolidityParser.js";
import { UnicodeStringLiteralContext } from "./SolidityParser.js";
import { NumberLiteralContext } from "./SolidityParser.js";
import { BlockContext } from "./SolidityParser.js";
import { UncheckedBlockContext } from "./SolidityParser.js";
import { StatementContext } from "./SolidityParser.js";
import { SimpleStatementContext } from "./SolidityParser.js";
import { IfStatementContext } from "./SolidityParser.js";
import { ForStatementContext } from "./SolidityParser.js";
import { WhileStatementContext } from "./SolidityParser.js";
import { DoWhileStatementContext } from "./SolidityParser.js";
import { ContinueStatementContext } from "./SolidityParser.js";
import { BreakStatementContext } from "./SolidityParser.js";
import { TryStatementContext } from "./SolidityParser.js";
import { CatchClauseContext } from "./SolidityParser.js";
import { ReturnStatementContext } from "./SolidityParser.js";
import { EmitStatementContext } from "./SolidityParser.js";
import { RevertStatementContext } from "./SolidityParser.js";
import { AssemblyStatementContext } from "./SolidityParser.js";
import { AssemblyFlagsContext } from "./SolidityParser.js";
import { VariableDeclarationListContext } from "./SolidityParser.js";
import { VariableDeclarationTupleContext } from "./SolidityParser.js";
import { VariableDeclarationStatementContext } from "./SolidityParser.js";
import { ExpressionStatementContext } from "./SolidityParser.js";
import { MappingTypeContext } from "./SolidityParser.js";
import { MappingKeyTypeContext } from "./SolidityParser.js";
import { YulStatementContext } from "./SolidityParser.js";
import { YulBlockContext } from "./SolidityParser.js";
import { YulVariableDeclarationContext } from "./SolidityParser.js";
import { YulAssignmentContext } from "./SolidityParser.js";
import { YulIfStatementContext } from "./SolidityParser.js";
import { YulForStatementContext } from "./SolidityParser.js";
import { YulSwitchCaseContext } from "./SolidityParser.js";
import { YulSwitchStatementContext } from "./SolidityParser.js";
import { YulFunctionDefinitionContext } from "./SolidityParser.js";
import { YulPathContext } from "./SolidityParser.js";
import { YulFunctionCallContext } from "./SolidityParser.js";
import { YulBooleanContext } from "./SolidityParser.js";
import { YulLiteralContext } from "./SolidityParser.js";
import { YulExpressionContext } from "./SolidityParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SolidityParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SolidityParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SolidityParser.sourceUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceUnit?: (ctx: SourceUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.pragmaDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragmaDirective?: (ctx: PragmaDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.importDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDirective?: (ctx: ImportDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.importAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportAliases?: (ctx: ImportAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPath?: (ctx: PathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.symbolAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolAliases?: (ctx: SymbolAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.contractDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractDefinition?: (ctx: ContractDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.interfaceDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.libraryDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inheritanceSpecifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInheritanceSpecifierList?: (ctx: InheritanceSpecifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.contractBodyElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractBodyElement?: (ctx: ContractBodyElementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.namedArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgument?: (ctx: NamedArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.callArgumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallArgumentList?: (ctx: CallArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.identifierPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierPath?: (ctx: IdentifierPathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.modifierInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifierInvocation?: (ctx: ModifierInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.visibility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisibility?: (ctx: VisibilityContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.parameterDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.constructorDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorDefinition?: (ctx: ConstructorDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stateMutability`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateMutability?: (ctx: StateMutabilityContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.overrideSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.functionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.modifierDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifierDefinition?: (ctx: ModifierDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.fallbackFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFallbackFunctionDefinition?: (ctx: FallbackFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.receiveFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReceiveFunctionDefinition?: (ctx: ReceiveFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.structDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDefinition?: (ctx: StructDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.structMember`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructMember?: (ctx: StructMemberContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.enumDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.userDefinedValueTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinedValueTypeDefinition?: (ctx: UserDefinedValueTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.constantVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantVariableDeclaration?: (ctx: ConstantVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.eventParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventParameter?: (ctx: EventParameterContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.eventDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventDefinition?: (ctx: EventDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.errorParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorParameter?: (ctx: ErrorParameterContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.errorDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorDefinition?: (ctx: ErrorDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.userDefinableOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinableOperator?: (ctx: UserDefinableOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.usingDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingDirective?: (ctx: UsingDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.usingAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingAliases?: (ctx: UsingAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.typeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeName?: (ctx: TypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.elementaryTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.functionTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTypeName?: (ctx: FunctionTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.dataLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataLocation?: (ctx: DataLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryPrefixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryPrefixOperation?: (ctx: UnaryPrefixOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `PrimaryExpression`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `OrderComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderComparison?: (ctx: OrderComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `Conditional`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional?: (ctx: ConditionalContext) => Result;
    /**
     * Visit a parse tree produced by the `PayableConversion`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPayableConversion?: (ctx: PayableConversionContext) => Result;
    /**
     * Visit a parse tree produced by the `Assignment`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `UnarySuffixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnarySuffixOperation?: (ctx: UnarySuffixOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `ShiftOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShiftOperation?: (ctx: ShiftOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `BitAndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitAndOperation?: (ctx: BitAndOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionCall`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexRangeAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexRangeAccess?: (ctx: IndexRangeAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexAccess?: (ctx: IndexAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSubOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubOperation?: (ctx: AddSubOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `BitOrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitOrOperation?: (ctx: BitOrOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `ExpOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpOperation?: (ctx: ExpOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `AndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndOperation?: (ctx: AndOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `InlineArray`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineArray?: (ctx: InlineArrayContext) => Result;
    /**
     * Visit a parse tree produced by the `OrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrOperation?: (ctx: OrOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `MemberAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberAccess?: (ctx: MemberAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivModOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivModOperation?: (ctx: MulDivModOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionCallOptions`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallOptions?: (ctx: FunctionCallOptionsContext) => Result;
    /**
     * Visit a parse tree produced by the `NewExpr`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNewExpr?: (ctx: NewExprContext) => Result;
    /**
     * Visit a parse tree produced by the `BitXorOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitXorOperation?: (ctx: BitXorOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `Tuple`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTuple?: (ctx: TupleContext) => Result;
    /**
     * Visit a parse tree produced by the `EqualityComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualityComparison?: (ctx: EqualityComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `MetaType`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetaType?: (ctx: MetaTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assignOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignOp?: (ctx: AssignOpContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.tupleExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleExpression?: (ctx: TupleExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inlineArrayExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineArrayExpression?: (ctx: InlineArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.literalWithSubDenomination`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralWithSubDenomination?: (ctx: LiteralWithSubDenominationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.booleanLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.hexStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHexStringLiteral?: (ctx: HexStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.unicodeStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.numberLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.uncheckedBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUncheckedBlock?: (ctx: UncheckedBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.simpleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.forStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.doWhileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.tryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryStatement?: (ctx: TryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.emitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmitStatement?: (ctx: EmitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.revertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevertStatement?: (ctx: RevertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assemblyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssemblyStatement?: (ctx: AssemblyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assemblyFlags`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssemblyFlags?: (ctx: AssemblyFlagsContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationTuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationTuple?: (ctx: VariableDeclarationTupleContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.mappingType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappingType?: (ctx: MappingTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.mappingKeyType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappingKeyType?: (ctx: MappingKeyTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulStatement?: (ctx: YulStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulBlock?: (ctx: YulBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulVariableDeclaration?: (ctx: YulVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulAssignment?: (ctx: YulAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulIfStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulIfStatement?: (ctx: YulIfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulForStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulForStatement?: (ctx: YulForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulSwitchCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulSwitchCase?: (ctx: YulSwitchCaseContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulSwitchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulSwitchStatement?: (ctx: YulSwitchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulFunctionDefinition?: (ctx: YulFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulPath?: (ctx: YulPathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulFunctionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulFunctionCall?: (ctx: YulFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulBoolean`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulBoolean?: (ctx: YulBooleanContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulLiteral?: (ctx: YulLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulExpression?: (ctx: YulExpressionContext) => Result;
}

