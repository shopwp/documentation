# Display without syncing

ShopWP allows you to display products without syncing at all. This can be really powerful for simple stores that don't need product detail pages, but would still like to sell on WordPress. It can also help speed up your site.

To do this, you have four options:

1. [Embed buy button options directly](#embed-buy-button-options-directly)
2. [Open products in modal](#open-products-in-modal)
3. [Link to the Shopify checkout page](#link-to-the-shopify-checkout-page)
4. [Link product detail page on Shopify theme](#link-product-detail-page-on-shopify-theme)

### Embed buy button options directly

In order to embed your product's buy button options directly you can set the `link_to` attribute to `none` on any shortcode. Like this:

```php
[wps_products link_to="none"]
```

```php
[wps_products_buy_button link_to="none"]
```

You can also enable this behavior **by default** for **all** products inside the ShopWP general settings. The ShopWP gutenberg blocks provide this setting as well.

### Open products in modal

To open your product details in a modal you can set the `link_to` attribute to `modal` on any shortcode. Like this:

```php
[wps_products link_to="modal"]
```

```php
[wps_products_buy_button link_to="modal"]
```

You can also enable this behavior **by default** for **all** products inside the ShopWP general settings. The ShopWP gutenberg blocks provide this setting as well.

### Link to the Shopify checkout page

In order to link your products directly to the Shopify checkout page, you'll need to enable the `direct_checkout` feature like this:

```php
[wps_products direct_checkout="true"]
```

```php
[wps_products_buy_button direct_checkout="true"]
```

You can also enable this behavior **by default** for **all** products inside the ShopWP general settings. The ShopWP gutenberg blocks provide this setting as well.

### Link product detail page on Shopify theme

In order to link your products to the product detail page on your Shopify theme, you can set the `link_to` attribute to `shopify` on any shortcode. Like this:

```php
[wps_products link_to="shopify"]
```

```php
[wps_products_buy_button link_to="shopify"]
```

You can also enable this behavior **by default** for **all** products inside the ShopWP general settings. The ShopWP gutenberg blocks provide this setting as well.
