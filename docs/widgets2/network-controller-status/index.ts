import { WidgetDefinition } from '@site/src/types';
import { IconTopologyFull } from '@tabler/icons-react';

export const networkControllerStatusWidget: WidgetDefinition = {
  icon: IconTopologyFull,
  name: 'Network Status',
  description: 'Display connected devices on a network',
  path: '../../widgets/network-controller-status',
};
