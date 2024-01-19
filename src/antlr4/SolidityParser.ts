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
    public static readonly RULE_usingAliases = 38;
    public static readonly RULE_typeName = 39;
    public static readonly RULE_elementaryTypeName = 40;
    public static readonly RULE_functionTypeName = 41;
    public static readonly RULE_variableDeclaration = 42;
    public static readonly RULE_dataLocation = 43;
    public static readonly RULE_expression = 44;
    public static readonly RULE_assignOp = 45;
    public static readonly RULE_tupleExpression = 46;
    public static readonly RULE_inlineArrayExpression = 47;
    public static readonly RULE_identifier = 48;
    public static readonly RULE_literal = 49;
    public static readonly RULE_literalWithSubDenomination = 50;
    public static readonly RULE_booleanLiteral = 51;
    public static readonly RULE_stringLiteral = 52;
    public static readonly RULE_hexStringLiteral = 53;
    public static readonly RULE_unicodeStringLiteral = 54;
    public static readonly RULE_numberLiteral = 55;
    public static readonly RULE_block = 56;
    public static readonly RULE_uncheckedBlock = 57;
    public static readonly RULE_statement = 58;
    public static readonly RULE_simpleStatement = 59;
    public static readonly RULE_ifStatement = 60;
    public static readonly RULE_forStatement = 61;
    public static readonly RULE_whileStatement = 62;
    public static readonly RULE_doWhileStatement = 63;
    public static readonly RULE_continueStatement = 64;
    public static readonly RULE_breakStatement = 65;
    public static readonly RULE_tryStatement = 66;
    public static readonly RULE_catchClause = 67;
    public static readonly RULE_returnStatement = 68;
    public static readonly RULE_emitStatement = 69;
    public static readonly RULE_revertStatement = 70;
    public static readonly RULE_assemblyStatement = 71;
    public static readonly RULE_assemblyFlags = 72;
    public static readonly RULE_variableDeclarationList = 73;
    public static readonly RULE_variableDeclarationTuple = 74;
    public static readonly RULE_variableDeclarationStatement = 75;
    public static readonly RULE_expressionStatement = 76;
    public static readonly RULE_mappingType = 77;
    public static readonly RULE_mappingKeyType = 78;
    public static readonly RULE_yulStatement = 79;
    public static readonly RULE_yulBlock = 80;
    public static readonly RULE_yulVariableDeclaration = 81;
    public static readonly RULE_yulAssignment = 82;
    public static readonly RULE_yulIfStatement = 83;
    public static readonly RULE_yulForStatement = 84;
    public static readonly RULE_yulSwitchCase = 85;
    public static readonly RULE_yulSwitchStatement = 86;
    public static readonly RULE_yulFunctionDefinition = 87;
    public static readonly RULE_yulPath = 88;
    public static readonly RULE_yulFunctionCall = 89;
    public static readonly RULE_yulBoolean = 90;
    public static readonly RULE_yulLiteral = 91;
    public static readonly RULE_yulExpression = 92;

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
        "usingAliases", "typeName", "elementaryTypeName", "functionTypeName", 
        "variableDeclaration", "dataLocation", "expression", "assignOp", 
        "tupleExpression", "inlineArrayExpression", "identifier", "literal", 
        "literalWithSubDenomination", "booleanLiteral", "stringLiteral", 
        "hexStringLiteral", "unicodeStringLiteral", "numberLiteral", "block", 
        "uncheckedBlock", "statement", "simpleStatement", "ifStatement", 
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
            this.state = 201;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 199;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                    case 1:
                        {
                        this.state = 186;
                        this.pragmaDirective();
                        }
                        break;
                    case 2:
                        {
                        this.state = 187;
                        this.importDirective();
                        }
                        break;
                    case 3:
                        {
                        this.state = 188;
                        this.usingDirective();
                        }
                        break;
                    case 4:
                        {
                        this.state = 189;
                        this.contractDefinition();
                        }
                        break;
                    case 5:
                        {
                        this.state = 190;
                        this.interfaceDefinition();
                        }
                        break;
                    case 6:
                        {
                        this.state = 191;
                        this.libraryDefinition();
                        }
                        break;
                    case 7:
                        {
                        this.state = 192;
                        this.functionDefinition();
                        }
                        break;
                    case 8:
                        {
                        this.state = 193;
                        this.constantVariableDeclaration();
                        }
                        break;
                    case 9:
                        {
                        this.state = 194;
                        this.structDefinition();
                        }
                        break;
                    case 10:
                        {
                        this.state = 195;
                        this.enumDefinition();
                        }
                        break;
                    case 11:
                        {
                        this.state = 196;
                        this.userDefinedValueTypeDefinition();
                        }
                        break;
                    case 12:
                        {
                        this.state = 197;
                        this.errorDefinition();
                        }
                        break;
                    case 13:
                        {
                        this.state = 198;
                        this.eventDefinition();
                        }
                        break;
                    }
                    }
                }
                this.state = 203;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            }
            this.state = 204;
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
            this.state = 206;
            this.match(SolidityParser.Pragma);
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 207;
                this.match(SolidityParser.PragmaToken);
                }
                }
                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 173);
            this.state = 212;
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
            this.state = 214;
            this.match(SolidityParser.Import);
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
                {
                {
                this.state = 215;
                this.path();
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 216;
                    this.match(SolidityParser.As);
                    this.state = 217;
                    localContext._unitAlias = this.identifier();
                    }
                }

                }
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 220;
                this.symbolAliases();
                this.state = 221;
                this.match(SolidityParser.From);
                this.state = 222;
                this.path();
                }
                }
                break;
            case SolidityParser.Mul:
                {
                {
                this.state = 224;
                this.match(SolidityParser.Mul);
                this.state = 225;
                this.match(SolidityParser.As);
                this.state = 226;
                localContext._unitAlias = this.identifier();
                this.state = 227;
                this.match(SolidityParser.From);
                this.state = 228;
                this.path();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 232;
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
            this.state = 234;
            localContext._symbol_ = this.identifier();
            this.state = 237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 235;
                this.match(SolidityParser.As);
                this.state = 236;
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
            this.state = 239;
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
            this.state = 241;
            this.match(SolidityParser.LBrace);
            this.state = 242;
            localContext._importAliases = this.importAliases();
            localContext._aliases.push(localContext._importAliases);
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 243;
                this.match(SolidityParser.Comma);
                this.state = 244;
                localContext._importAliases = this.importAliases();
                localContext._aliases.push(localContext._importAliases);
                }
                }
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 250;
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
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 252;
                this.match(SolidityParser.Abstract);
                }
            }

            this.state = 255;
            this.match(SolidityParser.Contract);
            this.state = 256;
            localContext._name = this.identifier();
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 257;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 260;
            this.match(SolidityParser.LBrace);
            this.state = 264;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 261;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 266;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            this.state = 267;
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
            this.state = 269;
            this.match(SolidityParser.Interface);
            this.state = 270;
            localContext._name = this.identifier();
            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 271;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 274;
            this.match(SolidityParser.LBrace);
            this.state = 278;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 275;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 280;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            this.state = 281;
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
            this.state = 283;
            this.match(SolidityParser.Library);
            this.state = 284;
            localContext._name = this.identifier();
            this.state = 285;
            this.match(SolidityParser.LBrace);
            this.state = 289;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 286;
                    this.contractBodyElement();
                    }
                    }
                }
                this.state = 291;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 292;
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
            this.state = 294;
            this.match(SolidityParser.Is);
            this.state = 295;
            localContext._inheritanceSpecifier = this.inheritanceSpecifier();
            localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier);
            this.state = 300;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 296;
                    this.match(SolidityParser.Comma);
                    this.state = 297;
                    localContext._inheritanceSpecifier = this.inheritanceSpecifier();
                    localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier);
                    }
                    }
                }
                this.state = 302;
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
            this.state = 303;
            localContext._name = this.identifierPath();
            this.state = 305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 304;
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
            this.state = 319;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 307;
                this.constructorDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 308;
                this.functionDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 309;
                this.modifierDefinition();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 310;
                this.fallbackFunctionDefinition();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 311;
                this.receiveFunctionDefinition();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 312;
                this.structDefinition();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 313;
                this.enumDefinition();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 314;
                this.userDefinedValueTypeDefinition();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 315;
                this.stateVariableDeclaration();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 316;
                this.eventDefinition();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 317;
                this.errorDefinition();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 318;
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
            this.state = 321;
            localContext._name = this.identifier();
            this.state = 322;
            this.match(SolidityParser.Colon);
            this.state = 323;
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
            this.state = 325;
            this.match(SolidityParser.LParen);
            this.state = 348;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 334;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
                case 1:
                    {
                    this.state = 326;
                    this.expression(0);
                    this.state = 331;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 95) {
                        {
                        {
                        this.state = 327;
                        this.match(SolidityParser.Comma);
                        this.state = 328;
                        this.expression(0);
                        }
                        }
                        this.state = 333;
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
                this.state = 336;
                this.match(SolidityParser.LBrace);
                this.state = 345;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                    {
                    this.state = 337;
                    this.namedArgument();
                    this.state = 342;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 95) {
                        {
                        {
                        this.state = 338;
                        this.match(SolidityParser.Comma);
                        this.state = 339;
                        this.namedArgument();
                        }
                        }
                        this.state = 344;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 347;
                this.match(SolidityParser.RBrace);
                }
                break;
            }
            this.state = 350;
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
            this.state = 352;
            this.identifier();
            this.state = 357;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 353;
                    this.match(SolidityParser.Period);
                    this.state = 354;
                    this.identifier();
                    }
                    }
                }
                this.state = 359;
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
            this.state = 360;
            this.identifierPath();
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 361;
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
            this.state = 364;
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
            this.state = 366;
            localContext._parameterDeclaration = this.parameterDeclaration();
            localContext._parameters.push(localContext._parameterDeclaration);
            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 367;
                this.match(SolidityParser.Comma);
                this.state = 368;
                localContext._parameterDeclaration = this.parameterDeclaration();
                localContext._parameters.push(localContext._parameterDeclaration);
                }
                }
                this.state = 373;
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
            this.state = 374;
            localContext._type_ = this.typeName(0);
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 375;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 379;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 378;
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
            this.state = 381;
            this.match(SolidityParser.Constructor);
            this.state = 382;
            this.match(SolidityParser.LParen);
            this.state = 384;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 383;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 386;
            this.match(SolidityParser.RParen);
            this.state = 399;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 397;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                    case 1:
                        {
                        this.state = 387;
                        this.modifierInvocation();
                        }
                        break;
                    case 2:
                        {
                        this.state = 388;
                        if (!(!localContext.payableSet)) {
                            throw this.createFailedPredicateException("!$payableSet");
                        }
                        this.state = 389;
                        this.match(SolidityParser.Payable);
                        localContext!.payableSet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 391;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 392;
                        this.match(SolidityParser.Internal);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 4:
                        {
                        this.state = 394;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 395;
                        this.match(SolidityParser.Public);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 401;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            }
            this.state = 402;
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
            this.state = 404;
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
            this.state = 406;
            this.match(SolidityParser.Override);
            this.state = 418;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 407;
                this.match(SolidityParser.LParen);
                this.state = 408;
                localContext._identifierPath = this.identifierPath();
                localContext._overrides.push(localContext._identifierPath);
                this.state = 413;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 409;
                    this.match(SolidityParser.Comma);
                    this.state = 410;
                    localContext._identifierPath = this.identifierPath();
                    localContext._overrides.push(localContext._identifierPath);
                    }
                    }
                    this.state = 415;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 416;
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
            this.state = 420;
            this.match(SolidityParser.Function);
            this.state = 424;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Identifier:
                {
                this.state = 421;
                this.identifier();
                }
                break;
            case SolidityParser.Fallback:
                {
                this.state = 422;
                this.match(SolidityParser.Fallback);
                }
                break;
            case SolidityParser.Receive:
                {
                this.state = 423;
                this.match(SolidityParser.Receive);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 426;
            this.match(SolidityParser.LParen);
            this.state = 428;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 427;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 430;
            this.match(SolidityParser.RParen);
            this.state = 449;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 447;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
                    case 1:
                        {
                        this.state = 431;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 432;
                        this.visibility();
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 435;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 436;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 439;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 440;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 441;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 443;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 444;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 451;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            }
            this.state = 457;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 452;
                this.match(SolidityParser.Returns);
                this.state = 453;
                this.match(SolidityParser.LParen);
                this.state = 454;
                localContext._returnParameters = this.parameterList();
                this.state = 455;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 461;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 459;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 460;
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
            this.state = 463;
            this.match(SolidityParser.Modifier);
            this.state = 464;
            localContext._name = this.identifier();
            this.state = 470;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                {
                this.state = 465;
                this.match(SolidityParser.LParen);
                this.state = 467;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                case 1:
                    {
                    this.state = 466;
                    localContext._arguments = this.parameterList();
                    }
                    break;
                }
                this.state = 469;
                this.match(SolidityParser.RParen);
                }
                break;
            }
            this.state = 481;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 479;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
                    case 1:
                        {
                        this.state = 472;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 473;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 475;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 476;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 483;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            this.state = 486;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 484;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 485;
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
            this.state = 488;
            localContext._kind = this.match(SolidityParser.Fallback);
            this.state = 489;
            this.match(SolidityParser.LParen);
            this.state = 493;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 490;
                this.parameterList();
                 localContext!.hasParameters =  true; 
                }
                break;
            }
            this.state = 495;
            this.match(SolidityParser.RParen);
            this.state = 513;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 511;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
                    case 1:
                        {
                        this.state = 496;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 497;
                        this.match(SolidityParser.External);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 499;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 500;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 503;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 504;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 505;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 507;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 508;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 515;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            }
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 516;
                if (!(localContext.hasParameters)) {
                    throw this.createFailedPredicateException("$hasParameters");
                }
                this.state = 517;
                this.match(SolidityParser.Returns);
                this.state = 518;
                this.match(SolidityParser.LParen);
                this.state = 519;
                localContext._returnParameters = this.parameterList();
                this.state = 520;
                this.match(SolidityParser.RParen);
                }
                break;
            case 2:
                {
                this.state = 522;
                if (!(!localContext.hasParameters)) {
                    throw this.createFailedPredicateException("!$hasParameters");
                }
                }
                break;
            }
            this.state = 527;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 525;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 526;
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
            this.state = 529;
            localContext._kind = this.match(SolidityParser.Receive);
            this.state = 530;
            this.match(SolidityParser.LParen);
            this.state = 531;
            this.match(SolidityParser.RParen);
            this.state = 548;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 546;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                    case 1:
                        {
                        this.state = 532;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 533;
                        this.match(SolidityParser.External);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 535;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 536;
                        this.match(SolidityParser.Payable);
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 538;
                        this.modifierInvocation();
                        }
                        break;
                    case 4:
                        {
                        this.state = 539;
                        if (!(!localContext.virtualSet)) {
                            throw this.createFailedPredicateException("!$virtualSet");
                        }
                        this.state = 540;
                        this.match(SolidityParser.Virtual);
                        localContext!.virtualSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 542;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 543;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 550;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            this.state = 553;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 551;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 552;
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
            this.state = 555;
            this.match(SolidityParser.Struct);
            this.state = 556;
            localContext._name = this.identifier();
            this.state = 557;
            this.match(SolidityParser.LBrace);
            this.state = 559;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 558;
                    localContext._members = this.structMember();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 561;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 563;
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
            this.state = 565;
            localContext._type_ = this.typeName(0);
            this.state = 566;
            localContext._name = this.identifier();
            this.state = 567;
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
            this.state = 569;
            this.match(SolidityParser.Enum);
            this.state = 570;
            localContext._name = this.identifier();
            this.state = 571;
            this.match(SolidityParser.LBrace);
            this.state = 572;
            localContext._identifier = this.identifier();
            localContext._enumValues.push(localContext._identifier);
            this.state = 577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 573;
                this.match(SolidityParser.Comma);
                this.state = 574;
                localContext._identifier = this.identifier();
                localContext._enumValues.push(localContext._identifier);
                }
                }
                this.state = 579;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 580;
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
            this.state = 582;
            this.match(SolidityParser.Type);
            this.state = 583;
            localContext._name = this.identifier();
            this.state = 584;
            this.match(SolidityParser.Is);
            this.state = 585;
            this.elementaryTypeName(true);
            this.state = 586;
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
            this.state = 588;
            localContext._type_ = this.typeName(0);
            this.state = 610;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 608;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                    case 1:
                        {
                        this.state = 589;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 590;
                        this.match(SolidityParser.Public);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 592;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 593;
                        this.match(SolidityParser.Private);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 3:
                        {
                        this.state = 595;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 596;
                        this.match(SolidityParser.Internal);
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 4:
                        {
                        this.state = 598;
                        if (!(!localContext.constantnessSet)) {
                            throw this.createFailedPredicateException("!$constantnessSet");
                        }
                        this.state = 599;
                        this.match(SolidityParser.Constant);
                        localContext!.constantnessSet =  true;
                        }
                        break;
                    case 5:
                        {
                        this.state = 601;
                        if (!(!localContext.overrideSpecifierSet)) {
                            throw this.createFailedPredicateException("!$overrideSpecifierSet");
                        }
                        this.state = 602;
                        this.overrideSpecifier();
                        localContext!.overrideSpecifierSet =  true;
                        }
                        break;
                    case 6:
                        {
                        this.state = 605;
                        if (!(!localContext.constantnessSet)) {
                            throw this.createFailedPredicateException("!$constantnessSet");
                        }
                        this.state = 606;
                        this.match(SolidityParser.Immutable);
                        localContext!.constantnessSet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 612;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            }
            this.state = 613;
            localContext._name = this.identifier();
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 614;
                this.match(SolidityParser.Assign);
                this.state = 615;
                localContext._initialValue = this.expression(0);
                }
            }

            this.state = 618;
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
            this.state = 620;
            localContext._type_ = this.typeName(0);
            this.state = 621;
            this.match(SolidityParser.Constant);
            this.state = 622;
            localContext._name = this.identifier();
            this.state = 623;
            this.match(SolidityParser.Assign);
            this.state = 624;
            localContext._initialValue = this.expression(0);
            this.state = 625;
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
            this.state = 627;
            localContext._type_ = this.typeName(0);
            this.state = 629;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 628;
                this.match(SolidityParser.Indexed);
                }
            }

            this.state = 632;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 631;
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
            this.state = 634;
            this.match(SolidityParser.Event);
            this.state = 635;
            localContext._name = this.identifier();
            this.state = 636;
            this.match(SolidityParser.LParen);
            this.state = 645;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
            case 1:
                {
                this.state = 637;
                localContext._eventParameter = this.eventParameter();
                localContext._parameters.push(localContext._eventParameter);
                this.state = 642;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 638;
                    this.match(SolidityParser.Comma);
                    this.state = 639;
                    localContext._eventParameter = this.eventParameter();
                    localContext._parameters.push(localContext._eventParameter);
                    }
                    }
                    this.state = 644;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 647;
            this.match(SolidityParser.RParen);
            this.state = 649;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 648;
                this.match(SolidityParser.Anonymous);
                }
            }

            this.state = 651;
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
            this.state = 653;
            localContext._type_ = this.typeName(0);
            this.state = 655;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 654;
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
            this.state = 657;
            this.match(SolidityParser.Error);
            this.state = 658;
            localContext._name = this.identifier();
            this.state = 659;
            this.match(SolidityParser.LParen);
            this.state = 668;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                {
                this.state = 660;
                localContext._errorParameter = this.errorParameter();
                localContext._parameters.push(localContext._errorParameter);
                this.state = 665;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 661;
                    this.match(SolidityParser.Comma);
                    this.state = 662;
                    localContext._errorParameter = this.errorParameter();
                    localContext._parameters.push(localContext._errorParameter);
                    }
                    }
                    this.state = 667;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 670;
            this.match(SolidityParser.RParen);
            this.state = 671;
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
            this.state = 673;
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
            this.state = 675;
            this.match(SolidityParser.Using);
            this.state = 688;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Identifier:
                {
                this.state = 676;
                this.identifierPath();
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 677;
                this.match(SolidityParser.LBrace);
                this.state = 678;
                this.usingAliases();
                this.state = 683;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 95) {
                    {
                    {
                    this.state = 679;
                    this.match(SolidityParser.Comma);
                    this.state = 680;
                    this.usingAliases();
                    }
                    }
                    this.state = 685;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 686;
                this.match(SolidityParser.RBrace);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 690;
            this.match(SolidityParser.For);
            this.state = 693;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                {
                this.state = 691;
                this.match(SolidityParser.Mul);
                }
                break;
            case 2:
                {
                this.state = 692;
                this.typeName(0);
                }
                break;
            }
            this.state = 696;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 695;
                this.match(SolidityParser.Global);
                }
            }

            this.state = 698;
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
    public usingAliases(): UsingAliasesContext {
        let localContext = new UsingAliasesContext(this.context, this.state);
        this.enterRule(localContext, 76, SolidityParser.RULE_usingAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 700;
            this.identifierPath();
            this.state = 703;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 701;
                this.match(SolidityParser.As);
                this.state = 702;
                this.userDefinableOperator();
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
        let _startState = 78;
        this.enterRecursionRule(localContext, 78, SolidityParser.RULE_typeName, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 710;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                {
                this.state = 706;
                this.elementaryTypeName(true);
                }
                break;
            case 2:
                {
                this.state = 707;
                this.functionTypeName();
                }
                break;
            case 3:
                {
                this.state = 708;
                this.mappingType();
                }
                break;
            case 4:
                {
                this.state = 709;
                this.identifierPath();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 720;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
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
                    this.state = 712;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 713;
                    this.match(SolidityParser.LBrack);
                    this.state = 715;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
                    case 1:
                        {
                        this.state = 714;
                        this.expression(0);
                        }
                        break;
                    }
                    this.state = 717;
                    this.match(SolidityParser.RBrack);
                    }
                    }
                }
                this.state = 722;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
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
        this.enterRule(localContext, 80, SolidityParser.RULE_elementaryTypeName);
        try {
            this.state = 735;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 723;
                this.match(SolidityParser.Address);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 724;
                if (!(localContext.allowAddressPayable)) {
                    throw this.createFailedPredicateException("$allowAddressPayable");
                }
                this.state = 725;
                this.match(SolidityParser.Address);
                this.state = 726;
                this.match(SolidityParser.Payable);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 727;
                this.match(SolidityParser.Bool);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 728;
                this.match(SolidityParser.String);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 729;
                this.match(SolidityParser.Bytes);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 730;
                this.match(SolidityParser.SignedIntegerType);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 731;
                this.match(SolidityParser.UnsignedIntegerType);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 732;
                this.match(SolidityParser.FixedBytes);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 733;
                this.match(SolidityParser.Fixed);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 734;
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
        this.enterRule(localContext, 82, SolidityParser.RULE_functionTypeName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 737;
            this.match(SolidityParser.Function);
            this.state = 738;
            this.match(SolidityParser.LParen);
            this.state = 740;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                {
                this.state = 739;
                localContext._arguments = this.parameterList();
                }
                break;
            }
            this.state = 742;
            this.match(SolidityParser.RParen);
            this.state = 753;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 751;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
                    case 1:
                        {
                        this.state = 743;
                        if (!(!localContext.visibilitySet)) {
                            throw this.createFailedPredicateException("!$visibilitySet");
                        }
                        this.state = 744;
                        this.visibility();
                        localContext!.visibilitySet =  true;
                        }
                        break;
                    case 2:
                        {
                        this.state = 747;
                        if (!(!localContext.mutabilitySet)) {
                            throw this.createFailedPredicateException("!$mutabilitySet");
                        }
                        this.state = 748;
                        this.stateMutability();
                        localContext!.mutabilitySet =  true;
                        }
                        break;
                    }
                    }
                }
                this.state = 755;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            this.state = 761;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 756;
                this.match(SolidityParser.Returns);
                this.state = 757;
                this.match(SolidityParser.LParen);
                this.state = 758;
                localContext._returnParameters = this.parameterList();
                this.state = 759;
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
        this.enterRule(localContext, 84, SolidityParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 763;
            localContext._type_ = this.typeName(0);
            this.state = 765;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 764;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 767;
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
        this.enterRule(localContext, 86, SolidityParser.RULE_dataLocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 769;
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
        let _startState = 88;
        this.enterRecursionRule(localContext, 88, SolidityParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 791;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                localContext = new PayableConversionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 772;
                this.match(SolidityParser.Payable);
                this.state = 773;
                this.callArgumentList();
                }
                break;
            case 2:
                {
                localContext = new MetaTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 774;
                this.match(SolidityParser.Type);
                this.state = 775;
                this.match(SolidityParser.LParen);
                this.state = 776;
                this.typeName(0);
                this.state = 777;
                this.match(SolidityParser.RParen);
                }
                break;
            case 3:
                {
                localContext = new UnaryPrefixOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 779;
                _la = this.tokenStream.LA(1);
                if(!(_la === 16 || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 30721) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 780;
                this.expression(19);
                }
                break;
            case 4:
                {
                localContext = new NewExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 781;
                this.match(SolidityParser.New);
                this.state = 782;
                this.typeName(0);
                }
                break;
            case 5:
                {
                localContext = new TupleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 783;
                this.tupleExpression();
                }
                break;
            case 6:
                {
                localContext = new InlineArrayContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 784;
                this.inlineArrayExpression();
                }
                break;
            case 7:
                {
                localContext = new PrimaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 789;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
                case 1:
                    {
                    this.state = 785;
                    this.identifier();
                    }
                    break;
                case 2:
                    {
                    this.state = 786;
                    this.literal();
                    }
                    break;
                case 3:
                    {
                    this.state = 787;
                    this.literalWithSubDenomination();
                    }
                    break;
                case 4:
                    {
                    this.state = 788;
                    this.elementaryTypeName(false);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 877;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 875;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 793;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 794;
                        this.match(SolidityParser.Exp);
                        this.state = 795;
                        this.expression(17);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivModOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 796;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 797;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 798;
                        this.expression(17);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 799;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 800;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 104 || _la === 105)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 801;
                        this.expression(16);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ShiftOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 802;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 803;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 804;
                        this.expression(15);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BitAndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 805;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 806;
                        this.match(SolidityParser.BitAnd);
                        this.state = 807;
                        this.expression(14);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitXorOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 808;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 809;
                        this.match(SolidityParser.BitXor);
                        this.state = 810;
                        this.expression(13);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitOrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 811;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 812;
                        this.match(SolidityParser.BitOr);
                        this.state = 813;
                        this.expression(12);
                        }
                        break;
                    case 8:
                        {
                        localContext = new OrderComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 814;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 815;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 15) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 816;
                        this.expression(11);
                        }
                        break;
                    case 9:
                        {
                        localContext = new EqualityComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 817;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 818;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 110 || _la === 111)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 819;
                        this.expression(10);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 820;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 821;
                        this.match(SolidityParser.And);
                        this.state = 822;
                        this.expression(9);
                        }
                        break;
                    case 11:
                        {
                        localContext = new OrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 823;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 824;
                        this.match(SolidityParser.Or);
                        this.state = 825;
                        this.expression(8);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ConditionalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 826;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 827;
                        this.match(SolidityParser.Conditional);
                        this.state = 828;
                        this.expression(0);
                        this.state = 829;
                        this.match(SolidityParser.Colon);
                        this.state = 830;
                        this.expression(6);
                        }
                        break;
                    case 13:
                        {
                        localContext = new AssignmentContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 832;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 833;
                        this.assignOp();
                        this.state = 834;
                        this.expression(5);
                        }
                        break;
                    case 14:
                        {
                        localContext = new IndexAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 836;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 837;
                        this.match(SolidityParser.LBrack);
                        this.state = 839;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
                        case 1:
                            {
                            this.state = 838;
                            (localContext as IndexAccessContext)._index = this.expression(0);
                            }
                            break;
                        }
                        this.state = 841;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 15:
                        {
                        localContext = new IndexRangeAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 842;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 843;
                        this.match(SolidityParser.LBrack);
                        this.state = 845;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                        case 1:
                            {
                            this.state = 844;
                            (localContext as IndexRangeAccessContext)._startIndex = this.expression(0);
                            }
                            break;
                        }
                        this.state = 847;
                        this.match(SolidityParser.Colon);
                        this.state = 849;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
                        case 1:
                            {
                            this.state = 848;
                            (localContext as IndexRangeAccessContext)._endIndex = this.expression(0);
                            }
                            break;
                        }
                        this.state = 851;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 16:
                        {
                        localContext = new MemberAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 852;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 853;
                        this.match(SolidityParser.Period);
                        this.state = 856;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case SolidityParser.Error:
                        case SolidityParser.From:
                        case SolidityParser.Global:
                        case SolidityParser.Revert:
                        case SolidityParser.Identifier:
                            {
                            this.state = 854;
                            this.identifier();
                            }
                            break;
                        case SolidityParser.Address:
                            {
                            this.state = 855;
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
                        this.state = 858;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 859;
                        this.match(SolidityParser.LBrace);
                        this.state = 868;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                            {
                            this.state = 860;
                            this.namedArgument();
                            this.state = 865;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 95) {
                                {
                                {
                                this.state = 861;
                                this.match(SolidityParser.Comma);
                                this.state = 862;
                                this.namedArgument();
                                }
                                }
                                this.state = 867;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            }
                        }

                        this.state = 870;
                        this.match(SolidityParser.RBrace);
                        }
                        break;
                    case 18:
                        {
                        localContext = new FunctionCallContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 871;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 872;
                        this.callArgumentList();
                        }
                        break;
                    case 19:
                        {
                        localContext = new UnarySuffixOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 873;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 874;
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
                this.state = 879;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
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
        this.enterRule(localContext, 90, SolidityParser.RULE_assignOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 880;
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
        this.enterRule(localContext, 92, SolidityParser.RULE_tupleExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 882;
            this.match(SolidityParser.LParen);
            {
            this.state = 884;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
            case 1:
                {
                this.state = 883;
                this.expression(0);
                }
                break;
            }
            this.state = 892;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 886;
                this.match(SolidityParser.Comma);
                this.state = 888;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
                case 1:
                    {
                    this.state = 887;
                    this.expression(0);
                    }
                    break;
                }
                }
                }
                this.state = 894;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 895;
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
        this.enterRule(localContext, 94, SolidityParser.RULE_inlineArrayExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 897;
            this.match(SolidityParser.LBrack);
            {
            this.state = 898;
            this.expression(0);
            this.state = 903;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 899;
                this.match(SolidityParser.Comma);
                this.state = 900;
                this.expression(0);
                }
                }
                this.state = 905;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 906;
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
        this.enterRule(localContext, 96, SolidityParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 908;
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
        this.enterRule(localContext, 98, SolidityParser.RULE_literal);
        try {
            this.state = 915;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 910;
                this.stringLiteral();
                }
                break;
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 911;
                this.numberLiteral();
                }
                break;
            case SolidityParser.False:
            case SolidityParser.True:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 912;
                this.booleanLiteral();
                }
                break;
            case SolidityParser.HexString:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 913;
                this.hexStringLiteral();
                }
                break;
            case SolidityParser.UnicodeStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 914;
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
        this.enterRule(localContext, 100, SolidityParser.RULE_literalWithSubDenomination);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 917;
            this.numberLiteral();
            this.state = 918;
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
        this.enterRule(localContext, 102, SolidityParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 920;
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
        this.enterRule(localContext, 104, SolidityParser.RULE_stringLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 923;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 922;
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
                this.state = 925;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
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
        this.enterRule(localContext, 106, SolidityParser.RULE_hexStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 928;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 927;
                    this.match(SolidityParser.HexString);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 930;
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
    public unicodeStringLiteral(): UnicodeStringLiteralContext {
        let localContext = new UnicodeStringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, SolidityParser.RULE_unicodeStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 933;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 932;
                    this.match(SolidityParser.UnicodeStringLiteral);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 935;
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
    public numberLiteral(): NumberLiteralContext {
        let localContext = new NumberLiteralContext(this.context, this.state);
        this.enterRule(localContext, 110, SolidityParser.RULE_numberLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 937;
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
        this.enterRule(localContext, 112, SolidityParser.RULE_block);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 939;
            this.match(SolidityParser.LBrace);
            this.state = 944;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 942;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
                    case 1:
                        {
                        this.state = 940;
                        this.statement();
                        }
                        break;
                    case 2:
                        {
                        this.state = 941;
                        this.uncheckedBlock();
                        }
                        break;
                    }
                    }
                }
                this.state = 946;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            }
            this.state = 947;
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
        this.enterRule(localContext, 114, SolidityParser.RULE_uncheckedBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 949;
            this.match(SolidityParser.Unchecked);
            this.state = 950;
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
        this.enterRule(localContext, 116, SolidityParser.RULE_statement);
        try {
            this.state = 965;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 952;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 953;
                this.simpleStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 954;
                this.ifStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 955;
                this.forStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 956;
                this.whileStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 957;
                this.doWhileStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 958;
                this.continueStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 959;
                this.breakStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 960;
                this.tryStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 961;
                this.returnStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 962;
                this.emitStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 963;
                this.revertStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 964;
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
        this.enterRule(localContext, 118, SolidityParser.RULE_simpleStatement);
        try {
            this.state = 969;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 967;
                this.variableDeclarationStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 968;
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
        this.enterRule(localContext, 120, SolidityParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 971;
            this.match(SolidityParser.If);
            this.state = 972;
            this.match(SolidityParser.LParen);
            this.state = 973;
            this.expression(0);
            this.state = 974;
            this.match(SolidityParser.RParen);
            this.state = 975;
            this.statement();
            this.state = 978;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                {
                this.state = 976;
                this.match(SolidityParser.Else);
                this.state = 977;
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
        this.enterRule(localContext, 122, SolidityParser.RULE_forStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            this.match(SolidityParser.For);
            this.state = 981;
            this.match(SolidityParser.LParen);
            this.state = 984;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                {
                this.state = 982;
                this.simpleStatement();
                }
                break;
            case 2:
                {
                this.state = 983;
                this.match(SolidityParser.Semicolon);
                }
                break;
            }
            this.state = 988;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 986;
                this.expressionStatement();
                }
                break;
            case 2:
                {
                this.state = 987;
                this.match(SolidityParser.Semicolon);
                }
                break;
            }
            this.state = 991;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 990;
                this.expression(0);
                }
                break;
            }
            this.state = 993;
            this.match(SolidityParser.RParen);
            this.state = 994;
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
        this.enterRule(localContext, 124, SolidityParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 996;
            this.match(SolidityParser.While);
            this.state = 997;
            this.match(SolidityParser.LParen);
            this.state = 998;
            this.expression(0);
            this.state = 999;
            this.match(SolidityParser.RParen);
            this.state = 1000;
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
        this.enterRule(localContext, 126, SolidityParser.RULE_doWhileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1002;
            this.match(SolidityParser.Do);
            this.state = 1003;
            this.statement();
            this.state = 1004;
            this.match(SolidityParser.While);
            this.state = 1005;
            this.match(SolidityParser.LParen);
            this.state = 1006;
            this.expression(0);
            this.state = 1007;
            this.match(SolidityParser.RParen);
            this.state = 1008;
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
        this.enterRule(localContext, 128, SolidityParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1010;
            this.match(SolidityParser.Continue);
            this.state = 1011;
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
        this.enterRule(localContext, 130, SolidityParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1013;
            this.match(SolidityParser.Break);
            this.state = 1014;
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
        this.enterRule(localContext, 132, SolidityParser.RULE_tryStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1016;
            this.match(SolidityParser.Try);
            this.state = 1017;
            this.expression(0);
            this.state = 1023;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 1018;
                this.match(SolidityParser.Returns);
                this.state = 1019;
                this.match(SolidityParser.LParen);
                this.state = 1020;
                localContext._returnParameters = this.parameterList();
                this.state = 1021;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 1025;
            this.block();
            this.state = 1027;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1026;
                    this.catchClause();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1029;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
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
        this.enterRule(localContext, 134, SolidityParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1031;
            this.match(SolidityParser.Catch);
            this.state = 1039;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 71 || _la === 130) {
                {
                this.state = 1033;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                    {
                    this.state = 1032;
                    this.identifier();
                    }
                }

                this.state = 1035;
                this.match(SolidityParser.LParen);
                {
                this.state = 1036;
                localContext._arguments = this.parameterList();
                }
                this.state = 1037;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 1041;
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
        this.enterRule(localContext, 136, SolidityParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.match(SolidityParser.Return);
            this.state = 1045;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                {
                this.state = 1044;
                this.expression(0);
                }
                break;
            }
            this.state = 1047;
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
        this.enterRule(localContext, 138, SolidityParser.RULE_emitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.match(SolidityParser.Emit);
            this.state = 1050;
            this.expression(0);
            this.state = 1051;
            this.callArgumentList();
            this.state = 1052;
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
        this.enterRule(localContext, 140, SolidityParser.RULE_revertStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1054;
            this.match(SolidityParser.Revert);
            this.state = 1055;
            this.expression(0);
            this.state = 1056;
            this.callArgumentList();
            this.state = 1057;
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
        this.enterRule(localContext, 142, SolidityParser.RULE_assemblyStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.match(SolidityParser.Assembly);
            this.state = 1061;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 134) {
                {
                this.state = 1060;
                this.match(SolidityParser.AssemblyDialect);
                }
            }

            this.state = 1064;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 1063;
                this.assemblyFlags();
                }
            }

            this.state = 1066;
            this.match(SolidityParser.AssemblyLBrace);
            this.state = 1070;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 4220901) !== 0)) {
                {
                {
                this.state = 1067;
                this.yulStatement();
                }
                }
                this.state = 1072;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1073;
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
        this.enterRule(localContext, 144, SolidityParser.RULE_assemblyFlags);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1075;
            this.match(SolidityParser.AssemblyBlockLParen);
            this.state = 1076;
            this.match(SolidityParser.AssemblyFlagString);
            this.state = 1081;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 139) {
                {
                {
                this.state = 1077;
                this.match(SolidityParser.AssemblyBlockComma);
                this.state = 1078;
                this.match(SolidityParser.AssemblyFlagString);
                }
                }
                this.state = 1083;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1084;
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
        this.enterRule(localContext, 146, SolidityParser.RULE_variableDeclarationList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1086;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration);
            this.state = 1091;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 1087;
                this.match(SolidityParser.Comma);
                this.state = 1088;
                localContext._variableDeclaration = this.variableDeclaration();
                localContext._variableDeclarations.push(localContext._variableDeclaration);
                }
                }
                this.state = 1093;
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
        this.enterRule(localContext, 148, SolidityParser.RULE_variableDeclarationTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1094;
            this.match(SolidityParser.LParen);
            {
            this.state = 1098;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 113, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1095;
                    this.match(SolidityParser.Comma);
                    }
                    }
                }
                this.state = 1100;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 113, this.context);
            }
            this.state = 1101;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration);
            }
            this.state = 1109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 95) {
                {
                {
                this.state = 1103;
                this.match(SolidityParser.Comma);
                this.state = 1105;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
                case 1:
                    {
                    this.state = 1104;
                    localContext._variableDeclaration = this.variableDeclaration();
                    localContext._variableDeclarations.push(localContext._variableDeclaration);
                    }
                    break;
                }
                }
                }
                this.state = 1111;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1112;
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
        this.enterRule(localContext, 150, SolidityParser.RULE_variableDeclarationStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1123;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
            case 1:
                {
                {
                this.state = 1114;
                this.variableDeclaration();
                this.state = 1117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1115;
                    this.match(SolidityParser.Assign);
                    this.state = 1116;
                    this.expression(0);
                    }
                }

                }
                }
                break;
            case 2:
                {
                {
                this.state = 1119;
                this.variableDeclarationTuple();
                this.state = 1120;
                this.match(SolidityParser.Assign);
                this.state = 1121;
                this.expression(0);
                }
                }
                break;
            }
            this.state = 1125;
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
        this.enterRule(localContext, 152, SolidityParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1127;
            this.expression(0);
            this.state = 1128;
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
        this.enterRule(localContext, 154, SolidityParser.RULE_mappingType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1130;
            this.match(SolidityParser.Mapping);
            this.state = 1131;
            this.match(SolidityParser.LParen);
            this.state = 1132;
            localContext._key = this.mappingKeyType();
            this.state = 1134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 1133;
                localContext._name = this.identifier();
                }
            }

            this.state = 1136;
            this.match(SolidityParser.DoubleArrow);
            this.state = 1137;
            localContext._value = this.typeName(0);
            this.state = 1139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 130) {
                {
                this.state = 1138;
                localContext._name = this.identifier();
                }
            }

            this.state = 1141;
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
        this.enterRule(localContext, 156, SolidityParser.RULE_mappingKeyType);
        try {
            this.state = 1145;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1143;
                this.elementaryTypeName(false);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1144;
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
        this.enterRule(localContext, 158, SolidityParser.RULE_yulStatement);
        try {
            this.state = 1158;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1147;
                this.yulBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1148;
                this.yulVariableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1149;
                this.yulAssignment();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1150;
                this.yulFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1151;
                this.yulIfStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1152;
                this.yulForStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1153;
                this.yulSwitchStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1154;
                this.match(SolidityParser.YulLeave);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1155;
                this.match(SolidityParser.YulBreak);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1156;
                this.match(SolidityParser.YulContinue);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1157;
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
        this.enterRule(localContext, 160, SolidityParser.RULE_yulBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1160;
            this.match(SolidityParser.YulLBrace);
            this.state = 1164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 4220901) !== 0)) {
                {
                {
                this.state = 1161;
                this.yulStatement();
                }
                }
                this.state = 1166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1167;
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
        this.enterRule(localContext, 162, SolidityParser.RULE_yulVariableDeclaration);
        let _la: number;
        try {
            this.state = 1188;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1169;
                this.match(SolidityParser.YulLet);
                this.state = 1170;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier);
                this.state = 1173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 1171;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1172;
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
                this.state = 1175;
                this.match(SolidityParser.YulLet);
                this.state = 1176;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier);
                this.state = 1181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1177;
                    this.match(SolidityParser.YulComma);
                    this.state = 1178;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._variables.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1183;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 1184;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1185;
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
        this.enterRule(localContext, 164, SolidityParser.RULE_yulAssignment);
        let _la: number;
        try {
            this.state = 1204;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1190;
                this.yulPath();
                this.state = 1191;
                this.match(SolidityParser.YulAssign);
                this.state = 1192;
                this.yulExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1194;
                this.yulPath();
                this.state = 1197;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1195;
                    this.match(SolidityParser.YulComma);
                    this.state = 1196;
                    this.yulPath();
                    }
                    }
                    this.state = 1199;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 163);
                }
                this.state = 1201;
                this.match(SolidityParser.YulAssign);
                this.state = 1202;
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
        this.enterRule(localContext, 166, SolidityParser.RULE_yulIfStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1206;
            this.match(SolidityParser.YulIf);
            this.state = 1207;
            localContext._cond = this.yulExpression();
            this.state = 1208;
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
        this.enterRule(localContext, 168, SolidityParser.RULE_yulForStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1210;
            this.match(SolidityParser.YulFor);
            this.state = 1211;
            localContext._init = this.yulBlock();
            this.state = 1212;
            localContext._cond = this.yulExpression();
            this.state = 1213;
            localContext._post = this.yulBlock();
            this.state = 1214;
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
        this.enterRule(localContext, 170, SolidityParser.RULE_yulSwitchCase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1216;
            this.match(SolidityParser.YulCase);
            this.state = 1217;
            this.yulLiteral();
            this.state = 1218;
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
        this.enterRule(localContext, 172, SolidityParser.RULE_yulSwitchStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1220;
            this.match(SolidityParser.YulSwitch);
            this.state = 1221;
            this.yulExpression();
            this.state = 1233;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulCase:
                {
                {
                this.state = 1223;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1222;
                    this.yulSwitchCase();
                    }
                    }
                    this.state = 1225;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 144);
                this.state = 1229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 146) {
                    {
                    this.state = 1227;
                    this.match(SolidityParser.YulDefault);
                    this.state = 1228;
                    this.yulBlock();
                    }
                }

                }
                }
                break;
            case SolidityParser.YulDefault:
                {
                {
                this.state = 1231;
                this.match(SolidityParser.YulDefault);
                this.state = 1232;
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
        this.enterRule(localContext, 174, SolidityParser.RULE_yulFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1235;
            this.match(SolidityParser.YulFunction);
            this.state = 1236;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1237;
            this.match(SolidityParser.YulLParen);
            this.state = 1246;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 165) {
                {
                this.state = 1238;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._arguments.push(localContext._YulIdentifier);
                this.state = 1243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1239;
                    this.match(SolidityParser.YulComma);
                    this.state = 1240;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._arguments.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1245;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1248;
            this.match(SolidityParser.YulRParen);
            this.state = 1258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1249;
                this.match(SolidityParser.YulArrow);
                this.state = 1250;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._returnParameters.push(localContext._YulIdentifier);
                this.state = 1255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1251;
                    this.match(SolidityParser.YulComma);
                    this.state = 1252;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._returnParameters.push(localContext._YulIdentifier);
                    }
                    }
                    this.state = 1257;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1260;
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
        this.enterRule(localContext, 176, SolidityParser.RULE_yulPath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1262;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 162) {
                {
                {
                this.state = 1263;
                this.match(SolidityParser.YulPeriod);
                this.state = 1264;
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
                this.state = 1269;
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
        this.enterRule(localContext, 178, SolidityParser.RULE_yulFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1270;
            _la = this.tokenStream.LA(1);
            if(!(_la === 156 || _la === 165)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1271;
            this.match(SolidityParser.YulLParen);
            this.state = 1280;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & 8127105) !== 0)) {
                {
                this.state = 1272;
                this.yulExpression();
                this.state = 1277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 163) {
                    {
                    {
                    this.state = 1273;
                    this.match(SolidityParser.YulComma);
                    this.state = 1274;
                    this.yulExpression();
                    }
                    }
                    this.state = 1279;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1282;
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
        this.enterRule(localContext, 180, SolidityParser.RULE_yulBoolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1284;
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
        this.enterRule(localContext, 182, SolidityParser.RULE_yulLiteral);
        try {
            this.state = 1291;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulDecimalNumber:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1286;
                this.match(SolidityParser.YulDecimalNumber);
                }
                break;
            case SolidityParser.YulStringLiteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1287;
                this.match(SolidityParser.YulStringLiteral);
                }
                break;
            case SolidityParser.YulHexNumber:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1288;
                this.match(SolidityParser.YulHexNumber);
                }
                break;
            case SolidityParser.YulFalse:
            case SolidityParser.YulTrue:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1289;
                this.yulBoolean();
                }
                break;
            case SolidityParser.YulHexStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1290;
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
        this.enterRule(localContext, 184, SolidityParser.RULE_yulExpression);
        try {
            this.state = 1296;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1293;
                this.yulPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1294;
                this.yulFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1295;
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
        case 39:
            return this.typeName_sempred(localContext as TypeNameContext, predIndex);
        case 40:
            return this.elementaryTypeName_sempred(localContext as ElementaryTypeNameContext, predIndex);
        case 41:
            return this.functionTypeName_sempred(localContext as FunctionTypeNameContext, predIndex);
        case 44:
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
        4,1,177,1299,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        91,2,92,7,92,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
        5,0,200,8,0,10,0,12,0,203,9,0,1,0,1,0,1,1,1,1,4,1,209,8,1,11,1,12,
        1,210,1,1,1,1,1,2,1,2,1,2,1,2,3,2,219,8,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,3,2,231,8,2,1,2,1,2,1,3,1,3,1,3,3,3,238,8,3,1,
        4,1,4,1,5,1,5,1,5,1,5,5,5,246,8,5,10,5,12,5,249,9,5,1,5,1,5,1,6,
        3,6,254,8,6,1,6,1,6,1,6,3,6,259,8,6,1,6,1,6,5,6,263,8,6,10,6,12,
        6,266,9,6,1,6,1,6,1,7,1,7,1,7,3,7,273,8,7,1,7,1,7,5,7,277,8,7,10,
        7,12,7,280,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,288,8,8,10,8,12,8,291,
        9,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,299,8,9,10,9,12,9,302,9,9,1,10,1,
        10,3,10,306,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,3,11,320,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,
        13,5,13,330,8,13,10,13,12,13,333,9,13,3,13,335,8,13,1,13,1,13,1,
        13,1,13,5,13,341,8,13,10,13,12,13,344,9,13,3,13,346,8,13,1,13,3,
        13,349,8,13,1,13,1,13,1,14,1,14,1,14,5,14,356,8,14,10,14,12,14,359,
        9,14,1,15,1,15,3,15,363,8,15,1,16,1,16,1,17,1,17,1,17,5,17,370,8,
        17,10,17,12,17,373,9,17,1,18,1,18,3,18,377,8,18,1,18,3,18,380,8,
        18,1,19,1,19,1,19,3,19,385,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
        19,1,19,1,19,1,19,1,19,5,19,398,8,19,10,19,12,19,401,9,19,1,19,1,
        19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,5,21,412,8,21,10,21,12,21,
        415,9,21,1,21,1,21,3,21,419,8,21,1,22,1,22,1,22,1,22,3,22,425,8,
        22,1,22,1,22,3,22,429,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,448,8,22,10,
        22,12,22,451,9,22,1,22,1,22,1,22,1,22,1,22,3,22,458,8,22,1,22,1,
        22,3,22,462,8,22,1,23,1,23,1,23,1,23,3,23,468,8,23,1,23,3,23,471,
        8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,480,8,23,10,23,12,23,
        483,9,23,1,23,1,23,3,23,487,8,23,1,24,1,24,1,24,1,24,1,24,3,24,494,
        8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,5,24,512,8,24,10,24,12,24,515,9,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,3,24,524,8,24,1,24,1,24,3,24,528,8,24,1,
        25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,5,25,547,8,25,10,25,12,25,550,9,25,1,25,1,25,3,
        25,554,8,25,1,26,1,26,1,26,1,26,4,26,560,8,26,11,26,12,26,561,1,
        26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,576,
        8,28,10,28,12,28,579,9,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,
        1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
        1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,609,8,30,10,30,12,30,612,
        9,30,1,30,1,30,1,30,3,30,617,8,30,1,30,1,30,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,32,1,32,3,32,630,8,32,1,32,3,32,633,8,32,1,33,1,
        33,1,33,1,33,1,33,1,33,5,33,641,8,33,10,33,12,33,644,9,33,3,33,646,
        8,33,1,33,1,33,3,33,650,8,33,1,33,1,33,1,34,1,34,3,34,656,8,34,1,
        35,1,35,1,35,1,35,1,35,1,35,5,35,664,8,35,10,35,12,35,667,9,35,3,
        35,669,8,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,
        37,5,37,682,8,37,10,37,12,37,685,9,37,1,37,1,37,3,37,689,8,37,1,
        37,1,37,1,37,3,37,694,8,37,1,37,3,37,697,8,37,1,37,1,37,1,38,1,38,
        1,38,3,38,704,8,38,1,39,1,39,1,39,1,39,1,39,3,39,711,8,39,1,39,1,
        39,1,39,3,39,716,8,39,1,39,5,39,719,8,39,10,39,12,39,722,9,39,1,
        40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,736,
        8,40,1,41,1,41,1,41,3,41,741,8,41,1,41,1,41,1,41,1,41,1,41,1,41,
        1,41,1,41,1,41,5,41,752,8,41,10,41,12,41,755,9,41,1,41,1,41,1,41,
        1,41,1,41,3,41,762,8,41,1,42,1,42,3,42,766,8,42,1,42,1,42,1,43,1,
        43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,
        44,1,44,1,44,1,44,1,44,1,44,3,44,790,8,44,3,44,792,8,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,3,44,840,8,44,1,44,1,44,1,44,1,44,3,44,
        846,8,44,1,44,1,44,3,44,850,8,44,1,44,1,44,1,44,1,44,1,44,3,44,857,
        8,44,1,44,1,44,1,44,1,44,1,44,5,44,864,8,44,10,44,12,44,867,9,44,
        3,44,869,8,44,1,44,1,44,1,44,1,44,1,44,5,44,876,8,44,10,44,12,44,
        879,9,44,1,45,1,45,1,46,1,46,3,46,885,8,46,1,46,1,46,3,46,889,8,
        46,5,46,891,8,46,10,46,12,46,894,9,46,1,46,1,46,1,47,1,47,1,47,1,
        47,5,47,902,8,47,10,47,12,47,905,9,47,1,47,1,47,1,48,1,48,1,49,1,
        49,1,49,1,49,1,49,3,49,916,8,49,1,50,1,50,1,50,1,51,1,51,1,52,4,
        52,924,8,52,11,52,12,52,925,1,53,4,53,929,8,53,11,53,12,53,930,1,
        54,4,54,934,8,54,11,54,12,54,935,1,55,1,55,1,56,1,56,1,56,5,56,943,
        8,56,10,56,12,56,946,9,56,1,56,1,56,1,57,1,57,1,57,1,58,1,58,1,58,
        1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,3,58,966,8,58,
        1,59,1,59,3,59,970,8,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,
        979,8,60,1,61,1,61,1,61,1,61,3,61,985,8,61,1,61,1,61,3,61,989,8,
        61,1,61,3,61,992,8,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,
        62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,65,1,
        65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,1024,8,66,1,66,1,
        66,4,66,1028,8,66,11,66,12,66,1029,1,67,1,67,3,67,1034,8,67,1,67,
        1,67,1,67,1,67,3,67,1040,8,67,1,67,1,67,1,68,1,68,3,68,1046,8,68,
        1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,71,
        1,71,3,71,1062,8,71,1,71,3,71,1065,8,71,1,71,1,71,5,71,1069,8,71,
        10,71,12,71,1072,9,71,1,71,1,71,1,72,1,72,1,72,1,72,5,72,1080,8,
        72,10,72,12,72,1083,9,72,1,72,1,72,1,73,1,73,1,73,5,73,1090,8,73,
        10,73,12,73,1093,9,73,1,74,1,74,5,74,1097,8,74,10,74,12,74,1100,
        9,74,1,74,1,74,1,74,1,74,3,74,1106,8,74,5,74,1108,8,74,10,74,12,
        74,1111,9,74,1,74,1,74,1,75,1,75,1,75,3,75,1118,8,75,1,75,1,75,1,
        75,1,75,3,75,1124,8,75,1,75,1,75,1,76,1,76,1,76,1,77,1,77,1,77,1,
        77,3,77,1135,8,77,1,77,1,77,1,77,3,77,1140,8,77,1,77,1,77,1,78,1,
        78,3,78,1146,8,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,
        79,1,79,3,79,1159,8,79,1,80,1,80,5,80,1163,8,80,10,80,12,80,1166,
        9,80,1,80,1,80,1,81,1,81,1,81,1,81,3,81,1174,8,81,1,81,1,81,1,81,
        1,81,5,81,1180,8,81,10,81,12,81,1183,9,81,1,81,1,81,3,81,1187,8,
        81,3,81,1189,8,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,4,82,1198,8,
        82,11,82,12,82,1199,1,82,1,82,1,82,3,82,1205,8,82,1,83,1,83,1,83,
        1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,86,1,86,
        1,86,4,86,1224,8,86,11,86,12,86,1225,1,86,1,86,3,86,1230,8,86,1,
        86,1,86,3,86,1234,8,86,1,87,1,87,1,87,1,87,1,87,1,87,5,87,1242,8,
        87,10,87,12,87,1245,9,87,3,87,1247,8,87,1,87,1,87,1,87,1,87,1,87,
        5,87,1254,8,87,10,87,12,87,1257,9,87,3,87,1259,8,87,1,87,1,87,1,
        88,1,88,1,88,5,88,1266,8,88,10,88,12,88,1269,9,88,1,89,1,89,1,89,
        1,89,1,89,5,89,1276,8,89,10,89,12,89,1279,9,89,3,89,1281,8,89,1,
        89,1,89,1,90,1,90,1,91,1,91,1,91,1,91,1,91,3,91,1292,8,91,1,92,1,
        92,1,92,3,92,1297,8,92,1,92,1,300,2,78,88,93,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,0,18,3,0,23,23,38,38,49,
        50,3,0,47,47,51,51,68,68,4,0,98,100,104,108,110,115,117,117,3,0,
        10,10,42,42,57,57,3,0,16,16,105,105,116,119,1,0,106,108,1,0,104,
        105,1,0,101,103,1,0,112,115,1,0,110,111,1,0,118,119,1,0,83,94,5,
        0,21,21,29,29,31,31,55,55,130,130,2,0,25,25,60,60,1,0,122,123,2,
        0,126,126,128,128,2,0,156,156,165,165,2,0,147,147,154,154,1445,0,
        201,1,0,0,0,2,206,1,0,0,0,4,214,1,0,0,0,6,234,1,0,0,0,8,239,1,0,
        0,0,10,241,1,0,0,0,12,253,1,0,0,0,14,269,1,0,0,0,16,283,1,0,0,0,
        18,294,1,0,0,0,20,303,1,0,0,0,22,319,1,0,0,0,24,321,1,0,0,0,26,325,
        1,0,0,0,28,352,1,0,0,0,30,360,1,0,0,0,32,364,1,0,0,0,34,366,1,0,
        0,0,36,374,1,0,0,0,38,381,1,0,0,0,40,404,1,0,0,0,42,406,1,0,0,0,
        44,420,1,0,0,0,46,463,1,0,0,0,48,488,1,0,0,0,50,529,1,0,0,0,52,555,
        1,0,0,0,54,565,1,0,0,0,56,569,1,0,0,0,58,582,1,0,0,0,60,588,1,0,
        0,0,62,620,1,0,0,0,64,627,1,0,0,0,66,634,1,0,0,0,68,653,1,0,0,0,
        70,657,1,0,0,0,72,673,1,0,0,0,74,675,1,0,0,0,76,700,1,0,0,0,78,710,
        1,0,0,0,80,735,1,0,0,0,82,737,1,0,0,0,84,763,1,0,0,0,86,769,1,0,
        0,0,88,791,1,0,0,0,90,880,1,0,0,0,92,882,1,0,0,0,94,897,1,0,0,0,
        96,908,1,0,0,0,98,915,1,0,0,0,100,917,1,0,0,0,102,920,1,0,0,0,104,
        923,1,0,0,0,106,928,1,0,0,0,108,933,1,0,0,0,110,937,1,0,0,0,112,
        939,1,0,0,0,114,949,1,0,0,0,116,965,1,0,0,0,118,969,1,0,0,0,120,
        971,1,0,0,0,122,980,1,0,0,0,124,996,1,0,0,0,126,1002,1,0,0,0,128,
        1010,1,0,0,0,130,1013,1,0,0,0,132,1016,1,0,0,0,134,1031,1,0,0,0,
        136,1043,1,0,0,0,138,1049,1,0,0,0,140,1054,1,0,0,0,142,1059,1,0,
        0,0,144,1075,1,0,0,0,146,1086,1,0,0,0,148,1094,1,0,0,0,150,1123,
        1,0,0,0,152,1127,1,0,0,0,154,1130,1,0,0,0,156,1145,1,0,0,0,158,1158,
        1,0,0,0,160,1160,1,0,0,0,162,1188,1,0,0,0,164,1204,1,0,0,0,166,1206,
        1,0,0,0,168,1210,1,0,0,0,170,1216,1,0,0,0,172,1220,1,0,0,0,174,1235,
        1,0,0,0,176,1262,1,0,0,0,178,1270,1,0,0,0,180,1284,1,0,0,0,182,1291,
        1,0,0,0,184,1296,1,0,0,0,186,200,3,2,1,0,187,200,3,4,2,0,188,200,
        3,74,37,0,189,200,3,12,6,0,190,200,3,14,7,0,191,200,3,16,8,0,192,
        200,3,44,22,0,193,200,3,62,31,0,194,200,3,52,26,0,195,200,3,56,28,
        0,196,200,3,58,29,0,197,200,3,70,35,0,198,200,3,66,33,0,199,186,
        1,0,0,0,199,187,1,0,0,0,199,188,1,0,0,0,199,189,1,0,0,0,199,190,
        1,0,0,0,199,191,1,0,0,0,199,192,1,0,0,0,199,193,1,0,0,0,199,194,
        1,0,0,0,199,195,1,0,0,0,199,196,1,0,0,0,199,197,1,0,0,0,199,198,
        1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,204,
        1,0,0,0,203,201,1,0,0,0,204,205,5,0,0,1,205,1,1,0,0,0,206,208,5,
        48,0,0,207,209,5,173,0,0,208,207,1,0,0,0,209,210,1,0,0,0,210,208,
        1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,0,212,213,5,174,0,0,213,3,
        1,0,0,0,214,230,5,35,0,0,215,218,3,8,4,0,216,217,5,5,0,0,217,219,
        3,96,48,0,218,216,1,0,0,0,218,219,1,0,0,0,219,231,1,0,0,0,220,221,
        3,10,5,0,221,222,5,29,0,0,222,223,3,8,4,0,223,231,1,0,0,0,224,225,
        5,106,0,0,225,226,5,5,0,0,226,227,3,96,48,0,227,228,5,29,0,0,228,
        229,3,8,4,0,229,231,1,0,0,0,230,215,1,0,0,0,230,220,1,0,0,0,230,
        224,1,0,0,0,231,232,1,0,0,0,232,233,5,78,0,0,233,5,1,0,0,0,234,237,
        3,96,48,0,235,236,5,5,0,0,236,238,3,96,48,0,237,235,1,0,0,0,237,
        238,1,0,0,0,238,7,1,0,0,0,239,240,5,122,0,0,240,9,1,0,0,0,241,242,
        5,75,0,0,242,247,3,6,3,0,243,244,5,95,0,0,244,246,3,6,3,0,245,243,
        1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,250,
        1,0,0,0,249,247,1,0,0,0,250,251,5,76,0,0,251,11,1,0,0,0,252,254,
        5,2,0,0,253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,256,
        5,15,0,0,256,258,3,96,48,0,257,259,3,18,9,0,258,257,1,0,0,0,258,
        259,1,0,0,0,259,260,1,0,0,0,260,264,5,75,0,0,261,263,3,22,11,0,262,
        261,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,
        267,1,0,0,0,266,264,1,0,0,0,267,268,5,76,0,0,268,13,1,0,0,0,269,
        270,5,37,0,0,270,272,3,96,48,0,271,273,3,18,9,0,272,271,1,0,0,0,
        272,273,1,0,0,0,273,274,1,0,0,0,274,278,5,75,0,0,275,277,3,22,11,
        0,276,275,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,
        0,279,281,1,0,0,0,280,278,1,0,0,0,281,282,5,76,0,0,282,15,1,0,0,
        0,283,284,5,40,0,0,284,285,3,96,48,0,285,289,5,75,0,0,286,288,3,
        22,11,0,287,286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,
        1,0,0,0,290,292,1,0,0,0,291,289,1,0,0,0,292,293,5,76,0,0,293,17,
        1,0,0,0,294,295,5,39,0,0,295,300,3,20,10,0,296,297,5,95,0,0,297,
        299,3,20,10,0,298,296,1,0,0,0,299,302,1,0,0,0,300,301,1,0,0,0,300,
        298,1,0,0,0,301,19,1,0,0,0,302,300,1,0,0,0,303,305,3,28,14,0,304,
        306,3,26,13,0,305,304,1,0,0,0,305,306,1,0,0,0,306,21,1,0,0,0,307,
        320,3,38,19,0,308,320,3,44,22,0,309,320,3,46,23,0,310,320,3,48,24,
        0,311,320,3,50,25,0,312,320,3,52,26,0,313,320,3,56,28,0,314,320,
        3,58,29,0,315,320,3,60,30,0,316,320,3,66,33,0,317,320,3,70,35,0,
        318,320,3,74,37,0,319,307,1,0,0,0,319,308,1,0,0,0,319,309,1,0,0,
        0,319,310,1,0,0,0,319,311,1,0,0,0,319,312,1,0,0,0,319,313,1,0,0,
        0,319,314,1,0,0,0,319,315,1,0,0,0,319,316,1,0,0,0,319,317,1,0,0,
        0,319,318,1,0,0,0,320,23,1,0,0,0,321,322,3,96,48,0,322,323,5,77,
        0,0,323,324,3,88,44,0,324,25,1,0,0,0,325,348,5,71,0,0,326,331,3,
        88,44,0,327,328,5,95,0,0,328,330,3,88,44,0,329,327,1,0,0,0,330,333,
        1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,332,335,1,0,0,0,333,331,
        1,0,0,0,334,326,1,0,0,0,334,335,1,0,0,0,335,349,1,0,0,0,336,345,
        5,75,0,0,337,342,3,24,12,0,338,339,5,95,0,0,339,341,3,24,12,0,340,
        338,1,0,0,0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,
        346,1,0,0,0,344,342,1,0,0,0,345,337,1,0,0,0,345,346,1,0,0,0,346,
        347,1,0,0,0,347,349,5,76,0,0,348,334,1,0,0,0,348,336,1,0,0,0,349,
        350,1,0,0,0,350,351,5,72,0,0,351,27,1,0,0,0,352,357,3,96,48,0,353,
        354,5,79,0,0,354,356,3,96,48,0,355,353,1,0,0,0,356,359,1,0,0,0,357,
        355,1,0,0,0,357,358,1,0,0,0,358,29,1,0,0,0,359,357,1,0,0,0,360,362,
        3,28,14,0,361,363,3,26,13,0,362,361,1,0,0,0,362,363,1,0,0,0,363,
        31,1,0,0,0,364,365,7,0,0,0,365,33,1,0,0,0,366,371,3,36,18,0,367,
        368,5,95,0,0,368,370,3,36,18,0,369,367,1,0,0,0,370,373,1,0,0,0,371,
        369,1,0,0,0,371,372,1,0,0,0,372,35,1,0,0,0,373,371,1,0,0,0,374,376,
        3,78,39,0,375,377,3,86,43,0,376,375,1,0,0,0,376,377,1,0,0,0,377,
        379,1,0,0,0,378,380,3,96,48,0,379,378,1,0,0,0,379,380,1,0,0,0,380,
        37,1,0,0,0,381,382,5,13,0,0,382,384,5,71,0,0,383,385,3,34,17,0,384,
        383,1,0,0,0,384,385,1,0,0,0,385,386,1,0,0,0,386,399,5,72,0,0,387,
        398,3,30,15,0,388,389,4,19,0,1,389,390,5,47,0,0,390,398,6,19,-1,
        0,391,392,4,19,1,1,392,393,5,38,0,0,393,398,6,19,-1,0,394,395,4,
        19,2,1,395,396,5,50,0,0,396,398,6,19,-1,0,397,387,1,0,0,0,397,388,
        1,0,0,0,397,391,1,0,0,0,397,394,1,0,0,0,398,401,1,0,0,0,399,397,
        1,0,0,0,399,400,1,0,0,0,400,402,1,0,0,0,401,399,1,0,0,0,402,403,
        3,112,56,0,403,39,1,0,0,0,404,405,7,1,0,0,405,41,1,0,0,0,406,418,
        5,46,0,0,407,408,5,71,0,0,408,413,3,28,14,0,409,410,5,95,0,0,410,
        412,3,28,14,0,411,409,1,0,0,0,412,415,1,0,0,0,413,411,1,0,0,0,413,
        414,1,0,0,0,414,416,1,0,0,0,415,413,1,0,0,0,416,417,5,72,0,0,417,
        419,1,0,0,0,418,407,1,0,0,0,418,419,1,0,0,0,419,43,1,0,0,0,420,424,
        5,30,0,0,421,425,3,96,48,0,422,425,5,24,0,0,423,425,5,52,0,0,424,
        421,1,0,0,0,424,422,1,0,0,0,424,423,1,0,0,0,425,426,1,0,0,0,426,
        428,5,71,0,0,427,429,3,34,17,0,428,427,1,0,0,0,428,429,1,0,0,0,429,
        430,1,0,0,0,430,449,5,72,0,0,431,432,4,22,3,1,432,433,3,32,16,0,
        433,434,6,22,-1,0,434,448,1,0,0,0,435,436,4,22,4,1,436,437,3,40,
        20,0,437,438,6,22,-1,0,438,448,1,0,0,0,439,448,3,30,15,0,440,441,
        4,22,5,1,441,442,5,69,0,0,442,448,6,22,-1,0,443,444,4,22,6,1,444,
        445,3,42,21,0,445,446,6,22,-1,0,446,448,1,0,0,0,447,431,1,0,0,0,
        447,435,1,0,0,0,447,439,1,0,0,0,447,440,1,0,0,0,447,443,1,0,0,0,
        448,451,1,0,0,0,449,447,1,0,0,0,449,450,1,0,0,0,450,457,1,0,0,0,
        451,449,1,0,0,0,452,453,5,54,0,0,453,454,5,71,0,0,454,455,3,34,17,
        0,455,456,5,72,0,0,456,458,1,0,0,0,457,452,1,0,0,0,457,458,1,0,0,
        0,458,461,1,0,0,0,459,462,5,78,0,0,460,462,3,112,56,0,461,459,1,
        0,0,0,461,460,1,0,0,0,462,45,1,0,0,0,463,464,5,43,0,0,464,470,3,
        96,48,0,465,467,5,71,0,0,466,468,3,34,17,0,467,466,1,0,0,0,467,468,
        1,0,0,0,468,469,1,0,0,0,469,471,5,72,0,0,470,465,1,0,0,0,470,471,
        1,0,0,0,471,481,1,0,0,0,472,473,4,23,7,1,473,474,5,69,0,0,474,480,
        6,23,-1,0,475,476,4,23,8,1,476,477,3,42,21,0,477,478,6,23,-1,0,478,
        480,1,0,0,0,479,472,1,0,0,0,479,475,1,0,0,0,480,483,1,0,0,0,481,
        479,1,0,0,0,481,482,1,0,0,0,482,486,1,0,0,0,483,481,1,0,0,0,484,
        487,5,78,0,0,485,487,3,112,56,0,486,484,1,0,0,0,486,485,1,0,0,0,
        487,47,1,0,0,0,488,489,5,24,0,0,489,493,5,71,0,0,490,491,3,34,17,
        0,491,492,6,24,-1,0,492,494,1,0,0,0,493,490,1,0,0,0,493,494,1,0,
        0,0,494,495,1,0,0,0,495,513,5,72,0,0,496,497,4,24,9,1,497,498,5,
        23,0,0,498,512,6,24,-1,0,499,500,4,24,10,1,500,501,3,40,20,0,501,
        502,6,24,-1,0,502,512,1,0,0,0,503,512,3,30,15,0,504,505,4,24,11,
        1,505,506,5,69,0,0,506,512,6,24,-1,0,507,508,4,24,12,1,508,509,3,
        42,21,0,509,510,6,24,-1,0,510,512,1,0,0,0,511,496,1,0,0,0,511,499,
        1,0,0,0,511,503,1,0,0,0,511,504,1,0,0,0,511,507,1,0,0,0,512,515,
        1,0,0,0,513,511,1,0,0,0,513,514,1,0,0,0,514,523,1,0,0,0,515,513,
        1,0,0,0,516,517,4,24,13,1,517,518,5,54,0,0,518,519,5,71,0,0,519,
        520,3,34,17,0,520,521,5,72,0,0,521,524,1,0,0,0,522,524,4,24,14,1,
        523,516,1,0,0,0,523,522,1,0,0,0,524,527,1,0,0,0,525,528,5,78,0,0,
        526,528,3,112,56,0,527,525,1,0,0,0,527,526,1,0,0,0,528,49,1,0,0,
        0,529,530,5,52,0,0,530,531,5,71,0,0,531,548,5,72,0,0,532,533,4,25,
        15,1,533,534,5,23,0,0,534,547,6,25,-1,0,535,536,4,25,16,1,536,537,
        5,47,0,0,537,547,6,25,-1,0,538,547,3,30,15,0,539,540,4,25,17,1,540,
        541,5,69,0,0,541,547,6,25,-1,0,542,543,4,25,18,1,543,544,3,42,21,
        0,544,545,6,25,-1,0,545,547,1,0,0,0,546,532,1,0,0,0,546,535,1,0,
        0,0,546,538,1,0,0,0,546,539,1,0,0,0,546,542,1,0,0,0,547,550,1,0,
        0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,553,1,0,0,0,550,548,1,0,
        0,0,551,554,5,78,0,0,552,554,3,112,56,0,553,551,1,0,0,0,553,552,
        1,0,0,0,554,51,1,0,0,0,555,556,5,59,0,0,556,557,3,96,48,0,557,559,
        5,75,0,0,558,560,3,54,27,0,559,558,1,0,0,0,560,561,1,0,0,0,561,559,
        1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,564,5,76,0,0,564,53,
        1,0,0,0,565,566,3,78,39,0,566,567,3,96,48,0,567,568,5,78,0,0,568,
        55,1,0,0,0,569,570,5,20,0,0,570,571,3,96,48,0,571,572,5,75,0,0,572,
        577,3,96,48,0,573,574,5,95,0,0,574,576,3,96,48,0,575,573,1,0,0,0,
        576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,580,1,0,0,0,
        579,577,1,0,0,0,580,581,5,76,0,0,581,57,1,0,0,0,582,583,5,62,0,0,
        583,584,3,96,48,0,584,585,5,39,0,0,585,586,3,80,40,0,586,587,5,78,
        0,0,587,59,1,0,0,0,588,610,3,78,39,0,589,590,4,30,19,1,590,591,5,
        50,0,0,591,609,6,30,-1,0,592,593,4,30,20,1,593,594,5,49,0,0,594,
        609,6,30,-1,0,595,596,4,30,21,1,596,597,5,38,0,0,597,609,6,30,-1,
        0,598,599,4,30,22,1,599,600,5,12,0,0,600,609,6,30,-1,0,601,602,4,
        30,23,1,602,603,3,42,21,0,603,604,6,30,-1,0,604,609,1,0,0,0,605,
        606,4,30,24,1,606,607,5,34,0,0,607,609,6,30,-1,0,608,589,1,0,0,0,
        608,592,1,0,0,0,608,595,1,0,0,0,608,598,1,0,0,0,608,601,1,0,0,0,
        608,605,1,0,0,0,609,612,1,0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,
        611,613,1,0,0,0,612,610,1,0,0,0,613,616,3,96,48,0,614,615,5,83,0,
        0,615,617,3,88,44,0,616,614,1,0,0,0,616,617,1,0,0,0,617,618,1,0,
        0,0,618,619,5,78,0,0,619,61,1,0,0,0,620,621,3,78,39,0,621,622,5,
        12,0,0,622,623,3,96,48,0,623,624,5,83,0,0,624,625,3,88,44,0,625,
        626,5,78,0,0,626,63,1,0,0,0,627,629,3,78,39,0,628,630,5,36,0,0,629,
        628,1,0,0,0,629,630,1,0,0,0,630,632,1,0,0,0,631,633,3,96,48,0,632,
        631,1,0,0,0,632,633,1,0,0,0,633,65,1,0,0,0,634,635,5,22,0,0,635,
        636,3,96,48,0,636,645,5,71,0,0,637,642,3,64,32,0,638,639,5,95,0,
        0,639,641,3,64,32,0,640,638,1,0,0,0,641,644,1,0,0,0,642,640,1,0,
        0,0,642,643,1,0,0,0,643,646,1,0,0,0,644,642,1,0,0,0,645,637,1,0,
        0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,649,5,72,0,0,648,650,5,4,
        0,0,649,648,1,0,0,0,649,650,1,0,0,0,650,651,1,0,0,0,651,652,5,78,
        0,0,652,67,1,0,0,0,653,655,3,78,39,0,654,656,3,96,48,0,655,654,1,
        0,0,0,655,656,1,0,0,0,656,69,1,0,0,0,657,658,5,21,0,0,658,659,3,
        96,48,0,659,668,5,71,0,0,660,665,3,68,34,0,661,662,5,95,0,0,662,
        664,3,68,34,0,663,661,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,665,
        666,1,0,0,0,666,669,1,0,0,0,667,665,1,0,0,0,668,660,1,0,0,0,668,
        669,1,0,0,0,669,670,1,0,0,0,670,671,5,72,0,0,671,672,5,78,0,0,672,
        71,1,0,0,0,673,674,7,2,0,0,674,73,1,0,0,0,675,688,5,67,0,0,676,689,
        3,28,14,0,677,678,5,75,0,0,678,683,3,76,38,0,679,680,5,95,0,0,680,
        682,3,76,38,0,681,679,1,0,0,0,682,685,1,0,0,0,683,681,1,0,0,0,683,
        684,1,0,0,0,684,686,1,0,0,0,685,683,1,0,0,0,686,687,5,76,0,0,687,
        689,1,0,0,0,688,676,1,0,0,0,688,677,1,0,0,0,689,690,1,0,0,0,690,
        693,5,28,0,0,691,694,5,106,0,0,692,694,3,78,39,0,693,691,1,0,0,0,
        693,692,1,0,0,0,694,696,1,0,0,0,695,697,5,31,0,0,696,695,1,0,0,0,
        696,697,1,0,0,0,697,698,1,0,0,0,698,699,5,78,0,0,699,75,1,0,0,0,
        700,703,3,28,14,0,701,702,5,5,0,0,702,704,3,72,36,0,703,701,1,0,
        0,0,703,704,1,0,0,0,704,77,1,0,0,0,705,706,6,39,-1,0,706,711,3,80,
        40,0,707,711,3,82,41,0,708,711,3,154,77,0,709,711,3,28,14,0,710,
        705,1,0,0,0,710,707,1,0,0,0,710,708,1,0,0,0,710,709,1,0,0,0,711,
        720,1,0,0,0,712,713,10,1,0,0,713,715,5,73,0,0,714,716,3,88,44,0,
        715,714,1,0,0,0,715,716,1,0,0,0,716,717,1,0,0,0,717,719,5,74,0,0,
        718,712,1,0,0,0,719,722,1,0,0,0,720,718,1,0,0,0,720,721,1,0,0,0,
        721,79,1,0,0,0,722,720,1,0,0,0,723,736,5,3,0,0,724,725,4,40,26,1,
        725,726,5,3,0,0,726,736,5,47,0,0,727,736,5,7,0,0,728,736,5,58,0,
        0,729,736,5,9,0,0,730,736,5,56,0,0,731,736,5,66,0,0,732,736,5,27,
        0,0,733,736,5,26,0,0,734,736,5,63,0,0,735,723,1,0,0,0,735,724,1,
        0,0,0,735,727,1,0,0,0,735,728,1,0,0,0,735,729,1,0,0,0,735,730,1,
        0,0,0,735,731,1,0,0,0,735,732,1,0,0,0,735,733,1,0,0,0,735,734,1,
        0,0,0,736,81,1,0,0,0,737,738,5,30,0,0,738,740,5,71,0,0,739,741,3,
        34,17,0,740,739,1,0,0,0,740,741,1,0,0,0,741,742,1,0,0,0,742,753,
        5,72,0,0,743,744,4,41,27,1,744,745,3,32,16,0,745,746,6,41,-1,0,746,
        752,1,0,0,0,747,748,4,41,28,1,748,749,3,40,20,0,749,750,6,41,-1,
        0,750,752,1,0,0,0,751,743,1,0,0,0,751,747,1,0,0,0,752,755,1,0,0,
        0,753,751,1,0,0,0,753,754,1,0,0,0,754,761,1,0,0,0,755,753,1,0,0,
        0,756,757,5,54,0,0,757,758,5,71,0,0,758,759,3,34,17,0,759,760,5,
        72,0,0,760,762,1,0,0,0,761,756,1,0,0,0,761,762,1,0,0,0,762,83,1,
        0,0,0,763,765,3,78,39,0,764,766,3,86,43,0,765,764,1,0,0,0,765,766,
        1,0,0,0,766,767,1,0,0,0,767,768,3,96,48,0,768,85,1,0,0,0,769,770,
        7,3,0,0,770,87,1,0,0,0,771,772,6,44,-1,0,772,773,5,47,0,0,773,792,
        3,26,13,0,774,775,5,62,0,0,775,776,5,71,0,0,776,777,3,78,39,0,777,
        778,5,72,0,0,778,792,1,0,0,0,779,780,7,4,0,0,780,792,3,88,44,19,
        781,782,5,44,0,0,782,792,3,78,39,0,783,792,3,92,46,0,784,792,3,94,
        47,0,785,790,3,96,48,0,786,790,3,98,49,0,787,790,3,100,50,0,788,
        790,3,80,40,0,789,785,1,0,0,0,789,786,1,0,0,0,789,787,1,0,0,0,789,
        788,1,0,0,0,790,792,1,0,0,0,791,771,1,0,0,0,791,774,1,0,0,0,791,
        779,1,0,0,0,791,781,1,0,0,0,791,783,1,0,0,0,791,784,1,0,0,0,791,
        789,1,0,0,0,792,877,1,0,0,0,793,794,10,17,0,0,794,795,5,109,0,0,
        795,876,3,88,44,17,796,797,10,16,0,0,797,798,7,5,0,0,798,876,3,88,
        44,17,799,800,10,15,0,0,800,801,7,6,0,0,801,876,3,88,44,16,802,803,
        10,14,0,0,803,804,7,7,0,0,804,876,3,88,44,15,805,806,10,13,0,0,806,
        807,5,100,0,0,807,876,3,88,44,14,808,809,10,12,0,0,809,810,5,99,
        0,0,810,876,3,88,44,13,811,812,10,11,0,0,812,813,5,98,0,0,813,876,
        3,88,44,12,814,815,10,10,0,0,815,816,7,8,0,0,816,876,3,88,44,11,
        817,818,10,9,0,0,818,819,7,9,0,0,819,876,3,88,44,10,820,821,10,8,
        0,0,821,822,5,97,0,0,822,876,3,88,44,9,823,824,10,7,0,0,824,825,
        5,96,0,0,825,876,3,88,44,8,826,827,10,6,0,0,827,828,5,80,0,0,828,
        829,3,88,44,0,829,830,5,77,0,0,830,831,3,88,44,6,831,876,1,0,0,0,
        832,833,10,5,0,0,833,834,3,90,45,0,834,835,3,88,44,5,835,876,1,0,
        0,0,836,837,10,26,0,0,837,839,5,73,0,0,838,840,3,88,44,0,839,838,
        1,0,0,0,839,840,1,0,0,0,840,841,1,0,0,0,841,876,5,74,0,0,842,843,
        10,25,0,0,843,845,5,73,0,0,844,846,3,88,44,0,845,844,1,0,0,0,845,
        846,1,0,0,0,846,847,1,0,0,0,847,849,5,77,0,0,848,850,3,88,44,0,849,
        848,1,0,0,0,849,850,1,0,0,0,850,851,1,0,0,0,851,876,5,74,0,0,852,
        853,10,24,0,0,853,856,5,79,0,0,854,857,3,96,48,0,855,857,5,3,0,0,
        856,854,1,0,0,0,856,855,1,0,0,0,857,876,1,0,0,0,858,859,10,23,0,
        0,859,868,5,75,0,0,860,865,3,24,12,0,861,862,5,95,0,0,862,864,3,
        24,12,0,863,861,1,0,0,0,864,867,1,0,0,0,865,863,1,0,0,0,865,866,
        1,0,0,0,866,869,1,0,0,0,867,865,1,0,0,0,868,860,1,0,0,0,868,869,
        1,0,0,0,869,870,1,0,0,0,870,876,5,76,0,0,871,872,10,22,0,0,872,876,
        3,26,13,0,873,874,10,18,0,0,874,876,7,10,0,0,875,793,1,0,0,0,875,
        796,1,0,0,0,875,799,1,0,0,0,875,802,1,0,0,0,875,805,1,0,0,0,875,
        808,1,0,0,0,875,811,1,0,0,0,875,814,1,0,0,0,875,817,1,0,0,0,875,
        820,1,0,0,0,875,823,1,0,0,0,875,826,1,0,0,0,875,832,1,0,0,0,875,
        836,1,0,0,0,875,842,1,0,0,0,875,852,1,0,0,0,875,858,1,0,0,0,875,
        871,1,0,0,0,875,873,1,0,0,0,876,879,1,0,0,0,877,875,1,0,0,0,877,
        878,1,0,0,0,878,89,1,0,0,0,879,877,1,0,0,0,880,881,7,11,0,0,881,
        91,1,0,0,0,882,884,5,71,0,0,883,885,3,88,44,0,884,883,1,0,0,0,884,
        885,1,0,0,0,885,892,1,0,0,0,886,888,5,95,0,0,887,889,3,88,44,0,888,
        887,1,0,0,0,888,889,1,0,0,0,889,891,1,0,0,0,890,886,1,0,0,0,891,
        894,1,0,0,0,892,890,1,0,0,0,892,893,1,0,0,0,893,895,1,0,0,0,894,
        892,1,0,0,0,895,896,5,72,0,0,896,93,1,0,0,0,897,898,5,73,0,0,898,
        903,3,88,44,0,899,900,5,95,0,0,900,902,3,88,44,0,901,899,1,0,0,0,
        902,905,1,0,0,0,903,901,1,0,0,0,903,904,1,0,0,0,904,906,1,0,0,0,
        905,903,1,0,0,0,906,907,5,74,0,0,907,95,1,0,0,0,908,909,7,12,0,0,
        909,97,1,0,0,0,910,916,3,104,52,0,911,916,3,110,55,0,912,916,3,102,
        51,0,913,916,3,106,53,0,914,916,3,108,54,0,915,910,1,0,0,0,915,911,
        1,0,0,0,915,912,1,0,0,0,915,913,1,0,0,0,915,914,1,0,0,0,916,99,1,
        0,0,0,917,918,3,110,55,0,918,919,5,45,0,0,919,101,1,0,0,0,920,921,
        7,13,0,0,921,103,1,0,0,0,922,924,7,14,0,0,923,922,1,0,0,0,924,925,
        1,0,0,0,925,923,1,0,0,0,925,926,1,0,0,0,926,105,1,0,0,0,927,929,
        5,125,0,0,928,927,1,0,0,0,929,930,1,0,0,0,930,928,1,0,0,0,930,931,
        1,0,0,0,931,107,1,0,0,0,932,934,5,124,0,0,933,932,1,0,0,0,934,935,
        1,0,0,0,935,933,1,0,0,0,935,936,1,0,0,0,936,109,1,0,0,0,937,938,
        7,15,0,0,938,111,1,0,0,0,939,944,5,75,0,0,940,943,3,116,58,0,941,
        943,3,114,57,0,942,940,1,0,0,0,942,941,1,0,0,0,943,946,1,0,0,0,944,
        942,1,0,0,0,944,945,1,0,0,0,945,947,1,0,0,0,946,944,1,0,0,0,947,
        948,5,76,0,0,948,113,1,0,0,0,949,950,5,64,0,0,950,951,3,112,56,0,
        951,115,1,0,0,0,952,966,3,112,56,0,953,966,3,118,59,0,954,966,3,
        120,60,0,955,966,3,122,61,0,956,966,3,124,62,0,957,966,3,126,63,
        0,958,966,3,128,64,0,959,966,3,130,65,0,960,966,3,132,66,0,961,966,
        3,136,68,0,962,966,3,138,69,0,963,966,3,140,70,0,964,966,3,142,71,
        0,965,952,1,0,0,0,965,953,1,0,0,0,965,954,1,0,0,0,965,955,1,0,0,
        0,965,956,1,0,0,0,965,957,1,0,0,0,965,958,1,0,0,0,965,959,1,0,0,
        0,965,960,1,0,0,0,965,961,1,0,0,0,965,962,1,0,0,0,965,963,1,0,0,
        0,965,964,1,0,0,0,966,117,1,0,0,0,967,970,3,150,75,0,968,970,3,152,
        76,0,969,967,1,0,0,0,969,968,1,0,0,0,970,119,1,0,0,0,971,972,5,33,
        0,0,972,973,5,71,0,0,973,974,3,88,44,0,974,975,5,72,0,0,975,978,
        3,116,58,0,976,977,5,18,0,0,977,979,3,116,58,0,978,976,1,0,0,0,978,
        979,1,0,0,0,979,121,1,0,0,0,980,981,5,28,0,0,981,984,5,71,0,0,982,
        985,3,118,59,0,983,985,5,78,0,0,984,982,1,0,0,0,984,983,1,0,0,0,
        985,988,1,0,0,0,986,989,3,152,76,0,987,989,5,78,0,0,988,986,1,0,
        0,0,988,987,1,0,0,0,989,991,1,0,0,0,990,992,3,88,44,0,991,990,1,
        0,0,0,991,992,1,0,0,0,992,993,1,0,0,0,993,994,5,72,0,0,994,995,3,
        116,58,0,995,123,1,0,0,0,996,997,5,70,0,0,997,998,5,71,0,0,998,999,
        3,88,44,0,999,1000,5,72,0,0,1000,1001,3,116,58,0,1001,125,1,0,0,
        0,1002,1003,5,17,0,0,1003,1004,3,116,58,0,1004,1005,5,70,0,0,1005,
        1006,5,71,0,0,1006,1007,3,88,44,0,1007,1008,5,72,0,0,1008,1009,5,
        78,0,0,1009,127,1,0,0,0,1010,1011,5,14,0,0,1011,1012,5,78,0,0,1012,
        129,1,0,0,0,1013,1014,5,8,0,0,1014,1015,5,78,0,0,1015,131,1,0,0,
        0,1016,1017,5,61,0,0,1017,1023,3,88,44,0,1018,1019,5,54,0,0,1019,
        1020,5,71,0,0,1020,1021,3,34,17,0,1021,1022,5,72,0,0,1022,1024,1,
        0,0,0,1023,1018,1,0,0,0,1023,1024,1,0,0,0,1024,1025,1,0,0,0,1025,
        1027,3,112,56,0,1026,1028,3,134,67,0,1027,1026,1,0,0,0,1028,1029,
        1,0,0,0,1029,1027,1,0,0,0,1029,1030,1,0,0,0,1030,133,1,0,0,0,1031,
        1039,5,11,0,0,1032,1034,3,96,48,0,1033,1032,1,0,0,0,1033,1034,1,
        0,0,0,1034,1035,1,0,0,0,1035,1036,5,71,0,0,1036,1037,3,34,17,0,1037,
        1038,5,72,0,0,1038,1040,1,0,0,0,1039,1033,1,0,0,0,1039,1040,1,0,
        0,0,1040,1041,1,0,0,0,1041,1042,3,112,56,0,1042,135,1,0,0,0,1043,
        1045,5,53,0,0,1044,1046,3,88,44,0,1045,1044,1,0,0,0,1045,1046,1,
        0,0,0,1046,1047,1,0,0,0,1047,1048,5,78,0,0,1048,137,1,0,0,0,1049,
        1050,5,19,0,0,1050,1051,3,88,44,0,1051,1052,3,26,13,0,1052,1053,
        5,78,0,0,1053,139,1,0,0,0,1054,1055,5,55,0,0,1055,1056,3,88,44,0,
        1056,1057,3,26,13,0,1057,1058,5,78,0,0,1058,141,1,0,0,0,1059,1061,
        5,6,0,0,1060,1062,5,134,0,0,1061,1060,1,0,0,0,1061,1062,1,0,0,0,
        1062,1064,1,0,0,0,1063,1065,3,144,72,0,1064,1063,1,0,0,0,1064,1065,
        1,0,0,0,1065,1066,1,0,0,0,1066,1070,5,135,0,0,1067,1069,3,158,79,
        0,1068,1067,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,0,0,0,1070,1071,
        1,0,0,0,1071,1073,1,0,0,0,1072,1070,1,0,0,0,1073,1074,5,158,0,0,
        1074,143,1,0,0,0,1075,1076,5,137,0,0,1076,1081,5,136,0,0,1077,1078,
        5,139,0,0,1078,1080,5,136,0,0,1079,1077,1,0,0,0,1080,1083,1,0,0,
        0,1081,1079,1,0,0,0,1081,1082,1,0,0,0,1082,1084,1,0,0,0,1083,1081,
        1,0,0,0,1084,1085,5,138,0,0,1085,145,1,0,0,0,1086,1091,3,84,42,0,
        1087,1088,5,95,0,0,1088,1090,3,84,42,0,1089,1087,1,0,0,0,1090,1093,
        1,0,0,0,1091,1089,1,0,0,0,1091,1092,1,0,0,0,1092,147,1,0,0,0,1093,
        1091,1,0,0,0,1094,1098,5,71,0,0,1095,1097,5,95,0,0,1096,1095,1,0,
        0,0,1097,1100,1,0,0,0,1098,1096,1,0,0,0,1098,1099,1,0,0,0,1099,1101,
        1,0,0,0,1100,1098,1,0,0,0,1101,1102,3,84,42,0,1102,1109,1,0,0,0,
        1103,1105,5,95,0,0,1104,1106,3,84,42,0,1105,1104,1,0,0,0,1105,1106,
        1,0,0,0,1106,1108,1,0,0,0,1107,1103,1,0,0,0,1108,1111,1,0,0,0,1109,
        1107,1,0,0,0,1109,1110,1,0,0,0,1110,1112,1,0,0,0,1111,1109,1,0,0,
        0,1112,1113,5,72,0,0,1113,149,1,0,0,0,1114,1117,3,84,42,0,1115,1116,
        5,83,0,0,1116,1118,3,88,44,0,1117,1115,1,0,0,0,1117,1118,1,0,0,0,
        1118,1124,1,0,0,0,1119,1120,3,148,74,0,1120,1121,5,83,0,0,1121,1122,
        3,88,44,0,1122,1124,1,0,0,0,1123,1114,1,0,0,0,1123,1119,1,0,0,0,
        1124,1125,1,0,0,0,1125,1126,5,78,0,0,1126,151,1,0,0,0,1127,1128,
        3,88,44,0,1128,1129,5,78,0,0,1129,153,1,0,0,0,1130,1131,5,41,0,0,
        1131,1132,5,71,0,0,1132,1134,3,156,78,0,1133,1135,3,96,48,0,1134,
        1133,1,0,0,0,1134,1135,1,0,0,0,1135,1136,1,0,0,0,1136,1137,5,81,
        0,0,1137,1139,3,78,39,0,1138,1140,3,96,48,0,1139,1138,1,0,0,0,1139,
        1140,1,0,0,0,1140,1141,1,0,0,0,1141,1142,5,72,0,0,1142,155,1,0,0,
        0,1143,1146,3,80,40,0,1144,1146,3,28,14,0,1145,1143,1,0,0,0,1145,
        1144,1,0,0,0,1146,157,1,0,0,0,1147,1159,3,160,80,0,1148,1159,3,162,
        81,0,1149,1159,3,164,82,0,1150,1159,3,178,89,0,1151,1159,3,166,83,
        0,1152,1159,3,168,84,0,1153,1159,3,172,86,0,1154,1159,5,151,0,0,
        1155,1159,5,143,0,0,1156,1159,5,145,0,0,1157,1159,3,174,87,0,1158,
        1147,1,0,0,0,1158,1148,1,0,0,0,1158,1149,1,0,0,0,1158,1150,1,0,0,
        0,1158,1151,1,0,0,0,1158,1152,1,0,0,0,1158,1153,1,0,0,0,1158,1154,
        1,0,0,0,1158,1155,1,0,0,0,1158,1156,1,0,0,0,1158,1157,1,0,0,0,1159,
        159,1,0,0,0,1160,1164,5,157,0,0,1161,1163,3,158,79,0,1162,1161,1,
        0,0,0,1163,1166,1,0,0,0,1164,1162,1,0,0,0,1164,1165,1,0,0,0,1165,
        1167,1,0,0,0,1166,1164,1,0,0,0,1167,1168,5,158,0,0,1168,161,1,0,
        0,0,1169,1170,5,152,0,0,1170,1173,5,165,0,0,1171,1172,5,161,0,0,
        1172,1174,3,184,92,0,1173,1171,1,0,0,0,1173,1174,1,0,0,0,1174,1189,
        1,0,0,0,1175,1176,5,152,0,0,1176,1181,5,165,0,0,1177,1178,5,163,
        0,0,1178,1180,5,165,0,0,1179,1177,1,0,0,0,1180,1183,1,0,0,0,1181,
        1179,1,0,0,0,1181,1182,1,0,0,0,1182,1186,1,0,0,0,1183,1181,1,0,0,
        0,1184,1185,5,161,0,0,1185,1187,3,178,89,0,1186,1184,1,0,0,0,1186,
        1187,1,0,0,0,1187,1189,1,0,0,0,1188,1169,1,0,0,0,1188,1175,1,0,0,
        0,1189,163,1,0,0,0,1190,1191,3,176,88,0,1191,1192,5,161,0,0,1192,
        1193,3,184,92,0,1193,1205,1,0,0,0,1194,1197,3,176,88,0,1195,1196,
        5,163,0,0,1196,1198,3,176,88,0,1197,1195,1,0,0,0,1198,1199,1,0,0,
        0,1199,1197,1,0,0,0,1199,1200,1,0,0,0,1200,1201,1,0,0,0,1201,1202,
        5,161,0,0,1202,1203,3,178,89,0,1203,1205,1,0,0,0,1204,1190,1,0,0,
        0,1204,1194,1,0,0,0,1205,165,1,0,0,0,1206,1207,5,150,0,0,1207,1208,
        3,184,92,0,1208,1209,3,160,80,0,1209,167,1,0,0,0,1210,1211,5,148,
        0,0,1211,1212,3,160,80,0,1212,1213,3,184,92,0,1213,1214,3,160,80,
        0,1214,1215,3,160,80,0,1215,169,1,0,0,0,1216,1217,5,144,0,0,1217,
        1218,3,182,91,0,1218,1219,3,160,80,0,1219,171,1,0,0,0,1220,1221,
        5,153,0,0,1221,1233,3,184,92,0,1222,1224,3,170,85,0,1223,1222,1,
        0,0,0,1224,1225,1,0,0,0,1225,1223,1,0,0,0,1225,1226,1,0,0,0,1226,
        1229,1,0,0,0,1227,1228,5,146,0,0,1228,1230,3,160,80,0,1229,1227,
        1,0,0,0,1229,1230,1,0,0,0,1230,1234,1,0,0,0,1231,1232,5,146,0,0,
        1232,1234,3,160,80,0,1233,1223,1,0,0,0,1233,1231,1,0,0,0,1234,173,
        1,0,0,0,1235,1236,5,149,0,0,1236,1237,5,165,0,0,1237,1246,5,159,
        0,0,1238,1243,5,165,0,0,1239,1240,5,163,0,0,1240,1242,5,165,0,0,
        1241,1239,1,0,0,0,1242,1245,1,0,0,0,1243,1241,1,0,0,0,1243,1244,
        1,0,0,0,1244,1247,1,0,0,0,1245,1243,1,0,0,0,1246,1238,1,0,0,0,1246,
        1247,1,0,0,0,1247,1248,1,0,0,0,1248,1258,5,160,0,0,1249,1250,5,164,
        0,0,1250,1255,5,165,0,0,1251,1252,5,163,0,0,1252,1254,5,165,0,0,
        1253,1251,1,0,0,0,1254,1257,1,0,0,0,1255,1253,1,0,0,0,1255,1256,
        1,0,0,0,1256,1259,1,0,0,0,1257,1255,1,0,0,0,1258,1249,1,0,0,0,1258,
        1259,1,0,0,0,1259,1260,1,0,0,0,1260,1261,3,160,80,0,1261,175,1,0,
        0,0,1262,1267,5,165,0,0,1263,1264,5,162,0,0,1264,1266,7,16,0,0,1265,
        1263,1,0,0,0,1266,1269,1,0,0,0,1267,1265,1,0,0,0,1267,1268,1,0,0,
        0,1268,177,1,0,0,0,1269,1267,1,0,0,0,1270,1271,7,16,0,0,1271,1280,
        5,159,0,0,1272,1277,3,184,92,0,1273,1274,5,163,0,0,1274,1276,3,184,
        92,0,1275,1273,1,0,0,0,1276,1279,1,0,0,0,1277,1275,1,0,0,0,1277,
        1278,1,0,0,0,1278,1281,1,0,0,0,1279,1277,1,0,0,0,1280,1272,1,0,0,
        0,1280,1281,1,0,0,0,1281,1282,1,0,0,0,1282,1283,5,160,0,0,1283,179,
        1,0,0,0,1284,1285,7,17,0,0,1285,181,1,0,0,0,1286,1292,5,167,0,0,
        1287,1292,5,168,0,0,1288,1292,5,166,0,0,1289,1292,3,180,90,0,1290,
        1292,5,169,0,0,1291,1286,1,0,0,0,1291,1287,1,0,0,0,1291,1288,1,0,
        0,0,1291,1289,1,0,0,0,1291,1290,1,0,0,0,1292,183,1,0,0,0,1293,1297,
        3,176,88,0,1294,1297,3,178,89,0,1295,1297,3,182,91,0,1296,1293,1,
        0,0,0,1296,1294,1,0,0,0,1296,1295,1,0,0,0,1297,185,1,0,0,0,141,199,
        201,210,218,230,237,247,253,258,264,272,278,289,300,305,319,331,
        334,342,345,348,357,362,371,376,379,384,397,399,413,418,424,428,
        447,449,457,461,467,470,479,481,486,493,511,513,523,527,546,548,
        553,561,577,608,610,616,629,632,642,645,649,655,665,668,683,688,
        693,696,703,710,715,720,735,740,751,753,761,765,789,791,839,845,
        849,856,865,868,875,877,884,888,892,903,915,925,930,935,942,944,
        965,969,978,984,988,991,1023,1029,1033,1039,1045,1061,1064,1070,
        1081,1091,1098,1105,1109,1117,1123,1134,1139,1145,1158,1164,1173,
        1181,1186,1188,1199,1204,1225,1229,1233,1243,1246,1255,1258,1267,
        1277,1280,1291,1296
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
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
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
    public usingAliases(): UsingAliasesContext[];
    public usingAliases(i: number): UsingAliasesContext | null;
    public usingAliases(i?: number): UsingAliasesContext[] | UsingAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UsingAliasesContext);
        }

        return this.getRuleContext(i, UsingAliasesContext);
    }
    public RBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrace, 0);
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


export class UsingAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public userDefinableOperator(): UserDefinableOperatorContext | null {
        return this.getRuleContext(0, UserDefinableOperatorContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_usingAliases;
    }
    public override enterRule(listener: SolidityParserListener): void {
        if(listener.enterUsingAliases) {
             listener.enterUsingAliases(this);
        }
    }
    public override exitRule(listener: SolidityParserListener): void {
        if(listener.exitUsingAliases) {
             listener.exitUsingAliases(this);
        }
    }
    public override accept<Result>(visitor: SolidityParserVisitor<Result>): Result | null {
        if (visitor.visitUsingAliases) {
            return visitor.visitUsingAliases(this);
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
