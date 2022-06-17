import { getTrigger } from '@swarmion/serverless-contracts';

import { getThreadWithPostsContract } from '@eventbridge-contracts/forum-contracts';
import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(getThreadWithPostsContract)],
};

export default config;
