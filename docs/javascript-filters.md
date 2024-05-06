# JavaScript Filters

ShopWP comes with JavaScript filters that allow you to customize things product links or adding custom HTML into the layout.

To get started, follow our [Using JavaScript Hooks](/guides/javascript-hooks) guide first.

Any filter name that begins with `before` or `after` will allow you to insert custom HTML directly into the product layout

### product.titleText

Allows for customizing the product title text. You must return a string after completing any customizations.

| Parameter                 | Description            |
| :------------------------ | :--------------------- |
| productTitle - (string)   | The product title text |
| productPayload - (object) | The product data       |

**Example**

```js
wp.hooks.addFilter(
	'product.titleText',
	'shopwp',
	function (productTitle, productPayload) {
		return productTitle + ' plus custom text'
	}
)
```

### product.optionName

Allows for customizing the name of a product option. For example, `Color` or `Size`. This will run for both [variant styles](/shortcodes/wps_products#variant_style).

| Parameter             | Description                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------- |
| optionName - (string) | The option name text                                                                   |
| option - (object)     | The name value pair                                                                    |
| state - (object)      | The product state object. Contains info such as whether the option is selected or not. |

**Example**

```js
wp.hooks.addFilter(
	'product.optionName',
	'shopwp',
	function (optionName, option, state) {
		return optionName + ' custom'
	}
)
```

### product.labelHtml

Allows for customizing the HTML of the product option label.

| Parameter                       | Description                                    |
| :------------------------------ | :--------------------------------------------- |
| defaultVal                      | Empty string, always `false` by default        |
| option - (object)               | Represent the product option with name / value |
| productOptionState - (object)   | Represent the entire product option state      |
| allSelectableOptions - (object) | Represent which product options are selectable |
| settings - (object)             | Represent the user settings                    |

**Example**

```js
wp.hooks.addFilter(
	'product.labelHtml',
	'shopwp',
	function (
		defaultVal,
		option,
		productOptionState,
		allSelectableOptions,
		settings
	) {
		console.log('defaultVal', defaultVal)
		console.log('option', option)
		console.log('productOptionState', productOptionState)
		console.log('allSelectableOptions', allSelectableOptions)
		console.log('settings', settings)
		return `
            <div>
                ${option.name}
            </div>
        `
	}
)
```

### product.variantButtonHtml

Allows for customizing the HTML of the product variant button

| Parameter          | Description                                 |
| :----------------- | :------------------------------------------ |
| defaultVal         | Empty string, always `false` by default     |
| options - (object) | Represent all the options with name / value |

**Example**

```js
wp.hooks.addFilter(
	'product.variantButtonHtml',
	'shopwp',
	function (defaultVal, options) {
		console.log('defaultVal', defaultVal)
		console.log('options', options)

		return `
            <div>
                ${options.variantValue}
            </div>
        `
	}
)
```

### product.subscriptionsInfoHTML

Allows for customizing the HTML inside the subscription info tooltip. Must return a string of HTML.

| Parameter | Description |
| :-------- | :---------- |
| None      | -           |

**Example**

```js
wp.hooks.addFilter(
	'product.subscriptionsInfoHTML',
	'shopwp',
	function (defaultHTML) {
		return '<p>Custom subscription info</p>'
	}
)
```

### product.missingSelectionText

Allows for customizing the "missing selection" text. This text shows when a customer tries adding to cart without selecting the required variants.

| Parameter                     | Description                                                                            |
| :---------------------------- | :------------------------------------------------------------------------------------- |
| missingText - (string)        | The default missing selections text. "Please select a color..."                        |
| productOptionState - (object) | The state of the product option. Contains info such as whether the option is selected. |

**Example**

```js
wp.hooks.addFilter(
	'product.missingSelectionText',
	'shopwp',
	function (missingText, productOptionState) {
		return 'Whoops, you must select all options first.'
	}
)
```

### product.variantValue

Allows for customizing the text of each variant value.

| Parameter               | Description                   |
| :---------------------- | :---------------------------- |
| variantValue - (string) | The text of the variant value |

**Example**

```js
wp.hooks.addFilter('product.variantValue', 'shopwp', function (variantValue) {
	return 'New variant value text'
})
```

### product.preSelectVariantById

Allows you to automatically select a specific variant on page load. Must return the product variant ID.

| Parameter                 | Description                                                       |
| :------------------------ | :---------------------------------------------------------------- |
| defaultId - (bool)        | This will always be false                                         |
| productPayload - (object) | The product payload data. You can use this to find the variant id |

**Example**

```js
// Select the first variant automatically
wp.hooks.addFilter(
	'product.preSelectVariantById',
	'shopwp',
	function (defaultId, payload) {
		return payload.variants.edges[0].node.id
	}
)
```

```js
// Select a specific variant, depending on the product
wp.hooks.addFilter(
	'product.preSelectVariantById',
	'shopwp',
	function (defaultId, payload) {
		if ((payload.title = 'Lismore Mattress')) {
			return 'gid://shopify/ProductVariant/47701372666140'
		}

		return false
	}
)
```

### product.colorSwatchValue

Allows you to customize the value of the color swatch when using the variant buttons. This is useful if you want to display a custom color for each variant option.

By default ShopWP will attempt to use a "native CSS color" based on the variant name. For example, if you name your variant "White", ShopWP will correctly show a white color. This is because the plugin is able to identify what color that represents in CSS.

The full list of available color names can be [found here](https://www.w3.org/wiki/CSS/Properties/color/keywords) under the column "Color name".

This filter is particularly useful if you want to make sure to display a custom color not available in the CSS color names.

| Parameter            | Description                                                     |
| :------------------- | :-------------------------------------------------------------- |
| colorName - (string) | Represents the name of the color. For example, `black` or `red` |

**Example**

```js
wp.hooks.addFilter('product.colorSwatchValue', 'shopwp', function (colorName) {
	if (colorName === 'Heather Gray') {
		return '#2e2e2e'
	}

	return colorName
})
```

### product.variantStyles

Allows you to customize the CSS styles of the variant buttons

| Parameter         | Description                                  |
| :---------------- | :------------------------------------------- |
| styles - (string) | Represents the CSS inline styles to be added |

**Example**

```js
wp.hooks.addFilter('product.variantStyles', 'shopwp', function (styles) {
	return styles
})
```

### product.modalSettings

Allows you to customize the modal settings. The available modal settings match the available [[wps_products] shortcode attributes](/shortcodes/wps_products). In other words, any shortcode attribute can be used to customize the modal.

| Parameter                | Description                   |
| :----------------------- | :---------------------------- |
| modalSettings - (object) | Represents the modal settings |

**Example**

```js
// Disable image zoom within modal only
wp.hooks.addFilter('product.modalSettings', 'shopwp', function (modalSettings) {
	modalSettings.showZoom = false
	return modalSettings
})
```

### product.addToCartText

Allows you to customize the add to cart button text.

| Parameter              | Description                                      |
| :--------------------- | :----------------------------------------------- |
| defaultText - (string) | Represents the default add to cart text          |
| state - (object)       | Represents the state of the buy button component |

**Example**

```js
wp.hooks.addFilter(
	'product.addToCartText',
	'shopwp',
	function (defaultText, state) {
		console.log('defaultText', defaultText)
		console.log('state', state)

		return 'Custom add to cart text'
	}
)
```

### product.thumbnails

Allows you to filter a product's thumbnail images. Useful if you want to hide or customize certain thumbnails.

| Parameter                   | Description                               |
| :-------------------------- | :---------------------------------------- |
| defaultThumbnails - (array) | Represents the default product thumbnails |

**Example**

```js
wp.hooks.addFilter(
	'product.thumbnails',
	'shopwp',
	function (defaultThumbnails) {
		return defaultThumbnails
	}
)
```

### product.imageSrc

Allows for filtering a product images src. Useful if you want to customize the image location or load a specific image.

| Parameter              | Description                                                 |
| :--------------------- | :---------------------------------------------------------- |
| defaultSrc - (string)  | Represents the default product image src                    |
| image - (object)       | Represents the full image object including width and height |
| isFeatured - (boolean) | Whether this image is the featured image or not             |
| isVideo - (boolean)    | Whether this is a video or not                              |
| payload - (object)     | Represents the full product payload                         |

**Example**

```js
wp.hooks.addFilter(
	'product.imageSrc',
	'shopwp',
	function (defaultSrc, image, isFeatured, isVideo, payload) {
		return defaultSrc
	}
)
```

### product.modalLayout

Allows for customizing the product modal HTML. Useful for creating a custom layout or design.

:::info
You must return a valid HTML string.
:::

| Parameter                | Description                                           |
| :----------------------- | :---------------------------------------------------- |
| defaultLayout - (string) | Represents the default modal layout in an HTML string |
| settings - (object)      | The product settings being used                       |

In the example below, you'll notice custom HTML elements such as `<ProductImages />`.

**Example**

```js
wp.hooks.addFilter(
	'product.modalLayout',
	'shopwp',
	function (defaultLayout, settings) {
		return `
			<div class="wps-modal-row" style="display: flex;">
				<div style="width: 50%;padding: 0px 2em 0px 1em;">
					<ProductImages />
				</div>
				<div style="width: 50%;padding-right: 1em;">
					<ProductTitle />
					<ProductDescription />
					<ProductPricing />
					<ProductBuyButton />
				</div>
			</div>
    	`
	}
)
```

These are "React JS components" that you can use within your layout. When you use them, they will output the desired component inside your layout. This means you can move them around to create your desired look.

**Full list of React components**

```
<ProductImages />
<ProductTitle />
<ProductDescription />
<ProductPricing />
<ProductBuyButton />
<Reviews />
```

### product.subscriptionLabel

Allows for customizing the label found within the subscriptions widget.

Must return a string of text.

| Parameter                        | Description                                                          |
| :------------------------------- | :------------------------------------------------------------------- |
| text - (string)                  | Represents the default subscription label text as a string           |
| sellingGroup - (object)          | The subscription details of the selected option                      |
| isSelected - (boolean)           | Whether the subscription is selected or not                          |
| saveAmount - (int or boolean)    | The amount saved if purchased, `false` otherwise                     |
| regularPrice - (int)             | The price of the subscription                                        |
| discountPrice - (int or boolean) | The discounted price (if any) of the subscription, `false` otherwise |

In the example below, you'll notice custom HTML elements such as `<ProductImages />`.

**Example**

```js
wp.hooks.addFilter(
	wp.hooks.addFilter(
		'product.subscriptionLabel',
		'shopwp',
		function (
			text,
			sellingGroup,
			isSelected,
			saveAmount,
			regularPrice,
			discountPrice
		) {
			if (isSelected) {
				return text + ' (Good choice!)'
			} else {
				return text
			}
		}
	)
)
```

### product.unavailableHtml

Allows for customizing the HTML of the out of stock notice. This notice replaces the buy button.

Useful for creating things like "Notify me when back in stock" functionality.

| Parameter               | Description                                                                                    |
| :---------------------- | :--------------------------------------------------------------------------------------------- |
| defaultVal - (boolean)  | Represents the default value, always false                                                     |
| productState - (object) | The full product state. Contains info such as product data, is selected, the DOM element, etc. |

**Example**

```js
wp.hooks.addFilter(
	'product.unavailableHtml',
	'shopwp',
	function (defaultVal, productState) {
		console.log('productState', productState)
		return '<h1>Nothin here ...</h1>'
	}
)
```

### product.titleHtml

Allows for customizing the product title HTML.

| Parameter               | Description                                                                                    |
| :---------------------- | :--------------------------------------------------------------------------------------------- |
| defaultVal - (boolean)  | Represents the default value, always false                                                     |
| productState - (object) | The full product state. Contains info such as product data, is selected, the DOM element, etc. |

**Example**

```js
wp.hooks.addFilter(
	'product.titleHtml',
	'shopwp',
	function (defaultVal, productState) {
		console.log('productState', productState)
		return '<h1>Custom product title goes here</h1>'
	}
)
```

### product.sortingOptions

Allows for customizing the product sorting options.

| Parameter                | Description                                                        |
| :----------------------- | :----------------------------------------------------------------- |
| sortingOptions - (array) | A JavaScript array containing a list of sorting options as objects |

**Example**

```js
wp.hooks.addFilter(
	'product.sortingOptions',
	'shopwp',
	function (sortingOptions) {
		// Remove first sorting option
		sortingOptions.slice(1)

		return sortingOptions
	}
)
```

### product.variants

Allows for customizing the variants a user will see on the front-end. Useful for hiding specific variants that a user can choose from.

| Parameter          | Description                                  |
| :----------------- | :------------------------------------------- |
| variants - (array) | A JavaScript array of the available variants |

**Example**

```js
// Don't show the user any variants with the title "Ignore me"
wp.hooks.addFilter(
	'product.variants',
	'shopwp-custom',
	function (variants, payload) {
		variants.edges = variants.edges.filter(variant => {
			if (!variant.node.title === 'Ignore me') {
				return false
			}

			return variant
		})

		variants.edges = variants.edges.filter(v => v)

		return variants
	}
)
```

### product.requestSettings

Allows for customizing the settings used to fetch products. These settings are eventually passed to the raw
Shopify API request. Useful for whitelisting specific metafields to include in the request.

| Parameter           | Description                                                 |
| :------------------ | :---------------------------------------------------------- |
| settings - (object) | A JavaScript object containing a list of all API parameters |

**Example**

```js
// Tell ShopWP to whitelist custom metafields in the resulting payload for use in other hooks
wp.hooks.addFilter('product.requestSettings', 'shopwp-custom', function (data) {
	data.metafields = [
		{
			namespace: 'custom',
			key: 'weeee',
		},
	]

	return data
})
```

### cart.checkoutUrl

Allows you to customize the final checkout url. Useful for adding tracking parameters or customizations to the final checkout page.

| Parameter      | Description                 |
| :------------- | :-------------------------- |
| url - (string) | Represents the checkout url |

**Example**

```js
wp.hooks.addFilter('cart.checkoutUrl', 'shopwp', function (url) {
	return url
})
```

### cart.isCheckingOut

Allows you to short-circuit the checkout redirect.

| Parameter              | Description                          |
| :--------------------- | :----------------------------------- |
| isCheckingOut - (bool) | Whether to redirect to checkout page |

**Example**

```js
// Prevent the checkout redirect
wp.hooks.addFilter('cart.isCheckingOut', 'shopwp', function (isCheckingOut) {
	return false
})
```

### cart.lineItemsLink

Allows you to set a link for the lineitems inside the cart.

| Parameter            | Description                   |
| :------------------- | :---------------------------- |
| defaultLink - (bool) | link                          |
| lineItem - (object)  | Represents the line item data |
| cartState - (object) | Represents the cart state     |

**Example**

```js
wp.hooks.addFilter(
	'cart.lineItemsLink',
	'shopwp',
	function (defaultLink, lineItem, cartState) {
		return false
	}
)
```

### cart.lineItemSubscriptionDescription

Allows you to customize the subscription description label

| Parameter                    | Description         |
| :--------------------------- | :------------------ |
| subscriptionLabel - (string) | Subscription label  |
| lineItem - (object)          | Cart line item data |

**Example**

```js
wp.hooks.addFilter(
	'cart.lineItemSubscriptionDescription',
	'shopwp',
	function (subscriptionLabel, lineItem) {
		return subscriptionLabel
	}
)
```

### cart.lineItemVariantTitleText

Allows you to customize the line item's product variant title

| Parameter               | Description                                 |
| :---------------------- | :------------------------------------------ |
| variantTitle - (string) | Represents the line item variant title text |
| lineItem - (object)     | Represents the line item data               |

**Example**

```js
// Append the word test to every line item variant title
wp.hooks.addFilter(
	'cart.lineItemVariantTitleText',
	'shopwp',
	function (variantTitle, lineItem) {
		return variantTitle + '-test'
	}
)
```

### cart.lineItemTitleText

Allows you to customize the line item's product title

| Parameter           | Description                         |
| :------------------ | :---------------------------------- |
| title - (string)    | Represents the line item title text |
| lineItem - (object) | Represents the line item data       |

**Example**

```js
// Append the word test to every line item title
wp.hooks.addFilter(
	'cart.lineItemTitleText',
	'shopwp',
	function (title, lineItem) {
		return title + '-test'
	}
)
```

### cart.lineItemThumbnailUrl

Allows you to customize the URL for each line item thumbnail inside the ShopWP cart.

| Parameter           | Description                        |
| :------------------ | :--------------------------------- |
| imageSrc - (string) | Represents the thumbnail image src |
| lineItem - (object) | Represents the line item data      |

**Example**

```js
wp.hooks.addFilter(
	'cart.lineItemThumbnailUrl',
	'shopwp',
	function (imageSrc, lineItem) {
		return imageSrc
	}
)
```

### cart.directCheckoutSettings

Allows you to customize the cart settings when using the direct checkout feature. Useful for adding things like a custom note, cart attributes, or discount codes. Also provides the ShopWP `cartState` object within the callback.

The available keys on the `cartSettings` parameter correspond to Shopify's [CartInput](https://shopify.dev/api/storefront/2022-04/input-objects/CartInput) object.

| Parameter               | Description                                                                                                                                |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cartSettings - (object) | Represents cart settings. Corresponds to Shopify's [CartInput](https://shopify.dev/api/storefront/2022-04/input-objects/CartInput) object. |
| cartState - (object)    | Represents ShopWP cart state                                                                                                               |
| lineItemData - (object) | Represents the lineItemData being added                                                                                                    |

**Example**

```js
// Add a custom note
wp.hooks.addFilter(
	'cart.directCheckoutSettings',
	'shopwp',
	function (cartSettings, cartState, lineItemData) {
		cartSettings.note = 'This is a custom note'

		return cartSettings
	}
)
```

### cart.createSettings

Allows you to customize the default cart settings when creating a new cart. Useful for adding things like a custom note, cart attributes, or discount codes. Also provides the ShopWP `cartState` object within the callback.

The available keys on the `cartSettings` parameter correspond to Shopify's [CartInput](https://shopify.dev/api/storefront/2022-04/input-objects/CartInput) object.

| Parameter               | Description                                                                                                                                |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| cartSettings - (object) | Represents cart settings. Corresponds to Shopify's [CartInput](https://shopify.dev/api/storefront/2022-04/input-objects/CartInput) object. |
| cartState - (object)    | Represents ShopWP cart state                                                                                                               |
| shopState - (object)    | Represents ShopWP shop state                                                                                                               |

**Example**

```js
// Add a custom note
wp.hooks.addFilter(
	'cart.createSettings',
	'shopwp',
	function (cartSettings, cartState, shopState) {
		cartSettings.note = 'This is a custom note'

		return cartSettings
	}
)
```

### cart.lineItemAttributes

Allows you to add custom attributes to any product variant added to the ShopWP cart. The attributes you pass will be attached to the order data and viewable within the Shopify admin interface.

This filter will run right before a product variant is added to the cart.

In order for this to work properly, you must return an array of objects. Each object must have a `key` and `value` property, like this:

```js
return [
	{
		key: 'Key one',
		value: 'Value one',
	},
]
```

| Parameter                        | Description                                                               |
| :------------------------------- | :------------------------------------------------------------------------ |
| attributes - (array)             | Represents the custom attributes to add. Defaults to an empty array `[]`. |
| variant - (object)               | Represents product variant information like title, price, etc.            |
| quantity - (int)                 | Represents the total quantity being added                                 |
| productBuyButtonState - (object) | Represents the React buy button state                                     |

**Example**

```js
// Add special instructions for a specific line item
wp.hooks.addFilter(
	'cart.lineItemAttributes',
	'shopwp',
	function (defaultAttributes, variant, quantity, buyButtonState) {
		if (
			variant.node.product.product === 'My special product' &&
			variant.node.title === 'Large'
		) {
			return [
				{
					key: 'Special instructions',
					value: 'This could be user input',
				},
			]
		}

		return defaultAttributes
	}
)
```

### cart.checkoutButtonDisabled

Allows for manually determining whether the checkout button is disabled or not

| Parameter             | Description                                                                      |
| :-------------------- | :------------------------------------------------------------------------------- |
| defaultValue - (bool) | Represents whether the checkout button is enabled or disabled before customizing |
| cartData - (object)   | Represents the current cart data such as total, line items, etc                  |
| cartState - (object)  | Represents the full cart state                                                   |

**Example**

```js
// Only enable checkout button if cart total is more than $15
wp.hooks.addFilter(
	'cart.checkoutButtonDisabled',
	'shopwp',
	function (defaultValue, cartData, cartState) {
		if (!cartData) {
			return
		}

		var total = parseFloat(cartData.cost.totalAmount.amount)

		if (total > 15) {
			return defaultValue
		}

		return true
	}
)
```

### cart.checkoutButtonText

Allows for customizing the checkout button text

| Parameter             | Description                                                     |
| :-------------------- | :-------------------------------------------------------------- |
| defaultValue - (bool) | "Begin checkout" by default                                     |
| cartData - (object)   | Represents the current cart data such as total, line items, etc |
| cartState - (object)  | Represents the full cart state                                  |

**Example**

```js
wp.hooks.addFilter(
	'cart.checkoutButtonText',
	'shopwp',
	function (defaultValue, cartData, cartState) {
		return 'Something custom'
	}
)
```

### misc.linkHref

Allows you to filter product or collection links. This filter will run whether you link products to WordPress or Shopify.

| Parameter           | Description                              |
| :------------------ | :--------------------------------------- |
| linkHref - (string) | Represents the link's default href value |
| linkTo - (string)   | Represents where the link goes           |
| payload - (object)  | Represents all the product data          |

**Example**

```js
// Added utm params to product links
wp.hooks.addFilter(
	'misc.linkHref',
	'shopwp',
	function (linkHref, linkTo, payload) {
		return linkHref + '?utm_campaign=123'
	}
)
```

### misc.linkTarget

Allows you to change the HTML target value of all ShopWP products links. Useful if you want your products to open in a new tab.

| Parameter             | Description                                                 |
| :-------------------- | :---------------------------------------------------------- |
| linkTarget - (string) | Represents the link's target value. Defaults to `_self`     |
| type - (string)       | Represents the link type, e.g.: `Products` or `Collections` |
| payload - (object)    | Represents the product data                                 |

**Example**

```js
// Added utm params to product links
wp.hooks.addFilter('misc.linkTarget', 'shopwp', function (linkHref, linkTo) {
	return '_blank'
})
```

### misc.carouselSettings

Allows you to customize the product carousel settings.

| Parameter           | Description                                                                                                       |
| :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| settings - (object) | Represents the carousel settings. Corresponds to the [Slick Slider settings](https://kenwheeler.github.io/slick/) |

**Example**

```js
// Show 4 slides at once
wp.hooks.addFilter('misc.carouselSettings', 'shopwp', function (settings) {
	settings.slidesToShow = 4

	return settings
})
```

### misc.trackingParams

Allows for specifying which tracking parameters ShopWP should pass to the Shopify checkout page.

The default parameters to be tracked are:

```
utm_source
utm_medium
utm_campaign
utm_term
utm_content
utm_keyword
guid
fbclid
gclid
li_fat_id
```

| Parameter            | Description                        |
| :------------------- | :--------------------------------- |
| parameters - (array) | Represents the tracking parameters |

**Example**

```js
wp.hooks.addFilter('misc.trackingParams', 'shopwp', function (trackingParams) {
	trackingParams.push('my_custom_tracking_param_1')
	trackingParams.push('my_custom_tracking_param_2')
	return trackingParams
})
```

### storefront.availableCollections

Allows you to filter the available collections that the user is shown. Useful for preventing users from filtering certain collections. You must return the same collections data structure from the callback.

| Parameter              | Description                                |
| :--------------------- | :----------------------------------------- |
| collections - (object) | Represents the collections shown to filter |

**Example**

```js
// Exclude the "games" collection
wp.hooks.addFilter(
	'storefront.availableCollections',
	'shopwp',
	function (collections) {
		return collections.filter(collection => collection.label !== 'Games')
	}
)
```

### storefront.availableTags

Allows you to customize the available filtering product tag options for the Storefront component.

| Parameter | Description                         |
| :-------- | :---------------------------------- |
| tags      | The available tag filtering options |

**Example**

```js
wp.hooks.addFilter('storefront.availableTags', 'shopwp', function (tags) {
	return tags.filter(tag => tag !== 'mytag')
})
```

### storefront.availableVendors

Allows you to customize the available filtering product vendor options for the Storefront component.

| Parameter | Description                            |
| :-------- | :------------------------------------- |
| vendors   | The available vendor filtering options |

**Example**

```js
wp.hooks.addFilter('storefront.availableVendors', 'shopwp', function (vendors) {
	return vendors.filter(vendor => vendor !== 'mytag')
})
```

### storefront.availableTypes

Allows you to customize the available filtering product type options for the Storefront component.

| Parameter | Description                                  |
| :-------- | :------------------------------------------- |
| types     | The available product type filtering options |

**Example**

```js
wp.hooks.addFilter('storefront.availableTypes', 'shopwp', function (types) {
	return types.filter(type => type !== 'mytag')
})
```

### storefront.availablePricing

Allows you to customize the available filtering price options for the Storefront component.

| Parameter | Description                           |
| :-------- | :------------------------------------ |
| prices    | The available price filtering options |

**Example**

```js
wp.hooks.addFilter('storefront.availablePricing', 'shopwp', function (prices) {
	return prices.filter(price => price !== 'mytag')
})
```

### storefront.collectionsToFetch

Determines how many collections to fetch on page load for the Storefront filtering functionality. Default `8`.

| Parameter        | Description                                     |
| :--------------- | :---------------------------------------------- |
| numOfCollections | The number of collections to fetch on page load |

**Example**

```js
// Load 20 collections to filter instead of 8
wp.hooks.addFilter(
	'storefront.collectionsToFetch',
	'shopwp',
	function (numOfCollections) {
		return 20
	}
)
```

### before.cartCheckoutButton

Allows you add custom HTML before the cart checkout button. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'before.cartCheckoutButton',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### after.cartCheckoutButton

Allows you add custom HTML after the cart checkout button. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'after.cartCheckoutButton',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### before.lineItemTitle

Allows you add custom HTML before each lineitem title inside the cart. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'before.lineItemTitle',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### after.lineItemTitle

Allows you add custom HTML after each lineitem title inside the cart. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'after.lineItemTitle',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### before.cartTitle

Allows you add custom HTML before the cart title. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'before.cartTitle',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### after.cartTitle

Allows you add custom HTML after the cart title. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartState    | Represents the cart state  |

**Example**

```js
wp.hooks.addFilter(
	'after.cartTitle',
	'shopwp',
	function (defaultValue, cartState) {
		return '<p>Test</p>'
	}
)
```

### before.cartLineItems

Allows you add custom HTML before the cart line items. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartData     | Represents the cart data   |

**Example**

```js
wp.hooks.addFilter(
	'before.cartLineItems',
	'shopwp',
	function (defaultValue, cartData) {
		return '<p>Test</p>'
	}
)
```

### after.cartLineItems

Allows you add custom HTML after the cart line items. You must return HTML as a string.

| Parameter    | Description                |
| :----------- | :------------------------- |
| defaultValue | An empty string by default |
| cartData     | Represents the cart data   |

**Example**

```js
wp.hooks.addFilter(
	'after.cartTitle',
	'shopwp',
	function (defaultValue, cartData) {
		return '<p>Test</p>'
	}
)
```

### before.productBuyButton

Allows you add custom HTML before the product buy button. You must return HTML as a string.

| Parameter    | Description                  |
| :----------- | :--------------------------- |
| defaultValue | An empty string by default   |
| productState | Represents the product state |

**Example**

```js
// Show the total product inventory amount before the buy button
wp.hooks.addFilter(
	'before.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Total left: ' + productState.payload.totalInventory + '</p>'
	}
)
```

### after.productBuyButton

Allows you add custom HTML after the product buy button. You must return HTML as a string.

| Parameter    | Description                  |
| :----------- | :--------------------------- |
| defaultValue | An empty string by default   |
| productState | Represents the product state |

**Example**

```js
// Show the total product inventory amount after the buy button
wp.hooks.addFilter(
	'after.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Total left: ' + productState.payload.totalInventory + '</p>'
	}
)
```

```js
// Show a notice if product contains a specific tag
wp.hooks.addFilter(
	'after.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		if (productState.payload.tags.includes('_preorder')) {
			return `<p style='color:#C92228;'>
					<strong>PRE-ORDER ITEM!</strong> Order will be fulfilled when the stock arrives by expected ship date listed below. We recommend placing separate orders for pre-order and in-stock items</p>`
		}
	}
)
```

### before.productThumbnail

Allows you add custom HTML above each product thumbnail. You must return HTML as a string.

| Parameter                    | Description                          |
| :--------------------------- | :----------------------------------- |
| defaultValue (string)        | An empty string by default           |
| productGalleryState (object) | Represents the product gallery state |

```js
wp.hooks.addFilter(
	'before.productThumbnail',
	'shopwp',
	function (defaultValue, productGalleryState) {
		return '<p>Test</p>'
	}
)
```

### after.productThumbnail

Allows you add custom HTML below each product thumbnail. You must return HTML as a string.

| Parameter                    | Description                          |
| :--------------------------- | :----------------------------------- |
| defaultValue (string)        | An empty string by default           |
| productGalleryState (object) | Represents the product gallery state |

```js
wp.hooks.addFilter(
	'after.productThumbnail',
	'shopwp',
	function (defaultValue, productGalleryState) {
		return '<p>Test</p>'
	}
)
```

### before.productPricing

Allows you add custom HTML before the product price. You must return HTML as a string.

| Parameter             | Description                  |
| :-------------------- | :--------------------------- |
| defaultValue (string) | An empty string by default   |
| productState (object) | Represents the product state |

```js
// Adds the product vendor name before price
wp.hooks.addFilter(
	'before.productPricing',
	'shopwp',
	function (defaultValue, props) {
		return '<p>Vendor: ' + productState.payload.vendor + '</p>'
	}
)
```

### after.productPricing

Allows you add custom HTML after the product price. You must return HTML as a string.

| Parameter             | Description                  |
| :-------------------- | :--------------------------- |
| defaultValue (string) | An empty string by default   |
| productState (object) | Represents the product state |

```js
// Adds the product vendor name below price
wp.hooks.addFilter(
	'after.productPricing',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Vendor: ' + productState.payload.vendor + '</p>'
	}
)
```

### before.productTitle

Allows you add custom HTML before the product title. You must return HTML as a string.

| Parameter             | Description                  |
| :-------------------- | :--------------------------- |
| defaultValue (string) | will be false                |
| productState (object) | Represents the product state |

**Example**

```js
// Add vendor above title
wp.hooks.addFilter(
	'before.productTitle',
	'shopwp',
	function (defaultValue, productState) {
		return (
			'<p style="color: #828282;margin-bottom: 5px;">' +
			productState.payload.vendor +
			'</p>'
		)
	}
)
```

### after.productTitle

Allows you add custom HTML after the product title. You must return HTML as a string.

| Parameter             | Description                  |
| :-------------------- | :--------------------------- |
| defaultValue (string) | Will be an empty string      |
| productState (object) | Represents the product state |

**Example**

```js
// Adds the product vendor name after title
wp.hooks.addFilter(
	'after.productTitle',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Vendor: ' + productState.payload.vendor + '</p>'
	}
)
```

### before.productImages

Allows you add custom HTML before the product images. You must return HTML as a string.

| Parameter             | Description                    |
| :-------------------- | :----------------------------- |
| defaultValue (string) | Will be an empty string        |
| payload (object)      | Represents the product payload |

**Example**

```js
// Adds the product vendor before the images
wp.hooks.addFilter(
	'before.productImages',
	'shopwp',
	function (defaultValue, payload) {
		return '<p>Vendor: ' + payload.vendor + '</p>'
	}
)
```

### after.productImages

Allows you add custom HTML after the product images. You must return HTML as a string.

| Parameter             | Description                    |
| :-------------------- | :----------------------------- |
| defaultValue (string) | Will be an empty string        |
| payload (object)      | Represents the product payload |

**Example**

```js
// Adds the product vendor after the images
wp.hooks.addFilter(
	'after.productImages',
	'shopwp',
	function (defaultValue, payload) {
		return '<p>Vendor: ' + payload.vendor + '</p>'
	}
)
```

### block.productsAttributes

Allows for customizing the attributes of the ShopWP Products block registration

| Parameter           | Description                  |
| :------------------ | :--------------------------- |
| attributes (object) | The default block attributes |

**Example**

```js
// Lock the ShopWP Products block so users can't remove it
wp.hooks.addFilter('block.productsAttributes', 'shopwp', function (attributes) {
	attributes.lock = {
		type: 'object',
		default: {
			move: false,
			remove: true,
		},
	}

	return attributes
})
```

### block.productsSupports

Allows for customizing the supports property of the ShopWP Products block registration

| Parameter         | Description                                     |
| :---------------- | :---------------------------------------------- |
| defaultVal (bool) | The default supports value. `false` by default. |

**Example**

```js
// Only allow one ShopWP products block to be added
wp.hooks.addFilter('block.productsSupports', 'shopwp', function (defaultVal) {
	return {
		multiple: false,
	}
})
```

### shop.textContent

Allows for customizing any text content within ShopWP.

:::info
This will override any dynamic translations made via the [Translator extension](https://wpshop.io/extensions/translator/).
:::

| Parameter            | Description                                              |
| :------------------- | :------------------------------------------------------- |
| textContent (object) | All text content in ShopWP, separated as key value pairs |
| shopState (object)   | The global Shop state                                    |

The `textContent` object contains sub objects with keys that represent the "type" of content. The available keys are:

| key | Description |
| :-- | :---------- |
| e   | Errors      |
| w   | Warnings    |
| n   | Notices     |
| l   | Labels      |
| a   | Admin only  |

**Example**

```js
wp.hooks.addFilter(
	'shop.textContent',
	'shopwp',
	function (textContent, shopState) {
		textContent.l.beginCheckout = 'Custom checkout button text'
		textContent.l.cartTitle = 'Custom cart title'

		return textContent
	}
)
```
