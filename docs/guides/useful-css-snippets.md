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
