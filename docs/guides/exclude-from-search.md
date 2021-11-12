# Exclude from search

Exclude products from WordPress search:

```php
add_filter('wps_register_products_args', function($args) {

    $args['exclude_from_search'] = true;

    return $args;

});
```

Exclude collections from WordPress search:

```php
add_filter('wps_register_collections_args', function($args) {

    $args['exclude_from_search'] = true;

    return $args;

});
```
