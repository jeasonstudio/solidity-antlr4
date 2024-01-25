import { test, expect } from 'vitest';
import { parse, tokenizer } from '../parser';
import { generate } from '../generator';

test('generator', async () => {
  const code = `

  pragma solidity solidity soliditysoliditysoliditysoliditysoliditysoliditysoliditysoliditysoliditysolidity ^0.8.20;


  contract  Hi {
    struct    MyStruct {
      string name;
      uint[2] nums;
    }
  }

  // asdf
  `;

  const ast = parse(code, { tolerant: true });
  const tokens = tokenizer(code, { tolerant: true });
  // @ts-ignore
  const target = ast.nodes[1].nodes[0];
  (<any>target).comments = tokens.filter((token) => token.type?.includes('COMMENT'));
  console.log(await generate(target));
});
