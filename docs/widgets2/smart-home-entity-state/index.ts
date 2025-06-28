import { WidgetDefinition } from '@site/src/types';
import { IconBinaryTree } from '@tabler/icons-react';

export const smartHomeEntityStateWidget: WidgetDefinition = {
  icon: IconBinaryTree,
  name: 'Entity State',
  description: 'Display the state of an entity and toggle it optionally',
  path: '../../widgets/smart-home-entity-state',
};
