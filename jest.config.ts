import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  verbose: true,
  rootDir: './',
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^.*/src$': '<rootDir>/src/index.ts',
    '^.*/env$': '<rootDir>/__mocks__/env.ts',
    '^.*mocks$': '<rootDir>/tests/mocks',
  },
  testMatch: ['**/tests/**/*spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  errorOnDeprecated: true,
  snapshotSerializers: [],
  detectOpenHandles: true,
  forceExit: true,
};

export default config;
