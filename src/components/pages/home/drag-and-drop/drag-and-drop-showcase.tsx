import { useColorMode } from '@docusaurus/theme-common';
import { SectionContainer } from '@site/src/components/pages/home/container/section-container';
import { IconClick } from '@tabler/icons-react';
import videoDark from './showcase-dark.mp4';
import videoLight from './showcase-light.mp4';

export const DragAndDropShowcase = () => {
  const { colorMode } = useColorMode();
  const video = colorMode === 'dark' ? videoDark : videoLight;
  return (
    <div className="py-16 md:py-24 lg:py-32">
      <SectionContainer className="relative max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12">
          Easy setup using drag and drop
        </h2>
        
        <div className="absolute top-0 right-0 translate-x-6 translate-y-8 hidden lg:block animate-pulse">
          <IconClick size={120} className="text-primary-500 opacity-70" />
        </div>
        
        <div className="rounded-3xl overflow-hidden border-4 md:border-8 border-red-500 dark:border-red-600 border-solid shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" 
             style={{ aspectRatio: '17.6/9' }}>
          <video 
            className="w-full" 
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      </SectionContainer>
    </div>
  );
};