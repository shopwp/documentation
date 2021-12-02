# Improving Performance

ShopWP is built to be fast. However given the nature of WordPress, there may be other aspects of your site contributing to slowing things down. Below are some additional steps you can take to make your products load as fast as possible.

## Prefetch & Preconnect

A simple way to decrease the latency is by telling your site to preconnect to the Shopify servers. You can do this by adding a little bit of HTML to the `<head>` section of your WordPress site.

For a detailed explanation of how this works, view the [MDN docs on dns-prefetch](https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch)

**Examples**

```html
<link rel="preconnect" href="https://cdn.shopify.com" crossorigin />
<link rel="dns-prefetch" href="https://cdn.shopify.com" />

<!-- Make sure to change <your-store> to the name of your Shopify store -->
<link rel="preconnect" href="https://<your-store>.myshopify.com" crossorigin />
<link rel="dns-prefetch" href="https://<your-store>.myshopify.com" />
```
