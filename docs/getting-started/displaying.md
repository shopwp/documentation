---
sidebar_position: 4
---

# Displaying

ShopWP allows you to display your [Shopify](https://shopify.pxf.io/5bPL0L) products in many different ways including shortcodes, Elementor widgets, and more.

- [Default pages](/guides/default-pages)
- [Shortcodes](/shortcodes/wps_products)
- [Gutenberg Blocks](/guides/gutenberg-blocks)
- [Elementor Extension](/guides/elementor-extension)
- [Beaver Builder Extension](https://wpshop.io/extensions/beaver-builder/)
- [Render API](/guides/render-api)

## Caching

We've tried to make ShopWP as fast as possible. One of the strategies we've taken is caching the product and collection data.

When products first load, a fresh request is made to the Shopify servers to fetch product info. The plugin then cache's this data to prevent additional network requests on consecutive page loads.

However, this means that if you change your product information you'll need to manually flush the ShopWP cache.

## Common issues

### <!DOCTYPE "... is not valid JSON

This issue is usually caused by a misconfigured `.htaccess` file. Some plugins, like All In One WP Security, will add additional lines of code to your `.htaccess` file. However this can sometimes conflict with ShopWP.

The easiest way to check for a conflict is by manually editing your `.htaccess` file. Open it up in a text editor and replace the entire contents with the default WordPress values below:

```
# BEGIN WordPress

RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
```
