import {
  getHandlerPath,
  LambdaFunction,
} from '@eventbridge-contracts/serverless-helpers';

const config: LambdaFunction = {
  environment: {
    EVENTBRIDGE_BUS_ARN: {
      'Fn::ImportValue':
        '${self:custom.projectName}-EventBridgeArn-${self:provider.stage}',
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
        'Fn::ImportValue':
          '${self:custom.projectName}-EventBridgeArn-${self:provider.stage}',
      },
      Action: ['events:PutEvents'],
    },
  ],
};

export default config;
