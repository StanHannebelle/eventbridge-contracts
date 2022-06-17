import health from './health/config';
import publishEvent from './publishEvent/config';
import readEvent from './readEvent/config';

export const functions = { readEvent, publishEvent, health };
