import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import { EnumChangefreq } from 'sitemap';

const a11yEmoji = require('@fec/remark-a11y-emoji');

const config: Config = {
  title: 'Homarr documentation',
  tagline: 'A simple yet powerful dashboard for your server.',
  url: 'https://homarr.dev',
  baseUrl: '/',
  favicon: 'img/logo.png',
  // Used for publishing to GitHub Pages
  organizationName: 'ajnart',
  projectName: 'homarr-documentation',
  // Has to be set even if not using translations
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  scripts: [
    {
      src: 'https://umami.homarr.dev/script.js',
      async: true,
      'data-website-id': '2847e7dd-32a1-41f2-a6ed-2d9db17d71b9',
    },
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      'data-website-id': '1e4656f4-abeb-4343-bbae-1d8626f52378',
      'data-project-name': 'Homarr',
      'data-project-color': '#2B2B2B',
      'data-project-logo': 'https://homarr.dev/img/favicon.png',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/homarr-labs/documentation/edit/master',
          remarkPlugins: [a11yEmoji],
          exclude: ['**/custom-widget.mdx'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: EnumChangefreq.WEEKLY,
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    'navbar': {
      'title': 'Homarr',
      'logo': {
        'alt': 'Logo',
        'src': 'img/logo.png',
      },
      'items': [
        {
          label: 'Docs',
          type: 'doc',
          position: 'left',
          docId: 'getting-started/index',
        },
        {
          label: 'More',
          position: 'left',
          to: '/docs/category/more',
        },
        {
          label: 'Blog',
          position: 'left',
          to: '/blog',
        },
        {
          label: 'About us',
          position: 'left',
          to: '/about-us',
        },
        {
          to: 'https://demo.homarr.dev/',
          label: 'Demo',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              to: 'https://discord.com/invite/aCsmEV5RgA',
              label: 'Discord',
            },
            {
              to: 'https://github.com/ajnart/homarr',
              label: 'GitHub',
            },
            {
              to: 'https://www.answeroverflow.com/c/972958686051962910',
              label: 'Answer Overflow',
            },
            {
              to: 'https://crowdin.com/project/homarr',
              label: 'Community translations (Crowdin)',
            },
            {
              to: 'https://www.reddit.com/r/homarr/',
              label: 'Reddit',
            },
            {
              to: 'https://opencollective.com/homarr',
              label: 'OpenCollective'
            }
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation',
              to: '/docs/category/getting-started',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.com/invite/aCsmEV5RgA',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/ajnart/homarr',
            },
            {
              label: 'Donate',
              to: 'https://opencollective.com/homarr'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About us',
              to: '/about-us'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Homarr — <a href="/docs/advanced/community/license">License</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'bash',
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'Homarr, Dashboard, Selfhosted, Hosting, Modules, Open-Source',
      },
    ],
    imageZoom: {
      selector: '.markdown :not(em):not(a) > img',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    'plugin-image-zoom',
    async function tailwindCssPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
