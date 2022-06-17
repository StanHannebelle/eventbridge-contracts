import { jestConfig } from '@eventbridge-contracts/configuration';

export default {
  ...jestConfig,
  moduleDirectories: ['node_modules', '<rootDir>'],
};
