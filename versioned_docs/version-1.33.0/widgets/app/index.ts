import { WidgetDefinition } from '@site/src/types';
import { IconApps } from '@tabler/icons-react';

export const appWidget: WidgetDefinition = {
  icon: IconApps,
  name: 'App',
  description: 'Embeds an app into the board.',
  path: '../../widgets/app',
  configuration: {
    items: [
      {
        name: 'Choose app',
        description: 'Select one of your created apps.',
        values: 'App from your apps list',
        defaultValue: '-',
      },
      {
        name: 'Open in new tab',
        description: 'Whether to open the link in a new tab.',
        values: { type: 'boolean' },
        defaultValue: 'yes',
      },
      {
        name: 'Show app name',
        description: 'Whether to show the name of the app on the widget.',
        values: { type: 'boolean' },
        defaultValue: 'yes',
      },
      {
        name: 'Show description tooltip',
        description: 'Whether to show the description of the app as a tooltip on hover.',
        values: { type: 'boolean' },
        defaultValue: 'no',
      },
      {
        name: 'Enable status check',
        description: 'Whether to enable the status check for the app.',
        values: { type: 'boolean' },
        defaultValue: 'yes',
      },
    ],
  },
};
