import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import { EnumChangefreq } from 'sitemap';

const a11yEmoji = require('@fec/remark-a11y-emoji');

const config: Config = {
  title: 'Homarr documentation',
  tagline: 'A simple yet powerful dashboard for your server.',
  url: 'https://alparr.app',
  baseUrl: '/',
  favicon: 'img/alparr.png',
  // Used for publishing to GitHub Pages
  organizationName: 'ajnart',
  projectName: 'alarr-documentation',
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
      src: 'http://static.160.216.69.159.clients.your-server.de:3100/script.js',
      async: true,
      'data-website-id': 'b75387c3-6ed4-41ec-8338-fce561f1fef2',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
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
        'src': 'img/alparr.png',
      },
      'items': [
        {
          label: 'Getting started',
          type: 'doc',
          position: 'left',
          docId: 'getting-started/introduction/prerequisites',
        },
        {
          label: 'Dashboards',
          type: 'doc',
          position: 'left',
          docId: 'dashboards/apps/index',
        },
        {
          label: 'Management',
          type: 'doc',
          position: 'left',
          docId: 'management/index',
        },
        {
          label: 'Configuration',
          type: 'doc',
          position: 'left',
          docId: 'configuration/customizations/icons',
        },
        {
          'to': '/about-us',
          'label': 'About us',
          'position': 'left',
        },
        {
          'to': '/blog',
          'label': 'Blog',
          'position': 'left',
        },
        {
          'to': 'https://demo.homarr.dev/',
          'label': 'Demo instance',
          'position': 'right',
        },
        {
          'type': 'dropdown',
          'label': 'Community',
          'position': 'right',
          'items': [
            {
              'to': 'https://discord.com/invite/aCsmEV5RgA',
              'label': 'Discord',
            },
            {
              'to': 'https://github.com/ajnart/homarr',
              'label': 'GitHub',
            },
            {
              'to': 'https://www.answeroverflow.com/c/972958686051962910',
              'label': 'Answer Overflow',
            },
            {
              to: 'https://crowdin.com/project/homarr',
              label: 'Community translations (Crowdin)',
            },
            {
              to: 'https://www.reddit.com/r/homarr/',
              label: 'Reddit',
            },
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
              to: '/docs/getting-started/introduction/installation',
            },
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
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Homarr — <a href="/docs/configuration/community/license">License</a>`,
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
      selector: '.markdown :not(em) > img',
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
