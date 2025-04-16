import { AppWidget } from './widgets/app-widget';
import { ClockWidget } from './widgets/clock-widget';
import { DownloadsWidget } from './widgets/downloads-widget';
import { EntityStateWidget } from './widgets/entity-state-widget';
import { StockWidget } from './widgets/stock-widget';
import { WeatherWidget } from './widgets/weather-widget';

export const HeroCards = () => {
  return (
    <div className="hero-cards flex flex-wrap max-w-[504px] gap-y-4 gap-x-3 text-gray-700 dark:text-gray-300 transform transition-all duration-500 hover:scale-105">
      <StockWidget />
      <AppWidget />
      <AppWidget className="hidden 3xl:block" />
      <WeatherWidget />
      <DownloadsWidget />
      <EntityStateWidget />
      <AppWidget />

      <ClockWidget />
    </div>
  );
};
