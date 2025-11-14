import { themes as prismThemes } from "prism-react-renderer";

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Official ShopWP Plugin Documentation",
  tagline: "Sell Shopify products on WordPress",
  url: "https://docs.wpshop.io",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shopwp", // Usually your GitHub org/user name.
  projectName: "shopwp", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
          routeBasePath: "/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // scripts: ['https://wpshop.io/testing/shopwp-components.js'],
  plugins: [
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          Utils:
            "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/src/utils",
          Api: "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/src/api",
          Common:
            "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/src/common",
          Hooks:
            "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/src/hooks",
          Blocks:
            "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/src/blocks",
          Components:
            "/Users/andrew/_www/shopwp-docs/node_modules/@shopwp/components/index.js",
        },
      },
    ],
  ],
  themeConfig: {
    image: "https://wpshop.io/assets/banners/shopwp-banner-og-white.jpg",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      logo: {
        alt: "ShopWP Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark-mode.svg",
      },
      items: [
        {
          value:
            '<p class="version-num"><span class="num">v8.11.4</span><span class="emoji">🎉</span></p>',
          type: "html",
          position: "left",
        },
        {
          href: "https://wpshop.io",
          label: "https://wpshop.io",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs Links",
          items: [
            {
              label: "Installing",
              to: "/getting-started/installing",
            },
            {
              label: "Connecting",
              to: "/getting-started/connecting",
            },
            {
              label: "Syncing",
              to: "/getting-started/syncing",
            },
            {
              label: "Displaying",
              to: "/getting-started/displaying",
            },
            {
              label: "Requirements",
              to: "/getting-started/requirements",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github",
              href: "https://github.com/shopwp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/wpshopify",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/c/WPShopify",
            },
            {
              label: "Slack",
              href: "https://wpshop.io/purchase",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              href: "https://wpshop.io/purchase",
              label: "Pricing",
            },
            {
              label: "Plugin Extensions",
              href: "https://wpshop.io/extensions",
            },
            {
              href: "https://wpshop.io/features",
              label: "Demo",
            },
            {
              href: "https://wpshop.io/faq",
              label: "FAQ",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ShopWP.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["css", "php"],
    },
    algolia: {
      appId: "7K79W0TUM3",
      apiKey: "6804324fe7ecb5a9de575a3daabcb7cc",
      indexName: "wpshop",
      insights: true,
      contextualSearch: false,
      searchParameters: {},
      searchPagePath: "search",
    },
  },
};
