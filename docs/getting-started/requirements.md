---
sidebar_position: 5
---

# Requirements

WordPress powers over [42% of all websites and over 65%](https://w3techs.com/technologies/details/cm-wordpress/all/all) of all CMS platforms today.

Because so many people rely on WordPress, the core developers must take a fairly conservative approach when deciding which versions of PHP to support. While understandable, one of the drawbacks is leaving millions of sites running legacy versions of PHP. This creates pretty big security vulnerabilities for both site owners and users.

We believe that one of the best ways to make WordPress more secure is by requiring users to upgrade their systems as a prerequisite for using our plugin.

With this in mind, our minimum requirements for ShopWP are:

## Minimum Requirements

- PHP 5.6 or greater
- WordPress 5.0 or greater
- PHP `memory_limit` of `64MB` (256 MB if running into syncing timeout issues)
- PHP `max_execution_time` of `100` (300 if running into syncing timeout issues)
- Valid HTTPS certificate

## Incompatible Plugins

Below are some of the (currently) unsupported plugins:

- [Async JavaScript](https://wordpress.org/plugins/async-javascript)

## Plugin conflicts

- [WP-Optimize](https://wordpress.org/plugins/async-javascript)
  WP-Optimize will try to minify and merge the JavaScript from the plugin. You'll need to manually exclude the plugin's JavaScript from this process since ShopWP already optimizes things. You can [follow this guide](https://getwpo.com/faqs/#How-do-I-exclude-individual-JavaScript-scripts-from-being-minified-and-merged-).

- [OptimizeBuilder](https://www.optimizepress.com/)
  If you're using the OptimizeBuilder plugin from OptimizePress, you'll need to manually "enable" the ShopWP JavaScript and CSS. OptimizeBuilder turns these off by default. To do this, open the OptimizeBuilder plugin settings and go to the scripts and styles tab. From there, find the ShopWP plugin and enable `Js` and `Css` for both the frontend and backend. Then click save.
