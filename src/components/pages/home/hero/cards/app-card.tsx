import { supportedIntegrations } from '@site/src/constants/supported-integrations';
import { getRndInteger } from '@site/src/tools/math';

export const AppCard = () => {
  const randomApp = supportedIntegrations[getRndInteger(0, supportedIntegrations.length - 1)];
  return (
    <div className={'w-full flex flex-col items-center gap-4 app-card'}>
      <img src={randomApp.iconUrl}
           className="aspect-square w-32 h-32" alt={`${randomApp.name} Icon`} />
      <span className={'text-lg font-bold'}>{randomApp.name}</span>
    </div>
  )
}