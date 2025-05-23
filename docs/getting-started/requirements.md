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
- The WordPress REST API is turned on

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

The below plugins are not currently unsupported by ShopWP:

- [Async JavaScript](https://wordpress.org/plugins/async-javascript)
- [TheGem Theme Elements (for WPBakery)](https://codex-themes.com/thegem/)
- [qTranslate-XT](https://github.com/qtranslate/qtranslate-xt)
- [GTranslate version 2.9](https://wordpress.org/plugins/gtranslate/) (Update the Find and Replace section inside their admin to fix the REST URL issue)

## Known plugin conflicts

### WP Rocket

[WP Rocket](https://wp-rocket.me/) will attempt to to minify and merge the JavaScript from ShopWP. This will prevent ShopWP from loading properly. To fix this, you need to add ShopWP to the WP Rocket exclusion list.

Within the File Optimization tab of WP Rocket, find the [`Excludes`](https://docs.wp-rocket.me/article/54-exclude-pages-from-the-cache) tab.

Then add the below code

For all the JavaScript sections:

```php
/wp-content/plugins/shopwp-pro/dist/(.*).js
```

For all the CSS sections:

```php
/wp-content/plugins/shopwp-pro/dist/(.*).css
```

![WP Rocket settings for ShopWP](./assets/wp-rocket-settings.png).

It has also been shown that WP Rocket's "Lazy load" feature will conflict with ShopWP. Please turn that off as well.

### WP-Optimize

[WP-Optimize](https://wordpress.org/plugins/wp-optimize/) will try to minify and merge the JavaScript from the plugin. You'll need to manually exclude the plugin's JavaScript from this process since ShopWP already optimizes things. You can [follow this guide](https://getwpo.com/faqs/#How-do-I-exclude-individual-JavaScript-scripts-from-being-minified-and-merged-).

### LiteSpeed Cache

[LiteSpeed](https://wordpress.org/plugins/litespeed-cache/) will try to minify and merge the ShopWP JavaScript which causes loading issues and conflicts. You’ll need to manually exclude ShopWP’s JavaScript from this process. ShopWP comes optimized already so this is fine.

You can [follow this guide](https://thrivethemes.com/docs/configuring-the-css-and-javascript-exclusions-in-the-litespeed-cache-plugin).

Inside the WordPress admin, click `LiteSpeed Cache -> Page Optimization`. From there, click the `Tuning` tab.

Within the JavaScript section, add the following:

`/wp-content/plugins/shopwp-pro/dist/(.*).js`

That should do the

### OptimizeBuilder

If you're using the [OptimizeBuilder](https://www.optimizepress.com/) plugin from OptimizePress, you'll need to manually "enable" the ShopWP JavaScript and CSS. OptimizeBuilder turns these off by default. To do this, open the OptimizeBuilder plugin settings and go to the scripts and styles tab. From there, find the ShopWP plugin and enable `Js` and `Css` for both the frontend and backend. Then click save.

### WPCode Lite

There is a known issue in [WPCode Lite](https://wphive.com/plugins/insert-headers-and-footers/) that causes ShopWP to disappear completely when this plugin is installed.

### TheGem Theme Elements

[TheGem Theme Elements](https://codex-themes.com/thegem/) uses a WordPress filter called `nonce_life`, and sets it to 1 year. This causes all ShopWP REST Endpoints to fail with a 403 error. To fix, open the plugin and comment out the below function:

```php
function thegem_nonce_life() {
  return 31536000;
}

add_filter('nonce_life', 'thegem_nonce_life');
```

### GeotargetingWP

[GeotargetingWP](https://geotargetingwp.com/) can sometimes prevent the ShopWP products (and cart) from "functioning". Meaning, it will render products but clicking on them will do nothing.

The main culprit seems to be [Geotargeting's AJAX mode](https://geotargetingwp.com/docs/geotargetingwp/ajax-mode#ajax-mode). Try turning this off first.

In case you need to turn it back on, you'll need to run a little piece of ShopWP JavaScript to "render" the products. This piece of code will run after Geotargeting loads.

Geotrageting provides a callback function that you can use.

```js
$(document).on('geotwp_ajax_success', function (e, data) {
	wp.hooks.doAction('do.shopRender')
})
```

### Speed Optimizer

The Speed Optimizer plugin by Siteground is known to conflict with ShopWP's JavaScript files. Activating the plugin will prevent the products from displaying on the front-end.

To fix this, you need to open the Speed Optimizer Front-end settings and exclude ShopWP from both CSS and JavaScript optimizations. See screenshot below.

![Speed Optimizer exclude settings for ShopWP](./assets/speed-optimizer-exclude.jpg)

### Caching plugins

If you're using a WordPress caching plugin, you may run into a JavaScript error that looks like this:

```js
403 Error: Cookie check failed
```

This happens if a caching plugin caches the WordPress REST API too aggressively. You can either try deactivating the caching plugin altogether, or adjust the settings so the plugin doesn't cache the WordPress REST API at all.

## Cloudflare

There is a known conflict when Rocket Loader is enabled within Cloudflare. This will cause the ShopWP components to be duplicated on the front-end. The solution is to exclude Rocket Loader on the pages where you display products. See screenshot below.

![Rocket Loader settings for ShopWP](./assets/rocket-loader.png)
