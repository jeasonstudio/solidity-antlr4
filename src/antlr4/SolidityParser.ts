// Generated from grammar/SolidityParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SolidityParserListener } from "./SolidityParserListener.js";
import { SolidityParserVisitor } from "./SolidityParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SolidityParser extends antlr.Parser {
    public static readonly ReservedKeywords = 1;
    public static readonly Abstract = 2;
    public static readonly Address = 3;
    public static readonly Anonymous = 4;
    public static readonly As = 5;
    public static readonly Assembly = 6;
    public static readonly Bool = 7;
    public static readonly Break = 8;
    public static readonly Bytes = 9;
    public static readonly Calldata = 10;
    public static readonly Catch = 11;
    public static readonly Constant = 12;
    public static readonly Constructor = 13;
    public static readonly Continue = 14;
    public static readonly Contract = 15;
    public static readonly Delete = 16;
    public static readonly Do = 17;
    public static readonly Else = 18;
    public static readonly Emit = 19;
    public static readonly Enum = 20;
    public static readonly Error = 21;
    public static readonly Event = 22;
    public static readonly External = 23;
    public static readonly Fallback = 24;
    public static readonly False = 25;
    public static readonly Fixed = 26;
    public static readonly FixedBytes = 27;
    public static readonly For = 28;
    public static readonly From = 29;
    public static readonly Function = 30;
    public static readonly Global = 31;
    public static readonly Hex = 32;
    public static readonly If = 33;
    public static readonly Immutable = 34;
    public static readonly Import = 35;
    public static readonly Indexed = 36;
    public static readonly Interface = 37;
    public static readonly Internal = 38;
    public static readonly Is = 39;
    public static readonly Library = 40;
    public static readonly Mapping = 41;
    public static readonly Memory = 42;
    public static readonly Modifier = 43;
    public static readonly New = 44;
    public static readonly SubDenomination = 45;
    public static readonly Override = 46;
    public static readonly Payable = 47;
    public static readonly Pragma = 48;
    public static readonly Private = 49;
    public static readonly Public = 50;
    public static readonly Pure = 51;
    public static readonly Receive = 52;
    public static readonly Return = 53;
    public static readonly Returns = 54;
    public static readonly Revert = 55;
    public static readonly SignedIntegerType = 56;
    public static readonly Storage = 57;
    public static readonly String = 58;
    public static readonly Struct = 59;
    public static readonly True = 60;
    public static readonly Try = 61;
    public static readonly Type = 62;
    public static readonly Ufixed = 63;
    public static readonly Unchecked = 64;
    public static readonly Unicode = 65;
    public static readonly UnsignedIntegerType = 66;
    public static readonly Using = 67;
    public static readonly View = 68;
    public static readonly Virtual = 69;
    public static readonly While = 70;
    public static readonly LParen = 71;
    public static readonly RParen = 72;
    public static readonly LBrack = 73;
    public static readonly RBrack = 74;
    public static readonly LBrace = 75;
    public static readonly RBrace = 76;
    public static readonly Colon = 77;
    public static readonly Semicolon = 78;
    public static readonly Period = 79;
    public static readonly Conditional = 80;
    public static readonly DoubleArrow = 81;
    public static readonly RightArrow = 82;
    public static readonly Assign = 83;
    public static readonly AssignBitOr = 84;
    public static readonly AssignBitXor = 85;
    public static readonly AssignBitAnd = 86;
    public static readonly AssignShl = 87;
    public static readonly AssignSar = 88;
    public static readonly AssignShr = 89;
    public static readonly AssignAdd = 90;
    public static readonly AssignSub = 91;
    public static readonly AssignMul = 92;
    public static readonly AssignDiv = 93;
    public static readonly AssignMod = 94;
    public static readonly Comma = 95;
    public static readonly Or = 96;
    public static readonly And = 97;
    public static readonly BitOr = 98;
    public static readonly BitXor = 99;
    public static readonly BitAnd = 100;
    public static readonly Shl = 101;
    public static readonly Sar = 102;
    public static readonly Shr = 103;
    public static readonly Add = 104;
    public static readonly Sub = 105;
    public static readonly Mul = 106;
    public static readonly Div = 107;
    public static readonly Mod = 108;
    public static readonly Exp = 109;
    public static readonly Equal = 110;
    public static readonly NotEqual = 111;
    public static readonly LessThan = 112;
    public static readonly GreaterThan = 113;
    public static readonly LessThanOrEqual = 114;
    public static readonly GreaterThanOrEqual = 115;
    public static readonly Not = 116;
    public static readonly BitNot = 117;
    public static readonly Inc = 118;
    public static readonly Dec = 119;
    public static readonly DoubleQuote = 120;
    public static readonly SingleQuote = 121;
    public static readonly NonEmptyStringLiteral = 122;
    public static readonly EmptyStringLiteral = 123;
    public static readonly UnicodeStringLiteral = 124;
    public static readonly HexString = 125;
    public static readonly HexNumber = 126;
    public static readonly OctalNumber = 127;
    public static readonly DecimalNumber = 128;
    public static readonly DecimalNumberFollowedByIdentifier = 129;
    public static readonly Identifier = 130;
    public static readonly WS = 131;
    public static readonly COMMENT = 132;
    public static readonly LINE_COMMENT = 133;
    public static readonly AssemblyDialect = 134;
    public static readonly AssemblyLBrace = 135;
    public static readonly AssemblyFlagString = 136;
    public static readonly AssemblyBlockLParen = 137;
    public static readonly AssemblyBlockRParen = 138;
    public static readonly AssemblyBlockComma = 139;
    public static readonly AssemblyBlockWS = 140;
    public static readonly AssemblyBlockCOMMENT = 141;
    public static readonly AssemblyBlockLINE_COMMENT = 142;
    public static readonly YulBreak = 143;
    public static readonly YulCase = 144;
    public static readonly YulContinue = 145;
    public static readonly YulDefault = 146;
    public static readonly YulFalse = 147;
    public static readonly YulFor = 148;
    public static readonly YulFunction = 149;
    public static readonly YulIf = 150;
    public static readonly YulLeave = 151;
    public static readonly YulLet = 152;
    public static readonly YulSwitch = 153;
    public static readonly YulTrue = 154;
    public static readonly YulHex = 155;
    public static readonly YulEVMBuiltin = 156;
    public static readonly YulLBrace = 157;
    public static readonly YulRBrace = 158;
    public static readonly YulLParen = 159;
    public static readonly YulRParen = 160;
    public static readonly YulAssign = 161;
    public static readonly YulPeriod = 162;
    public static readonly YulComma = 163;
    public static readonly YulArrow = 164;
    public static readonly YulIdentifier = 165;
    public static readonly YulHexNumber = 166;
    public static readonly YulDecimalNumber = 167;
    public static readonly YulStringLiteral = 168;
    public static readonly YulHexStringLiteral = 169;
    public static readonly YulWS = 170;
    public static readonly YulCOMMENT = 171;
    public static readonly YulLINE_COMMENT = 172;
    public static readonly PragmaToken = 173;
    public static readonly PragmaSemicolon = 174;
    public static readonly PragmaWS = 175;
    public static readonly PragmaCOMMENT = 176;
    public static readonly PragmaLINE_COMMENT = 177;
    public static readonly RULE_sourceUnit = 0;
    public static readonly RULE_pragmaDirective = 1;
    public static readonly RULE_importDirective = 2;
    public static readonly RULE_importAliases = 3;
    public static readonly RULE_path = 4;
    public static readonly RULE_symbolAliases = 5;
    public static readonly RULE_contractDefinition = 6;
    public static readonly RULE_interfaceDefinition = 7;
    public static readonly RULE_libraryDefinition = 8;
    public static readonly RULE_inheritanceSpecifierList = 9;
    public static readonly RULE_inheritanceSpecifier = 10;
    public static readonly RULE_contractBodyElement = 11;
    public static readonly RULE_namedArgument = 12;
    public static readonly RULE_callArgumentList = 13;
    public static readonly RULE_identifierPath = 14;
    public static readonly RULE_modifierInvocation = 15;
    public static readonly RULE_visibility = 16;
    public static readonly RULE_parameterList = 17;
    public static readonly RULE_parameterDeclaration = 18;
    public static readonly RULE_constructorDefinition = 19;
    public static readonly RULE_stateMutability = 20;
    public static readonly RULE_overrideSpecifier = 21;
    public static readonly RULE_functionDefinition = 22;
    public static readonly RULE_modifierDefinition = 23;
    public static readonly RULE_fallbackFunctionDefinition = 24;
    public static readonly RULE_receiveFunctionDefinition = 25;
    public static readonly RULE_structDefinition = 26;
    public static readonly RULE_structMember = 27;
    public static readonly RULE_enumDefinition = 28;
    public static readonly RULE_userDefinedValueTypeDefinition = 29;
    public static readonly RULE_stateVariableDeclaration = 30;
    public static readonly RULE_constantVariableDeclaration = 31;
    public static readonly RULE_eventParameter = 32;
    public static readonly RULE_eventDefinition = 33;
    public static readonly RULE_errorParameter = 34;
    public static readonly RULE_errorDefinition = 35;
    public static readonly RULE_userDefinableOperator = 36;
    public static readonly RULE_usingDirective = 37;
    public static readonly RULE_typeName = 38;
    public static readonly RULE_elementaryTypeName = 39;
    public static readonly RULE_functionTypeName = 40;
    public static readonly RULE_variableDeclaration = 41;
    public static readonly RULE_dataLocation = 42;
    public static readonly RULE_expression = 43;
    public static readonly RULE_assignOp = 44;
    public static readonly RULE_tupleExpression = 45;
    public static readonly RULE_inlineArrayExpression = 46;
    public static readonly RULE_identifier = 47;
    public static readonly RULE_literal = 48;
    public static readonly RULE_literalWithSubDenomination = 49;
    public static readonly RULE_booleanLiteral = 50;
    public static readonly RULE_stringLiteral = 51;
    public static readonly RULE_hexStringLiteral = 52;
    public static readonly RULE_unicodeStringLiteral = 53;
    public static readonly RULE_numberLiteral = 54;
    public static readonly RULE_block = 55;
    public static readonly RULE_uncheckedBlock = 56;
    public static readonly RULE_statement = 57;
    public static readonly RULE_simpleStatement = 58;
    public static readonly RULE_ifStatement = 59;
    public static readonly RULE_forStatement = 60;
    public static readonly RULE_whileStatement = 61;
    public static readonly RULE_doWhileStatement = 62;
    public static readonly RULE_continueStatement = 63;
    public static readonly RULE_breakStatement = 64;
    public static readonly RULE_tryStatement = 65;
    public static readonly RULE_catchClause = 66;
    public static readonly RULE_returnStatement = 67;
    public static readonly RULE_emitStatement = 68;
    public static readonly RULE_revertStatement = 69;
    public static readonly RULE_assemblyStatement = 70;
    public static readonly RULE_assemblyFlags = 71;
    public static readonly RULE_variableDeclarationList = 72;
    public static readonly RULE_variableDeclarationTuple = 73;
    public static readonly RULE_variableDeclarationStatement = 74;
    public static readonly RULE_expressionStatement = 75;
    public static readonly RULE_mappingType = 76;
    public static readonly RULE_mappingKeyType = 77;
    public static readonly RULE_yulStatement = 78;
    public static readonly RULE_yulBlock = 79;
    public static readonly RULE_yulVariableDeclaration = 80;
    public static readonly RULE_yulAssignment = 81;
    public static readonly RULE_yulIfStatement = 82;
    public static readonly RULE_yulForStatement = 83;
    public static readonly RULE_yulSwitchCase = 84;
    public static readonly RULE_yulSwitchStatement = 85;
    public static readonly RULE_yulFunctionDefinition = 86;
    public static readonly RULE_yulPath = 87;
    public static readonly RULE_yulFunctionCall = 88;
    public static readonly RULE_yulBoolean = 89;
    public static readonly RULE_yulLiteral = 90;
    public static readonly RULE_yulExpression = 91;

    public static readonly literalNames = [
        null, null, "'abstract'", "'address'", "'anonymous'", "'as'", "'assembly'",
        "'bool'", null, "'bytes'", "'calldata'", "'catch'", "'constant'",
        "'constructor'", null, "'contract'", "'delete'", "'do'", "'else'",
        "'emit'", "'enum'", "'error'", "'event'", "'external'", "'fallback'",
        null, null, null, null, "'from'", null, "'global'", null, null,
        "'immutable'", "'import'", "'indexed'", "'interface'", "'internal'",
        "'is'", "'library'", "'mapping'", "'memory'", "'modifier'", "'new'",
        null, "'override'", "'payable'", "'pragma'", "'private'", "'public'",
        "'pure'", "'receive'", "'return'", "'returns'", "'revert'", null,
        "'storage'", "'string'", "'struct'", null, "'try'", "'type'", null,
        "'unchecked'", "'unicode'", null, "'using'", "'view'", "'virtual'",
        "'while'", null, null, "'['", "']'", null, null, "':'", null, null,
        "'?'", "'=>'", null, "'='", "'|='", "'^='", "'&='", "'<<='", "'>>='",
        "'>>>='", "'+='", "'-='", "'*='", "'/='", "'%='", null, "'||'",
        "'&&'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'>>>'", "'+'", "'-'",
        "'*'", "'/'", "'%'", "'**'", "'=='", "'!='", "'<'", "'>'", "'<='",
        "'>='", "'!'", "'~'", "'++'", "'--'", "'\"'", "'''", null, null,
        null, null, null, null, null, null, null, null, null, null, "'\"evmasm\"'",
        null, null, null, null, null, null, null, null, null, "'case'",
        null, "'default'", null, null, null, null, "'leave'", "'let'", "'switch'",
        null, null, null, null, null, null, null, "':='"
    ];

    public static readonly symbolicNames = [
        null, "ReservedKeywords", "Abstract", "Address", "Anonymous", "As",
        "Assembly", "Bool", "Break", "Bytes", "Calldata", "Catch", "Constant",
        "Constructor", "Continue", "Contract", "Delete", "Do", "Else", "Emit",
        "Enum", "Error", "Event", "External", "Fallback", "False", "Fixed",
        "FixedBytes", "For", "From", "Function", "Global", "Hex", "If",
        "Immutable", "Import", "Indexed", "Interface", "Internal", "Is",
        "Library", "Mapping", "Memory", "Modifier", "New", "SubDenomination",
        "Override", "Payable", "Pragma", "Private", "Public", "Pure", "Receive",
        "Return", "Returns", "Revert", "SignedIntegerType", "Storage", "String",
        "Struct", "True", "Try", "Type", "Ufixed", "Unchecked", "Unicode",
        "UnsignedIntegerType", "Using", "View", "Virtual", "While", "LParen",
        "RParen", "LBrack", "RBrack", "LBrace", "RBrace", "Colon", "Semicolon",
        "Period", "Conditional", "DoubleArrow", "RightArrow", "Assign",
        "AssignBitOr", "AssignBitXor", "AssignBitAnd", "AssignShl", "AssignSar",
        "AssignShr", "AssignAdd", "AssignSub", "AssignMul", "AssignDiv",
        "AssignMod", "Comma", "Or", "And", "BitOr", "BitXor", "BitAnd",
        "Shl", "Sar", "Shr", "Add", "Sub", "Mul", "Div", "Mod", "Exp", "Equal",
        "NotEqual", "LessThan", "GreaterThan", "LessThanOrEqual", "GreaterThanOrEqual",
        "Not", "BitNot", "Inc", "Dec", "DoubleQuote", "SingleQuote", "NonEmptyStringLiteral",
        "EmptyStringLiteral", "UnicodeStringLiteral", "HexString", "HexNumber",
        "OctalNumber", "DecimalNumber", "DecimalNumberFollowedByIdentifier",
        "Identifier", "WS", "COMMENT", "LINE_COMMENT", "AssemblyDialect",
        "AssemblyLBrace", "AssemblyFlagString", "AssemblyBlockLParen", "AssemblyBlockRParen",
        "AssemblyBlockComma", "AssemblyBlockWS", "AssemblyBlockCOMMENT",
        "AssemblyBlockLINE_COMMENT", "YulBreak", "YulCase", "YulContinue",
        "YulDefault", "YulFalse", "YulFor", "YulFunction", "YulIf", "YulLeave",
        "YulLet", "YulSwitch", "YulTrue", "YulHex", "YulEVMBuiltin", "YulLBrace",
        "YulRBrace", "YulLParen", "YulRParen", "YulAssign", "YulPeriod",
        "YulComma", "YulArrow", "YulIdentifier", "YulHexNumber", "YulDecimalNumber",
        "YulStringLiteral", "YulHexStringLiteral", "YulWS", "YulCOMMENT",
        "YulLINE_COMMENT", "PragmaToken", "PragmaSemicolon", "PragmaWS",
        "PragmaCOMMENT", "PragmaLINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "sourceUnit", "pragmaDirective", "importDirective", "importAliases",
        "path", "symbolAliases", "contractDefinition", "interfaceDefinition",
        "libraryDefinition", "inheritanceSpecifierList", "inheritanceSpecifier",
        "contractBodyElement", "namedArgument", "callArgumentList", "identifierPath",
        "modifierInvocation", "visibility", "parameterList", "parameterDeclaration",
        "constructorDefinition", "stateMutability", "overrideSpecifier",
        "functionDefinition", "modifierDefinition", "fallbackFunctionDefinition",
        "receiveFunctionDefinition", "structDefinition", "structMember",
        "enumDefinition", "userDefinedValueTypeDefinition", "stateVariableDeclaration",
        "constantVariableDeclaration", "eventParameter", "eventDefinition",
        "errorParameter", "errorDefinition", "userDefinableOperator", "usingDirective",
        "typeName", "elementaryTypeName", "functionTypeName", "variableDeclaration",
        "dataLocation", "expression", "assignOp", "tupleExpression", "inlineArrayExpression",
        "identifier", "literal", "literalWithSubDenomination", "booleanLiteral",
        "stringLiteral", "hexStringLiteral", "unicodeStringLiteral", "numberLiteral",
        "block", "uncheckedBlock", "statement", "simpleStatement", "ifStatement",
        "forStatement", "whileStatement", "doWhileStatement", "continueStatement",
        "breakStatement", "tryStatement", "catchClause", "returnStatement",
        "emitStatement", "revertStatement", "assemblyStatement", "assemblyFlags",
        "variableDeclarationList", "variableDeclarationTuple", "variableDeclarationStatement",
        "expressionStatement", "mappingType", "mappingKeyType", "yulStatement",
        "yulBlock", "yulVariableDeclaration", "yulAssignment", "yulIfStatement",
        "yulForStatement", "yulSwitchCase", "yulSwitchStatement", "yulFunctionDefinition",
        "yulPath", "yulFunctionCall", "yulBoolean", "yulLiteral", "yulExpression",
    ];

    public get grammarFileName(): string { return "SolidityParser.g4"; }
    public get literalNames(): (string | null)[] { return SolidityParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SolidityParser.symbolicNames; }
    public get ruleNames(): string[] { return SolidityParser.ruleNames; }
    public get serializedATN(): number[] { return SolidityParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SolidityParser._ATN, SolidityParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public sourceUnit(): SourceUnitContext {
        let localContext = new SourceUnitContext(this.context, this.state);
        this.enterRule(localContext, 0, SolidityParser.RULE_sourceUnit);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 197;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                    case 1:
                        {
                        this.state = 184;
                        this.pragmaDirective();
                        }
                        break;
                    case 2:
                        {
                        this.state = 185;
                        this.importDirective();
                        }
                        break;
                    case 3:
                        {
                        this.state = 186;
                        this.usingDirective();
                        }
                        break;
                    case 4:
                        {
                        this.state = 187;
                        this.contractDefinition();
                        }
                        break;
                    case 5:
                        {
                        this.state = 188;
                        this.interfaceDefinition();
                        }
                        break;
                    case 6:
                        {
                        this.state = 189;
                        this.libraryDefinition();
                        }
                        break;
                    case 7:
                        {
                        this.state = 190;
                        this.functionDefinition();
                        }
                        break;
                    case 8:
                        {
                        this.state = 191;
                        this.constantVariableDeclaration();
                        }
                        break;
                    case 9:
                        {
                        this.state = 192;
                        this.structDefinition();
                        }
                        break;
                    case 10:
                        {
                        this.state = 193;
                        this.enumDefinition();
                        }
                        break;
                    case 11:
                        {
                        this.state = 194;
                        this.userDefinedValueTypeDefinition();
                        }
                        break;
                    case 12:
                        {
                        this.state = 195;
                        this.errorDefinition();
                        }
                        break;
                    case 13:
                        {
                        this.state = 196;
                        this.eventDefinition();
                        }
                        break;
                    }
                    }
                }
                this.state = 201;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            }
            this.state = 202;
            this.match(SolidityParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragmaDirective(): PragmaDirectiveContext {
        let localContext = new PragmaDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 2, SolidityParser.RULE_pragmaDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
            this.match(SolidityParser.Pragma);
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 205;
                this.match(SolidityParser.PragmaToken);
                }
                }
                this.state = 208;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 173);
            this.state = 210;
            this.match(SolidityParser.PragmaSemicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importDirective(): ImportDirectiveContext {
        let localContext = new ImportDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 4, SolidityParser.RULE_importDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 212;
            this.match(SolidityParser.Import);
            this.state = 228;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
                {
                {
                this.state = 213;
                this.path();
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 214;
                    this.match(SolidityParser.As);
                    this.state = 215;
                    localContext._unitAlias = this.identifier();
                    }
                }

                }
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 218;
                this.symbolAliases();
                this.state = 219;
                this.match(SolidityParser.From);
                this.state = 220;
                this.path();
                }
                }
                break;
            case SolidityParser.Mul:
                {
                {
                this.state = 222;
                this.match(SolidityParser.Mul);
                this.state = 223;
                this.match(SolidityParser.As);
                this.state = 224;
                localContext._unitAlias = this.identifier();
                this.state = 225;
                this.match(SolidityParser.From);
                this.state = 226;
                this.path();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 230;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importAliases(): ImportAliasesContext {
        let localContext = new ImportAliasesContext(this.context, this.state);
        this.enterRule(localContext, 6, SolidityParser.RULE_importAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 232;
            localContext._symbol_ = this.identifier();
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 233;
                this.match(SolidityParser.As);
                this.state = 234;
                localContext._alias = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public path(): PathContext {
        let localContext = new PathContext(this.context, this.state);
        this.enterRule(localContext, 8, SolidityParser.RULE_path);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.match(SolidityParser.NonEmptyStringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public symbolAliases(): SymbolAliasesContext {
        let localContext = new SymbolAliasesContext(this.context, this.state);
        this.enterRule(localContext, 10, SolidityParser.RULE_symbolAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.match(SolidityParser.LBrace);
            this.state = 240;
            localContext._importAliases = this.importAliases();
            localContext._aliases.push(localContext._importAliases);
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 241;
                this.match(SolidityParser.Comma);
                this.state = 242;
                localContext._importAliases = this.importAliases();
                localContext._aliases.push(localContext._importAliases);
                }
                }
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 248;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contractDefinition(): ContractDefinitionContext {
        let localContext = new ContractDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, SolidityParser.RULE_contractDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 250;
                this.match(SolidityParser.Abstract);
                }
            }

            this.state = 253;
            this.match(SolidityParser.Contract);
            this.state = 254;
            localContext._name = this.identifier();
            this.state = 256;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 255;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 258;
            this.match(SolidityParser.LBrace);
            this.state = 262;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 259;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 264;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            this.state = 265;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceDefinition(): InterfaceDefinitionContext {
        let localContext = new InterfaceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 14, SolidityParser.RULE_interfaceDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 267;
            this.match(SolidityParser.Interface);
            this.state = 268;
            localContext._name = this.identifier();
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 269;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 272;
            this.match(SolidityParser.LBrace);
            this.state = 276;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 273;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 278;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            this.state = 279;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public libraryDefinition(): LibraryDefinitionContext {
        let localContext = new LibraryDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 16, SolidityParser.RULE_libraryDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 281;
            this.match(SolidityParser.Library);
            this.state = 282;
            localContext._name = this.identifier();
            this.state = 283;
            this.match(SolidityParser.LBrace);
            this.state = 287;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 284;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 289;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 290;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext {
        let localContext = new InheritanceSpecifierListContext(this.context, this.state);
        this.enterRule(localContext, 18, SolidityParser.RULE_inheritanceSpecifierList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(SolidityParser.Is);
            this.state = 293;
            localContext._inheritanceSpecifier = this.inheritanceSpecifier();
            localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier);
            this.state = 298;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 294;
                    this.match(SolidityParser.Comma);
                    this.state = 295;
                    localContext._inheritanceSpecifier = this.inheritanceSpecifier();
                    localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier);
                    }
                    }
                }
                this.state = 300;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inheritanceSpecifier(): InheritanceSpecifierContext {
        let localContext = new InheritanceSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 20, SolidityParser.RULE_inheritanceSpecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 301;
            localContext._name = this.identifierPath();
            this.state = 303;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 302;
                localContext._arguments = this.callArgumentList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contractBodyElement(): ContractBodyElementContext {
        let localContext = new ContractBodyElementContext(this.context, this.state);
        this.enterRule(localContext, 22, SolidityParser.RULE_contractBodyElement);
        try {
            this.state = 317;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 305;
                this.constructorDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 306;
                this.functionDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 307;
                this.modifierDefinition();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 308;
                this.fallbackFunctionDefinition();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 309;
                this.receiveFunctionDefinition();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 310;
                this.structDefinition();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 311;
                this.enumDefinition();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 312;
                this.userDefinedValueTypeDefinition();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 313;
                this.stateVariableDeclaration();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 314;
                this.eventDefinition();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 315;
                this.errorDefinition();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 316;
                this.usingDirective();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedArgument(): NamedArgumentContext {
        let localContext = new NamedArgumentContext(this.context, this.state);
        this.enterRule(localContext, 24, SolidityParser.RULE_namedArgument);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 319;
            localContext._name = this.identifier();
            this.state = 320;
            this.match(SolidityParser.Colon);
            this.state = 321;
            localContext._value = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callArgumentList(): CallArgumentListContext {
        let localContext = new CallArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 26, SolidityParser.RULE_callArgumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 323;
            this.match(SolidityParser.LParen);
            this.state = 346;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 332;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
                case 1:
                    {
                    this.state = 324;
                    this.expression(0);
                    this.state = 329;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 95) {
                        {
                        {
                        this.state = 325;
                        this.match(SolidityParser.Comma);
                        this.state = 326;
                        this.expression(0);
                        }
                        }
                        this.state = 331;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                }
                break;
            case 2:
                {
                this.state = 334;
                this.match(SolidityParser.LBrace);
                this.state = 343;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                    {
                    this.state = 335;
                    this.namedArgument();
                    this.state = 340;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 95) {
                        {
                        {
                        this.state = 336;
                        this.match(SolidityParser.Comma);
                        this.state = 337;
                        this.namedArgument();
                        }
                        }
                        this.state = 342;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 345;
                this.match(SolidityParser.RBrace);
                }
                break;
            }
            this.state = 348;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierPath(): IdentifierPathContext {
        let localContext = new IdentifierPathContext(this.context, this.state);
        this.enterRule(localContext, 28, SolidityParser.RULE_identifierPath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.identifier();
            this.state = 355;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 351;
                    this.match(SolidityParser.Period);
                    this.state = 352;
                    this.identifier();
                    }
                    }
                }
                this.state = 357;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifierInvocation(): ModifierInvocationContext {
        let localContext = new ModifierInvocationContext(this.context, this.state);
        this.enterRule(localContext, 30, SolidityParser.RULE_modifierInvocation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.identifierPath();
            this.state = 360;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 359;
                this.callArgumentList();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visibility(): VisibilityContext {
        let localContext = new VisibilityContext(this.context, this.state);
        this.enterRule(localContext, 32, SolidityParser.RULE_visibility);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 362;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 201359361) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 34, SolidityParser.RULE_parameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            localContext._parameterDeclaration = this.parameterDeclaration();
            localContext._parameters.push(localContext._parameterDeclaration);
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 365;
                this.match(SolidityParser.Comma);
                this.state = 366;
                localContext._parameterDeclaration = this.parameterDeclaration();
                localContext._parameters.push(localContext._parameterDeclaration);
                }
                }
                this.state = 371;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterDeclaration(): ParameterDeclarationContext {
        let localContext = new ParameterDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 36, SolidityParser.RULE_parameterDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 372;
            localContext._type_ = this.typeName(0);
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 373;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 376;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constructorDefinition(): ConstructorDefinitionContext {
        let localContext = new ConstructorDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 38, SolidityParser.RULE_constructorDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.match(SolidityParser.Constructor);
            this.state = 380;
            this.match(SolidityParser.LParen);
            this.state = 382;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 381;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 384;
            this.match(SolidityParser.RParen);
            this.state = 397;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 395;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                    case 1:
                        {
                        this.state = 385;
                        this.modifierInvocation();
                        }
                        break;
                    case 2:
                        {
                        this.state = 386;
                        if (!(!localContext.payableSet)) {
                            throw this.createFailedPredicateException("!$payableSet");
                        }
                        this.state = 387;
                        this.match(SolidityParser.Payable);
                        localContext!.payableSet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 389;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 390;
                        this.match(SolidityParser.Internal);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 4:
                        {
                        this.state = 392;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 393;
                        this.match(SolidityParser.Public);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 399;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            }
            this.state = 400;
            localContext._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stateMutability(): StateMutabilityContext {
        let localContext = new StateMutabilityContext(this.context, this.state);
        this.enterRule(localContext, 40, SolidityParser.RULE_stateMutability);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2097169) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public overrideSpecifier(): OverrideSpecifierContext {
        let localContext = new OverrideSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 42, SolidityParser.RULE_overrideSpecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.match(SolidityParser.Override);
            this.state = 416;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 405;
                this.match(SolidityParser.LParen);
                this.state = 406;
                localContext._identifierPath = this.identifierPath();
                localContext._overrides.push(localContext._identifierPath);
                this.state = 411;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 407;
                    this.match(SolidityParser.Comma);
                    this.state = 408;
                    localContext._identifierPath = this.identifierPath();
                    localContext._overrides.push(localContext._identifierPath);
                    }
                    }
                    this.state = 413;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 414;
                this.match(SolidityParser.RParen);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDefinition(): FunctionDefinitionContext {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 44, SolidityParser.RULE_functionDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 418;
            this.match(SolidityParser.Function);
            this.state = 422;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Identifier:
                {
                this.state = 419;
                this.identifier();
                }
                break;
            case SolidityParser.Fallback:
                {
                this.state = 420;
                this.match(SolidityParser.Fallback);
                }
                break;
            case SolidityParser.Receive:
                {
                this.state = 421;
                this.match(SolidityParser.Receive);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 424;
            this.match(SolidityParser.LParen);
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 425;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 428;
            this.match(SolidityParser.RParen);
            this.state = 447;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 445;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
                    case 1:
                        {
                        this.state = 429;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 430;
                        this.visibility();
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 433;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 434;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 437;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 438;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 439;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 441;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 442;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 449;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            }
            this.state = 455;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 450;
                this.match(SolidityParser.Returns);
                this.state = 451;
                this.match(SolidityParser.LParen);
                this.state = 452;
                localContext._returnParameters = this.parameterList();
                this.state = 453;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 459;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 457;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 458;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifierDefinition(): ModifierDefinitionContext {
        let localContext = new ModifierDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 46, SolidityParser.RULE_modifierDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 461;
            this.match(SolidityParser.Modifier);
            this.state = 462;
            localContext._name = this.identifier();
            this.state = 468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                {
                this.state = 463;
                this.match(SolidityParser.LParen);
                this.state = 465;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                case 1:
                    {
                    this.state = 464;
                    localContext._arguments = this.parameterList();
                    }
                    break;
                }
                this.state = 467;
                this.match(SolidityParser.RParen);
                }
                break;
            }
            this.state = 479;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 477;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
                    case 1:
                        {
                        this.state = 470;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 471;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 473;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 474;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 481;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            this.state = 484;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 482;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 483;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext {
        let localContext = new FallbackFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 48, SolidityParser.RULE_fallbackFunctionDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 486;
            localContext._kind = this.match(SolidityParser.Fallback);
            this.state = 487;
            this.match(SolidityParser.LParen);
            this.state = 491;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 488;
                this.parameterList();
                 localContext!.hasParameters =  true;
                }
                break;
            }
            this.state = 493;
            this.match(SolidityParser.RParen);
            this.state = 511;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 509;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
                    case 1:
                        {
                        this.state = 494;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 495;
                        this.match(SolidityParser.External);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 497;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 498;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 501;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 502;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 503;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 505;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 506;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 513;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            }
            this.state = 521;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 514;
                if (!(localContext.hasParameters)) {
                    throw this.createFailedPredicateException("$hasParameters");
                }
                this.state = 515;
                this.match(SolidityParser.Returns);
                this.state = 516;
                this.match(SolidityParser.LParen);
                this.state = 517;
                localContext._returnParameters = this.parameterList();
                this.state = 518;
                this.match(SolidityParser.RParen);
                }
                break;
            case 2:
                {
                this.state = 520;
                if (!(!localContext.hasParameters)) {
                    throw this.createFailedPredicateException("!$hasParameters");
                }
                }
                break;
            }
            this.state = 525;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 523;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 524;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext {
        let localContext = new ReceiveFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 50, SolidityParser.RULE_receiveFunctionDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 527;
            localContext._kind = this.match(SolidityParser.Receive);
            this.state = 528;
            this.match(SolidityParser.LParen);
            this.state = 529;
            this.match(SolidityParser.RParen);
            this.state = 546;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 544;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                    case 1:
                        {
                        this.state = 530;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 531;
                        this.match(SolidityParser.External);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 533;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 534;
                        this.match(SolidityParser.Payable);
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 536;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 537;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 538;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 540;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 541;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 548;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            this.state = 551;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 549;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 550;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDefinition(): StructDefinitionContext {
        let localContext = new StructDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 52, SolidityParser.RULE_structDefinition);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 553;
            this.match(SolidityParser.Struct);
            this.state = 554;
            localContext._name = this.identifier();
            this.state = 555;
            this.match(SolidityParser.LBrace);
            this.state = 557;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 556;
                    localContext._members = this.structMember();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 559;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 561;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structMember(): StructMemberContext {
        let localContext = new StructMemberContext(this.context, this.state);
        this.enterRule(localContext, 54, SolidityParser.RULE_structMember);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 563;
            localContext._type_ = this.typeName(0);
            this.state = 564;
            localContext._name = this.identifier();
            this.state = 565;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDefinition(): EnumDefinitionContext {
        let localContext = new EnumDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 56, SolidityParser.RULE_enumDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 567;
            this.match(SolidityParser.Enum);
            this.state = 568;
            localContext._name = this.identifier();
            this.state = 569;
            this.match(SolidityParser.LBrace);
            this.state = 570;
            localContext._identifier = this.identifier();
            localContext._enumValues.push(localContext._identifier);
            this.state = 575;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 571;
                this.match(SolidityParser.Comma);
                this.state = 572;
                localContext._identifier = this.identifier();
                localContext._enumValues.push(localContext._identifier);
                }
                }
                this.state = 577;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 578;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext {
        let localContext = new UserDefinedValueTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 58, SolidityParser.RULE_userDefinedValueTypeDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 580;
            this.match(SolidityParser.Type);
            this.state = 581;
            localContext._name = this.identifier();
            this.state = 582;
            this.match(SolidityParser.Is);
            this.state = 583;
            this.elementaryTypeName(true);
            this.state = 584;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stateVariableDeclaration(): StateVariableDeclarationContext {
        let localContext = new StateVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 60, SolidityParser.RULE_stateVariableDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 586;
            localContext._type_ = this.typeName(0);
            this.state = 608;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 606;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                    case 1:
                        {
                        this.state = 587;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 588;
                        this.match(SolidityParser.Public);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 590;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 591;
                        this.match(SolidityParser.Private);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 593;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 594;
                        this.match(SolidityParser.Internal);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 4:
                        {
                        this.state = 596;
                        if (!(!localContext.constantnessSet)) {
                            throw this.createFailedPredicateException("!$constantnessSet");
                        }
                        this.state = 597;
                        this.match(SolidityParser.Constant);
                        localContext!.constantnessSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 599;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 600;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    case 6:
                        {
                        this.state = 603;
                        if (!(!localContext.constantnessSet)) {
                            throw this.createFailedPredicateException("!$constantnessSet");
                        }
                        this.state = 604;
                        this.match(SolidityParser.Immutable);
                        localContext!.constantnessSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 610;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            }
            this.state = 611;
            localContext._name = this.identifier();
            this.state = 614;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 612;
                this.match(SolidityParser.Assign);
                this.state = 613;
                localContext._initialValue = this.expression(0);
                }
            }

            this.state = 616;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantVariableDeclaration(): ConstantVariableDeclarationContext {
        let localContext = new ConstantVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 62, SolidityParser.RULE_constantVariableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 618;
            localContext._type_ = this.typeName(0);
            this.state = 619;
            this.match(SolidityParser.Constant);
            this.state = 620;
            localContext._name = this.identifier();
            this.state = 621;
            this.match(SolidityParser.Assign);
            this.state = 622;
            localContext._initialValue = this.expression(0);
            this.state = 623;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventParameter(): EventParameterContext {
        let localContext = new EventParameterContext(this.context, this.state);
        this.enterRule(localContext, 64, SolidityParser.RULE_eventParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 625;
            localContext._type_ = this.typeName(0);
            this.state = 627;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 626;
                this.match(SolidityParser.Indexed);
                }
            }

            this.state = 630;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 629;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventDefinition(): EventDefinitionContext {
        let localContext = new EventDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 66, SolidityParser.RULE_eventDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 632;
            this.match(SolidityParser.Event);
            this.state = 633;
            localContext._name = this.identifier();
            this.state = 634;
            this.match(SolidityParser.LParen);
            this.state = 643;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
            case 1:
                {
                this.state = 635;
                localContext._eventParameter = this.eventParameter();
                localContext._parameters.push(localContext._eventParameter);
                this.state = 640;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 636;
                    this.match(SolidityParser.Comma);
                    this.state = 637;
                    localContext._eventParameter = this.eventParameter();
                    localContext._parameters.push(localContext._eventParameter);
                    }
                    }
                    this.state = 642;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 645;
            this.match(SolidityParser.RParen);
            this.state = 647;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 646;
                this.match(SolidityParser.Anonymous);
                }
            }

            this.state = 649;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorParameter(): ErrorParameterContext {
        let localContext = new ErrorParameterContext(this.context, this.state);
        this.enterRule(localContext, 68, SolidityParser.RULE_errorParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 651;
            localContext._type_ = this.typeName(0);
            this.state = 653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 652;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorDefinition(): ErrorDefinitionContext {
        let localContext = new ErrorDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 70, SolidityParser.RULE_errorDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 655;
            this.match(SolidityParser.Error);
            this.state = 656;
            localContext._name = this.identifier();
            this.state = 657;
            this.match(SolidityParser.LParen);
            this.state = 666;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                {
                this.state = 658;
                localContext._errorParameter = this.errorParameter();
                localContext._parameters.push(localContext._errorParameter);
                this.state = 663;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 659;
                    this.match(SolidityParser.Comma);
                    this.state = 660;
                    localContext._errorParameter = this.errorParameter();
                    localContext._parameters.push(localContext._errorParameter);
                    }
                    }
                    this.state = 665;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 668;
            this.match(SolidityParser.RParen);
            this.state = 669;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public userDefinableOperator(): UserDefinableOperatorContext {
        let localContext = new UserDefinableOperatorContext(this.context, this.state);
        this.enterRule(localContext, 72, SolidityParser.RULE_userDefinableOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 671;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 784327) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usingDirective(): UsingDirectiveContext {
        let localContext = new UsingDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 74, SolidityParser.RULE_usingDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 673;
            this.match(SolidityParser.Using);
            this.state = 694;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Identifier:
                {
                this.state = 674;
                this.identifierPath();
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 675;
                this.match(SolidityParser.LBrace);
                this.state = 676;
                this.identifierPath();
                this.state = 679;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 677;
                    this.match(SolidityParser.As);
                    this.state = 678;
                    this.userDefinableOperator();
                    }
                }

                this.state = 689;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 681;
                    this.match(SolidityParser.Comma);
                    this.state = 682;
                    this.identifierPath();
                    this.state = 685;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 5) {
                        {
                        this.state = 683;
                        this.match(SolidityParser.As);
                        this.state = 684;
                        this.userDefinableOperator();
                        }
                    }

                    }
                    }
                    this.state = 691;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 692;
                this.match(SolidityParser.RBrace);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 696;
            this.match(SolidityParser.For);
            this.state = 699;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                {
                this.state = 697;
                this.match(SolidityParser.Mul);
                }
                break;
            case 2:
                {
                this.state = 698;
                this.typeName(0);
                }
                break;
            }
            this.state = 702;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 701;
                this.match(SolidityParser.Global);
                }
            }

            this.state = 704;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public typeName(): TypeNameContext;
    public typeName(_p: number): TypeNameContext;
    public typeName(_p?: number): TypeNameContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeNameContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 76;
        this.enterRecursionRule(localContext, 76, SolidityParser.RULE_typeName, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
            case 1:
                {
                this.state = 707;
                this.elementaryTypeName(true);
                }
                break;
            case 2:
                {
                this.state = 708;
                this.functionTypeName();
                }
                break;
            case 3:
                {
                this.state = 709;
                this.mappingType();
                }
                break;
            case 4:
                {
                this.state = 710;
                this.identifierPath();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 721;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeNameContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_typeName);
                    this.state = 713;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 714;
                    this.match(SolidityParser.LBrack);
                    this.state = 716;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
                    case 1:
                        {
                        this.state = 715;
                        this.expression(0);
                        }
                        break;
                    }
                    this.state = 718;
                    this.match(SolidityParser.RBrack);
                    }
                    }
                }
                this.state = 723;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public elementaryTypeName(allowAddressPayable: boolean): ElementaryTypeNameContext {
        let localContext = new ElementaryTypeNameContext(this.context, this.state, allowAddressPayable);
        this.enterRule(localContext, 78, SolidityParser.RULE_elementaryTypeName);
        try {
            this.state = 736;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 724;
                this.match(SolidityParser.Address);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 725;
                if (!(localContext.allowAddressPayable)) {
                    throw this.createFailedPredicateException("$allowAddressPayable");
                }
                this.state = 726;
                this.match(SolidityParser.Address);
                this.state = 727;
                this.match(SolidityParser.Payable);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 728;
                this.match(SolidityParser.Bool);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 729;
                this.match(SolidityParser.String);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 730;
                this.match(SolidityParser.Bytes);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 731;
                this.match(SolidityParser.SignedIntegerType);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 732;
                this.match(SolidityParser.UnsignedIntegerType);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 733;
                this.match(SolidityParser.FixedBytes);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 734;
                this.match(SolidityParser.Fixed);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 735;
                this.match(SolidityParser.Ufixed);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTypeName(): FunctionTypeNameContext {
        let localContext = new FunctionTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 80, SolidityParser.RULE_functionTypeName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 738;
            this.match(SolidityParser.Function);
            this.state = 739;
            this.match(SolidityParser.LParen);
            this.state = 741;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                {
                this.state = 740;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 743;
            this.match(SolidityParser.RParen);
            this.state = 754;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 752;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                    case 1:
                        {
                        this.state = 744;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 745;
                        this.visibility();
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 748;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 749;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 756;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            }
            this.state = 762;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
            case 1:
                {
                this.state = 757;
                this.match(SolidityParser.Returns);
                this.state = 758;
                this.match(SolidityParser.LParen);
                this.state = 759;
                localContext._returnParameters = this.parameterList();
                this.state = 760;
                this.match(SolidityParser.RParen);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 82, SolidityParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            localContext._type_ = this.typeName(0);
            this.state = 766;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 765;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 768;
            localContext._name = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataLocation(): DataLocationContext {
        let localContext = new DataLocationContext(this.context, this.state);
        this.enterRule(localContext, 84, SolidityParser.RULE_dataLocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 770;
            _la = this.tokenStream.LA(1);
            if(!(_la === 10 || _la === 42 || _la === 57)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, SolidityParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                {
                localContext = new PayableConversionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 773;
                this.match(SolidityParser.Payable);
                this.state = 774;
                this.callArgumentList();
                }
                break;
            case 2:
                {
                localContext = new MetaTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 775;
                this.match(SolidityParser.Type);
                this.state = 776;
                this.match(SolidityParser.LParen);
                this.state = 777;
                this.typeName(0);
                this.state = 778;
                this.match(SolidityParser.RParen);
                }
                break;
            case 3:
                {
                localContext = new UnaryPrefixOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 780;
                _la = this.tokenStream.LA(1);
                if(!(_la === 16 || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 30721) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 781;
                this.expression(19);
                }
                break;
            case 4:
                {
                localContext = new NewExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 782;
                this.match(SolidityParser.New);
                this.state = 783;
                this.typeName(0);
                }
                break;
            case 5:
                {
                localContext = new TupleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 784;
                this.tupleExpression();
                }
                break;
            case 6:
                {
                localContext = new InlineArrayContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 785;
                this.inlineArrayExpression();
                }
                break;
            case 7:
                {
                localContext = new PrimaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 790;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 786;
                    this.identifier();
                    }
                    break;
                case 2:
                    {
                    this.state = 787;
                    this.literal();
                    }
                    break;
                case 3:
                    {
                    this.state = 788;
                    this.literalWithSubDenomination();
                    }
                    break;
                case 4:
                    {
                    this.state = 789;
                    this.elementaryTypeName(false);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 878;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 876;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 794;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 795;
                        this.match(SolidityParser.Exp);
                        this.state = 796;
                        this.expression(17);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivModOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 797;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 798;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 799;
                        this.expression(17);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 800;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 801;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 104 || _la === 105)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 802;
                        this.expression(16);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ShiftOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 803;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 804;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 805;
                        this.expression(15);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BitAndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 806;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 807;
                        this.match(SolidityParser.BitAnd);
                        this.state = 808;
                        this.expression(14);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitXorOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 809;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 810;
                        this.match(SolidityParser.BitXor);
                        this.state = 811;
                        this.expression(13);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitOrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 812;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 813;
                        this.match(SolidityParser.BitOr);
                        this.state = 814;
                        this.expression(12);
                        }
                        break;
                    case 8:
                        {
                        localContext = new OrderComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 815;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 816;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 15) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 817;
                        this.expression(11);
                        }
                        break;
                    case 9:
                        {
                        localContext = new EqualityComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 818;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 819;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 110 || _la === 111)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 820;
                        this.expression(10);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 821;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 822;
                        this.match(SolidityParser.And);
                        this.state = 823;
                        this.expression(9);
                        }
                        break;
                    case 11:
                        {
                        localContext = new OrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 824;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 825;
                        this.match(SolidityParser.Or);
                        this.state = 826;
                        this.expression(8);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ConditionalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 827;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 828;
                        this.match(SolidityParser.Conditional);
                        this.state = 829;
                        this.expression(0);
                        this.state = 830;
                        this.match(SolidityParser.Colon);
                        this.state = 831;
                        this.expression(6);
                        }
                        break;
                    case 13:
                        {
                        localContext = new AssignmentContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 833;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 834;
                        this.assignOp();
                        this.state = 835;
                        this.expression(5);
                        }
                        break;
                    case 14:
                        {
                        localContext = new IndexAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 837;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 838;
                        this.match(SolidityParser.LBrack);
                        this.state = 840;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                        case 1:
                            {
                            this.state = 839;
                            (localContext as IndexAccessContext)._index = this.expression(0);
                            }
                            break;
                        }
                        this.state = 842;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 15:
                        {
                        localContext = new IndexRangeAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 843;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 844;
                        this.match(SolidityParser.LBrack);
                        this.state = 846;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
                        case 1:
                            {
                            this.state = 845;
                            (localContext as IndexRangeAccessContext)._startIndex = this.expression(0);
                            }
                            break;
                        }
                        this.state = 848;
                        this.match(SolidityParser.Colon);
                        this.state = 850;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
                        case 1:
                            {
                            this.state = 849;
                            (localContext as IndexRangeAccessContext)._endIndex = this.expression(0);
                            }
                            break;
                        }
                        this.state = 852;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 16:
                        {
                        localContext = new MemberAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 853;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 854;
                        this.match(SolidityParser.Period);
                        this.state = 857;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case SolidityParser.Error:
                        case SolidityParser.From:
                        case SolidityParser.Global:
                        case SolidityParser.Revert:
                        case SolidityParser.Identifier:
                            {
                            this.state = 855;
                            this.identifier();
                            }
                            break;
                        case SolidityParser.Address:
                            {
                            this.state = 856;
                            this.match(SolidityParser.Address);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    case 17:
                        {
                        localContext = new FunctionCallOptionsContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 859;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 860;
                        this.match(SolidityParser.LBrace);
                        this.state = 869;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                            {
                            this.state = 861;
                            this.namedArgument();
                            this.state = 866;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 95) {
                                {
                                {
                                this.state = 862;
                                this.match(SolidityParser.Comma);
                                this.state = 863;
                                this.namedArgument();
                                }
                                }
                                this.state = 868;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            }
                        }

                        this.state = 871;
                        this.match(SolidityParser.RBrace);
                        }
                        break;
                    case 18:
                        {
                        localContext = new FunctionCallContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 872;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 873;
                        this.callArgumentList();
                        }
                        break;
                    case 19:
                        {
                        localContext = new UnarySuffixOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 874;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 875;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 118 || _la === 119)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 880;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public assignOp(): AssignOpContext {
        let localContext = new AssignOpContext(this.context, this.state);
        this.enterRule(localContext, 88, SolidityParser.RULE_assignOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 881;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 4095) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleExpression(): TupleExpressionContext {
        let localContext = new TupleExpressionContext(this.context, this.state);
        this.enterRule(localContext, 90, SolidityParser.RULE_tupleExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 883;
            this.match(SolidityParser.LParen);
            {
            this.state = 885;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 884;
                this.expression(0);
                }
                break;
            }
            this.state = 893;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 887;
                this.match(SolidityParser.Comma);
                this.state = 889;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
                case 1:
                    {
                    this.state = 888;
                    this.expression(0);
                    }
                    break;
                }
                }
                }
                this.state = 895;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 896;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineArrayExpression(): InlineArrayExpressionContext {
        let localContext = new InlineArrayExpressionContext(this.context, this.state);
        this.enterRule(localContext, 92, SolidityParser.RULE_inlineArrayExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 898;
            this.match(SolidityParser.LBrack);
            {
            this.state = 899;
            this.expression(0);
            this.state = 904;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 900;
                this.match(SolidityParser.Comma);
                this.state = 901;
                this.expression(0);
                }
                }
                this.state = 906;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 907;
            this.match(SolidityParser.RBrack);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 94, SolidityParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 909;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 96, SolidityParser.RULE_literal);
        try {
            this.state = 916;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 911;
                this.stringLiteral();
                }
                break;
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 912;
                this.numberLiteral();
                }
                break;
            case SolidityParser.False:
            case SolidityParser.True:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 913;
                this.booleanLiteral();
                }
                break;
            case SolidityParser.HexString:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 914;
                this.hexStringLiteral();
                }
                break;
            case SolidityParser.UnicodeStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 915;
                this.unicodeStringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalWithSubDenomination(): LiteralWithSubDenominationContext {
        let localContext = new LiteralWithSubDenominationContext(this.context, this.state);
        this.enterRule(localContext, 98, SolidityParser.RULE_literalWithSubDenomination);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 918;
            this.numberLiteral();
            this.state = 919;
            this.match(SolidityParser.SubDenomination);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanLiteral(): BooleanLiteralContext {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 100, SolidityParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 921;
            _la = this.tokenStream.LA(1);
            if(!(_la === 25 || _la === 60)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 102, SolidityParser.RULE_stringLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 924;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 923;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 122 || _la === 123)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 926;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hexStringLiteral(): HexStringLiteralContext {
        let localContext = new HexStringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 104, SolidityParser.RULE_hexStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 929;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 928;
                    this.match(SolidityParser.HexString);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 931;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unicodeStringLiteral(): UnicodeStringLiteralContext {
        let localContext = new UnicodeStringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 106, SolidityParser.RULE_unicodeStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 934;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 933;
                    this.match(SolidityParser.UnicodeStringLiteral);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 936;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 95, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numberLiteral(): NumberLiteralContext {
        let localContext = new NumberLiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, SolidityParser.RULE_numberLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 938;
            _la = this.tokenStream.LA(1);
            if(!(_la === 126 || _la === 128)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 110, SolidityParser.RULE_block);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 940;
            this.match(SolidityParser.LBrace);
            this.state = 945;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 943;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
                    case 1:
                        {
                        this.state = 941;
                        this.statement();
                        }
                        break;
                    case 2:
                        {
                        this.state = 942;
                        this.uncheckedBlock();
                        }
                        break;
                    }
                    }
                }
                this.state = 947;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            }
            this.state = 948;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uncheckedBlock(): UncheckedBlockContext {
        let localContext = new UncheckedBlockContext(this.context, this.state);
        this.enterRule(localContext, 112, SolidityParser.RULE_uncheckedBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 950;
            this.match(SolidityParser.Unchecked);
            this.state = 951;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 114, SolidityParser.RULE_statement);
        try {
            this.state = 966;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 953;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 954;
                this.simpleStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 955;
                this.ifStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 956;
                this.forStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 957;
                this.whileStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 958;
                this.doWhileStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 959;
                this.continueStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 960;
                this.breakStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 961;
                this.tryStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 962;
                this.returnStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 963;
                this.emitStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 964;
                this.revertStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 965;
                this.assemblyStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleStatement(): SimpleStatementContext {
        let localContext = new SimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 116, SolidityParser.RULE_simpleStatement);
        try {
            this.state = 970;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 968;
                this.variableDeclarationStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 969;
                this.expressionStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 118, SolidityParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 972;
            this.match(SolidityParser.If);
            this.state = 973;
            this.match(SolidityParser.LParen);
            this.state = 974;
            this.expression(0);
            this.state = 975;
            this.match(SolidityParser.RParen);
            this.state = 976;
            this.statement();
            this.state = 979;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                {
                this.state = 977;
                this.match(SolidityParser.Else);
                this.state = 978;
                this.statement();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forStatement(): ForStatementContext {
        let localContext = new ForStatementContext(this.context, this.state);
        this.enterRule(localContext, 120, SolidityParser.RULE_forStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 981;
            this.match(SolidityParser.For);
            this.state = 982;
            this.match(SolidityParser.LParen);
            this.state = 985;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 983;
                this.simpleStatement();
                }
                break;
            case 2:
                {
                this.state = 984;
                this.match(SolidityParser.Semicolon);
                }
                break;
            }
            this.state = 989;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 987;
                this.expressionStatement();
                }
                break;
            case 2:
                {
                this.state = 988;
                this.match(SolidityParser.Semicolon);
                }
                break;
            }
            this.state = 992;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 991;
                this.expression(0);
                }
                break;
            }
            this.state = 994;
            this.match(SolidityParser.RParen);
            this.state = 995;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 122, SolidityParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 997;
            this.match(SolidityParser.While);
            this.state = 998;
            this.match(SolidityParser.LParen);
            this.state = 999;
            this.expression(0);
            this.state = 1000;
            this.match(SolidityParser.RParen);
            this.state = 1001;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doWhileStatement(): DoWhileStatementContext {
        let localContext = new DoWhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 124, SolidityParser.RULE_doWhileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1003;
            this.match(SolidityParser.Do);
            this.state = 1004;
            this.statement();
            this.state = 1005;
            this.match(SolidityParser.While);
            this.state = 1006;
            this.match(SolidityParser.LParen);
            this.state = 1007;
            this.expression(0);
            this.state = 1008;
            this.match(SolidityParser.RParen);
            this.state = 1009;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 126, SolidityParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1011;
            this.match(SolidityParser.Continue);
            this.state = 1012;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 128, SolidityParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1014;
            this.match(SolidityParser.Break);
            this.state = 1015;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryStatement(): TryStatementContext {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 130, SolidityParser.RULE_tryStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1017;
            this.match(SolidityParser.Try);
            this.state = 1018;
            this.expression(0);
            this.state = 1024;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 1019;
                this.match(SolidityParser.Returns);
                this.state = 1020;
                this.match(SolidityParser.LParen);
                this.state = 1021;
                localContext._returnParameters = this.parameterList();
                this.state = 1022;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 1026;
            this.block();
            this.state = 1028;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1027;
                    this.catchClause();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1030;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClause(): CatchClauseContext {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 132, SolidityParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1032;
            this.match(SolidityParser.Catch);
            this.state = 1040;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 71 || _la === 130) {
                {
                this.state = 1034;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                    {
                    this.state = 1033;
                    this.identifier();
                    }
                }

                this.state = 1036;
                this.match(SolidityParser.LParen);
                {
                this.state = 1037;
                localContext._arguments = this.parameterList();
                }
                this.state = 1038;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 1042;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 134, SolidityParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1044;
            this.match(SolidityParser.Return);
            this.state = 1046;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                {
                this.state = 1045;
                this.expression(0);
                }
                break;
            }
            this.state = 1048;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emitStatement(): EmitStatementContext {
        let localContext = new EmitStatementContext(this.context, this.state);
        this.enterRule(localContext, 136, SolidityParser.RULE_emitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1050;
            this.match(SolidityParser.Emit);
            this.state = 1051;
            this.expression(0);
            this.state = 1052;
            this.callArgumentList();
            this.state = 1053;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public revertStatement(): RevertStatementContext {
        let localContext = new RevertStatementContext(this.context, this.state);
        this.enterRule(localContext, 138, SolidityParser.RULE_revertStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1055;
            this.match(SolidityParser.Revert);
            this.state = 1056;
            this.expression(0);
            this.state = 1057;
            this.callArgumentList();
            this.state = 1058;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assemblyStatement(): AssemblyStatementContext {
        let localContext = new AssemblyStatementContext(this.context, this.state);
        this.enterRule(localContext, 140, SolidityParser.RULE_assemblyStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1060;
            this.match(SolidityParser.Assembly);
            this.state = 1062;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 134) {
                {
                this.state = 1061;
                this.match(SolidityParser.AssemblyDialect);
                }
            }

            this.state = 1065;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 1064;
                this.assemblyFlags();
                }
            }

            this.state = 1067;
            this.match(SolidityParser.AssemblyLBrace);
            this.state = 1071;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 4220901) !== 0)) {
                {
                {
                this.state = 1068;
                this.yulStatement();
                }
                }
                this.state = 1073;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1074;
            this.match(SolidityParser.YulRBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assemblyFlags(): AssemblyFlagsContext {
        let localContext = new AssemblyFlagsContext(this.context, this.state);
        this.enterRule(localContext, 142, SolidityParser.RULE_assemblyFlags);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1076;
            this.match(SolidityParser.AssemblyBlockLParen);
            this.state = 1077;
            this.match(SolidityParser.AssemblyFlagString);
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1078;
                this.match(SolidityParser.AssemblyBlockComma);
                this.state = 1079;
                this.match(SolidityParser.AssemblyFlagString);
                }
                }
                this.state = 1084;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1085;
            this.match(SolidityParser.AssemblyBlockRParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationList(): VariableDeclarationListContext {
        let localContext = new VariableDeclarationListContext(this.context, this.state);
        this.enterRule(localContext, 144, SolidityParser.RULE_variableDeclarationList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1087;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration);
            this.state = 1092;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 1088;
                this.match(SolidityParser.Comma);
                this.state = 1089;
                localContext._variableDeclaration = this.variableDeclaration();
                localContext._variableDeclarations.push(localContext._variableDeclaration);
                }
                }
                this.state = 1094;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationTuple(): VariableDeclarationTupleContext {
        let localContext = new VariableDeclarationTupleContext(this.context, this.state);
        this.enterRule(localContext, 146, SolidityParser.RULE_variableDeclarationTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1095;
            this.match(SolidityParser.LParen);
            {
            this.state = 1099;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1096;
                    this.match(SolidityParser.Comma);
                    }
                    }
                }
                this.state = 1101;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            }
            this.state = 1102;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration);
            }
            this.state = 1110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 1104;
                this.match(SolidityParser.Comma);
                this.state = 1106;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 1105;
                    localContext._variableDeclaration = this.variableDeclaration();
                    localContext._variableDeclarations.push(localContext._variableDeclaration);
                    }
                    break;
                }
                }
                }
                this.state = 1112;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1113;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationStatement(): VariableDeclarationStatementContext {
        let localContext = new VariableDeclarationStatementContext(this.context, this.state);
        this.enterRule(localContext, 148, SolidityParser.RULE_variableDeclarationStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1124;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context) ) {
            case 1:
                {
                {
                this.state = 1115;
                this.variableDeclaration();
                this.state = 1118;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1116;
                    this.match(SolidityParser.Assign);
                    this.state = 1117;
                    this.expression(0);
                    }
                }

                }
                }
                break;
            case 2:
                {
                {
                this.state = 1120;
                this.variableDeclarationTuple();
                this.state = 1121;
                this.match(SolidityParser.Assign);
                this.state = 1122;
                this.expression(0);
                }
                }
                break;
            }
            this.state = 1126;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 150, SolidityParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1128;
            this.expression(0);
            this.state = 1129;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappingType(): MappingTypeContext {
        let localContext = new MappingTypeContext(this.context, this.state);
        this.enterRule(localContext, 152, SolidityParser.RULE_mappingType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1131;
            this.match(SolidityParser.Mapping);
            this.state = 1132;
            this.match(SolidityParser.LParen);
            this.state = 1133;
            localContext._key = this.mappingKeyType();
            this.state = 1135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 1134;
                localContext._name = this.identifier();
                }
            }

            this.state = 1137;
            this.match(SolidityParser.DoubleArrow);
            this.state = 1138;
            localContext._value = this.typeName(0);
            this.state = 1140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 1139;
                localContext._name = this.identifier();
                }
            }

            this.state = 1142;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappingKeyType(): MappingKeyTypeContext {
        let localContext = new MappingKeyTypeContext(this.context, this.state);
        this.enterRule(localContext, 154, SolidityParser.RULE_mappingKeyType);
        try {
            this.state = 1146;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1144;
                this.elementaryTypeName(false);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1145;
                this.identifierPath();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulStatement(): YulStatementContext {
        let localContext = new YulStatementContext(this.context, this.state);
        this.enterRule(localContext, 156, SolidityParser.RULE_yulStatement);
        try {
            this.state = 1159;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 122, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1148;
                this.yulBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1149;
                this.yulVariableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1150;
                this.yulAssignment();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1151;
                this.yulFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1152;
                this.yulIfStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1153;
                this.yulForStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1154;
                this.yulSwitchStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1155;
                this.match(SolidityParser.YulLeave);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1156;
                this.match(SolidityParser.YulBreak);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1157;
                this.match(SolidityParser.YulContinue);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1158;
                this.yulFunctionDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulBlock(): YulBlockContext {
        let localContext = new YulBlockContext(this.context, this.state);
        this.enterRule(localContext, 158, SolidityParser.RULE_yulBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1161;
            this.match(SolidityParser.YulLBrace);
            this.state = 1165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 4220901) !== 0)) {
                {
                {
                this.state = 1162;
                this.yulStatement();
                }
                }
                this.state = 1167;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1168;
            this.match(SolidityParser.YulRBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulVariableDeclaration(): YulVariableDeclarationContext {
        let localContext = new YulVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 160, SolidityParser.RULE_yulVariableDeclaration);
        let _la: number;
        try {
            this.state = 1189;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1170;
                this.match(SolidityParser.YulLet);
                this.state = 1171;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier);
                this.state = 1174;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 1172;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1173;
                    this.yulExpression();
                    }
                }

                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1176;
                this.match(SolidityParser.YulLet);
                this.state = 1177;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier);
                this.state = 1182;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1178;
                    this.match(SolidityParser.YulComma);
                    this.state = 1179;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._variables.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1184;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1187;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 1185;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1186;
                    this.yulFunctionCall();
                    }
                }

                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulAssignment(): YulAssignmentContext {
        let localContext = new YulAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 162, SolidityParser.RULE_yulAssignment);
        let _la: number;
        try {
            this.state = 1205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1191;
                this.yulPath();
                this.state = 1192;
                this.match(SolidityParser.YulAssign);
                this.state = 1193;
                this.yulExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1195;
                this.yulPath();
                this.state = 1198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1196;
                    this.match(SolidityParser.YulComma);
                    this.state = 1197;
                    this.yulPath();
                    }
                    }
                    this.state = 1200;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 163);
                }
                this.state = 1202;
                this.match(SolidityParser.YulAssign);
                this.state = 1203;
                this.yulFunctionCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulIfStatement(): YulIfStatementContext {
        let localContext = new YulIfStatementContext(this.context, this.state);
        this.enterRule(localContext, 164, SolidityParser.RULE_yulIfStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1207;
            this.match(SolidityParser.YulIf);
            this.state = 1208;
            localContext._cond = this.yulExpression();
            this.state = 1209;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulForStatement(): YulForStatementContext {
        let localContext = new YulForStatementContext(this.context, this.state);
        this.enterRule(localContext, 166, SolidityParser.RULE_yulForStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1211;
            this.match(SolidityParser.YulFor);
            this.state = 1212;
            localContext._init = this.yulBlock();
            this.state = 1213;
            localContext._cond = this.yulExpression();
            this.state = 1214;
            localContext._post = this.yulBlock();
            this.state = 1215;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulSwitchCase(): YulSwitchCaseContext {
        let localContext = new YulSwitchCaseContext(this.context, this.state);
        this.enterRule(localContext, 168, SolidityParser.RULE_yulSwitchCase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1217;
            this.match(SolidityParser.YulCase);
            this.state = 1218;
            this.yulLiteral();
            this.state = 1219;
            this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulSwitchStatement(): YulSwitchStatementContext {
        let localContext = new YulSwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 170, SolidityParser.RULE_yulSwitchStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1221;
            this.match(SolidityParser.YulSwitch);
            this.state = 1222;
            this.yulExpression();
            this.state = 1234;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulCase:
                {
                {
                this.state = 1224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1223;
                    this.yulSwitchCase();
                    }
                    }
                    this.state = 1226;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 144);
                this.state = 1230;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 146) {
                    {
                    this.state = 1228;
                    this.match(SolidityParser.YulDefault);
                    this.state = 1229;
                    this.yulBlock();
                    }
                }

                }
                }
                break;
            case SolidityParser.YulDefault:
                {
                {
                this.state = 1232;
                this.match(SolidityParser.YulDefault);
                this.state = 1233;
                this.yulBlock();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulFunctionDefinition(): YulFunctionDefinitionContext {
        let localContext = new YulFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 172, SolidityParser.RULE_yulFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1236;
            this.match(SolidityParser.YulFunction);
            this.state = 1237;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1238;
            this.match(SolidityParser.YulLParen);
            this.state = 1247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 165) {
                {
                this.state = 1239;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._arguments.push(localContext._YulIdentifier);
                this.state = 1244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1240;
                    this.match(SolidityParser.YulComma);
                    this.state = 1241;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._arguments.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1246;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1249;
            this.match(SolidityParser.YulRParen);
            this.state = 1259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1250;
                this.match(SolidityParser.YulArrow);
                this.state = 1251;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._returnParameters.push(localContext._YulIdentifier);
                this.state = 1256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1252;
                    this.match(SolidityParser.YulComma);
                    this.state = 1253;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._returnParameters.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1258;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1261;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulPath(): YulPathContext {
        let localContext = new YulPathContext(this.context, this.state);
        this.enterRule(localContext, 174, SolidityParser.RULE_yulPath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1263;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 162) {
                {
                {
                this.state = 1264;
                this.match(SolidityParser.YulPeriod);
                this.state = 1265;
                _la = this.tokenStream.LA(1);
                if(!(_la === 156 || _la === 165)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulFunctionCall(): YulFunctionCallContext {
        let localContext = new YulFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 176, SolidityParser.RULE_yulFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1271;
            _la = this.tokenStream.LA(1);
            if(!(_la === 156 || _la === 165)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1272;
            this.match(SolidityParser.YulLParen);
            this.state = 1281;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & 8127105) !== 0)) {
                {
                this.state = 1273;
                this.yulExpression();
                this.state = 1278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1274;
                    this.match(SolidityParser.YulComma);
                    this.state = 1275;
                    this.yulExpression();
                    }
                    }
                    this.state = 1280;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1283;
            this.match(SolidityParser.YulRParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulBoolean(): YulBooleanContext {
        let localContext = new YulBooleanContext(this.context, this.state);
        this.enterRule(localContext, 178, SolidityParser.RULE_yulBoolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1285;
            _la = this.tokenStream.LA(1);
            if(!(_la === 147 || _la === 154)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulLiteral(): YulLiteralContext {
        let localContext = new YulLiteralContext(this.context, this.state);
        this.enterRule(localContext, 180, SolidityParser.RULE_yulLiteral);
        try {
            this.state = 1292;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulDecimalNumber:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1287;
                this.match(SolidityParser.YulDecimalNumber);
                }
                break;
            case SolidityParser.YulStringLiteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1288;
                this.match(SolidityParser.YulStringLiteral);
                }
                break;
            case SolidityParser.YulHexNumber:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1289;
                this.match(SolidityParser.YulHexNumber);
                }
                break;
            case SolidityParser.YulFalse:
            case SolidityParser.YulTrue:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1290;
                this.yulBoolean();
                }
                break;
            case SolidityParser.YulHexStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1291;
                this.match(SolidityParser.YulHexStringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulExpression(): YulExpressionContext {
        let localContext = new YulExpressionContext(this.context, this.state);
        this.enterRule(localContext, 182, SolidityParser.RULE_yulExpression);
        try {
            this.state = 1297;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1294;
                this.yulPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1295;
                this.yulFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1296;
                this.yulLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 19:
            return this.constructorDefinition_sempred(localContext as ConstructorDefinitionContext, predIndex);
        case 22:
            return this.functionDefinition_sempred(localContext as FunctionDefinitionContext, predIndex);
        case 23:
            return this.modifierDefinition_sempred(localContext as ModifierDefinitionContext, predIndex);
        case 24:
            return this.fallbackFunctionDefinition_sempred(localContext as FallbackFunctionDefinitionContext, predIndex);
        case 25:
            return this.receiveFunctionDefinition_sempred(localContext as ReceiveFunctionDefinitionContext, predIndex);
        case 30:
            return this.stateVariableDeclaration_sempred(localContext as StateVariableDeclarationContext, predIndex);
        case 38:
            return this.typeName_sempred(localContext as TypeNameContext, predIndex);
        case 39:
            return this.elementaryTypeName_sempred(localContext as ElementaryTypeNameContext, predIndex);
        case 40:
            return this.functionTypeName_sempred(localContext as FunctionTypeNameContext, predIndex);
        case 43:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private constructorDefinition_sempred(localContext: ConstructorDefinitionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return !localContext.payableSet;
        case 1:
            return !localContext.visibilitySet;
        case 2:
            return !localContext.visibilitySet;
        }
        return true;
    }
    private functionDefinition_sempred(localContext: FunctionDefinitionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return !localContext.visibilitySet;
        case 4:
            return !localContext.mutabilitySet;
        case 5:
            return !localContext.virtualSet;
        case 6:
            return !localContext.overrideSpecifierSet;
        }
        return true;
    }
    private modifierDefinition_sempred(localContext: ModifierDefinitionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return !localContext.virtualSet;
        case 8:
            return !localContext.overrideSpecifierSet;
        }
        return true;
    }
    private fallbackFunctionDefinition_sempred(localContext: FallbackFunctionDefinitionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return !localContext.visibilitySet;
        case 10:
            return !localContext.mutabilitySet;
        case 11:
            return !localContext.virtualSet;
        case 12:
            return !localContext.overrideSpecifierSet;
        case 13:
            return localContext.hasParameters;
        case 14:
            return !localContext.hasParameters;
        }
        return true;
    }
    private receiveFunctionDefinition_sempred(localContext: ReceiveFunctionDefinitionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 15:
            return !localContext.visibilitySet;
        case 16:
            return !localContext.mutabilitySet;
        case 17:
            return !localContext.virtualSet;
        case 18:
            return !localContext.overrideSpecifierSet;
        }
        return true;
    }
    private stateVariableDeclaration_sempred(localContext: StateVariableDeclarationContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 19:
            return !localContext.visibilitySet;
        case 20:
            return !localContext.visibilitySet;
        case 21:
            return !localContext.visibilitySet;
        case 22:
            return !localContext.constantnessSet;
        case 23:
            return !localContext.overrideSpecifierSet;
        case 24:
            return !localContext.constantnessSet;
        }
        return true;
    }
    private typeName_sempred(localContext: TypeNameContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 25:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private elementaryTypeName_sempred(localContext: ElementaryTypeNameContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 26:
            return localContext.allowAddressPayable;
        }
        return true;
    }
    private functionTypeName_sempred(localContext: FunctionTypeNameContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 27:
            return !localContext.visibilitySet;
        case 28:
            return !localContext.mutabilitySet;
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 29:
            return this.precpred(this.context, 17);
        case 30:
            return this.precpred(this.context, 16);
        case 31:
            return this.precpred(this.context, 15);
        case 32:
            return this.precpred(this.context, 14);
        case 33:
            return this.precpred(this.context, 13);
        case 34:
            return this.precpred(this.context, 12);
        case 35:
            return this.precpred(this.context, 11);
        case 36:
            return this.precpred(this.context, 10);
        case 37:
            return this.precpred(this.context, 9);
        case 38:
            return this.precpred(this.context, 8);
        case 39:
            return this.precpred(this.context, 7);
        case 40:
            return this.precpred(this.context, 6);
        case 41:
            return this.precpred(this.context, 5);
        case 42:
            return this.precpred(this.context, 26);
        case 43:
            return this.precpred(this.context, 25);
        case 44:
            return this.precpred(this.context, 24);
        case 45:
            return this.precpred(this.context, 23);
        case 46:
            return this.precpred(this.context, 22);
        case 47:
            return this.precpred(this.context, 18);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,177,1300,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,198,8,
        0,10,0,12,0,201,9,0,1,0,1,0,1,1,1,1,4,1,207,8,1,11,1,12,1,208,1,
        1,1,1,1,2,1,2,1,2,1,2,3,2,217,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,229,8,2,1,2,1,2,1,3,1,3,1,3,3,3,236,8,3,1,4,1,4,1,
        5,1,5,1,5,1,5,5,5,244,8,5,10,5,12,5,247,9,5,1,5,1,5,1,6,3,6,252,
        8,6,1,6,1,6,1,6,3,6,257,8,6,1,6,1,6,5,6,261,8,6,10,6,12,6,264,9,
        6,1,6,1,6,1,7,1,7,1,7,3,7,271,8,7,1,7,1,7,5,7,275,8,7,10,7,12,7,
        278,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,286,8,8,10,8,12,8,289,9,8,1,
        8,1,8,1,9,1,9,1,9,1,9,5,9,297,8,9,10,9,12,9,300,9,9,1,10,1,10,3,
        10,304,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,3,11,318,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,5,
        13,328,8,13,10,13,12,13,331,9,13,3,13,333,8,13,1,13,1,13,1,13,1,
        13,5,13,339,8,13,10,13,12,13,342,9,13,3,13,344,8,13,1,13,3,13,347,
        8,13,1,13,1,13,1,14,1,14,1,14,5,14,354,8,14,10,14,12,14,357,9,14,
        1,15,1,15,3,15,361,8,15,1,16,1,16,1,17,1,17,1,17,5,17,368,8,17,10,
        17,12,17,371,9,17,1,18,1,18,3,18,375,8,18,1,18,3,18,378,8,18,1,19,
        1,19,1,19,3,19,383,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,5,19,396,8,19,10,19,12,19,399,9,19,1,19,1,19,1,20,
        1,20,1,21,1,21,1,21,1,21,1,21,5,21,410,8,21,10,21,12,21,413,9,21,
        1,21,1,21,3,21,417,8,21,1,22,1,22,1,22,1,22,3,22,423,8,22,1,22,1,
        22,3,22,427,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,446,8,22,10,22,12,22,
        449,9,22,1,22,1,22,1,22,1,22,1,22,3,22,456,8,22,1,22,1,22,3,22,460,
        8,22,1,23,1,23,1,23,1,23,3,23,466,8,23,1,23,3,23,469,8,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,5,23,478,8,23,10,23,12,23,481,9,23,1,
        23,1,23,3,23,485,8,23,1,24,1,24,1,24,1,24,1,24,3,24,492,8,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,5,24,510,8,24,10,24,12,24,513,9,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,3,24,522,8,24,1,24,1,24,3,24,526,8,24,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,5,25,545,8,25,10,25,12,25,548,9,25,1,25,1,25,3,25,552,8,
        25,1,26,1,26,1,26,1,26,4,26,558,8,26,11,26,12,26,559,1,26,1,26,1,
        27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,574,8,28,10,
        28,12,28,577,9,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,
        30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
        30,1,30,1,30,1,30,1,30,1,30,5,30,607,8,30,10,30,12,30,610,9,30,1,
        30,1,30,1,30,3,30,615,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,
        31,1,31,1,32,1,32,3,32,628,8,32,1,32,3,32,631,8,32,1,33,1,33,1,33,
        1,33,1,33,1,33,5,33,639,8,33,10,33,12,33,642,9,33,3,33,644,8,33,
        1,33,1,33,3,33,648,8,33,1,33,1,33,1,34,1,34,3,34,654,8,34,1,35,1,
        35,1,35,1,35,1,35,1,35,5,35,662,8,35,10,35,12,35,665,9,35,3,35,667,
        8,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,
        680,8,37,1,37,1,37,1,37,1,37,3,37,686,8,37,5,37,688,8,37,10,37,12,
        37,691,9,37,1,37,1,37,3,37,695,8,37,1,37,1,37,1,37,3,37,700,8,37,
        1,37,3,37,703,8,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,712,8,
        38,1,38,1,38,1,38,3,38,717,8,38,1,38,5,38,720,8,38,10,38,12,38,723,
        9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
        3,39,737,8,39,1,40,1,40,1,40,3,40,742,8,40,1,40,1,40,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,5,40,753,8,40,10,40,12,40,756,9,40,1,40,1,
        40,1,40,1,40,1,40,3,40,763,8,40,1,41,1,41,3,41,767,8,41,1,41,1,41,
        1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,791,8,43,3,43,793,8,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,841,8,43,1,43,1,43,1,43,1,
        43,3,43,847,8,43,1,43,1,43,3,43,851,8,43,1,43,1,43,1,43,1,43,1,43,
        3,43,858,8,43,1,43,1,43,1,43,1,43,1,43,5,43,865,8,43,10,43,12,43,
        868,9,43,3,43,870,8,43,1,43,1,43,1,43,1,43,1,43,5,43,877,8,43,10,
        43,12,43,880,9,43,1,44,1,44,1,45,1,45,3,45,886,8,45,1,45,1,45,3,
        45,890,8,45,5,45,892,8,45,10,45,12,45,895,9,45,1,45,1,45,1,46,1,
        46,1,46,1,46,5,46,903,8,46,10,46,12,46,906,9,46,1,46,1,46,1,47,1,
        47,1,48,1,48,1,48,1,48,1,48,3,48,917,8,48,1,49,1,49,1,49,1,50,1,
        50,1,51,4,51,925,8,51,11,51,12,51,926,1,52,4,52,930,8,52,11,52,12,
        52,931,1,53,4,53,935,8,53,11,53,12,53,936,1,54,1,54,1,55,1,55,1,
        55,5,55,944,8,55,10,55,12,55,947,9,55,1,55,1,55,1,56,1,56,1,56,1,
        57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,
        57,967,8,57,1,58,1,58,3,58,971,8,58,1,59,1,59,1,59,1,59,1,59,1,59,
        1,59,3,59,980,8,59,1,60,1,60,1,60,1,60,3,60,986,8,60,1,60,1,60,3,
        60,990,8,60,1,60,3,60,993,8,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,
        1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,
        1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1025,8,65,
        1,65,1,65,4,65,1029,8,65,11,65,12,65,1030,1,66,1,66,3,66,1035,8,
        66,1,66,1,66,1,66,1,66,3,66,1041,8,66,1,66,1,66,1,67,1,67,3,67,1047,
        8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,
        1,70,1,70,3,70,1063,8,70,1,70,3,70,1066,8,70,1,70,1,70,5,70,1070,
        8,70,10,70,12,70,1073,9,70,1,70,1,70,1,71,1,71,1,71,1,71,5,71,1081,
        8,71,10,71,12,71,1084,9,71,1,71,1,71,1,72,1,72,1,72,5,72,1091,8,
        72,10,72,12,72,1094,9,72,1,73,1,73,5,73,1098,8,73,10,73,12,73,1101,
        9,73,1,73,1,73,1,73,1,73,3,73,1107,8,73,5,73,1109,8,73,10,73,12,
        73,1112,9,73,1,73,1,73,1,74,1,74,1,74,3,74,1119,8,74,1,74,1,74,1,
        74,1,74,3,74,1125,8,74,1,74,1,74,1,75,1,75,1,75,1,76,1,76,1,76,1,
        76,3,76,1136,8,76,1,76,1,76,1,76,3,76,1141,8,76,1,76,1,76,1,77,1,
        77,3,77,1147,8,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,
        78,1,78,3,78,1160,8,78,1,79,1,79,5,79,1164,8,79,10,79,12,79,1167,
        9,79,1,79,1,79,1,80,1,80,1,80,1,80,3,80,1175,8,80,1,80,1,80,1,80,
        1,80,5,80,1181,8,80,10,80,12,80,1184,9,80,1,80,1,80,3,80,1188,8,
        80,3,80,1190,8,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,4,81,1199,8,
        81,11,81,12,81,1200,1,81,1,81,1,81,3,81,1206,8,81,1,82,1,82,1,82,
        1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,
        1,85,4,85,1225,8,85,11,85,12,85,1226,1,85,1,85,3,85,1231,8,85,1,
        85,1,85,3,85,1235,8,85,1,86,1,86,1,86,1,86,1,86,1,86,5,86,1243,8,
        86,10,86,12,86,1246,9,86,3,86,1248,8,86,1,86,1,86,1,86,1,86,1,86,
        5,86,1255,8,86,10,86,12,86,1258,9,86,3,86,1260,8,86,1,86,1,86,1,
        87,1,87,1,87,5,87,1267,8,87,10,87,12,87,1270,9,87,1,88,1,88,1,88,
        1,88,1,88,5,88,1277,8,88,10,88,12,88,1280,9,88,3,88,1282,8,88,1,
        88,1,88,1,89,1,89,1,90,1,90,1,90,1,90,1,90,3,90,1293,8,90,1,91,1,
        91,1,91,3,91,1298,8,91,1,91,1,298,2,76,86,92,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,0,18,3,0,23,23,38,38,49,50,3,
        0,47,47,51,51,68,68,4,0,98,100,104,108,110,115,117,117,3,0,10,10,
        42,42,57,57,3,0,16,16,105,105,116,119,1,0,106,108,1,0,104,105,1,
        0,101,103,1,0,112,115,1,0,110,111,1,0,118,119,1,0,83,94,5,0,21,21,
        29,29,31,31,55,55,130,130,2,0,25,25,60,60,1,0,122,123,2,0,126,126,
        128,128,2,0,156,156,165,165,2,0,147,147,154,154,1448,0,199,1,0,0,
        0,2,204,1,0,0,0,4,212,1,0,0,0,6,232,1,0,0,0,8,237,1,0,0,0,10,239,
        1,0,0,0,12,251,1,0,0,0,14,267,1,0,0,0,16,281,1,0,0,0,18,292,1,0,
        0,0,20,301,1,0,0,0,22,317,1,0,0,0,24,319,1,0,0,0,26,323,1,0,0,0,
        28,350,1,0,0,0,30,358,1,0,0,0,32,362,1,0,0,0,34,364,1,0,0,0,36,372,
        1,0,0,0,38,379,1,0,0,0,40,402,1,0,0,0,42,404,1,0,0,0,44,418,1,0,
        0,0,46,461,1,0,0,0,48,486,1,0,0,0,50,527,1,0,0,0,52,553,1,0,0,0,
        54,563,1,0,0,0,56,567,1,0,0,0,58,580,1,0,0,0,60,586,1,0,0,0,62,618,
        1,0,0,0,64,625,1,0,0,0,66,632,1,0,0,0,68,651,1,0,0,0,70,655,1,0,
        0,0,72,671,1,0,0,0,74,673,1,0,0,0,76,711,1,0,0,0,78,736,1,0,0,0,
        80,738,1,0,0,0,82,764,1,0,0,0,84,770,1,0,0,0,86,792,1,0,0,0,88,881,
        1,0,0,0,90,883,1,0,0,0,92,898,1,0,0,0,94,909,1,0,0,0,96,916,1,0,
        0,0,98,918,1,0,0,0,100,921,1,0,0,0,102,924,1,0,0,0,104,929,1,0,0,
        0,106,934,1,0,0,0,108,938,1,0,0,0,110,940,1,0,0,0,112,950,1,0,0,
        0,114,966,1,0,0,0,116,970,1,0,0,0,118,972,1,0,0,0,120,981,1,0,0,
        0,122,997,1,0,0,0,124,1003,1,0,0,0,126,1011,1,0,0,0,128,1014,1,0,
        0,0,130,1017,1,0,0,0,132,1032,1,0,0,0,134,1044,1,0,0,0,136,1050,
        1,0,0,0,138,1055,1,0,0,0,140,1060,1,0,0,0,142,1076,1,0,0,0,144,1087,
        1,0,0,0,146,1095,1,0,0,0,148,1124,1,0,0,0,150,1128,1,0,0,0,152,1131,
        1,0,0,0,154,1146,1,0,0,0,156,1159,1,0,0,0,158,1161,1,0,0,0,160,1189,
        1,0,0,0,162,1205,1,0,0,0,164,1207,1,0,0,0,166,1211,1,0,0,0,168,1217,
        1,0,0,0,170,1221,1,0,0,0,172,1236,1,0,0,0,174,1263,1,0,0,0,176,1271,
        1,0,0,0,178,1285,1,0,0,0,180,1292,1,0,0,0,182,1297,1,0,0,0,184,198,
        3,2,1,0,185,198,3,4,2,0,186,198,3,74,37,0,187,198,3,12,6,0,188,198,
        3,14,7,0,189,198,3,16,8,0,190,198,3,44,22,0,191,198,3,62,31,0,192,
        198,3,52,26,0,193,198,3,56,28,0,194,198,3,58,29,0,195,198,3,70,35,
        0,196,198,3,66,33,0,197,184,1,0,0,0,197,185,1,0,0,0,197,186,1,0,
        0,0,197,187,1,0,0,0,197,188,1,0,0,0,197,189,1,0,0,0,197,190,1,0,
        0,0,197,191,1,0,0,0,197,192,1,0,0,0,197,193,1,0,0,0,197,194,1,0,
        0,0,197,195,1,0,0,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,
        0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,199,1,0,0,0,202,203,5,0,
        0,1,203,1,1,0,0,0,204,206,5,48,0,0,205,207,5,173,0,0,206,205,1,0,
        0,0,207,208,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,210,1,0,
        0,0,210,211,5,174,0,0,211,3,1,0,0,0,212,228,5,35,0,0,213,216,3,8,
        4,0,214,215,5,5,0,0,215,217,3,94,47,0,216,214,1,0,0,0,216,217,1,
        0,0,0,217,229,1,0,0,0,218,219,3,10,5,0,219,220,5,29,0,0,220,221,
        3,8,4,0,221,229,1,0,0,0,222,223,5,106,0,0,223,224,5,5,0,0,224,225,
        3,94,47,0,225,226,5,29,0,0,226,227,3,8,4,0,227,229,1,0,0,0,228,213,
        1,0,0,0,228,218,1,0,0,0,228,222,1,0,0,0,229,230,1,0,0,0,230,231,
        5,78,0,0,231,5,1,0,0,0,232,235,3,94,47,0,233,234,5,5,0,0,234,236,
        3,94,47,0,235,233,1,0,0,0,235,236,1,0,0,0,236,7,1,0,0,0,237,238,
        5,122,0,0,238,9,1,0,0,0,239,240,5,75,0,0,240,245,3,6,3,0,241,242,
        5,95,0,0,242,244,3,6,3,0,243,241,1,0,0,0,244,247,1,0,0,0,245,243,
        1,0,0,0,245,246,1,0,0,0,246,248,1,0,0,0,247,245,1,0,0,0,248,249,
        5,76,0,0,249,11,1,0,0,0,250,252,5,2,0,0,251,250,1,0,0,0,251,252,
        1,0,0,0,252,253,1,0,0,0,253,254,5,15,0,0,254,256,3,94,47,0,255,257,
        3,18,9,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,262,
        5,75,0,0,259,261,3,22,11,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,
        1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,
        5,76,0,0,266,13,1,0,0,0,267,268,5,37,0,0,268,270,3,94,47,0,269,271,
        3,18,9,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,276,
        5,75,0,0,273,275,3,22,11,0,274,273,1,0,0,0,275,278,1,0,0,0,276,274,
        1,0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,276,1,0,0,0,279,280,
        5,76,0,0,280,15,1,0,0,0,281,282,5,40,0,0,282,283,3,94,47,0,283,287,
        5,75,0,0,284,286,3,22,11,0,285,284,1,0,0,0,286,289,1,0,0,0,287,285,
        1,0,0,0,287,288,1,0,0,0,288,290,1,0,0,0,289,287,1,0,0,0,290,291,
        5,76,0,0,291,17,1,0,0,0,292,293,5,39,0,0,293,298,3,20,10,0,294,295,
        5,95,0,0,295,297,3,20,10,0,296,294,1,0,0,0,297,300,1,0,0,0,298,299,
        1,0,0,0,298,296,1,0,0,0,299,19,1,0,0,0,300,298,1,0,0,0,301,303,3,
        28,14,0,302,304,3,26,13,0,303,302,1,0,0,0,303,304,1,0,0,0,304,21,
        1,0,0,0,305,318,3,38,19,0,306,318,3,44,22,0,307,318,3,46,23,0,308,
        318,3,48,24,0,309,318,3,50,25,0,310,318,3,52,26,0,311,318,3,56,28,
        0,312,318,3,58,29,0,313,318,3,60,30,0,314,318,3,66,33,0,315,318,
        3,70,35,0,316,318,3,74,37,0,317,305,1,0,0,0,317,306,1,0,0,0,317,
        307,1,0,0,0,317,308,1,0,0,0,317,309,1,0,0,0,317,310,1,0,0,0,317,
        311,1,0,0,0,317,312,1,0,0,0,317,313,1,0,0,0,317,314,1,0,0,0,317,
        315,1,0,0,0,317,316,1,0,0,0,318,23,1,0,0,0,319,320,3,94,47,0,320,
        321,5,77,0,0,321,322,3,86,43,0,322,25,1,0,0,0,323,346,5,71,0,0,324,
        329,3,86,43,0,325,326,5,95,0,0,326,328,3,86,43,0,327,325,1,0,0,0,
        328,331,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,333,1,0,0,0,
        331,329,1,0,0,0,332,324,1,0,0,0,332,333,1,0,0,0,333,347,1,0,0,0,
        334,343,5,75,0,0,335,340,3,24,12,0,336,337,5,95,0,0,337,339,3,24,
        12,0,338,336,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,
        0,0,341,344,1,0,0,0,342,340,1,0,0,0,343,335,1,0,0,0,343,344,1,0,
        0,0,344,345,1,0,0,0,345,347,5,76,0,0,346,332,1,0,0,0,346,334,1,0,
        0,0,347,348,1,0,0,0,348,349,5,72,0,0,349,27,1,0,0,0,350,355,3,94,
        47,0,351,352,5,79,0,0,352,354,3,94,47,0,353,351,1,0,0,0,354,357,
        1,0,0,0,355,353,1,0,0,0,355,356,1,0,0,0,356,29,1,0,0,0,357,355,1,
        0,0,0,358,360,3,28,14,0,359,361,3,26,13,0,360,359,1,0,0,0,360,361,
        1,0,0,0,361,31,1,0,0,0,362,363,7,0,0,0,363,33,1,0,0,0,364,369,3,
        36,18,0,365,366,5,95,0,0,366,368,3,36,18,0,367,365,1,0,0,0,368,371,
        1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,35,1,0,0,0,371,369,1,
        0,0,0,372,374,3,76,38,0,373,375,3,84,42,0,374,373,1,0,0,0,374,375,
        1,0,0,0,375,377,1,0,0,0,376,378,3,94,47,0,377,376,1,0,0,0,377,378,
        1,0,0,0,378,37,1,0,0,0,379,380,5,13,0,0,380,382,5,71,0,0,381,383,
        3,34,17,0,382,381,1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,397,
        5,72,0,0,385,396,3,30,15,0,386,387,4,19,0,1,387,388,5,47,0,0,388,
        396,6,19,-1,0,389,390,4,19,1,1,390,391,5,38,0,0,391,396,6,19,-1,
        0,392,393,4,19,2,1,393,394,5,50,0,0,394,396,6,19,-1,0,395,385,1,
        0,0,0,395,386,1,0,0,0,395,389,1,0,0,0,395,392,1,0,0,0,396,399,1,
        0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,397,1,
        0,0,0,400,401,3,110,55,0,401,39,1,0,0,0,402,403,7,1,0,0,403,41,1,
        0,0,0,404,416,5,46,0,0,405,406,5,71,0,0,406,411,3,28,14,0,407,408,
        5,95,0,0,408,410,3,28,14,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,
        1,0,0,0,411,412,1,0,0,0,412,414,1,0,0,0,413,411,1,0,0,0,414,415,
        5,72,0,0,415,417,1,0,0,0,416,405,1,0,0,0,416,417,1,0,0,0,417,43,
        1,0,0,0,418,422,5,30,0,0,419,423,3,94,47,0,420,423,5,24,0,0,421,
        423,5,52,0,0,422,419,1,0,0,0,422,420,1,0,0,0,422,421,1,0,0,0,423,
        424,1,0,0,0,424,426,5,71,0,0,425,427,3,34,17,0,426,425,1,0,0,0,426,
        427,1,0,0,0,427,428,1,0,0,0,428,447,5,72,0,0,429,430,4,22,3,1,430,
        431,3,32,16,0,431,432,6,22,-1,0,432,446,1,0,0,0,433,434,4,22,4,1,
        434,435,3,40,20,0,435,436,6,22,-1,0,436,446,1,0,0,0,437,446,3,30,
        15,0,438,439,4,22,5,1,439,440,5,69,0,0,440,446,6,22,-1,0,441,442,
        4,22,6,1,442,443,3,42,21,0,443,444,6,22,-1,0,444,446,1,0,0,0,445,
        429,1,0,0,0,445,433,1,0,0,0,445,437,1,0,0,0,445,438,1,0,0,0,445,
        441,1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,0,448,
        455,1,0,0,0,449,447,1,0,0,0,450,451,5,54,0,0,451,452,5,71,0,0,452,
        453,3,34,17,0,453,454,5,72,0,0,454,456,1,0,0,0,455,450,1,0,0,0,455,
        456,1,0,0,0,456,459,1,0,0,0,457,460,5,78,0,0,458,460,3,110,55,0,
        459,457,1,0,0,0,459,458,1,0,0,0,460,45,1,0,0,0,461,462,5,43,0,0,
        462,468,3,94,47,0,463,465,5,71,0,0,464,466,3,34,17,0,465,464,1,0,
        0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,469,5,72,0,0,468,463,1,0,
        0,0,468,469,1,0,0,0,469,479,1,0,0,0,470,471,4,23,7,1,471,472,5,69,
        0,0,472,478,6,23,-1,0,473,474,4,23,8,1,474,475,3,42,21,0,475,476,
        6,23,-1,0,476,478,1,0,0,0,477,470,1,0,0,0,477,473,1,0,0,0,478,481,
        1,0,0,0,479,477,1,0,0,0,479,480,1,0,0,0,480,484,1,0,0,0,481,479,
        1,0,0,0,482,485,5,78,0,0,483,485,3,110,55,0,484,482,1,0,0,0,484,
        483,1,0,0,0,485,47,1,0,0,0,486,487,5,24,0,0,487,491,5,71,0,0,488,
        489,3,34,17,0,489,490,6,24,-1,0,490,492,1,0,0,0,491,488,1,0,0,0,
        491,492,1,0,0,0,492,493,1,0,0,0,493,511,5,72,0,0,494,495,4,24,9,
        1,495,496,5,23,0,0,496,510,6,24,-1,0,497,498,4,24,10,1,498,499,3,
        40,20,0,499,500,6,24,-1,0,500,510,1,0,0,0,501,510,3,30,15,0,502,
        503,4,24,11,1,503,504,5,69,0,0,504,510,6,24,-1,0,505,506,4,24,12,
        1,506,507,3,42,21,0,507,508,6,24,-1,0,508,510,1,0,0,0,509,494,1,
        0,0,0,509,497,1,0,0,0,509,501,1,0,0,0,509,502,1,0,0,0,509,505,1,
        0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,512,521,1,
        0,0,0,513,511,1,0,0,0,514,515,4,24,13,1,515,516,5,54,0,0,516,517,
        5,71,0,0,517,518,3,34,17,0,518,519,5,72,0,0,519,522,1,0,0,0,520,
        522,4,24,14,1,521,514,1,0,0,0,521,520,1,0,0,0,522,525,1,0,0,0,523,
        526,5,78,0,0,524,526,3,110,55,0,525,523,1,0,0,0,525,524,1,0,0,0,
        526,49,1,0,0,0,527,528,5,52,0,0,528,529,5,71,0,0,529,546,5,72,0,
        0,530,531,4,25,15,1,531,532,5,23,0,0,532,545,6,25,-1,0,533,534,4,
        25,16,1,534,535,5,47,0,0,535,545,6,25,-1,0,536,545,3,30,15,0,537,
        538,4,25,17,1,538,539,5,69,0,0,539,545,6,25,-1,0,540,541,4,25,18,
        1,541,542,3,42,21,0,542,543,6,25,-1,0,543,545,1,0,0,0,544,530,1,
        0,0,0,544,533,1,0,0,0,544,536,1,0,0,0,544,537,1,0,0,0,544,540,1,
        0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,551,1,
        0,0,0,548,546,1,0,0,0,549,552,5,78,0,0,550,552,3,110,55,0,551,549,
        1,0,0,0,551,550,1,0,0,0,552,51,1,0,0,0,553,554,5,59,0,0,554,555,
        3,94,47,0,555,557,5,75,0,0,556,558,3,54,27,0,557,556,1,0,0,0,558,
        559,1,0,0,0,559,557,1,0,0,0,559,560,1,0,0,0,560,561,1,0,0,0,561,
        562,5,76,0,0,562,53,1,0,0,0,563,564,3,76,38,0,564,565,3,94,47,0,
        565,566,5,78,0,0,566,55,1,0,0,0,567,568,5,20,0,0,568,569,3,94,47,
        0,569,570,5,75,0,0,570,575,3,94,47,0,571,572,5,95,0,0,572,574,3,
        94,47,0,573,571,1,0,0,0,574,577,1,0,0,0,575,573,1,0,0,0,575,576,
        1,0,0,0,576,578,1,0,0,0,577,575,1,0,0,0,578,579,5,76,0,0,579,57,
        1,0,0,0,580,581,5,62,0,0,581,582,3,94,47,0,582,583,5,39,0,0,583,
        584,3,78,39,0,584,585,5,78,0,0,585,59,1,0,0,0,586,608,3,76,38,0,
        587,588,4,30,19,1,588,589,5,50,0,0,589,607,6,30,-1,0,590,591,4,30,
        20,1,591,592,5,49,0,0,592,607,6,30,-1,0,593,594,4,30,21,1,594,595,
        5,38,0,0,595,607,6,30,-1,0,596,597,4,30,22,1,597,598,5,12,0,0,598,
        607,6,30,-1,0,599,600,4,30,23,1,600,601,3,42,21,0,601,602,6,30,-1,
        0,602,607,1,0,0,0,603,604,4,30,24,1,604,605,5,34,0,0,605,607,6,30,
        -1,0,606,587,1,0,0,0,606,590,1,0,0,0,606,593,1,0,0,0,606,596,1,0,
        0,0,606,599,1,0,0,0,606,603,1,0,0,0,607,610,1,0,0,0,608,606,1,0,
        0,0,608,609,1,0,0,0,609,611,1,0,0,0,610,608,1,0,0,0,611,614,3,94,
        47,0,612,613,5,83,0,0,613,615,3,86,43,0,614,612,1,0,0,0,614,615,
        1,0,0,0,615,616,1,0,0,0,616,617,5,78,0,0,617,61,1,0,0,0,618,619,
        3,76,38,0,619,620,5,12,0,0,620,621,3,94,47,0,621,622,5,83,0,0,622,
        623,3,86,43,0,623,624,5,78,0,0,624,63,1,0,0,0,625,627,3,76,38,0,
        626,628,5,36,0,0,627,626,1,0,0,0,627,628,1,0,0,0,628,630,1,0,0,0,
        629,631,3,94,47,0,630,629,1,0,0,0,630,631,1,0,0,0,631,65,1,0,0,0,
        632,633,5,22,0,0,633,634,3,94,47,0,634,643,5,71,0,0,635,640,3,64,
        32,0,636,637,5,95,0,0,637,639,3,64,32,0,638,636,1,0,0,0,639,642,
        1,0,0,0,640,638,1,0,0,0,640,641,1,0,0,0,641,644,1,0,0,0,642,640,
        1,0,0,0,643,635,1,0,0,0,643,644,1,0,0,0,644,645,1,0,0,0,645,647,
        5,72,0,0,646,648,5,4,0,0,647,646,1,0,0,0,647,648,1,0,0,0,648,649,
        1,0,0,0,649,650,5,78,0,0,650,67,1,0,0,0,651,653,3,76,38,0,652,654,
        3,94,47,0,653,652,1,0,0,0,653,654,1,0,0,0,654,69,1,0,0,0,655,656,
        5,21,0,0,656,657,3,94,47,0,657,666,5,71,0,0,658,663,3,68,34,0,659,
        660,5,95,0,0,660,662,3,68,34,0,661,659,1,0,0,0,662,665,1,0,0,0,663,
        661,1,0,0,0,663,664,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,666,
        658,1,0,0,0,666,667,1,0,0,0,667,668,1,0,0,0,668,669,5,72,0,0,669,
        670,5,78,0,0,670,71,1,0,0,0,671,672,7,2,0,0,672,73,1,0,0,0,673,694,
        5,67,0,0,674,695,3,28,14,0,675,676,5,75,0,0,676,679,3,28,14,0,677,
        678,5,5,0,0,678,680,3,72,36,0,679,677,1,0,0,0,679,680,1,0,0,0,680,
        689,1,0,0,0,681,682,5,95,0,0,682,685,3,28,14,0,683,684,5,5,0,0,684,
        686,3,72,36,0,685,683,1,0,0,0,685,686,1,0,0,0,686,688,1,0,0,0,687,
        681,1,0,0,0,688,691,1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,
        692,1,0,0,0,691,689,1,0,0,0,692,693,5,76,0,0,693,695,1,0,0,0,694,
        674,1,0,0,0,694,675,1,0,0,0,695,696,1,0,0,0,696,699,5,28,0,0,697,
        700,5,106,0,0,698,700,3,76,38,0,699,697,1,0,0,0,699,698,1,0,0,0,
        700,702,1,0,0,0,701,703,5,31,0,0,702,701,1,0,0,0,702,703,1,0,0,0,
        703,704,1,0,0,0,704,705,5,78,0,0,705,75,1,0,0,0,706,707,6,38,-1,
        0,707,712,3,78,39,0,708,712,3,80,40,0,709,712,3,152,76,0,710,712,
        3,28,14,0,711,706,1,0,0,0,711,708,1,0,0,0,711,709,1,0,0,0,711,710,
        1,0,0,0,712,721,1,0,0,0,713,714,10,1,0,0,714,716,5,73,0,0,715,717,
        3,86,43,0,716,715,1,0,0,0,716,717,1,0,0,0,717,718,1,0,0,0,718,720,
        5,74,0,0,719,713,1,0,0,0,720,723,1,0,0,0,721,719,1,0,0,0,721,722,
        1,0,0,0,722,77,1,0,0,0,723,721,1,0,0,0,724,737,5,3,0,0,725,726,4,
        39,26,1,726,727,5,3,0,0,727,737,5,47,0,0,728,737,5,7,0,0,729,737,
        5,58,0,0,730,737,5,9,0,0,731,737,5,56,0,0,732,737,5,66,0,0,733,737,
        5,27,0,0,734,737,5,26,0,0,735,737,5,63,0,0,736,724,1,0,0,0,736,725,
        1,0,0,0,736,728,1,0,0,0,736,729,1,0,0,0,736,730,1,0,0,0,736,731,
        1,0,0,0,736,732,1,0,0,0,736,733,1,0,0,0,736,734,1,0,0,0,736,735,
        1,0,0,0,737,79,1,0,0,0,738,739,5,30,0,0,739,741,5,71,0,0,740,742,
        3,34,17,0,741,740,1,0,0,0,741,742,1,0,0,0,742,743,1,0,0,0,743,754,
        5,72,0,0,744,745,4,40,27,1,745,746,3,32,16,0,746,747,6,40,-1,0,747,
        753,1,0,0,0,748,749,4,40,28,1,749,750,3,40,20,0,750,751,6,40,-1,
        0,751,753,1,0,0,0,752,744,1,0,0,0,752,748,1,0,0,0,753,756,1,0,0,
        0,754,752,1,0,0,0,754,755,1,0,0,0,755,762,1,0,0,0,756,754,1,0,0,
        0,757,758,5,54,0,0,758,759,5,71,0,0,759,760,3,34,17,0,760,761,5,
        72,0,0,761,763,1,0,0,0,762,757,1,0,0,0,762,763,1,0,0,0,763,81,1,
        0,0,0,764,766,3,76,38,0,765,767,3,84,42,0,766,765,1,0,0,0,766,767,
        1,0,0,0,767,768,1,0,0,0,768,769,3,94,47,0,769,83,1,0,0,0,770,771,
        7,3,0,0,771,85,1,0,0,0,772,773,6,43,-1,0,773,774,5,47,0,0,774,793,
        3,26,13,0,775,776,5,62,0,0,776,777,5,71,0,0,777,778,3,76,38,0,778,
        779,5,72,0,0,779,793,1,0,0,0,780,781,7,4,0,0,781,793,3,86,43,19,
        782,783,5,44,0,0,783,793,3,76,38,0,784,793,3,90,45,0,785,793,3,92,
        46,0,786,791,3,94,47,0,787,791,3,96,48,0,788,791,3,98,49,0,789,791,
        3,78,39,0,790,786,1,0,0,0,790,787,1,0,0,0,790,788,1,0,0,0,790,789,
        1,0,0,0,791,793,1,0,0,0,792,772,1,0,0,0,792,775,1,0,0,0,792,780,
        1,0,0,0,792,782,1,0,0,0,792,784,1,0,0,0,792,785,1,0,0,0,792,790,
        1,0,0,0,793,878,1,0,0,0,794,795,10,17,0,0,795,796,5,109,0,0,796,
        877,3,86,43,17,797,798,10,16,0,0,798,799,7,5,0,0,799,877,3,86,43,
        17,800,801,10,15,0,0,801,802,7,6,0,0,802,877,3,86,43,16,803,804,
        10,14,0,0,804,805,7,7,0,0,805,877,3,86,43,15,806,807,10,13,0,0,807,
        808,5,100,0,0,808,877,3,86,43,14,809,810,10,12,0,0,810,811,5,99,
        0,0,811,877,3,86,43,13,812,813,10,11,0,0,813,814,5,98,0,0,814,877,
        3,86,43,12,815,816,10,10,0,0,816,817,7,8,0,0,817,877,3,86,43,11,
        818,819,10,9,0,0,819,820,7,9,0,0,820,877,3,86,43,10,821,822,10,8,
        0,0,822,823,5,97,0,0,823,877,3,86,43,9,824,825,10,7,0,0,825,826,
        5,96,0,0,826,877,3,86,43,8,827,828,10,6,0,0,828,829,5,80,0,0,829,
        830,3,86,43,0,830,831,5,77,0,0,831,832,3,86,43,6,832,877,1,0,0,0,
        833,834,10,5,0,0,834,835,3,88,44,0,835,836,3,86,43,5,836,877,1,0,
        0,0,837,838,10,26,0,0,838,840,5,73,0,0,839,841,3,86,43,0,840,839,
        1,0,0,0,840,841,1,0,0,0,841,842,1,0,0,0,842,877,5,74,0,0,843,844,
        10,25,0,0,844,846,5,73,0,0,845,847,3,86,43,0,846,845,1,0,0,0,846,
        847,1,0,0,0,847,848,1,0,0,0,848,850,5,77,0,0,849,851,3,86,43,0,850,
        849,1,0,0,0,850,851,1,0,0,0,851,852,1,0,0,0,852,877,5,74,0,0,853,
        854,10,24,0,0,854,857,5,79,0,0,855,858,3,94,47,0,856,858,5,3,0,0,
        857,855,1,0,0,0,857,856,1,0,0,0,858,877,1,0,0,0,859,860,10,23,0,
        0,860,869,5,75,0,0,861,866,3,24,12,0,862,863,5,95,0,0,863,865,3,
        24,12,0,864,862,1,0,0,0,865,868,1,0,0,0,866,864,1,0,0,0,866,867,
        1,0,0,0,867,870,1,0,0,0,868,866,1,0,0,0,869,861,1,0,0,0,869,870,
        1,0,0,0,870,871,1,0,0,0,871,877,5,76,0,0,872,873,10,22,0,0,873,877,
        3,26,13,0,874,875,10,18,0,0,875,877,7,10,0,0,876,794,1,0,0,0,876,
        797,1,0,0,0,876,800,1,0,0,0,876,803,1,0,0,0,876,806,1,0,0,0,876,
        809,1,0,0,0,876,812,1,0,0,0,876,815,1,0,0,0,876,818,1,0,0,0,876,
        821,1,0,0,0,876,824,1,0,0,0,876,827,1,0,0,0,876,833,1,0,0,0,876,
        837,1,0,0,0,876,843,1,0,0,0,876,853,1,0,0,0,876,859,1,0,0,0,876,
        872,1,0,0,0,876,874,1,0,0,0,877,880,1,0,0,0,878,876,1,0,0,0,878,
        879,1,0,0,0,879,87,1,0,0,0,880,878,1,0,0,0,881,882,7,11,0,0,882,
        89,1,0,0,0,883,885,5,71,0,0,884,886,3,86,43,0,885,884,1,0,0,0,885,
        886,1,0,0,0,886,893,1,0,0,0,887,889,5,95,0,0,888,890,3,86,43,0,889,
        888,1,0,0,0,889,890,1,0,0,0,890,892,1,0,0,0,891,887,1,0,0,0,892,
        895,1,0,0,0,893,891,1,0,0,0,893,894,1,0,0,0,894,896,1,0,0,0,895,
        893,1,0,0,0,896,897,5,72,0,0,897,91,1,0,0,0,898,899,5,73,0,0,899,
        904,3,86,43,0,900,901,5,95,0,0,901,903,3,86,43,0,902,900,1,0,0,0,
        903,906,1,0,0,0,904,902,1,0,0,0,904,905,1,0,0,0,905,907,1,0,0,0,
        906,904,1,0,0,0,907,908,5,74,0,0,908,93,1,0,0,0,909,910,7,12,0,0,
        910,95,1,0,0,0,911,917,3,102,51,0,912,917,3,108,54,0,913,917,3,100,
        50,0,914,917,3,104,52,0,915,917,3,106,53,0,916,911,1,0,0,0,916,912,
        1,0,0,0,916,913,1,0,0,0,916,914,1,0,0,0,916,915,1,0,0,0,917,97,1,
        0,0,0,918,919,3,108,54,0,919,920,5,45,0,0,920,99,1,0,0,0,921,922,
        7,13,0,0,922,101,1,0,0,0,923,925,7,14,0,0,924,923,1,0,0,0,925,926,
        1,0,0,0,926,924,1,0,0,0,926,927,1,0,0,0,927,103,1,0,0,0,928,930,
        5,125,0,0,929,928,1,0,0,0,930,931,1,0,0,0,931,929,1,0,0,0,931,932,
        1,0,0,0,932,105,1,0,0,0,933,935,5,124,0,0,934,933,1,0,0,0,935,936,
        1,0,0,0,936,934,1,0,0,0,936,937,1,0,0,0,937,107,1,0,0,0,938,939,
        7,15,0,0,939,109,1,0,0,0,940,945,5,75,0,0,941,944,3,114,57,0,942,
        944,3,112,56,0,943,941,1,0,0,0,943,942,1,0,0,0,944,947,1,0,0,0,945,
        943,1,0,0,0,945,946,1,0,0,0,946,948,1,0,0,0,947,945,1,0,0,0,948,
        949,5,76,0,0,949,111,1,0,0,0,950,951,5,64,0,0,951,952,3,110,55,0,
        952,113,1,0,0,0,953,967,3,110,55,0,954,967,3,116,58,0,955,967,3,
        118,59,0,956,967,3,120,60,0,957,967,3,122,61,0,958,967,3,124,62,
        0,959,967,3,126,63,0,960,967,3,128,64,0,961,967,3,130,65,0,962,967,
        3,134,67,0,963,967,3,136,68,0,964,967,3,138,69,0,965,967,3,140,70,
        0,966,953,1,0,0,0,966,954,1,0,0,0,966,955,1,0,0,0,966,956,1,0,0,
        0,966,957,1,0,0,0,966,958,1,0,0,0,966,959,1,0,0,0,966,960,1,0,0,
        0,966,961,1,0,0,0,966,962,1,0,0,0,966,963,1,0,0,0,966,964,1,0,0,
        0,966,965,1,0,0,0,967,115,1,0,0,0,968,971,3,148,74,0,969,971,3,150,
        75,0,970,968,1,0,0,0,970,969,1,0,0,0,971,117,1,0,0,0,972,973,5,33,
        0,0,973,974,5,71,0,0,974,975,3,86,43,0,975,976,5,72,0,0,976,979,
        3,114,57,0,977,978,5,18,0,0,978,980,3,114,57,0,979,977,1,0,0,0,979,
        980,1,0,0,0,980,119,1,0,0,0,981,982,5,28,0,0,982,985,5,71,0,0,983,
        986,3,116,58,0,984,986,5,78,0,0,985,983,1,0,0,0,985,984,1,0,0,0,
        986,989,1,0,0,0,987,990,3,150,75,0,988,990,5,78,0,0,989,987,1,0,
        0,0,989,988,1,0,0,0,990,992,1,0,0,0,991,993,3,86,43,0,992,991,1,
        0,0,0,992,993,1,0,0,0,993,994,1,0,0,0,994,995,5,72,0,0,995,996,3,
        114,57,0,996,121,1,0,0,0,997,998,5,70,0,0,998,999,5,71,0,0,999,1000,
        3,86,43,0,1000,1001,5,72,0,0,1001,1002,3,114,57,0,1002,123,1,0,0,
        0,1003,1004,5,17,0,0,1004,1005,3,114,57,0,1005,1006,5,70,0,0,1006,
        1007,5,71,0,0,1007,1008,3,86,43,0,1008,1009,5,72,0,0,1009,1010,5,
        78,0,0,1010,125,1,0,0,0,1011,1012,5,14,0,0,1012,1013,5,78,0,0,1013,
        127,1,0,0,0,1014,1015,5,8,0,0,1015,1016,5,78,0,0,1016,129,1,0,0,
        0,1017,1018,5,61,0,0,1018,1024,3,86,43,0,1019,1020,5,54,0,0,1020,
        1021,5,71,0,0,1021,1022,3,34,17,0,1022,1023,5,72,0,0,1023,1025,1,
        0,0,0,1024,1019,1,0,0,0,1024,1025,1,0,0,0,1025,1026,1,0,0,0,1026,
        1028,3,110,55,0,1027,1029,3,132,66,0,1028,1027,1,0,0,0,1029,1030,
        1,0,0,0,1030,1028,1,0,0,0,1030,1031,1,0,0,0,1031,131,1,0,0,0,1032,
        1040,5,11,0,0,1033,1035,3,94,47,0,1034,1033,1,0,0,0,1034,1035,1,
        0,0,0,1035,1036,1,0,0,0,1036,1037,5,71,0,0,1037,1038,3,34,17,0,1038,
        1039,5,72,0,0,1039,1041,1,0,0,0,1040,1034,1,0,0,0,1040,1041,1,0,
        0,0,1041,1042,1,0,0,0,1042,1043,3,110,55,0,1043,133,1,0,0,0,1044,
        1046,5,53,0,0,1045,1047,3,86,43,0,1046,1045,1,0,0,0,1046,1047,1,
        0,0,0,1047,1048,1,0,0,0,1048,1049,5,78,0,0,1049,135,1,0,0,0,1050,
        1051,5,19,0,0,1051,1052,3,86,43,0,1052,1053,3,26,13,0,1053,1054,
        5,78,0,0,1054,137,1,0,0,0,1055,1056,5,55,0,0,1056,1057,3,86,43,0,
        1057,1058,3,26,13,0,1058,1059,5,78,0,0,1059,139,1,0,0,0,1060,1062,
        5,6,0,0,1061,1063,5,134,0,0,1062,1061,1,0,0,0,1062,1063,1,0,0,0,
        1063,1065,1,0,0,0,1064,1066,3,142,71,0,1065,1064,1,0,0,0,1065,1066,
        1,0,0,0,1066,1067,1,0,0,0,1067,1071,5,135,0,0,1068,1070,3,156,78,
        0,1069,1068,1,0,0,0,1070,1073,1,0,0,0,1071,1069,1,0,0,0,1071,1072,
        1,0,0,0,1072,1074,1,0,0,0,1073,1071,1,0,0,0,1074,1075,5,158,0,0,
        1075,141,1,0,0,0,1076,1077,5,137,0,0,1077,1082,5,136,0,0,1078,1079,
        5,139,0,0,1079,1081,5,136,0,0,1080,1078,1,0,0,0,1081,1084,1,0,0,
        0,1082,1080,1,0,0,0,1082,1083,1,0,0,0,1083,1085,1,0,0,0,1084,1082,
        1,0,0,0,1085,1086,5,138,0,0,1086,143,1,0,0,0,1087,1092,3,82,41,0,
        1088,1089,5,95,0,0,1089,1091,3,82,41,0,1090,1088,1,0,0,0,1091,1094,
        1,0,0,0,1092,1090,1,0,0,0,1092,1093,1,0,0,0,1093,145,1,0,0,0,1094,
        1092,1,0,0,0,1095,1099,5,71,0,0,1096,1098,5,95,0,0,1097,1096,1,0,
        0,0,1098,1101,1,0,0,0,1099,1097,1,0,0,0,1099,1100,1,0,0,0,1100,1102,
        1,0,0,0,1101,1099,1,0,0,0,1102,1103,3,82,41,0,1103,1110,1,0,0,0,
        1104,1106,5,95,0,0,1105,1107,3,82,41,0,1106,1105,1,0,0,0,1106,1107,
        1,0,0,0,1107,1109,1,0,0,0,1108,1104,1,0,0,0,1109,1112,1,0,0,0,1110,
        1108,1,0,0,0,1110,1111,1,0,0,0,1111,1113,1,0,0,0,1112,1110,1,0,0,
        0,1113,1114,5,72,0,0,1114,147,1,0,0,0,1115,1118,3,82,41,0,1116,1117,
        5,83,0,0,1117,1119,3,86,43,0,1118,1116,1,0,0,0,1118,1119,1,0,0,0,
        1119,1125,1,0,0,0,1120,1121,3,146,73,0,1121,1122,5,83,0,0,1122,1123,
        3,86,43,0,1123,1125,1,0,0,0,1124,1115,1,0,0,0,1124,1120,1,0,0,0,
        1125,1126,1,0,0,0,1126,1127,5,78,0,0,1127,149,1,0,0,0,1128,1129,
        3,86,43,0,1129,1130,5,78,0,0,1130,151,1,0,0,0,1131,1132,5,41,0,0,
        1132,1133,5,71,0,0,1133,1135,3,154,77,0,1134,1136,3,94,47,0,1135,
        1134,1,0,0,0,1135,1136,1,0,0,0,1136,1137,1,0,0,0,1137,1138,5,81,
        0,0,1138,1140,3,76,38,0,1139,1141,3,94,47,0,1140,1139,1,0,0,0,1140,
        1141,1,0,0,0,1141,1142,1,0,0,0,1142,1143,5,72,0,0,1143,153,1,0,0,
        0,1144,1147,3,78,39,0,1145,1147,3,28,14,0,1146,1144,1,0,0,0,1146,
        1145,1,0,0,0,1147,155,1,0,0,0,1148,1160,3,158,79,0,1149,1160,3,160,
        80,0,1150,1160,3,162,81,0,1151,1160,3,176,88,0,1152,1160,3,164,82,
        0,1153,1160,3,166,83,0,1154,1160,3,170,85,0,1155,1160,5,151,0,0,
        1156,1160,5,143,0,0,1157,1160,5,145,0,0,1158,1160,3,172,86,0,1159,
        1148,1,0,0,0,1159,1149,1,0,0,0,1159,1150,1,0,0,0,1159,1151,1,0,0,
        0,1159,1152,1,0,0,0,1159,1153,1,0,0,0,1159,1154,1,0,0,0,1159,1155,
        1,0,0,0,1159,1156,1,0,0,0,1159,1157,1,0,0,0,1159,1158,1,0,0,0,1160,
        157,1,0,0,0,1161,1165,5,157,0,0,1162,1164,3,156,78,0,1163,1162,1,
        0,0,0,1164,1167,1,0,0,0,1165,1163,1,0,0,0,1165,1166,1,0,0,0,1166,
        1168,1,0,0,0,1167,1165,1,0,0,0,1168,1169,5,158,0,0,1169,159,1,0,
        0,0,1170,1171,5,152,0,0,1171,1174,5,165,0,0,1172,1173,5,161,0,0,
        1173,1175,3,182,91,0,1174,1172,1,0,0,0,1174,1175,1,0,0,0,1175,1190,
        1,0,0,0,1176,1177,5,152,0,0,1177,1182,5,165,0,0,1178,1179,5,163,
        0,0,1179,1181,5,165,0,0,1180,1178,1,0,0,0,1181,1184,1,0,0,0,1182,
        1180,1,0,0,0,1182,1183,1,0,0,0,1183,1187,1,0,0,0,1184,1182,1,0,0,
        0,1185,1186,5,161,0,0,1186,1188,3,176,88,0,1187,1185,1,0,0,0,1187,
        1188,1,0,0,0,1188,1190,1,0,0,0,1189,1170,1,0,0,0,1189,1176,1,0,0,
        0,1190,161,1,0,0,0,1191,1192,3,174,87,0,1192,1193,5,161,0,0,1193,
        1194,3,182,91,0,1194,1206,1,0,0,0,1195,1198,3,174,87,0,1196,1197,
        5,163,0,0,1197,1199,3,174,87,0,1198,1196,1,0,0,0,1199,1200,1,0,0,
        0,1200,1198,1,0,0,0,1200,1201,1,0,0,0,1201,1202,1,0,0,0,1202,1203,
        5,161,0,0,1203,1204,3,176,88,0,1204,1206,1,0,0,0,1205,1191,1,0,0,
        0,1205,1195,1,0,0,0,1206,163,1,0,0,0,1207,1208,5,150,0,0,1208,1209,
        3,182,91,0,1209,1210,3,158,79,0,1210,165,1,0,0,0,1211,1212,5,148,
        0,0,1212,1213,3,158,79,0,1213,1214,3,182,91,0,1214,1215,3,158,79,
        0,1215,1216,3,158,79,0,1216,167,1,0,0,0,1217,1218,5,144,0,0,1218,
        1219,3,180,90,0,1219,1220,3,158,79,0,1220,169,1,0,0,0,1221,1222,
        5,153,0,0,1222,1234,3,182,91,0,1223,1225,3,168,84,0,1224,1223,1,
        0,0,0,1225,1226,1,0,0,0,1226,1224,1,0,0,0,1226,1227,1,0,0,0,1227,
        1230,1,0,0,0,1228,1229,5,146,0,0,1229,1231,3,158,79,0,1230,1228,
        1,0,0,0,1230,1231,1,0,0,0,1231,1235,1,0,0,0,1232,1233,5,146,0,0,
        1233,1235,3,158,79,0,1234,1224,1,0,0,0,1234,1232,1,0,0,0,1235,171,
        1,0,0,0,1236,1237,5,149,0,0,1237,1238,5,165,0,0,1238,1247,5,159,
        0,0,1239,1244,5,165,0,0,1240,1241,5,163,0,0,1241,1243,5,165,0,0,
        1242,1240,1,0,0,0,1243,1246,1,0,0,0,1244,1242,1,0,0,0,1244,1245,
        1,0,0,0,1245,1248,1,0,0,0,1246,1244,1,0,0,0,1247,1239,1,0,0,0,1247,
        1248,1,0,0,0,1248,1249,1,0,0,0,1249,1259,5,160,0,0,1250,1251,5,164,
        0,0,1251,1256,5,165,0,0,1252,1253,5,163,0,0,1253,1255,5,165,0,0,
        1254,1252,1,0,0,0,1255,1258,1,0,0,0,1256,1254,1,0,0,0,1256,1257,
        1,0,0,0,1257,1260,1,0,0,0,1258,1256,1,0,0,0,1259,1250,1,0,0,0,1259,
        1260,1,0,0,0,1260,1261,1,0,0,0,1261,1262,3,158,79,0,1262,173,1,0,
        0,0,1263,1268,5,165,0,0,1264,1265,5,162,0,0,1265,1267,7,16,0,0,1266,
        1264,1,0,0,0,1267,1270,1,0,0,0,1268,1266,1,0,0,0,1268,1269,1,0,0,
        0,1269,175,1,0,0,0,1270,1268,1,0,0,0,1271,1272,7,16,0,0,1272,1281,
        5,159,0,0,1273,1278,3,182,91,0,1274,1275,5,163,0,0,1275,1277,3,182,
        91,0,1276,1274,1,0,0,0,1277,1280,1,0,0,0,1278,1276,1,0,0,0,1278,
        1279,1,0,0,0,1279,1282,1,0,0,0,1280,1278,1,0,0,0,1281,1273,1,0,0,
        0,1281,1282,1,0,0,0,1282,1283,1,0,0,0,1283,1284,5,160,0,0,1284,177,
        1,0,0,0,1285,1286,7,17,0,0,1286,179,1,0,0,0,1287,1293,5,167,0,0,
        1288,1293,5,168,0,0,1289,1293,5,166,0,0,1290,1293,3,178,89,0,1291,
        1293,5,169,0,0,1292,1287,1,0,0,0,1292,1288,1,0,0,0,1292,1289,1,0,
        0,0,1292,1290,1,0,0,0,1292,1291,1,0,0,0,1293,181,1,0,0,0,1294,1298,
        3,174,87,0,1295,1298,3,176,88,0,1296,1298,3,180,90,0,1297,1294,1,
        0,0,0,1297,1295,1,0,0,0,1297,1296,1,0,0,0,1298,183,1,0,0,0,142,197,
        199,208,216,228,235,245,251,256,262,270,276,287,298,303,317,329,
        332,340,343,346,355,360,369,374,377,382,395,397,411,416,422,426,
        445,447,455,459,465,468,477,479,484,491,509,511,521,525,544,546,
        551,559,575,606,608,614,627,630,640,643,647,653,663,666,679,685,
        689,694,699,702,711,716,721,736,741,752,754,762,766,790,792,840,
        846,850,857,866,869,876,878,885,889,893,904,916,926,931,936,943,
        945,966,970,979,985,989,992,1024,1030,1034,1040,1046,1062,1065,1071,
        1082,1092,1099,1106,1110,1118,1124,1135,1140,1146,1159,1165,1174,
        1182,1187,1189,1200,1205,1226,1230,1234,1244,1247,1256,1259,1268,
        1278,1281,1292,1297
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SolidityParser.__ATN) {
            SolidityParser.__ATN = new antlr.ATNDeserializer().deserialize(SolidityParser._serializedATN);
        }

        return SolidityParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SolidityParser.literalNames, SolidityParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SolidityParser.vocabulary;
    }

    private static readonly decisionsToDFA = SolidityParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SourceUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SolidityParser.EOF, 0)!;
    }
    public pragmaDirective(): PragmaDirectiveContext[];
    public pragmaDirective(i: number): PragmaDirectiveContext | null;
    public pragmaDirective(i?: number): PragmaDirectiveContext[] | PragmaDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PragmaDirectiveContext);
        }

        return this.getRuleContext(i, PragmaDirectiveContext);
    }
    public importDirective(): ImportDirectiveContext[];
    public importDirective(i: number): ImportDirectiveContext | null;
    public importDirective(i?: number): ImportDirectiveContext[] | ImportDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportDirectiveContext);
        }

        return this.getRuleContext(i, ImportDirectiveContext);
    }
    public usingDirective(): UsingDirectiveContext[];
    public usingDirective(i: number): UsingDirectiveContext | null;
    public usingDirective(i?: number): UsingDirectiveContext[] | UsingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UsingDirectiveContext);
        }

        return this.getRuleContext(i, UsingDirectiveContext);
    }
    public contractDefinition(): ContractDefinitionContext[];
    public contractDefinition(i: number): ContractDefinitionContext | null;
    public contractDefinition(i?: number): ContractDefinitionContext[] | ContractDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractDefinitionContext);
        }

        return this.getRuleContext(i, ContractDefinitionContext);
    }
    public interfaceDefinition(): InterfaceDefinitionContext[];
    public interfaceDefinition(i: number): InterfaceDefinitionContext | null;
    public interfaceDefinition(i?: number): InterfaceDefinitionContext[] | InterfaceDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceDefinitionContext);
        }

        return this.getRuleContext(i, InterfaceDefinitionContext);
    }
    public libraryDefinition(): LibraryDefinitionContext[];
    public libraryDefinition(i: number): LibraryDefinitionContext | null;
    public libraryDefinition(i?: number): LibraryDefinitionContext[] | LibraryDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LibraryDefinitionContext);
        }

        return this.getRuleContext(i, LibraryDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext[];
    public functionDefinition(i: number): FunctionDefinitionContext | null;
    public functionDefinition(i?: number): FunctionDefinitionContext[] | FunctionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }

        return this.getRuleContext(i, FunctionDefinitionContext);
    }
    public constantVariableDeclaration(): ConstantVariableDeclarationContext[];
    public constantVariableDeclaration(i: number): ConstantVariableDeclarationContext | null;
    public constantVariableDeclaration(i?: number): ConstantVariableDeclarationContext[] | ConstantVariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantVariableDeclarationContext);
        }

        return this.getRuleContext(i, ConstantVariableDeclarationContext);
    }
    public structDefinition(): StructDefinitionContext[];
    public structDefinition(i: number): StructDefinitionContext | null;
    public structDefinition(i?: number): StructDefinitionContext[] | StructDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructDefinitionContext);
        }

        return this.getRuleContext(i, StructDefinitionContext);
    }
    public enumDefinition(): EnumDefinitionContext[];
    public enumDefinition(i: number): EnumDefinitionContext | null;
    public enumDefinition(i?: number): EnumDefinitionContext[] | EnumDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumDefinitionContext);
        }

        return this.getRuleContext(i, EnumDefinitionContext);
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext[];
    public userDefinedValueTypeDefinition(i: number): UserDefinedValueTypeDefinitionContext | null;
    public userDefinedValueTypeDefinition(i?: number): UserDefinedValueTypeDefinitionContext[] | UserDefinedValueTypeDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UserDefinedValueTypeDefinitionContext);
        }

        return this.getRuleContext(i, UserDefinedValueTypeDefinitionContext);
    }
    public errorDefinition(): ErrorDefinitionContext[];
    public errorDefinition(i: number): ErrorDefinitionContext | null;
    public errorDefinition(i?: number): ErrorDefinitionContext[] | ErrorDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ErrorDefinitionContext);
        }

        return this.getRuleContext(i, ErrorDefinitionContext);
    }
    public eventDefinition(): EventDefinitionContext[];
    public eventDefinition(i: number): EventDefinitionContext | null;
    public eventDefinition(i?: number): EventDefinitionContext[] | EventDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EventDefinitionContext);
        }

        return this.getRuleContext(i, EventDefinitionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_sourceUnit;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterSourceUnit) {
             listener.enterSourceUnit(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitSourceUnit) {
             listener.exitSourceUnit(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitSourceUnit) {
            return visitor.visitSourceUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PragmaDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Pragma(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Pragma, 0)!;
    }
    public PragmaSemicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.PragmaSemicolon, 0)!;
    }
    public PragmaToken(): antlr.TerminalNode[];
    public PragmaToken(i: number): antlr.TerminalNode | null;
    public PragmaToken(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.PragmaToken);
    	} else {
    		return this.getToken(SolidityParser.PragmaToken, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_pragmaDirective;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterPragmaDirective) {
             listener.enterPragmaDirective(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitPragmaDirective) {
             listener.exitPragmaDirective(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitPragmaDirective) {
            return visitor.visitPragmaDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImportDirectiveContext extends antlr.ParserRuleContext {
    public _unitAlias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Import(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Import, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public path(): PathContext | null {
        return this.getRuleContext(0, PathContext);
    }
    public symbolAliases(): SymbolAliasesContext | null {
        return this.getRuleContext(0, SymbolAliasesContext);
    }
    public From(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.From, 0);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_importDirective;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterImportDirective) {
             listener.enterImportDirective(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitImportDirective) {
             listener.exitImportDirective(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitImportDirective) {
            return visitor.visitImportDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImportAliasesContext extends antlr.ParserRuleContext {
    public _symbol_?: IdentifierContext;
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_importAliases;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterImportAliases) {
             listener.enterImportAliases(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitImportAliases) {
             listener.exitImportAliases(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitImportAliases) {
            return visitor.visitImportAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NonEmptyStringLiteral(): antlr.TerminalNode {
        return this.getToken(SolidityParser.NonEmptyStringLiteral, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_path;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterPath) {
             listener.enterPath(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitPath) {
             listener.exitPath(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitPath) {
            return visitor.visitPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SymbolAliasesContext extends antlr.ParserRuleContext {
    public _importAliases?: ImportAliasesContext;
    public _aliases: ImportAliasesContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public importAliases(): ImportAliasesContext[];
    public importAliases(i: number): ImportAliasesContext | null;
    public importAliases(i?: number): ImportAliasesContext[] | ImportAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportAliasesContext);
        }

        return this.getRuleContext(i, ImportAliasesContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_symbolAliases;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterSymbolAliases) {
             listener.enterSymbolAliases(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitSymbolAliases) {
             listener.exitSymbolAliases(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitSymbolAliases) {
            return visitor.visitSymbolAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContractDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Contract(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Contract, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Abstract(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Abstract, 0);
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext | null {
        return this.getRuleContext(0, InheritanceSpecifierListContext);
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_contractDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterContractDefinition) {
             listener.enterContractDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitContractDefinition) {
             listener.exitContractDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitContractDefinition) {
            return visitor.visitContractDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Interface(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Interface, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext | null {
        return this.getRuleContext(0, InheritanceSpecifierListContext);
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_interfaceDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterInterfaceDefinition) {
             listener.enterInterfaceDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitInterfaceDefinition) {
             listener.exitInterfaceDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceDefinition) {
            return visitor.visitInterfaceDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LibraryDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Library(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Library, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_libraryDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterLibraryDefinition) {
             listener.enterLibraryDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitLibraryDefinition) {
             listener.exitLibraryDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitLibraryDefinition) {
            return visitor.visitLibraryDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InheritanceSpecifierListContext extends antlr.ParserRuleContext {
    public _inheritanceSpecifier?: InheritanceSpecifierContext;
    public _inheritanceSpecifiers: InheritanceSpecifierContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Is(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Is, 0)!;
    }
    public inheritanceSpecifier(): InheritanceSpecifierContext[];
    public inheritanceSpecifier(i: number): InheritanceSpecifierContext | null;
    public inheritanceSpecifier(i?: number): InheritanceSpecifierContext[] | InheritanceSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InheritanceSpecifierContext);
        }

        return this.getRuleContext(i, InheritanceSpecifierContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inheritanceSpecifierList;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterInheritanceSpecifierList) {
             listener.enterInheritanceSpecifierList(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitInheritanceSpecifierList) {
             listener.exitInheritanceSpecifierList(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitInheritanceSpecifierList) {
            return visitor.visitInheritanceSpecifierList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InheritanceSpecifierContext extends antlr.ParserRuleContext {
    public _name?: IdentifierPathContext;
    public _arguments?: CallArgumentListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public callArgumentList(): CallArgumentListContext | null {
        return this.getRuleContext(0, CallArgumentListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inheritanceSpecifier;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterInheritanceSpecifier) {
             listener.enterInheritanceSpecifier(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitInheritanceSpecifier) {
             listener.exitInheritanceSpecifier(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitInheritanceSpecifier) {
            return visitor.visitInheritanceSpecifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContractBodyElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constructorDefinition(): ConstructorDefinitionContext | null {
        return this.getRuleContext(0, ConstructorDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext | null {
        return this.getRuleContext(0, FunctionDefinitionContext);
    }
    public modifierDefinition(): ModifierDefinitionContext | null {
        return this.getRuleContext(0, ModifierDefinitionContext);
    }
    public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext | null {
        return this.getRuleContext(0, FallbackFunctionDefinitionContext);
    }
    public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext | null {
        return this.getRuleContext(0, ReceiveFunctionDefinitionContext);
    }
    public structDefinition(): StructDefinitionContext | null {
        return this.getRuleContext(0, StructDefinitionContext);
    }
    public enumDefinition(): EnumDefinitionContext | null {
        return this.getRuleContext(0, EnumDefinitionContext);
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext | null {
        return this.getRuleContext(0, UserDefinedValueTypeDefinitionContext);
    }
    public stateVariableDeclaration(): StateVariableDeclarationContext | null {
        return this.getRuleContext(0, StateVariableDeclarationContext);
    }
    public eventDefinition(): EventDefinitionContext | null {
        return this.getRuleContext(0, EventDefinitionContext);
    }
    public errorDefinition(): ErrorDefinitionContext | null {
        return this.getRuleContext(0, ErrorDefinitionContext);
    }
    public usingDirective(): UsingDirectiveContext | null {
        return this.getRuleContext(0, UsingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_contractBodyElement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterContractBodyElement) {
             listener.enterContractBodyElement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitContractBodyElement) {
             listener.exitContractBodyElement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitContractBodyElement) {
            return visitor.visitContractBodyElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedArgumentContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _value?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_namedArgument;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterNamedArgument) {
             listener.enterNamedArgument(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitNamedArgument) {
             listener.exitNamedArgument(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitNamedArgument) {
            return visitor.visitNamedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public LBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrace, 0);
    }
    public RBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrace, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public namedArgument(): NamedArgumentContext[];
    public namedArgument(i: number): NamedArgumentContext | null;
    public namedArgument(i?: number): NamedArgumentContext[] | NamedArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedArgumentContext);
        }

        return this.getRuleContext(i, NamedArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_callArgumentList;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterCallArgumentList) {
             listener.enterCallArgumentList(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitCallArgumentList) {
             listener.exitCallArgumentList(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitCallArgumentList) {
            return visitor.visitCallArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Period(): antlr.TerminalNode[];
    public Period(i: number): antlr.TerminalNode | null;
    public Period(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Period);
    	} else {
    		return this.getToken(SolidityParser.Period, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_identifierPath;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterIdentifierPath) {
             listener.enterIdentifierPath(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitIdentifierPath) {
             listener.exitIdentifierPath(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierPath) {
            return visitor.visitIdentifierPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public callArgumentList(): CallArgumentListContext | null {
        return this.getRuleContext(0, CallArgumentListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_modifierInvocation;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterModifierInvocation) {
             listener.enterModifierInvocation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitModifierInvocation) {
             listener.exitModifierInvocation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitModifierInvocation) {
            return visitor.visitModifierInvocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VisibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Internal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Internal, 0);
    }
    public External(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.External, 0);
    }
    public Private(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Private, 0);
    }
    public Public(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Public, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_visibility;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterVisibility) {
             listener.enterVisibility(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitVisibility) {
             listener.exitVisibility(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitVisibility) {
            return visitor.visitVisibility(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public _parameterDeclaration?: ParameterDeclarationContext;
    public _parameters: ParameterDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameterDeclaration(): ParameterDeclarationContext[];
    public parameterDeclaration(i: number): ParameterDeclarationContext | null;
    public parameterDeclaration(i?: number): ParameterDeclarationContext[] | ParameterDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclarationContext);
        }

        return this.getRuleContext(i, ParameterDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_parameterList;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _location?: DataLocationContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public dataLocation(): DataLocationContext | null {
        return this.getRuleContext(0, DataLocationContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_parameterDeclaration;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterParameterDeclaration) {
             listener.enterParameterDeclaration(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitParameterDeclaration) {
             listener.exitParameterDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitParameterDeclaration) {
            return visitor.visitParameterDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstructorDefinitionContext extends antlr.ParserRuleContext {
    public payableSet: boolean = false;
    public visibilitySet: boolean = false;
    public _arguments?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Constructor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Constructor, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Payable(): antlr.TerminalNode[];
    public Payable(i: number): antlr.TerminalNode | null;
    public Payable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Payable);
    	} else {
    		return this.getToken(SolidityParser.Payable, i);
    	}
    }
    public Internal(): antlr.TerminalNode[];
    public Internal(i: number): antlr.TerminalNode | null;
    public Internal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Internal);
    	} else {
    		return this.getToken(SolidityParser.Internal, i);
    	}
    }
    public Public(): antlr.TerminalNode[];
    public Public(i: number): antlr.TerminalNode | null;
    public Public(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Public);
    	} else {
    		return this.getToken(SolidityParser.Public, i);
    	}
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_constructorDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterConstructorDefinition) {
             listener.enterConstructorDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitConstructorDefinition) {
             listener.exitConstructorDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitConstructorDefinition) {
            return visitor.visitConstructorDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StateMutabilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Pure(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Pure, 0);
    }
    public View(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.View, 0);
    }
    public Payable(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Payable, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stateMutability;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStateMutability) {
             listener.enterStateMutability(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStateMutability) {
             listener.exitStateMutability(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStateMutability) {
            return visitor.visitStateMutability(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverrideSpecifierContext extends antlr.ParserRuleContext {
    public _identifierPath?: IdentifierPathContext;
    public _overrides: IdentifierPathContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Override(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Override, 0)!;
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public identifierPath(): IdentifierPathContext[];
    public identifierPath(i: number): IdentifierPathContext | null;
    public identifierPath(i?: number): IdentifierPathContext[] | IdentifierPathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierPathContext);
        }

        return this.getRuleContext(i, IdentifierPathContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_overrideSpecifier;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterOverrideSpecifier) {
             listener.enterOverrideSpecifier(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitOverrideSpecifier) {
             listener.exitOverrideSpecifier(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitOverrideSpecifier) {
            return visitor.visitOverrideSpecifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDefinitionContext extends antlr.ParserRuleContext {
    public visibilitySet: boolean = false;
    public mutabilitySet: boolean = false;
    public virtualSet: boolean = false;
    public overrideSpecifierSet: boolean = false;
    public _arguments?: ParameterListContext;
    public _returnParameters?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Function(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Function, 0)!;
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public Fallback(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Fallback, 0);
    }
    public Receive(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Receive, 0);
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public visibility(): VisibilityContext[];
    public visibility(i: number): VisibilityContext | null;
    public visibility(i?: number): VisibilityContext[] | VisibilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VisibilityContext);
        }

        return this.getRuleContext(i, VisibilityContext);
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_functionDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterFunctionDefinition) {
             listener.enterFunctionDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitFunctionDefinition) {
             listener.exitFunctionDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierDefinitionContext extends antlr.ParserRuleContext {
    public virtualSet: boolean = false;
    public overrideSpecifierSet: boolean = false;
    public _name?: IdentifierContext;
    public _arguments?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Modifier(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Modifier, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_modifierDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterModifierDefinition) {
             listener.enterModifierDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitModifierDefinition) {
             listener.exitModifierDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitModifierDefinition) {
            return visitor.visitModifierDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FallbackFunctionDefinitionContext extends antlr.ParserRuleContext {
    public visibilitySet: boolean = false;
    public mutabilitySet: boolean = false;
    public virtualSet: boolean = false;
    public overrideSpecifierSet: boolean = false;
    public hasParameters: boolean = false;
    public _kind?: Token | null;
    public _returnParameters?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public Fallback(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Fallback, 0)!;
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public External(): antlr.TerminalNode[];
    public External(i: number): antlr.TerminalNode | null;
    public External(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.External);
    	} else {
    		return this.getToken(SolidityParser.External, i);
    	}
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_fallbackFunctionDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterFallbackFunctionDefinition) {
             listener.enterFallbackFunctionDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitFallbackFunctionDefinition) {
             listener.exitFallbackFunctionDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitFallbackFunctionDefinition) {
            return visitor.visitFallbackFunctionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReceiveFunctionDefinitionContext extends antlr.ParserRuleContext {
    public visibilitySet: boolean = false;
    public mutabilitySet: boolean = false;
    public virtualSet: boolean = false;
    public overrideSpecifierSet: boolean = false;
    public _kind?: Token | null;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Receive(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Receive, 0)!;
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public External(): antlr.TerminalNode[];
    public External(i: number): antlr.TerminalNode | null;
    public External(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.External);
    	} else {
    		return this.getToken(SolidityParser.External, i);
    	}
    }
    public Payable(): antlr.TerminalNode[];
    public Payable(i: number): antlr.TerminalNode | null;
    public Payable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Payable);
    	} else {
    		return this.getToken(SolidityParser.Payable, i);
    	}
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_receiveFunctionDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterReceiveFunctionDefinition) {
             listener.enterReceiveFunctionDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitReceiveFunctionDefinition) {
             listener.exitReceiveFunctionDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitReceiveFunctionDefinition) {
            return visitor.visitReceiveFunctionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _members?: StructMemberContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Struct(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Struct, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public structMember(): StructMemberContext[];
    public structMember(i: number): StructMemberContext | null;
    public structMember(i?: number): StructMemberContext[] | StructMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructMemberContext);
        }

        return this.getRuleContext(i, StructMemberContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_structDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStructDefinition) {
             listener.enterStructDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStructDefinition) {
             listener.exitStructDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStructDefinition) {
            return visitor.visitStructDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructMemberContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_structMember;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStructMember) {
             listener.enterStructMember(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStructMember) {
             listener.exitStructMember(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStructMember) {
            return visitor.visitStructMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _identifier?: IdentifierContext;
    public _enumValues: IdentifierContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Enum(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Enum, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_enumDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterEnumDefinition) {
             listener.enterEnumDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitEnumDefinition) {
             listener.exitEnumDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitEnumDefinition) {
            return visitor.visitEnumDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UserDefinedValueTypeDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Type(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Type, 0)!;
    }
    public Is(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Is, 0)!;
    }
    public elementaryTypeName(): ElementaryTypeNameContext {
        return this.getRuleContext(0, ElementaryTypeNameContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_userDefinedValueTypeDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUserDefinedValueTypeDefinition) {
             listener.enterUserDefinedValueTypeDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUserDefinedValueTypeDefinition) {
             listener.exitUserDefinedValueTypeDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUserDefinedValueTypeDefinition) {
            return visitor.visitUserDefinedValueTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StateVariableDeclarationContext extends antlr.ParserRuleContext {
    public constantnessSet: boolean = false;
    public visibilitySet: boolean = false;
    public overrideSpecifierSet: boolean = false;
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public _initialValue?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Public(): antlr.TerminalNode[];
    public Public(i: number): antlr.TerminalNode | null;
    public Public(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Public);
    	} else {
    		return this.getToken(SolidityParser.Public, i);
    	}
    }
    public Private(): antlr.TerminalNode[];
    public Private(i: number): antlr.TerminalNode | null;
    public Private(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Private);
    	} else {
    		return this.getToken(SolidityParser.Private, i);
    	}
    }
    public Internal(): antlr.TerminalNode[];
    public Internal(i: number): antlr.TerminalNode | null;
    public Internal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Internal);
    	} else {
    		return this.getToken(SolidityParser.Internal, i);
    	}
    }
    public Constant(): antlr.TerminalNode[];
    public Constant(i: number): antlr.TerminalNode | null;
    public Constant(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Constant);
    	} else {
    		return this.getToken(SolidityParser.Constant, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public Immutable(): antlr.TerminalNode[];
    public Immutable(i: number): antlr.TerminalNode | null;
    public Immutable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Immutable);
    	} else {
    		return this.getToken(SolidityParser.Immutable, i);
    	}
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stateVariableDeclaration;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStateVariableDeclaration) {
             listener.enterStateVariableDeclaration(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStateVariableDeclaration) {
             listener.exitStateVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStateVariableDeclaration) {
            return visitor.visitStateVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantVariableDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public _initialValue?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Constant(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Constant, 0)!;
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Assign, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_constantVariableDeclaration;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterConstantVariableDeclaration) {
             listener.enterConstantVariableDeclaration(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitConstantVariableDeclaration) {
             listener.exitConstantVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitConstantVariableDeclaration) {
            return visitor.visitConstantVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EventParameterContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public Indexed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Indexed, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_eventParameter;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterEventParameter) {
             listener.enterEventParameter(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitEventParameter) {
             listener.exitEventParameter(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitEventParameter) {
            return visitor.visitEventParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EventDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _eventParameter?: EventParameterContext;
    public _parameters: EventParameterContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Event(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Event, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Anonymous(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Anonymous, 0);
    }
    public eventParameter(): EventParameterContext[];
    public eventParameter(i: number): EventParameterContext | null;
    public eventParameter(i?: number): EventParameterContext[] | EventParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EventParameterContext);
        }

        return this.getRuleContext(i, EventParameterContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_eventDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterEventDefinition) {
             listener.enterEventDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitEventDefinition) {
             listener.exitEventDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitEventDefinition) {
            return visitor.visitEventDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorParameterContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_errorParameter;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterErrorParameter) {
             listener.enterErrorParameter(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitErrorParameter) {
             listener.exitErrorParameter(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitErrorParameter) {
            return visitor.visitErrorParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _errorParameter?: ErrorParameterContext;
    public _parameters: ErrorParameterContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Error(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Error, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public errorParameter(): ErrorParameterContext[];
    public errorParameter(i: number): ErrorParameterContext | null;
    public errorParameter(i?: number): ErrorParameterContext[] | ErrorParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ErrorParameterContext);
        }

        return this.getRuleContext(i, ErrorParameterContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_errorDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterErrorDefinition) {
             listener.enterErrorDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitErrorDefinition) {
             listener.exitErrorDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitErrorDefinition) {
            return visitor.visitErrorDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UserDefinableOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BitAnd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitAnd, 0);
    }
    public BitNot(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitNot, 0);
    }
    public BitOr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitOr, 0);
    }
    public BitXor(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitXor, 0);
    }
    public Add(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Add, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mod, 0);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Equal, 0);
    }
    public GreaterThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThan, 0);
    }
    public GreaterThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThanOrEqual, 0);
    }
    public LessThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThan, 0);
    }
    public LessThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThanOrEqual, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.NotEqual, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_userDefinableOperator;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUserDefinableOperator) {
             listener.enterUserDefinableOperator(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUserDefinableOperator) {
             listener.exitUserDefinableOperator(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUserDefinableOperator) {
            return visitor.visitUserDefinableOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UsingDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Using(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Using, 0)!;
    }
    public For(): antlr.TerminalNode {
        return this.getToken(SolidityParser.For, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifierPath(): IdentifierPathContext[];
    public identifierPath(i: number): IdentifierPathContext | null;
    public identifierPath(i?: number): IdentifierPathContext[] | IdentifierPathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierPathContext);
        }

        return this.getRuleContext(i, IdentifierPathContext);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Global, 0);
    }
    public LBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrace, 0);
    }
    public RBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrace, 0);
    }
    public As(): antlr.TerminalNode[];
    public As(i: number): antlr.TerminalNode | null;
    public As(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.As);
    	} else {
    		return this.getToken(SolidityParser.As, i);
    	}
    }
    public userDefinableOperator(): UserDefinableOperatorContext[];
    public userDefinableOperator(i: number): UserDefinableOperatorContext | null;
    public userDefinableOperator(i?: number): UserDefinableOperatorContext[] | UserDefinableOperatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UserDefinableOperatorContext);
        }

        return this.getRuleContext(i, UserDefinableOperatorContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_usingDirective;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUsingDirective) {
             listener.enterUsingDirective(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUsingDirective) {
             listener.exitUsingDirective(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUsingDirective) {
            return visitor.visitUsingDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public functionTypeName(): FunctionTypeNameContext | null {
        return this.getRuleContext(0, FunctionTypeNameContext);
    }
    public mappingType(): MappingTypeContext | null {
        return this.getRuleContext(0, MappingTypeContext);
    }
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public LBrack(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrack, 0);
    }
    public RBrack(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrack, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_typeName;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterTypeName) {
             listener.enterTypeName(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitTypeName) {
             listener.exitTypeName(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementaryTypeNameContext extends antlr.ParserRuleContext {
    public allowAddressPayable: boolean;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number, allowAddressPayable: boolean) {
        super(parent, invokingState);
        this.allowAddressPayable = allowAddressPayable;
    }
    public Address(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Address, 0);
    }
    public Payable(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Payable, 0);
    }
    public Bool(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Bool, 0);
    }
    public String(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.String, 0);
    }
    public Bytes(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Bytes, 0);
    }
    public SignedIntegerType(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.SignedIntegerType, 0);
    }
    public UnsignedIntegerType(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.UnsignedIntegerType, 0);
    }
    public FixedBytes(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.FixedBytes, 0);
    }
    public Fixed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Fixed, 0);
    }
    public Ufixed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Ufixed, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_elementaryTypeName;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterElementaryTypeName) {
             listener.enterElementaryTypeName(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitElementaryTypeName) {
             listener.exitElementaryTypeName(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitElementaryTypeName) {
            return visitor.visitElementaryTypeName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeNameContext extends antlr.ParserRuleContext {
    public visibilitySet: boolean = false;
    public mutabilitySet: boolean = false;
    public _arguments?: ParameterListContext;
    public _returnParameters?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Function(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Function, 0)!;
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public visibility(): VisibilityContext[];
    public visibility(i: number): VisibilityContext | null;
    public visibility(i?: number): VisibilityContext[] | VisibilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VisibilityContext);
        }

        return this.getRuleContext(i, VisibilityContext);
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_functionTypeName;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterFunctionTypeName) {
             listener.enterFunctionTypeName(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitFunctionTypeName) {
             listener.exitFunctionTypeName(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionTypeName) {
            return visitor.visitFunctionTypeName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _location?: DataLocationContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public dataLocation(): DataLocationContext | null {
        return this.getRuleContext(0, DataLocationContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataLocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Memory(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Memory, 0);
    }
    public Storage(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Storage, 0);
    }
    public Calldata(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Calldata, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_dataLocation;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterDataLocation) {
             listener.enterDataLocation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitDataLocation) {
             listener.exitDataLocation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitDataLocation) {
            return visitor.visitDataLocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class UnaryPrefixOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Inc(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Inc, 0);
    }
    public Dec(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Dec, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Not, 0);
    }
    public BitNot(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitNot, 0);
    }
    public Delete(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Delete, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUnaryPrefixOperation) {
             listener.enterUnaryPrefixOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUnaryPrefixOperation) {
             listener.exitUnaryPrefixOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryPrefixOperation) {
            return visitor.visitUnaryPrefixOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrimaryExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public literalWithSubDenomination(): LiteralWithSubDenominationContext | null {
        return this.getRuleContext(0, LiteralWithSubDenominationContext);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterPrimaryExpression) {
             listener.enterPrimaryExpression(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitPrimaryExpression) {
             listener.exitPrimaryExpression(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderComparisonContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LessThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThan, 0);
    }
    public GreaterThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThan, 0);
    }
    public LessThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThanOrEqual, 0);
    }
    public GreaterThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThanOrEqual, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterOrderComparison) {
             listener.enterOrderComparison(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitOrderComparison) {
             listener.exitOrderComparison(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitOrderComparison) {
            return visitor.visitOrderComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConditionalContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Conditional(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Conditional, 0)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterConditional) {
             listener.enterConditional(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitConditional) {
             listener.exitConditional(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitConditional) {
            return visitor.visitConditional(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PayableConversionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Payable(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Payable, 0)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterPayableConversion) {
             listener.enterPayableConversion(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitPayableConversion) {
             listener.exitPayableConversion(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitPayableConversion) {
            return visitor.visitPayableConversion(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public assignOp(): AssignOpContext {
        return this.getRuleContext(0, AssignOpContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnarySuffixOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Inc(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Inc, 0);
    }
    public Dec(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Dec, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUnarySuffixOperation) {
             listener.enterUnarySuffixOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUnarySuffixOperation) {
             listener.exitUnarySuffixOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUnarySuffixOperation) {
            return visitor.visitUnarySuffixOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShiftOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Shl(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Shl, 0);
    }
    public Sar(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sar, 0);
    }
    public Shr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Shr, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterShiftOperation) {
             listener.enterShiftOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitShiftOperation) {
             listener.exitShiftOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitShiftOperation) {
            return visitor.visitShiftOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitAndOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitAnd(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitAnd, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBitAndOperation) {
             listener.enterBitAndOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBitAndOperation) {
             listener.exitBitAndOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBitAndOperation) {
            return visitor.visitBitAndOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexRangeAccessContext extends ExpressionContext {
    public _startIndex?: ExpressionContext;
    public _endIndex?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterIndexRangeAccess) {
             listener.enterIndexRangeAccess(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitIndexRangeAccess) {
             listener.exitIndexRangeAccess(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitIndexRangeAccess) {
            return visitor.visitIndexRangeAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexAccessContext extends ExpressionContext {
    public _index?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterIndexAccess) {
             listener.enterIndexAccess(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitIndexAccess) {
             listener.exitIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitIndexAccess) {
            return visitor.visitIndexAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSubOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Add(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Add, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAddSubOperation) {
             listener.enterAddSubOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAddSubOperation) {
             listener.exitAddSubOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAddSubOperation) {
            return visitor.visitAddSubOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitOrOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitOr(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitOr, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBitOrOperation) {
             listener.enterBitOrOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBitOrOperation) {
             listener.exitBitOrOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBitOrOperation) {
            return visitor.visitBitOrOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Exp(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Exp, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterExpOperation) {
             listener.enterExpOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitExpOperation) {
             listener.exitExpOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitExpOperation) {
            return visitor.visitExpOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public And(): antlr.TerminalNode {
        return this.getToken(SolidityParser.And, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAndOperation) {
             listener.enterAndOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAndOperation) {
             listener.exitAndOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAndOperation) {
            return visitor.visitAndOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineArrayContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public inlineArrayExpression(): InlineArrayExpressionContext {
        return this.getRuleContext(0, InlineArrayExpressionContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterInlineArray) {
             listener.enterInlineArray(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitInlineArray) {
             listener.exitInlineArray(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitInlineArray) {
            return visitor.visitInlineArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Or(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Or, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterOrOperation) {
             listener.enterOrOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitOrOperation) {
             listener.exitOrOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitOrOperation) {
            return visitor.visitOrOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberAccessContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Period(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Period, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public Address(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Address, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterMemberAccess) {
             listener.enterMemberAccess(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitMemberAccess) {
             listener.exitMemberAccess(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivModOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mod, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterMulDivModOperation) {
             listener.enterMulDivModOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitMulDivModOperation) {
             listener.exitMulDivModOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitMulDivModOperation) {
            return visitor.visitMulDivModOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallOptionsContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public namedArgument(): NamedArgumentContext[];
    public namedArgument(i: number): NamedArgumentContext | null;
    public namedArgument(i?: number): NamedArgumentContext[] | NamedArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedArgumentContext);
        }

        return this.getRuleContext(i, NamedArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterFunctionCallOptions) {
             listener.enterFunctionCallOptions(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitFunctionCallOptions) {
             listener.exitFunctionCallOptions(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallOptions) {
            return visitor.visitFunctionCallOptions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NewExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public New(): antlr.TerminalNode {
        return this.getToken(SolidityParser.New, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterNewExpr) {
             listener.enterNewExpr(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitNewExpr) {
             listener.exitNewExpr(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitNewExpr) {
            return visitor.visitNewExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitXorOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitXor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitXor, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBitXorOperation) {
             listener.enterBitXorOperation(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBitXorOperation) {
             listener.exitBitXorOperation(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBitXorOperation) {
            return visitor.visitBitXorOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tupleExpression(): TupleExpressionContext {
        return this.getRuleContext(0, TupleExpressionContext)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterTuple) {
             listener.enterTuple(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitTuple) {
             listener.exitTuple(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitTuple) {
            return visitor.visitTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityComparisonContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Equal, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.NotEqual, 0);
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterEqualityComparison) {
             listener.enterEqualityComparison(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitEqualityComparison) {
             listener.exitEqualityComparison(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitEqualityComparison) {
            return visitor.visitEqualityComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MetaTypeContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Type(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Type, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterMetaType) {
             listener.enterMetaType(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitMetaType) {
             listener.exitMetaType(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitMetaType) {
            return visitor.visitMetaType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public AssignBitOr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitOr, 0);
    }
    public AssignBitXor(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitXor, 0);
    }
    public AssignBitAnd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitAnd, 0);
    }
    public AssignShl(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignShl, 0);
    }
    public AssignSar(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignSar, 0);
    }
    public AssignShr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignShr, 0);
    }
    public AssignAdd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignAdd, 0);
    }
    public AssignSub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignSub, 0);
    }
    public AssignMul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignMul, 0);
    }
    public AssignDiv(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignDiv, 0);
    }
    public AssignMod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignMod, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assignOp;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAssignOp) {
             listener.enterAssignOp(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAssignOp) {
             listener.exitAssignOp(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAssignOp) {
            return visitor.visitAssignOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_tupleExpression;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterTupleExpression) {
             listener.enterTupleExpression(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitTupleExpression) {
             listener.exitTupleExpression(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitTupleExpression) {
            return visitor.visitTupleExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlineArrayExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inlineArrayExpression;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterInlineArrayExpression) {
             listener.enterInlineArrayExpression(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitInlineArrayExpression) {
             listener.exitInlineArrayExpression(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitInlineArrayExpression) {
            return visitor.visitInlineArrayExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Identifier, 0);
    }
    public From(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.From, 0);
    }
    public Error(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Error, 0);
    }
    public Revert(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Revert, 0);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Global, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_identifier;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public hexStringLiteral(): HexStringLiteralContext | null {
        return this.getRuleContext(0, HexStringLiteralContext);
    }
    public unicodeStringLiteral(): UnicodeStringLiteralContext | null {
        return this.getRuleContext(0, UnicodeStringLiteralContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_literal;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralWithSubDenominationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext {
        return this.getRuleContext(0, NumberLiteralContext)!;
    }
    public SubDenomination(): antlr.TerminalNode {
        return this.getToken(SolidityParser.SubDenomination, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_literalWithSubDenomination;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterLiteralWithSubDenomination) {
             listener.enterLiteralWithSubDenomination(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitLiteralWithSubDenomination) {
             listener.exitLiteralWithSubDenomination(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralWithSubDenomination) {
            return visitor.visitLiteralWithSubDenomination(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public True(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.True, 0);
    }
    public False(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.False, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_booleanLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NonEmptyStringLiteral(): antlr.TerminalNode[];
    public NonEmptyStringLiteral(i: number): antlr.TerminalNode | null;
    public NonEmptyStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.NonEmptyStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.NonEmptyStringLiteral, i);
    	}
    }
    public EmptyStringLiteral(): antlr.TerminalNode[];
    public EmptyStringLiteral(i: number): antlr.TerminalNode | null;
    public EmptyStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.EmptyStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.EmptyStringLiteral, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stringLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HexStringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HexString(): antlr.TerminalNode[];
    public HexString(i: number): antlr.TerminalNode | null;
    public HexString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.HexString);
    	} else {
    		return this.getToken(SolidityParser.HexString, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_hexStringLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterHexStringLiteral) {
             listener.enterHexStringLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitHexStringLiteral) {
             listener.exitHexStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitHexStringLiteral) {
            return visitor.visitHexStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnicodeStringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UnicodeStringLiteral(): antlr.TerminalNode[];
    public UnicodeStringLiteral(i: number): antlr.TerminalNode | null;
    public UnicodeStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.UnicodeStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.UnicodeStringLiteral, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_unicodeStringLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUnicodeStringLiteral) {
             listener.enterUnicodeStringLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUnicodeStringLiteral) {
             listener.exitUnicodeStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUnicodeStringLiteral) {
            return visitor.visitUnicodeStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.DecimalNumber, 0);
    }
    public HexNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.HexNumber, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_numberLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterNumberLiteral) {
             listener.enterNumberLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitNumberLiteral) {
             listener.exitNumberLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public uncheckedBlock(): UncheckedBlockContext[];
    public uncheckedBlock(i: number): UncheckedBlockContext | null;
    public uncheckedBlock(i?: number): UncheckedBlockContext[] | UncheckedBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UncheckedBlockContext);
        }

        return this.getRuleContext(i, UncheckedBlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_block;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UncheckedBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Unchecked(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Unchecked, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_uncheckedBlock;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUncheckedBlock) {
             listener.enterUncheckedBlock(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUncheckedBlock) {
             listener.exitUncheckedBlock(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUncheckedBlock) {
            return visitor.visitUncheckedBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public simpleStatement(): SimpleStatementContext | null {
        return this.getRuleContext(0, SimpleStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public forStatement(): ForStatementContext | null {
        return this.getRuleContext(0, ForStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public doWhileStatement(): DoWhileStatementContext | null {
        return this.getRuleContext(0, DoWhileStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
    }
    public tryStatement(): TryStatementContext | null {
        return this.getRuleContext(0, TryStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public emitStatement(): EmitStatementContext | null {
        return this.getRuleContext(0, EmitStatementContext);
    }
    public revertStatement(): RevertStatementContext | null {
        return this.getRuleContext(0, RevertStatementContext);
    }
    public assemblyStatement(): AssemblyStatementContext | null {
        return this.getRuleContext(0, AssemblyStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_statement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarationStatement(): VariableDeclarationStatementContext | null {
        return this.getRuleContext(0, VariableDeclarationStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_simpleStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterSimpleStatement) {
             listener.enterSimpleStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitSimpleStatement) {
             listener.exitSimpleStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleStatement) {
            return visitor.visitSimpleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public If(): antlr.TerminalNode {
        return this.getToken(SolidityParser.If, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public Else(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Else, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_ifStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public For(): antlr.TerminalNode {
        return this.getToken(SolidityParser.For, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public simpleStatement(): SimpleStatementContext | null {
        return this.getRuleContext(0, SimpleStatementContext);
    }
    public Semicolon(): antlr.TerminalNode[];
    public Semicolon(i: number): antlr.TerminalNode | null;
    public Semicolon(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Semicolon);
    	} else {
    		return this.getToken(SolidityParser.Semicolon, i);
    	}
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_forStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterForStatement) {
             listener.enterForStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitForStatement) {
             listener.exitForStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public While(): antlr.TerminalNode {
        return this.getToken(SolidityParser.While, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_whileStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DoWhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Do(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Do, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public While(): antlr.TerminalNode {
        return this.getToken(SolidityParser.While, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_doWhileStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterDoWhileStatement) {
             listener.enterDoWhileStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitDoWhileStatement) {
             listener.exitDoWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitDoWhileStatement) {
            return visitor.visitDoWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Continue(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Continue, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_continueStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Break(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Break, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_breakStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TryStatementContext extends antlr.ParserRuleContext {
    public _returnParameters?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Try(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Try, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public catchClause(): CatchClauseContext[];
    public catchClause(i: number): CatchClauseContext | null;
    public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }

        return this.getRuleContext(i, CatchClauseContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_tryStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterTryStatement) {
             listener.enterTryStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitTryStatement) {
             listener.exitTryStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchClauseContext extends antlr.ParserRuleContext {
    public _arguments?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Catch(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Catch, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_catchClause;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterCatchClause) {
             listener.enterCatchClause(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitCatchClause) {
             listener.exitCatchClause(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Return(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Return, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_returnStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Emit(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Emit, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_emitStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterEmitStatement) {
             listener.enterEmitStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitEmitStatement) {
             listener.exitEmitStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitEmitStatement) {
            return visitor.visitEmitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RevertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Revert(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Revert, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_revertStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterRevertStatement) {
             listener.enterRevertStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitRevertStatement) {
             listener.exitRevertStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitRevertStatement) {
            return visitor.visitRevertStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssemblyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assembly(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Assembly, 0)!;
    }
    public AssemblyLBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyLBrace, 0)!;
    }
    public YulRBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRBrace, 0)!;
    }
    public AssemblyDialect(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssemblyDialect, 0);
    }
    public assemblyFlags(): AssemblyFlagsContext | null {
        return this.getRuleContext(0, AssemblyFlagsContext);
    }
    public yulStatement(): YulStatementContext[];
    public yulStatement(i: number): YulStatementContext | null;
    public yulStatement(i?: number): YulStatementContext[] | YulStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulStatementContext);
        }

        return this.getRuleContext(i, YulStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assemblyStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAssemblyStatement) {
             listener.enterAssemblyStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAssemblyStatement) {
             listener.exitAssemblyStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAssemblyStatement) {
            return visitor.visitAssemblyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssemblyFlagsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AssemblyBlockLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyBlockLParen, 0)!;
    }
    public AssemblyFlagString(): antlr.TerminalNode[];
    public AssemblyFlagString(i: number): antlr.TerminalNode | null;
    public AssemblyFlagString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.AssemblyFlagString);
    	} else {
    		return this.getToken(SolidityParser.AssemblyFlagString, i);
    	}
    }
    public AssemblyBlockRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyBlockRParen, 0)!;
    }
    public AssemblyBlockComma(): antlr.TerminalNode[];
    public AssemblyBlockComma(i: number): antlr.TerminalNode | null;
    public AssemblyBlockComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.AssemblyBlockComma);
    	} else {
    		return this.getToken(SolidityParser.AssemblyBlockComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assemblyFlags;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterAssemblyFlags) {
             listener.enterAssemblyFlags(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitAssemblyFlags) {
             listener.exitAssemblyFlags(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitAssemblyFlags) {
            return visitor.visitAssemblyFlags(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationListContext extends antlr.ParserRuleContext {
    public _variableDeclaration?: VariableDeclarationContext;
    public _variableDeclarations: VariableDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext | null;
    public variableDeclaration(i?: number): VariableDeclarationContext[] | VariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }

        return this.getRuleContext(i, VariableDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationList;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterVariableDeclarationList) {
             listener.enterVariableDeclarationList(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitVariableDeclarationList) {
             listener.exitVariableDeclarationList(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationTupleContext extends antlr.ParserRuleContext {
    public _variableDeclaration?: VariableDeclarationContext;
    public _variableDeclarations: VariableDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext | null;
    public variableDeclaration(i?: number): VariableDeclarationContext[] | VariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }

        return this.getRuleContext(i, VariableDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationTuple;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterVariableDeclarationTuple) {
             listener.enterVariableDeclarationTuple(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitVariableDeclarationTuple) {
             listener.exitVariableDeclarationTuple(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarationTuple) {
            return visitor.visitVariableDeclarationTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public variableDeclarationTuple(): VariableDeclarationTupleContext | null {
        return this.getRuleContext(0, VariableDeclarationTupleContext);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterVariableDeclarationStatement) {
             listener.enterVariableDeclarationStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitVariableDeclarationStatement) {
             listener.exitVariableDeclarationStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarationStatement) {
            return visitor.visitVariableDeclarationStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_expressionStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappingTypeContext extends antlr.ParserRuleContext {
    public _key?: MappingKeyTypeContext;
    public _name?: IdentifierContext;
    public _value?: TypeNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Mapping(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Mapping, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public DoubleArrow(): antlr.TerminalNode {
        return this.getToken(SolidityParser.DoubleArrow, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public mappingKeyType(): MappingKeyTypeContext {
        return this.getRuleContext(0, MappingKeyTypeContext)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_mappingType;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterMappingType) {
             listener.enterMappingType(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitMappingType) {
             listener.exitMappingType(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitMappingType) {
            return visitor.visitMappingType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappingKeyTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_mappingKeyType;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterMappingKeyType) {
             listener.enterMappingKeyType(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitMappingKeyType) {
             listener.exitMappingKeyType(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitMappingKeyType) {
            return visitor.visitMappingKeyType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulBlock(): YulBlockContext | null {
        return this.getRuleContext(0, YulBlockContext);
    }
    public yulVariableDeclaration(): YulVariableDeclarationContext | null {
        return this.getRuleContext(0, YulVariableDeclarationContext);
    }
    public yulAssignment(): YulAssignmentContext | null {
        return this.getRuleContext(0, YulAssignmentContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public yulIfStatement(): YulIfStatementContext | null {
        return this.getRuleContext(0, YulIfStatementContext);
    }
    public yulForStatement(): YulForStatementContext | null {
        return this.getRuleContext(0, YulForStatementContext);
    }
    public yulSwitchStatement(): YulSwitchStatementContext | null {
        return this.getRuleContext(0, YulSwitchStatementContext);
    }
    public YulLeave(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulLeave, 0);
    }
    public YulBreak(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulBreak, 0);
    }
    public YulContinue(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulContinue, 0);
    }
    public yulFunctionDefinition(): YulFunctionDefinitionContext | null {
        return this.getRuleContext(0, YulFunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulStatement) {
             listener.enterYulStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulStatement) {
             listener.exitYulStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulStatement) {
            return visitor.visitYulStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLBrace, 0)!;
    }
    public YulRBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRBrace, 0)!;
    }
    public yulStatement(): YulStatementContext[];
    public yulStatement(i: number): YulStatementContext | null;
    public yulStatement(i?: number): YulStatementContext[] | YulStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulStatementContext);
        }

        return this.getRuleContext(i, YulStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulBlock;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulBlock) {
             listener.enterYulBlock(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulBlock) {
             listener.exitYulBlock(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulBlock) {
            return visitor.visitYulBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulVariableDeclarationContext extends antlr.ParserRuleContext {
    public _YulIdentifier?: Token | null;
    public _variables: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLet(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulLet, 0);
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulAssign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulAssign, 0);
    }
    public yulExpression(): YulExpressionContext | null {
        return this.getRuleContext(0, YulExpressionContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulVariableDeclaration;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulVariableDeclaration) {
             listener.enterYulVariableDeclaration(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulVariableDeclaration) {
             listener.exitYulVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulVariableDeclaration) {
            return visitor.visitYulVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulPath(): YulPathContext[];
    public yulPath(i: number): YulPathContext | null;
    public yulPath(i?: number): YulPathContext[] | YulPathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulPathContext);
        }

        return this.getRuleContext(i, YulPathContext);
    }
    public YulAssign(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulAssign, 0)!;
    }
    public yulExpression(): YulExpressionContext | null {
        return this.getRuleContext(0, YulExpressionContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulAssignment;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulAssignment) {
             listener.enterYulAssignment(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulAssignment) {
             listener.exitYulAssignment(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulAssignment) {
            return visitor.visitYulAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulIfStatementContext extends antlr.ParserRuleContext {
    public _cond?: YulExpressionContext;
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulIf(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulIf, 0)!;
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulIfStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulIfStatement) {
             listener.enterYulIfStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulIfStatement) {
             listener.exitYulIfStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulIfStatement) {
            return visitor.visitYulIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulForStatementContext extends antlr.ParserRuleContext {
    public _init?: YulBlockContext;
    public _cond?: YulExpressionContext;
    public _post?: YulBlockContext;
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulFor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulFor, 0)!;
    }
    public yulBlock(): YulBlockContext[];
    public yulBlock(i: number): YulBlockContext | null;
    public yulBlock(i?: number): YulBlockContext[] | YulBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulBlockContext);
        }

        return this.getRuleContext(i, YulBlockContext);
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulForStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulForStatement) {
             listener.enterYulForStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulForStatement) {
             listener.exitYulForStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulForStatement) {
            return visitor.visitYulForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulSwitchCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulCase(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulCase, 0)!;
    }
    public yulLiteral(): YulLiteralContext {
        return this.getRuleContext(0, YulLiteralContext)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulSwitchCase;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulSwitchCase) {
             listener.enterYulSwitchCase(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulSwitchCase) {
             listener.exitYulSwitchCase(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulSwitchCase) {
            return visitor.visitYulSwitchCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulSwitchStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulSwitch(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulSwitch, 0)!;
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public YulDefault(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulDefault, 0);
    }
    public yulBlock(): YulBlockContext | null {
        return this.getRuleContext(0, YulBlockContext);
    }
    public yulSwitchCase(): YulSwitchCaseContext[];
    public yulSwitchCase(i: number): YulSwitchCaseContext | null;
    public yulSwitchCase(i?: number): YulSwitchCaseContext[] | YulSwitchCaseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulSwitchCaseContext);
        }

        return this.getRuleContext(i, YulSwitchCaseContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulSwitchStatement;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulSwitchStatement) {
             listener.enterYulSwitchStatement(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulSwitchStatement) {
             listener.exitYulSwitchStatement(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulSwitchStatement) {
            return visitor.visitYulSwitchStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulFunctionDefinitionContext extends antlr.ParserRuleContext {
    public _YulIdentifier?: Token | null;
    public _arguments: antlr.Token[] = [];
    public _returnParameters: antlr.Token[] = [];
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulFunction(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulFunction, 0)!;
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLParen, 0)!;
    }
    public YulRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRParen, 0)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public YulArrow(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulArrow, 0);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulFunctionDefinition;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulFunctionDefinition) {
             listener.enterYulFunctionDefinition(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulFunctionDefinition) {
             listener.exitYulFunctionDefinition(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulFunctionDefinition) {
            return visitor.visitYulFunctionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulPeriod(): antlr.TerminalNode[];
    public YulPeriod(i: number): antlr.TerminalNode | null;
    public YulPeriod(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulPeriod);
    	} else {
    		return this.getToken(SolidityParser.YulPeriod, i);
    	}
    }
    public YulEVMBuiltin(): antlr.TerminalNode[];
    public YulEVMBuiltin(i: number): antlr.TerminalNode | null;
    public YulEVMBuiltin(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulEVMBuiltin);
    	} else {
    		return this.getToken(SolidityParser.YulEVMBuiltin, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulPath;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulPath) {
             listener.enterYulPath(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulPath) {
             listener.exitYulPath(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulPath) {
            return visitor.visitYulPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLParen, 0)!;
    }
    public YulRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRParen, 0)!;
    }
    public YulIdentifier(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulIdentifier, 0);
    }
    public YulEVMBuiltin(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulEVMBuiltin, 0);
    }
    public yulExpression(): YulExpressionContext[];
    public yulExpression(i: number): YulExpressionContext | null;
    public yulExpression(i?: number): YulExpressionContext[] | YulExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulExpressionContext);
        }

        return this.getRuleContext(i, YulExpressionContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulFunctionCall;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulFunctionCall) {
             listener.enterYulFunctionCall(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulFunctionCall) {
             listener.exitYulFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulFunctionCall) {
            return visitor.visitYulFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulBooleanContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulTrue(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulTrue, 0);
    }
    public YulFalse(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulFalse, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulBoolean;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulBoolean) {
             listener.enterYulBoolean(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulBoolean) {
             listener.exitYulBoolean(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulBoolean) {
            return visitor.visitYulBoolean(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulDecimalNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulDecimalNumber, 0);
    }
    public YulStringLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulStringLiteral, 0);
    }
    public YulHexNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulHexNumber, 0);
    }
    public yulBoolean(): YulBooleanContext | null {
        return this.getRuleContext(0, YulBooleanContext);
    }
    public YulHexStringLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulHexStringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulLiteral;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulLiteral) {
             listener.enterYulLiteral(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulLiteral) {
             listener.exitYulLiteral(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulLiteral) {
            return visitor.visitYulLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YulExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulPath(): YulPathContext | null {
        return this.getRuleContext(0, YulPathContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public yulLiteral(): YulLiteralContext | null {
        return this.getRuleContext(0, YulLiteralContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulExpression;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterYulExpression) {
             listener.enterYulExpression(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitYulExpression) {
             listener.exitYulExpression(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitYulExpression) {
            return visitor.visitYulExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
