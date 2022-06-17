import {
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
} from '@aws-sdk/client-eventbridge';

import { region } from '@eventbridge-contracts/serverless-configuration';
import { getEnvVariable } from '@eventbridge-contracts/serverless-helpers';

export const params = {
  Entries: [
    {
      Detail: '{ "key1": "value1", "key2": "value2" }',
      DetailType: 'appRequestSubmitted',
      EventBusName: getEnvVariable('EVENTBRIDGE_BUS_ARN'),
      Source: 'com.company.app',
    },
  ],
} as PutEventsCommandInput;
export const ebClient = new EventBridgeClient({ region });

export const main = async (): Promise<string> => {
  console.log('ARN : ', getEnvVariable('EVENTBRIDGE_BUS_ARN'));
  const data = await ebClient.send(new PutEventsCommand(params));
  console.log('Success, event sent; requestID:', data);

  return 'ok';
};
