import React, { useRef } from 'react';

import LeaderLine, { SocketType } from 'leader-line-new';

export const DataflowVisualizationComponent = () => {
  const homarrRef = useRef();
  const sonarrRef = useRef();
  const lidarrRef = useRef();
  const radarrRef = useRef();
  const jellyfinRef = useRef();
  const plexRef = useRef();
  const sabnzbdRef = useRef();

  return (
    <div>
      <h2 className={'text-center text-5xl font-extrabold mb-5'}>Connect your infrastructure</h2>
      <p className={'text-center mb-10 text-gray-500 dark:text-gray-400'}>Homarr integrates seamlessly with your
        favourite tools and
        applications</p>

      <div className="relative w-80 h-80 mx-auto">
        <img ref={homarrRef} className={'absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'}
             src={'/img/logo.png'}
             alt={'Homarr Logo'} width={55}
             height={40} />
        <img ref={radarrRef} className={'absolute left-0 top-0'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/radarr.png?raw=true'}
             alt={'Radarr'}
             width={40} height={40} />
        <img ref={sonarrRef} className={'absolute left-0 top-1/2 -translate-y-1/2'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/sonarr.png?raw=true'}
             alt={'Sonarr'}
             width={40} height={40} />
        <img ref={lidarrRef} className={'absolute left-0 bottom-0'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/lidarr.png?raw=true'}
             alt={'Lidarr'}
             width={40} height={40} />

        <img ref={jellyfinRef} className={'absolute right-0 top-1/2 -translate-y-1/2'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/jellyfin.png?raw=true'}
             alt={'Jellyfin'}
             width={40} height={40} />

        <img ref={plexRef} className={'absolute right-0 bottom-0'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/plex.png?raw=true'}
             alt={'Plex'}
             width={40} height={40} />

        <img ref={sabnzbdRef} className={'absolute right-0 top-0'}
             src={'https://github.com/walkxcode/dashboard-icons/blob/main/png/sabnzbd.png?raw=true'}
             alt={'Sabnzbd'}
             width={40} height={40} />

        <LineTree start={sonarrRef} end={homarrRef} startSocket={'right'} endSocket={'left'} />
        <LineTree start={radarrRef} end={homarrRef} startSocket={'right'} endSocket={'left'} />
        <LineTree start={lidarrRef} end={homarrRef} startSocket={'right'} endSocket={'left'} />
        <LineTree start={plexRef} end={homarrRef} startSocket={'left'} endSocket={'right'} x={100} />
        <LineTree start={jellyfinRef} end={homarrRef} startSocket={'left'} endSocket={'right'} x={100} />
        <LineTree start={sabnzbdRef} end={homarrRef} startSocket={'left'} endSocket={'right'} x={100} />

      </div>

    </div>
  );
};

export const LineTree = ({ start, end, startSocket, endSocket, x = 0 }: {
  start: any,
  end: any,
  startSocket: SocketType,
  endSocket: SocketType,
  x?: number
}) => {
  const line = useRef();
  React.useEffect(() => {
    const drawLine = () => {
      new LeaderLine(
        start.current,
        LeaderLine.pointAnchor(end.current, { x: `${x}%` }),
        {
          startSocket: startSocket,
          endSocket: endSocket,
          color: 'var(--ifm-color-primary)',
          size: 5,
          dash: {
            animation: true,
          },
        });
    };
    const timer = setInterval(() => {
      if (start.current) {
        clearInterval(timer);
        drawLine();
      }
    }, 5);
    return () => {
      timer && clearInterval(timer);
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