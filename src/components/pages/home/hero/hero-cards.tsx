import { IconArrowDownRight, IconArrowUpRight, IconCloud, IconWind } from '@tabler/icons-react';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { DownloadsCard } from '@site/src/components/pages/home/hero/cards/downloads';
import { StockTrendCard } from '@site/src/components/pages/home/hero/cards/stock-trend';

export const HeroCards = () => {


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
        <DownloadsCard />
      </Card>
      <Card additionalClassNames={'col-span-2 relative'} padding={false}>
        <StockTrendCard />
      </Card>
      <Card>
        <div className={'w-full flex flex-col items-center gap-4 app-card'}>
          <img src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/prowlarr.svg'}
               className="aspect-square w-32 h-32" alt={'Prowlarr Icon'} />
          <span className={'text-lg font-bold'}>Prowlarr</span>
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
