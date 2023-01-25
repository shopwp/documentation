# Exclude from search

ShopWP allows you to exclude the product and collection detail pages from the native WordPress search results.

Simply add the below code snippets to your WordPress theme's `functions.php` file.

```php
add_filter('shopwp_register_products_args', function($args) {

    $args['exclude_from_search'] = true;

    return $args;

});
```

Exclude collections from WordPress search:

```php
add_filter('shopwp_register_collections_args', function($args) {

    $args['exclude_from_search'] = true;

    return $args;

});
```
