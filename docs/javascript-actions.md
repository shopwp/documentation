# JavaScript Actions

The below JavaScript actions allow you to hook into various events that run inside the plugin. You can do things such as run code after a product is added to the cart, or manually open / close the cart.

To get started, follow our [Using JavaScript Hooks](/guides/javascript-hooks) guide first.

Any action name that begins with `on` are events that you can listen to. When the event happens, the code you provide in the callback function will run. Any action name that begins with `do`, will allow you to make an event "happen".

### on.cartToggle

Detect when the cart is opened and closed.

| Parameter     | Description                                 |
| :------------ | :------------------------------------------ |
| isOpen (bool) | Represents whether the cart is open or not. |

**Example**

```js
wp.hooks.addAction('on.cartToggle', 'shopwp', function (isOpen) {
	console.log('on.cartToggle​', isOpen)
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
	console.log('on.cartLoad​', cartState)
})
```

### on.checkoutUpdate

Detect when the cart state changes. Useful if you need to know when the user adds a line item, removes a line item, changes quantity, etc.

| Parameter          | Description                    |
| :----------------- | :----------------------------- |
| cartState (object) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.checkoutUpdate', 'shopwp', function (cartState) {
	console.log('on.checkoutUpdate​', cartState)
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
	console.log('on.checkout​', cartState)
})
```

### on.checkoutNoteChange

This action will fire when the user types inside the note field. The action is debounced by `250ms`.

| Parameter     | Description                    |
| :------------ | :----------------------------- |
| note (string) | Represents the full cart state |

**Example**

```js
wp.hooks.addAction('on.checkoutNoteChange', 'shopwp', function (note) {
	console.log('on.checkoutNoteChange', note)
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
| variant (object)   | Represents the product variant data                   |

**Example**

```js
wp.hooks.addAction(
	'on.afterAddToCart',
	'shopwp',
	function (lineItems, variant) {
		console.log('on.afterAddToCart', lineItems, variant)
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

### do.addToCart

Allows you to manually add a product variant to the cart

| Parameter       | Description                                                                                                     |
| :-------------- | :-------------------------------------------------------------------------------------------------------------- |
| params (object) | Represents the product configuration to be added. Must contain a lineItems property with quantity and variantId |

**Example**

```js
var params = {
	lineItemOptions: {
		minQuantity: false,
		maxQuantity: false,
		subscription: false,
		attributes: false,
		variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc0MTYyNzA3MjU2MA==',
	},
	lineItems: [
		{
			quantity: 2,
			variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc0MTYyNzA3MjU2MA==',
		},
	],
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

### do.updateCheckoutAttributes

Allows for adding / updating custom attributes to the checkout. This will merge the attributes you set with any existing attributes that have been applied already. Useful if you have multiple different attributes that you want to set.

| Parameter           | Description                                                                                                                                               |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes (object) | Represents the cart attributes to be added. Must be an array containing objects with `key` and `value` properties. The `value` property must be a string. |

**Example**

```js
var attributes = [
	{
		key: 'keyOne',
		value: 'valueOne',
	},
	{
		key: 'keyTwo',
		value: 'valueTwo',
	},
]

wp.hooks.doAction('do.updateCheckoutAttributes', attributes)
```

### do.setCheckoutAttributes

Allows for setting custom attributes to the checkout. This will overwrite all existing attributes that have been already added.

| Parameter           | Description                                                                                                                                               |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes (object) | Represents the cart attributes to be added. Must be an array containing objects with `key` and `value` properties. The `value` property must be a string. |

**Example**

```js
var attributes = [
	{
		key: 'keyOne',
		value: 'valueOne',
	},
	{
		key: 'keyTwo',
		value: 'valueTwo',
	},
]

wp.hooks.doAction('do.setCheckoutAttributes', attributes)
```

### do.removeLineItems

Allows for manually removing line items from the cart. The line item id is a base64 encoded string in this format: `gid://shopify/ProductVariant/31741627072560`.

| Parameter           | Description                                         |
| :------------------ | :-------------------------------------------------- |
| lineItemIds (array) | Represents an array of line item ids to be removed. |

**Example**

```js
var lineItemIds = [
	'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc0MTYyNzEwNTMyOA==',
	'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc0MTYyNzEzODA5Ng==',
]

wp.hooks.doAction('do.removeLineItems', lineItemIds)
```

### do.setCheckoutNote

Allows for manually setting the checkout note.

| Parameter           | Description                                     |
| :------------------ | :---------------------------------------------- |
| customNote (string) | Represents the checkout note. Must be a string. |

**Example**

```js
var customNote = 'This is a custom note'

wp.hooks.doAction('do.setCheckoutNote', customNote)
```

### do.setCheckoutDiscount

Allows for manually setting a discount code to the cart.

| Parameter             | Description                                     |
| :-------------------- | :---------------------------------------------- |
| discountCode (string) | Represents the discount code. Must be a string. |

**Example**

```js
var discountCode = 'CUSTOM_DISCOUNT_CODE'

wp.hooks.doAction('do.setCheckoutDiscount', discountCode)
```

### do.shopRender

Allows for manually rendering a component

**Example**

```js
wp.hooks.doAction('do.shopRender')
```
