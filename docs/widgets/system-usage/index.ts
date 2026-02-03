import { WidgetDefinition } from '@site/src/types';
import { IconServer } from '@tabler/icons-react';

export const systemUsageWidget: WidgetDefinition = {
  icon: IconServer,
  name: 'System Usage',
  description: 'CPU, Memory, Disk and other hardware usage of your system',
  path: '../../widgets/system-usage',
  configuration: {
    items: [
      {
        name: 'System',
        description: 'Select the system you want to be monitored.',
        values: 'One of the systems from Beszel',
        defaultValue: '-',
      },
      {
        name: 'Visible items',
        description: 'Select which usage items to display in the widget.',
        values: {
          type: 'select',
          options: ['CPU', 'Memory', 'Disk', 'GPU', 'Load', 'Network', 'Temperature', 'Agent'],
        },
        defaultValue: 'All items',
      },
    ],
  },
};
