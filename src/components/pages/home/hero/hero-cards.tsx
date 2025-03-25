import { IconArrowDownRight, IconArrowUpRight, IconCloud, IconWind } from '@tabler/icons-react';
import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { DownloadsCard } from '@site/src/components/pages/home/hero/cards/downloads';
import { StockTrendCard } from '@site/src/components/pages/home/hero/cards/stock-trend';
import { AppCard } from '@site/src/components/pages/home/hero/cards/app-card';
import { ClockCard } from '@site/src/components/pages/home/hero/cards/clock-card';

export const HeroCards = () => {


  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 h-full hero-cards">
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
      <Card>
        <AppCard />
      </Card>
      <Card>
        <AppCard />
      </Card>
      <Card additionalClassNames={'col-span-2 relative'} padding={false} style={{ height: 200 }}>
        <StockTrendCard />
      </Card>
      <Card>
        <AppCard />
      </Card>
      <Card>
        <ClockCard />
      </Card>
    </div>
  );
};

const Card = ({ children, additionalClassNames, centered = true, padding = true, style }: {
  children: ReactNode,
  centered?: boolean;
  padding?: boolean;
  additionalClassNames?: string
  style?: CSSProperties;
}) => {
  const centerStyles = centered ? 'flex gap-3 flex-col justify-center text-center' : undefined;
  return (
    <div
      className={clsx('bg-zinc-800 rounded-xl w-full border-1 border-solid border-zinc-700 text-gray-300', centerStyles, padding ? 'p-2' : undefined, additionalClassNames)}
      style={style}>
      {children}
    </div>
  );
};
