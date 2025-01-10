# Yoast Customizations

## Customize the Yoast meta title/description on default ShopWP products listing page

You'll want to add the below PHP code into your WordPress child theme.

```php
add_filter('wpseo_title', function ($title) {

    if (is_post_type_archive('wps_products')) {
        $title = 'Custom Yoast page title for ShopWP PLP page  - Your Website Name';
    }

    return $title;

});

add_filter('wpseo_metadesc', function ($description) {

    if (is_post_type_archive('wps_products')) {
        $description = 'This is a custom Yoast meta description for the ShopWP PLP page';
    }

    return $description;

});
```
