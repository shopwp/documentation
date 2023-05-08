# Add custom fields to cart

ShopWP allows you to add custom data to the cart. This data will then be attached to the final order inside Shopify to reference.

The first step is adding HTML for the input fields. You'll need to add this HTML using the "before.productBuyButton" JavaScript filter.

For example, the below JavaScript will add a chunk of HTML above the buy button which is where I think you want the card message inputs to appear:

```js
wp.hooks.addFilter(
	'before.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		return '<p>Total left: ' + productState.payload.totalInventory + '</p>'
	}
)
```

You'll need to adjust the above code to output input fields instead of a paragraph tag.

The second piece of the puzzle is adding the custom data to the cart. You can do this using the "do.updateCartAttributes" JavaScript hook: https://docs.wpshop.io/javascript-actions#doupdatecartattributes

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

The data itself will need to come from the input html that you create. So you'll probably need to save the user's input data in localStorage or something.

The delivery date picker can be done following the same idea. ShopWP does not provide a date picker functionality so you'll need to create this yourself using a third-party library.

Does all this help?
