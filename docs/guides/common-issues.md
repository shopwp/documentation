# Common Issues

Below are the most common issues people experience with ShopWP and how to fix them. If you're having a problem not listed here, please [send us an email](mailto:hello@wpshop.io).

## Products not showing

When your products are failing to show, it usually means that you need to assign them to the ShopWP sales channel. This sales channel is created automatically when you initially connect your store. It's used to control what products are visible in ShopWP. Below are the steps for assigning your products to the sales channel.

1. Open the product inside Shopify and look for the section called, "Sales channels and apps". Click the manage link.

![ShopWP Pro Common Issues 1](./assets/common-issues/visible-1.png)

2. Assign the product to the ShopWP sales channel and click "Done". Now head back to WordPress to see if the product shows up. Sometimes this can take 1-2 minutes.

![ShopWP Pro Common Issues 1](./assets/common-issues/visible-2.png)

## Checkout redirects to page not found

Issue: Clicking the "Begin checkout" button inside the ShopWP cart takes you to a page not found error.

This can occur if your Shopify online store is password protected. The solution is to remove the password protection so that the checkout page can be reached by non-logged in users.

## Cookie nonce expiration

When this JavaScript error shows, it's usually due to another plugin caching the WordPress REST API too aggressively. WordPress uses a [cookie nonce to authenticate the REST API](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/).

Try temporarily deactivating your other plugins and check again. You may also need to disable any host-level cache.

Another thing to look for is whether your website has a CDN enabled. If it does, try temporarily disabling this to see if the error goes away.

## Error: while calling undefined

When you receive this error, there's a good chance it's because your web server is running out of memory. Or it has hit the max execution time during the syncing process.

Both of these things can be increased by following the tutorials below:

[Tutorial: Increase the Max Execution Time](https://wpastra.com/docs/increase-php-time-limit-wordpress-sites)

[Tutorial: Increase the Memory Limit](https://wpastra.com/docs/increasing-php-memory-limit-website/)

## Error: Failed to assign Shopify ID 0

This error usually occurs because a previously failed sync. To fix, follow the below steps:

1. First, go to the Tools tab within the plugin settings and use the `Remove all synced data` button

2. Once that’s done, use the `Sync Product & Collection Detail Pages` button once more.

:::info
This will remove any custom fields applied to your product posts as well as any product post menu items.
:::

## Elementor widgets disappear after updating ShopWP

Run this sql query in your database to make your widgets appear again:

```msql
UPDATE wp_postmeta SET meta_value = replace( meta_value, 'wpshopify', 'shopwp' ) WHERE (CONVERT(`meta_id` USING utf8) LIKE '%wpshopify%' OR CONVERT(`post_id` USING utf8) LIKE '%wpshopify%' OR CONVERT(`meta_key` USING utf8) LIKE '%wpshopify%' OR CONVERT(`meta_value` USING utf8) LIKE '%wpshopify%') AND meta_key <> "_wp_attachment_metadata";
```

## Internal error. Looks like something went wrong on our end.

This error can sometimes happen if the product or collection in Shopify is saved incorrectly. The easiest fix is to open the product in Shopify and set it to `draft`. Then republish. After doing this check the WordPress site again.

## Update failed: Download failed. Unauthorized

Usually this error shows up when attempting to update the plugin. the main culprit is usually a license key issue.

If you see this error, open your ShopWP settings and find the `License` tab. From there, either add your ShopWP Pro license key, or remove it and add it back. This should solve the issue.

## ReferenceError: shopwp is not defined

![JavaScript error shopwp is not defined](./assets/common-issues/js-error-shopwp-not-defined.png)

This JavaScript error can can happen if a theme or plugin is preventing the ShopWP JavaScript from loading, or loading in the correct order. The first thing to do is check for a theme or plugin conflict.

Start by temporarily switching themes. Does the error go away?

If not, turn off all your other plugins besides ShopWP. Does the error go away?

Some users have also reported this error showing up due to the [Soil plugin](https://roots.io/products/soil/). If you're using this plugin, make sure you're on the latest version.

## <!DOCTYPE "... is not valid JSON

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

## Missing languages within the Pricing settings

If you're missing the "Currency" and "Language" dropdowns in the below screenshot, try logging out of WordPress and logging back in. The REST API nonce could very well be expired.

![ShopWP Pro Pricing Settings](./assets/common-issues/missing-langs.png)
