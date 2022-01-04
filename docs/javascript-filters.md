# JavaScript Filters

The below JavaScript filters allow you to customize various aspects of the plugin. You can do things such as modify the checkout url, add custom HTML into the layout, and more.

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

Allows for customizing the name of a product option. For example, `Color` or `Size`. This will run for both [variant styles](/wps_products#variant_style).

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

### cart.lineItemTitleText

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

### misc.carouselSettings

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

### storefront.availableVendors

### storefront.availableTypes

### storefront.availablePricing

### before.cartCheckoutButton

### after.cartCheckoutButton

### before.lineItemTitle

### after.lineItemTitle

### before.cartTitle

### after.cartTitle

### before.productBuyButton

### after.productBuyButton

### before.productThumbnail

### after.productThumbnail

### before.productPricing

### after.productPricing

### before.productTitle

**Example**

```js
wp.hooks.addFilter(
	'before.productTitle',
	'shopwp',
	function (defaultValue, props) {
		return '<p>Vendor: ' + props.product.vendor + '</p>'
	}
)
```

### after.productTitle
