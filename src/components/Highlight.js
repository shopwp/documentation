import React from 'react'
import ReactDOM from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM

// import { shopwpComponents } from '@shopwp/components/dist/shopwp-components.js'
// import { Shop } from '/Users/andrew/_www/shopwp/htdocs/wp-content/plugins/shopwp-pro/npm-packages/shopwp-components/index.js'
// import { Shop } from '@shopwp/components'
import { Shop, Products } from '@shopwp/components'

function Highlight({ children, color }) {
	// const Shoop = await import('@shopwp/components/index.js')
	// const Shop = shopwpComponents.Shop

	// console.log('5', shopwpComponents)
	console.log('5tttt Shop', Shop)

	const settings = {}

	window.shopwp = {
		syncing: {
			hasConnection: true,
		},
		general: {
			id: 1,
			urlProducts: 'https://shopwp.loc/shopwp-products/',
			urlCollections: 'https://shopwp.loc/collections/',
			urlWebhooks: 'https://9c8e06cb76dc.ngrok.io',
			enableDefaultPages: true,
			numPosts: 8,
			stylesAll: true,
			stylesCore: false,
			stylesGrid: false,
			pluginName: 'WP Shopify',
			pluginTextdomain: 'wpshopify',
			pluginVersion: '5.0.2',
			compatibilityPluginVersion: '1.0.5',
			pluginAuthor: 'WP Shopify',
			priceWithCurrency: false,
			currencyDisplayStyle: 'symbol',
			cartLoaded: true,
			titleAsAlt: false,
			selectiveSyncAll: false,
			selectiveSyncProducts: true,
			syncByCollections: [
				{
					id: 164430086192,
					title: 'Super',
					handle: 'super',
					smart: false,
				},
			],
			selectiveSyncCollections: true,
			selectiveSyncCustomers: false,
			selectiveSyncOrders: false,
			selectiveSyncShop: true,
			productsLinkTo: 'wordpress',
			productsLinkTarget: '_self',
			showBreadcrumbs: true,
			hidePagination: false,
			alignHeight: false,
			isFree: false,
			isPro: false,
			relatedProductsShow: true,
			relatedProductsSort: 'random',
			relatedProductsAmount: 4,
			allowInsecureWebhooks: false,
			saveConnectionOnly: false,
			appUninstalled: false,
			itemsPerRequest: 250,
			enableBeta: false,
			enableCartTerms: true,
			enableCustomerAccounts: false,
			cartTermsContent: 'I agree with the, terms and conditions.',
			enableCartNotes: true,
			cartNotesPlaceholder:
				'Is this a gift? Enter your special message, here. (Limit 100 characters)',
			addToCartColor: '#415aff',
			variantColor: '#000000',
			checkoutColor: '#000000',
			cartCounterColor: '#a5fea5',
			cartIconColor: '#000',
			inlineCartCounterTextColor: '#000',
			productsHeadingToggle: true,
			productsPlpDescriptionsToggle: false,
			productsHeading: 'Products',
			collectionsHeadingToggle: true,
			collectionsHeading: 'Collections',
			relatedProductsHeadingToggle: true,
			relatedProductsHeading: 'Related Products',
			productsImagesSizingToggle: true,
			productsImagesSizingWidth: 400,
			productsImagesSizingHeight: 400,
			productsImagesSizingCrop: 'center',
			productsImagesSizingScale: 0,
			productsImagesShowZoom: false,
			productsThumbnailImagesSizingToggle: true,
			productsThumbnailImagesSizingWidth: 70,
			productsThumbnailImagesSizingHeight: 70,
			productsThumbnailImagesSizingCrop: 'center',
			productsThumbnailImagesSizingScale: 0,
			collectionsImagesSizingToggle: false,
			collectionsImagesSizingWidth: 400,
			collectionsImagesSizingHeight: 400,
			collectionsImagesSizingCrop: 'center',
			collectionsImagesSizingScale: 0,
			relatedProductsImagesSizingToggle: false,
			relatedProductsImagesSizingWidth: 0,
			relatedProductsImagesSizingHeight: 0,
			relatedProductsImagesSizingCrop: 'center',
			relatedProductsImagesSizingScale: 0,
			enableCustomCheckoutDomain: false,
			productsCompareAt: false,
			productsShowPriceRange: true,
			checkoutButtonTarget: '_self',
			showFixedCartTab: true,
			cartConditionalFixedTabLoading: 'all',
			cartConditionalManuallySelectedPages: ['2549', '2571'],
			cartIconFixedColor: '#FFF',
			cartCounterFixedColor: '#FFF',
			cartFixedBackgroundColor: '#000000',
			pricingLocalCurrencyToggle: false,
			pricingLocalCurrencyWithBase: false,
			synchronousSync: false,
			isLiteSync: false,
			isSyncingPosts: true,
			searchBy: 'title',
			searchExactMatch: false,
			pluginFreeBasename: 'wpshopify/wp-shopify.php',
			accountPageLogin: '',
			accountPageRegister: '',
			accountPageAccount: '',
			accountPageForgotPassword: '',
			accountPageSetPassword: '',
			hideDecimals: false,
			enableDataCache: true,
			dataCacheLength: 120,
			directCheckout: false,
			enableAutomaticSyncing: false,
			syncByWebhooks: ['product_listings/update'],
			allowTracking: false,
			syncMedia: false,
			pageProducts: 96508,
			pageCollections: 6,
			pageProductsDefault: 5,
			pageCollectionsDefault: 6,
			variantStyle: 'buttons',
			wizardCompleted: true,
			defaultPagesCreated: true,
			enableDiscountCodes: true,
			rechargeApiKey: '**************************982c',
			subscriptions: true,
			currencySymbol: '$',
			currencyCode: 'USD',
			countryCode: 'US',
			primaryLocale: false,
			showEstimatedTax: true,
			languageCode: 'en',
			currencySign: 'standard',
		},
		connection: {
			masked: {
				domain: 'wpstest.myshopify.com',
				shopName: 'ShopWP Sandbox',
			},
			storefront: {
				domain: 'wpstest.myshopify.com',
				storefrontAccessToken: '1d06b0f26201de24222f5284ffb8be49',
			},
		},
		api: {
			namespace: 'shopwp/v1',
			restUrl: 'https://shopwp.loc/wp-json/',
		},
		misc: {
			latestVersion: '5.0.2',
			availablePages: false,
			postID: 2,
			postURL: false,
			isMobile: false,
			isSSL: true,
			pluginsDirURL: 'https://shopwp.loc/wp-content/plugins/shopwp-pro/',
			pluginsDistURL: 'https://shopwp.loc/wp-content/plugins/shopwp-pro/dist/',
			adminURL: 'https://shopwp.loc/wp-admin/',
			siteUrl: 'https://shopwp.loc',
			isSingularProducts: false,
			isSingularCollections: false,
			siteDomain: 'shopwp.loc',
			isAdmin: false,
			isPro: true,
			hasTranslator: true,
			hasRecharge: true,
			hasElementor: true,
			timers: {
				syncing: false,
			},
		},
	}

	const payload = [
		{
			cursor:
				'eyJsYXN0X2lkIjo0NDY0OTM5ODI3MjQ4LCJsYXN0X3ZhbHVlIjoiU3VwZXIgYXdlc29tZSBqYWNrZXQifQ==',
			node: {
				availableForSale: true,
				compareAtPriceRange: {
					maxVariantPrice: {
						amount: '1000.0',
						currencyCode: 'USD',
					},
					minVariantPrice: {
						amount: '70.2',
						currencyCode: 'USD',
					},
				},
				createdAt: '2020-03-06T03:27:47Z',
				description:
					'Aut eos ad labore. Eaque ut consectetur et consequatur sit est.',
				descriptionHtml:
					'<p><span style="text-decoration: underline;">Aut eos ad labore</span>. Eaque ut consectetur et consequatur sit est.</p>',
				handle: 'super-awesome-jacket',
				id: 'gid://shopify/Product/4464939827248',
				onlineStoreUrl:
					'https://wpstest.myshopify.com/products/super-awesome-jacket',
				options: [
					{
						id: 'gid://shopify/ProductOption/5795147808816',
						name: 'Size',
						values: ['Small', 'Medium', 'Large'],
					},
					{
						id: 'gid://shopify/ProductOption/5795147841584',
						name: 'Color',
						values: ['Red', 'Purple', 'Black', 'Pink', 'Green', 'Blue'],
					},
					{
						id: 'gid://shopify/ProductOption/5795147874352',
						name: 'Material',
						values: ['Leather', 'Cotton', 'Silk'],
					},
				],
				priceRange: {
					maxVariantPrice: {
						amount: '118.25',
						currencyCode: 'USD',
					},
					minVariantPrice: {
						amount: '8.0',
						currencyCode: 'USD',
					},
				},
				productType: 'Beauty',
				publishedAt: '2021-10-01T04:36:51Z',
				requiresSellingPlan: false,
				title: 'Super awesome jacket',
				totalInventory: 14,
				updatedAt: '2022-04-02T11:05:23Z',
				vendor: 'Grant Group',
				images: {
					edges: [
						{
							node: {
								width: 1600,
								height: 2400,
								altText: null,
								id: 'gid://shopify/ProductImage/14378720591920',
								originalSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1601484646',
								transformedSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1601484646',
							},
						},
						{
							node: {
								width: 1570,
								height: 2355,
								altText: null,
								id: 'gid://shopify/ProductImage/14378720624688',
								originalSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
								transformedSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
							},
						},
						{
							node: {
								width: 2211,
								height: 1474,
								altText: null,
								id: 'gid://shopify/ProductImage/14378720657456',
								originalSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1601484646',
								transformedSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1601484646',
							},
						},
						{
							node: {
								width: 1572,
								height: 2160,
								altText: null,
								id: 'gid://shopify/ProductImage/14378720690224',
								originalSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
								transformedSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
							},
						},
						{
							node: {
								width: 1522,
								height: 2210,
								altText: null,
								id: 'gid://shopify/ProductImage/14378720559152',
								originalSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
								transformedSrc:
									'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
							},
						},
					],
				},
				media: {
					edges: [
						{
							node: {
								alt: '',
								mediaContentType: 'IMAGE',
								previewImage: {
									width: 1600,
									height: 2400,
									altText: '',
									id: 'gid://shopify/ImageSource/6551860936752',
									url: 'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1583465288',
								},
								image: {
									width: 1600,
									height: 2400,
									altText: '',
									id: 'gid://shopify/GraphApi::Image::Value/6551860936752',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1583465288',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1583465288',
								},
							},
						},
						{
							node: {
								alt: '',
								mediaContentType: 'IMAGE',
								previewImage: {
									width: 1570,
									height: 2355,
									altText: '',
									id: 'gid://shopify/ImageSource/6551860969520',
									url: 'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1583465289',
								},
								image: {
									width: 1570,
									height: 2355,
									altText: '',
									id: 'gid://shopify/GraphApi::Image::Value/6551860969520',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1583465289',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1583465289',
								},
							},
						},
						{
							node: {
								alt: '',
								mediaContentType: 'IMAGE',
								previewImage: {
									width: 2211,
									height: 1474,
									altText: '',
									id: 'gid://shopify/ImageSource/6551860838448',
									url: 'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1583465289',
								},
								image: {
									width: 2211,
									height: 1474,
									altText: '',
									id: 'gid://shopify/GraphApi::Image::Value/6551860838448',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1583465289',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1583465289',
								},
							},
						},
						{
							node: {
								alt: '',
								mediaContentType: 'IMAGE',
								previewImage: {
									width: 1572,
									height: 2160,
									altText: '',
									id: 'gid://shopify/ImageSource/6551860871216',
									url: 'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1583465289',
								},
								image: {
									width: 1572,
									height: 2160,
									altText: '',
									id: 'gid://shopify/GraphApi::Image::Value/6551860871216',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1583465289',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1583465289',
								},
							},
						},
						{
							node: {
								alt: '',
								mediaContentType: 'IMAGE',
								previewImage: {
									width: 1522,
									height: 2210,
									altText: '',
									id: 'gid://shopify/ImageSource/6551860903984',
									url: 'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1583465288',
								},
								image: {
									width: 1522,
									height: 2210,
									altText: '',
									id: 'gid://shopify/GraphApi::Image::Value/6551860903984',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1583465288',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1583465288',
								},
							},
						},
					],
				},
				variants: {
					edges: [
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '70.2',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474177072',
								image: {
									width: 1570,
									height: 2355,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720624688',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '38.25',
									currencyCode: 'USD',
								},
								quantityAvailable: 1,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Small',
									},
									{
										name: 'Color',
										value: 'Red',
									},
									{
										name: 'Material',
										value: 'Leather',
									},
								],
								sku: 'aerodynamic-aluminum-wallet-small',
								title: 'Small / Red / Leather',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '100.0',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474209840',
								image: {
									width: 2211,
									height: 1474,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720657456',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-3mGnYRUNIck-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '57.82',
									currencyCode: 'USD',
								},
								quantityAvailable: 1,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Medium',
									},
									{
										name: 'Color',
										value: 'Purple',
									},
									{
										name: 'Material',
										value: 'Leather',
									},
								],
								sku: 'aerodynamic-aluminum-wallet-medium',
								title: 'Medium / Purple / Leather',
								weight: 0.3329,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '170.2',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474242608',
								image: {
									width: 1572,
									height: 2160,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720690224',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '68.12',
									currencyCode: 'USD',
								},
								quantityAvailable: 3,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Large',
									},
									{
										name: 'Color',
										value: 'Red',
									},
									{
										name: 'Material',
										value: 'Leather',
									},
								],
								sku: 'aerodynamic-aluminum-wallet-large',
								title: 'Large / Red / Leather',
								weight: 0.172,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: null,
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474275376',
								image: {
									width: 1522,
									height: 2210,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720559152',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '19.99',
									currencyCode: 'USD',
								},
								quantityAvailable: 4,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Small',
									},
									{
										name: 'Color',
										value: 'Black',
									},
									{
										name: 'Material',
										value: 'Leather',
									},
								],
								sku: '',
								title: 'Small / Black / Leather',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: false,
								compareAtPriceV2: {
									amount: '880.2',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474308144',
								image: {
									width: 1600,
									height: 2400,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720591920',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-y86wGUa1Ly8-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '8.0',
									currencyCode: 'USD',
								},
								quantityAvailable: 0,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Medium',
									},
									{
										name: 'Color',
										value: 'Purple',
									},
									{
										name: 'Material',
										value: 'Cotton',
									},
								],
								sku: '',
								title: 'Medium / Purple / Cotton',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '98.2',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474340912',
								image: {
									width: 1570,
									height: 2355,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720624688',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-zar90MHyWYc-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '88.25',
									currencyCode: 'USD',
								},
								quantityAvailable: 1,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Large',
									},
									{
										name: 'Color',
										value: 'Pink',
									},
									{
										name: 'Material',
										value: 'Silk',
									},
								],
								sku: '',
								title: 'Large / Pink / Silk',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '600.99',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474373680',
								image: {
									width: 1572,
									height: 2160,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720690224',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-4WUwF9jVqMU-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '118.25',
									currencyCode: 'USD',
								},
								quantityAvailable: 2,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Medium',
									},
									{
										name: 'Color',
										value: 'Green',
									},
									{
										name: 'Material',
										value: 'Cotton',
									},
								],
								sku: '',
								title: 'Medium / Green / Cotton',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
						{
							node: {
								product: {
									title: 'Super awesome jacket',
								},
								availableForSale: true,
								compareAtPriceV2: {
									amount: '1000.0',
									currencyCode: 'USD',
								},
								currentlyNotInStock: false,
								id: 'gid://shopify/ProductVariant/31741474439216',
								image: {
									width: 1522,
									height: 2210,
									altText: null,
									id: 'gid://shopify/ProductImage/14378720559152',
									originalSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
									transformedSrc:
										'https://cdn.shopify.com/s/files/1/0147/3639/2240/products/wesley-tingey-JOhjfzjeJLw-unsplash.jpg?v=1601484646',
								},
								priceV2: {
									amount: '28.25',
									currencyCode: 'USD',
								},
								quantityAvailable: 2,
								requiresShipping: true,
								selectedOptions: [
									{
										name: 'Size',
										value: 'Medium',
									},
									{
										name: 'Color',
										value: 'Blue',
									},
									{
										name: 'Material',
										value: 'Silk',
									},
								],
								sku: '',
								title: 'Medium / Blue / Silk',
								weight: 1.9004,
								weightUnit: 'POUNDS',
							},
						},
					],
				},
				metafields: {
					edges: [],
				},
			},
		},
	]

	return (
		<Shop country='US' language='EN' currency='USD'>
			<Products
				payload={payload}
				initialFetch={false}
				settings={settings}
				id='asdkjsi34j'
			/>
			<span
				style={{
					backgroundColor: color,
					borderRadius: '2px',
					color: '#fff',
					padding: '0.2rem',
				}}>
				{children}
			</span>
		</Shop>
	)
}

export default Highlight
