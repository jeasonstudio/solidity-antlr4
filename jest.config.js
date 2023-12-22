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
  testEnvironment: 'node',
  testMatch: ['**/*.(test|spec).(t|j)s'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/config/', '<rootDir>/mock/'],
  testTimeout: 30_000,
  transformIgnorePatterns: ['/node_modules/(?!)'],
  modulePathIgnorePatterns: [],
  setupFiles: [],
  transform: {
    '^.+\\.(t|j)s$': transform,
    '^.+\\.mjs$': transform,
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/(.*)mock(.*)/', '<rootDir>/src/antlr4'],
  coverageReporters: ['json', 'text-summary', 'html'],
};
