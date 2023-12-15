const { createConfig } = require('@umijs/test');
const transform = [require.resolve('ts-jest'), { diagnostics: false }];

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createConfig(),
  transform: {
    '^.+\\.(t|j)s$': transform,
    '^.+\\.mjs$': transform,
  },
};
