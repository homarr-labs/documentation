import { WidgetDefinition } from '@site/src/types';
import { IconTicket } from '@tabler/icons-react';

export const mediaReleasesWidget: WidgetDefinition = {
  icon: IconTicket,
  name: 'Media releases',
  description: 'Display newly added medias or upcoming releases from different integrations',
  path: '../../widgets/media-releases',
};
