import React, { useRef } from 'react';

import LeaderLine, { SocketType } from 'leader-line-new';

export const DataflowVisualizationComponent = () => {
  const homarrRef = useRef<HTMLImageElement>(null);
  const sonarrRef = useRef<HTMLImageElement>(null);
  const lidarrRef = useRef<HTMLImageElement>(null);
  const radarrRef = useRef<HTMLImageElement>(null);
  const jellyfinRef = useRef<HTMLImageElement>(null);
  const plexRef = useRef<HTMLImageElement>(null);
  const sabnzbdRef = useRef<HTMLImageElement>(null);

  const items = [
    {
      ref: radarrRef,
      className: 'absolute left-0 top-0',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/radarr.png?raw=true',
      alt: 'Radarr',
      socket: 'right',
      x: 0,
    },
    {
      ref: sonarrRef,
      className: 'absolute left-0 top-1/2 -translate-y-1/2',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/sonarr.png?raw=true',
      alt: 'Sonarr',
      socket: 'right',
      x: 0,
    },
    {
      ref: lidarrRef,
      className: 'absolute left-0 bottom-0',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/lidarr.png?raw=true',
      alt: 'Lidarr',
      socket: 'right',
      x: 0,
    },
    {
      ref: jellyfinRef,
      className: 'absolute right-0 top-1/2 -translate-y-1/2',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/jellyfin.png?raw=true',
      alt: 'Jellyfin',
      socket: 'left',
      x: 100,
    },
    {
      ref: plexRef,
      className: 'absolute right-0 bottom-0',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/plex.png?raw=true',
      alt: 'Plex',
      socket: 'left',
      x: 100,
    },
    {
      ref: sabnzbdRef,
      className: 'absolute right-0 top-0',
      src: 'https://github.com/walkxcode/dashboard-icons/blob/main/png/sabnzbd.png?raw=true',
      alt: 'Sabnzbd',
      socket: 'left',
      x: 100,
    },
  ];

  return (
    <div className={'bg-black/[.10] py-20'}>
      <h2 className={'text-center lg:text-5xl text-3xl font-extrabold mb-24'}>
        No YAML configurations.
        <br />
        Easy and quick to manage integrations.
      </h2>
      <div className="relative max-w-128 h-80 mx-auto animated-dataflow mx-4 sm:mx-5 md:mx-8 lg:mx-auto">
        <img
          ref={homarrRef}
          className={
            'absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 aspect-square object-contain w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20'
          }
          src={'/img/logo.png'}
          alt={'Homarr Logo'}
        />

        {items.map((item) => (
          <React.Fragment key={item.alt}>
            <img
              ref={item.ref}
              src={item.src}
              alt={item.alt}
              // Hover animation to make it pop
              className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${item.className}`}
            />
            <LineTree
              start={item.ref}
              end={homarrRef}
              startSocket={item.socket}
              endSocket={item.socket === 'left' ? 'right' : 'left'}
              x={item.x}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const LineTree = ({
  start,
  end,
  startSocket,
  endSocket,
  x = 0,
}: {
  start: any;
  end: any;
  startSocket: SocketType;
  endSocket: SocketType;
  x?: number;
}) => {
  const line = useRef();
  let leaderLine: LeaderLine;

  React.useEffect(() => {
    const drawLine = () => {
      leaderLine = new LeaderLine(
        start.current,
        LeaderLine.pointAnchor(end.current, { x: `${x}%` }),
        {
          startSocket: startSocket,
          endSocket: endSocket,
          color: 'var(--ifm-color-primary)',
          size: 3,
          dash: {
            animation: true,
          },
        }
      );
    };
    const timer = setInterval(() => {
      if (start.current) {
        clearInterval(timer);
        drawLine();
      }
    }, 5);
    return () => {
      timer && clearInterval(timer);
      leaderLine.remove();
    };
  }, []);

  React.useEffect(() => {
    // scroll and resize listeners could be assigned here
    setTimeout(() => {
      // skip current even loop and wait
      // the end of parent's render call
      if (line.current && end?.current) {
        line.current.position();
      }
    }, 0);
  });

  return null;
};
