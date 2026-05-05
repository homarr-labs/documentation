import { ReactNode } from 'react';

interface BrowserWindowProps {
  url: string;
  children: ReactNode;
}

interface BrowserWindow {
  (props: BrowserWindowProps): JSX.Element;
}

const BrowserWindow = ({ url, children }: BrowserWindowProps) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden my-4">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 px-3 py-1 rounded border border-gray-300 dark:border-gray-600">
            {url}
          </span>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
