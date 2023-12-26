/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.(test|spec).(t|j)s'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/config/', '<rootDir>/mock/'],
  testTimeout: 30_000,
  transformIgnorePatterns: ['/node_modules/(?!)'],
  modulePathIgnorePatterns: [],
  setupFiles: [],
  transform: {
    '^.+\\.m?(t|j)s$': [
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
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/(.*)mock(.*)/', '<rootDir>/src/antlr4'],
  coverageReporters: ['json', 'text', 'text-summary', 'html', 'cobertura'],
};
