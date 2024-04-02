# Useful CSS Snippets

Below are some useful CSS snippets that you can add to your WordPress theme.

## Hide sale prices for variants _not_ on sale:

```css
[data-wpshopify-is-on-sale='false'] .wps-product-prices-compare-at {
	display: none !important;
}
```

## Hide cart tab when empty

You can hide the fixed cart icon in various ways. To hide the icon when the cart is empty:

```css
.wps-cart-icon-fixed.wps-cart-is-empty {
	display: none;
}
```

## Hide cart counter when empty

You can hide the "counter" within the fixed cart icon&mdash;only when the cart is empty&mdash;with this CSS:

```css
.wps-cart-icon-fixed.wps-cart-is-empty .wps-cart-counter {
	display: none;
}
```

And to hide the counter within a standard cart icon (not fixed), use this CSS:

```css
.wps-btn-cart.wps-cart-is-empty .wps-cart-counter {
	display: none;
}
```

## Change selected button colors

The below CSS will customize the variant button selected colors, as well as the variant badge within the cart. Replace #000 with the color of your choice.

```css
.wpshopify-variant-buttons button[data-is-variant-selected='true'] {
	background-color: #000;
	border-color: #000;
}

.wps-cart-lineitem-variant-title[class*='badge'] {
	background-color: #000;
}
```

## Remove "sale" text, but keep sale price

This CSS snippet will remove the red "Sale!" text over images, but keep the actual sale pricing.

```css
.wps-product-prices-compare-at .wps-pricing-sale-notice,
.wps-component-products-images .wps-product-image-on-sale-label {
	display: none;
}
```

## Change color of subscription dropdowns

This CSS snippet will customize the background color of the subscription dropdowns.

```css
[class*='SellingPlansListCSS'] [class*='MenuList'] [class*='option'] {
	background-color: white;
	color: black;
}

[class*='SellingPlansListCSS'] [class*='MenuList'] [class*='option']:hover {
	background-color: black;
	color: white;
}
```

## Remove border radius

:::info
A new plugin setting was introduced in ShopWP 8.0 to control the border radius
:::

Sometimes your theme design will conflict with the small "border radius" that ShopWP puts on all it's elements. You can remove this border radius with the below CSS:

```css
.wps-btn-cart,
.wps-btn,
.wps-btn-checkout,
.wps-quantity-decrement,
.wps-quantity-increment,
.wps-input,
.wpshopify-variant-buttons button,
.wps-input-textarea,
.wps-add-to-cart,
.shopwp-selling-group,
[class*='DropdownCSS'] {
	border-radius: 0 !important;
}
```

## Reduce the size of the ShopWP cart icon

```css
.swp-icon.swp-icon-cart {
	width: 23px;
	height: 23px;
}

.swp-cart-icon-inline .swp-cart-counter {
	top: -4px;
	right: -7px;
	width: 20px;
	height: 20px;
}
```
