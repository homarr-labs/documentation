import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return <div
    className={`container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90rem] w-full py-8 ${className || ''}`}>{children}</div>;
};