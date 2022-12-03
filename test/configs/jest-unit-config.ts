import type { Config } from 'jest';

import defaultConfig from 'jest.config';

const config: Config = {
  ...defaultConfig,
  roots: ['<rootDir>/test/unit'],
};

export default config;
