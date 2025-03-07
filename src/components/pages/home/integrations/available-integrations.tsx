import { splitToNChunks } from '@site/src/tools/array';
import classes from './available-integrations.module.css';
import { SectionContainer } from '@site/src/components/pages/home/container/section-container';

const icons = [
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/homarr.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/sabnzbd.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/deluge.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/radarr.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/sonarr.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/lidarr.svg',
  'https://cdn.jsdelivr.net/gh/loganmarchione/homelab-svg-assets/assets/pihole.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/dashdot.png',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/overseerr.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/plex.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/jellyfin.svg',
  'https://cdn.jsdelivr.net/gh/loganmarchione/homelab-svg-assets/assets/homeassistant.svg',
  'https://cdn.jsdelivr.net/gh/loganmarchione/homelab-svg-assets/assets/freshrss.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/readarr.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/transmission.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/qbittorrent.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/nzbget.png',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/openmediavault.svg',
  'https://cdn.jsdelivr.net/gh/loganmarchione/homelab-svg-assets/assets/docker.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/jellyseerr.svg',
  'https://cdn.jsdelivr.net/gh/loganmarchione/homelab-svg-assets/assets/adguardhome.svg',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/tdarr.png',
  'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/prowlarr.svg',
];

const countIconGroups = 3;
const animationDurationInSeconds = 12;

export const AvailableIntegrations = () => {
  const arrayInChunks = splitToNChunks(icons, countIconGroups);
  const gridSpan = 12 / countIconGroups;

  return (
    <SectionContainer className={'my-24'}>
      <div className={'md:h-80 w-full dark:bg-neutral-900 p-10 rounded-3xl overflow-hidden relative'}>
        <div className={'flex gap-10 flex-nowrap'}>
          <div className={'md:w-1/2 w-full'}>
            <h2 className={'text-5xl font-extrabold '}>Many integrations built in</h2>
            <p className={'text-base text-gray-500 dark:text-gray-400'}>Homarr has support for tons of your favourite
              applications, tools and websites.</p>
          </div>
          <div className={'rotate-12 w-1/2 hidden md:block argos-ignore'}>
            <div className={'grid gap-12 grid-cols-3'}>
              {Array(countIconGroups)
                .fill(0)
                .map((_, columnIndex) => (
                  <div key={`grid-column-${columnIndex}`} style={{ width: 50 }}>
                    <div
                      className={classes.scrollAnimationContainer}
                      style={{
                        animationDuration: `${animationDurationInSeconds - columnIndex}s`,
                      }}
                    >
                      {arrayInChunks[columnIndex]?.map((icon, index) => (
                        <img className={'rounded'} key={`grid-column-${columnIndex}-scroll-1-${index}`} src={icon}
                             width={50} height={50} />
                      ))}

                      {/* This is used for making the animation seem seamless */}
                      {arrayInChunks[columnIndex]?.map((icon, index) => (
                        <img className={'rounded'} key={`grid-column-${columnIndex}-scroll-2-${index}`} src={icon}
                             width={50} height={50} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

    </SectionContainer>
  );
};