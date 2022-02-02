# Fix SG Optimizer Conflict

The SG Optimizer plugin will attempt to modify the ShopWP JavaScript to improve performance. However, we can safely turn this off.

If you're using the SG Optimizer plugin because you're using [SiteGround web hosting](https://www.siteground.com/index.htm?afcode=6f709cddc22520adccecb68901d1eb80), you'll need to add a PHP snippet to your `functions.php` file to fix loading issues.

## Add snippet to functions.php

Open your `functions.php` file inside your WordPress theme and add the following:

```php
function shopwp_sg_exclude_handles($exclude_list) {

   $exclude_list[] = 'shopwp-runtime';
   $exclude_list[] = 'shopwp-vendors-public';
   $exclude_list[] = 'shopwp-public';

   return $exclude_list;
}

add_filter( 'sgo_js_minify_exclude', 'shopwp_sg_exclude_handles' );
add_filter( 'sgo_js_async_exclude', 'shopwp_sg_exclude_handles' );
add_filter( 'sgo_javascript_combine_exclude', 'shopwp_sg_exclude_handles' );
```
