# Improving Performance

ShopWP is built to be fast. However given the nature of WordPress, there may be other aspects of your site contributing to slowing things down.

Below are some additional steps you can take to make your products load as fast as possible.

## Prefetch & Preconnect

A simple way to decrease the latency is by telling your site to preconnect to the Shopify servers. You can do this by adding a little bit of HTML to the `<head>` section of your WordPress site.

For a detailed explanation of how this works, view the [MDN docs on dns-prefetch](https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch)

In the example below, we're using both `rel="preconnect"` and `rel="dns-prefetch"` for the best possible results. The `https://cdn.shopify.com` domain is used when loading product images, and `https://<your-store>.myshopify.com` is used when fetching product data.

**Examples**

```html
<link rel="preconnect" href="https://cdn.shopify.com" crossorigin />
<link rel="dns-prefetch" href="https://cdn.shopify.com" />

<!-- Make sure to change <your-store> to the name of your Shopify store -->
<link rel="preconnect" href="https://<your-store>.myshopify.com" crossorigin />
<link rel="dns-prefetch" href="https://<your-store>.myshopify.com" />
```

## Remove unnecessary plugins

The less plugins you have installed the faster your WordPress site will be.

The WordPress lifecycle will initialize each plugin on every page load. This is part of the issue that causes your site to be slow. Some plugins are built to be faster than others. However, even the fastest plugin will need to be loaded and it's files parsed, which can, over time, drastically slow down your site.

We always recommend _installing only the plugins that you need to run your site_. Don't use a plugin if you can avoid it!
