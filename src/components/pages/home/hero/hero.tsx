import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { IconDownload } from '@tabler/icons';
import clsx from 'clsx';
import styles from '../../../../pages/index.module.css';

export default function HomeHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1 className="hyphens-auto">A simple, yet<br />powerful dashboard<br />for your server.</h1>
            <p>
              Simplify the management of your server with Homarr - a sleek, modern dashboard that
              puts all of your apps and services at your fingertips. With Homarr, you can access and
              control everything in one convenient location. Homarr seamlessly integrates with the
              apps you've added, providing you with valuable information and giving you complete
              control. Installation is a breeze, and Homarr supports a wide range of deployment
              methods.
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