import { IconZoomQuestion } from '@tabler/icons-react';
import { Badge } from '../ui/badge';

interface IntegrationHeaderProps {
  title: string;
  description: string;
  iconUrl: string;
  categories: string[];
}

export const IntegrationHeader = (props: IntegrationHeaderProps) => {
  return (
    <div className="flex gap-4 mt-4">
      <img src={props.iconUrl} width={48} height={48} />

      <div>
        <div className="flex gap-4 items-center">
          <h1 className="!mb-0 text-4xl">{props.title}</h1>
          <div className="flex gap-2">
            {props.categories.map((category) => (
              <Badge>{category}</Badge>
            ))}
          </div>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
