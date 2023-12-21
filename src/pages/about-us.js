import {
  IconCode,
  IconDashboard,
  IconDatabase,
  IconDragDrop,
  IconLock,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import { ContributorList } from '@site/src/components/pages/about/contributors/contributor-list';

const roadmap = [
  {
    icon: <IconDashboard size="1rem" className="text-red-400" strokeWidth={1.5} />,
    title: 'MVP Dashboard',
    subtitle: 'Released in early 2022',
    content: 'A mininmal dashboard solution for creating very basic dashboards with apps on it.',
    reached: true,
  },
  {
    icon: <IconDragDrop size="1rem" className="text-red-400" strokeWidth={1.5} />,
    title: 'Drag and Drop System',
    subtitle: 'Released in 0.11.0',
    content:
      'A complete overhaul of the dashboard system, in which we implemented Gridstack as a drag and drop library.',
    reached: true,
  },
  {
    icon: <IconCode size="1rem" strokeWidth={1.5} />,
    title: 'Technical debt and tRPC migration',
    subtitle: 'Released in 0.13.0',
    content:
      'Homarr has grown in complexity and the code is starting to get a problem. We often hit a border, where it\'s getting harder to implement something, than it actually should be. This is also known as technical debt. We have learned many new things in our journey and have decided to migrate to tRPC. That will clean up code and enable us for faster development.',
    reached: true,
  },
  {
    icon: <IconLock size="1rem" strokeWidth={1.5} />,
    title: 'Authentication',
    subtitle: 'Due to release in 0.14',
    reached: true,
    content:
      'A part of Homarr is still not secure enough to be exposed to the internet. Existing solutions for authentication exist, but are incredibly cumbersome. We\'ll implement a basic authentication solution using the new tRPC APIs and remove the old legacy systems.',
  },
  {
    icon: <IconDatabase size="1rem" strokeWidth={1.5} />,
    title: 'Breaking: Migrate from JSON to Sqlite',
    subtitle: 'Due to release in 0.15',
    badge: 'In progress',
    content:
      'Homarr still uses an unstructured JSON file behind the scenes. This adds much complexity regarding types, errors, exceptions and relationships. In 0.15, we\'ll migrate to a RDBMS. After that, JSON will no longer be supported.',
  },
  {
    icon: <IconUser size="1rem" strokeWidth={1.5} />,
    title: 'Fine grained permissions',
    subtitle: 'Due to release in 0.15.1',
    content:
      'In this version we\'ll add more configurations to the adminstration section and a more complex permission system for users.',
  },
];

export default function AboutUs() {
  return (
    <Layout title="Roadmap">
      <main className="mx-auto w-full md:w-2/3 ps-10 pr-10 mt-10">
        <h1 className="text-5xl font-extrabold">About us</h1>
        <p className="text-lg text-gray-500">
          Homarr is a community driven open source project that is being maintained by volunteers.
        </p>

        <h2 className={'mt-10'}>Code contributions</h2>

        <ContributorList />

        <h2 className="text-2xl mt-16 mb-10">Roadmap</h2>

        <ol class="relative border-l border-0 border-gray-200 dark:border-gray-700 border-solid">
          {roadmap.map((item) => (
            <li class="mb-10 ml-6">
              <span
                class={clsx(
                  'absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-opacity-10 ',
                  item.reached ? 'bg-red-100 dark:ring-red-500 dark:bg-red-900' : 'bg-gray-100 dark:bg-zinc-600',
                )}
              >
                {item.icon}
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                {item.badge && (
                  <span
                    class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                    {item.badge}
                  </span>
                )}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.subtitle}
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}
