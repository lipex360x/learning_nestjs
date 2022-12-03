import type { Config } from 'jest';

const config: Config = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/**/*.config.ts',
    '!<rootDir>/**/*.abstract.ts',
    '!<rootDir>/**/*.helper.ts',
    '!<rootDir>/**/*.constants.ts',
    '!<rootDir>/**/*.dto.ts',
    '!<rootDir>/**/*.entity.ts',
    '!<rootDir>/**/*.interface.ts',
    '!<rootDir>/**/*.mock.ts',
    '!<rootDir>/**/*.module.ts',
    '!<rootDir>/**/*.subscriber.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/src/main.ts',
  ],
  coverageDirectory: './coverage',
  rootDir: './',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  roots: ['<rootDir>', 'src'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: false,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  bail: 0,
  setupFilesAfterEnv: ['<rootDir>/test/global-configs.ts'],
};

export default config;
