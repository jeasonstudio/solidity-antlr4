const { createConfig } = require('@umijs/test');
// const transform = [require.resolve('ts-jest'), { diagnostics: false }];
const transform = [
  require.resolve('@swc/jest'),
  {
    jsc: {
      parser: {
        syntax: 'typescript',
        decorators: true,
        dynamicImport: true,
      },
      transform: null,
    },
  },
];

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createConfig(),
  transform: {
    '^.+\\.(t|j)s$': transform,
    '^.+\\.mjs$': transform,
  },
};
