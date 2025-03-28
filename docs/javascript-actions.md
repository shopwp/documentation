# JavaScript Actions

ShopWP allows you to hook into various plugin events with the built-in JavaScript actions. For example, detect a variant selection or manually open the cart.

To get started, follow our [Using JavaScript Hooks](/guides/javascript-hooks) guide first.

Any action name that begins with `on` are events that you can listen to. When the event happens, the code you provide in the callback function will run. Any action name that begins with `do`, will allow you to make an event "happen".

### on.itemsLoad

Detect when the items (products, or collections) are finished loading

| Parameter         | Description                                    |
| :---------------- | :--------------------------------------------- |
| payload (object)  | Represents the product or collection data      |
| settings (object) | Represents the settings used for the component |

**Example**

```js
wp.hooks.addAction('on.itemsLoad', 'shopwp', function (payload, settings) {
	console.log('on.itemsLoad', payload)
})
```

### on.cartToggle

Detect when the cart is opened and closed.

| Parameter     | Description                                 |
| :------------ | :------------------------------------------ |
| isOpen (bool) | Represents whether the cart is open or not. |

**Example**

```js
wp.hooks.addAction('on.cartToggle', 'shopwp', function (isOpen) {
	console.log('on.cartToggle', isOpen)
})
```

### on.cartLoad

Detect when the cart is done loading. Useful if you wish to hook into any cart state.

| Parameter          | Description                    |
| :----------------- | :----------------------------- |
| cartState (object) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.cartLoad', 'shopwp', function (cartState) {
	console.log('on.cartLoad', cartState)
})
```

### on.cartUpdate

This hook will fire whenever the cart state changes. Useful if you need to know when the user adds a line item, removes a line item, changes quantity, etc.

| Parameter          | Description                    |
| :----------------- | :----------------------------- |
| cartState (object) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.cartUpdate', 'shopwp', function (cartState) {
	console.log('on.cartUpdate', cartState)
})
```

### on.cartNoteChange

This action will fire when the user types inside the note field. The action is debounced by `250ms`.

| Parameter     | Description                    |
| :------------ | :----------------------------- |
| note (string) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.cartNoteChange', 'shopwp', function (note) {
	console.log('on.cartNoteChange', note)
})
```

### on.checkout

This action runs when the checkout redirect begins.

| Parameter          | Description                    |
| :----------------- | :----------------------------- |
| cartState (object) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.checkout', 'shopwp', function (cartState) {
	console.log('on.checkout', cartState)
})
```

### on.lineItemRemove

Detect when a line item is removed from the cart.

| Parameter          | Description                                        |
| :----------------- | :------------------------------------------------- |
| lineItem (object)  | Represents the line item data                      |
| variantId (string) | Represents the id of the variant added to the cart |

**Example**

```js
wp.hooks.addAction(
	'on.lineItemRemove',
	'shopwp',
	function (lineItem, variantId) {
		console.log('on.lineItemRemove :: lineItem ', lineItem)
		console.log('on.lineItemRemove :: variantId ', variantId)
	}
)
```

### on.beforePayloadUpdate

This action runs before the network request responsible for fetching the product data.

| Parameter           | Description                                |
| :------------------ | :----------------------------------------- |
| itemsState (object) | Represents the global state of the product |

**Example**

```js
wp.hooks.addAction('on.beforePayloadUpdate', 'shopwp', function (itemsState) {
	console.log('on.beforePayloadUpdate', itemsState)
})
```

### on.afterPayloadUpdate

This action runs after the network request responsible for fetching the product data.

| Parameter           | Description                                |
| :------------------ | :----------------------------------------- |
| itemsState (object) | Represents the global state of the product |

**Example**

```js
wp.hooks.addAction('on.afterPayloadUpdate', 'shopwp', function (itemsState) {
	console.log('on.afterPayloadUpdate', itemsState)
})
```

### on.variantsSelection

This action runs after a single variant is selected

| Parameter                   | Description                         |
| :-------------------------- | :---------------------------------- |
| selectedOption (object)     | Represents the selected option      |
| productOptionState (object) | Represents the product option state |

**Example**

```js
wp.hooks.addAction(
	'on.variantsSelection',
	'shopwp',
	function (selectedOption, productOptionState) {
		console.log('on.variantsSelection', selectedOption, productOptionState)
	}
)
```

### on.allVariantsSelected

This action runs after all variants are selected

| Parameter        | Description                 |
| :--------------- | :-------------------------- |
| variant (object) | Represents the variant data |

**Example**

```js
wp.hooks.addAction('on.allVariantsSelected', 'shopwp', function (variant) {
	console.log('on.allVariantsSelected', variant)
})
```

### on.beforeAddToCart

This action runs before the product is added to the cart

| Parameter             | Description                       |
| :-------------------- | :-------------------------------- |
| productState (object) | Represents the product state data |

**Example**

```js
wp.hooks.addAction('on.beforeAddToCart', 'shopwp', function (productState) {
	console.log('on.beforeAddToCart', productState)
})
```

### on.afterAddToCart

