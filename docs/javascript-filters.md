# JavaScript Filters

ShopWP comes with JavaScript filters that allow you to customize things product links or adding custom HTML into the layout.

To get started, follow our [Using JavaScript Hooks](/guides/javascript-hooks) guide first.

Any filter name that begins with `before` or `after` will allow you to insert custom HTML directly into the product layout.

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

| Parameter                     | Description                                                                            |
| :---------------------------- | :------------------------------------------------------------------------------------- |
| optionName - (string)         | The option name text                                                                   |
| productOptionState - (object) | The state of the product option. Contains info such as whether the option is selected. |

**Example**

```js
wp.hooks.addFilter(
	'product.optionName',
	'shopwp',
	function (optionName, productOptionState) {
		return optionName + ' custom'
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

Allows for selecting a product variant on page load, based on variant id. You must return a valid [GraphQL product variant ID](https://shopify.dev/api/admin-graphql/2021-10/scalars/ID).

The GraphQL product id is a base64-encoded string in this format: `gid://shopify/ProductVariant/40323659989183`. To create the GraphQL id, append the _numeric_ product id to this string: `gid://shopify/ProductVariant/`, like this:

```js
var graphId = 'gid://shopify/ProductVariant/' + '40323659989183'
```

| Parameter                 | Description               |
| :------------------------ | :------------------------ |
| variantId - (bool)        | This will always be false |
| productPayload - (object) | The product payload data  |

**Example**

```js
wp.hooks.addFilter(
	'product.preSelectVariantById',
	'shopwp',
	function (variantId, payload) {
		return 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDMyMzY1OTk4OTE4Mw=='
	}
)
```

### product.lineItemOptions

Allows you to customize the line item options before they're added to the cart. Useful for customizing things like the quantity, variant, or min/max quantity.

| Parameter                  | Description                                  |
| :------------------------- | :------------------------------------------- |
| lineItemOptions - (object) | Represents the line item options to be added |

**Example**

```js
wp.hooks.addFilter(
	'product.lineItemOptions',
	'shopwp',
	function (lineItemOptions) {
		lineItemOptions.minQuantity = 2
		return lineItemOptions
	}
)
```

### product.colorSwatchValue

Allows you to customize the value of the color swatch when using the variant buttons. This is useful if you want to display a custom color for each variant option. By default, the plugin will attempt to use the variant value to generate the color.

| Parameter        | Description                                                     |
| :--------------- | :-------------------------------------------------------------- |
| color - (string) | Represents the name of the color. For example, `black` or `red` |

**Example**

```js
wp.hooks.addFilter('product.colorSwatchValue', 'shopwp', function (color) {
	return color
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

### product.addToCart.text

Allows you to customize the add to cart button text.

| Parameter              | Description                                      |
| :--------------------- | :----------------------------------------------- |
| defaultText - (string) | Represents the default add to cart text          |
| state - (object)       | Represents the state of the buy button component |

**Example**

```js
wp.hooks.addFilter(
	'product.addToCart.text',
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

| Parameter                    | Description        |
| :--------------------------- | :----------------- |
| subscriptionLabel - (string) | Subscription label |

**Example**

```js
wp.hooks.addFilter(
	'cart.lineItemSubscriptionDescription',
	'shopwp',
	function (subscriptionLabel) {
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

### misc.linkHref

Allows you to filter product or collection links. This filter will run whether you link products to WordPress or Shopify.

| Parameter           | Description                              |
| :------------------ | :--------------------------------------- |
| linkHref - (string) | Represents the link's default href value |
| linkTo - (string)   | Represents where the link goes           |

**Example**

```js
// Added utm params to product links
wp.hooks.addFilter('misc.linkHref', 'shopwp', function (linkHref, linkTo) {
	return linkHref + '?utm_campaign=123'
})
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

| Parameter     | Description                         |
| :------------ | :---------------------------------- |
| availableTags | The available tag filtering options |

**Example**

```js
wp.hooks.addFilter(
	'storefront.availableTags',
	'shopwp',
	function (availableTags) {
		return availableTags
	}
)
```

### storefront.availableVendors

Allows you to customize the available filtering product vendor options for the Storefront component.

| Parameter        | Description                            |
| :--------------- | :------------------------------------- |
| availableVendors | The available vendor filtering options |

**Example**

```js
wp.hooks.addFilter(
	'storefront.availableVendors',
	'shopwp',
	function (availableVendors) {
		return availableVendors
	}
)
```

### storefront.availableTypes

Allows you to customize the available filtering product type options for the Storefront component.

| Parameter      | Description                                  |
| :------------- | :------------------------------------------- |
| availableTypes | The available product type filtering options |

**Example**

```js
wp.hooks.addFilter(
	'storefront.availableTypes',
	'shopwp',
	function (availableTypes) {
		return availableTypes
	}
)
```

### storefront.availablePricing

Allows you to customize the available filtering price options for the Storefront component.

| Parameter      | Description                           |
| :------------- | :------------------------------------ |
| pricingOptions | The available price filtering options |

**Example**

```js
wp.hooks.addFilter(
	'storefront.availablePricing',
	'shopwp',
	function (pricingOptions) {
		return pricingOptions
	}
)
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
		return '<p>Vendor: ' + productState.product.vendor + '</p>'
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
	function (defaultValue, props) {
		return '<p>Vendor: ' + productState.product.vendor + '</p>'
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
// Adds the product vendor name before title
wp.hooks.addFilter(
	'before.productTitle',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Vendor: ' + productState.product.vendor + '</p>'
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
		return '<p>Vendor: ' + productState.product.vendor + '</p>'
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
