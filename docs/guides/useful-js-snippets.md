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

## Add Rich Text metafields below the buy button

This code allows for transforming the Rich Text metafield from a complex nested object to a string of HTML to return.

```js
function objectToHTML(obj) {
	// Helper function to process children
	function processChildren(children) {
		return children.map(child => objectToHTML(child)).join('')
	}

	// Base case for text nodes
	if (obj.type === 'text') {
		let text = obj.value
		if (obj.bold) text = `<b>${text}</b>`
		if (obj.italic) text = `<i>${text}</i>`
		return text
	}

	// Handling different types of elements
	switch (obj.type) {
		case 'root':
			return processChildren(obj.children)

		case 'paragraph':
			return `<p>${processChildren(obj.children)}</p>`

		case 'list-item':
			return `<li>${processChildren(obj.children)}</li>`

		case 'list':
			let listType = obj.listType === 'ordered' ? 'ol' : 'ul'
			return `<${listType}>${processChildren(obj.children)}</${listType}>`

		case 'link':
			return `<a href="${obj.url}">${processChildren(obj.children)}</a>`

		case 'heading':
			return `<h${obj.level}>${processChildren(obj.children)}</h${obj.level}>`

		default:
			// If there's an unknown type, just return the children wrapped in a div for safety
			return `<div>${processChildren(obj.children)}</div>`
	}
}

wp.hooks.addFilter(
	'after.productBuyButton',
	'shopwp',
	function (defaultValue, productState) {
		var metafields = productState.payload.metafields.filter(Boolean)

		if (metafields.length) {
			var finalHTML = '<div class="swp-metafields">'

			metafields.forEach(metafield => {
				var metafieldValue = JSON.parse(metafield.value)

				finalHTML += objectToHTML(metafieldValue)
			})

			return finalHTML + '</div>'
		} else {
			return null
		}
	}
)
```
