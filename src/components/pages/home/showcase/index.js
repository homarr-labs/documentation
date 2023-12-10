import React from 'react';
import { IconExternalLink } from '@tabler/icons';

import styles from './styles.module.css';

export default function HomepageShowcase() {
  return (
    <section className="mt-36 bg-gray-100 dark:bg-zinc-800 p-8 rounded-xl">
      <div className="flex gap-10">
        <video className={styles.showcaseImage} preload="auto" autoPlay muted>
          <source
            src="https://user-images.githubusercontent.com/30572287/217098893-5880e7de-13d0-42c5-b505-f7921593396f.mp4"
            type="video/mp4"
          />
          <p>
            To view this video please enable JavaScript, and consider upgrading to a web browser
            that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl">Create your own dashboard</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Using Homarr's comprehensible and easy to use visual editor, you can easily create
              your own dashboard - no YAML or JSON involved.
            </p>
          </div>
          <a className="flex gap-2" href="https://demo.homarr.dev/" target={'_blank'}>
            <span>Go to demo</span>
            <IconExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
}
