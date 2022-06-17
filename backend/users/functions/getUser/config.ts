import { getTrigger } from '@swarmion/serverless-contracts';

import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';
import { getUserContract } from '@eventbridge-contracts/users-contracts';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(getUserContract)],
};

export default config;
