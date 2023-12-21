const z = require('zod');
const fs = require('fs');

const Constants = {
  GitHub: {
    User: 'ajnart',
    Slug: 'homarr'
  },
  Crowdin: {
    ProjectId: '534422'
  }
};

const schema = z.object({
  HOMARR_DOCUMENTATION_GH_TOKEN: z.string(),
  HOMARR_CROWDIN_TOKEN: z.string()
});

const env = schema.parse(process.env);

const fetchGithubContributors = async () => {
  const url = 'https://api.github.com/repos/ajnart/homarr/contributors';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.HOMARR_DOCUMENTATION_GH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();

  const dataSchema = z.array(z.object({
    login: z.string(),
    avatar_url: z.string().url(),
  }));

  const contributionsData = dataSchema.parse(data);

  fs.writeFileSync('./static/data/contributions.json', JSON.stringify(contributionsData));
}

const fetchCrowdinMembers = async () => {
  const url = `https://crowdin.com/api/v2/projects/${Constants.Crowdin.ProjectId}/members`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.HOMARR_CROWDIN_TOKEN}`
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();

  const dataSchema = z.object({
    data: z.array(z.object({
      data: z.object({
        username: z.string()
      })
    }))
  });

  const contributionsData = dataSchema.parse(data);

  fs.writeFileSync('./static/data/translation-contributions.json', JSON.stringify(contributionsData));
}

fetchGithubContributors();
fetchCrowdinMembers();
