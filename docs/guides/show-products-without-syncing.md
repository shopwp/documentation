# Display without syncing

ShopWP allows you to display products without syncing at all. This can be really powerful for simple stores that don't need product detail pages, but would still like to sell on WordPress. It can also help speed up your site.

To do this, you have four options:

1. [Embed your buy buttons directly](#embed-your-buy-buttons-directly)
2. [Open products in a modal](#open-products-in-a-modal)
3. [Link products to the Shopify checkout page](#link-products-to-the-shopify-checkout-page)
4. [Link products to the detail page on Shopify](#link-products-to-the-detail-page-on-shopify)

You can also adjust these four options **by default** for **all** products inside the ShopWP general settings. The ShopWP gutenberg blocks provide the settings as well.

### Embed your buy buttons directly

In order to embed buy buttons directly you can set the `link_to` attribute to `none` on any shortcode. Like this:

```php
[wps_products link_to="none"]
```

### Open products in a modal

To open your product details in a modal you can set the `link_to` attribute to `modal` on any shortcode. Like this:

```php
[wps_products link_to="modal"]
```

### Link products to the Shopify checkout page

In order to link your products directly to the Shopify checkout page, enable the `direct_checkout` feature like this:

```php
[wps_products direct_checkout="true"]
```

### Link products to the detail page on Shopify

In order to link your products to the product detail page on your Shopify theme, you can set the `link_to` attribute to `shopify` on any shortcode. Like this:

```php
[wps_products link_to="shopify"]
```
