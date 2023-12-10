import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { IconAlignBoxLeftBottom, IconBrandDiscord, IconHome, IconIcons, IconLicense, IconPlug, IconSearch } from '@tabler/icons';

const featureList = [
  {
    title: 'Organize your applications',
    image: 'img/pictures/apps/screenshot-apps-light.jpg',
    imageDark: 'img/pictures/apps/screenshot-apps-dark.jpg',
    description:
      'Add your selfhosted applications or favorite websites to your dashboard. You can drag them around freely to organize it how you like.',
  },
  {
    title: 'Seamless integrations',
    image: 'img/pictures/widgets/widget-light.jpg',
    imageDark: 'img/pictures/widgets/widget-dark.jpg',
    description: <>Homarr can integrate to many popular applications to enhance your experience.</>,
  },
  {
    title: 'Customizable, accessible and multi-lingual',
    image: 'img/pictures/lang/screenshot-customization-light.jpg',
    imageDark: 'img/pictures/lang/screenshot-customization-dark.jpg',
    description: 'Bonjour, こんにちは, Γειά σου! Homarr is here for everyone and supports 23 languages.',
  },
];

function Feature({ image, imageDark, title, description }) {
  const { colorMode } = useColorMode();

  const imageSrc = colorMode === 'dark' ? imageDark : image;

  return (
    <div className="group relative shadow rounded bg-gray-100 dark:bg-zinc-800 p-3">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded group-hover:opacity-75 lg:h-48 border border-gray-300 dark:border-zinc-900 border-solid">
        <img
          src={imageSrc}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm text-gray-700 dark:text-gray-300">{title}</h3>
        <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-16">
        {featureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>

      <ul role="list" className="mt-8 space-y-8 text-gray-600">
        <li className="flex gap-x-3">
          <IconPlug className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-900 dark:text-red-500 pr-2">Over 15 integrations.</strong>
            <span className='dark:text-gray-400'>Control and monitor your network directly from Homarr.</span>
          </span>
        </li>
        <li className="flex gap-x-3">
          <IconAlignBoxLeftBottom className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-900 dark:text-red-500 pr-2">Widgets.</strong>
            <span className='dark:text-gray-400'>Use integrations to display data and control apps, including <code>Radarr</code>, <code>Sonarr</code>, <code>PiHole</code>, <code>Dash.</code>, popular Torrent & Usenet clients and many more</span>
          </span>
        </li>
        <li className="flex gap-x-3">
          <IconLicense className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-900 dark:text-red-500 pr-2">Open Source.</strong>
            <span className='dark:text-gray-400'>The entire source code is public and can be viewed, modified and distributed. Commercial usage is also allowed, but we also appreciate donations to cover our infrastructure cost.</span>
          </span>
        </li>
        <li className="flex gap-x-3">
          <IconIcons className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-900 dark:text-red-500 pr-2">Over 7000 beautiful icons.</strong>
            <span className='inline-flex items-center gap-2 dark:text-gray-400'>Our library of icons features many popular websites, applications but also general icons like <IconHome size="1rem" /> and <IconBrandDiscord size="1rem" /></span>
          </span>
        </li>
        <li className="flex gap-x-3">
          <IconSearch className="mt-1 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gray-900 dark:text-red-500 pr-2">Quick search.</strong>
            <span className='inline-flex items-center gap-2 dark:text-gray-400'>Search through your apps and supported integrations in an instant</span>
          </span>
        </li>
      </ul>
    </section>
  );
}
