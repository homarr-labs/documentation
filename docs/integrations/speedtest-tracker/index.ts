import { IntegrationDefinition } from '@site/src/types';

export const speedtestTrackerIntegration: IntegrationDefinition = {
  name: 'Speedtest Tracker',
  description: 'Speedtest Tracker is a self-hosted internet performance tracking application.',
  iconUrl: {
    light: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/speedtest-tracker.svg',
    dark: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/speedtest-tracker.svg',
  },
  path: '../../integrations/speedtest-tracker',
};
