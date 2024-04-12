# Useful JS Snippets

Below are some useful JS snippets that you can add to your WordPress theme to customize ShopWP

## Add a custom input above the buy button to pass to the cart

This code does two things. It adds a custom "Special instructions" input above any product buy button. If a user adds a value to this input, the value will then get passed to the line item and eventually the Shopify order.

```js
wp.hooks.addFilter(
	'cart.lineItemAttributes',
	'shopwp',
	function (defaultAttributes, variant, quantity, buyButtonState, buttonRef) {
		var $parentWrapper = jQuery(buttonRef).closest('.swp-item')

		var $inputElement = $parentWrapper.find(
			'.special-instructions-wrapper input'
		)
		var inputVal = $inputElement.val()

		if (!$inputElement.length) {
			return defaultAttributes
		}

		if (!inputVal) {
			return defaultAttributes
		}

		return [
			{
				key: 'Special instructions',
				value: inputVal,
			},
		]
	}
)

wp.hooks.addFilter(
	'before.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		return `
	<style>
		.special-instructions-wrapper {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
		}

		.special-instructions-wrapper label {
			font-weight: bold;
		}
	</style>
	<div class="special-instructions-wrapper">
		<label for="instructions">Enter special instructions:</label>
		<input type="text" id="instructions" name="instructions" placeholder="Your instructions go here" />
	</div>
	`
	}
)
```
