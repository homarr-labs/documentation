import { WidgetDefinition } from '@site/src/types';
import { IconVideo } from '@tabler/icons-react';

export const mediaServerWidget: WidgetDefinition = {
  icon: IconVideo,
  name: 'Current media server streams',
  description: 'Show the current streams on your media servers',
  path: '../../widgets/media-server',
};
