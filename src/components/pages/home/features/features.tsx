import React from 'react';
import {
  IconAccessible,
  IconAdjustments,
  IconDragDrop,
  IconIcons,
  IconKey,
  IconLanguage,
  IconPlug, TablerIcon,
} from '@tabler/icons';

interface Feature {
  icon: TablerIcon,
  title: string,
  content: string;
}

const featureList: Feature[] = [
  {
    icon: IconDragDrop,
    title: 'Easy to use drag and drop system',
    content: 'Using the drag and drop system, you can simply move parts of your dashboard using your mouse or your finger on mobile devices.',
  },
  {
    icon: IconIcons,
    title: 'Over 7000+ icons available',
    content: 'We integrate with many different icon repositories to provide you with high quality and easy to use images.'
  },
  {
    icon: IconPlug,
    title: 'Seamless integrations',
    content: 'Integrate with your favourite applications to display their status or control them'
  },
  {
    icon: IconKey,
    title: 'Authentication system',
    content: 'Protect your data with the built in authentication system'
  },
  {
    icon: IconLanguage,
    title: '26 languages available',
    content: 'Accessible for users in many countries thanks to the community translation program'
  },
  {
    icon: IconAccessible,
    title: 'Accessible for color blind & disabled',
    content: 'Settings to help you navigate and use Homarr'
  },
  {
    icon: IconAdjustments,
    title: 'Detailed settings for customization',
    content: 'Adjust apps and dashboards until you like them with helpful and easy to understand settings'
  }
];

function FeatureComponent(props: Feature) {
  return (
    <div>
      <div className={'flex gap-2 items-center mb-2'}>
        <div className={'rounded bg-gray-100 dark:bg-zinc-800 p-2 pb-0.5 aspect-square'}>
          <props.icon size={20} />
        </div>
        <h3 className="text-lg text-gray-700 dark:text-gray-300 m-0">{props.title}</h3>
      </div>
      <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">{props.content}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-32">
      {featureList.map((props, idx) => (
        <FeatureComponent key={idx} {...props} />
      ))}
    </div>
  );
}
