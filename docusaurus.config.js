const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'ShopWP Docs',
	tagline: 'Sell and build custom Shopify experiences on WordPress',
	url: 'https://shopwp.io',
	baseUrl: '/',
	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'shopwp', // Usually your GitHub org/user name.
	projectName: 'shopwp', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
					routeBasePath: '/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
			},
			navbar: {
				logo: {
					alt: 'ShopWP Logo',
					src: 'img/logo.svg',
					srcDark: 'img/logo-dark-mode.svg',
				},
				items: [
					{
						href: 'https://wpshop.io/features',
						label: 'Demo',
						position: 'right',
					},
					{
						href: 'https://wpshop.io',
						label: 'Website',
						position: 'right',
					},
					{
						href: 'https://wordpress.org/plugins/wpshopify/',
						label: 'WordPress.org Plugin',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs Links',
						items: [
							{
								label: 'Installing',
								to: '/getting-started/installing',
							},
							{
								label: 'Connecting',
								to: '/getting-started/connecting',
							},
							{
								label: 'Syncing',
								to: '/getting-started/syncing',
							},
							{
								label: 'Displaying',
								to: '/getting-started/displaying',
							},
							{
								label: 'Requirements',
								to: '/getting-started/requirements',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Twitter',
								href: 'https://twitter.com/wpshopify',
							},
							{
								label: 'Slack',
								href: 'https://wpshop.io/purchase',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Plugin Extensions',
								href: 'https://wpshop.io/extensions',
							},
							{
								href: 'https://wpshop.io/features',
								label: 'Demo',
							},
							{
								href: 'https://wpshop.io/faq',
								label: 'FAQ',
							},
							{
								href: 'https://wordpress.org/plugins/wpshopify/',
								label: 'WordPress.org Plugin',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} ShopWP. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['php'],
			},
		}),
}
