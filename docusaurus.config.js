/* eslint-disable no-undef */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const a11yEmoji = require('@fec/remark-a11y-emoji');

/** @type {import('@docusaurus/types').Config} */
const config = async function createConfig() {
  return {
    title: 'Alparr documentation',
    tagline: 'A simple yet powerful dashboard for your server.',
    url: 'https://homarr.dev',
    baseUrl: '/',
    favicon: 'img/favicon.png',
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
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
            remarkPlugins: [a11yEmoji],
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
            changefreq: 'weekly',
            priority: 0.5,
            ignorePatterns: ['/tags/**'],
            filename: 'sitemap.xml',
          },
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        announcementBar: {
          id: 'updates',
          content:
            '🎉 <b>Homarr\'s authentication update v0.14 has been released!</b> Please <a href="/docs/introduction/installation#updating">update your instance.</a> 🎉',
          backgroundColor: 'var(--homarr-secondary-bg)', // #0e8860
          textColor: 'var(--ifm-heading-color)',
          isCloseable: true,
        },
        navbar: {
          title: 'Homarr',
          logo: {
            alt: 'Homarr Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'about',
              label: 'Documentation',
            },
            {
              to: '/about-us',
              label: 'About us',
            },
            {
              to: '/blog',
              label: 'Blog',
              position: 'left',
            },
            {
              to: 'https://demo.homarr.dev/',
              label: 'Demo',
              position: 'right',
            },
            {
              to: 'https://discord.com/invite/aCsmEV5RgA',
              label: 'Discord',
              position: 'right',
            },
            {
              to: 'https://github.com/ajnart/homarr',
              label: 'GitHub',
              position: 'right',
            },
            {
              to: 'https://www.answeroverflow.com/c/972958686051962910',
              label: 'Answer Overflow',
              position: 'right',
            },
            {
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          links: [
            {
              title: 'Documentation',
              items: [
                {
                  label: 'About',
                  to: '/docs/about',
                },
                {
                  label: 'Installation',
                  to: '/docs/introduction/installation',
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
          copyright: `Copyright © ${new Date().getFullYear()} Homarr — <a href="/docs/community/license">License</a>`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
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
      },
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
};

module.exports = config;
