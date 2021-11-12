---
sidebar_position: 3
---

# Syncing

:::info
Only products assigned to the ShopWP sales channel will be synced.
:::

ShopWP implements a "syncing process" for creating product and collection detail pages. When you sync your Shopify store, the plugin will attempt to create a dedicated post page for each product that is assigned to the ShopWP sales channel.

The term "syncing" should be understood to mean creating product and collection detail pages. The actual data—such as prices and descriptions—are fetched on each page load, and subsequently cached by the plugin. This is to ensure that the product info shown is accurate.

If you don't want to enable product detail pages—for example because you're linking directly to checkout—you can skip the syncing feature all together and jump directly to [displaying products](/getting-started/displaying) instead.

## Fixing syncing issues

We continue to try our best to ensure that the syncing process works across multiple different environments. However if you're running into trouble, try going through the below steps one by one.

**Things to check:**

1. The most common reason for syncing issues are conflicts with other plugins. The first thing you should try doing is temporarily deactivating every other plugin and re-syncing. If the issue persists, we can rule out any plugin conflicts.
2. Change the `Items per request` setting to **25** and turn on `Synchronous Requests`. You can find these within the plugin settings under the "Syncing" section. After these are updated, try re-syncing.
3. Make sure your site is not password protected. Sometimes managed hosts like WP Engine or Flywheel will have this turned on by default.
4. Make sure your site is not using BasicAuth. If it is, skip to the [BasicAuth section](/getting-started/syncing#basicauth) below for a workaround.
5. Check your PHP and Apache/Nginx logs for any errors. If you don't know how to do this, contact your web host and ask them to look on your behalf. If you find any errors, [please send them to us by email](mailto:hello@wpshop.io) or in the private Slack channel for further help.
6. Ask your web host if they have a firewall enabled that restricts numerous third-party API requests during a short period of time. If they do have a firewall, ask them to make an exception for requests sent to ".myshopify.com".
7. Make sure you have a working SSL certificate on your WordPress site
8. Ensure you meet the ShopWP [minimum requirements](/getting-started/requirements).

If none of these steps resolve your syncing issues, [please send us an email](mailto:hello@wpshop.io) and we'll be happy to debug with you.

### BasicAuth

If your site is behind BasicAuth, the syncing process will probably fail to complete. This is because ShopWP relies on the WordPress HTTP API, which requires you to attach your BasicAuth credentials to each request. The easiest way to do this is using the following filter:

```php
function wpbp_http_request_args( $r, $url ) {
	$r['headers']['Authorization'] = 'Basic ' . base64_encode( USERNAME . ':' . PASSWORD );

	return $r;
}
add_filter( 'http_request_args', 'wpbp_http_request_args', 10, 2);
```

## Auto post syncing

See the [auto post syncing tool](/getting-started/tools#connect-auto-post-syncing) for more information.
