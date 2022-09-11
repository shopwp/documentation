---
sidebar_position: 5
---

# Requirements

ShopWP requires a valid HTTPS certificate, PHP running at version 7.3 or greater, and WordPress version 5.0 or greater. Learn why below.

WordPress powers over [43.3% of all websites and over 65.3%](https://w3techs.com/technologies/details/cm-wordpress/all/all) of all CMS platforms today.

Because so many people rely on WordPress, the core developers must take a fairly conservative approach when deciding which versions of PHP to support. While understandable, one drawback is leaving millions of sites running legacy versions of PHP. This has the potential of creating pretty big security vulnerabilities.

We believe that one of the best ways to make WordPress more secure is by requiring users to upgrade their systems as a prerequisite for using our plugin.

With this in mind, our minimum requirements for ShopWP are:

## Minimum requirements

- An active [Shopify store](https://shopify.pxf.io/5bPL0L)
- PHP 7.3 or greater
- WordPress 5.0 or greater
- PHP `memory_limit` of `64MB` (256 MB if running into syncing timeout issues)
- PHP `max_execution_time` of `100` (300 if running into syncing timeout issues)
- Valid HTTPS certificate

## Subdirectories

ShopWP does not currently work when WordPress is installed in a subdirectory. Please consider a subdomain or it's own domain for now.

## Incompatible themes

Below are some of the currently unsupported themes:

- [Pro Photo 7](https://pro.photo)

## Incompatible plugins

Below are some of the currently unsupported plugins:

- [Async JavaScript](https://wordpress.org/plugins/async-javascript)
- [TheGem Theme Elements (for WPBakery)](https://codex-themes.com/thegem/)

## Known plugin conflicts

- [WP-Optimize](https://wordpress.org/plugins/async-javascript):
  WP-Optimize will try to minify and merge the JavaScript from the plugin. You'll need to manually exclude the plugin's JavaScript from this process since ShopWP already optimizes things. You can [follow this guide](https://getwpo.com/faqs/#How-do-I-exclude-individual-JavaScript-scripts-from-being-minified-and-merged-).

- [OptimizeBuilder](https://www.optimizepress.com/):
  If you're using the OptimizeBuilder plugin from OptimizePress, you'll need to manually "enable" the ShopWP JavaScript and CSS. OptimizeBuilder turns these off by default. To do this, open the OptimizeBuilder plugin settings and go to the scripts and styles tab. From there, find the ShopWP plugin and enable `Js` and `Css` for both the frontend and backend. Then click save.

- Caching plugins:
  If you're using a WordPress caching plugin, you may run into a JavaScript error that looks like this:

  ```js
  403 Error: Cookie check failed
  ```

  This happens if a caching plugin caches the WordPress REST API too aggressively. You can either try deactivating the caching plugin altogether, or adjust the settings so the plugin doesn't cache the WordPress REST API at all.

- [TheGem Theme Elements (for WPBakery)](https://codex-themes.com/thegem/):
  This plugin uses a WordPress filter called `nonce_life`, and sets it to 1 year. This causes all ShopWP REST Endpoints to fail with a 403 error. To fix, open the plugin and comment out the below function:

  ```php
  function thegem_nonce_life() {
    return 31536000;
  }

  add_filter('nonce_life', 'thegem_nonce_life');
  ```
