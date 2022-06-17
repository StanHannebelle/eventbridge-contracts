import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {
    EVENTBRIDGE_BUS_ARN: {
      'Fn::GetAtt': ['EventBridge', 'Arn'],
    },
  },
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/publishEvent',
      },
    },
  ],
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Resource: {
        'Fn::GetAtt': ['EventBridge', 'Arn'],
      },
      Action: ['events:PutEvents'],
    },
  ],
};

export default config;
