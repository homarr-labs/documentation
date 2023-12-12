import clsx from 'clsx';
import styles from '../../../../pages/index.module.css';
import Link from '@docusaurus/Link';
import { IconDownload, IconInfoCircle } from '@tabler/icons';
import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function HomeHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.hero)}>
      <div className="container" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col">
            <h1 className='hyphens-auto'>A simple, yet<br/>powerful dashboard<br/>for your server.</h1>
            <p>
              Simplify the management of your server with Homarr - a sleek, modern dashboard that
              puts all of your apps and services at your fingertips. With Homarr, you can access and
              control everything in one convenient location. Homarr seamlessly integrates with the
              apps you've added, providing you with valuable information and giving you complete
              control. Installation is a breeze, and Homarr supports a wide range of deployment
              methods.
            </p>

            <div className={styles.heroButtons}>
              <Link
                data-umami-event="Install button"
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                to="/docs/getting-started/introduction/installation"
              >
                Install
                <IconDownload size={20} />
              </Link>
            </div>

            <div className={clsx(styles.heroButtons, styles.shieldBadges)}>
              <Link to="https://github.com/ajnart/homarr">
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
              </Link>
              <Link to="https://discord.com/invite/aCsmEV5RgA">
                <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
              </Link>
            </div>
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
      alt={"Hero Image"}
    />
  );
};