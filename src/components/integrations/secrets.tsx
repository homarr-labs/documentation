import { IconKey, IconUser, TablerIcon } from '@tabler/icons-react';
import Alert from '@theme/Admonition';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import { ReactNode } from 'react';

const secretKinds = {
  apiKey: {
    name: 'API Key',
    description: 'API Key from the service for authentication.',
    icon: IconKey,
  },
  username: {
    name: 'Username',
    description: 'Account username for authentication.',
    icon: IconUser,
  },
  password: {
    name: 'Password',
    description: 'Account password for authentication.',
  },
};

type SecretKind = keyof typeof secretKinds;

interface IntegrationSecretsProps {
  secrets: {
    tabLabel?: string;
    credentials: SecretKind[];
    steps: ReactNode[];
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
  }[];
}

export const IntegrationSecrets = ({ secrets }: IntegrationSecretsProps) => {
  return (
    <div className="flex flex-col gap-4 mt-6 w-full">
      <h2 className="mb-0">Secrets</h2>

      <div className="flex gap-6 rounded-xl border border-solid dark:border-[#333] border-[#e5e7eb] shadow-sm w-full items-center justify-between [&>*]:w-full">
        <Tabs className="[&>li]:w-full [&>li]:justify-center">
          {secrets.map((secret) => {
            const key = secret.credentials.join('-');
            const Icon =
              secret.credentials.map((value) => secretKinds[value]).find((value) => 'icon' in value)
                ?.icon || IconKey;
            const tabLabel =
              secret.tabLabel ??
              secret.credentials.map((value) => secretKinds[value].name).join(' & ');

            return (
              <TabItem
                key={key}
                label={
                  <div className="flex gap-2 items-center">
                    <Icon size={20} stroke={1.5} />
                    <span>{tabLabel}</span>
                  </div>
                }
                className="w-100"
                value={key}
              >
                <div className="px-4 w-full">
                  <table className="mb-0 w-full">
                    <tr>
                      <th className="text-start min-w-32">Name</th>
                      <th className="text-start w-full">Description</th>
                    </tr>
                    {secret.credentials.map((credential) => {
                      const kind = secretKinds[credential];
                      return (
                        <tr key={credential}>
                          <td>
                            <div>{kind.name}</div>
                          </td>
                          <td>{kind.description}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </TabItem>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};