This action runs after a product is added to the cart

| Parameter          | Description                                           |
| :----------------- | :---------------------------------------------------- |
| lineItems (object) | Represents the line items that were added to the cart |
| cartState (object) | Represents the new cart state                         |

**Example**

```js
wp.hooks.addAction(
	'on.afterAddToCart',
	'shopwp',
	function (lineItems, cartState) {
		console.log('on.afterAddToCart', lineItems, cartState)
	}
)
```

### on.variantDropdownToggle

This action runs when a variant dropdown is opened

| Parameter                   | Description                         |
| :-------------------------- | :---------------------------------- |
| productOptionState (object) | Represents the product option state |

**Example**

```js
wp.hooks.addAction(
	'on.variantDropdownToggle',
	'shopwp',
	function (productOptionState) {
		console.log('on.variantDropdownToggle', productOptionState)
	}
)
```

### on.syncStatus

Allows for hooking into the ShopWP syncing status. Will run every three seconds.

Will only run in the backend.

| Parameter          | Description                         |
| :----------------- | :---------------------------------- |
| syncState (object) | Contains the full state of the sync |

**Example**

```js
wp.hooks.addAction('on.syncStatus', 'shopwp', function (syncState) {
	console.log('syncState', syncState)
})
```

### on.productBuyButtonRender

Runs after the Buy Button component has fully rendered. Useful for attaching DOM events to elements within the buy button component.

| Parameter             | Description                            |
| :-------------------- | :------------------------------------- |
| productState (object) | Contains the full state of the product |

**Example**

```js
wp.hooks.addAction(
	'on.productBuyButtonRender',
	'shopwp',
	function (payload, settings) {
		jQuery('#text-input-1').on('input', function (element) {
			// On input change
		})
	}
)
```

### do.addToCart

Allows you to programmatically add a variant to the ShopWP cart.

