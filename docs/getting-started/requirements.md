---
sidebar_position: 5
---

# Requirements

WordPress powers over [40% of all websites and over 65%](https://w3techs.com/technologies/details/cm-wordpress/all/all) of all CMS platforms today.

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

- [Async JavaScript](https://wordpress.org/plugins/async-javascript)

