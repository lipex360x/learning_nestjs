import type { Config } from 'jest';
import { resolve } from 'path';

import defaultConfig from './jest.config';

const config: Config = {
  ...defaultConfig,

  globalSetup: resolve(__dirname, './test/configs/setup.ts'),
  globalTeardown: resolve(__dirname, './test/configs/teardown.ts'),
  preset: 'ts-jest',
  roots: ['<rootDir>/test/integration'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};

export default config;
