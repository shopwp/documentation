---
sidebar_position: 5
---

# Requirements

WordPress powers over [43.2% of all websites and over 63.6%](https://w3techs.com/technologies/details/cm-wordpress/all/all) of all CMS platforms today.

Because so many people rely on WordPress, the core developers must take a fairly conservative approach when deciding which versions of PHP to support. While understandable, one drawback is leaving millions of sites running legacy versions of PHP. This has the potential of creating pretty big security vulnerabilities.

We believe that one of the best ways to make WordPress more secure is by requiring users to upgrade their systems as a prerequisite for using our plugin.

With this in mind, our minimum requirements for ShopWP are:

## Minimum requirements

- An active [Shopify store](https://shopify.pxf.io/5bPL0L)
- PHP `7.3` or greater
- WordPress `5.0` or greater
- PHP `memory_limit` of `64MB` (256 MB if running into syncing timeout issues)
- PHP `max_execution_time` of `100` (300 if running into syncing timeout issues)
- A valid HTTPS certificate

## Subdirectories

ShopWP does not currently work when WordPress is installed in a subdirectory. Please consider a subdomain or it's own domain for now.

## Known hosting issues

### [Kinsta](https://kinsta.com)

Kinsta's caching system is known to prevent the ShopWP products from loading correctly. This is because they aggressively cache your entire WordPress site. From what I can tell, the only thing you can do is ask Kinsta to exclude the ShopWP pages from their caching system.

You should be able to ask them to exclude any sub page of your main `/products` page. That should act as a catch all.

You can reach out to their support team to do this: https://kinsta.com/kinsta-support/

## Known theme issues

Below are some of the currently unsupported themes:

- [Pro Photo 7](https://pro.photo) (Unsupported)
- [Sage](https://wpshop.io)

  - When using Sage with the Soil plugin, you must have the following edits made inside the `setup.php` file:

  ```php
    // Need to remove:
    // add_theme_support('soil-clean-up');

    // Need to add:
    add_theme_support('soil-js-to-footer');
  ```

## Incompatible plugins

Below are some of the currently unsupported plugins:

- [Async JavaScript](https://wordpress.org/plugins/async-javascript)
- [TheGem Theme Elements (for WPBakery)](https://codex-themes.com/thegem/)
- [qTranslate-XT](https://github.com/qtranslate/qtranslate-xt)

## Known plugin conflicts

- [WP Rocket](https://wp-rocket.me/):
  WP Rocket will attempt to to minify and merge the JavaScript from ShopWP. This will prevent ShopWP from loading properly. To fix this, you need to add ShopWP to the WP Rocket exclusion list.

  Within the File Optimization tab of WP Rocket, find the `Excludes` tab. [Learn more](https://docs.wp-rocket.me/article/54-exclude-pages-from-the-cache)

- [WP-Optimize](https://wordpress.org/plugins/wp-optimize/):
  WP-Optimize will try to minify and merge the JavaScript from the plugin. You'll need to manually exclude the plugin's JavaScript from this process since ShopWP already optimizes things. You can [follow this guide](https://getwpo.com/faqs/#How-do-I-exclude-individual-JavaScript-scripts-from-being-minified-and-merged-).

- [OptimizeBuilder](https://www.optimizepress.com/):
  If you're using the OptimizeBuilder plugin from OptimizePress, you'll need to manually "enable" the ShopWP JavaScript and CSS. OptimizeBuilder turns these off by default. To do this, open the OptimizeBuilder plugin settings and go to the scripts and styles tab. From there, find the ShopWP plugin and enable `Js` and `Css` for both the frontend and backend. Then click save.

- [TheGem Theme Elements (for WPBakery)](https://codex-themes.com/thegem/):
  This plugin uses a WordPress filter called `nonce_life`, and sets it to 1 year. This causes all ShopWP REST Endpoints to fail with a 403 error. To fix, open the plugin and comment out the below function:

  ```php
  function thegem_nonce_life() {
    return 31536000;
  }

  add_filter('nonce_life', 'thegem_nonce_life');
  ```

- [GeotargetingWP](https://geotargetingwp.com/)
  This plugin can sometimes prevent the ShopWP products (and cart) from "functioning". Meaning, it will render products but clicking on them will do nothing.

  The main culprit seems to be [Geotargeting's AJAX mode](https://geotargetingwp.com/docs/geotargetingwp/ajax-mode#ajax-mode). Try turning this off first.

  In case you need to turn it back on, you'll need to run a little piece of ShopWP JavaScript to "render" the products. This piece of code will run after Geotargeting loads.

  Geotrageting provides a callback function that you can use.

  ```js
  $(document).on('geotwp_ajax_success', function (e, data) {
  	wp.hooks.doAction('do.shopRender')
  })
  ```

- Caching plugins:
  If you're using a WordPress caching plugin, you may run into a JavaScript error that looks like this:

  ```js
  403 Error: Cookie check failed
  ```

  This happens if a caching plugin caches the WordPress REST API too aggressively. You can either try deactivating the caching plugin altogether, or adjust the settings so the plugin doesn't cache the WordPress REST API at all.
