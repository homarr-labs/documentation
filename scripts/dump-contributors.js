const z = require('zod');
const fs = require('fs');

const schema = z.object({
  HOMARR_DOCUMENTATION_GH_TOKEN: z.string()
});

const env = schema.parse(process.env);

const url = 'https://api.github.com/repos/ajnart/homarr/contributors';
const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${env.HOMARR_DOCUMENTATION_GH_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
};

fetch(url, options).then(async (response) => {
  const data = await response.json();

  const dataSchema = z.array(z.object({
    login: z.string(),
    avatar_url: z.string().url(),
  }));

  const contributionsData = dataSchema.parse(data);

  fs.writeFileSync('./static/data/contributions.json', JSON.stringify(contributionsData));
});