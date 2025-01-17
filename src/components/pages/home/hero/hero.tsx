import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { IconDownload } from '@tabler/icons-react';
import clsx from 'clsx';
import styles from '../../../../pages/index.module.css';

export default function HomeHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1 className="hyphens-auto font-extrabold">A simple, yet<br />powerful dashboard<br />for your server.</h1>
            <p className={'text-2xl'}>
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
          <div className="col">
            <ThemedDevicePreview />
          </div>
        </div>
      </div>
    </header>
  );
}

const ThemedDevicePreview = () => {
  const { colorMode } = useColorMode();

  return (
    <img
      className={styles.heroImage}
      src={`/img/pictures/homarr-devices-preview/compressed/homarr-devices-2d-mockup-flat-shadow-${colorMode}-compressed.webp`}
      style={{
        filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))',
      }}
      alt={'Hero Image'}
    />
  );
};