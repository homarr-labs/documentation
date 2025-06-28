import { WidgetDefinition } from '@site/src/types';
import { IconMessage, IconTransform } from '@tabler/icons-react';

export const mediaTranscodingWidget: WidgetDefinition = {
  icon: IconTransform,
  name: 'Media transcoding',
  description: 'Statistics, current queue and worker status of your media transcoding',
  path: '../../widgets/media-transcoding',
};
