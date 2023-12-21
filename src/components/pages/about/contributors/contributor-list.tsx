import { useEffect, useState } from 'react';

type Contributor = {
  login: string;
  avatar_url: string;
};

export const ContributorList = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    fetch('./data/contributions.json').then(async (response) => {
      const data = await response.json();
      setContributors(data);
    });
  }, []);

  return (
    <div className={'flex gap-3'}>
      {contributors.map(contributor => (
        <span>{contributor.login}</span>
      ))}
    </div>
  );
};