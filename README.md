# Solidity ANTLR4

Solidity Lang Lexer and Parser by official ANTLR4 grammar.

## Install

```bash
$ npm install solidity-antlr4
```

## Usage (low-level api)

```ts
import { SolidityLexer, SolidityParser, CharStreams, CommonTokenStream } from 'solididty-antlr4';

const code = `...`; // code here

const input = CharStreams.fromString(code);
const lexer = new SolidityLexer(input);
const tokens = new CommonTokenStream(lexer);
const parser = new SolidityParser(tokens);

const parseTree = parser.sourceUnit();

// do something with parseTree
```

## License

[MIT](./LICENSE)
