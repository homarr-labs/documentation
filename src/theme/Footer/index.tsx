import type { WrapperProps } from '@docusaurus/types';
import { Carbon } from '@site/src/components/carbon';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type { ReactNode } from 'react';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <div className='max-w-80 mx-auto lg:absolute lg:bottom-0 lg:right-5 -z-10'>
      <Carbon />
      </div>
      <Footer {...props} />
    </>
  );
}
