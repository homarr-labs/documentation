import { WidgetConfiguration, WidgetConfigurationItem } from '@site/src/types';

interface WidgetConfigProps {
  configuration: WidgetConfiguration;
}

export const WidgetConfig = (props: WidgetConfigProps) => {
  return (
    <div>
      <ConfigTable configuration={props.configuration} />
    </div>
  );
};

const ConfigTable = (props: WidgetConfigProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Values</th>
          <th>Default value</th>
        </tr>
      </thead>
      <tbody>
        {props.configuration.items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <ConfigValues values={item.values} />
            </td>
            <td>{item.defaultValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ConfigValues = ({ values }: Pick<WidgetConfigurationItem, 'values'>) => {
  if (typeof values === 'string') return <span>{values}</span>;
  if (values.type === 'boolean') return <span>yes / no</span>;
  if (values.type === 'string') return <span>String</span>;
  if (values.type === 'select') {
    return (
      <ul>
        {values.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    );
  }

  const reference = <a href={`#${values.name}`}>{values.name}</a>;
  if (values.type === 'object') return reference;
  if (values.type === 'array') return <span>{reference}[]</span>;
};
