import { IntegrationDefinition } from '@site/src/types';
import { DocsHeader } from '../ui/header';

interface IntegrationHeaderProps {
  integration: IntegrationDefinition;
  categories: string[];
}

export const IntegrationHeader = (props: IntegrationHeaderProps) => {
  return (
    <DocsHeader
      title={props.integration.name}
      description={props.integration.description}
      icon={<img src={props.integration.iconUrl} width={48} height={48} />}
      categories={props.categories}
    />
  );
};
