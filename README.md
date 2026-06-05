# Homarr Documentation

This is the documentation about homarr (Docuzaurus)

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting app.

### Search (Algolia DocSearch)

Search uses the `Docusaurus` Algolia index (crawler `cd77a285-2756-4557-bf21-ee703748df15`). A separate `markdown` index is built for [LLM markdown indexing](https://www.algolia.com/doc/guides/algolia-ai/askai/guides/markdown-indexing).

Crawler reference config: [`docsearch.config.js`](docsearch.config.js).

DocSearch-managed apps often cannot edit the crawler in the dashboard. To update the crawler, email [DocSearch support](https://docsearch.algolia.com/docs/ask-help/) with `docsearch.config.js` and request a full recrawl of `https://homarr.dev`.

**GitHub secrets** for post-deploy recrawls (from your DocSearch onboarding email):

| Secret | Value |
| --- | --- |
| `ALGOLIA_CRAWLER_ID` | `cd77a285-2756-4557-bf21-ee703748df15` |
| `ALGOLIA_CRAWLER_USER_ID` | Crawler User ID from DocSearch email |
| `ALGOLIA_CRAWLER_API_KEY` | Crawler API Key from DocSearch email |

The [algolia-recrawl workflow](.github/workflows/algolia-recrawl.yaml) triggers after each production deploy.

**Verify search health:**

```
pnpm verify:search
```

Checks the `Docusaurus` and `markdown` indices, expected queries, and stale `/docs/next/` URLs. Re-run after a recrawl finishes.
