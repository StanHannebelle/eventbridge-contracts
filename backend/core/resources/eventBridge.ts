import { eventBusName } from '@eventbridge-contracts/serverless-configuration';
import { getAttribute } from '@eventbridge-contracts/serverless-helpers';

export const EventBridge = {
  Type: 'AWS::Events::EventBus',
  Properties: { Name: eventBusName },
};

export const EventBridgeArchive = {
  Type: 'AWS::Events::Archive',
  Properties: {
    ArchiveName: 'SlineEvents',
    Description: 'Archive for all internal events',
    SourceArn: getAttribute({ EventBridge }, 'Arn'),
  },
};

export const EventBridgeArn = {
  Value: {
    'Fn::GetAtt': ['EventBridge', 'Arn'],
  },
  Export: {
    Name: '${self:custom.projectName}-EventBridgeArn-${self:provider.stage}',
  },
};

export const EventBridgeName = {
  Value: {
    Ref: 'EventBridge',
  },
  Export: {
    Name: '${self:custom.projectName}-EventBridgeName-${self:provider.stage}',
  },
};
