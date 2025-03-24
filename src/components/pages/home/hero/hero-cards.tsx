import { IconArrowDownRight, IconArrowUpRight, IconCloud, IconWind } from '@tabler/icons-react';
import { ReactNode, useState, useEffect } from 'react';
import clsx from 'clsx';

interface Download {
  filename: string;
  progress: number;
}

const generateRandomDownload = (): Download => {
  return {
    filename: `${Date.now()}-${Math.random().toString(36).slice(-2)}.mkv`,
    progress: 0,
  };
};

export const HeroCards = () => {
  const [downloads, setDownloads] = useState<Download[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDownloads((prev: Download[]) => {
        const filteredPrev = prev.filter(download => download.progress !== 100);

        filteredPrev.forEach((download, index) => {
          download.progress = Math.min(100, download.progress + getRndInteger(0, index < 2 ? 16 : 8));
        });

        if (filteredPrev.length < 3 && filteredPrev.length === prev.length) {
          filteredPrev.push(generateRandomDownload());
        }

        return [...filteredPrev];
      });
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full hero-cards">
      <Card>
        <div className="flex gap-2 justify-center items-center">
          <IconCloud />
          <span className="text-2xl font-bold">10.8°C</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <IconWind />
          <span>5 km/h</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <IconArrowUpRight />
          <span>13.5°C</span>
          <IconArrowDownRight />
          <span>6.4°C</span>
        </div>
      </Card>
      <Card additionalClassNames={'col-span-2 text-xs'} centered={false} padding={false}>
        <table className="mb-0">
          <thead>
          <tr>
            <th className="border-none">File</th>
            <th className="border-none w-full">Progress</th>
          </tr>
          </thead>
          <tbody>
          {downloads.map((file: Download, index: number) => {
            return (
              <tr key={index}>
                <td className="border-none text-nowrap">{file.filename}</td>
                <td className="border-none w-full">
                  <div className="overflow-hidden rounded-xl h-3 w-full bg-zinc-600">
                    <div className="bg-green-600 h-full animated-width" style={{ width: `${file.progress}%` }}></div>
                  </div>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Card>
      <Card additionalClassNames={'col-span-2'} padding={false}>
        <video src={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} muted={true} autoPlay={true} controls={false}></video>
      </Card>
      <Card>
        <div className={"w-full flex flex-col items-center gap-4 app-card"}>
          <img src={"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/prowlarr.svg"} className="aspect-square w-32 h-32" alt={"Prowlarr Icon"} />
          <span className={"text-lg font-bold"}>Prowlarr</span>
        </div>
      </Card>
    </div>
  );
};

const Card = ({ children, additionalClassNames, centered = true, padding = true }: {
  children: ReactNode,
  centered?: boolean;
  padding?: boolean;
  additionalClassNames?: string
}) => {
  const centerStyles = centered ? 'flex gap-3 flex-col justify-center text-center' : undefined;
  return (
    <div
      className={clsx('bg-zinc-800 rounded-xl w-full border-1 border-solid border-zinc-700 text-gray-300', centerStyles, padding ? 'p-2' : undefined, additionalClassNames)}>
      {children}
    </div>
  );
};

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}