import { getTrigger } from '@swarmion/serverless-contracts';

import { createPostContract } from '@eventbridge-contracts/forum-contracts';
import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(createPostContract)],
};

export default config;
