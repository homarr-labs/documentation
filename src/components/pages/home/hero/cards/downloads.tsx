import { useEffect, useState } from 'react';

export const DownloadsCard = () => {
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
  );
};

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

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
