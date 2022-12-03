import type { Config } from 'jest';
import { resolve } from 'path';

import defaultConfig from 'jest.config';

const config: Config = {
  ...defaultConfig,

  globalSetup: resolve(
    __dirname,
    './src/shared/configs/jest-testcontainer/setup.ts',
  ),
  globalTeardown: resolve(
    __dirname,
    './src/shared/configs/jest-testcontainer/teardown.js',
  ),
  preset: 'ts-jest',
  roots: ['<rootDir>/test/integration'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};

export default config;
