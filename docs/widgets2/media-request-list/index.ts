import { WidgetDefinition } from '@site/src/types';
import { IconZoomQuestion } from '@tabler/icons-react';

export const mediaRequestListWidget: WidgetDefinition = {
  icon: IconZoomQuestion,
  name: 'Media Request List',
  description: 'See a list of all media requests from your integration',
  path: '../../widgets/media-request-list',
};
