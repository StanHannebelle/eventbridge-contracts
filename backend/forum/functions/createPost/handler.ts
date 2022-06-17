import { getLambdaHandler } from '@swarmion/serverless-contracts';

import { createPostContract } from '@eventbridge-contracts/forum-contracts';
import { applyHttpMiddlewares } from '@eventbridge-contracts/serverless-helpers';

export const handler = getLambdaHandler(createPostContract)(async event => {
  const { threadId } = event.pathParameters;
  const { content } = event.body;

  await Promise.resolve({ threadId });

  return {
    id: 'myFirstPost',
    createdAt: '2021-10-25T12:12:00Z',
    editedAt: null,
    content,
    authorId: 'author2',
  };
});

export const main = applyHttpMiddlewares(handler, {
  inputSchema: createPostContract.inputSchema,
});
