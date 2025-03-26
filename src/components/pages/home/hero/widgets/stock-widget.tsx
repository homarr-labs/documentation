import { ResponsiveLine } from '@nivo/line';
import { useEffect, useState } from 'react';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { CommonWidgetProps, WidgetCard } from './card';
import clsx from 'clsx';

export const StockWidget = ({ className }: CommonWidgetProps) => {
  const [stockTrend, setStockTrend] = useState<{ x: number; y: number }[]>(generateStockTrend());

  useEffect(() => {
    const interval = setInterval(() => {
      setStockTrend(generateStockTrend());
    }, 15 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const upwardTrend = stockTrend[0].y < stockTrend[stockTrend.length - 1].y;

  return (
    <WidgetCard width={2} className={clsx('!p-0', className)}>
      <div className="absolute top-2 left-2 flex gap-1 font-bold items-center">
        {upwardTrend && <IconTrendingUp size={20} color={'green'} />}
        {!upwardTrend && <IconTrendingDown size={20} color={'red'} />}
        HOMR
      </div>
      <ResponsiveLine
        colors={[upwardTrend ? 'green' : 'red']}
        data={[
          {
            id: 'stock',
            data: stockTrend,
          },
        ]}
        height={128}
        curve={'natural'}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        yScale={{ type: 'linear', min: 'auto' }}
        enableArea={true}
        margin={{ bottom: 8, left: 0, right: 0, top: 8 }}
        axisBottom={null}
        axisLeft={null}
        axisRight={null}
        axisTop={null}
      />
      <div className="absolute bottom-2 right-2 font-bold">{stockTrend[0].y}</div>
    </WidgetCard>
  );
};

const generateStockTrend = () => {
  const data = [];
  let y = 100; // Starting price
  let trend = 1; // 1 for upward trend, -1 for downward trend
  let trendDuration = Math.floor(Math.random() * 10) + 5; // Random trend duration between 5 and 15

  for (let x = 0; x < 100; x++) {
    if (trendDuration === 0) {
      trend = Math.random() > 0.5 ? 1 : -1; // Randomly switch trend
      trendDuration = Math.floor(Math.random() * 10) + 5;
    }

    let change = (Math.random() - 0.5) * 2; // Smaller fluctuations
    y += (change + 0.5) * trend; // Apply trend bias
    trendDuration--;

    data.push({ x, y: parseFloat(y.toFixed(2)) });
  }

  return data;
};
