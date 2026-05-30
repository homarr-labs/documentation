import { WidgetDefinition } from '@site/src/types';
import { IconShieldLock } from '@tabler/icons-react';

export const gluetunWidget: WidgetDefinition = {
  icon: IconShieldLock,
  name: 'Gluetun',
  description: 'Live VPN status from one or more Gluetun integrations',
  path: '../../widgets/gluetun',
};
