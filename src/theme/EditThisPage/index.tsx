import type { WrapperProps } from '@docusaurus/types';
import { Carbon } from '@site/src/components/carbon';
import EditThisPage from '@theme-original/EditThisPage';
import type EditThisPageType from '@theme/EditThisPage';
import type { ReactNode } from 'react';

type Props = WrapperProps<typeof EditThisPageType>;

export default function EditThisPageWrapper(props: Props): ReactNode {
  return (
    <>
      <EditThisPage {...props} />
      <Carbon />
    </>
  );
}
