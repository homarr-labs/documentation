import { WidgetDefinition } from '@site/src/types';
import { IconCalendar } from '@tabler/icons-react';

export const calendarWidget: WidgetDefinition = {
  icon: IconCalendar,
  name: 'Calendar',
  description:
    'Display events from your integrations in a calendar view within a certain relative time period',
  path: '../../widgets/calendar',
};
