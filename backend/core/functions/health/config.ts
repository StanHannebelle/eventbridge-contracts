import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/health',
      },
    },
  ],
};

export default config;
