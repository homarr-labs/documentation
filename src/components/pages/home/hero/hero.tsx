import Link from '@docusaurus/Link';
import { IconDownload } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from '../../../../pages/index.module.css';
import { HeroCards } from './hero-cards';

export default function HomeHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      {/* TODO: remove container and add more columns to the grid */}
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1 className="font-extrabold lg:text-7xl text-3xl">A simple, yet<br />powerful dashboard<br />for your server.</h1>
            <p className={'lg:text-2xl text-base'}>
              A sleek, modern dashboard that puts all of your apps and services at your fingertips.
              Control everything in one convenient location. Seamlessly integrates with the
              apps you've added, providing you with valuable information.
            </p>

            <Link
              data-umami-event="Install button"
              className={'button button--secondary button--lg rounded-3xl dark:border-zinc-600 dark:bg-zinc-800'}
              to="/docs/getting-started"
            >
              <div className={'flex items-center gap-3'}>
                <span className={'dark:text-gray-200'}>Install</span>
                <IconDownload className={'dark:text-gray-200'} size={20} />
              </div>
            </Link>
          </div>
          <div className="col lg:block hidden hover-animation">
            <HeroCards />
          </div>
        </div>
      </div>
    </header>
  );
}