| Parameter                                                              | Description                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lines** (array)                                                      | Represents the line items to add. Corresponds to the available fields on the [Shopify CartLineInput](https://shopify.dev/api/storefront/2022-04/mutations/cartLinesAdd) object. Must be an array of objects which contain the required fields: `quantity`, `merchandiseId`. |
|                                                                        | `quantity` - (Required) - How many items to add                                                                                                                                                                                                                             |
|                                                                        | `merchandiseId` - (Required) - The variant id to add                                                                                                                                                                                                                        |
|                                                                        | `sellingPlanId` - (optional) - (Optional) - The selling plan id if a subscription product                                                                                                                                                                                   |
|                                                                        | `attributes` - (optional) - Any attributes to add to the line item. Must be an array of objects containing `key` and `value` properties.                                                                                                                                    |
| **language** (string) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | (Optional) - Represents the ISO language code for the line items. Allows for translating product content.                                                                                                                                                                   |
| **country** (string)                                                   | (Optional) - Represents the ISO country code for the line items. Allows for converting the product currency.                                                                                                                                                                |
| **extras** (object)                                                    | (Optional) - Contains a variety of extra features when adding to cart. The following parameters are available:                                                                                                                                                              |
|                                                                        | `openCartAfterAdding` - (boolean) - Determines whether the cart opens after adding                                                                                                                                                                                          |

**Example**

```js
var params = {
	lines: [
		{
			quantity: 2,
			merchandiseId: 22221680050224,
			sellingPlanId: 449118256, // optional
			attributes: [], // optional
		},
	],
	language: 'EN', // optional
	country: 'US', // optional
	extras: {
		openCartAfterAdding: true, // optional
	},
}

wp.hooks.doAction('do.addToCart', params)
```

### do.cartToggle

Allows you to manually open or close the cart

| Parameter     | Description                                                                               |
| :------------ | :---------------------------------------------------------------------------------------- |
| open (string) | Determines whether the cart will open or close. Available values are: `open` and `close`. |

**Example**

```js
// Open the cart
wp.hooks.doAction('do.cartToggle', 'open')

// Close the cart
wp.hooks.doAction('do.cartToggle', 'close')
```

### do.updateCartAttributes

Allows for adding or updating custom attributes to the cart _as whole_. This will merge any existing attributes with the ones you set here. Useful if you have multiple different attributes that you want to set globally on the order itself.

The attributes you pass will be attached to the order data and viewable within the Shopify admin interface.

If you want to add attributes to a single lineitem, see [cart.lineItemAttributes](https://docs.wpshop.io/javascript-filters#cartlineitemattributes)

| Parameter           | Description                                                                                                                                               |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes (object) | Represents the cart attributes to be added. Must be an array containing objects with `key` and `value` properties. The `value` property must be a string. |
| options (object)    | An optional configuration object that allows you to specify certain settings such as opening the cart while updating. Available keys are:                 |
|                     | `openCartAfter` - (boolean) - Whether the ShopWP cart opens during the update                                                                             |

**Example**

```js
const attributes = [
	{
		key: 'keyOne',
		value: 'valueOne',
	},
	{
		key: 'keyTwo',
		value: 'valueTwo',
	},
]

wp.hooks.doAction('do.updateCartAttributes', attributes)
```

```js
/* 

You can also pass a second parameter to the action which specifies an options object.
For example, here we tell the action to open the cart while the attributes are being 
added to the cart.

*/
const attributes = [
	{
		key: 'keyOne',
		value: 'valueOne',
	},
	{
		key: 'keyTwo',
		value: 'valueTwo',
	},
]

wp.hooks.doAction('do.updateCartAttributes', attributes, {
	openCart: true,
})
```

### do.removeLineItems

Allows for manually removing line items from the cart. The line item id is a base64 encoded string in this format: `gid://shopify/ProductVariant/31741627072560`.

| Parameter           | Description                                         |
| :------------------ | :-------------------------------------------------- |
| lineItemIds (array) | Represents an array of line item ids to be removed. |

**Example**

```js
var lineItemIds = [
	'gid://shopify/CartLine/a4262343d0aab7ebd9b4362e57b78b10?cart=e1e0b7762fe633e708e0dd7de67852f0',
]

wp.hooks.doAction('do.removeLineItems', lineItemIds)
```

### do.setCartNote

Allows for manually setting the cart note.

| Parameter           | Description                                 |
| :------------------ | :------------------------------------------ |
| customNote (string) | Represents the cart note. Must be a string. |

**Example**

```js
var customNote = 'This is a custom note'

wp.hooks.doAction('do.setCartNote', customNote)
```

### do.setCartDiscount

Allows for manually setting a discount code to the cart.

| Parameter             | Description                                     |
| :-------------------- | :---------------------------------------------- |
| discountCode (string) | Represents the discount code. Must be a string. |

**Example**

```js
var discountCode = 'CUSTOM_DISCOUNT_CODE'

wp.hooks.doAction('do.setCartDiscount', discountCode)
```

### do.shopRender

Allows for manually rendering a component

**Example**

```js
wp.hooks.doAction('do.shopRender')
```

### do.toggleCartTerms

Allows for manually checking / unchecking the cart terms checkbox. Can also be used to enable / disable the checkout button based on your own criteria.

| Parameter           | Description                                                   |
| :------------------ | :------------------------------------------------------------ |
| isChecked (boolean) | Whether the terms checkbox should be checked. Default `false` |

**Example**

```js
// Check the terms box
wp.hooks.doAction('do.toggleCartTerms', true)
```

```js
// Uncheck the terms box
wp.hooks.doAction('do.toggleCartTerms', false)
```

### do.directCheckout

Allows for creating a manual cart session and programmatically sending customers to the Shopify checkout page.

Simply pass a checkout object to customize which products are added, quantities, any discount codes, etc.

| Parameter             | Description                                                                                                                                                         |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lines (array)         | A JavaScript array containing information about each lineitem. Should be an array of objects with this format:                                                      |
| note (string)         | Represents a note added to the order.                                                                                                                               |
| discountCodes (array) | You can optionally pass one or more discount codes to the order. The discounts need to be already added inside Shopify to work.                                     |
| attributes (array)    | A JavaScript array containing a list of custom attributes in this format:                                                                                           |
| settings (object)     | A JavaScript object containing a list of settings for the checkout. Available settings are `linkTarget` (Determines if the checkout should open in same tab or new) |

**Example**

```js
wp.hooks.doAction('do.directCheckout', {
	lines: [
		{
			attributes: [],
			merchandiseId: 'gid://shopify/ProductVariant/31741651517488',
			quantity: 2,
		},
	],
	note: 'This is a custom note',
	discountCodes: ['FREE'],
	attributes: false,
	settings: {
		linkTarget: '_blank',
	},
})
```

### do.checkout

Unlike `do.directCheckout` above, this hook will redirect the browser to the Shopify checkout page.

It simply uses the current state of the ShopWP cart at the moment of calling the hook.

**Example**

```js
wp.hooks.doAction('do.checkout')
```

### do.shopHydrate

Allows for manually fetching new product data

**Example**

```js
wp.hooks.doAction('do.shopHydrate')
```

### do.updateBuyerIdentity

Allows for programmatically updating the "buyer identity" associated with the Shopify cart session.

The buyer identity controls things like, email, phone, company info, etc. A full list of possible arguments can be [found here](https://shopify.dev/docs/api/storefront/unstable/mutations/cartBuyerIdentityUpdate).

Note: while this hook will properly pass information like customer email to the Shopify checkout page, it will **not** log the user in if they’re not already logged in. In this case, it will simply pre-fill the email on the checkout page.

You can pass the `customerAccessToken` property to authenticate a user to a checkout.

| Parameter              | Description                                                                                                                                                                                            |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| buyerIdentity (object) | A JavaScript object containing the buyer identity. Use the same parameters outlined in the [Shopify documentation](https://shopify.dev/docs/api/storefront/unstable/mutations/cartBuyerIdentityUpdate) |

**Example** Pass a user's email to the checkout page

```js
wp.hooks.doAction('do.updateBuyerIdentity', {
	email: 'laxavo8316@biscoine.com',
})
```
