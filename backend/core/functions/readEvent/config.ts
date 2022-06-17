import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      eventBridge: {
        eventBus: {
          'Fn::GetAtt': ['EventBridge', 'Name'],
        },
        pattern: {
          source: ['com.company.app'],
        },
      },
    },
  ],
};

export default config;
