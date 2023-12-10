import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import {
  IconAlignBoxLeftBottom,
  IconBrandDiscord,
  IconHome,
  IconIcons,
  IconLicense,
  IconPlug,
  IconSearch,
  IconApps, IconDragDrop, IconKey,
} from '@tabler/icons';

const featureList = [
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
  }
];

function Feature(props) {
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
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-16">
      {featureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
