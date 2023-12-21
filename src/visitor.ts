import * as parser from './grammar';
import * as ast from './ast';

export class SolidityASTVisitor extends parser.SolidityParserVisitor<ast.ASTNode> {
  visitSourceUnit = (ctx: parser.SourceUnitContext) => new ast.SourceUnit(ctx, this);
  visitPragmaDirective = (ctx: parser.PragmaDirectiveContext) => new ast.PragmaDirective(ctx, this);
  visitImportDirective = (ctx: parser.ImportDirectiveContext) => new ast.ImportDirective(ctx, this);
  visitImportAliases = (ctx: parser.ImportAliasesContext) => new ast.ImportAliases(ctx, this);
  visitPath = (ctx: parser.PathContext) => new ast.Path(ctx, this);
  visitSymbolAliases = (ctx: parser.SymbolAliasesContext) => new ast.SymbolAliases(ctx, this);
  visitContractDefinition = (ctx: parser.ContractDefinitionContext) =>
    new ast.ContractDefinition(ctx, this);
  visitInterfaceDefinition = (ctx: parser.InterfaceDefinitionContext) =>
    new ast.InterfaceDefinition(ctx, this);
  visitLibraryDefinition = (ctx: parser.LibraryDefinitionContext) =>
    new ast.LibraryDefinition(ctx, this);
  visitInheritanceSpecifierList = (ctx: parser.InheritanceSpecifierListContext) =>
    new ast.InheritanceSpecifierList(ctx, this);
  visitInheritanceSpecifier = (ctx: parser.InheritanceSpecifierContext) =>
    new ast.InheritanceSpecifier(ctx, this);
  visitContractBodyElement = (ctx: parser.ContractBodyElementContext) =>
    new ast.ContractBodyElement(ctx, this);
  visitNamedArgument = (ctx: parser.NamedArgumentContext) => new ast.NamedArgument(ctx, this);
  visitCallArgumentList = (ctx: parser.CallArgumentListContext) =>
    new ast.CallArgumentList(ctx, this);
  visitIdentifierPath = (ctx: parser.IdentifierPathContext) => new ast.IdentifierPath(ctx, this);
  visitModifierInvocation = (ctx: parser.ModifierInvocationContext) =>
    new ast.ModifierInvocation(ctx, this);
  visitVisibility = (ctx: parser.VisibilityContext) => new ast.Visibility(ctx, this);
  visitParameterList = (ctx: parser.ParameterListContext) => new ast.ParameterList(ctx, this);
  visitParameterDeclaration = (ctx: parser.ParameterDeclarationContext) =>
    new ast.ParameterDeclaration(ctx, this);
  visitConstructorDefinition = (ctx: parser.ConstructorDefinitionContext) =>
    new ast.ConstructorDefinition(ctx, this);
  visitStateMutability = (ctx: parser.StateMutabilityContext) => new ast.StateMutability(ctx, this);
  visitOverrideSpecifier = (ctx: parser.OverrideSpecifierContext) =>
    new ast.OverrideSpecifier(ctx, this);
  visitFunctionDefinition = (ctx: parser.FunctionDefinitionContext) =>
    new ast.FunctionDefinition(ctx, this);
  visitModifierDefinition = (ctx: parser.ModifierDefinitionContext) =>
    new ast.ModifierDefinition(ctx, this);
  visitFallbackFunctionDefinition = (ctx: parser.FallbackFunctionDefinitionContext) =>
    new ast.FallbackFunctionDefinition(ctx, this);
  visitReceiveFunctionDefinition = (ctx: parser.ReceiveFunctionDefinitionContext) =>
    new ast.ReceiveFunctionDefinition(ctx, this);
  visitStructDefinition = (ctx: parser.StructDefinitionContext) =>
    new ast.StructDefinition(ctx, this);
  visitStructMember = (ctx: parser.StructMemberContext) => new ast.StructMember(ctx, this);
  visitEnumDefinition = (ctx: parser.EnumDefinitionContext) => new ast.EnumDefinition(ctx, this);
  visitUserDefinedValueTypeDefinition = (ctx: parser.UserDefinedValueTypeDefinitionContext) =>
    new ast.UserDefinedValueTypeDefinition(ctx, this);
  visitStateVariableDeclaration = (ctx: parser.StateVariableDeclarationContext) =>
    new ast.StateVariableDeclaration(ctx, this);
  visitConstantVariableDeclaration = (ctx: parser.ConstantVariableDeclarationContext) =>
    new ast.ConstantVariableDeclaration(ctx, this);
  visitEventParameter = (ctx: parser.EventParameterContext) => new ast.EventParameter(ctx, this);
  visitEventDefinition = (ctx: parser.EventDefinitionContext) => new ast.EventDefinition(ctx, this);
  visitErrorParameter = (ctx: parser.ErrorParameterContext) => new ast.ErrorParameter(ctx, this);
  visitErrorDefinition = (ctx: parser.ErrorDefinitionContext) => new ast.ErrorDefinition(ctx, this);
  visitUserDefinableOperator = (ctx: parser.UserDefinableOperatorContext) =>
    new ast.UserDefinableOperator(ctx, this);
  visitUsingDirective = (ctx: parser.UsingDirectiveContext) => new ast.UsingDirective(ctx, this);
  visitTypeName = (ctx: parser.TypeNameContext) => new ast.TypeName(ctx, this);
  visitElementaryTypeName = (ctx: parser.ElementaryTypeNameContext) =>
    new ast.ElementaryTypeName(ctx, this);
  visitFunctionTypeName = (ctx: parser.FunctionTypeNameContext) =>
    new ast.FunctionTypeName(ctx, this);
  visitVariableDeclaration = (ctx: parser.VariableDeclarationContext) =>
    new ast.VariableDeclaration(ctx, this);
  visitDataLocation = (ctx: parser.DataLocationContext) => new ast.DataLocation(ctx, this);
  visitExpression = (ctx: parser.ExpressionContext) => new ast.Expression(ctx, this);
  visitAssignOp = (ctx: parser.AssignOpContext) => new ast.AssignOp(ctx, this);
  visitTupleExpression = (ctx: parser.TupleExpressionContext) => new ast.TupleExpression(ctx, this);
  visitInlineArrayExpression = (ctx: parser.InlineArrayExpressionContext) =>
    new ast.InlineArrayExpression(ctx, this);
  visitIdentifier = (ctx: parser.IdentifierContext) => new ast.Identifier(ctx, this);
  visitLiteral = (ctx: parser.LiteralContext) => new ast.Literal(ctx, this);
  visitLiteralWithSubDenomination = (ctx: parser.LiteralWithSubDenominationContext) =>
    new ast.LiteralWithSubDenomination(ctx, this);
  visitBooleanLiteral = (ctx: parser.BooleanLiteralContext) => new ast.BooleanLiteral(ctx, this);
  visitStringLiteral = (ctx: parser.StringLiteralContext) => new ast.StringLiteral(ctx, this);
  visitHexStringLiteral = (ctx: parser.HexStringLiteralContext) =>
    new ast.HexStringLiteral(ctx, this);
  visitUnicodeStringLiteral = (ctx: parser.UnicodeStringLiteralContext) =>
    new ast.UnicodeStringLiteral(ctx, this);
  visitNumberLiteral = (ctx: parser.NumberLiteralContext) => new ast.NumberLiteral(ctx, this);
  visitBlock = (ctx: parser.BlockContext) => new ast.Block(ctx, this);
  visitUncheckedBlock = (ctx: parser.UncheckedBlockContext) => new ast.UncheckedBlock(ctx, this);
  visitStatement = (ctx: parser.StatementContext) => new ast.Statement(ctx, this);
  visitSimpleStatement = (ctx: parser.SimpleStatementContext) => new ast.SimpleStatement(ctx, this);
  visitIfStatement = (ctx: parser.IfStatementContext) => new ast.IfStatement(ctx, this);
  visitForStatement = (ctx: parser.ForStatementContext) => new ast.ForStatement(ctx, this);
  visitWhileStatement = (ctx: parser.WhileStatementContext) => new ast.WhileStatement(ctx, this);
  visitDoWhileStatement = (ctx: parser.DoWhileStatementContext) =>
    new ast.DoWhileStatement(ctx, this);
  visitContinueStatement = (ctx: parser.ContinueStatementContext) =>
    new ast.ContinueStatement(ctx, this);
  visitBreakStatement = (ctx: parser.BreakStatementContext) => new ast.BreakStatement(ctx, this);
  visitTryStatement = (ctx: parser.TryStatementContext) => new ast.TryStatement(ctx, this);
  visitCatchClause = (ctx: parser.CatchClauseContext) => new ast.CatchClause(ctx, this);
  visitReturnStatement = (ctx: parser.ReturnStatementContext) => new ast.ReturnStatement(ctx, this);
  visitEmitStatement = (ctx: parser.EmitStatementContext) => new ast.EmitStatement(ctx, this);
  visitRevertStatement = (ctx: parser.RevertStatementContext) => new ast.RevertStatement(ctx, this);
  visitAssemblyStatement = (ctx: parser.AssemblyStatementContext) =>
    new ast.AssemblyStatement(ctx, this);
  visitAssemblyFlags = (ctx: parser.AssemblyFlagsContext) => new ast.AssemblyFlags(ctx, this);
  visitVariableDeclarationList = (ctx: parser.VariableDeclarationListContext) =>
    new ast.VariableDeclarationList(ctx, this);
  visitVariableDeclarationTuple = (ctx: parser.VariableDeclarationTupleContext) =>
    new ast.VariableDeclarationTuple(ctx, this);
  visitVariableDeclarationStatement = (ctx: parser.VariableDeclarationStatementContext) =>
    new ast.VariableDeclarationStatement(ctx, this);
  visitExpressionStatement = (ctx: parser.ExpressionStatementContext) =>
    new ast.ExpressionStatement(ctx, this);
  visitMappingType = (ctx: parser.MappingTypeContext) => new ast.MappingType(ctx, this);
  visitMappingKeyType = (ctx: parser.MappingKeyTypeContext) => new ast.MappingKeyType(ctx, this);
  visitMemberAccess = (ctx: parser.MemberAccessContext) => new ast.MemberAccess(ctx, this);
  visitYulStatement = (ctx: parser.YulStatementContext) => new ast.YulStatement(ctx, this);
  visitYulBlock = (ctx: parser.YulBlockContext) => new ast.YulBlock(ctx, this);
  visitYulVariableDeclaration = (ctx: parser.YulVariableDeclarationContext) =>
    new ast.YulVariableDeclaration(ctx, this);
  visitYulAssignment = (ctx: parser.YulAssignmentContext) => new ast.YulAssignment(ctx, this);
  visitYulIfStatement = (ctx: parser.YulIfStatementContext) => new ast.YulIfStatement(ctx, this);
  visitYulForStatement = (ctx: parser.YulForStatementContext) => new ast.YulForStatement(ctx, this);
  visitYulSwitchCase = (ctx: parser.YulSwitchCaseContext) => new ast.YulSwitchCase(ctx, this);
  visitYulSwitchStatement = (ctx: parser.YulSwitchStatementContext) =>
    new ast.YulSwitchStatement(ctx, this);
  visitYulFunctionDefinition = (ctx: parser.YulFunctionDefinitionContext) =>
    new ast.YulFunctionDefinition(ctx, this);
  visitYulPath = (ctx: parser.YulPathContext) => new ast.YulPath(ctx, this);
  visitYulFunctionCall = (ctx: parser.YulFunctionCallContext) => new ast.YulFunctionCall(ctx, this);
  visitYulBoolean = (ctx: parser.YulBooleanContext) => new ast.YulBoolean(ctx, this);
  visitYulLiteral = (ctx: parser.YulLiteralContext) => new ast.YulLiteral(ctx, this);
  visitYulExpression = (ctx: parser.YulExpressionContext) => new ast.YulExpression(ctx, this);
  visitUnaryPrefixOperation = (ctx: parser.UnaryPrefixOperationContext) =>
    new ast.UnaryPrefixOperation(ctx, this);
  visitPrimaryExpression = (ctx: parser.PrimaryExpressionContext) =>
    new ast.PrimaryExpression(ctx, this);
  visitOrderComparison = (ctx: parser.OrderComparisonContext) => new ast.OrderComparison(ctx, this);
  visitConditional = (ctx: parser.ConditionalContext) => new ast.Conditional(ctx, this);
  visitPayableConversion = (ctx: parser.PayableConversionContext) =>
    new ast.PayableConversion(ctx, this);
  visitAssignment = (ctx: parser.AssignmentContext) => new ast.Assignment(ctx, this);
  visitUnarySuffixOperation = (ctx: parser.UnarySuffixOperationContext) =>
    new ast.UnarySuffixOperation(ctx, this);
  visitShiftOperation = (ctx: parser.ShiftOperationContext) => new ast.ShiftOperation(ctx, this);
  visitBitAndOperation = (ctx: parser.BitAndOperationContext) => new ast.BitAndOperation(ctx, this);
  visitFunctionCall = (ctx: parser.FunctionCallContext) => new ast.FunctionCall(ctx, this);
  visitIndexRangeAccess = (ctx: parser.IndexRangeAccessContext) =>
    new ast.IndexRangeAccess(ctx, this);
  visitIndexAccess = (ctx: parser.IndexAccessContext) => new ast.IndexAccess(ctx, this);
  visitAddSubOperation = (ctx: parser.AddSubOperationContext) => new ast.AddSubOperation(ctx, this);
  visitBitOrOperation = (ctx: parser.BitOrOperationContext) => new ast.BitOrOperation(ctx, this);
  visitExpOperation = (ctx: parser.ExpOperationContext) => new ast.ExpOperation(ctx, this);
  visitAndOperation = (ctx: parser.AndOperationContext) => new ast.AndOperation(ctx, this);
  visitInlineArray = (ctx: parser.InlineArrayContext) => new ast.InlineArray(ctx, this);
  visitOrOperation = (ctx: parser.OrOperationContext) => new ast.OrOperation(ctx, this);
  visitMulDivModOperation = (ctx: parser.MulDivModOperationContext) =>
    new ast.MulDivModOperation(ctx, this);
  visitFunctionCallOptions = (ctx: parser.FunctionCallOptionsContext) =>
    new ast.FunctionCallOptions(ctx, this);
  visitNewExpr = (ctx: parser.NewExprContext) => new ast.NewExpr(ctx, this);
  visitBitXorOperation = (ctx: parser.BitXorOperationContext) => new ast.BitXorOperation(ctx, this);
  visitTuple = (ctx: parser.TupleContext) => new ast.Tuple(ctx, this);
  visitEqualityComparison = (ctx: parser.EqualityComparisonContext) =>
    new ast.EqualityComparison(ctx, this);
  visitMetaType = (ctx: parser.MetaTypeContext) => new ast.MetaType(ctx, this);
}

export const solidityASTVisitor = new SolidityASTVisitor();
