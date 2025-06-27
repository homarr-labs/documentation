import { IconExternalLink, TablerIcon } from '@tabler/icons-react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface IntegrationWidgetsProps {
  widgets: {
    icon: TablerIcon;
    name: string;
    description: string;
    url: string;
  }[];
}

export const IntegrationWidgets = ({ widgets }: IntegrationWidgetsProps) => {
  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      <h2 className="mb-0">Widgets & Capabilities</h2>

      <div className="flex flex-col gap-2">
        {widgets.map((widget) => (
          <div
            key={widget.name}
            className="flex gap-6 rounded-xl border border-solid dark:border-[#333] border-[#e5e7eb] p-4 shadow-sm w-full items-center justify-between"
          >
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 flex justify-center items-center bg-red-500 bg-opacity-10 rounded-md">
                <widget.icon size={24} stroke={1.5} className="stroke-red-500" />
              </div>

              <div className="flex flex-col gap-0">
                <span className="text-base font-bold">{widget.name}</span>
                <span className="text-sm dark:text-[#999999] text-[#696969]">
                  {widget.description}
                </span>
              </div>
            </div>

            <a
              href={widget.url}
              className="border border-solid border-[#e5e7eb] dark:border-[#333] p-2 py-1 rounded-md gap-2 flex justify-center items-center hover:no-underline hover:bg-slate-100 dark:hover:bg-gray-800"
            >
              <IconExternalLink size={16} stroke={1.5} className="dark:stroke-white stroke-black" />
              <span className="dark:text-white text-black font-medium text-sm">Details</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
