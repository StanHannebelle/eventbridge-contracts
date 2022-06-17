import { getLambdaHandler } from '@swarmion/serverless-contracts';

import { applyHttpMiddlewares } from '@eventbridge-contracts/serverless-helpers';
import { getUserContract } from '@eventbridge-contracts/users-contracts';

const handler = getLambdaHandler(getUserContract)(async event => {
  const { userId } = event.pathParameters;

  await Promise.resolve({ userId });

  return { userId, userName: 'hello_world' };
});

export const main = applyHttpMiddlewares(handler, {
  inputSchema: getUserContract.inputSchema,
  outputSchema: getUserContract.outputSchema,
});
